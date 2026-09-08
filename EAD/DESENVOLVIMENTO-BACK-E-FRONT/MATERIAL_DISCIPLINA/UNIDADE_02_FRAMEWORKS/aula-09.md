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

# Aula 09

## Estrutura de um Framework

**Unidade 2 — Frameworks**

<!--
FALA DO PROFESSOR:

Nas aulas anteriores, entendemos o que é um framework e por que utilizá-lo. Agora vamos desmontar um framework para entender suas partes internas.

Todo framework — seja back-end como Express ou front-end como React — é composto por componentes fundamentais. Esses componentes são os mesmos conceitos que estudamos na Unidade 1, mas organizados de forma estruturada e reutilizável.

Nesta aula, vamos estudar os componentes internos de um framework e entender como eles se conectam.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Identificar** os componentes internos de um framework;
- **Explicar** a função de cada componente (Router, Controller, Middleware, Service, Repository);
- **Analisar** o fluxo de uma requisição dentro de um framework;
- **Comparar** a estrutura de frameworks Back-End e Front-End.

**Taxonomia de Bloom:** Identificar, Explicar, Analisar, Comparar.

<!--
FALA DO PROFESSOR:

Esta aula é sobre arquitetura. Você vai entender que todo framework segue um padrão de organização que pode ser decomposto em componentes menores. Quando você compreende esses componentes, qualquer framework se torna mais fácil de aprender.
-->

---

## Componentes Fundamentais

```
Requisição HTTP
      ↓
   Router        → Qual handler executar?
      ↓
   Middleware     → Processar antes do handler?
      ↓
   Controller     → Receber requisição, devolver resposta
      ↓
   Service        → Lógica de negócio
      ↓
   Repository     → Acesso a dados
      ↓
   Response       → Devolver ao cliente
```

<!--
FALA DO PROFESSOR:

Este é o fluxo padrão de qualquer framework back-end. Vamos entender cada componente.

Router: é o componente que mapeia URLs e métodos HTTP para handlers. Quando uma requisição chega, o router verifica a URL e o método e direciona para o handler correto.

Middleware: é uma função que executa antes do handler principal. Middlewares podem fazer parse de JSON, verificar autenticação, registrar logs, validar dados, configurar CORS. Eles formam uma "pipeline" — cada middleware processa a requisição e passa para o próximo.

Controller: é o componente que recebe a requisição e devolve a resposta. Ele orquestra o fluxo — chama o service, recebe o resultado e formata a resposta HTTP.

Service: contém a lógica de negócio. É aqui que as regras são aplicadas — validações complexas, cálculos, orquestração de operações. O service não conhece HTTP — ele recebe dados e retorna dados.

Repository: é responsável pelo acesso a dados. Ele abstrai o banco de dados — o controller e o service não precisam saber se os dados vêm de MySQL, MongoDB ou um arquivo JSON.

Response: é a resposta HTTP que volta para o cliente — status code, headers e body.
-->

---

## Router — Roteamento

```javascript
// Definição de rotas
app.get('/api/usuarios', usuarioController.listar);
app.get('/api/usuarios/:id', usuarioController.buscar);
app.post('/api/usuarios', usuarioController.criar);
app.put('/api/usuarios/:id', usuarioController.atualizar);
app.delete('/api/usuarios/:id', usuarioController.excluir);
```

- Mapeia **URL + Método HTTP** para um **handler**;
- Extrai **parâmetros** da URL (`:id`);
- É o "despachante" da aplicação.

<!--
FALA DO PROFESSOR:

O Router é o ponto de entrada de todas as requisições. Ele funciona como um despachante — recebe a requisição e a direciona para o handler correto.

Observe o código. Cada linha define uma rota: método HTTP + URL + handler. Quando o servidor recebe GET /api/usuarios, o router executa usuarioController.listar. Quando recebe POST /api/usuarios, executa usuarioController.criar.

O parâmetro :id na URL é uma variável. Quando o cliente acessa /api/usuarios/42, o router extrai 42 como o valor de id e o disponibiliza em req.params.id.

O Router é o componente que conecta o mundo externo (HTTP) ao mundo interno (código). Sem ele, o servidor não saberia qual código executar para cada requisição.
-->

---

## Middleware — Pipeline de Processamento

```javascript
// Middleware de parse JSON
app.use(express.json());

// Middleware de autenticação
function autenticar(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }
  // Validar token...
  next();
}

// Middleware de log
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
}
```
---
## Middleware — Pipeline de Processamento
- Funções que executam **antes** do handler;
- Podem **interceptar**, **modificar** ou **rejeitar** a requisição;
- Formam uma **pipeline** (cadeia de processamento).

<!--
FALA DO PROFESSOR:

Middlewares são um dos conceitos mais poderosos de frameworks back-end. Eles são funções que executam antes do handler principal e podem interceptar, modificar ou rejeitar a requisição.

Observe os três exemplos. O primeiro (express.json()) faz o parse do corpo JSON. O segundo (autenticar) verifica se o token de autenticação está presente — se não estiver, retorna 401 e interrompe a pipeline. O terceiro (logger) registra a requisição no console.

A função next() é crucial. Ela diz "passe para o próximo middleware na pipeline". Se next() não for chamado, a requisição fica "presa" naquele middleware.

Middlewares formam uma pipeline — uma cadeia de processamento. A requisição passa por cada middleware na ordem em que foram definidos. Se algum middleware não chamar next(), a pipeline é interrompida.

Isso é extremamente útil para cross-cutting concerns — funcionalidades que se aplicam a múltiplas rotas, como autenticação, logging, CORS, validação e tratamento de erros.
-->

---

## Controller — Orquestração

```javascript
const usuarioController = {
  async listar(req, res) {
    try {
      const usuarios = await usuarioService.listar();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ erro: 'Erro interno' });
    }
  },

  async criar(req, res) {
    try {
      const usuario = await usuarioService.criar(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }
};
```
---

## Controller — Orquestração
- Recebe a **requisição** e devolve a **resposta**;
- **Orquestra** o fluxo: chama o Service, formata a resposta;
- Não contém **lógica de negócio** diretamente.

<!--
FALA DO PROFESSOR:

O Controller é o componente que lida diretamente com HTTP. Ele recebe a requisição (req) e devolve a resposta (res).

Observe que o Controller não contém lógica de negócio. Ele apenas orquestra o fluxo: chama o service com os dados da requisição, recebe o resultado e formata a resposta HTTP.

No método listar, o controller chama usuarioService.listar(), recebe o array de usuários e devolve como JSON. Se houver erro, devolve 500.

No método criar, o controller chama usuarioService.criar(req.body), recebe o usuário criado e devolve com status 201. Se houver erro de validação (lançado pelo service), devolve 400.

Essa separação é fundamental. O controller não sabe como os dados são processados — ele apenas orquestra. Isso permite que a lógica de negócio seja testada independentemente do HTTP.
-->

---

## Service — Lógica de Negócio

```javascript
const usuarioService = {
  async listar() {
    return await usuarioRepository.buscarTodos();
  },

  async criar(dados) {
    // Validação de negócio
    if (!dados.nome || dados.nome.length < 3) {
      throw new Error('Nome deve ter pelo menos 3 caracteres');
    }
    if (!dados.email || !dados.email.includes('@')) {
      throw new Error('E-mail inválido');
    }
    // Verificar se e-mail já existe
    const existente = await usuarioRepository.buscarPorEmail(dados.email);
    if (existente) {
      throw new Error('E-mail já cadastrado');
    }
    return await usuarioRepository.criar(dados);
  }
};
```
---
## Service — Lógica de Negócio

- Contém a **lógica de negócio** da aplicação;
- **Não conhece** HTTP (não usa req, res);
- Recebe **dados** e retorna **dados**.

<!--
FALA DO PROFESSOR:

O Service é o coração da aplicação. É aqui que as regras de negócio são implementadas.

Observe que o Service não conhece HTTP. Ele não usa req ou res. Ele recebe dados (um objeto com nome e email) e retorna dados (o usuário criado). Isso é fundamental — o Service é independente do transporte.

No método criar, temos três validações de negócio: nome com pelo menos 3 caracteres, email com formato válido e email único. Se qualquer validação falhar, um erro é lançado.

Essa separação permite que o Service seja testado independentemente. Você pode testar a lógica de negócio sem precisar de um servidor HTTP — basta chamar o Service diretamente com dados de teste.

Também permite que o Service seja reutilizado. Se, no futuro, você precisar criar usuários a partir de uma fila de mensagens em vez de uma requisição HTTP, basta chamar o mesmo Service.
-->

---

## Repository — Acesso a Dados

```javascript
const usuarioRepository = {
  async buscarTodos() {
    // Pode ser SQL, MongoDB, arquivo, etc.
    return await db.query('SELECT * FROM usuarios');
  },

  async buscarPorEmail(email) {
    return await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  },

  async criar(dados) {
    const result = await db.query(
      'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
      [dados.nome, dados.email]
    );
    return { id: result.insertId, ...dados };
  }
};
```
---
## Repository — Acesso a Dados

- **Abstrai** o acesso ao banco de dados;
- O Service **não sabe** se é SQL, NoSQL ou arquivo;
- Facilita a **troca** de banco de dados.

<!--
FALA DO PROFESSOR:

O Repository é a camada de acesso a dados. Ele abstrai completamente o banco de dados.

Observe que o Repository é o único componente que conhece o banco de dados. O Service não sabe se os dados vêm de MySQL, PostgreSQL, MongoDB ou um arquivo JSON. Ele apenas chama usuarioRepository.buscarTodos() e recebe um array.

Isso é poderoso. Se você precisar trocar o banco de dados — de MySQL para PostgreSQL, por exemplo — basta alterar o Repository. O Service e o Controller não precisam mudar.

O Repository também facilita testes. Você pode criar um Repository "falso" que retorna dados mockados, permitindo testar o Service sem precisar de um banco de dados real.
-->

---

## Fluxo Completo no Framework

```
Requisição: POST /api/usuarios
Body: { "nome": "Maria", "email": "maria@email.com" }

1. Router → identifica POST /api/usuarios → usuarioController.criar
2. Middleware → express.json() → parse do body
3. Middleware → autenticar → verifica token → next()
4. Controller → extrai dados de req.body → chama usuarioService.criar()
5. Service → valida nome, email → verifica duplicidade → chama usuarioRepository.criar()
6. Repository → INSERT INTO usuarios → retorna objeto criado
7. Service → retorna objeto para o Controller
8. Controller → res.status(201).json(usuario)
9. Resposta: 201 Created + JSON com o usuário
```

<!--
FALA DO PROFESSOR:

Vamos seguir o fluxo completo de uma requisição dentro do framework.

1. O Router recebe POST /api/usuarios e direciona para usuarioController.criar.

2. O middleware express.json() faz o parse do corpo JSON.

3. O middleware autenticar verifica o token. Se válido, chama next(). Se inválido, retorna 401.

4. O Controller extrai os dados de req.body e chama usuarioService.criar(dados).

5. O Service valida o nome (mínimo 3 caracteres), valida o email (formato válido), verifica se o email já existe no banco e, se tudo estiver correto, chama usuarioRepository.criar(dados).

6. O Repository executa o INSERT no banco de dados e retorna o objeto criado com o ID gerado.

7. O Service retorna o objeto para o Controller.

8. O Controller formata a resposta HTTP — status 201 e o objeto em JSON.

9. O cliente recebe a resposta.

Perceba como cada componente tem uma responsabilidade clara. O Router roteia. O Middleware processa. O Controller orquestra. O Service valida e aplica regras. O Repository acessa dados. Essa separação é a base de qualquer framework back-end.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Todo framework é composto por **componentes fundamentais**: Router, Middleware, Controller, Service, Repository;
2. O **Router** mapeia URLs para handlers;
3. O **Middleware** processa a requisição antes do handler;
4. O **Controller** orquestra o fluxo sem conter lógica de negócio;
5. O **Service** contém a lógica de negócio;
6. O **Repository** abstrai o acesso a dados.

---
**Pergunta reflexiva:**

> Se cada componente tem uma responsabilidade clara, o que acontece quando um componente "invade" a responsabilidade de outro?

**Próxima aula:** Frameworks Back-End e Front-End — Vamos conhecer os principais frameworks do mercado.

<!--
FALA DO PROFESSOR:

Encerramos esta aula. Os componentes estudados hoje são universais — você os encontrará em qualquer framework back-end, com nomes ligeiramente diferentes.

A pergunta reflexiva é sobre o Princípio da Responsabilidade Única (Single Responsibility Principle). Quando um componente faz mais do que deveria, o código se torna difícil de manter e testar.

Na próxima aula, vamos conhecer os principais frameworks do mercado — tanto back-end quanto front-end.
-->

---

<!-- _class: bg-fim -->

#
