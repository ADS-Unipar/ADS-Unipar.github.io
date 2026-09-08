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

# Aula 21

## Arquitetura de um Framework

**Unidade 4 — Por que desenvolver seu próprio Framework?**

<!--
FALA DO PROFESSOR:

Nesta aula, vamos projetar a arquitetura do nosso mini framework. Antes de escrever código, precisamos definir a estrutura — quais componentes teremos, como eles se conectam e qual será a API pública.

Essa é uma etapa de design. Um bom design antes de codificar economiza horas de refatoração depois.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Projetar** a arquitetura de um mini framework;
- **Identificar** os componentes necessários;
- **Definir** a API pública do framework;
- **Analisar** como o Express.js resolve os mesmos problemas.

**Taxonomia de Bloom:** Projetar, Identificar, Definir, Analisar.

---

## Componentes do Mini Framework

```
┌─────────────────────────────────────────┐
│            MINI FRAMEWORK               │
│                                         │
│  ┌──────────┐  ┌──────────────┐         │
│  │  Router  │  │  Middleware  │         │
│  │  Engine  │  │  Pipeline    │         │
│  └────┬─────┘  └──────┬───────┘         │
│       │               │                 │
│       ▼               ▼                 │
│  ┌──────────────────────────┐           │
│  │    Request / Response    │           │
│  │    Enhancement           │           │
│  └──────────────────────────┘           │
│                                         │
│  ┌──────────────────────────┐           │
│  │    HTTP Server Wrapper   │           │
│  └──────────────────────────┘           │
│                                         │
└─────────────────────────────────────────┘
```

<!--
FALA DO PROFESSOR:

Nosso mini framework terá quatro componentes principais.

Router Engine: é o componente que mapeia métodos HTTP e URLs para handlers. Quando uma requisição chega, o Router encontra o handler correto.

Middleware Pipeline: é o componente que executa uma cadeia de funções antes do handler principal. Cada middleware pode processar a requisição, modificar dados ou interromper a cadeia.

Request/Response Enhancement: é o componente que adiciona métodos úteis aos objetos req e res do Node.js — como res.json(), req.params, req.body.

HTTP Server Wrapper: é o componente que encapsula o módulo http do Node.js, fornecendo uma API mais amigável — como app.listen(), app.get(), app.post().
-->

---

## API Pública Desejada

```javascript
// Criar aplicação
const app = MiniFramework();

// Middleware global
app.use(json());

// Rota GET
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota com parâmetro
app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  res.json(usuario);
});

// Rota POST
app.post('/api/usuarios', (req, res) => {
  usuarios.push(req.body);
  res.status(201).json(req.body);
});

// Iniciar servidor
app.listen(3000, () => console.log('Rodando na porta 3000'));
```

<!--
FALA DO PROFESSOR:

Esta é a API que queremos alcançar. Observe como ela é semelhante ao Express — app.get(), app.post(), app.use(), app.listen(), req.params, req.body, res.json(), res.status().

Não vamos copiar o Express. Vamos implementar apenas o essencial — o suficiente para que a API seja familiar e funcional.

A semelhança é intencional. Se você já sabe Express, nosso mini framework será intuitivo. E se você entender como nosso mini framework funciona, entenderá como o Express funciona.
-->

---

## Fluxo de uma Requisição no Framework

```
1. HTTP recebe requisição
        ↓
2. Enhance req e res (adicionar métodos)
        ↓
3. Executar middlewares (pipeline)
        ↓
4. Router encontra handler
        ↓
5. Handler executa (controller)
        ↓
6. Resposta é enviada
```

<!--
FALA DO PROFESSOR:

Este é o fluxo interno do framework. Vamos entender cada etapa.

1. O módulo http do Node.js recebe a requisição bruta.

2. Nós "melhoramos" os objetos req e res — adicionamos req.params, req.body, res.json(), res.status().

3. Os middlewares são executados em sequência. Cada um pode processar a requisição ou interromper a cadeia.

4. O Router encontra o handler correto com base no método HTTP e na URL.

5. O handler (controller) executa a lógica e gera a resposta.

6. A resposta é enviada ao cliente.

Esse é o mesmo fluxo do Express. A diferença é que vamos implementar cada etapa do zero.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. O mini framework terá quatro componentes: **Router**, **Middleware**, **Request/Response Enhancement**, **HTTP Wrapper**;
2. A API pública será semelhante ao **Express.js**;
3. O fluxo é: HTTP → Enhance → Middlewares → Router → Handler → Response;
4. O design deve vir **antes** do código;
5. A semelhança com o Express é **intencional** para facilitar o aprendizado.

**Pergunta reflexiva:**

> Se nosso mini framework tem a mesma API que o Express, qual é a diferença?

**Próxima aula:** Construindo um Router — Vamos implementar o componente de roteamento.

<!--
FALA DO PROFESSOR:

A resposta para a pergunta reflexiva é: a simplicidade. Nosso mini framework implementa apenas o essencial. O Express tem centenas de funcionalidades — nosso framework tem apenas as fundamentais.

Na próxima aula, vamos implementar o Router.
-->

---

<!-- _class: bg-fim -->

#
