const fs = require('fs').promises;
const path = require('path');

const gerarListaDeArquivos = async (diretorio) => {
  try {
    const files = await fs.readdir(diretorio);
    return files
      .filter((file) => file.endsWith('.html'))
      .map((file) => {
        const nomeArquivo = file.replace('.html', '').split('-').join(' ');
        const url = path.join(diretorio, file);
        return `<li><a href="${url}">${nomeArquivo}</a></li>`;
      })
      .join('</br>');
  } catch (error) {
    console.error(`Erro ao ler o diretório ${diretorio}:`, error);
    return '';
  }
};

const gerarSectionHTML = async (titulo, diretorio) => {
  const listaDeArquivos = await gerarListaDeArquivos(diretorio);
  return `
    <section>
        <h2>${titulo}</h2>
        <ul id="aulas-${titulo.toLowerCase().replace(/\s+/g, '-')}" >
        ${listaDeArquivos}
        </ul>
    </section>
  `;
};

const gerarTemplateHTML = async (sections) => {
  try {
    const sectionsHTML = await Promise.all(
      sections.map(({ titulo, diretorio }) =>
        gerarSectionHTML(titulo, diretorio)
      )
    );

    const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ADS</title>
    <link href="./style.css" rel="stylesheet"/>
</head>
<body>
<h1>Aulas</h1>
    ${sectionsHTML.join('\n')}
</body>
</html>`;

    await fs.writeFile('./index.html', template);
    console.log('Arquivo HTML gerado com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar o arquivo HTML:', error);
  }
};

// Exemplo de uso
const sections = [
  { titulo: 'Aulas Testes (6°)', diretorio: './teste/aulas' },
  { titulo: 'Frameworks (6°)', diretorio: './frameworks/aulas' },
  { titulo: 'Design Frontend (2°)', diretorio: './frontend/aulas' },
  { titulo: 'Aulas Testes (2°)', diretorio: './teste1/aulas' },
];

gerarTemplateHTML(sections);
