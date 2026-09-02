# Roteiro de Atividade de Aprendizagem – Atividade Prática Orientada (APO)

**Disciplina:** Desenvolvimento de Software (Back-End/Front-End)

**Atividade:** Atividade Prática Orientada (APO)

**Temática:** Construção de uma aplicação web CRUD com Front-End (HTML, CSS, JavaScript) e Back-End (Node.js), utilizando requisições AJAX para comunicação cliente-servidor.

**Professor:** Allan da Silva

---

## 1 Contextualização

### a) Conteúdos/tópicos abordados

Esta atividade aborda os seguintes conteúdos estudados na Unidade 1 da disciplina:

- **Desenvolvimento Web Full Stack:** conceitos de Front-End e Back-End, arquitetura cliente-servidor e comunicação via protocolo HTTP;
- **HTML e CSS:** estruturação semântica de páginas web, estilização com CSS, criação de formulários para entrada de dados;
- **JavaScript:** manipulação do DOM, eventos, funções assíncronas e consumo de APIs;
- **Node.js e Express:** criação de um servidor back-end, definição de rotas REST, middlewares e respostas em JSON;
- **AJAX com fetch():** requisições assíncronas (GET, POST, PUT, DELETE) para comunicação com a API sem recarregar a página;
- **CRUD (Create, Read, Update, Delete):** operações fundamentais de persistência de dados em memória;
- **Boas práticas:** separação de responsabilidades, organização de código, validação e tratamento de erros.

### b) Estratégia de ensino adotada

A estratégia de ensino baseia-se na **aprendizagem baseada em projetos (Project-Based Learning)**, aliada à lógica do **Estudo Dirigido**. O aluno será conduzido, passo a passo, pela construção incremental de uma aplicação web completa, partindo da configuração do ambiente de desenvolvimento até a integração completa entre Front-End e Back-End. Cada etapa representa um nível crescente de complexidade, permitindo que o aluno aplique os conceitos teóricos estudados nas aulas em um cenário prático e real.

### c) Objetivos educacionais para @ alun@

- Compreender o fluxo completo de uma aplicação web, desde a requisição do usuário até a resposta do servidor;
- Desenvolver uma aplicação Front-End funcional com HTML, CSS e JavaScript;
- Implementar um servidor Back-End com Node.js e Express, expondo uma API REST;
- Consumir a API por meio de requisições AJAX utilizando a API `fetch()`;
- Implementar as operações CRUD (criar, listar, atualizar e excluir registros);
- Aplicar boas práticas de organização, validação e tratamento de erros.

### d) Competências e habilidades desenvolvidas

- **Competência 1:** Desenvolver aplicações web integrando Front-End e Back-End;
- **Competência 2:** Projetar e implementar APIs RESTful seguindo padrões HTTP;
- **Competência 3:** Utilizar JavaScript assíncrono para comunicação cliente-servidor;
- **Competência 4:** Aplicar boas práticas de desenvolvimento, incluindo organização de código, validação de dados e tratamento de erros;
- **Competência 5:** Resolver problemas de forma incremental, decompondo uma aplicação complexa em etapas gerenciáveis.

---

## 2 Etapas e roteiro da atividade

### Texto base

Uma pequena empresa de tecnologia contratou você para desenvolver um **sistema de gerenciamento de usuários**. O sistema deve permitir que o administrador realize as operações básicas de **cadastro, listagem, edição e exclusão** de usuários. A aplicação deve ter uma interface web amigável (Front-End) que se comunique com um servidor (Back--end) por meio de requisições AJAX, sem recarregar a página.

O sistema deve gerenciar os seguintes dados de cada usuário:

| Campo   | Tipo   | Descrição                                    |
| ------- | ------ | -------------------------------------------- |
| `id`    | Número | Identificador único (gerado automaticamente) |
| `nome`  | Texto  | Nome completo do usuário                     |
| `email` | Texto  | E-mail do usuário                            |
| `idade` | Número | Idade do usuário                             |

---

### Etapa 1 — Configuração do ambiente e criação do servidor Back-End

**Objetivo educacional:** _Lembrar e Compreender_ — configurar o ambiente de desenvolvimento e criar um servidor HTTP com Node.js e Express, entendendo o papel do Back-End na arquitetura cliente-servidor.

**O que deve ser feito:**

1. Crie uma pasta chamada `crud-usuarios` para o projeto;
2. Inicialize o projeto com `npm init -y`;
3. Instale o Express: `npm install express`;
4. Crie o arquivo `server.js` com as seguintes configurações:
   - Importar o Express;
   - Criar a aplicação com `express()`;
   - Configurar o middleware para interpretar JSON: `app.use(express.json())`;
   - Configurar o Express para servir arquivos estáticos da pasta `public`: `app.use(express.static('public'))`;
   - Criar um array em memória para armazenar os usuários (simulando um banco de dados);
   - Definir a porta do servidor (ex: 3000);
5. Crie as **rotas da API REST** para o recurso `/api/usuarios`:

| Método | Rota                | Ação      | Descrição                                 |
| ------ | ------------------- | --------- | ----------------------------------------- |
| GET    | `/api/usuarios`     | Listar    | Retorna todos os usuários cadastrados     |
| GET    | `/api/usuarios/:id` | Buscar    | Retorna um usuário específico pelo ID     |
| POST   | `/api/usuarios`     | Criar     | Cadastra um novo usuário                  |
| PUT    | `/api/usuarios/:id` | Atualizar | Atualiza os dados de um usuário existente |
| DELETE | `/api/usuarios/:id` | Excluir   | Remove um usuário pelo ID                 |

6. Teste o servidor executando `node server.js` e verifique no navegador se a mensagem de status é exibida ao acessar `http://localhost:3000`.

**Como deve ser feito:**

- Crie o arquivo `server.js` seguindo a estrutura descrita acima, implementando todas as rotas com os métodos HTTP corretos;
- Utilize `express.json()` como middleware para interpretar o corpo das requisições em JSON;
- Utilize `express.static('public')` para servir os arquivos do Front-End;
- Armazene os usuários em um array em memória, com ID gerado automaticamente;
- Implemente validações: retorne status `400` para dados incompletos e `404` para usuários não encontrados;
- Crie a pasta `public/` dentro do projeto (ela será utilizada na Etapa 2);
- Teste cada rota utilizando o navegador ou uma ferramenta como o **Thunder Client** (extensão do VS Code) ou **Postman**.

---

### Etapa 2 — Construção do Front-End com HTML e CSS

**Objetivo educacional:** _Aplicar_ — desenvolver a interface visual da aplicação, estruturando o conteúdo com HTML semântico e estilizando com CSS, garantindo responsividade e usabilidade.

**O que deve ser feito:**

1. Dentro da pasta `public/`, crie o arquivo `index.html` com a seguinte estrutura:
   - Um **cabeçalho** com o título do sistema;
   - Um **formulário** para cadastro/edição de usuários com os campos: Nome, E-mail e Idade, além de um botão de envio;
   - Uma **tabela** para exibir a lista de usuários cadastrados, com colunas para ID, Nome, E-mail, Idade e Ações (botões de editar e excluir);
   - Uma **área de mensagens** para exibir feedback ao usuário (sucesso ou erro);

2. Dentro da pasta `public/`, crie o arquivo `style.css` com estilização completa:
   - Defina uma fonte legível (ex: Calibri, Century Gothic ou sans-serif);
   - Estilize o formulário com bordas, espaçamento e cores da paleta Unipar;
   - Estilize a tabela com bordas, cabeçalho destacado e linhas alternadas;
   - Estilize os botões de ação (Editar em azul, Excluir em vermelho);
   - Garanta que a layout seja **responsivo** (funcione em telas de diferentes tamanhos);

3. Vincule o arquivo CSS ao HTML e verifique se a página é exibida corretamente ao acessar `http://localhost:3000`.

**Como deve ser feito:**

- Utilize tags semânticas do HTML5: `<header>`, `<main>`, `<section>`, `<form>`, `<table>`;
- Utilize `<label>` e `<input>` com atributos adequados (`type`, `placeholder`, `required`, `id`);
- Utilize a estrutura de tabela com `<thead>`, `<tbody>`, `<tr>`, `<th>` e `<td>`;
- O formulário deve conter os campos Nome (`type="text"`), E-mail (`type="email"`) e Idade (`type="number"`), todos com `required`;
- A tabela deve ter colunas para ID, Nome, E-mail, Idade e Ações (Editar/Excluir);
- Inclua uma `<section id="mensagem">` para exibir feedback ao usuário;
- Vincule o arquivo `style.css` no `<head>` e o `app.js` antes do fechamento do `</body>`.

---

### Etapa 3 — Implementação do JavaScript com requisições AJAX

**Objetivo educacional:** _Analisar e Criar_ — implementar a lógica de comunicação entre Front-End e Back-End utilizando requisições AJAX assíncronas, analisando o fluxo de dados e criando soluções para cada operação CRUD.

**O que deve ser feito:**

1. Dentro da pasta `public/`, crie o arquivo `app.js` e implemente as seguintes funcionalidades:

   **a) Listar usuários (READ):**
   - Crie uma função `listarUsuarios()` que faça uma requisição `GET` para `/api/usuarios`;
   - Ao receber a resposta, popule dinamicamente a tabela HTML com os dados dos usuários;
   - Para cada usuário, crie botões de **Editar** e **Excluir** na coluna de ações;

   **b) Cadastrar usuário (CREATE):**
   - Adicione um evento de `submit` ao formulário;
   - Ao enviar, colete os dados dos campos e faça uma requisição `POST` para `/api/usuarios` com o corpo em JSON;
   - Após o cadastro, limpe o formulário, exiba uma mensagem de sucesso e atualize a lista;

   **c) Editar usuário (UPDATE):**
   - Ao clicar no botão **Editar**, preencha o formulário com os dados do usuário selecionado;
   - Altere o comportamento do formulário para enviar uma requisição `PUT` para `/api/usuarios/:id`;
   - Após a atualização, limpe o formulário, exiba uma mensagem de sucesso e atualize a lista;

   **d) Excluir usuário (DELETE):**
   - Ao clicar no botão **Excluir**, exiba uma confirmação (`confirm()`);
   - Se confirmado, faça uma requisição `DELETE` para `/api/usuarios/:id`;
   - Após a exclusão, exiba uma mensagem de sucesso e atualize a lista;

   **e) Tratamento de erros:**
   - Em todas as requisições, trate erros com `try/catch` e exiba mensagens amigáveis na área de mensagens;
   - Verifique o status da resposta (`response.ok`) antes de processar os dados;

2. Teste todas as operações no navegador:
   - Cadastre pelo menos 3 usuários;
   - Edite um usuário existente;
   - Exclua um usuário;
   - Verifique se as mensagens de feedback são exibidas corretamente.

**Como deve ser feito:**

- Utilize `async/await` com a API `fetch()` para todas as requisições;
- Utilize `JSON.stringify()` no corpo das requisições POST e PUT;
- Defina o header `Content-Type: application/json` nas requisições que enviam corpo;
- Para listar usuários, faça um `GET` em `/api/usuarios` e popule a tabela dinamicamente com `document.createElement()`;
- Para cadastrar, colete os dados do formulário e envie via `POST`;
- Para editar, preencha o formulário com os dados do usuário e envie via `PUT` para `/api/usuarios/:id`;
- Para excluir, confirme com `confirm()` e envie `DELETE` para `/api/usuarios/:id`;
- Trate erros em todas as requisições com `try/catch`, verificando `response.ok`;
- Exiba mensagens de feedback (sucesso/erro) na `<section id="mensagem">`;
- Adicione estilos CSS para as classes `.sucesso` e `.erro` na área de mensagens;
- Documente, em um arquivo `README.md`, o passo a passo para instalar e executar o projeto.

---

## 3 Materiais complementares e anexos

### 3.1 Materiais obrigatórios

- **MDN Web Docs (Mozilla).** _Fetch API._ Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)

- **MDN Web Docs (Mozilla).** _Introdução ao HTML._ Disponível em: [https://developer.mozilla.org/pt-BR/docs/Learn/HTML](https://developer.mozilla.org/pt-BR/docs/Learn/HTML)

- **MDN Web Docs (Mozilla).** _Primeiros passos com CSS._ Disponível em: [https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps)

- **MDN Web Docs (Mozilla).** _JavaScript._ Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

- **Express.js.** _Documentação oficial._ Disponível em: [https://expressjs.com/pt-br/](https://expressjs.com/pt-br/)

- **Node.js.** _Documentação oficial._ Disponível em: [https://nodejs.org/pt-br/docs](https://nodejs.org/pt-br/docs)

### 3.2 Leituras e materiais complementares

- CERQUEIRA, Maurício Samy. **JavaScript: Programando a Web com ES6+.** Rio de Janeiro: Casa do Código, 2017.

- FLANAGAN, David. **JavaScript: O Guia Definitivo.** 7ª ed. São Paulo: Novatec, 2020.

- DUCKETT, Jon. **HTML & CSS: Projete e Construa Websites.** Rio de Janeiro: Alta Books, 2014.

- **W3Schools.** _JavaScript AJAX._ Disponível em: [https://www.w3schools.com/js/js_ajax_intro.asp](https://www.w3schools.com/js/js_ajax_intro.asp)

- **W3Schools.** _Node.js Express Framework._ Disponível em: [https://www.w3schools.com/nodejs/nodejs_express.asp](https://www.w3schools.com/nodejs/nodejs_express.asp)

- **JSON.org.** _Especificação oficial do formato JSON._ Disponível em: [https://www.json.org/json-pt.html](https://www.json.org/json-pt.html)

---

## 4 Cronograma de orientações

| Etapa                                  | Descrição                                                               | Período ideal para buscar orientação |
| -------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------ |
| **Etapa 1** — Configuração do Back-End | Criação do servidor Node.js com Express e definição das rotas REST      | Semana 1 do módulo                   |
| **Etapa 2** — Construção do Front-End  | Desenvolvimento da interface com HTML e CSS                             | Semana 2 do módulo                   |
| **Etapa 3** — Integração com AJAX      | Implementação do JavaScript com requisições assíncronas e CRUD completo | Semana 3 do módulo                   |
| **Entrega final**                      | Entrega do projeto completo com documentação (README.md)                | Semana 4 do módulo                   |

---

## 5 Critérios de Avaliação

| Critério avaliado                                                                                                                                                                                                                          | Nota     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| **Etapa 1 — Back-End:** Servidor configurado corretamente com Express; rotas REST funcionais (GET, POST, PUT, DELETE); tratamento de erros nas rotas; código organizado e comentado.                                                       | 2,0      |
| **Etapa 2 — Front-End:** Interface estruturada com HTML semântico; formulário funcional com validações; tabela para listagem de usuários; estilização com CSS responsiva e organizada.                                                     | 2,0      |
| **Etapa 3 — Integração AJAX:** Requisições `fetch()` implementadas corretamente para todas as operações CRUD; uso de `async/await`; tratamento de erros com `try/catch`; mensagens de feedback ao usuário; atualização dinâmica da tabela. | 4,0      |
| **Documentação e boas práticas:** README.md com instruções de instalação e execução; código limpo e organizado; nomenclatura descritiva; separação de responsabilidades.                                                                   | 2,0      |
| **Total**                                                                                                                                                                                                                                  | **10,0** |

### Rubricas de avaliação

| Conceito          | Descrição                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **2 de 5 (40%)**  | Todos os requisitos foram atendidos com respostas de qualidade **insuficiente**. Código com erros, funcionalidades parciais ou ausentes.                           |
| **3 de 5 (60%)**  | Todos os requisitos foram atendidos com respostas de qualidade **regular**. Funcionalidades básicas presentes, mas com falhas ou sem tratamento de erros.          |
| **4 de 5 (80%)**  | Todos os requisitos foram atendidos com respostas de **boa** qualidade. Funcionalidades completas, código organizado e com tratamento de erros.                    |
| **5 de 5 (100%)** | Todos os requisitos foram atendidos com respostas de qualidade **muito boa**. Código limpo, bem documentado, responsivo, com boas práticas e extras implementados. |

---

## Referências

- BERNERS-LEE, Tim. **Information Management: A Proposal.** CERN, 1989. Disponível em: [https://www.w3.org/History/1989/proposal.html](https://www.w3.org/History/1989/proposal.html)

- CERQUEIRA, Maurício Samy. **JavaScript: Programando a Web com ES6+.** Rio de Janeiro: Casa do Código, 2017.

- DUCKETT, Jon. **HTML & CSS: Projete e Construa Websites.** Rio de Janeiro: Alta Books, 2014.

- DUCKETT, Jon. **JavaScript & jQuery: Projete e Construa Websites.** Rio de Janeiro: Alta Books, 2015.

- EXPRESS.JS. **Documentação oficial.** Disponível em: [https://expressjs.com/pt-br/](https://expressjs.com/pt-br/)

- FIELDING, Roy T. **Architectural Styles and the Design of Network-based Software Architectures.** Doctoral Dissertation, University of California, Irvine, 2000.

- FLANAGAN, David. **JavaScript: O Guia Definitivo.** 7ª ed. São Paulo: Novatec, 2020.

- GARRETT, Jesse James. **Ajax: A New Approach to Web Applications.** Adaptive Path, 2005.

- MDN WEB DOCS. **Fetch API.** Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)

- MDN WEB DOCS. **Referência completa para HTML, CSS e JavaScript.** Disponível em: [https://developer.mozilla.org/pt-BR/](https://developer.mozilla.org/pt-BR/)

- NODE.JS. **Documentação oficial.** Disponível em: [https://nodejs.org/pt-br/docs](https://nodejs.org/pt-br/docs)

- ROBBINS, Jennifer Nystrom. **Aprendendo Web Design.** 5ª ed. Rio de Janeiro: Alta Books, 2019.

- W3C. **World Wide Web Consortium.** Disponível em: [https://www.w3.org/](https://www.w3.org/)

- W3SCHOOLS. **JavaScript AJAX.** Disponível em: [https://www.w3schools.com/js/js_ajax_intro.asp](https://www.w3schools.com/js/js_ajax_intro.asp)
