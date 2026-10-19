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

# Frameworks no Desenvolvimento Back-End

## Foco em Express.js

**Unidade 2 — Frameworks**

<!--
FALA DO PROFESSOR:

Bem-vindos à aula sobre Frameworks no Desenvolvimento Back-End, com foco no Express.js. Hoje vamos compreender o que é um framework, por que ele existe e como o Express.js organiza uma aplicação Back-End.

O objetivo não é apenas aprender comandos, mas entender a estrutura que o framework oferece e como ela resolve problemas reais de desenvolvimento.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, você será capaz de:

1. Explicar o conceito de framework
2. Diferenciar biblioteca, framework e runtime
3. Identificar características do Express.js
4. Criar rotas HTTP com `GET`, `POST`, `PUT` e `DELETE`
5. Compreender e utilizar middlewares
6. Separar uma aplicação em **Router**, **Controller**, **Service** e **Repository**
7. Construir uma API REST simples

<!--
FALA DO PROFESSOR:

Estes são os objetivos de hoje. Note que vamos sair do conceito até a prática — não vamos apenas decorar comandos. O foco está em compreender a estrutura que o framework oferece e saber utilizá-la para resolver problemas de software.

Vamos trabalhar nos níveis de Compreender, Aplicar e Analisar da Taxonomia de Bloom.
-->

---

## O Problema do Desenvolvimento Manual

**Construir uma aplicação sem framework é como construir uma casa começando do zero.**

Sem framework, o desenvolvedor precisa:

- Criar o servidor HTTP manualmente
- Implementar roteamento com `if/else`
- Fazer parse de JSON manualmente
- Servir arquivos estáticos com `fs.readFile()`
- Gerenciar cada detalhe da aplicação

> **Resultado:** código repetitivo, difícil de manter e propenso a erros.

<!--
FALA DO PROFESSOR:

Pensem em construir uma casa. Sem um projeto arquitetônico, você teria que decidir tudo do zero — onde vão as paredes, a fiação, a tubulação. Com um projeto, várias decisões básicas já foram tomadas.

No desenvolvimento de software, acontece a mesma coisa. Sem framework, você precisa implementar desde o servidor HTTP até o roteamento, parse de JSON, servir arquivos estáticos. São centenas de linhas de código repetitivo que não adicionam valor ao negócio.
-->

---

## O Que É um Framework?

> **Framework é uma estrutura de software que fornece ferramentas, padrões e convenções para organizar e desenvolver aplicações.**

**Características:**

- Estrutura predefinida
- Convenções e padrões
- Reutilização de código
- Extensibilidade
- Inversão de Controle (IoC)

> **"Um framework não existe apenas para escrever menos código; ele fornece uma estrutura, padrões e mecanismos que ajudam a organizar, manter e evoluir aplicações."**

<!--
FALA DO PROFESSOR:

Framework é uma estrutura de software que fornece ferramentas, padrões e convenções para organizar e desenvolver aplicações. Note que a palavra-chave aqui é "estrutura".

O framework não é apenas uma forma de escrever menos código. Ele define como o código deve ser organizado, quais padrões seguir e como os componentes se comunicam.

A característica mais importante é a Inversão de Controle — o framework chama o seu código, e não o contrário. Vamos entender isso melhor no próximo slide.
-->

---

## Biblioteca × Framework

| Aspecto | Biblioteca | Framework |
|---------|-----------|-----------|
| Quem chama quem? | Seu código chama a biblioteca | O framework chama seu código |
| Controle | Você tem o controle | O framework tem o controle |
| Foco | Resolver uma tarefa específica | Fornecer uma estrutura completa |
| Exemplos | Lodash, Axios, Moment | Express, NestJS, Django |

**Inversão de Controle (IoC):**

```
Biblioteca:
Seu código → chama a biblioteca

Framework:
Framework → chama partes do seu código
```

<!--
FALA DO PROFESSOR:

Vamos esclarecer uma confusão comum: biblioteca e framework não são a mesma coisa.

Com uma biblioteca, como o Lodash ou Axios, o seu código chama a biblioteca quando precisa. Você tem o controle.

Com um framework, acontece o contrário — o framework define o fluxo e chama o seu código nos pontos apropriados. Isso é chamado de Inversão de Controle ou IoC.

Pensem assim: biblioteca é como pedir para alguém te entregar uma ferramenta. Framework é como entrar em uma fábrica onde as máquinas já estão posicionadas e você apenas insere sua matéria-prima no lugar certo.
-->

---

## Por Que Utilizar Frameworks?

**Benefícios:**

- **Produtividade** — menos código repetitivo
- **Organização** — estrutura padronizada
- **Manutenção** — fácil de localizar e alterar
- **Escalabilidade** — cresce junto com o projeto
- **Segurança** — práticas consolidadas
- **Comunidade** — ecossistema de plugins e suporte

**Desvantagens:**

- Curva de aprendizagem
- Dependência do framework
- Convenções a seguir
- Abstrações excessivas

> **Framework não é automaticamente melhor. A escolha depende do problema.**

<!--
FALA DO PROFESSOR:

Os benefícios de usar um framework são claros: produtividade, organização, manutenção mais fácil, escalabilidade, segurança e uma comunidade ativa.

Mas frameworks também têm desvantagens: curva de aprendizagem, dependência do framework, necessidade de seguir convenções e, em alguns casos, abstrações excessivas.

O ponto importante é: framework não é automaticamente melhor. A escolha depende do problema que você está resolvendo. Para um projeto pequeno, um framework pode ser overkill. Para um projeto grande, ele pode ser essencial.
-->

---

## Frameworks no Desenvolvimento Web

### Back-End

| Framework | Linguagem | Característica |
|-----------|-----------|----------------|
| **Express.js** | JavaScript | Minimalista, flexível |
| NestJS | JavaScript | Arquitetura inspirada no Angular |
| Spring Boot | Java | Robusto, enterprise |
| ASP.NET Core | C# | Microsoft, multiplataforma |
| Laravel | PHP | Elegant, full-featured |
| Django | Python | Batteries included |

### Front-End

| Framework | Característica |
|-----------|----------------|
| Angular | Completo, TypeScript |
| React | Biblioteca de UI, componentes |
| Vue | Progressivo, fácil de aprender |

<!--
FALA DO PROFESSOR:

Existem muitos frameworks disponíveis, tanto para back-end quanto para front-end. Cada um tem suas características e se adapta melhor a determinados cenários.

No back-end, temos Express.js que é minimalista e flexível, NestJS que é mais estruturado, Spring Boot para aplicações enterprise, ASP.NET Core do ecossistema Microsoft, Laravel em PHP e Django em Python.

No front-end, Angular é o mais completo, React é uma biblioteca de UI muito popular, e Vue é conhecido por sua facilidade de aprendizagem.

Hoje vamos focar no Express.js com Node.js, que é um dos frameworks mais utilizados no desenvolvimento back-end com JavaScript.
-->

---

## Node.js × Express.js

**Node.js não é um framework.**

```
JavaScript
      ↓
Node.js (Runtime)
      ↓
Express.js (Framework)
      ↓
Aplicação Back-End
```

| Componente | O que é | Função |
|------------|---------|--------|
| **JavaScript** | Linguagem | Sintaxe e lógica |
| **Node.js** | Runtime | Executa JavaScript fora do navegador |
| **Express.js** | Framework | Estrutura para aplicações web |

<!--
FALA DO PROFESSOR:

Primeiro ponto importante: Node.js não é um framework. Node.js é um runtime — ele permite executar JavaScript fora do navegador.

A sequência é: JavaScript é a linguagem, Node.js é o runtime que executa o JavaScript, e Express.js é o framework que fornece a estrutura para criar aplicações web.

Node.js fornece acesso a recursos do sistema, servidor HTTP básico, sistema de arquivos. Express.js fornece roteamento, middlewares, tratamento de requisições e respostas, e organização da aplicação.

Sem Express.js, você pode criar um servidor com Node.js, mas precisa fazer tudo manualmente. Com Express.js, o framework cuida da infraestrutura e você foca na lógica de negócio.
-->

---

## Express.js — Primeiro Servidor

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
```

| Elemento | Função |
|----------|--------|
| `express()` | Cria a aplicação |
| `app` | Instância da aplicação |
| `app.get()` | Define uma rota GET |
| `req` | Objeto da requisição |
| `res` | Objeto da resposta |
| `res.send()` | Envia uma resposta |
| `app.listen()` | Inicia o servidor |

<!--
FALA DO PROFESSOR:

Vamos criar nosso primeiro servidor com Express. Observe como é simples:

Na primeira linha, importamos o Express. Na segunda, criamos uma instância da aplicação. Na terceira, definimos uma rota GET para a raiz — quando alguém acessar o servidor, receberá "Olá, mundo!". Por último, iniciamos o servidor na porta 3000.

Compare isso com o http.createServer() do Node.js puro, onde precisávamos verificar req.method, req.url, escrever headers manualmente. O Express simplifica tudo isso.
-->

---

## Rotas HTTP

**Roteamento define como a aplicação responde a requisições em diferentes URLs.**

```javascript
// GET — Consultar
app.get('/produtos', (req, res) => { ... });

// POST — Criar
app.post('/produtos', (req, res) => { ... });

// PUT — Atualizar
app.put('/produtos/:id', (req, res) => { ... });

// DELETE — Excluir
app.delete('/produtos/:id', (req, res) => { ... });
```

| Método | Finalidade | Exemplo |
|--------|-----------|---------|
| `GET` | Consultar | Listar produtos |
| `POST` | Criar | Adicionar produto |
| `PUT` | Atualizar | Editar produto |
| `PATCH` | Atualização parcial | Alterar preço |
| `DELETE` | Excluir | Remover produto |

<!--
FALA DO PROFESSOR:

Rotas são a base de qualquer aplicação web. Elas definem como a aplicação responde a requisições em diferentes URLs e métodos HTTP.

GET é para consultar dados, POST para criar, PUT para atualizar completamente, PATCH para atualização parcial e DELETE para excluir.

Observe o :id na rota — isso é um parâmetro de rota. Quando o cliente enviar PUT /produtos/5, o Express captura o 5 como req.params.id.

No exemplo, usamos /produtos como recurso. Em uma API REST, os recursos são representados por substantivos no plural.
-->

---

## Request e Response

### Requisição (`req`)

```javascript
req.params   // Parâmetros de rota  → /produtos/:id
req.query    // Query strings      → ?page=1&limit=10
req.body     // Corpo da requisição → { "nome": "Notebook" }
req.headers  // Cabeçalhos         → Content-Type, Authorization
req.method   // Método HTTP        → GET, POST, PUT, DELETE
req.url      // URL completa       → /produtos?page=1
```

### Resposta (`res`)

```javascript
res.send('Texto')          // Envia texto
res.json({ dados: true })  // Envia JSON
res.status(201).json(dados) // Status code + JSON
res.sendStatus(404)         // Apenas status code
```

<!--
FALA DO PROFESSOR:

O objeto req (request) contém tudo sobre a requisição do cliente. req.params tem os parâmetros de rota, req.query tem os parâmetros da URL, req.body tem o corpo da requisição — geralmente JSON.

O objeto res (response) é como você responde ao cliente. res.send() envia texto, res.json() envia JSON, res.status() define o código HTTP antes de enviar.

Esses dois objetos são a base de toda interação no Express. Toda rota recebe req e res como parâmetros.
-->

---

## JSON e express.json()

**Problema:** O Express não faz parse de JSON automaticamente.

```javascript
// Sem middleware — req.body é undefined
app.post('/contatos', (req, res) => {
  console.log(req.body); // undefined!
});
```

**Solução:** Utilizar o middleware embutido.

```javascript
// Com middleware — req.body contém o JSON
app.use(express.json());

app.post('/contatos', (req, res) => {
  console.log(req.body); // { "nome": "João", "email": "joao@email.com" }
  res.status(201).json(req.body);
});
```

> **Middleware é uma função executada antes da rota processar a requisição.**

<!--
FALA DO PROFESSOR:

Aqui temos um ponto importante. O Express, por padrão, não faz o parse do corpo da requisição. Se você enviar um JSON via POST, req.body será undefined.

Para resolver isso, usamos o middleware express.json(). Ele intercepta a requisição, lê o corpo e o transforma em um objeto JavaScript acessível em req.body.

Note que app.use(express.json()) deve ser declarado antes das rotas. Middlewares são executados na ordem em que são registrados.
-->

---

## O Que É Middleware?

> **Middleware é uma função executada durante o processamento da requisição, antes de chegar à rota final.**

```
Cliente
   ↓
Requisição
   ↓
Middleware 1 (logging)
   ↓
Middleware 2 (autenticação)
   ↓
Middleware 3 (validação)
   ↓
Controller (rota final)
   ↓
Resposta
```

**Um middleware pode:**

- Executar código
- Modificar `req` ou `res`
- Interromper a requisição
- Chamar o próximo middleware com `next()`

<!--
FALA DO PROFESSOR:

Middleware é um dos conceitos mais importantes do Express. É uma função que fica entre a requisição do cliente e a resposta final.

Imagine que a requisição é uma pessoa passando por um corredor com várias portas. Cada porta é um middleware — ela pode verificar algo, fazer alguma coisa, ou bloquear a passagem.

O fluxo é: cliente envia requisição → middleware 1 → middleware 2 → middleware 3 → controller → resposta. Cada middleware pode executar código, modificar os objetos req e res, interromper a requisição ou chamar o próximo com next().

Se um middleware não chamar next() nem enviar uma resposta, a requisição fica travada.
-->

---

## Criando Middlewares

### Middleware de Log

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

app.use(logger);
```

### Preocupações Transversais

Middlewares são ideais para tarefas que se aplicam a **todas as requisições**:

- **Logging** — registrar cada requisição
- **Autenticação** — verificar se o usuário está logado
- **Autorização** — verificar permissões
- **Validação** — verificar dados da requisição
- **Tratamento de erros** — capturar exceções

> **`next()` é essencial — sem ele, a requisição não avança.**

<!--
FALA DO PROFESSOR:

Vamos criar um middleware de log. Ele recebe req, res e next como parâmetros. Registra o método, a URL e a data, depois chama next() para que a requisição continue.

O next() é essencial. Se você esquecer de chamá-lo, a requisição fica travada e o cliente nunca recebe uma resposta.

Middlewares são ideais para preocupações transversais — tarefas que se aplicam a todas as requisições, como logging, autenticação, autorização, validação e tratamento de erros.

Observe que app.use(logger) registra o middleware para todas as rotas. Se quiser aplicar apenas a algumas rotas, pode passar o middleware como argumento na rota.
-->

---

## Router — Modularização

**Problema:** Colocar todas as rotas no `server.js` deixa o código confuso.

```javascript
// ❌ Tudo em um arquivo
app.get('/contatos', ...);
app.post('/contatos', ...);
app.put('/contatos/:id', ...);
app.delete('/contatos/:id', ...);
app.get('/produtos', ...);
app.post('/produtos', ...);
// ...dezenas de rotas em um único arquivo
```

**Solução:** Usar `express.Router()` para separar por recurso.

```javascript
// src/routes/contatos.js
const express = require('express');
const router = express.Router();

router.get('/', ...);
router.post('/', ...);
router.put('/:id', ...);
router.delete('/:id', ...);

module.exports = router;
```

```javascript
// server.js
app.use('/api/contatos', require('./src/routes/contatos'));
```

<!--
FALA DO PROFESSOR:

Quando uma aplicação cresce, ter todas as rotas em um único arquivo se torna insustentável. O Express.Router() resolve isso.

Com o Router, você cria arquivos separados para cada recurso. O arquivo contatos.js tem todas as rotas de contatos, o arquivo produtos.js tem todas as rotas de produtos.

No server.js, você apenas registra os routers com app.use(). O primeiro argumento é o prefixo da URL — todas as rotas do contatos.js começarão com /api/contatos.

Isso é modularização. Cada arquivo tem uma responsabilidade clara e o server.js fica limpo.
-->

---

## Arquitetura em Camadas

```
Requisição
   ↓
Router         → Mapeia URL para Controller
   ↓
Middleware     → Executa tarefas transversais
   ↓
Controller     → Recebe requisição, orquestra fluxo
   ↓
Service        → Regras de negócio e validações
   ↓
Repository     → Acesso aos dados
   ↓
Dados
```

> **Cada camada tem uma responsabilidade clara e não deve conhecer os detalhes das outras.**

<!--
FALA DO PROFESSOR:

Agora vamos entender a arquitetura que o Express permite organizar. São seis camadas, cada uma com uma responsabilidade específica.

O Router mapeia URLs para Controllers. O Middleware executa tarefas transversais. O Controller recebe a requisição e orquestra o fluxo. O Service contém as regras de negócio. O Repository acessa os dados.

O princípio fundamental é: cada camada conhece apenas a camada seguinte. O Controller não acessa o Repository diretamente — ele passa pelo Service. O Service não conhece HTTP — ele recebe e retorna dados.

Isso facilita manutenção, testes e evolução do sistema.
-->

---

## Repository — Acesso aos Dados

> **Repository é responsável por acessar e manipular os dados.**

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
  }
};

module.exports = contatoRepository;
```

**O Repository não conhece HTTP.** Ele recebe e retorna dados puros.

<!--
FALA DO PROFESSOR:

O Repository é a camada mais baixa — responsável pelo acesso aos dados. Neste exemplo, os dados são armazenados em um array em memória. Em uma aplicação real, seria um banco de dados.

Observe que o Repository não conhece HTTP. Ele recebe e retorna dados puros. Isso permite trocar o banco de dados sem alterar nenhuma outra camada.

Se amanhã você decidir usar MongoDB em vez de um array, basta alterar o Repository. O Service e o Controller continuam exatamente iguais.
-->

---

## Service — Regras de Negócio

> **Service concentra as regras de negócio, validações e processamento.**

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
  }
};

module.exports = contatoService;
```

> **O Service não sabe se os dados vêm de um array, MySQL ou MongoDB.**

<!--
FALA DO PROFESSOR:

O Service contém a lógica de negócio. Note as validações: nome com pelo menos 2 caracteres, email com formato válido. Se a validação falhar, um erro é lançado.

O Service chama o Repository para acessar os dados. Ele não sabe se os dados vêm de um array, de MySQL ou de MongoDB. Essa é a beleza da separação de responsabilidades.

Regras de negócio ficam no Service, nunca no Controller ou na rota. Isso permite regras de negócio em diferentes pontos da aplicação — uma API, um processamento em lote, um webhook — reutilizando a mesma lógica.
-->

---

## Controller — Orquestração

> **Controller recebe a requisição, aciona o Service e constrói a resposta HTTP.**

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
  }
};

module.exports = contatoController;
```

**O Controller não contém regras de negócio.** Ele apenas orquestra o fluxo.

<!--
FALA DO PROFESSOR:

O Controller orquestra o fluxo. Ele recebe a requisição, chama o Service e devolve a resposta. Note que o Controller não contém lógica de negócio — ele apenas delega para o Service.

O tratamento de erros é feito no Controller. Se o Service lançar um erro, o Controller captura e devolve o status code adequado (400 para validação, 404 para não encontrado).

O Controller é a camada que conhece HTTP. Ele sabe que recebe req e res, e devolve JSON com status codes. As outras camadas não precisam conhecer esses detalhes.
-->

---

## CRUD Completo — Routes

```javascript
// src/routes/contatos.js
const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

router.get('/', contatoController.listar);
router.get('/:id', contatoController.buscarPorId);
router.post('/', contatoController.criar);
router.put('/:id', contatoController.atualizar);
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

app.listen(3000, () => {
  console.log('Servidor na porta 3000');
});
```

<!--
FALA DO PROFESSOR:

Agora vamos ver o CRUD completo. O Router mapeia cada método HTTP para o Controller correspondente.

GET / listar todos, GET /:id buscar por ID, POST / criar, PUT /:id atualizar, DELETE /:id excluir.

Observe o server.js — ele tem apenas 5 linhas de configuração. Toda a lógica está organizada em arquivos separados. Compare com o server.js da Unidade 1, que tinha dezenas de linhas com if/else para roteamento.

A estrutura é clara: cada arquivo tem uma responsabilidade, e o server.js apenas configura e inicia a aplicação.
-->

---

## Estrutura de Pastas

```
contatos-api/
├── src/
│   ├── routes/
│   │   └── contatos.js          ← Mapeia URLs para Controllers
│   ├── controllers/
│   │   └── contatoController.js ← Orquestra o fluxo
│   ├── services/
│   │   └── contatoService.js    ← Regras de negócio
│   ├── repositories/
│   │   └── contatoRepository.js ← Acesso aos dados
│   └── middlewares/
│       └── logger.js            ← Tarefas transversais
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js                    ← Configuração e inicialização
└── package.json
```

> **Cada pasta representa uma camada da arquitetura.**

<!--
FALA DO PROFESSOR:

Observe a estrutura de pastas. Cada pasta representa uma camada da arquitetura que estudamos.

routes tem os routers, controllers tem os controllers, services tem os services, repositories tem os repositories e middlewares tem os middlewares.

A pasta public tem os arquivos estáticos — HTML, CSS e JavaScript do front-end.

O server.js fica na raiz — ele é o ponto de entrada da aplicação, responsável por configurar e iniciar o servidor.

Essa organização permite que qualquer desenvolvedor que entre no projeto saiba exatamente onde encontrar cada coisa. É o poder dos padrões e convenções que um framework proporciona.
-->

---

## Comparação: Sem Framework × Com Framework

| Aspecto | Manual (Unidade 1) | Express.js (Unidade 2) |
|---------|-------------------|------------------------|
| Servidor | `http.createServer()` | `express()` |
| Roteamento | `if/else` | `app.get()`, `app.post()` |
| Parse JSON | Manual com `req.on('data')` | `express.json()` |
| Arquivos estáticos | `fs.readFile()` | `express.static()` |
| Organização | Tudo em um arquivo | Pastas separadas |
| Middlewares | Implementar manualmente | `app.use()` |
| Linhas de infraestrutura | ~100 | ~5 |

> **O objetivo do framework não é apenas diminuir linhas, mas estabelecer uma estrutura para desenvolvimento.**

<!--
FALA DO PROFESSOR:

Vamos comparar diretamente o que fizemos na Unidade 1 com o que o framework faz.

Sem framework: criamos o servidor com http.createServer(), fazíamos roteamento com if/else, parse de JSON manualmente, servíamos arquivos estáticos com fs.readFile(). Tudo em um único arquivo.

Com framework: express() cria o servidor, app.get() e app.post() fazem roteamento, express.json() faz o parse, express.static() serve arquivos. O código é organizado em pastas separadas.

A diferença é gritante. O framework elimina centenas linhas de código repetitivo e fornece uma estrutura padronizada.
-->

---

## Fluxo Completo da Requisição

```
POST /api/contatos
   ↓
Express recebe a requisição
   ↓
express.json() faz parse do body
   ↓
Router: POST /api/contatos → contatoController.criar
   ↓
Controller: chama contatoService.criar(req.body)
   ↓
Service: valida nome e email
   ↓
Repository: salva no array e retorna o contato
   ↓
Service: retorna o contato
   ↓
Controller: res.status(201).json(contato)
   ↓
Cliente recebe JSON com status 201
```

<!--
FALA DO PROFESSOR:

Vamos acompanhar o fluxo completo de uma requisição POST /api/contatos.

O Express recebe a requisição. O middleware express.json() faz o parse do corpo. O Router identifica que é POST /api/contatos e direciona para contatoController.criar.

O Controller chama contatoService.criar passando o corpo da requisição. O Service valida os dados — se o nome tiver menos de 2 caracteres ou o email não tiver @, um erro é lançado.

Se a validação passar, o Service chama contatoRepository.criar. O Repository salva no array e retorna o contato. O Service retorna para o Controller. O Controller envia a resposta com status 201 e o contato em JSON.

Todo esse fluxo é organizado, previsível e fácil de debugar. Cada camada faz sua parte.
-->

---

## Boas Práticas

**Organização:**

- Separar responsabilidades em camadas
- Evitar controllers gigantes
- Não colocar regra de negócio nas rotas
- Utilizar Services para lógica de negócio
- Isolar acesso aos dados no Repository

**Código:**

- Utilizar middlewares para tarefas transversais
- Utilizar variáveis de ambiente para configurações
- Tratar erros adequadamente
- Validar dados de entrada
- Utilizar HTTP status codes apropriados

**Princípios:**

- **DRY** — Don't Repeat Yourself
- **KISS** — Keep It Simple, Stupid
- **SOLID** — Princípios de design orientado a objetos

<!--
FALA DO PROFESSOR:

Vamos falar de boas práticas. A primeira e mais importante: separar responsabilidades. Cada camada faz uma coisa. O Controller não acessa banco de dados, o Service não conhece HTTP, o Repository não valida dados.

Nunca coloque regra de negócio diretamente na rota. Isso cria código espaghetti impossível de manter.

Utilize middlewares para tarefas transversais — logging, autenticação, validação. Não repita essa lógica em cada rota.

Trate erros adequadamente. Use status codes HTTP corretos — 200 para sucesso, 201 para criado, 400 para erro do cliente, 404 para não encontrado, 500 para erro do servidor.

E aplique os princípios DRY, KISS e SOLID quando fizer sentido.
-->

---

## Erros Comuns

### ❌ Erro 1: Tudo no `server.js`
Colocar toda a aplicação em um único arquivo.

### ❌ Erro 2: Regra de negócio na rota
```javascript
// ❌ Errado
router.post('/', (req, res) => {
  if (!req.body.nome) { return res.status(400).json({ erro: 'Nome obrigatório' }); }
  // ...lógica de negócio aqui...
});
```

### ❌ Erro 3: Acessar banco no Controller
O Controller não deve conhecer o banco de dados.

### ❌ Erro 4: Não validar dados
Sempre valide dados de entrada antes de processar.

### ❌ Erro 5: Esquecer `next()`
Sem `next()`, a requisição fica travada no middleware.

<!--
FALA DO PROFESSOR:

Vamos ver os erros mais comuns. O primeiro é colocar toda a aplicação no server.js — isso não escala.

O segundo é colocar regra de negócio diretamente na rota. Veja o exemplo: a validação e a lógica de negócio estão misturadas com o código HTTP. Isso dificulta testes e reutilização.

O terceiro é acessar banco de dados diretamente no Controller. O Controller deve chamar o Service, que chama o Repository.

O quarto é não validar dados. Se o cliente enviar um nome vazio, sua aplicação pode quebrar ou gravar dados inválidos.

O quinto é esquecer o next() no middleware. Sem ele, a requisição fica travada e o cliente nunca recebe resposta.
-->

---

## Desafio Prático

**Adicione funcionalidades à API de contatos:**

**Requisitos:**

1. Criar rota `PUT /api/contatos/:id` para edição
2. Implementar no Controller, Service e Repository
3. Criar um middleware de log que registre `MÉTODO URL - DATA`
4. Aplicar o middleware a todas as rotas
5. Criar `GET /api/contatos/:id` para buscar por ID

**Dica:** Siga o padrão das camadas já implementadas.

```
Router → Controller → Service → Repository
```

> **Desafio extra:** Adicione validação no Service para a atualização.

<!--
FALA DO PROFESSOR:

O desafio é adicionar edição e um middleware de log. A edição deve seguir o padrão que já estamos usando — rota no Router, lógica no Service, acesso a dados no Repository.

O middleware de log deve registrar cada requisição no console — algo como "GET /api/contatos - 2025-09-03T10:30:00". Isso demonstra como middlewares são úteis para cross-cutting concerns.

Para o GET /api/contatos/:id, pense em como buscar um contato específico. O Repository já tem o método buscarPorId — use-o.

Não esqueça de tratar erros. Se o contato não existir, retorne 404.
-->

---

## Síntese — O Que Aprendemos?

- O que é framework e por que utilizá-lo
- Diferença entre biblioteca, framework e runtime
- Node.js é runtime, Express.js é framework
- Rotas HTTP: `GET`, `POST`, `PUT`, `DELETE`
- Middlewares e como utilizá-los
- Router para modularização
- Arquitetura em camadas: **Router → Controller → Service → Repository**
- Separação de responsabilidades
- Construção de uma API REST organizada

> **"Aprender um framework não significa decorar comandos. Significa compreender a estrutura que ele oferece e saber utilizá-la para resolver problemas de software."**

<!--
FALA DO PROFESSOR:

Vamos recapitular o que aprendemos hoje. Começamos entendendo o que é um framework e por que ele existe. Depois diferenciamos biblioteca, framework e runtime.

Aprendemos que Node.js é o runtime e Express.js é o framework. Criamos rotas HTTP, entendemos middlewares, modularizamos com Router e organizamos a aplicação em camadas.

A estrutura Router → Controller → Service → Repository é a base de qualquer aplicação back-end bem organizada. Cada camada tem uma responsabilidade clara.

Lembrem-se: aprender um framework não é decorar comandos. É entender a estrutura e saber utilizá-la para resolver problemas.
-->

---

<!-- _class: bg-fim -->

# 

<!--
FALA DO PROFESSOR:

Encerramos mais uma aula. Na próxima unidade, vamos estudar como o front-end se conecta a essa API e como frameworks front-end complementam a arquitetura que construímos hoje.

Atividade prática orientada disponível na pasta da Unidade 2.
-->