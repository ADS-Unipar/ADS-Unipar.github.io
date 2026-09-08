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
  h1 { font-family: 'Century Gothic', 'Calibri', sans-serif; font-size: 32px; font-weight: bold; color: #272425; text-align: left; }
  h2 { font-family: 'Century Gothic', 'Calibri', sans-serif; font-size: 29px; font-weight: bold; color: #C22820; text-align: left; }
  h3 { font-family: 'Calibri', 'Century Gothic', sans-serif; font-size: 26px; font-weight: bold; color: #5C2034; text-align: left; }
  strong { color: #C22820; }
  em { color: #5C2034; }
  code { font-size: 22px; background-color: #f5f5f5; color: #5C2034; }
  pre { font-size: 20px; background-color: #f5f5f5; border-left: 4px solid #C22820; }
  table { font-size: 24px; }
  th { background-color: #C22820; color: #ffffff; font-weight: bold; }
  td { border-bottom: 1px solid #e0e0e0; }
  ul, ol { text-align: justify; }
  li { margin-bottom: 6px; }
  blockquote { border-left: 4px solid #EB8087; background-color: #fdf2f2; padding: 10px 20px; }
  section.bg-capa { background-image: url('bg-capa.png'); background-size: cover; background-position: center; text-align: center; justify-content: center; align-items: center; }
  section.bg-capa h1 { text-align: center; font-size: 32px; color: #ffffff; }
  section.bg-capa h2 { text-align: center; font-size: 29px; color: #ffffff; }
  section.bg-fim { background-image: url('bg-fim.png'); background-size: cover; background-position: center; }
---

<!-- _class: bg-capa -->

# Aula ao Vivo

## Frameworks na Prática

**Unidade 2 — Frameworks**

<!--
FALA DO PROFESSOR:

Bem-vindos à aula ao vivo da Unidade 2! Hoje vamos colocar frameworks em prática. Vamos construir uma aplicação completa usando Express e comparar com o que fizemos manualmente na Unidade 1.

O objetivo é que você perceba, na prática, como um framework organiza o código, reduz a repetição e facilita a manutenção.
-->

---

## Roteiro da Aula (50 min)

| Tempo | Atividade |
|-------|-----------|
| 0–5 min | Abertura e contextualização |
| 5–15 min | Revisão dos conceitos da Unidade 2 |
| 15–25 min | Discussão: por que frameworks resolvem problemas reais |
| 25–40 min | Demonstração prática com Express |
| 40–47 min | Desafio: comparar Pull-based × Push-based |
| 47–50 min | Síntese e orientação da atividade |

<!--
FALA DO PROFESSOR:

O roteiro de hoje segue a mesma estrutura da aula ao vivo anterior. Vamos começar com contextualização, revisar conceitos, discutir um problema real, fazer demonstração prática, lançar um desafio e encerrar com síntese.
-->

---

## 0–5 min: Contextualização

**O que estudamos na Unidade 2:**

- Aula 07: O que é um Framework?
- Aula 08: Por que utilizar Frameworks?
- Aula 09: Estrutura de um Framework
- Aula 10: Frameworks Back-End e Front-End
- Aula 11: Pull-based × Push-based
- Aula 12: Como escolher um Framework?

**O que vamos fazer hoje:**

> Construir uma aplicação com Express, demonstrando Router, Controller, Middleware, Service e Repository.

<!--
FALA DO PROFESSOR:

Na Unidade 1, construímos tudo manualmente. Na Unidade 2, estudamos frameworks teoricamente. Hoje, vamos ver o framework em ação.

A aplicação será a mesma da aula ao vivo da Unidade 1 — gerenciador de contatos — mas agora usando Express com uma estrutura organizada. Isso permitirá comparar diretamente as duas abordagens.
-->

---

## 5–15 min: Revisão dos Conceitos

**Componentes de um Framework:**

```
Requisição → Router → Middleware → Controller → Service → Repository → Response
```

**Paradigmas:**

| Pull-based | Push-based |
|-----------|------------|
| Cliente puxa | Servidor empurra |
| HTTP / fetch | WebSockets / SSE |
| CRUD | Tempo real |

<!--
FALA DO PROFESSOR:

Vamos revisar rapidamente. O fluxo de um framework back-end segue a pipeline: Router → Middleware → Controller → Service → Repository → Response. Cada componente tem uma responsabilidade clara.

Pull-based é quando o cliente puxa dados (HTTP). Push-based é quando o servidor envia dados (WebSockets). Muitas aplicações combinam os dois.
-->

---

## 15–25 min: Problema Real

**Comparação: Manual vs. Framework**

| Aspecto | Manual (Unidade 1) | Com Framework (Unidade 2) |
|---------|-------------------|---------------------------|
| Servidor | `http.createServer()` | `express()` |
| Roteamento | `if/else` | `app.get()`, `app.post()` |
| Parse JSON | Manual com `req.on('data')` | `express.json()` |
| Arquivos estáticos | `fs.readFile()` | `express.static()` |
| Organização | Tudo em um arquivo | Pastas separadas |
| Middlewares | Implementar manualmente | `app.use()` |

<!--
FALA DO PROFESSOR:

Vamos comparar diretamente o que fizemos na Unidade 1 com o que o framework faz.

Sem framework: criamos o servidor com http.createServer(), fazíamos roteamento com if/else, parse de JSON manualmente, servíamos arquivos estáticos com fs.readFile(). Tudo em um único arquivo.

Com framework: express() cria o servidor, app.get() e app.post() fazem roteamento, express.json() faz o parse, express.static() serve arquivos. O código é organizado em pastas separadas.

A diferença é gritante. O framework elimina centenas linhas de código repetitivo e fornece uma estrutura padronizada.
-->

---

## 25–40 min: Demonstração Prática

**Estrutura do projeto com Express:**

```
contatos-framework/
├── src/
│   ├── routes/
│   │   └── contatos.js
│   ├── controllers/
│   │   └── contatoController.js
│   ├── services/
│   │   └── contatoService.js
│   └── repositories/
│       └── contatoRepository.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js
└── package.json
```

<!--
FALA DO PROFESSOR:

Observe a estrutura. Em vez de tudo em um único arquivo, temos pastas separadas para routes, controllers, services e repositories. Cada arquivo tem uma responsabilidade clara.

Isso é o que um framework proporciona: organização. Quando o projeto crescer, cada pasta pode ter dezenas de arquivos — e você saberá exatamente onde procurar cada coisa.
-->

---

## Demonstração: Repository

```javascript
// src/repositories/contatoRepository.js
let contatos = [];
let idCounter = 1;

const contatoRepository = {
  buscarTodos() {
    return contatos;
  },
  buscarPorId(id) {
    return contatos.find(c => c.id === id);
  },
  criar(dados) {
    const contato = { id: idCounter++, ...dados };
    contatos.push(contato);
    return contato;
  },
  atualizar(id, dados) {
    const index = contatos.findIndex(c => c.id === id);
    if (index === -1) return null;
    contatos[index] = { ...contatos[index], ...dados };
    return contatos[index];
  },
  excluir(id) {
    contatos = contatos.filter(c => c.id !== id);
  }
};

module.exports = contatoRepository;
```

<!--
FALA DO PROFESSOR:

O Repository é a camada mais baixa — responsável pelo acesso aos dados. Neste exemplo, os dados são armazenados em um array em memória. Em uma aplicação real, seria um banco de dados.

Observe que o Repository não conhece HTTP. Ele recebe e retorna dados puros. Isso permite trocar o banco de dados sem alterar nenhuma outra camada.
-->

---

## Demonstração: Service

```javascript
// src/services/contatoService.js
const contatoRepository = require('../repositories/contatoRepository');

const contatoService = {
  listar() {
    return contatoRepository.buscarTodos();
  },
  criar(dados) {
    if (!dados.nome || dados.nome.length < 2) {
      throw new Error('Nome deve ter pelo menos 2 caracteres');
    }
    if (!dados.email || !dados.email.includes('@')) {
      throw new Error('E-mail inválido');
    }
    return contatoRepository.criar(dados);
  },
  excluir(id) {
    const contato = contatoRepository.buscarPorId(id);
    if (!contato) throw new Error('Contato não encontrado');
    contatoRepository.excluir(id);
  }
};

module.exports = contatoService;
```

<!--
FALA DO PROFESSOR:

O Service contém a lógica de negócio. Note as validações: nome com pelo menos 2 caracteres, email com formato válido. Se a validação falhar, um erro é lançado.

O Service chama o Repository para acessar os dados. Ele não sabe se os dados vêm de um array, de MySQL ou de MongoDB. Essa é a beleza da separação de responsabilidades.
-->

---

## Demonstração: Controller

```javascript
// src/controllers/contatoController.js
const contatoService = require('../services/contatoService');

const contatoController = {
  listar(req, res) {
    const contatos = contatoService.listar();
    res.json(contatos);
  },
  criar(req, res) {
    try {
      const contato = contatoService.criar(req.body);
      res.status(201).json(contato);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },
  excluir(req, res) {
    try {
      contatoService.excluir(parseInt(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ erro: error.message });
    }
  }
};

module.exports = contatoController;
```

<!--
FALA DO PROFESSOR:

O Controller orquestra o fluxo. Ele recebe a requisição, chama o Service e devolve a resposta. Note que o Controller não contém lógica de negócio — ele apenas delega para o Service.

O tratamento de erros é feito no Controller. Se o Service lançar um erro, o Controller captura e devolve o status code adequado (400 para validação, 404 para não encontrado).
-->

---

## Demonstração: Routes

```javascript
// src/routes/contatos.js
const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

router.get('/', contatoController.listar);
router.post('/', contatoController.criar);
router.delete('/:id', contatoController.excluir);

module.exports = router;
```

```javascript
// server.js
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api/contatos', require('./src/routes/contatos'));
app.listen(3000, () => console.log('Servidor na porta 3000'));
```

<!--
FALA DO PROFESSOR:

O Router é simples — mapeia URLs para controllers. Observe como o server.js ficou limpo: apenas 5 linhas. Toda a lógica está organizada em arquivos separados.

Compare com o server.js da Unidade 1, que tinha dezenas de linhas com if/else para roteamento. A diferença é clara.
-->

---

## 40–47 min: Desafio

**Desafio:** Adicione a funcionalidade de **edição** e implemente um **middleware de log**.

**Requisitos:**

1. Criar rota `PUT /api/contatos/:id`;
2. Implementar no Controller, Service e Repository;
3. Criar um middleware que registre `MÉTODO URL - DATA` no console;
4. Aplicar o middleware a todas as rotas.

<!--
FALA DO PROFESSOR:

O desafio é adicionar edição e um middleware de log. A edição deve seguir o padrão que já estamos usando — rota no Router, lógica no Service, acesso a dados no Repository.

O middleware de log deve registrar cada requisição no console — algo como "GET /api/contatos - 2025-09-03T10:30:00". Isso demonstra como middlewares são úteis para cross-cutting concerns.
-->

---

## 47–50 min: Síntese

**Comparação final:**

| Aspecto | Manual | Framework |
|---------|--------|-----------|
| Linhas de infraestrutura | ~100 | ~5 |
| Organização | 1 arquivo | Múltiplos arquivos |
| Roteamento | if/else | Declarativo |
| Middlewares | Manual | Integrado |
| Manutenção | Difícil | Fácil |

**Atividade Prática Orientada:** disponível na pasta da Unidade 2.

<!--
FALA DO PROFESSOR:

A comparação final é clara. O framework reduz drasticamente o código de infraestrutura, organiza o projeto em arquivos separados, fornece roteamento declarativo e middlewares integrados.

A atividade prática da Unidade 2 está disponível. Ela aprofunda o que fizemos hoje, adicionando mais funcionalidades e requisitos.

Na próxima unidade, vamos estudar Web Mobile e PWA — como transformar aplicações web em experiências nativas em dispositivos móveis.
-->

---

<!-- _class: bg-fim -->

#
