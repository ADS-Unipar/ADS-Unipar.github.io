#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = process.cwd();

// Uso:
//   node toPDF.js                         → processa todos os .md a partir da pasta atual
//   node toPDF.js -f caminho/arquivo.md   → processa apenas o arquivo (ou pasta) informado
//   node toPDF.js -f a.md -f pasta/       → aceita vários alvos
//   node toPDF.js -f a.md --force         → regera mesmo se o PDF já existir
const args = process.argv.slice(2);
const targets = [];
let force = false;

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--file' || arg === '-f') {
    if (!args[i + 1]) {
      console.error('✗ Informe o caminho após --file/-f');
      process.exit(1);
    }
    targets.push(args[++i]);
  } else if (arg.startsWith('--file=')) {
    targets.push(arg.slice('--file='.length));
  } else if (arg === '--force') {
    force = true;
  } else if (arg === '--help' || arg === '-h') {
    console.log('Uso: node toPDF.js [-f <arquivo.md|pasta>]... [--force]');
    process.exit(0);
  } else {
    console.error(`✗ Argumento desconhecido: ${arg}`);
    process.exit(1);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (path.extname(file) === '.md') {
      generatePDF(fullPath);
    }
  });
}

function generatePDF(mdFilePath) {
  try {
    const dir = path.dirname(mdFilePath);
    const baseName = path.basename(mdFilePath, '.md');
    const outputPath = path.join(dir, `${baseName}.pdf`);
    
    // Verifica se o PDF já existe
    if (!force && fs.existsSync(outputPath)) {
      console.log(`○ PDF já existe, pulando geração: ${outputPath}`);
      return;
    }
    
    console.log(`Gerando PDF: ${mdFilePath} -> ${outputPath}`);
    
    const command = `npx @marp-team/marp-cli@latest "${mdFilePath}" --html --allow-local-files -o "${outputPath}"`;
    execSync(command, { stdio: 'inherit' });
    
    console.log(`✓ PDF gerado com sucesso: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Erro ao gerar PDF para ${mdFilePath}:`, error.message);
  }
}

if (targets.length === 0) {
  walkDir(rootDir);
} else {
  targets.forEach(target => {
    const fullPath = path.resolve(rootDir, target);
    if (!fs.existsSync(fullPath)) {
      console.error(`✗ Caminho não encontrado: ${fullPath}`);
      return;
    }
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (path.extname(fullPath) === '.md') {
      generatePDF(fullPath);
    } else {
      console.error(`✗ Não é um arquivo .md: ${fullPath}`);
    }
  });
}
console.log('Processamento concluído!');
