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

# Aula 24

## Do Mini Framework ao Framework Real

**Unidade 4 — Por que desenvolver seu próprio Framework?**

<!--
FALA DO PROFESSOR:

Nesta última aula gravada, vamos comparar nosso mini framework com frameworks reais como o Express. O objetivo é que você perceba que os conceitos fundamentais são os mesmos — a diferença está na robustez, nas funcionalidades adicionais e na maturidade do código.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Comparar** nosso mini framework com o Express.js;
- **Identificar** o que falta para chegar a um framework real;
- **Analisar** a importância de cada componente adicional;
- **Avaliar** o aprendizado construindo o mini framework.

**Taxonomia de Bloom:** Comparar, Identificar, Analisar, Avaliar.

---

## Comparativo: Mini Framework vs. Express

| Aspecto | Mini Framework | Express.js |
|---------|---------------|------------|
| **Linhas de código** | ~80 | ~15.000 |
| **Router** | Sim (básico) | Sim (avançado) |
| **Middlewares** | Sim (básico) | Sim (avançado) |
| **Parâmetros de URL** | Sim | Sim |
| **res.json()** | Sim | Sim |
| **res.status()** | Sim | Sim |
| **Template Engine** | Não | Sim |
| **Tratamento de erros** | Não | Sim |
| **Sub-apps** | Não | Sim |
| **Configuração por ambiente** | Não | Sim |
| **Comunidade** | Nenhuma | Enorme |

<!--
FALA DO PROFESSOR:

A comparação é reveladora. Nosso mini framework tem cerca de 80 linhas. O Express tem mais de 15.000. Mas os conceitos fundamentais — Router, Middlewares, parâmetros de URL, res.json() — são os mesmos.

A diferença está nas funcionalidades adicionais. O Express tem suporte a template engines (EJS, Pug, Handlebars), tratamento de erros avançado (middleware de erro com 4 parâmetros), sub-apps (montar uma aplicação dentro de outra), configuração por ambiente (development, production), e muito mais.

Mas o princípio é o mesmo. Quando você usa app.get() no Express, internamente ele faz exatamente o que nosso Router faz — compara método e URL e encontra o handler. Quando você usa app.use(), internamente ele faz exatamente o que nossa Pipeline faz — executa funções em sequência com next().
-->

---

## O que falta para um Framework Real

| Funcionalidade | Complexidade | Descrição |
|----------------|-------------|-----------|
| **Tratamento de erros** | Média | Middleware com 4 parâmetros (err, req, res, next) |
| **Sub-apps** | Alta | Montar aplicações dentro de aplicações |
| **Template engines** | Média | Renderizar HTML dinâmico |
| **Configuração** | Baixa | Ambientes (dev, prod, test) |
| **Request parsing** | Média | Query strings, cookies, headers |
| **Response helpers** | Baixa | res.redirect(), res.sendFile() |
| **Segurança** | Alta | CORS, CSRF, XSS, rate limiting |
| **Performance** | Alta | Compression, caching, clustering |

<!--
FALA DO PROFESSOR:

Vamos listar o que falta para chegar a um framework real.

Tratamento de erros: no Express, middlewares de erro têm 4 parâmetros — (err, req, res, next). Quando um erro é lançado, o Express pula os middlewares normais e vai direto para o middleware de erro.

Sub-apps: permitem montar uma aplicação dentro de outra. Por exemplo, app.use('/admin', adminApp) — todas as rotas do adminApp ficam sob /admin.

Template engines: permitem renderizar HTML dinâmico. O Express suporta EJS, Pug, Handlebars e outros.

Configuração por ambiente: permite ter configurações diferentes para desenvolvimento, produção e teste.

Request parsing: extrair query strings (?page=1), cookies e headers de forma conveniente.

Response helpers: métodos como res.redirect() e res.sendFile().

Segurança: CORS, CSRF, XSS, rate limiting — proteções contra vulnerabilidades comuns.

Performance: compression (gzip), caching (ETags), clustering (usar múltiplos CPUs).

Cada uma dessas funcionalidades adiciona complexidade significativa. É por isso que frameworks reais têm milhares de linhas.
-->

---

## Reflexão Final

**O que aprendemos construindo o mini framework:**

1. **Router:** como URLs são mapeadas para handlers;
2. **Middlewares:** como requisições são processadas em cadeia;
3. **Parâmetros:** como valores são extraídos de URLs;
4. **Pipeline:** como o fluxo de processamento funciona;
5. **HTTP:** como o protocolo funciona por baixo dos panos.

> **Conclusão:** Frameworks não são mágica. São **código organizado** que resolve **problemas comuns** de forma **estruturada**.

<!--
FALA DO PROFESSOR:

Esta é a reflexão mais importante da disciplina. Frameworks não são mágica. São código — código organizado que resolve problemas comuns de forma estruturada.

Quando você usa app.get() no Express, sabe que internamente existe um Router comparando URLs. Quando você usa app.use(), sabe que existe uma Pipeline executando middlewares em sequência. Quando você usa req.params, sabe que uma regex extraiu os valores da URL.

Esse conhecimento transforma você de um usuário passivo em um usuário consciente. Você não apenas usa o framework — você entende o que ele faz. E isso faz toda a diferença na hora de debugar, otimizar e tomar decisões técnicas.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Nosso mini framework tem os **mesmos fundamentos** que o Express;
2. A diferença está na **robustez** e **funcionalidades adicionais**;
3. Frameworks reais adicionam: tratamento de erros, sub-apps, template engines, segurança, performance;
4. Frameworks não são mágica — são **código organizado**;
5. Construir um mini framework é uma **experiência de aprendizado** inestimável.
---

**Pergunta reflexiva:**

> Agora que você entende como um framework funciona por dentro, como isso muda a forma como você utiliza o Express no dia a dia?

**Próxima aula:** Aula ao vivo — Construção de um Mini Framework.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva é a síntese de toda a disciplina. Quando você entende o que acontece por baixo dos panos, deixa de ser um usuário que copia e cola código de tutoriais e se torna um desenvolvedor que compreende, analisa e toma decisões técnicas conscientes.

Na próxima aula — aula ao vivo — vamos construir o mini framework completo, do zero, em tempo real.
-->

---

<!-- _class: bg-fim -->

#
