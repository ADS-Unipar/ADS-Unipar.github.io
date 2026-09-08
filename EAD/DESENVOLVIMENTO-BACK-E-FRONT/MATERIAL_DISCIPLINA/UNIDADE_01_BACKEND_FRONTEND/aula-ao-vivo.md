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

# Aula ao Vivo

## Integração Front-End + Back-End + API

**Unidade 1 — Back-End e Front-End**

<!--
FALA DO PROFESSOR:

Bem-vindos à aula ao vivo da Unidade 1! Esta não é uma repetição das aulas gravadas. É o momento de integrar todos os conceitos estudados em uma demonstração prática e ao vivo.

Nas aulas gravadas, estudamos Front-End, Back-End, HTTP, APIs, AJAX e boas práticas de forma isolada. Hoje, vamos conectar tudo isso em uma aplicação funcional.

O objetivo é que você veja, passo a passo, como uma aplicação web completa funciona — desde o clique do usuário até a resposta do servidor. Vamos construir, depurar e analisar juntos.
-->

---

## Roteiro da Aula (50 min)

| Tempo | Atividade |
|-------|-----------|
| 0–5 min | Abertura e contextualização |
| 5–15 min | Revisão dos conceitos da Unidade 1 |
| 15–25 min | Discussão de um problema real |
| 25–40 min | Demonstração prática |
| 40–47 min | Desafio para os estudantes |
| 47–50 min | Síntese e orientação da atividade |

<!--
FALA DO PROFESSOR:

Este é o roteiro da aula. Vamos seguir essa estrutura para garantir que cubramos todos os pontos necessários dentro do tempo disponível.

A aula é dividida em seis blocos. Os primeiros 5 minutos são para contextualização — vamos relembrar o que estudamos e definir o que vamos fazer hoje. Dos 5 aos 15 minutos, revisamos os conceitos-chave. Dos 15 aos 25, discutimos um problema real. Dos 25 aos 40, fazemos a demonstração prática. Dos 40 aos 47, lanço um desafio para vocês. E nos últimos 3 minutos, fazemos a síntese e orientamos a atividade prática.

Participem! Perguntas são bem-vindas a qualquer momento.
-->

---

## 0–5 min: Contextualização

**O que estudamos na Unidade 1:**

- Aula 01: Introdução ao Desenvolvimento Web
- Aula 02: O que é Front-End?
- Aula 03: O que é Back-End?
- Aula 04: Como Front-End e Back-End se comunicam?
- Aula 05: AJAX e Comunicação Assíncrona
- Aula 06: Boas Práticas em Front-End e Back-End

**O que vamos fazer hoje:**

> Construir uma aplicação completa onde o Front-End consome uma API Back-End via fetch(), sem recarregar a página.

<!--
FALA DO PROFESSOR:

Vamos começar relembrando o que estudamos. Na Unidade 1, tivemos seis aulas gravadas. Cada uma cobriu um aspecto diferente do desenvolvimento web.

Agora, o desafio é integrar tudo. Não adianta saber HTML se você não sabe como ele se conecta com o Back-End. Não adianta saber criar uma API se ninguém a consome.

Hoje vamos construir uma aplicação simples, mas completa. Vamos ter um Front-End com HTML, CSS e JavaScript, um Back-End com Node.js e Express, e uma comunicação via fetch() entre os dois.

A aplicação será um gerenciador de contatos — o usuário pode cadastrar, listar, editar e excluir contatos. É simples o suficiente para caber em 50 minutos, mas rico o suficiente para demonstrar todos os conceitos.
-->

---

## 5–15 min: Revisão dos Conceitos

**Fluxo de uma aplicação web:**

```
┌──────────┐    HTTP     ┌──────────┐    SQL     ┌──────────┐
│ FRONT-END│ ──────────► │ BACK-END │ ─────────► │ BANCO DE │
│ HTML/CSS │ ◄────────── │ Express  │ ◄───────── │ DADOS    │
│ JavaScript│   JSON     │ Node.js  │   Dados    │ SQLite   │
└──────────┘             └──────────┘             └──────────┘
```

**Conceitos-chave:**

- **Front-End:** HTML (estrutura) + CSS (estilo) + JS (comportamento);
- **Back-End:** servidor que processa requisições e acessa dados;
- **API:** contrato de comunicação via HTTP + JSON;
- **Fetch:** mecanismo assíncrono para consumir a API.

<!--
FALA DO PROFESSOR:

Vamos revisar rapidamente os conceitos centrais.

O fluxo é sempre o mesmo: o Front-End envia uma requisição HTTP para o Back-End. O Back-End processa, acessa o banco de dados se necessário, e devolve uma resposta em JSON. O Front-End recebe a resposta e atualiza a interface.

O Front-End é construído com HTML (estrutura), CSS (estilo) e JavaScript (comportamento). O JavaScript é responsável pela interatividade e pela comunicação assíncrona.

O Back-End é construído com Node.js e Express. Ele define rotas, processa requisições e devolve respostas.

A API é o contrato entre as duas camadas. Ela define endpoints (URLs), métodos (GET, POST, PUT, DELETE) e formatos (JSON).

O fetch() é o mecanismo do JavaScript para enviar requisições HTTP assíncronas. Com async/await, o código fica limpo e legível.

Alguma dúvida até aqui?
-->

---

## 15–25 min: Problema Real

**Cenário:** Uma empresa precisa de um sistema para gerenciar contatos.

**Requisitos:**

1. Cadastrar contato (nome, telefone, e-mail);
2. Listar todos os contatos;
3. Editar um contato existente;
4. Excluir um contato.

**Desafios técnicos:**

- Como enviar dados do formulário para o servidor?
- Como atualizar a lista sem recarregar a página?
- Como tratar erros de validação?
- Como confirmar antes de excluir?

<!--
FALA DO PROFESSOR:

Vamos discutir o problema antes de codificar. Isso é fundamental — um bom desenvolvedor pensa antes de codificar.

O cenário é simples: gerenciar contatos. Quatro operações CRUD. Mas cada uma delas apresenta desafios técnicos.

Cadastrar: como capturar os dados do formulário? Como enviar para o servidor? Como atualizar a lista após o cadastro?

Listar: como buscar os dados do servidor? Como renderizar dinamicamente no DOM?

Editar: como carregar os dados de um contato no formulário? Como enviar a atualização? Como atualizar apenas o item alterado?

Excluir: como confirmar a exclusão? Como remover o item do DOM após a exclusão?

E os desafios transversais: como tratar erros? E se o servidor estiver offline? E se os dados forem inválidos? E se o usuário clicar duas vezes no botão?

Vamos resolver cada um desses desafios na demonstração prática.
-->

---

## 25–40 min: Demonstração Prática

**Estrutura do projeto:**

```
contatos-app/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js
├── package.json
└── .env
```

**Passo 1:** Configurar o servidor Express;

**Passo 2:** Criar as rotas da API;

**Passo 3:** Construir o Front-End;

**Passo 4:** Integrar com fetch().

<!--
FALA DO PROFESSOR:

Vamos à demonstração prática. Acompanhem no ambiente de vocês.

A estrutura do projeto é simples. Uma pasta public para os arquivos estáticos do Front-End. O server.js como ponto de entrada do Back-End. O package.json para gerenciar dependências.

Vamos começar configurando o servidor Express. Depois, criamos as rotas da API. Em seguida, construímos o Front-End. Por fim, integramos tudo com fetch().

Acompanhem e tentem reproduzir no ambiente de vocês. Se tiverem dúvidas, perguntem a qualquer momento.
-->

---

## Demonstração: Back-End (server.js)

```javascript
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let contatos = [];
let idCounter = 1;

// Listar todos
app.get('/api/contatos', (req, res) => {
  res.json(contatos);
});

// Cadastrar
app.post('/api/contatos', (req, res) => {
  const { nome, telefone, email } = req.body;
  if (!nome || !telefone || !email) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }
  const contato = { id: idCounter++, nome, telefone, email };
  contatos.push(contato);
  res.status(201).json(contato);
});

// Excluir
app.delete('/api/contatos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  contatos = contatos.filter(c => c.id !== id);
  res.status(204).send();
});

app.listen(3000, () => console.log('Servidor na porta 3000'));
```

<!--
FALA DO PROFESSOR:

Este é o Back-End. Vamos analisar cada parte.

Importamos o Express, criamos a aplicação e configuramos dois middlewares: express.json() para interpretar JSON e express.static('public') para servir os arquivos do Front-End.

Criamos um array vazio para armazenar os contatos e um contador para gerar IDs únicos.

A rota GET /api/contatos retorna todos os contatos. Simples.

A rota POST /api/contatos recebe os dados do formulário. Note a validação: se algum campo estiver faltando, retornamos 400 (Bad Request) com uma mensagem de erro. Se tudo estiver correto, criamos o contato, adicionamos ao array e retornamos 201 (Created) com o objeto criado.

A rota DELETE /api/contatos/:id recebe o ID como parâmetro da URL. Filtramos o array para remover o contato com esse ID e retornamos 204 (No Content).

Percebam a simplicidade. Em poucas linhas, temos um Back-End funcional com três rotas REST. Agora vamos ao Front-End.
-->

---

## Demonstração: Front-End (app.js)

```javascript
const form = document.getElementById('form-contato');
const lista = document.getElementById('lista-contatos');

// Carregar contatos ao iniciar
async function carregarContatos() {
  const response = await fetch('/api/contatos');
  const contatos = await response.json();
  lista.innerHTML = contatos.map(c => `
    <li>
      <strong>${c.nome}</strong> — ${c.telefone} — ${c.email}
      <button onclick="excluirContato(${c.id})">Excluir</button>
    </li>
  `).join('');
}

// Cadastrar novo contato
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dados = {
    nome: form.nome.value,
    telefone: form.telefone.value,
    email: form.email.value
  };
  await fetch('/api/contatos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  form.reset();
  carregarContatos();
});

// Excluir contato
async function excluirContato(id) {
  if (confirm('Deseja realmente excluir?')) {
    await fetch(`/api/contatos/${id}`, { method: 'DELETE' });
    carregarContatos();
  }
}

carregarContatos();
```

<!--
FALA DO PROFESSOR:

Agora o Front-End. Vamos analisar cada função.

A função carregarContatos() faz um GET para /api/contatos, recebe o array de contatos e renderiza no DOM. Note o uso de template literals e map() para gerar o HTML dinamicamente. Cada contato é um item de lista com um botão de excluir.

O event listener do formulário captura o submit, previne o comportamento padrão (recarregar a página), coleta os dados dos campos, envia um POST para /api/contatos com os dados em JSON, limpa o formulário e recarrega a lista.

A função excluirContato() pede confirmação ao usuário e, se confirmado, envia um DELETE para /api/contatos/:id e recarrega a lista.

Observe o padrão: toda operação que modifica dados (criar, excluir) é seguida por carregarContatos(). Isso garante que a interface esteja sempre sincronizada com os dados do servidor.

Percebam também o uso de async/await em todas as funções assíncronas. Isso torna o código limpo e legível.

Alguma dúvida sobre o código?
-->

---

## 40–47 min: Desafio

**Desafio para os estudantes:**

Adicione a funcionalidade de **edição** à aplicação.

**Requisitos:**

1. Ao clicar em "Editar", os dados do contato devem ser carregados no formulário;
2. O botão de envio deve mudar para "Atualizar";
3. Ao enviar, deve ser feito um `PUT` para `/api/contatos/:id`;
4. Após atualizar, a lista deve ser recarregada.

**Dica:** Crie uma variável `editandoId` para controlar se está editando ou criando.

<!--
FALA DO PROFESSOR:

Agora é a vez de vocês! O desafio é adicionar a funcionalidade de edição.

Vocês precisam implementar quatro coisas. Primeiro: ao clicar em "Editar" ao lado de um contato, os dados devem ser preenchidos no formulário. Segundo: o botão de envio deve mudar de "Cadastrar" para "Atualizar". Terceiro: ao enviar o formulário em modo de edição, deve ser feito um PUT (e não um POST). Quarto: após atualizar, a lista deve ser recarregada.

A dica é usar uma variável de controle — editandoId. Quando ela for null, o formulário está em modo de cadastro (POST). Quando tiver um valor, está em modo de edição (PUT).

Vocês têm 7 minutos. Tentem implementar e, se tiverem dificuldades, peçam ajuda.
-->

---

## 47–50 min: Síntese

**O que fizemos hoje:**

```
Front-End (HTML + CSS + JS)
        ↓
    fetch() — Requisição HTTP assíncrona
        ↓
Back-End (Node.js + Express)
        ↓
    Rotas REST (GET, POST, DELETE)
        ↓
    Dados em memória (array)
        ↓
    Resposta JSON
        ↓
Front-End atualiza o DOM
```

**Atividade Prática Orientada:** disponível na pasta da Unidade 1.

<!--
FALA DO PROFESSOR:

Chegamos ao final da aula ao vivo. Vamos recapitular o que fizemos.

Construímos uma aplicação completa. O Front-End, com HTML, CSS e JavaScript, fornece a interface visual. O JavaScript usa fetch() para enviar requisições HTTP assíncronas ao Back-End. O Back-End, com Node.js e Express, recebe as requisições, processa a lógica e devolve respostas em JSON. O Front-End recebe as respostas e atualiza o DOM.

Tudo isso sem recarregar a página. Tudo isso seguindo boas práticas: validação no servidor, tratamento de erros, código organizado, nomes descritivos.

A Atividade Prática Orientada está disponível na pasta da Unidade 1. Ela aprofunda o que fizemos hoje, adicionando mais funcionalidades e requisitos. Dediquem tempo para realizá-la com qualidade.

Na próxima unidade, vamos estudar Frameworks — ferramentas que organizam e facilitam o desenvolvimento. Tudo o que fizemos hoje manualmente, frameworks fazem de forma estruturada e padronizada.
-->

---

<!-- _class: bg-fim -->

#
