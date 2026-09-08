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

# Aula 23

## Middleware e Pipeline

**Unidade 4 — Por que desenvolver seu próprio Framework?**

<!--
FALA DO PROFESSOR:

Na aula anterior, construímos o Router. Agora vamos implementar o sistema de middlewares — o componente que permite processar requisições antes de chegar ao handler.

Middlewares são um dos conceitos mais poderosos de frameworks back-end. Eles permitem adicionar funcionalidades transversais — como logging, autenticação, validação e CORS — sem poluir os handlers.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Implementar** um sistema de middlewares;
- **Explicar** o conceito de pipeline de processamento;
- **Aplicar** middlewares para logging e parse de JSON;
- **Analisar** como o Express.js implementa middlewares.

**Taxonomia de Bloom:** Implementar, Explicar, Aplicar, Analisar.

---

## Conceito de Pipeline

```
Requisição
   ↓
Middleware 1 (logger)     → next()
   ↓
Middleware 2 (json parse) → next()
   ↓
Middleware 3 (auth)       → next()
   ↓
Handler (controller)
   ↓
Resposta
```

- Cada middleware recebe `req`, `res` e `next`;
- `next()` passa para o próximo middleware;
- Se `next()` não for chamado, a pipeline **para**.

<!--
FALA DO PROFESSOR:

A pipeline de middlewares é uma cadeia de processamento. A requisição passa por cada middleware na ordem em que foram registrados. Cada middleware pode processar a requisição, modificar dados ou interromper a cadeia.

A função next() é a chave. Ela diz "passe para o próximo middleware". Se um middleware não chamar next(), a requisição fica "presa" — o handler nunca é executado.

Isso é útil para autenticação. Se o token não for válido, o middleware de autenticação retorna um erro 401 e não chama next(). O handler nunca é executado.
-->

---

## Implementação do Middleware

```javascript
class MiddlewarePipeline {
  constructor() {
    this.middlewares = [];
  }

  use(fn) {
    this.middlewares.push(fn);
  }

  execute(req, res, finalHandler) {
    let index = 0;

    const next = () => {
      if (index < this.middlewares.length) {
        const middleware = this.middlewares[index++];
        middleware(req, res, next);
      } else {
        // Todos os middlewares executaram → chamar handler
        finalHandler(req, res);
      }
    };

    next(); // Iniciar a pipeline
  }
}
```

<!--
FALA DO PROFESSOR:

Esta é a implementação do sistema de middlewares. Vamos analisar.

O método use() registra um middleware — uma função com a assinatura (req, res, next).

O método execute() inicia a pipeline. Ele mantém um índice que controla qual middleware será executado. A função next() é interna — quando chamada, avança para o próximo middleware.

Quando todos os middlewares tiverem executado (index >= middlewares.length), o finalHandler é chamado — que é o handler da rota.

Observe a elegância. Cada middleware recebe next como parâmetro. Quando chama next(), o próximo middleware é executado. Quando não chama, a pipeline para.

É exatamente assim que o Express funciona. app.use(fn) registra um middleware. Quando uma requisição chega, o Express executa os middlewares em sequência e, no final, executa o handler da rota.
-->

---

## Exemplo: Middleware de Logger

```javascript
function logger(req, res, next) {
  const data = new Date().toISOString();
  console.log(`${req.method} ${req.url} - ${data}`);
  next(); // Passar para o próximo
}
```
---
## Exemplo: Middleware de JSON Parse

```javascript
function jsonParse(req, res, next) {
  if (req.headers['content-type'] === 'application/json') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        req.body = JSON.parse(body);
      } catch (e) {
        req.body = {};
      }
      next();
    });
  } else {
    next();
  }
}
```

<!--
FALA DO PROFESSOR:

Vamos ver dois middlewares práticos.

O logger registra o método, a URL e a data/hora de cada requisição no console. Depois chama next() para passar para o próximo middleware.

O jsonParse verifica se o Content-Type é application/json. Se for, lê o corpo da requisição em chunks, faz o parse de JSON e armazena em req.body. Se não for JSON, apenas chama next().

Observe que o jsonParse usa eventos assíncronos (req.on('data') e req.on('end')). Por isso, next() é chamado dentro do callback de 'end' — só depois que todo o corpo foi recebido.

Esses dois middlewares são equivalentes ao express.json() e a um middleware de logging do Express.
-->

---

## Integrando Router + Middleware

```javascript
function MiniFramework() {
  const router = new Router();
  const pipeline = new MiddlewarePipeline();

  const app = {
    use(fn) { pipeline.use(fn); },
    get(path, handler) { router.add('GET', path, handler); },
    post(path, handler) { router.add('POST', path, handler); },
    listen(port, cb) {
      const server = http.createServer((req, res) => {
        // Adicionar res.json() e res.status()
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        };
        res.status = (code) => { res.statusCode = code; return res; };

        // Executar pipeline → depois router
        pipeline.execute(req, res, () => {
          const match = router.match(req.method, req.url);
          if (match) {
            req.params = match.params;
            match.handler(req, res);
          } else {
            res.statusCode = 404;
            res.json({ erro: 'Rota não encontrada' });
          }
        });
      });
      server.listen(port, cb);
    }
  };

  return app;
}
```

<!--
FALA DO PROFESSOR:

Aqui está o framework completo — integrando Router e Middleware. Vamos analisar.

A função MiniFramework() cria uma aplicação. Ela internamente cria um Router e uma Pipeline.

O método use() registra um middleware na pipeline. Os métodos get() e post() registram rotas no router.

O método listen() cria o servidor HTTP. Para cada requisição, ele primeiro melhora o objeto res (adicionando json() e status()), depois executa a pipeline de middlewares e, no final, encontra a rota correspondente no router.

Se a rota não for encontrada, retorna 404.

Observe a elegância. Em menos de 30 linhas, temos um framework funcional com roteamento, middlewares e resposta JSON. É claro que falta muito — tratamento de erros, suporte a PUT e DELETE, template engines, etc. Mas o princípio é o mesmo do Express.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Middlewares formam uma **pipeline** de processamento;
2. Cada middleware recebe `req`, `res` e `next`;
3. `next()` passa para o próximo middleware;
4. A integração Router + Middleware é **simples** e **elegante**;
5. O Express usa o **mesmo princípio** internamente.

**Pergunta reflexiva:**

> Se nosso mini framework já tem Router e Middleware, o que mais o Express tem que nós não temos?

**Próxima aula:** Do Mini Framework ao Framework Real — Vamos comparar e refletir.

<!--
FALA DO PROFESSOR:

A resposta é: muita coisa. O Express tem suporte a template engines, múltiplos servidores, tratamento de erros avançado, sub-apps, configuração por ambiente, e muito mais. Mas o princípio fundamental — Router + Middleware — é o mesmo.

Na próxima aula, vamos comparar nosso mini framework com o Express e refletir sobre o que aprendemos.
-->

---

<!-- _class: bg-fim -->

#
