---
marp: true
theme: default
html: true
size: 16:9
paginate: true
footer: "Desenvolvimento Back-End · Aula 3 · Prof. Esp. Allan da Silva"
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

# Projetando uma API RESTful com Express

## Aula 3 · Unidade III · Um contrato claro entre o back-end e todos os seus clientes

<div class="linha"></div>

**Professor: Prof. Esp. Allan da Silva**

Desenvolvimento Back-End  •  Aula 3 de 4  •  50 minutos

<!--
🎤 **Fala do Professor:**

"Olá, pessoal! Na última aula organizamos a cozinha: middlewares, Controller, Service e Repository. Hoje vamos cuidar da porta de comunicação da API com o mundo, ou seja, de como os clientes pedem as coisas e de como o back-end responde. A pergunta que guia a aula é simples: por que algumas APIs são intuitivas e outras obrigam o desenvolvedor a adivinhar nomes de rotas e formatos de resposta? Vamos aprender REST, URIs, verbos, códigos de status, validação com Zod e erros padronizados, tudo com Express."
-->

---

###### Planejamento

# Roteiro da aula · 50 minutos

## Do conceito de REST ao contrato completo da API

<div class="steps">
  <div class="s"><i>1</i><b>0–5 min</b>Um back-end, muitos clientes</div>
  <div class="chev">›</div>
  <div class="s"><i>2</i><b>5–20 min</b>REST, URIs, Richardson e verbos</div>
  <div class="chev">›</div>
  <div class="s"><i>3</i><b>20–40 min</b>Status, rotas, validação e erros no Express</div>
  <div class="chev">›</div>
  <div class="s dark"><i>4</i><b>40–50 min</b>Paginação, OpenAPI, síntese e desafio</div>
</div>

<div class="cols">
<div class="box pratica"><div class="t">Ferramentas</div><code>curl</code>, Insomnia ou Postman para chamar a API; <strong>Zod</strong> para validar dados.</div>
<div class="box"><div class="t">Ao final</div>Endpoints de alunos com <strong>201 + Location</strong>, <strong>422</strong>, <strong>404</strong> e <strong>409</strong> no formato <strong>RFC 9457</strong>.</div>
</div>

<!--
🎤 **Fala do Professor:**

"O roteiro: começamos entendendo por que precisamos de um contrato. Depois, os fundamentos do REST, desenho de URIs, o modelo de Richardson e os verbos. O bloco central é prático: status, rotas versionadas, validação com Zod e tratamento centralizado de erros no Express. Fechamos com paginação e documentação. No final, a nossa API vai responder de forma previsível em qualquer situação, de sucesso ou de erro."
-->

---

###### Objetivos

# Metas de aprendizagem

## Ao final da aula, você deve ser capaz de:

<div class="cards">
  <div class="card"><span class="n">1</span><b>Compreender</b>recursos, representações e as restrições do REST</div>
  <div class="card"><span class="n">2</span><b>Projetar</b>URIs, verbos e versionamento com <code>express.Router</code></div>
  <div class="card"><span class="n">3</span><b>Analisar</b>uma API pelo modelo de maturidade de Richardson</div>
  <div class="card"><span class="n">4</span><b>Escolher</b>o código de status certo, como 401 × 403 e 422 × 409</div>
  <div class="card"><span class="n">5</span><b>Validar</b>a entrada com Zod e separar validação de regra de negócio</div>
  <div class="card"><span class="n">6</span><b>Centralizar</b>erros no formato RFC 9457, com correlation ID</div>
</div>

<!--
🎤 **Fala do Professor:**

"Estes são os seis objetivos. Os três primeiros são de projeto: entender REST de verdade, e não apenas uma API que devolve JSON, desenhar URIs e avaliar a maturidade de uma API. Os três últimos são de implementação no Express: status, validação e erros. Guardem esses verbos, porque eles também são um roteiro de revisão para a prova."
-->

---

###### Contextualização

# Um back-end, muitos clientes

## Como sistemas escritos em linguagens diferentes conversam de forma previsível?

<div class="cols-60">
<div>

O mesmo sistema acadêmico atende:

- o **portal web** (JavaScript) e o **app do aluno** (Kotlin, Swift)
- o **sistema financeiro** (Java)
- a rotina de **dados** da coordenação (Python)
- a plataforma de uma **empresa parceira**

</div>
<div class="box analogia"><div class="t">Analogia · o cardápio</div>
O <strong>cardápio</strong> é o contrato entre salão e cozinha: diz o que pode ser pedido, como pedir e o que vem no prato. A <strong>API</strong> é o cardápio do back-end.<br><br>Uma API mal desenhada é um cardápio <strong>sem preços nem descrições</strong>.
</div>
</div>

<div class="callout">Uma <strong>API</strong> é um <strong>contrato</strong>: segue convenções conhecidas, comunica erros de forma padronizada e é <strong>bem documentada</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Hoje, raramente um back-end serve apenas a um site. O mesmo sistema acadêmico atende o portal, o aplicativo, o financeiro, uma rotina de dados em Python e talvez a plataforma de uma empresa parceira, cada um numa linguagem diferente. Para que todos conversem de forma previsível, precisamos de um contrato claro: a API. Voltando ao restaurante: o cardápio é o contrato entre salão e cozinha. Uma API mal desenhada é como um cardápio sem preços nem descrições: todo mundo precisa perguntar ao garçom antes de pedir qualquer coisa. No nosso caso, o garçom é o desenvolvedor do back-end respondendo mensagens o dia inteiro."
-->

---

###### Conceito-chave

# REST: recursos e representações

## Roy Fielding, tese de doutorado, 2000

<div class="cards">
  <div class="card"><span class="ico">📦</span><b>Recurso</b>qualquer informação que possa ser <strong>nomeada</strong>: aluno, curso, "matrículas ativas do semestre"</div>
  <div class="card"><span class="ico">🔗</span><b>URI</b>o <strong>identificador</strong> do recurso: <code>/api/v1/alunos/42</code></div>
  <div class="card"><span class="ico">📄</span><b>Representação</b>o <strong>documento</strong> (geralmente JSON) com o estado atual do recurso</div>
</div>

<div class="conceito"><div class="t">CONCEITO-CHAVE</div><div class="q">"O cliente nunca manipula o recurso diretamente: ele troca representações desse recurso."</div><p>Por isso o nome: <strong>RE</strong>presentational <strong>S</strong>tate <strong>T</strong>ransfer.</p></div>

<div class="box analogia"><div class="t">Analogia · a foto 3x4</div>A foto <strong>não é</strong> a pessoa: é uma representação do seu estado num momento. O JSON do aluno 42 não é o aluno 42.</div>

<!--
🎤 **Fala do Professor:**

"REST é um estilo arquitetural descrito por Roy Fielding em sua tese de 2000. Curiosidade: Fielding também foi um dos autores da especificação do HTTP. O conceito central é o recurso: qualquer informação que possa ser nomeada. Cada recurso tem uma URI, e o cliente nunca mexe no recurso em si: ele troca representações. Quando fazemos GET em /alunos/42, o servidor não manda o aluno, manda um documento JSON que representa o estado atual dele. É como a foto 3x4: ela não é você, é uma representação sua num momento. E o mesmo recurso pode ter várias representações, como JSON para o app e PDF para a secretaria."
-->

---

###### Conteúdo

# As restrições do REST

## Quando respeitadas, produzem sistemas simples, escaláveis e fáceis de evoluir

<div class="cards">
  <div class="card"><span class="ico">🔀</span><b>Cliente-servidor</b>interface e armazenamento evoluem de forma <strong>independente</strong></div>
  <div class="card"><span class="ico">🧠</span><b>Sem estado</b>cada requisição traz <strong>tudo</strong> o que é preciso, inclusive o <strong>token</strong></div>
  <div class="card"><span class="ico">🗃️</span><b>Cache</b>as respostas dizem se podem ser <strong>reaproveitadas</strong> (o Express já gera <code>ETag</code>)</div>
  <div class="card"><span class="ico">🎛️</span><b>Interface uniforme</b>URIs + <strong>métodos HTTP</strong> com semântica padronizada</div>
  <div class="card"><span class="ico">🥞</span><b>Sistema em camadas</b>o cliente não sabe se fala com o Node ou com um <strong>proxy</strong></div>
  <div class="card"><span class="ico">📜</span><b>Código sob demanda</b>restrição <strong>opcional</strong>: o servidor envia código ao cliente</div>
</div>

<div class="box"><div class="t">Cai na prova</div><strong>Stateless</strong> não quer dizer "sem dados": o servidor não guarda o <strong>contexto da conversa</strong>. Qualquer instância do Node pode atender qualquer requisição.</div>

<!--
🎤 **Fala do Professor:**

"Fielding descreveu restrições que, quando respeitadas, produzem sistemas escaláveis; uma API que as segue é chamada de RESTful. Cliente-servidor: interface e armazenamento evoluem separadamente. Cache: as respostas dizem se podem ser reaproveitadas, e um detalhe legal é que o Express já gera o cabeçalho ETag sozinho, como vimos no curl da Aula 1. Interface uniforme: URIs e métodos sempre do mesmo jeito. Sistema em camadas: o cliente não sabe se há um Nginx no meio. A que mais cai em prova é a de ser sem estado: o servidor não guarda o contexto da conversa, então o cliente manda o token em toda requisição, e podemos ter dez instâncias do Node atrás de um balanceador."
-->

---

###### Comparação

# Boas práticas de URIs e versionamento

## Substantivos no plural, sem verbos, com a versão no caminho

| Inadequado | Adequado | Motivo |
|---|---|---|
| `GET /getAlunos` | `GET /api/v1/alunos` | o **verbo HTTP** já indica a ação |
| `POST /alunos/excluir/42` | `DELETE /api/v1/alunos/42` | use o **método correto** |
| `GET /aluno/42` | `GET /api/v1/alunos/42` | coleções no **plural** |
| `GET /alunosDoCurso3` | `GET /api/v1/alunos?curso=3` | filtros na **query string** |
| `POST /cancelarMatricula/7` | `POST /api/v1/matriculas/7/cancelamento` | ação não CRUD vira **sub-recurso** |

<div class="cols">
<div class="box pratica"><div class="t">Versão no Express</div><code>app.use('/api/v1', rotasV1)</code><br><code>app.use('/api/v2', rotasV2)</code> convivem no mesmo servidor.</div>
<div class="box"><div class="t">Mudança incompatível?</div>Crie a <strong>v2</strong> e avise o fim da v1 com os cabeçalhos <code>Deprecation</code> e <code>Sunset</code>.</div>
</div>

<!--
🎤 **Fala do Professor:**

"URIs bem desenhadas deixam a API intuitiva, e as regras são poucas: substantivos no plural para coleções, nunca verbos como getAlunos, porque a ação já é dita pelo método HTTP, e filtros, ordenação e paginação na query string. E quando a operação não é um simples CRUD, como cancelar uma matrícula? Tratamos como sub-recurso: POST em matriculas/7/cancelamento. Reparem também no /v1: uma API publicada é um contrato, e se um campo muda de nome, o app já instalado no celular do aluno quebra. No Express, versionar é trivial: cada versão é um Router montado num prefixo, e as duas convivem no mesmo servidor durante a transição."
-->

---

###### Sequência

# O modelo de maturidade de Richardson

## Nem toda API que usa HTTP e JSON é de fato REST

<div class="steps">
  <div class="s"><i>0</i><b>Pântano do POX</b>um endpoint para tudo: <code>POST /api</code> com <code>{"acao":"listar"}</code></div>
  <div class="chev">›</div>
  <div class="s"><i>1</i><b>Recursos</b>cada recurso tem URI, mas tudo é <code>POST</code></div>
  <div class="chev">›</div>
  <div class="s"><i>2</i><b>Verbos + status</b><code>GET</code> ➜ <code>200</code>, <code>POST</code> ➜ <code>201</code>: o padrão do mercado</div>
  <div class="chev">›</div>
  <div class="s dark"><i>3</i><b>Hipermídia</b>HATEOAS: a resposta traz <strong>links</strong> das próximas ações</div>
</div>

<div class="callout">A API acadêmica está no <strong>nível 2</strong>: atingi-lo de forma <strong>consistente</strong> já é sinal de uma API de <strong>boa qualidade</strong>.</div>

<div class="box pratica"><div class="t">Pergunta de diagnóstico</div>Ao analisar uma API no estágio, pergunte primeiro: <strong>ela usa os verbos e os códigos de status corretamente?</strong> Só isso já revela muito.</div>

<!--
🎤 **Fala do Professor:**

"O modelo de Leonard Richardson mede o quanto uma API aproveita a web, em quatro níveis. No nível zero, o pântano do POX, existe um único endpoint que recebe tudo, com o nome da ação no corpo. No nível um, cada recurso tem sua URI, mas tudo é POST. No nível dois, usamos verbos e códigos de status com a semântica correta, e é aqui que está a maioria das APIs do mercado, inclusive a nossa. O nível três, HATEOAS, acrescenta links que dizem o que o cliente pode fazer em seguida; ele dá mais trabalho e nem sempre é aproveitado. O importante é decidir de forma consciente."
-->

---

###### Conteúdo

# Verbos e onde vai cada dado no Express

## Cada parte da requisição tem um lugar certo, e um objeto certo

<div class="cols">
<div>

| Método | Uso | Idempotente | Sucesso |
|---|---|---|---|
| `GET` | ler | sim | `200` |
| `POST` | criar | **não** | `201` |
| `PUT` | substituir tudo | sim | `200`/`204` |
| `PATCH` | alterar parte | não* | `200` |
| `DELETE` | remover | sim | `204` |

</div>
<div>

| Parte | Para quê | No Express |
|---|---|---|
| **Rota** | identifica | `req.params.id` |
| **Query** | filtra, pagina | `req.query.page` |
| **Corpo** | dados | `req.body` |
| **Cabeçalho** | credenciais | `req.get('Authorization')` |

</div>
</div>

<div class="box"><div class="t">Nunca</div>Use <code>GET</code> para alterar dados (<code>GET /alunos/42/excluir</code>): robôs e proxies repetem GETs, e um link visitado poderia <strong>apagar registros</strong>. Dados sensíveis <strong>nunca</strong> vão na URL: ela fica em logs e históricos.</div>

<!--
🎤 **Fala do Professor:**

"Um endpoint é a combinação de um método com uma URI, e cada verbo tem uma semântica definida pela RFC 9110. A idempotência tem consequência real: se a internet cair durante um DELETE, o cliente pode repetir com segurança; repetir um POST pode criar uma matrícula duplicada. Na tabela da direita, a novidade desta aula: onde cada dado chega no Express. A rota identifica e vira req.params, a query refina listagens e vira req.query, o corpo leva os dados e vira req.body, e o cabeçalho leva credenciais, lido com req.get. Lembrem: req.params e req.query chegam sempre como texto."
-->

---

<!-- _class: secao -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

###### Parte 2

# O contrato no detalhe

## O código de status é a primeira coisa que o cliente olha. O formato do erro é a segunda.

<div class="agenda">Códigos de status · Rotas versionadas · Validação com Zod · Erros RFC 9457 · Correlation ID</div>

<!--
🎤 **Fala do Professor:**

"Agora vamos implementar o contrato. Status corretos, rotas versionadas, validação e erros padronizados. Tudo o que vem a seguir está no projeto de apoio e foi testado com requisições reais."
-->

---

###### Dados

# Códigos de status no contrato da API

## O cliente decide o que fazer **pelo código**, não pela mensagem

<div class="cols">
<div>

| Código | Quando usar |
|---|---|
| `200` OK | sucesso com corpo |
| `201` Created | criou; envie `Location` |
| `204` No Content | sucesso sem corpo |
| `404` Not Found | recurso inexistente |
| `422` Unprocessable | dados **inválidos** |

</div>
<div>

| Código | Quando usar |
|---|---|
| `401` Unauthorized | **não sei quem você é** |
| `403` Forbidden | **sei, mas você não pode** |
| `409` Conflict | sem vagas, e-mail duplicado |
| `429` Too Many Requests | limite excedido |
| `503` Unavailable | banco fora do ar |

</div>
</div>

<div class="flow">
  <div class="b">Autenticado?<small>senão 401</small></div><div class="a">›</div>
  <div class="b">Permitido?<small>senão 403</small></div><div class="a">›</div>
  <div class="b alt">Dados válidos?<small>senão 422</small></div><div class="a">›</div>
  <div class="b alt">Regra ok?<small>senão 409</small></div><div class="a">›</div>
  <div class="b dark">200 / 201</div>
</div>

<!--
🎤 **Fala do Professor:**

"O código de status é a primeira coisa que o cliente olha: é com base nele que o app mostra os dados, pede um novo login, aponta os erros ao lado dos campos ou avisa que o serviço está instável. Por isso, devolver 200 com uma mensagem de erro no corpo é uma das piores práticas que existem. Prestem atenção nas duplas: 401 é 'não sei quem você é', 403 é 'sei quem você é, mas você não pode'. 422 é dado mal formado, 409 é regra de negócio violada. O fluxo de baixo é um roteiro prático: se a requisição passar por todas as perguntas, é sucesso; se parar em alguma, vocês já sabem qual código devolver. E lembram da pergunta da Aula 1 sobre o banco fora do ar? A resposta é 503 com mensagem amigável."
-->

---

<!-- _class: dense -->

###### Código

# Rotas versionadas com `express.Router`

## Cada linha declara: método + URI + middlewares + controller

```js
// src/routes/v1/index.js (trecho)
function criarRotasV1({ alunoController }) {
  const r = Router();

  r.get('/alunos', autenticar, alunoController.index);     // ?curso=1&page=2
  r.get('/alunos/:id', autenticar, alunoController.show);  // /alunos/42

  r.post('/alunos',
    autenticar,                  // 401 sem token válido   (Aula 4)
    exigirPapel('ADMIN'),        // 403 se não for admin   (Aula 4)
    validar(criarAlunoSchema),   // 422 se dados inválidos
    alunoController.store);      // 201 + Location
  return r;
}
```

```js
// src/app.js
app.use('/api/v1', criarRotasV1(dependencias));  // prefixo num só lugar
```

<div class="box pratica"><div class="t">O que demonstra</div>A rota é uma <strong>fila de middlewares</strong> lida da esquerda para a direita: o roteiro de status do slide anterior virou código.</div>

<!--
🎤 **Fala do Professor:**

"Vejam como o roteiro de status vira código. Cada rota declara o método, a URI, os middlewares e o controller. A rota de criação é a mais interessante: primeiro autenticar, que devolve 401 se não houver token; depois exigirPapel, que devolve 403 se o usuário não for administrador; depois validar, que devolve 422 se os dados forem inválidos; e só então o controller, que responde 201. Os dois primeiros vamos implementar na Aula 4. Lido da esquerda para a direita, o código conta exatamente a história do slide anterior. E o prefixo /api/v1 fica num único lugar, no app.js."
-->

---

<!-- _class: dense -->

###### Código

# O controller: 201, Location, 404 e paginação

## Só traduz HTTP: nenhuma regra de negócio, nenhum SQL

<div class="cols-60">
<div>

```js
// src/controllers/aluno.controller.js (trecho)
async store(req, res) {
  const aluno = await cadastro.cadastrar(req.dados);
  res.status(201)
    .location(`/api/v1/alunos/${aluno.id}`)
    .json(alunoResource(aluno));
},

async show(req, res) {
  const aluno = await alunos.buscarPorId(
    Number(req.params.id));
  if (!aluno) throw new NaoEncontradoError('Aluno');
  res.json(alunoResource(aluno));        // ➜ 404 no tratador
},

async index(req, res) {
  const pagina = Math.max(1, Number(req.query.page ?? 1));
  const porPagina = Math.min(100,         // limite máximo
    Number(req.query.per_page ?? 15));
  const { itens, total } = await alunos.listar(
    { pagina, porPagina, cursoId: req.query.curso });
  res.json({ data: itens.map(alunoResource),
    meta: { pagina, por_pagina: porPagina, total } });
},
```

</div>
<div>

```js
// "View" da API: só os campos públicos
const alunoResource = (a) => ({
  id: a.id,
  nome: a.nome,
  email: a.email,
  ra: a.ra,
  curso: { id: a.curso_id, nome: a.curso_nome },
});
```

<div class="box"><div class="t">Express 5</div>O <code>throw</code> dentro da função <code>async</code> chega sozinho ao tratador de erros.</div>

<div class="box pratica"><div class="t">Resource</div>Montar a resposta <strong>campo a campo</strong> evita vazar colunas internas, como hashes e datas de exclusão.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"No store, o service cria o aluno e respondemos 201 com o cabeçalho Location, que diz onde o recurso novo pode ser consultado. No show, se o aluno não existir, lançamos NaoEncontradoError; graças ao Express 5, esse throw dentro de uma função async vai direto para o tratador global, que responde 404. No index, a paginação: página mínima 1 e no máximo 100 itens por página, para ninguém pedir um milhão de registros de uma vez. À direita, o alunoResource é a nossa View: monta a resposta campo a campo. É o equivalente aos API Resources do Laravel, que o e-book apresenta. Só sai o que declaramos explicitamente."
-->

---

<!-- _class: dense -->

###### Código

# Validação de entrada com Zod

## Um schema declara o formato; um middleware aplica a qualquer rota

<div class="cols">
<div>

```js
// src/schemas/aluno.schema.js
const { z } = require('zod');

const criarAlunoSchema = z.object({
  nome: z.string().trim()
    .min(3, 'Informe o nome completo').max(120),
  email: z.string().trim().toLowerCase()
    .pipe(z.email('E-mail inválido')),   // sanitiza e valida
  cursoId: z.coerce.number().int().positive(),
});
```

```js
// src/middlewares/validar.js
module.exports = (schema) => (req, res, next) => {
  const r = schema.safeParse(req.body);
  if (!r.success) {
    const erros = r.error.issues.map(i =>
      ({ campo: i.path.join('.'), mensagem: i.message }));
    return next(new ValidacaoError(erros));  // ➜ 422
  }
  req.dados = r.data;   // só o que foi declarado segue
  next();
};
```

</div>
<div>

```text
POST /api/v1/alunos
{ "nome": "X", "email": "nao-e-email" }

HTTP/1.1 422 Unprocessable Entity
Content-Type: application/problem+json

{
  "status": 422,
  "codigo": "VALIDACAO",
  "erros": [
    { "campo": "nome",
      "mensagem": "Informe o nome completo" },
    { "campo": "email",
      "mensagem": "E-mail inválido" },
    { "campo": "cursoId", "mensagem": "..." }
  ]
}
```

<div class="box pratica"><div class="t">Bônus de segurança</div>Campos não declarados (ex.: <code>"papel": "ADMIN"</code>) são <strong>descartados</strong>: proteção contra atribuição em massa.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Toda informação que chega à API vem de fora e não é confiável. O Zod permite declarar o formato esperado num schema: nome com no mínimo três caracteres, e-mail tirando espaços e passando para minúsculas antes de validar, e cursoId convertido para número. O middleware validar recebe qualquer schema, executa e, se falhar, gera um ValidacaoError com a lista de campos, que o tratador transforma em 422. À direita, a resposta real que o projeto devolve, com o erro ao lado de cada campo, pronto para o front-end exibir. E um bônus: o req.dados só contém os campos declarados. Se alguém enviar papel ADMIN no corpo, esse campo é descartado."
-->

---

###### Comparação

# Validação de entrada × regra de negócio

## Duas perguntas diferentes, dois lugares diferentes, dois códigos diferentes

<div class="flow">
  <div class="b">validar(schema)<small>sanitiza + valida</small></div><div class="a">›</div>
  <div class="b alt">req.dados<small>dados tipados</small></div><div class="a">›</div>
  <div class="b">Service<small>regras</small></div><div class="a">›</div>
  <div class="b dark">Resource<small>JSON público</small></div>
</div>

| | Validação de entrada | Regra de negócio |
|---|---|---|
| **Pergunta** | os dados estão **bem formados**? | a operação é **permitida agora**? |
| **Onde fica** | schema Zod + middleware `validar` | Service |
| **Precisa do banco?** | não | geralmente sim |
| **Falha** | `422` · nota fora de 0 a 10 | `409` · sem vagas, e-mail duplicado |

<div class="box"><div class="t">Valide sempre no back-end</div>A validação do front-end melhora a experiência, mas é contornada com um simples <code>curl</code>.</div>

<!--
🎤 **Fala do Professor:**

"Uma distinção fundamental. Validação de entrada pergunta se os dados estão bem formados: o e-mail tem formato de e-mail, a nota está entre zero e dez. Regra de negócio pergunta se a operação é permitida agora: ainda há vagas, o e-mail já existe. A primeira fica no schema e devolve 422; a segunda fica no service e devolve 409. Por que separar? Se a regra de vagas ficasse no middleware de validação, ela não valeria para uma importação de planilha, que chama o service diretamente. E nunca confiem só na validação do front-end: qualquer um contorna com curl."
-->

---

<!-- _class: dense -->

###### Código

# Erros de domínio + um tratador global

## As camadas internas falam de negócio; um único lugar traduz para HTTP

<div class="cols">
<div>

```js
// src/errors.js — não sabem nada de HTTP
class ErroDeDominio extends Error {
  constructor(mensagem, codigo) {
    super(mensagem);
    this.codigo = codigo;
  }
}
class VagasEsgotadasError extends ErroDeDominio {
  constructor(disciplina) {
    super('Não há vagas disponíveis na disciplina '
      + `${disciplina}.`, 'VAGAS_ESGOTADAS');
  }
}
```

<div class="box"><div class="t">Sem centralizar</div><code>try/catch</code> em <strong>toda</strong> rota, cada erro num <strong>formato diferente</strong>.</div>

</div>
<div>

```js
// src/middlewares/tratadorDeErros.js (trecho)
const STATUS = { VALIDACAO: 422, PROIBIDO: 403,
  RECURSO_NAO_ENCONTRADO: 404, NAO_AUTENTICADO: 401,
  EMAIL_DUPLICADO: 409, VAGAS_ESGOTADAS: 409 };

function tratadorDeErros(err, req, res, next) {
  const status = STATUS[err.codigo] ?? 500;
  const interno = status >= 500;
  if (interno) {                 // detalhe técnico: só no log
    console.error({ request_id: req.id, erro: err.stack });
  }
  res.status(status).type('application/problem+json')
    .json({
      type: urlDoTipo(err.codigo),
      title: interno ? 'Erro interno'
                     : 'Requisição não atendida',
      status,
      detail: interno ? `Código p/ suporte: ${req.id}`
                      : err.message,
      codigo: err.codigo ?? 'ERRO_INTERNO',
    });
}
```

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Uma API profissional não espalha try/catch por todas as rotas. As camadas internas lançam erros com nomes de negócio, como VagasEsgotadasError, e esses erros não sabem nada de HTTP, preservando a independência do service. Um único tratador, registrado por último no app.js, tem a tabela que converte cada código de domínio em status HTTP e monta a resposta sempre no mesmo formato. Reparem no cuidado com erros 500: o detalhe técnico, a pilha de chamadas, vai para o log com o request_id, e o cliente recebe só uma mensagem genérica com o código para o suporte. Expor detalhes internos ajuda atacantes a mapear a aplicação."
-->

---

###### Conteúdo

# O erro padronizado: RFC 9457

## Problem Details for HTTP APIs: o mesmo formato para todos os erros

<div class="cols-60">
<div>

```http
HTTP/1.1 409 Conflict
Content-Type: application/problem+json
X-Request-Id: 7f3c2a90-1b4e-4c1d-9a7e-0c2d5e8f1a33

{
  "type": "https://api.faculdade.edu.br/erros/vagas_esgotadas",
  "title": "Requisição não atendida",
  "status": 409,
  "detail": "Não há vagas disponíveis na disciplina IA.",
  "codigo": "VAGAS_ESGOTADAS"
}
```

</div>
<div>

- `type`: URI que **identifica** o tipo de erro
- `title`: resumo **estável**
- `status`: repete o código HTTP
- `detail`: o **caso concreto**
- `codigo`: **extensão** nossa, para o app decidir

<div class="box pratica"><div class="t">Para quem consome</div>Um <strong>único</strong> tratamento de erro no app, em vez de um por endpoint. O app decide pelo <code>codigo</code>, não pelo texto.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este é o formato de erro da nossa API, definido pela RFC 9457. Os campos type, title, status e detail são padronizados: o type identifica o tipo de erro, o title é um resumo estável, o status repete o código e o detail explica o caso concreto. O campo codigo é uma extensão nossa, permitida pela RFC, e é muito útil: o aplicativo decide o que mostrar pelo código curto, sem depender do texto, que pode mudar ou ser traduzido. O resultado é uma API que sempre fala a mesma língua quando algo dá errado. Para quem consome, isso significa um único tratamento de erro no app inteiro."
-->

---

###### Figura

# Correlation ID: rastreando o "deu erro"

## Um identificador que liga a tela do usuário à linha exata do log

<div class="flow">
  <div class="b">Requisição<small>chega à API</small></div><div class="a">›</div>
  <div class="b alt">requestId<small>gera UUID</small></div><div class="a">›</div>
  <div class="b">logger<small>request_id em cada linha</small></div><div class="a">›</div>
  <div class="b dark">Resposta<small>X-Request-Id</small></div>
</div>

<div class="cols">
<div>

- Cada requisição recebe um **identificador único**
- Ele entra em **todas as linhas de log** daquela requisição
- Volta no cabeçalho `X-Request-Id` e no `detail` dos erros 500
- Entre serviços, o mesmo ID é **repassado**

</div>
<div>

<div class="box analogia"><div class="t">Analogia · o protocolo</div>O <strong>número de protocolo</strong> da operadora: qualquer atendente encontra o seu caso sem você contar a história de novo.</div>

<div class="callout">O aluno manda o print com o ID e o suporte encontra o erro <strong>na hora</strong>: base da <strong>observabilidade</strong>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Imaginem um aluno abrindo um chamado dizendo só: deu erro na matrícula. A equipe precisa achar aquele registro no meio de milhares de linhas de log. O correlation ID resolve isso. O middleware requestId, que escrevemos na Aula 2, gera um valor único por requisição; o logger coloca esse valor em cada linha; e ele volta ao cliente no cabeçalho X-Request-Id e na mensagem dos erros 500. Quando o aluno manda o print com o ID, o suporte encontra tudo na hora. É como o número de protocolo da operadora de telefonia."
-->

---

###### Comparação

# Paginação e documentação com OpenAPI

## Listagens previsíveis e um contrato legível por pessoas e por máquinas

<div class="compare">
<div><div class="h">PAGINAÇÃO PADRONIZADA</div>

- Toda listagem devolve `data` e `meta` (página, total)
- Limite de **100 por página**
- Ordenação só por campos de uma **lista fechada**
- Tabelas enormes: paginação por **cursor**

</div>
<div><div class="h">OPENAPI / SWAGGER</div>

- Descreve endpoints, parâmetros, **schemas** e status
- **Swagger UI**: "Try it out" no navegador
- **Contract-first**: contrato antes do código
- **Code-first**: gerado a partir do código

</div>
</div>

<div class="box"><div class="t">Segurança na ordenação</div><code>ORDER BY ${req.query.sort}</code> abre espaço para <strong>injeção de SQL</strong>: aceite só valores de uma lista permitida.</div>

<div class="callout">Documentar é <strong>parte do desenvolvimento</strong>: o <code>openapi.yaml</code> fica no repositório e é revisado junto com o código.</div>

<!--
🎤 **Fala do Professor:**

"Dois assuntos fecham o conteúdo. Listagens são as operações mais frequentes e, sem paginação, poderiam devolver milhares de registros. O formato com data e meta deixa o front-end tratar todas as listagens do mesmo jeito. Atenção à segurança: nome de coluna livre vindo da requisição no ORDER BY é injeção de SQL esperando para acontecer. À direita, a especificação OpenAPI descreve a API num arquivo legível por pessoas e máquinas; dele saem documentação interativa, clientes gerados e servidores simulados. No ecossistema Node, há bibliotecas que servem o Swagger UI a partir do openapi.yaml, e há abordagens code-first, que geram o contrato a partir dos schemas de validação."
-->

---

###### Analogias

# APIs no dia a dia

## Use a analogia para entender e o termo técnico para explicar

| Conceito | No dia a dia | Na API acadêmica |
|---|---|---|
| **API / contrato** | o **cardápio** do restaurante | rotas + `openapi.yaml` |
| **Recurso × representação** | a pessoa × a **foto 3x4** dela | aluno 42 × JSON do aluno 42 |
| **Stateless** | o caixa que pede o **cartão** a cada compra | token em **toda** requisição |
| **401 × 403** | sem crachá × crachá sem acesso à sala | sem token × aluno criando aluno |
| **422 × 409** | formulário preenchido errado × "não há mais vagas" | Zod × Service |
| **Correlation ID** | o **número do protocolo** do atendimento | `X-Request-Id` |

<!--
🎤 **Fala do Professor:**

"Vamos conectar a aula ao cotidiano. A API é o cardápio. Recurso e representação são a pessoa e a foto 3x4. Stateless é o caixa que pede o cartão a cada compra. 401 e 403 são a portaria: sem crachá é 401; com crachá, mas sem acesso à sala, é 403. 422 e 409 são o formulário preenchido errado e a resposta 'não há mais vagas'. E o correlation ID é o número de protocolo. A terceira coluna traz os mesmos conceitos na nossa API, porque a analogia ajuda a lembrar, mas o vocabulário técnico é o que vocês vão usar no trabalho."
-->

---

###### Fechamento

# Resumo da aula

## As ideias que você leva para a próxima etapa

<div class="cards">
  <div class="card"><span class="n">1</span><strong>REST</strong>: recursos com URIs, manipulados por <strong>representações</strong>, sem estado.</div>
  <div class="card"><span class="n">2</span>URIs no <strong>plural</strong>, sem verbos, versionadas com <code>Router</code> em <code>/api/v1</code>.</div>
  <div class="card"><span class="n">3</span><strong>Richardson nível 2</strong>: verbos e status com a semântica correta.</div>
  <div class="card"><span class="n">4</span><strong>401 × 403</strong>, <strong>422 × 409</strong>: o código de status é contrato.</div>
  <div class="card"><span class="n">5</span><strong>Zod + validar</strong> na entrada; <strong>regras</strong> no Service; <strong>Resource</strong> na saída.</div>
  <div class="card"><span class="n">6</span><strong>RFC 9457</strong> + tratador global + <strong>correlation ID</strong>.</div>
</div>

<div class="callout"><strong>Próxima aula:</strong> persistência com PostgreSQL e segurança — transações, JWT, bcrypt e RBAC. Leitura: Unidades IV e V.</div>

<!--
🎤 **Fala do Professor:**

"Vamos amarrar. REST: recursos identificados por URIs e manipulados por representações, sem estado. URIs no plural, sem verbos, versionadas. Nível 2 de Richardson como meta realista. Códigos de status como contrato. Validação na entrada com Zod, regras no service, resource na saída. E erros padronizados pela RFC 9457, tratados num só lugar e rastreáveis pelo correlation ID. A frase que resume tudo: uma boa API é previsível, e quem a consome nunca precisa adivinhar nada."
-->

---

###### Reflexão

# Desafio: complete o contrato

## Escolha o verbo, os parâmetros e o código de status de cada situação

<div class="cols-60">
<div>

```text
______ /api/v1/matriculas/7/cancelamento  # verbo? status?
GET    /api/v1/alunos?______________       # curso 3, página 2
POST   /api/v1/notas  {"nota": 11}         # status?
POST   /api/v1/matriculas                  # sem vagas: status?
GET    /api/v1/alunos/9999                 # inexistente: status?
GET    /api/v1/alunos  (sem token)         # status?
```

</div>
<div>

### Reflita

1. Por que repetir um `DELETE` é seguro, mas repetir um `POST` não é?
2. Por que a regra de vagas **não** deve ficar no schema Zod?
3. Que informações **nunca** devem aparecer numa resposta de erro **500**?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fechar, um desafio em dupla: completem o contrato da esquerda escolhendo o verbo, os parâmetros e o código de status de cada situação, usando o roteiro de decisão que vimos. Depois discutam as três perguntas, principalmente a última, que prepara o terreno para a segurança. Na próxima aula, a API ganha memória e proteção: PostgreSQL, transações, autenticação com JWT, senhas com bcrypt e controle de acesso por papéis. Leiam as Unidades IV e V do e-book."
-->

---

<!-- _class: refs -->

###### Fontes

# Referências

SILVA, Allan da. **Desenvolvimento Back-End**: arquitetura, APIs RESTful, persistência de dados e segurança no lado do servidor. E-book. 2026. Unidade III.

FIELDING, Roy T. **Architectural Styles and the Design of Network-based Software Architectures**. Tese (Doutorado) – University of California, Irvine, 2000.

NOTTINGHAM, M.; WILDE, E.; DALAL, S. **RFC 9457: Problem Details for HTTP APIs**. IETF, 2023.

FIELDING, R.; NOTTINGHAM, M.; RESCHKE, J. **RFC 9110: HTTP Semantics**. IETF, 2022.

OPENJS FOUNDATION. **Express 5.x – express.Router**. Disponível em: https://expressjs.com/en/5x/api.html#router.

ZOD. **Zod documentation**. Disponível em: https://zod.dev. · OPENAPI INITIATIVE. **OpenAPI Specification**. Disponível em: https://spec.openapis.org.

<!--
🎤 **Fala do Professor:**

"As referências da aula. Vale ler pelo menos a introdução da RFC 9457: é curta e mostra como um padrão bem escrito resolve um problema que todo mundo tinha."
-->

---

<!-- _class: fim -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Obrigado!

**Prof. Esp. Allan da Silva**

Dúvidas? Na próxima aula, a API ganha memória e proteção.

<!--
🎤 **Fala do Professor:**

"Obrigado, pessoal! Até a próxima e última aula."
-->
