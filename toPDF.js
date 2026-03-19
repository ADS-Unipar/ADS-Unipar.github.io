#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = process.cwd();

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
    if (fs.existsSync(outputPath)) {
      console.log(`○ PDF já existe, pulando geração: ${outputPath}`);
      return;
    }
    
    console.log(`Gerando PDF: ${mdFilePath} -> ${outputPath}`);
    
    const command = `npx @marp-team/marp-cli@latest "${mdFilePath}" -o "${outputPath}"`;
    execSync(command, { stdio: 'inherit' });
    
    console.log(`✓ PDF gerado com sucesso: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Erro ao gerar PDF para ${mdFilePath}:`, error.message);
  }
}

walkDir(rootDir);
console.log('Processamento concluído!');
