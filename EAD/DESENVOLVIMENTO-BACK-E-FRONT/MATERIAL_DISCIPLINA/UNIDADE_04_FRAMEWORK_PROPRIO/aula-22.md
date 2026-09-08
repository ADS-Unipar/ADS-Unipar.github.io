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

# Aula 22

## Construindo um Router

**Unidade 4 — Por que desenvolver seu próprio Framework?**

<!--
FALA DO PROFESSOR:

Nesta aula, vamos implementar o componente mais fundamental do framework: o Router. É ele que mapeia URLs e métodos HTTP para handlers — a função que processa a requisição e devolve a resposta.

Vamos construir o Router do zero, usando apenas JavaScript puro. Ao final, você vai entender como o Express faz roteamento por baixo dos panos.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Implementar** um Router do zero;
- **Extrair** parâmetros de URLs dinâmicas;
- **Analisar** como o Express.js implementa roteamento;
- **Comparar** nossa implementação com a do Express.

**Taxonomia de Bloom:** Implementar, Extrair, Analisar, Comparar.

---

## Estrutura de Dados do Router

```javascript
// Cada rota é um objeto:
{
  method: 'GET',
  path: '/api/usuarios/:id',
  handler: function(req, res) { ... },
  paramNames: ['id'],
  pattern: /^\/api\/usuarios\/([^/]+)$/
}
```

- **method:** GET, POST, PUT, DELETE;
- **path:** o padrão da URL (com parâmetros);
- **handler:** a função que processa a requisição;
- **paramNames:** nomes dos parâmetros (:id);
- **pattern:** regex para matching da URL.

<!--
FALA DO PROFESSOR:

Cada rota registrada no framework é representada por um objeto com cinco propriedades.

method é o método HTTP — GET, POST, PUT, DELETE.

path é o padrão da URL. Pode conter parâmetros — como :id — que são valores variáveis na URL.

handler é a função que será executada quando a rota for correspondida. Recebe req e res como parâmetros.

paramNames é um array com os nomes dos parâmetros. Se o path for /api/usuarios/:id, paramNames será ['id'].

pattern é a expressão regular gerada a partir do path. É ela que permite comparar a URL da requisição com o padrão da rota.
-->

---

## Implementação do Router

```javascript
class Router {
  constructor() {
    this.routes = [];
  }

  add(method, path, handler) {
    const paramNames = [];
    // Converter :param para grupos de regex
    const pattern = path.replace(/:(\w+)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    });
    this.routes.push({
      method: method.toUpperCase(),
      path,
      handler,
      paramNames,
      pattern: new RegExp(`^${pattern}$`)
    });
  }

  match(method, url) {
    for (const route of this.routes) {
      if (route.method !== method.toUpperCase()) continue;
      const match = url.match(route.pattern);
      if (match) {
        // Extrair valores dos parâmetros
        const params = {};
        route.paramNames.forEach((name, i) => {
          params[name] = match[i + 1];
        });
        return { handler: route.handler, params };
      }
    }
    return null;
  }
}
```

<!--
FALA DO PROFESSOR:

Esta é a implementação completa do Router. Vamos analisar cada parte.

O método add() registra uma rota. Ele recebe o método HTTP, o path e o handler. Dentro dele, convertemos os parâmetros (:id) em grupos de regex. Por exemplo, /api/usuarios/:id se torna /^\/api\/usuarios\/([^/]+)$/.

O método match() encontra a rota correspondente para uma dada URL e método. Ele percorre todas as rotas registradas, verifica o método e testa a regex. Se encontrar uma correspondência, extrai os valores dos parâmetros e retorna o handler.

Observe como os parâmetros são extraídos. A regex captura os valores entre parênteses. O array paramNames mapeia cada captura a um nome. Se a URL for /api/usuarios/42, match[1] será "42" e paramNames[0] será "id" — resultando em params = { id: "42" }.

Essa é a essência do roteamento. É simples, mas poderoso.
-->

---

## Exemplo de Uso

```javascript
const router = new Router();

// Registrar rotas
router.add('GET', '/api/usuarios', (req, res) => {
  res.json(usuarios);
});

router.add('GET', '/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  res.json(usuario);
});

router.add('POST', '/api/usuarios', (req, res) => {
  usuarios.push(req.body);
  res.status(201).json(req.body);
});

// Simular uma requisição
const result = router.match('GET', '/api/usuarios/42');
console.log(result.params); // { id: "42" }
result.handler(req, res);   // Executa o handler
```

<!--
FALA DO PROFESSOR:

Veja como o Router é usado. Registramos três rotas com add(). Depois, simulamos uma requisição GET /api/usuarios/42 com match(). O resultado é um objeto com o handler e os parâmetros extraídos.

É exatamente assim que o Express funciona por baixo dos panos. Quando você escreve app.get('/api/usuarios/:id', handler), o Express registra a rota internamente. Quando uma requisição chega, o Express encontra a rota correspondente e executa o handler.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. O Router mapeia **método + URL** para **handler**;
2. Parâmetros de URL são extraídos com **regex**;
3. O método **match()** encontra a rota correspondente;
4. A implementação é **simples** — menos de 30 linhas;
5. O Express usa o **mesmo princípio** internamente.

**Pergunta reflexiva:**

> Se o Router é tão simples, por que o Express tem milhares de linhas de código?

**Próxima aula:** Middleware e Pipeline — Vamos implementar o sistema de middlewares.

<!--
FALA DO PROFESSOR:

A resposta é: o Express faz muito mais do que roteamento. Ele tem middlewares, template engines, suporte a múltiplos servidores, tratamento de erros, e muito mais. O Router é apenas uma parte.

Na próxima aula, vamos implementar o sistema de middlewares.
-->

---

<!-- _class: bg-fim -->

#
