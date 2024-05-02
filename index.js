const aulasWeb = './web/aulas';
const aulasDesktop = './desktop/aulas';
const fs = require('fs');

const gera_aulas = function () {
  fs.readdir(aulasWeb, (err, filesWeb) => {
    fs.readdir(aulasDesktop, (err, filesDesktop) => {
      let template = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ADS 5º Período </title>
            <link href="./style.css" rel="stylesheet"/>
        </head>
        <body>
            <section>
                <h1>Aulas 5º Período</h1>
                <h2>Aulas WEB </h2>
                <ul id="aulas-web">
                ${filesWeb
                  .filter((file) => file.includes('.html'))
                  .reduce(
                    (prev, curr) =>
                      (prev += `<li><a href="/web/aulas/${curr}">${curr.replace(
                        '.html',
                        ''
                      )}</a></li></br>`),
                    ''
                  )}
                </ul>
                <h2>Aulas Desktop</h2>
                <ul id="aulas-desktop">
                    ${filesDesktop
                      .filter((file) => file.includes('.html'))
                      .reduce(
                        (prev, curr) =>
                          (prev += `<li><a href="/desktop/aulas/${curr}">${curr.replace(
                            '.html',
                            ''
                          )}</a></li></br>`),
                        ''
                      )}
                </ul>
            </section>
        </body>
        </html>`;
      fs.writeFileSync('./index.html', template);
    });
  });
};

gera_aulas();
