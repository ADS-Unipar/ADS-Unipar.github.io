---
marp: true
theme: default
paginate: false

style: |
  section {
    font-family: 'Calibri', 'Century Gothic', sans-serif;
    font-size: 26px;
    text-align: justify;
    color: #272425;
    background-image: url('bg-padrao.png');
    background-size: cover;
    background-position: center;
  }
  h1 {
    font-family: 'Century Gothic', 'Calibri', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #272425;
    text-align: left;
  }
  h2 {
    font-family: 'Century Gothic', 'Calibri', sans-serif;
    font-size: 29px;
    font-weight: bold;
    color: #C22820;
    text-align: left;
  }
  h3 {
    font-family: 'Calibri', 'Century Gothic', sans-serif;
    font-size: 26px;
    font-weight: bold;
    color: #5C2034;
    text-align: left;
  }
  strong {
    color: #C22820;
  }
  em {
    color: #5C2034;
  }
  code {
    font-size: 22px;
    background-color: #f5f5f5;
    color: #5C2034;
  }
  pre {
    font-size: 20px;
    background-color: #f5f5f5;
    border-left: 4px solid #C22820;
  }
  table {
    font-size: 24px;
  }
  th {
    background-color: #C22820;
    color: #ffffff;
    font-weight: bold;
  }
  td {
    border-bottom: 1px solid #e0e0e0;
  }
  ul, ol {
    text-align: justify;
  }
  li {
    margin-bottom: 6px;
  }
  blockquote {
    border-left: 4px solid #EB8087;
    background-color: #fdf2f2;
    padding: 10px 20px;
  }
  footer {
    font-size: 16px;
    color: #999999;
  }
  header {
    font-size: 16px;
    color: #999999;
  }
  section.bg-capa {
    background-image: url('bg-capa.png');
    background-size: cover;
    background-position: center;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  section.bg-capa h1 {
    text-align: center;
    font-size: 32px;
    color: #ffffff;
  }
  section.bg-capa h2 {
    text-align: center;
    font-size: 29px;
    color: #ffffff;
  }
  section.aula-titulo {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  section.aula-titulo h1 {
    text-align: center;
    font-size: 32px;
    color: #C22820;
  }
  section.bg-fim {
    background-image: url('bg-fim.png');
    background-size: cover;
    background-position: center;
  }
---

<!-- _class: bg-capa -->

# Aula 06

## Boas Práticas em Front-End e Back-End

**Unidade 1 — Back-End e Front-End**

<!--
FALA DO PROFESSOR:

Nas aulas anteriores, estudamos os fundamentos do desenvolvimento web: Front-End, Back-End, HTTP, APIs e AJAX. Agora vamos consolidar algo que acompanha todas essas tecnologias: as boas práticas.

Saber programar é necessário, mas não é suficiente. Um desenvolvedor profissional não apenas faz o código funcionar — ele faz o código ser legível, manutenível, seguro e escalável. É isso que diferencia um iniciante de um profissional.

Nesta aula, vamos estudar as boas práticas mais importantes para Front-End e Back-End. Práticas que você deve adotar desde o primeiro dia de desenvolvimento.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Identificar** as principais boas práticas de Front-End;
- **Identificar** as principais boas práticas de Back-End;
- **Aplicar** convenções de nomenclatura e organização de código;
- **Avaliar** a qualidade de um código segundo critérios profissionais;
- **Comparar** código bem escrito com código mal escrito.

**Taxonomia de Bloom:** Identificar, Aplicar, Avaliar, Comparar.

<!--
FALA DO PROFESSOR:

Observe os verbos "avaliar" e "comparar". Esses são níveis cognitivos mais altos. Não basta saber quais são as boas práticas — é preciso ser capaz de julgar se um código as segue ou não, e comparar duas abordagens para decidir qual é melhor.

Essa capacidade de avaliar e comparar é o que diferencia um desenvolvedor que apenas segue tutoriais de um desenvolvedor que toma decisões técnicas conscientes.
-->

---

## Por que Boas Práticas Importam?

- Código é **lido** muito mais vezes do que é **escrito**;
- Equipes trabalham **colaborativamente** — código precisa ser compreensível;
- Manutenção consome **mais tempo** do que desenvolvimento inicial;
- Código mal escrito **custa dinheiro** e **tempo**;
- Boas práticas **reduzem bugs** e **facilitam depuração**.

> **Dado real:** Estudos indicam que ~70% do tempo de um desenvolvedor é gasto **lendo** código, não escrevendo.

<!--
FALA DO PROFESSOR:

Por que nos preocupamos com boas práticas? Afinal, se o código funciona, não é o suficiente?

Não. Código que apenas funciona é código que vai causar problemas no futuro. Vamos entender por quê.

Primeiro: código é lido muito mais vezes do que é escrito. Você escreve uma função uma vez, mas ela será lida por você mesmo, por colegas de equipe, por revisores de código e por desenvolvedores que entrarão no projeto meses ou anos depois. Se o código não for legível, cada leitura será uma perda de tempo.

Segundo: equipes trabalham colaborativamente. Se você escreve código de forma pessoal e obscura, seus colegas não conseguirão entender. Isso gera retrabalho, dúvidas e conflitos.

Terceiro: manutenção consome mais tempo do que desenvolvimento inicial. Um software vive por anos. A maior parte do tempo é gasta corrigindo bugs, adicionando funcionalidades e adaptando a novos requisitos. Código mal escrito torna essa tarefa dolorosa.

Quarto: código mal escrito custa dinheiro. Horas de depuração, bugs em produção, lentidão para adicionar funcionalidades — tudo isso tem custo financeiro.

Quinto: boas práticas reduzem bugs. Código organizado e limpo é mais fácil de testar, mais fácil de depurar e menos propenso a erros.
-->

---

## Boas Práticas — Front-End

| Prática | Descrição |
|---------|-----------|
| **HTML semântico** | Usar tags que comunicam significado |
| **Separação de responsabilidades** | HTML para estrutura, CSS para estilo, JS para comportamento |
| **Nomes descritivos** | Classes, IDs e variáveis com nomes claros |
| **Mobile First** | Projetar primeiro para mobile, depois para desktop |
| **Acessibilidade** | ARIA labels, contraste, navegação por teclado |
| **Performance** | Otimizar imagens, minificar CSS/JS, lazy loading |

<!--
FALA DO PROFESSOR:

Vamos começar pelas boas práticas de Front-End.

HTML semântico: use header, nav, main, section, article, footer em vez de div para tudo. Tags semânticas comunicam significado — para o navegador, para mecanismos de busca e para leitores de tela.

Separação de responsabilidades: não misture HTML, CSS e JavaScript no mesmo arquivo. HTML define estrutura, CSS define aparência, JavaScript define comportamento. Quando você mistura, o código se torna difícil de manter.

Nomes descritivos: em vez de class="x" ou id="div1", use class="card-produto" ou id="formulario-cadastro". Nomes descritivos tornam o código autoexplicativo.

Mobile First: projete primeiro para telas pequenas e depois adapte para telas grandes. Isso garante que a aplicação funcione bem em dispositivos móveis, que são a maioria dos acessos hoje.

Acessibilidade: use atributos ARIA (aria-label, role), garanta contraste suficiente entre texto e fundo, permita navegação por teclado. Acessibilidade não é opcional — é obrigação legal e ética.

Performance: otimize imagens (use formatos modernos como WebP), minifique CSS e JavaScript, use lazy loading para carregar recursos apenas quando necessário.
-->

---

## Boas Práticas — Back-End

| Prática | Descrição |
|---------|-----------|
| **Separação de responsabilidades** | Router, Controller, Service, Repository |
| **Validação de dados** | Sempre validar no servidor, nunca confiar no cliente |
| **Tratamento de erros** | try/catch, middlewares de erro, mensagens claras |
| **Variáveis de ambiente** | Nunca hardcodar senhas, chaves ou URLs |
| **Versionamento de API** | /api/v1/usuarios, /api/v2/usuarios |
| **Logging** | Registrar eventos importantes para depuração |

<!--
FALA DO PROFESSOR:

As boas práticas de Back-End são igualmente importantes.

Separação de responsabilidades: o código do Back-End deve ser organizado em camadas. Router define as rotas. Controller recebe a requisição e devolve a resposta. Service contém a lógica de negócio. Repository acessa o banco de dados. Essa separação facilita testes, manutenção e escalabilidade.

Validação de dados: nunca confie nos dados enviados pelo cliente. O Front-End pode ser contornado — qualquer pessoa pode enviar uma requisição HTTP diretamente. O Back-End deve validar todos os dados: tipos, formatos, tamanhos, obrigatoriedade.

Tratamento de erros: use try/catch em operações que podem falhar (acesso a banco, leitura de arquivo, chamada externa). Crie middlewares centralizados de tratamento de erro. Nunca exponha detalhes internos nas mensagens de erro.

Variáveis de ambiente: senhas de banco de dados, chaves de API, tokens secretos — tudo isso deve ficar em variáveis de ambiente (arquivo .env), nunca no código-fonte. Se você commitar uma senha no Git, ela pode ser encontrada por qualquer pessoa com acesso ao repositório.

Versionamento de API: quando você precisa fazer mudanças incompatíveis na API, crie uma nova versão (/api/v2/) em vez de quebrar a versão existente. Isso permite que clientes antigos continuem funcionando.

Logging: registre eventos importantes — requisições recebidas, erros ocorridos, ações de usuários. Logs são essenciais para depuração e auditoria.
-->

---

## Organização de Projeto

```
projeto/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── assets/
│       └── images/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── usuarios.js
│   ├── controllers/
│   │   └── usuarioController.js
│   ├── services/
│   │   └── usuarioService.js
│   └── repositories/
│       └── usuarioRepository.js
│
├── .env
├── .gitignore
└── README.md
```

<!--
FALA DO PROFESSOR:

A organização do projeto é uma das boas práticas mais visíveis. Um projeto bem organizado é fácil de navegar — qualquer desenvolvedor consegue encontrar o que precisa em poucos segundos.

Observe a estrutura. Temos duas pastas principais: frontend e backend. Isso separa claramente as duas camadas.

No frontend, temos o HTML na raiz, CSS e JS em pastas separadas, e uma pasta de assets para imagens e outros recursos.

No backend, temos o server.js como ponto de entrada, e pastas separadas para routes, controllers, services e repositories. Essa organização segue o padrão de separação de responsabilidades.

O arquivo .env contém variáveis de ambiente (senhas, chaves, URLs). O .gitignore lista arquivos que não devem ser versionados (node_modules, .env). O README.md documenta o projeto — como instalar, como rodar, quais tecnologias foram utilizadas.

Essa estrutura não é obrigatória, mas é uma convenção amplamente adotada. Quando você entra em um projeto organizado assim, sabe exatamente onde procurar cada coisa.
-->

---

## Código Limpo vs. Código Sujo

**Código sujo:**
```javascript
function x(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].s === b) c.push(a[i]);
  }
  return c;
}
```

---
## Código Limpo vs. Código Sujo

**Código limpo:**
```javascript
function filtrarUsuariosPorStatus(usuarios, status) {
  return usuarios.filter(usuario => usuario.status === status);
}
```
- Nomes **descritivos**;
- Funções **pequenas** e **focadas**;
- Código **autoexplicativo**.

<!--
FALA DO PROFESSOR:

Vamos comparar dois trechos de código que fazem exatamente a mesma coisa.

O primeiro código é "sujo". A função se chama "x", os parâmetros são "a" e "b", a variável é "c". Sem olhar o corpo da função, é impossível saber o que ela faz. O loop é manual, usando índice, quando poderia usar métodos de array mais expressivos.

O segundo código é "limpo". A função se chama "filtrarUsuariosPorStatus". Os parâmetros são "usuarios" e "status". O corpo usa o método filter, que é autoexplicativo: filtra os usuários cujo status corresponde ao parâmetro.

Ambos produzem o resultado. Mas o segundo é infinitamente mais legível. Quando você ou um colega abrir esse arquivo daqui a seis meses, o segundo código será compreensível em segundos. O primeiro exigirá análise cuidadosa.

Princípios de código limpo:
- Nomes descritivos para funções, variáveis e parâmetros;
- Funções pequenas — idealmente, cada função faz uma coisa;
- Evitar comentários desnecessários — o código deve ser autoexplicativo;
- Evitar repetição — se você copiou e colou código, refatore;
- Consistência — use o mesmo padrão em todo o projeto.
-->

---

## Erros Comuns de Iniciantes

| Erro | Impacto | Correção |
|------|---------|----------|
| Usar `div` para tudo | Semântica ruim, acessibilidade comprometida | Usar tags semânticas |
| Misturar HTML, CSS e JS | Código difícil de manter | Separar em arquivos |
| Hardcodar valores | Inflexibilidade | Usar variáveis de ambiente |
| Ignorar erros do fetch | Bugs silenciosos | Tratar todos os erros |
| Não validar dados no servidor | Falha de segurança | Validar sempre no Back-End |
| Commitar `.env` no Git | Credenciais expostas | Usar .gitignore |

<!--
FALA DO PROFESSOR:

Vamos revisar os erros mais comuns que desenvolvedores iniciantes cometem. Se você comete algum deles, não se preocupe — o importante é reconhecer e corrigir.

O primeiro erro é usar div para tudo. Isso compromete a semântica e a acessibilidade. Use header, nav, main, section, article, footer.

O segundo erro é misturar HTML, CSS e JavaScript no mesmo arquivo. Isso torna o código difícil de manter. Separe em arquivos distintos.

O terceiro erro é hardcodar valores — como URLs de banco de dados, chaves de API ou senhas diretamente no código. Use variáveis de ambiente.

O quarto erro é ignorar erros do fetch. Se o servidor retornar um erro 500 e você não tratar, a aplicação vai "quebrar" silenciosamente.

O quinto erro é não validar dados no servidor. O Front-End pode ser contornado. O Back-End deve ser o último bastião de validação.

O sexto erro é commitar o arquivo .env no Git. Se você fizer isso, suas credenciais ficarão expostas no histórico do repositório. Sempre adicione .env ao .gitignore.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Código é **lido** mais do que escrito — priorize legibilidade;
2. **Separação de responsabilidades** é fundamental em Front-End e Back-End;
3. **Validação** deve acontecer em ambas as camadas, mas o servidor é o último bastião;
4. **Organização de projeto** facilita navegação e manutenção;
5. **Código limpo** é código que outros desenvolvedores conseguem entender.

**Pergunta reflexiva:**

> Se você fosse entrar em um projeto existente, o que olharia primeiro para avaliar a qualidade do código?

**Próxima aula:** Aula ao vivo — Integração Front-End + Back-End + API — Vamos colocar tudo em prática!

<!--
FALA DO PROFESSOR:

Encerramos a última aula gravada da Unidade 1. Revise os cinco conceitos principais e reflita sobre a pergunta: o que você olharia primeiro para avaliar a qualidade de um projeto?

Respostas possíveis: a organização de pastas, a qualidade dos nomes, a presença de tratamento de erros, a existência de README, a ausência de credenciais no código. Tudo isso são indicadores de qualidade.

Na próxima aula — a aula ao vivo — vamos integrar tudo o que estudamos. Vamos construir uma aplicação completa, do zero, com Front-End e Back-End comunicando-se via API. Prepare o ambiente e participe!
-->

---

<!-- _class: bg-fim -->

#
