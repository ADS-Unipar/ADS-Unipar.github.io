const aulasTest = './teste/aulas';
const fs = require('fs');

const gera_aulas = function () {
  fs.readdir(aulasTest, (err, filesTeste) => {
    let template = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ADS 6º Período </title>
            <link href="./style.css" rel="stylesheet"/>
        </head>
        <body>
            <section>
                <h1>Aulas 6º Período</h1>
                <h2>Aulas Testes </h2>
                <ul id="aulas-web">
                ${filesTeste
                  .filter((file) => file.includes('.html'))
                  .reduce(
                    (prev, curr) =>
                      (prev += `<li><a href="/teste/aulas/${curr}">${curr
                        .replace('.html', '')
                        .split('-')
                        .join(' ')}</a></li></br>`),
                    ''
                  )}
                </ul>
                
            </section>
        </body>
        </html>`;
    fs.writeFileSync('./index.html', template);
  });
};

gera_aulas();
