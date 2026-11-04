---
marp: true
theme: default
html: true
size: 16:9
paginate: true
footer: "Desenvolvimento Back-End · Aula 2 · Prof. Esp. Allan da Silva"
backgroundImage: url('assets/bg-conteudo.png')
backgroundSize: cover
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

  :root {
    --marinho: #03152F;
    --azul: #006DF6;
    --azul-txt: #006BEB;
    --ciano: #00BDEF;
    --texto: #243044;
    --cinza: #6B7A8C;
    --borda: #DCE3EE;
    --azul-claro: #EAF2FE;
    --ciano-claro: #E6F8FD;
  }

  section {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: var(--texto);
    font-size: 24px;
    line-height: 1.42;
    padding: 34px 104px 60px 61px;
    justify-content: flex-start !important;
    background-color: #fff;
  }

  /* Rótulo azul em caixa alta, como "CONTEÚDO" no modelo */
  h6 {
    font-size: 15px; font-weight: 700; color: var(--azul-txt);
    letter-spacing: 0.14em; text-transform: uppercase; margin: 0 0 2px 0;
  }
  h1 {
    font-weight: 700; color: var(--marinho); font-size: 36px;
    line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 4px 0;
  }
  h2 { font-weight: 400; color: var(--cinza); font-size: 19px; margin: 0 0 14px 0; }
  h3 { font-weight: 700; color: var(--marinho); font-size: 21px; margin: 4px 0 6px 0; }
  strong { color: var(--marinho); font-weight: 700; }
  ul, ol { margin: 4px 0; padding-left: 1.1em; }
  li { margin: 4px 0; }
  li::marker { color: var(--ciano); }
  p { margin: 6px 0; }

  /* Código */
  pre {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 16px; line-height: 1.45;
    background: #F5F8FD; color: #1B2A41;
    border: 1px solid var(--borda); border-left: 5px solid var(--azul);
    border-radius: 10px; padding: 12px 18px; margin: 6px 0;
  }
  pre code { background: none; padding: 0; }
  code { font-family: 'JetBrains Mono', monospace; }
  p > code, li > code, td > code, .card code, .box code, .conceito code {
    background: var(--azul-claro); color: var(--marinho);
    padding: 1px 6px; border-radius: 5px; font-size: 0.86em;
  }
  .hljs-keyword, .hljs-built_in, .hljs-literal { color: #0B57C9; }
  .hljs-string, .hljs-regexp { color: #0A7F5A; }
  .hljs-comment { color: #7A8799; font-style: italic; }
  .hljs-number { color: #B4501E; }
  .hljs-title, .hljs-title.function_ { color: #6F3FC4; }
  .hljs-attr, .hljs-property, .hljs-variable { color: var(--marinho); }
  .hljs-params { color: #243044; }
  section.dense pre { font-size: 14.5px; line-height: 1.4; padding: 10px 16px; }

  /* Rodapé e numeração (o logo Un fica no fundo) */
  footer { color: var(--cinza); font-size: 12px; left: 61px; bottom: 22px; }
  section::after { color: var(--cinza); font-size: 13px; font-weight: 600; right: 122px; bottom: 21px; }

  /* Tabelas */
  table { border-collapse: collapse; font-size: 19px; margin: 8px 0; width: 100%; display: table; }
  th { background: var(--marinho); color: #fff; padding: 8px 14px; font-weight: 600; text-align: left; border: none; }
  td { padding: 7px 14px; border: none; border-bottom: 1px solid var(--borda); background: #fff; }
  tr:nth-child(even) td { background: #F7F9FC; }
  table strong { color: var(--marinho); }

  /* Grades */
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; align-items: start; }
  .cols-60 { display: grid; grid-template-columns: 1.4fr 1fr; gap: 26px; align-items: start; }
  .cols > *, .cols-60 > *, .cols-40 > *, .compare > * { min-width: 0; }
  .box code, .card code { overflow-wrap: anywhere; }
  .cols-40 { display: grid; grid-template-columns: 1fr 1.4fr; gap: 26px; align-items: start; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 6px; }
  .cards.c2 { grid-template-columns: repeat(2, 1fr); }
  .cards.c4 { grid-template-columns: repeat(4, 1fr); }

  /* Cartão com número em círculo (layout "Objetivos" / "Resumo") */
  .card {
    background: #fff; border: 1px solid var(--borda); border-radius: 8px;
    padding: 14px 16px; font-size: 19px; line-height: 1.4; color: var(--cinza);
  }
  .card b { display: block; color: var(--marinho); font-size: 19.5px; margin-bottom: 4px; }
  .card .n {
    display: inline-flex; align-items: center; justify-content: center;
    width: 26px; height: 26px; border-radius: 50%; color: #fff; background: var(--azul);
    font-weight: 700; font-size: 14px; margin-bottom: 8px; display: flex;
  }
  .card:nth-child(3n+2) .n { background: var(--ciano); }
  .card:nth-child(3n) .n { background: var(--marinho); }
  .card .ico { font-size: 26px; display: block; margin-bottom: 4px; }
  .card strong { color: var(--marinho); }

  /* Boxes didáticos: ATENÇÃO / NA PRÁTICA / ANALOGIA */
  .box {
    border-radius: 6px; padding: 12px 18px 12px 18px; font-size: 19px; line-height: 1.42;
    background: var(--azul-claro); border-left: 6px solid var(--azul); margin-top: 8px;
  }
  .box .t {
    display: flex; align-items: center; gap: 10px; font-weight: 800; color: var(--marinho);
    font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px;
  }
  .box .t::before {
    content: '!'; display: inline-flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; border-radius: 50%; background: var(--azul); color: #fff;
    font-size: 13px; letter-spacing: 0;
  }
  .box.pratica { background: var(--ciano-claro); border-left-color: var(--ciano); }
  .box.pratica .t::before { content: '✓'; background: var(--ciano); }
  .box.analogia { background: #F3F5F9; border-left-color: var(--marinho); }
  .box.analogia .t::before { content: '≈'; background: var(--marinho); }

  /* Conceito-chave */
  .conceito {
    background: var(--azul-claro); border-left: 6px solid var(--azul); border-radius: 6px;
    padding: 16px 24px; margin-top: 8px;
  }
  .conceito .t { font-size: 14px; font-weight: 800; color: var(--azul-txt); letter-spacing: 0.1em; }
  .conceito .q { font-size: 24px; font-weight: 700; color: var(--marinho); line-height: 1.3; margin: 6px 0; }
  .conceito p { font-size: 17px; color: var(--texto); margin: 4px 0 0; }

  /* Faixa de destaque escura */
  .callout {
    background: var(--marinho); color: #fff; border-radius: 8px; padding: 12px 22px;
    margin-top: 10px; font-size: 18px; border-left: 6px solid var(--ciano);
  }
  .callout strong { color: var(--ciano); }

  /* Sequência numerada (layout "Processo / passo a passo") */
  .steps { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; margin: 10px 0; }
  .steps .s { flex: 1; text-align: center; font-size: 16.5px; color: var(--cinza); line-height: 1.35; }
  .steps .s b { display: block; color: var(--marinho); font-size: 18px; margin: 6px 0 2px; }
  .steps .s i {
    display: inline-flex; align-items: center; justify-content: center; font-style: normal;
    width: 34px; height: 34px; border-radius: 50%; color: #fff; background: var(--azul);
    font-weight: 700; font-size: 15px;
  }
  .steps .s:nth-of-type(2n) i { background: var(--ciano); }
  .steps .s.dark i { background: var(--marinho); }
  .steps .chev { color: #8FB8EE; font-size: 30px; font-weight: 800; padding-top: 2px; }

  /* Fluxo em caixas (layout "Esquema / diagrama") */
  .flow { display: flex; align-items: center; gap: 8px; margin: 10px 0; }
  .flow .b {
    flex: 1; background: var(--azul-claro); border: 1.5px solid #9CC2F5; color: var(--marinho);
    border-radius: 6px; padding: 10px 8px; font-weight: 700; text-align: center; font-size: 17px; line-height: 1.3;
  }
  .flow .b small { display: block; font-weight: 400; color: var(--cinza); font-size: 14px; }
  .flow .b.alt { background: var(--ciano-claro); border-color: #8FDDF3; }
  .flow .b.dark { background: var(--marinho); color: #fff; border-color: var(--marinho); }
  .flow .b.dark small { color: #BFD3EE; }
  .flow.v { flex-direction: column; align-items: stretch; }
  .cards.c1, .compare.c1 { grid-template-columns: 1fr; }
  .flow .a { color: #6FA3EA; font-size: 22px; font-weight: 800; }

  /* Comparação A × B */
  .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 6px; }
  .compare > div { border: 1px solid var(--borda); border-radius: 6px; overflow: hidden; font-size: 19px; }
  .compare .h { background: var(--marinho); color: #fff; font-weight: 700; text-align: center; padding: 7px; font-size: 16px; letter-spacing: 0.04em; }
  .compare > div:nth-child(2) .h { background: var(--azul); }
  .compare ul { margin: 8px 14px 10px 6px; }
  .compare pre { margin: 0; border: none; border-radius: 0; font-size: 13.5px; }

  .legenda { font-size: 13px; color: var(--marinho); margin-top: 4px; }
  .fonte { font-size: 12.5px; color: var(--cinza); font-style: italic; }
  .muted { color: var(--cinza); }
  .small { font-size: 17px; }

  /* Capa */
  section.capa { padding: 0 260px 0 58px; justify-content: center !important; }
  section.capa h1 { font-size: 44px; line-height: 1.12; margin-top: 70px; max-width: 760px; }
  section.capa h2 { font-size: 21px; margin: 12px 0 22px; max-width: 760px; }
  section.capa .linha { width: 88px; height: 5px; background: var(--ciano); margin-bottom: 22px; }
  section.capa p { font-size: 18px; margin: 4px 0; color: var(--cinza); }
  section.capa p strong { color: var(--texto); }

  /* Divisória de parte (layout "Unidade") */
  section.secao { padding: 60px 220px 60px 67px; justify-content: flex-start; }
  section.secao h6 { font-size: 26px; letter-spacing: 0.08em; margin-bottom: 18px; }
  section.secao h1 { font-size: 42px; max-width: 800px; }
  section.secao h2 { font-size: 20px; max-width: 700px; margin-top: 18px; }
  section.secao .agenda { margin-top: 30px; font-size: 19px; color: var(--texto); }

  /* Encerramento */
  section.fim { padding: 0 220px 0 69px; justify-content: center !important; }
  section.fim h1 { font-size: 56px; }
  section.fim p { font-size: 20px; color: var(--cinza); }

  /* Referências */
  section.refs p { font-size: 16px; border-bottom: 1px solid var(--borda); padding: 7px 0; margin: 0; }
---

<!-- _class: capa -->
<!-- _backgroundImage: url('assets/bg-capa.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Express por dentro: middlewares, camadas e SOLID

## Aula 2 · Unidade II · Arquitetura MVC e design de código com SOLID

<div class="linha"></div>

**Professor: Prof. Esp. Allan da Silva**

Desenvolvimento Back-End  •  Aula 2 de 4  •  50 minutos

<!--
🎤 **Fala do Professor:**

"Olá, pessoal! Na aula passada, o nosso servidor respondeu às primeiras requisições. Hoje vamos olhar para dentro dele e responder a uma pergunta que todo desenvolvedor enfrenta cedo ou tarde: como organizar o código para que ele continue compreensível depois de meses de evolução? O Express é minimalista: ele não impõe estrutura de pastas nenhuma. Isso é ótimo para começar e perigoso para crescer. Hoje vamos entender os middlewares, o coração do Express, e organizar a API em camadas, Controller, Service e Repository, guiados pelos princípios SOLID. A ideia central da aula é uma só: reduzir o custo de mudar o sistema sem quebrar o que já funciona."
-->

---

###### Planejamento

# Roteiro da aula · 50 minutos

## Do servidor que "funciona" ao servidor fácil de mudar

<div class="steps">
  <div class="s"><i>1</i><b>0–5 min</b>O problema da "média 6 para 7"</div>
  <div class="chev">›</div>
  <div class="s"><i>2</i><b>5–20 min</b>MVC e o pipeline de middlewares do Express</div>
  <div class="chev">›</div>
  <div class="s"><i>3</i><b>20–35 min</b>Controller, Service e Repository na prática</div>
  <div class="chev">›</div>
  <div class="s dark"><i>4</i><b>35–50 min</b>SOLID, injeção de dependência e teste sem banco</div>
</div>

<div class="cols">
<div class="box pratica"><div class="t">Ponto de partida</div>O servidor Express da Aula 1, com as rotas <code>/api/saude</code> e <code>/api/cursos</code>.</div>
<div class="box"><div class="t">Ponto de chegada</div>A API acadêmica organizada em <strong>pastas e camadas</strong>, com um <strong>teste que roda sem banco</strong>.</div>
</div>

<!--
🎤 **Fala do Professor:**

"O roteiro de hoje: começamos com um problema bem real, a famosa mudança de um número só que quebra o sistema inteiro. Depois vamos entender o MVC e o caminho que uma requisição percorre dentro do Express, passando pelos middlewares. No terceiro bloco, refatoramos uma rota gorda em três camadas. E no final vemos os princípios SOLID e a injeção de dependência, fechando com o maior prêmio dessa organização: testar uma regra de negócio em milissegundos, sem banco e sem HTTP."
-->

---

###### Objetivos

# Metas de aprendizagem

## Ao final da aula, você deve ser capaz de:

<div class="cards">
  <div class="card"><span class="n">1</span><b>Relacionar</b>o padrão MVC às peças de uma API Express</div>
  <div class="card"><span class="n">2</span><b>Explicar</b>o pipeline de middlewares e por que a <strong>ordem</strong> importa</div>
  <div class="card"><span class="n">3</span><b>Escrever</b>middlewares próprios com <code>(req, res, next)</code></div>
  <div class="card"><span class="n">4</span><b>Diferenciar</b>as camadas Controller, Service e Repository</div>
  <div class="card"><span class="n">5</span><b>Associar</b>cada princípio SOLID ao problema que ele resolve</div>
  <div class="card"><span class="n">6</span><b>Aplicar</b>injeção de dependência para testar regras sem banco</div>
</div>

<!--
🎤 **Fala do Professor:**

"Seis objetivos para hoje. Repare que três deles são sobre o Express em si, middlewares e pipeline, e três são sobre design de código, que vale para qualquer linguagem. O e-book usa Laravel, mas o Quadro 13 mostra que Express, Spring, ASP.NET e Laravel têm exatamente as mesmas peças com nomes diferentes. Se vocês entenderem a ideia hoje, vão se orientar em qualquer um deles."
-->

---

###### Contextualização

# "É só mudar a média de 6 para 7..."

## Um pedido simples da coordenação que vira uma semana de trabalho

<div class="cols-60">
<div>

- A regra está **misturada** com SQL, JSON e envio de e-mail na **mesma rota**
- O mesmo cálculo está **copiado** em vários arquivos
- Cada correção gera um **novo defeito** em outro lugar
- **Não há testes** para confirmar nada

</div>
<div class="box analogia"><div class="t">Analogia · a cozinha</div>
Imagine uma cozinha em que <strong>o mesmo cozinheiro</strong> atende o salão, prepara o prato, lava a louça e faz as compras. Funciona com 3 mesas; com 50, vira <strong>caos</strong>.
</div>
</div>

<div class="callout">Organizar o código não é questão de gosto: é questão de <strong>custo</strong>. Quanto mais confusa a estrutura, mais <strong>caro</strong> fica evoluir o sistema.</div>

<!--
🎤 **Fala do Professor:**

"Imaginem: a coordenação pede para mudar a média de aprovação de 6 para 7, um único número. Só que, no sistema, essa regra está dentro de uma rota do Express, misturada com SQL, com a montagem do JSON e com o envio de e-mail, e ainda foi copiada em três outras rotas. Vocês mudam em um lugar, esquecem outro, e o relatório para de funcionar. Escrever código que funciona é só o primeiro passo; o desafio começa meses depois. É como uma cozinha em que um único cozinheiro faz tudo: com três mesas dá, com cinquenta vira caos. O callout resume a aula: organizar o código é uma questão de custo."
-->

---

###### Comparação

# O padrão MVC numa API Express

## Mesmas três responsabilidades, nomes do ecossistema Node

<div class="cards">
  <div class="card"><span class="ico">📦</span><b>Model</b>os <strong>dados</strong> e as regras: tabelas acessadas com <code>pg</code>, Prisma ou Sequelize</div>
  <div class="card"><span class="ico">🧾</span><b>View</b>a <strong>representação</strong>: em APIs, o JSON de <code>res.json()</code></div>
  <div class="card"><span class="ico">🧭</span><b>Controller</b>as <strong>funções</strong> ligadas às rotas, que coordenam o fluxo</div>
</div>

| Framework | Model | View | Controller |
|---|---|---|---|
| **Laravel** (PHP) | Eloquent | Blade / API Resources | classes em `Http/Controllers` |
| **Express** (Node.js) | `pg`, Prisma, Sequelize | templates ou `res.json()` | funções associadas às rotas |
| **Spring Boot** (Java) | entidades JPA | objetos em JSON | `@RestController` |

<p class="fonte">Fonte: adaptado do Quadro 13 do e-book (SILVA, 2026).</p>

<!--
🎤 **Fala do Professor:**

"O MVC foi formulado por Trygve Reenskaug no fim dos anos 1970 para separar três responsabilidades: o Model representa os dados e as regras, a View apresenta o resultado e o Controller recebe a requisição e coordena o fluxo. Numa API, a View não é uma página, é o JSON. A tabela, adaptada do Quadro 13 do e-book, mostra que todo framework tem essas peças. O detalhe importante do Express é a última frase da seção 2.1.4: frameworks minimalistas não impõem estrutura de pastas. Cabe à equipe adotar a organização em camadas que vamos ver hoje. Ou seja: no Laravel a estrutura vem pronta; no Express, a disciplina é nossa."
-->

---

###### Figura

# O ciclo de vida de uma requisição no Express

## Tudo é middleware: uma fila de funções que a requisição atravessa

<div class="flow">
  <div class="b">helmet<small>cabeçalhos</small></div><div class="a">›</div>
  <div class="b">cors<small>origens</small></div><div class="a">›</div>
  <div class="b">express.json<small>req.body</small></div><div class="a">›</div>
  <div class="b alt">requestId<small>X-Request-Id</small></div><div class="a">›</div>
  <div class="b alt">Router /api/v1<small>rota + validação</small></div><div class="a">›</div>
  <div class="b dark">Controller<small>responde</small></div>
</div>
<p class="legenda">Figura 1 – Pipeline da API acadêmica. Erros, em qualquer ponto, pulam para o <strong>tratador de erros</strong> no fim da fila.</p>

<div class="cols">
<div>

- Cada middleware pode **ler/alterar** `req` e `res`
- Pode **responder** e encerrar a fila
- Ou chamar **`next()`** para passar adiante
- `next(erro)` **pula** direto para o tratador de erros

</div>
<div class="box analogia"><div class="t">Analogia · o aeroporto</div>
Check-in, raio-x, controle de passaporte, portão de embarque. Cada posto <strong>verifica uma coisa</strong> e libera o passageiro para o próximo, ou o <strong>barra</strong> ali mesmo.
</div>
</div>

<!--
🎤 **Fala do Professor:**

"No Laravel, o e-book descreve o ciclo de vida com front controller, providers e middlewares. No Express, a ideia é ainda mais explícita: tudo é middleware. Uma aplicação Express é uma fila de funções, e a requisição atravessa uma por uma. O helmet coloca cabeçalhos de segurança, o cors decide quais origens podem chamar a API, o express.json transforma o corpo em req.body, o nosso requestId gera o identificador da requisição, e assim por diante até o controller responder. Cada função pode passar adiante com next, responder e encerrar, ou sinalizar um erro. É como o aeroporto: cada posto verifica uma coisa e libera ou barra o passageiro."
-->

---

<!-- _class: dense -->

###### Código

# Anatomia de um middleware

## Uma função com três parâmetros: `(req, res, next)`

<div class="cols">
<div>

```js
// src/middlewares/requestId.js
const { randomUUID } = require('node:crypto');

// Correlation ID: acompanha a requisição
// nos logs e volta na resposta
module.exports = function requestId(req, res, next) {
  req.id = req.get('X-Request-Id') ?? randomUUID();
  res.set('X-Request-Id', req.id);
  next();                       // passa adiante
};
```

```js
// src/app.js (trecho)
app.use(requestId);   // vale para TODAS as rotas
app.use(logger);
```

</div>
<div>

```js
// src/middlewares/logger.js
module.exports = function logger(req, res, next) {
  const inicio = performance.now();

  res.on('finish', () => {      // quando a resposta sair
    console.log(JSON.stringify({
      request_id: req.id,
      metodo: req.method,
      rota: req.originalUrl,
      status: res.statusCode,
      ms: Math.round(performance.now() - inicio),
    }));
  });
  next();
};
```

<div class="box pratica"><div class="t">Saída real no terminal</div><code>{"request_id":"7f3c…","metodo":"GET","rota":"/api/v1/alunos","status":200,"ms":4}</code></div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Vejam como um middleware é simples: uma função que recebe a requisição, a resposta e o next. O requestId gera um identificador único, ou reaproveita o que o cliente mandou, e coloca esse valor na requisição e no cabeçalho da resposta. O logger anota a hora de início e registra uma linha de log em JSON quando a resposta termina. Com app.use, eles passam a valer para todas as rotas, sem que nenhum controller precise saber que eles existem. Reparem no princípio: o que é transversal, como log, autenticação e cabeçalhos, não pertence ao controller. Na Aula 3 vamos usar o request_id para rastrear erros."
-->

---

###### Box didático

# A ordem dos middlewares importa

## O Express executa na ordem em que você registra

<div class="cols">
<div>

```js
// src/app.js — a ordem da nossa API
app.use(helmet());                 // 1. segurança
app.use(cors({ origin: config.corsOrigins }));
app.use(express.json({ limit: '100kb' }));
app.use(requestId);                // 2. rastreio
app.use(logger);

app.use('/api/v1', criarRotasV1(deps)); // 3. rotas

app.use(rotaNaoEncontrada);        // 4. 404
app.use(tratadorDeErros);          // 5. por ÚLTIMO
```

</div>
<div>

<div class="box"><div class="t">Erro clássico 1</div><code>express.json()</code> registrado <strong>depois</strong> das rotas: <code>req.body</code> chega <strong>undefined</strong>.</div>

<div class="box"><div class="t">Erro clássico 2</div>Tratador de erros registrado <strong>antes</strong> das rotas: ele nunca é chamado. E ele precisa ter <strong>4 parâmetros</strong>: <code>(err, req, res, next)</code>.</div>

<div class="box pratica"><div class="t">Express 5</div>Erros lançados em funções <code>async</code> vão <strong>sozinhos</strong> para o tratador: nada de <code>try/catch</code> em cada rota.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este slide vai poupar horas de depuração de vocês. O Express executa os middlewares exatamente na ordem em que são registrados. Primeiro a segurança, depois o parse do corpo e o rastreio, depois as rotas, e no final o 404 e o tratador de erros. Dois erros clássicos: registrar o express.json depois das rotas, e aí o req.body chega undefined, e registrar o tratador de erros antes das rotas, e aí ele nunca é chamado. O Express reconhece o tratador de erros pela quantidade de parâmetros: são quatro. E uma novidade do Express 5, a versão que estamos usando: se uma função async lançar um erro, ele vai automaticamente para o tratador. No Express 4 era preciso try/catch ou um pacote auxiliar."
-->

---

<!-- _class: secao -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

###### Parte 2

# Controller ➜ Service ➜ Repository

## O MVC é o ponto de partida. Sistemas que crescem pedem camadas com papéis bem definidos.

<div class="agenda">Responsabilidades · Antes e depois · Estrutura de pastas · Service e Repository</div>

<!--
🎤 **Fala do Professor:**

"O MVC não diz onde colocar regras de negócio complexas. Em projetos que crescem, elas acabam no controller, gerando o famoso controller gordo. A comunidade resolveu isso com uma divisão mais fina em camadas. Vamos ver como."
-->

---

###### Conteúdo

# Cada camada com uma única preocupação

## Cada uma conversa apenas com a camada imediatamente abaixo

<div class="flow">
  <div class="b">🎛️ Controller<small>HTTP: req ⇄ res</small></div><div class="a">›</div>
  <div class="b alt">🧠 Service<small>regras de negócio</small></div><div class="a">›</div>
  <div class="b dark">🗄️ Repository<small>SQL e dados</small></div>
</div>

| Camada | Responsabilidade | Não deve | Analogia (secretaria) |
|---|---|---|---|
| **Controller** | traduzir HTTP em chamadas e respostas | conter **regras** ou **SQL** | atendente do balcão |
| **Service** | executar regras e **casos de uso** | conhecer `req`, `res` ou SQL | responsável pelo setor |
| **Repository** | buscar e guardar **dados** | decidir regras de negócio | arquivista |

<div class="box pratica"><div class="t">O teste do "não deve"</div>Se o Service tem um <code>req</code> ou um <code>res.status()</code>, ou o Controller tem um <code>SELECT</code>, a camada <strong>vazou</strong>.</div>

<!--
🎤 **Fala do Professor:**

"O Controller lida com HTTP: lê a requisição, chama o caso de uso e monta a resposta. O Service guarda as regras de negócio, como verificar se o e-mail já existe ou gerar o RA, e não sabe nada de HTTP. O Repository encapsula o acesso a dados e esconde se eles vêm de um banco, de uma API ou de um arquivo. A analogia do e-book é a secretaria acadêmica: o atendente recebe o pedido, o responsável pelo setor aplica as normas e o arquivista busca e guarda os documentos, e ninguém faz o trabalho do outro. Uma regra prática de revisão de código: se aparecer req ou res dentro do service, ou SQL dentro do controller, alguma camada vazou."
-->

---

<!-- _class: dense -->

###### Comparação

# Antes e depois: o cadastro de alunos

## A mesma funcionalidade, com as responsabilidades em endereços diferentes

<div class="compare">
<div><div class="h">ANTES · ROTA GORDA</div>

```js
app.post('/alunos', async (req, res) => {
  if (!req.body.nome) {                 // validação manual
    return res.status(400).json({ erro: 'nome' });
  }
  const { rows } = await pool.query(    // SQL na rota
    'SELECT id FROM alunos WHERE email = $1',
    [req.body.email]);
  if (rows.length) return res.status(409).json({});
  const ra = `${new Date().getFullYear()}${
    Math.floor(Math.random() * 1e6)}`;   // regra
  await pool.query('INSERT INTO alunos ...');
  await enviarEmail(req.body.email, ra); // e-mail
  res.status(201).json({ ra });
});
```

</div>
<div><div class="h">DEPOIS · CONTROLLER FINO</div>

```js
// src/controllers/aluno.controller.js
async store(req, res) {
  // 1. dados já validados por um middleware
  // 2. delega a regra ao Service
  const aluno = await cadastro.cadastrar(req.dados);

  // 3. responde com o recurso criado
  res.status(201)
    .location(`/api/v1/alunos/${aluno.id}`)
    .json(alunoResource(aluno));
}
```

<ul>
<li>Regra do e-mail duplicado ➜ <strong>Service</strong></li>
<li>SQL ➜ <strong>Repository</strong> (trocável)</li>
<li>E-mail ➜ atrás de um <strong>notificador</strong></li>
</ul>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Vamos ver isso no código. À esquerda, uma rota que funciona, mas concentra tudo: validação manual, SQL, regra do e-mail duplicado, geração do RA, gravação e envio de e-mail. Os problemas aparecem logo: para testar a regra do e-mail duplicado é preciso subir o servidor e um banco; a geração do RA não pode ser reaproveitada numa importação de planilha; e se a faculdade trocar o e-mail pelo WhatsApp, a rota precisa mudar. À direita, depois da refatoração, o controller só tem três passos. Nenhuma funcionalidade sumiu: cada responsabilidade só mudou de endereço. Este é o controller real do projeto de apoio, e ele está testado."
-->

---

###### Figura

# Uma estrutura de pastas para a API acadêmica

## O Express não impõe nada: esta é uma convenção da equipe

<div class="cols-60">
<div>

```text
api-academica-node/
├── server.js            ← sobe o servidor (listen)
├── src/
│   ├── app.js           ← monta middlewares e rotas
│   ├── config.js        ← lê process.env
│   ├── container.js     ← liga as peças (DI)
│   ├── middlewares/     ← requestId, logger, auth...
│   ├── routes/v1/       ← URIs ➜ controllers
│   ├── controllers/     ← HTTP ⇄ casos de uso
│   ├── services/        ← regras de negócio
│   ├── repositories/    ← SQL
│   └── schemas/         ← validação (Zod)
└── test/                ← node --test
```

</div>
<div>

<div class="box pratica"><div class="t">Por que separar app.js de server.js?</div>O <code>app</code> pode ser importado <strong>nos testes</strong> sem ocupar uma porta fixa: <code>criarApp(deps).listen(0)</code>.</div>

<div class="box analogia"><div class="t">Analogia</div>A planta de uma cozinha profissional: <strong>cada estação no seu lugar</strong>. Um cozinheiro novo sabe onde procurar a faca.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Esta é a estrutura do projeto de apoio que acompanha os slides. Cada pasta corresponde a uma responsabilidade que acabamos de ver. Dois detalhes que fazem diferença: o server.js só sobe o servidor, enquanto o app.js monta a aplicação. Assim, nos testes, importamos o app e o colocamos numa porta qualquer, sem conflito. E o container.js é o lugar onde as peças são ligadas, que vamos ver daqui a pouco. Não existe uma estrutura oficial do Express; o importante é que a equipe combine uma e a siga. Um colega novo deve conseguir adivinhar onde está cada coisa."
-->

---

<!-- _class: dense -->

###### Código

# O Service: regras de negócio puras

## Não conhece `req`, `res`, SQL nem Express

```js
// src/services/cadastroAluno.service.js
class CadastroAlunoService {
  #alunos; #notificador;                      // campos privados do JavaScript

  constructor({ alunos, notificador }) {      // as dependências CHEGAM prontas
    this.#alunos = alunos;
    this.#notificador = notificador;
  }

  async cadastrar({ nome, email, cursoId }) {
    if (await this.#alunos.buscarPorEmail(email)) {
      throw new EmailJaCadastradoError(email);  // erro de DOMÍNIO, não HTTP
    }
    const ra = gerarRa();                       // ex.: "2026048213"
    const aluno = await this.#alunos.salvar({ nome, email, ra, cursoId });
    await this.#notificador.enviar(email, `Bem-vindo(a)! Seu RA é ${ra}.`);
    return aluno;
  }
}
```

<div class="box pratica"><div class="t">O que demonstra</div>O service lança um erro de domínio e <strong>não decide o status HTTP</strong>: quem traduz para <code>409</code> é o tratador global (Aula 3).</div>

<!--
🎤 **Fala do Professor:**

"Este é o service de cadastro. Reparem em três coisas. Primeiro, ele recebe as dependências no construtor: o repositório de alunos e o notificador. Ele não sabe se o repositório usa PostgreSQL ou um array em memória, nem se o notificador manda e-mail ou WhatsApp. Segundo, as regras ficam aqui: e-mail duplicado e geração do RA. Terceiro, quando a regra é violada, ele lança um erro de domínio, com nome de negócio. Ele não escreve res.status(409), porque não sabe que existe HTTP. Isso permite usar o mesmo service numa rota, num script de importação ou num teste."
-->

---

<!-- _class: dense -->

###### Código

# O Repository: o único lugar que sabe SQL

## Uma interface simples para o resto da aplicação

<div class="cols-60">
<div>

```js
// src/repositories/aluno.repository.js
function criarAlunoRepository(db) {
  return {
    async buscarPorEmail(email) {
      const { rows } = await db.query(
        'SELECT id FROM alunos WHERE email = $1',
        [email]);                 // parâmetro, nunca concatenação
      return rows[0] ?? null;
    },

    async salvar({ nome, email, ra, cursoId }) {
      const { rows } = await db.query(
        `INSERT INTO alunos (nome, email, ra, curso_id)
         VALUES ($1, $2, $3, $4)
         RETURNING id, nome, email, ra, curso_id`,
        [nome, email, ra, cursoId]);
      return rows[0];
    },
  };
}
```

</div>
<div>

```js
// src/repositories/alunoMemoria.repository.js
// MESMO contrato, sem banco: para testes
function criarAlunoMemoriaRepository() {
  const alunos = [];
  return {
    async buscarPorEmail(email) {
      return alunos.find(a => a.email === email)
        ?? null;
    },
    async salvar(dados) {
      const aluno = { id: alunos.length + 1, ...dados };
      alunos.push(aluno);
      return aluno;
    },
  };
}
```

<div class="box"><div class="t">Contrato implícito</div>JavaScript não tem <code>interface</code>: o contrato são os <strong>métodos esperados</strong> (<em>duck typing</em>).</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"O repositório concentra o SQL de alunos. Reparem nos marcadores dólar um, dólar dois: o valor nunca é colado no texto do SQL, assunto que aprofundaremos na Aula 4. À direita está um segundo repositório, com o mesmo contrato, mas guardando os dados num array. Como o JavaScript não tem a palavra-chave interface, o contrato é implícito: qualquer objeto que tenha buscarPorEmail e salvar serve. É o famoso duck typing: se anda como pato e grasna como pato, é um pato. Se vocês usarem TypeScript, dá para declarar uma interface explícita. Essa troca de peças é o que vai permitir o teste sem banco."
-->

---

<!-- _class: secao -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

###### Parte 3

# SOLID e injeção de dependência

## Cinco princípios com um único objetivo: reduzir o custo de mudança.

<div class="agenda">SRP · OCP · LSP · ISP · DIP · Composition root · Teste sem banco</div>

<!--
🎤 **Fala do Professor:**

"Por que essa organização funciona? Os princípios SOLID explicam. Vamos vê-los sempre a partir do problema que cada um resolve, e não como uma lista para decorar."
-->

---

###### Conteúdo

# SOLID: cinco princípios, um objetivo

## Reunidos por Robert C. Martin; acrônimo de Michael Feathers

<div class="cards">
  <div class="card"><span class="ico">🎯</span><b>S · Responsabilidade Única</b>um módulo responde a <strong>um único ator</strong>: um só motivo para mudar</div>
  <div class="card"><span class="ico">🔌</span><b>O · Aberto/Fechado</b><strong>aberto</strong> para extensão, <strong>fechado</strong> para modificação</div>
  <div class="card"><span class="ico">🔄</span><b>L · Substituição de Liskov</b>quem implementa o contrato <strong>substitui</strong> o outro sem quebrar nada</div>
  <div class="card"><span class="ico">✂️</span><b>I · Segregação de Interfaces</b>ninguém depende de métodos que <strong>não usa</strong></div>
  <div class="card"><span class="ico">🔃</span><b>D · Inversão de Dependência</b>regras e detalhes dependem de <strong>abstrações</strong></div>
  <div class="card"><span class="ico">💰</span><b>Objetivo comum</b>uma regra nova altera <strong>poucos arquivos</strong>, sem efeitos colaterais</div>
</div>

<!--
🎤 **Fala do Professor:**

"Os princípios SOLID foram reunidos por Robert C. Martin no início dos anos 2000. Cada letra é um princípio: Responsabilidade Única, Aberto-Fechado, Substituição de Liskov, Segregação de Interfaces e Inversão de Dependência. O sexto card é o mais importante: todos servem para reduzir o custo de mudança. Não são leis, são orientações, e aplicá-los em excesso também gera complexidade. Nos próximos slides, vamos ver cada um no contexto do Node."
-->

---

<!-- _class: dense -->

###### Código

# SRP e OCP: novos descontos sem mexer no que funciona

## Antes, um `switch` que crescia a cada desconto; agora, uma classe por desconto

<div class="cols-60">
<div>

```js
class DescontoPercentual {                 // um desconto = uma classe
  constructor(percentual) { this.percentual = percentual; }
  aplicar(valor) {
    return Math.round(valor * (1 - this.percentual / 100) * 100) / 100;
  }
}

class DescontoFixo {                       // NOVO: nada mais muda
  constructor(valor) { this.valor = valor; }
  aplicar(valor) { return Math.max(0, valor - this.valor); }
}

class CalculadoraMensalidade {             // fechada para modificação
  calcular(valor, ...descontos) {
    return descontos.reduce((total, d) => d.aplicar(total), valor);
  }
}

new CalculadoraMensalidade().calcular(1200,
  new DescontoPercentual(20), new DescontoPercentual(5)); // ➜ 912
```

</div>
<div>

<div class="box"><div class="t">SRP · sinal de alerta</div>Uma classe que <strong>calcula</strong> a média, <strong>monta</strong> o relatório e <strong>envia</strong> o e-mail tem <strong>três atores</strong> pedindo mudanças.</div>

<div class="box pratica"><div class="t">OCP · resultado</div>O "desconto para irmãos" vira <strong>uma classe nova</strong> com <code>aplicar()</code>, e os descontos ainda podem ser <strong>combinados</strong>.</div>

<div class="box analogia"><div class="t">Analogia</div>A <strong>tomada padrão</strong>: aparelho novo, mesma tomada, nenhuma obra na parede.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"O SRP pergunta: quem pede as mudanças? Se a coordenação muda a fórmula e o setor de comunicação muda o layout, essas mudanças não deveriam tocar a mesma classe. O OCP diz que deve ser possível acrescentar comportamento escrevendo código novo, sem alterar código já testado. O sintoma clássico de violação é um switch que cresce a cada regra. Na versão refatorada, a calculadora só sabe que cada desconto tem um método aplicar, e usa o reduce para aplicar um após o outro. Conta do exemplo, que eu rodei: 1.200 com 20% vira 960, e com mais 5% chega a 912. Quando surgir o desconto para irmãos, alguém escreve uma classe nova e a calculadora nem fica sabendo."
-->

---

###### Comparação

# LSP e ISP: contratos confiáveis

## Em JavaScript o contrato é implícito, o que exige ainda mais disciplina

<div class="compare">
<div><div class="h">LISKOV · SUBSTITUIÇÃO</div>

- Ruim: `NotificadorSms.enviar()` **lança erro** acima de 160 caracteres: exige mais que o contrato
- Bom: divide a mensagem em partes e **cumpre a promessa**
- Sinal: `if (notificador instanceof NotificadorSms)`

</div>
<div><div class="h">SEGREGAÇÃO DE INTERFACES</div>

- Ruim: um repositório "faz-tudo" com listar, salvar, excluir, **exportarPdf**, **importarPlanilha**
- Bom: contratos pequenos: **leitura**, **escrita**, **exportação**
- Sinal: métodos **vazios** ou que lançam "não implementado"

</div>
</div>

<div class="box pratica"><div class="t">Benefício direto</div>Contratos pequenos deixam os <strong>fakes de teste</strong> pequenos: o repositório em memória só precisa de <code>buscarPorEmail</code> e <code>salvar</code>.</div>

<!--
🎤 **Fala do Professor:**

"Os dois próximos princípios tratam de contratos. Liskov diz que quem implementa um contrato deve poder substituir o outro sem quebrar o programa: não pode exigir mais nem entregar menos. Um notificador de SMS que recusa mensagens longas quebra a promessa, e o sinal de alerta é aparecer instanceof no código para tratar o caso especial. O ISP diz que ninguém deve depender de métodos que não usa: um repositório somente leitura não deveria ser obrigado a ter importarPlanilha. Em JavaScript isso é ainda mais importante, porque o contrato é implícito e o erro só aparece em tempo de execução. A recompensa é prática: fakes de teste pequenos e fáceis de escrever."
-->

---

<!-- _class: dense -->

###### Código

# DIP e injeção de dependência: o composition root

## Um único arquivo decide **qual** implementação usar

<div class="cols-60">
<div>

```js
// src/container.js (trecho)
const { pool, transacao } = require('./db');

function criarContainer({
  alunos = criarAlunoRepository(pool),   // padrão: PostgreSQL
  notificador = notificadorConsole,      // trocar por e-mail
} = {}) {
  const cadastro = new CadastroAlunoService({ alunos, notificador });
  return {
    alunoController: criarAlunoController({ cadastro, alunos }),
    matriculaService: new MatriculaService({ transacao }),
  };
}
```

```js
// server.js
const app = criarApp(criarContainer());
app.listen(config.porta);
```

</div>
<div>

<div class="compare c1">
<div><div class="h">SEM INVERSÃO</div>

- O service faz `new PgAlunoRepository()`
- Trocar de banco ➜ **alterar o service**
- Testar sem banco ➜ **impossível**

</div>
</div>

<div class="box analogia"><div class="t">Analogia · o cirurgião</div>Ele não fabrica o bisturi: <strong>recebe pronto</strong> da equipe, e o instrumento pode ser trocado.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"O princípio da Inversão de Dependência diz que as regras de negócio não devem depender dos detalhes técnicos; ambos dependem de abstrações. Se o service fizesse new PgAlunoRepository, ficaria amarrado ao PostgreSQL. A técnica que resolve isso é a injeção de dependência: a classe declara o que precisa no construtor e alguém de fora entrega pronto. No Laravel, quem faz isso é o Service Container. No Express não há container embutido, então criamos um composition root à mão: o container.js, o único lugar que decide quais implementações usar. Repare nos valores padrão: PostgreSQL e um notificador simples, que depois trocamos por e-mail. Nos testes, passamos outras peças."
-->

---

<!-- _class: dense -->

###### Na prática

# O prêmio: testar a regra sem banco e sem HTTP

## Graças à injeção de dependência, o teste roda em milissegundos

<div class="cols">
<div>

```js
// test/cadastro.test.js — rode com: npm test
const { test } = require('node:test');
const assert = require('node:assert/strict');

test('não cadastra e-mail duplicado', async () => {
  const enviados = [];
  const service = new CadastroAlunoService({
    alunos: criarAlunoMemoriaRepository(),  // fake
    notificador: {                          // fake
      enviar: async (para) => enviados.push(para),
    },
  });
  const ana = { nome: 'Ana Souza',
                email: 'ana@x.com', cursoId: 1 };

  await service.cadastrar(ana);
  await assert.rejects(service.cadastrar(ana),
                       EmailJaCadastradoError);
  assert.equal(enviados.length, 1);
});
```

</div>
<div>

```text
$ npm test
✔ não cadastra e-mail duplicado (1.7ms)
ℹ pass 1
ℹ fail 0
```

<div class="box pratica"><div class="t">O que demonstra</div>Nenhum banco, nenhuma porta, nenhuma biblioteca de teste externa: só o <code>node:test</code> nativo.</div>

<div class="box"><div class="t">E o e-mail?</div>O fake <strong>conta</strong> os envios: o teste prova que o segundo cadastro <strong>não</strong> mandou mensagem.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este é o grande prêmio de toda a organização da aula. O teste cria o service com dois fakes: o repositório em memória e um notificador que só anota para quem mandaria mensagem. Cadastramos a Ana, tentamos cadastrar outro aluno com o mesmo e-mail e verificamos que o service rejeita com o erro de domínio e que só uma mensagem foi enviada. Esse teste roda em menos de dois milissegundos, sem banco e sem subir servidor, e usa só o test runner nativo do Node. Comparem com a rota gorda: para testar a mesma regra, precisaríamos de um banco de verdade e de requisições HTTP. Isso é o que significa código testável."
-->

---

###### Dados

# Maus cheiros que pedem refatoração

## Refatorar é mudar a estrutura **sem alterar o comportamento observável** (Fowler)

| Mau cheiro | Como aparece numa API Express | Remédio |
|---|---|---|
| **Função longa** | callback de rota com 200 linhas | SRP · extrair service |
| **Código duplicado** | mesma regra de "situação" em várias rotas | extrair função ou método |
| **Switches repetidos** | `if`/`switch` por tipo de desconto ou pagamento | OCP · polimorfismo |
| **Lista longa de parâmetros** | funções com seis ou mais argumentos | objeto de parâmetros (DTO) |
| **Dependências demais** | construtor pedindo sete peças | a classe acumula responsabilidades |

<div class="callout">Refatore em <strong>pequenos passos</strong>, rodando os <strong>testes</strong> a cada passo. Sem testes, não é refatoração: é <strong>aposta</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Na vida real, raramente vocês vão aplicar SOLID num projeto novinho. Quase sempre vão encontrar código que já existe e precisa melhorar sem quebrar o que funciona. Esse processo é a refatoração, e o Fowler a define bem: mudar a estrutura interna sem alterar o comportamento observável. Para saber onde mexer, usamos os maus cheiros da tabela. O último é um ótimo termômetro: se o construtor de uma classe começa a pedir sete dependências, ela provavelmente faz coisas demais. E a regra do callout: refatoração depende de testes. Sem eles, cada mudança é uma aposta."
-->

---

###### Analogias

# Arquitetura no dia a dia

## Os conceitos da aula traduzidos para situações conhecidas

| Conceito | No dia a dia | Na API acadêmica |
|---|---|---|
| **Middleware** | os postos do **aeroporto**: check-in, raio-x, embarque | `helmet`, `cors`, `requestId`, `autenticar` |
| **Camadas** | balcão, setor responsável e **arquivo** da secretaria | Controller, Service, Repository |
| **SRP** | o professor não emite boleto nem limpa a sala | média, layout e envio separados |
| **OCP** | **tomada padrão**: aparelho novo, mesma tomada | novo desconto = nova classe |
| **DIP / injeção** | o cirurgião **recebe** o bisturi pronto | `container.js` entrega o repositório |
| **Fake de teste** | o **simulador de voo**: treina sem avião de verdade | repositório em memória |

<!--
🎤 **Fala do Professor:**

"Vamos trazer tudo para o cotidiano. Middlewares são os postos do aeroporto. As camadas são a secretaria com balcão, setor e arquivo. O SRP é o professor que dá aula, mas não emite boleto. O OCP é a tomada padrão. A injeção de dependência é o cirurgião que recebe o instrumento pronto. E o fake de teste é o simulador de voo: o piloto treina situações de emergência sem colocar um avião de verdade em risco, assim como testamos a regra sem tocar no banco de produção."
-->

---

###### Fechamento

# Resumo da aula

## As ideias que você leva para a próxima etapa

<div class="cards">
  <div class="card"><span class="n">1</span>No Express, <strong>tudo é middleware</strong>: uma fila de funções <code>(req, res, next)</code>, executada <strong>na ordem</strong> registrada.</div>
  <div class="card"><span class="n">2</span>O que é transversal (log, segurança, autenticação) fica em <strong>middlewares</strong>, não no controller.</div>
  <div class="card"><span class="n">3</span><strong>Controller</strong> (HTTP) ➜ <strong>Service</strong> (regras) ➜ <strong>Repository</strong> (SQL).</div>
  <div class="card"><span class="n">4</span><strong>SOLID</strong> existe para reduzir o <strong>custo de mudança</strong>.</div>
  <div class="card"><span class="n">5</span>O <strong>composition root</strong> decide as implementações; as classes só as <strong>recebem</strong>.</div>
  <div class="card"><span class="n">6</span>Injeção de dependência torna a regra <strong>testável sem banco</strong>.</div>
</div>

<div class="callout"><strong>Próxima aula:</strong> API RESTful com Express — verbos, status, validação e erros padronizados. Leitura: seções 3.1 a 3.5.</div>

<!--
🎤 **Fala do Professor:**

"Vamos amarrar. No Express, tudo é middleware, e a ordem importa. O que é transversal fica nos middlewares. A aplicação se divide em Controller, Service e Repository, cada um com uma preocupação. Os princípios SOLID servem para reduzir o custo de mudança, e a injeção de dependência, com o composition root, é o que permite trocar peças e testar regras sem banco. Lembrem: aplicar princípios em excesso, criando camadas que só repassam chamadas, também é um problema. Comece simples e extraia camadas quando a complexidade justificar."
-->

---

###### Reflexão

# Desafio e perguntas para discussão

## Encontre os vazamentos de camada

<div class="cols-60">
<div>

```js
// Desafio: aponte o que está no lugar errado
class MatriculaService {
  async matricular(req, res) {
    const { rows } = await pool.query(
      `SELECT vagas FROM disciplinas
       WHERE id = ${req.body.disciplinaId}`);
    if (rows[0].vagas <= 0) {
      return res.status(409).json({ erro: 'sem vagas' });
    }
    // ...
  }
}
```

</div>
<div>

### Reflita

1. Quantos **vazamentos de camada** há no código ao lado? E um **risco de segurança**?
2. Quando criar um **Service** é burocracia, e não arquitetura?
3. Como testar a regra de **vagas esgotadas** sem banco de dados?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fechar, analisem este service. Ele recebe req e res, ou seja, conhece HTTP. Ele faz SQL direto, ou seja, faz o papel do repositório. Ele decide o status 409, que deveria ser papel do tratador de erros. E há um problema grave de segurança na montagem do SQL, que vamos estudar na Aula 4. Discutam também as perguntas: um service que só repassa uma chamada ao repositório é burocracia. E a regra de vagas pode ser testada com um repositório falso de disciplinas. Para a próxima aula, leiam as seções 3.1 a 3.5 do e-book."
-->

---

<!-- _class: refs -->

###### Fontes

# Referências

SILVA, Allan da. **Desenvolvimento Back-End**: arquitetura, APIs RESTful, persistência de dados e segurança no lado do servidor. E-book. 2026. Unidade II.

OPENJS FOUNDATION. **Express – Using middleware** e **Error handling**. Disponível em: https://expressjs.com/en/guide/using-middleware.html.

MARTIN, Robert C. **Arquitetura limpa**: o guia do artesão para estrutura e design de software. Rio de Janeiro: Alta Books, 2019.

FOWLER, Martin. **Refatoração**: aperfeiçoando o design de códigos existentes. 2. ed. São Paulo: Novatec, 2020.

OPENJS FOUNDATION. **Test runner** (`node:test`). Node.js Documentation. Disponível em: https://nodejs.org/api/test.html.

<div class="box pratica"><div class="t">Código de apoio</div>Middlewares, camadas, container e testes estão em <code>api-academica-node/src</code> e <code>api-academica-node/test</code>.</div>

<!--
🎤 **Fala do Professor:**

"As referências da aula. O livro do Robert Martin e o do Fowler são leituras que acompanham a carreira inteira. E a documentação do Express sobre middlewares e tratamento de erros é curta e vale muito a leitura."
-->

---

<!-- _class: fim -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Obrigado!

**Prof. Esp. Allan da Silva**

Dúvidas? Na próxima aula, a API ganha um contrato REST de verdade.

<!--
🎤 **Fala do Professor:**

"Obrigado, pessoal! Até a próxima aula, quando a nossa API vai ganhar um contrato REST de verdade."
-->
