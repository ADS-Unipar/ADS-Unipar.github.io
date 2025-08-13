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
        return `<li class="mb-2"><a class="text-blue-600 hover:underline" href="${url}">${nomeArquivo}</a></li>`;
      })
      .join('');
  } catch (error) {
    console.error(`Erro ao ler o diretório ${diretorio}:`, error);
    return '';
  }
};

const gerarSectionHTML = async (titulo, diretorio) => {
  const listaDeArquivos = await gerarListaDeArquivos(diretorio);
  return `
    <section class="mb-8 bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-semibold mb-4">${titulo}</h2>
        <ul id="aulas-${titulo.toLowerCase().replace(/\s+/g, '-')}" class="list-disc pl-5">
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
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-100 min-h-screen">
  <div class="container mx-auto py-10">
    <h1 class="text-4xl font-bold mb-10 text-center text-gray-800">Aulas</h1>
    ${sectionsHTML.join('\n')}
  </div>
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
  { titulo: 'FRAMEWORKS DE DESENVOLVIMENTO (6º) ', diretorio: './frameworks/aulas' },
  { titulo: 'Desenvolvimento FrontEnd (4°)', diretorio: './frontend2/aulas' },
  { titulo: 'TESTE DE SOFTWARE (6°)', diretorio: './teste/aulas' },
  { titulo: 'Design Frontend (2°) ', diretorio: './frontend/aulas' },
  { titulo: 'Desenvolvimento BackEnd (4°)', diretorio: './backend/aulas' },
];

gerarTemplateHTML(sections);
