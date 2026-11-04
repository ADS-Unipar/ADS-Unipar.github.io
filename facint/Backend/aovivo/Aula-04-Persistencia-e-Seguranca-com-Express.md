---
marp: true
theme: default
html: true
size: 16:9
paginate: true
footer: "Desenvolvimento Back-End · Aula 4 · Prof. Esp. Allan da Silva"
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

# Persistência e segurança na API Express

## Aula 4 · Unidades IV e V · Dados corretos sob concorrência e protegidos em camadas

<div class="linha"></div>

**Professor: Prof. Esp. Allan da Silva**

Desenvolvimento Back-End  •  Aula 4 de 4  •  50 minutos

<!--
🎤 **Fala do Professor:**

"Sejam bem-vindos à nossa última aula. A API já recebe requisições, está organizada em camadas e responde no padrão REST. Faltam duas coisas essenciais: memória durável e proteção. Hoje vamos conectar o PostgreSQL com segurança, garantir que os dados continuem corretos quando centenas de pessoas usam o sistema ao mesmo tempo e, na segunda metade, proteger a API com autenticação, autorização, hash de senhas e defesa em camadas. É uma aula densa, então vou focar no porquê de cada coisa; os detalhes estão no e-book e no projeto de apoio."
-->

---

###### Planejamento

# Roteiro da aula · 50 minutos

## Primeiro os dados corretos, depois os dados protegidos

<div class="steps">
  <div class="s"><i>1</i><b>0–5 min</b>Dois incidentes reais na API acadêmica</div>
  <div class="chev">›</div>
  <div class="s"><i>2</i><b>5–25 min</b>PostgreSQL, SQL seguro, modelagem e transações</div>
  <div class="chev">›</div>
  <div class="s"><i>3</i><b>25–45 min</b>OWASP, JWT, bcrypt, RBAC e proteções do Express</div>
  <div class="chev">›</div>
  <div class="s dark"><i>4</i><b>45–50 min</b>Defesa em profundidade, síntese e desafio</div>
</div>

<div class="cols">
<div class="box pratica"><div class="t">Pacotes desta aula</div><code>pg</code> · <code>bcrypt</code> · <code>jsonwebtoken</code> · <code>helmet</code> · <code>cors</code> · <code>express-rate-limit</code></div>
<div class="box"><div class="t">Tudo testado</div>O projeto de apoio roda os cenários desta aula com <code>npm test</code> contra um PostgreSQL real.</div>
</div>

<!--
🎤 **Fala do Professor:**

"O roteiro: começamos com dois incidentes, um de dados e um de segurança. Depois, vinte minutos de persistência: driver, pool, SQL seguro, modelagem e, principalmente, transações. Em seguida, vinte minutos de segurança: OWASP, autenticação com JWT, senhas com bcrypt, autorização por papéis e as proteções do Express. Fechamos juntando tudo na defesa em profundidade. Os pacotes do canto esquerdo são os únicos que vamos usar, e todos os cenários estão cobertos por testes no projeto de apoio."
-->

---

###### Objetivos

# Metas de aprendizagem

## Ao final da aula, você deve ser capaz de:

<div class="cards">
  <div class="card"><span class="n">1</span><b>Executar</b>consultas seguras com <code>pg</code>, pool e parâmetros <code>$1</code></div>
  <div class="card"><span class="n">2</span><b>Explicar</b>ACID e usar transação + bloqueio contra condições de corrida</div>
  <div class="card"><span class="n">3</span><b>Diferenciar</b>autenticação de autorização, e 401 de 403</div>
  <div class="card"><span class="n">4</span><b>Implementar</b>login com bcrypt e JWT e um middleware de autenticação</div>
  <div class="card"><span class="n">5</span><b>Aplicar</b>RBAC e policies para evitar o IDOR</div>
  <div class="card"><span class="n">6</span><b>Relacionar</b>helmet, CORS, rate limiting e logs à defesa em camadas</div>
</div>

<!--
🎤 **Fala do Professor:**

"Seis objetivos, divididos meio a meio: os dois primeiros são de persistência e os outros quatro de segurança. Reparem que quase todos têm um verbo de ação, executar, usar, implementar, aplicar, porque hoje o código é protagonista. Ao final, voltem aqui e confiram se conseguem explicar cada um."
-->

---

###### Contextualização

# Dois incidentes na API acadêmica

## Ambos estão no e-book, e ambos acontecem em sistemas reais

<div class="compare">
<div><div class="h">INCIDENTE 1 · DADOS</div>

- Optativa de **IA** com **40 vagas**
- No primeiro dia, **43 matriculados**
- Várias requisições no **mesmo segundo**: todas leram "há vaga"
- Nome técnico: **condição de corrida**

</div>
<div><div class="h">INCIDENTE 2 · SEGURANÇA</div>

- Trocando o id em `/matriculas/{id}`, um aluno **via notas de colegas**
- O login aceitava **tentativas ilimitadas**
- Os logs **não registravam** quem acessou o quê
- Nome técnico: **IDOR**

</div>
</div>

<div class="callout">Persistir não é só "salvar", e segurança não é uma etapa final: ambas são <strong>qualidades construídas</strong> em todas as camadas.</div>

<!--
🎤 **Fala do Professor:**

"Dois casos do e-book. No primeiro, a optativa de Inteligência Artificial tinha 40 vagas e terminou com 43 alunos: várias requisições chegaram no mesmo segundo, todas leram que havia vaga e todas inseriram a matrícula. No segundo, uma auditoria descobriu que bastava trocar o número na URL para ver as notas dos colegas, que o login aceitava tentativas ilimitadas e que os logs não registravam nada. O aluno estava autenticado, mas ninguém verificou se ele podia ver aquele dado. Ao longo da aula vamos corrigir os dois problemas, com código testado."
-->

---

<!-- _class: secao -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

###### Parte 1

# Persistência com PostgreSQL

## Persistência = durabilidade + correção sob concorrência, falhas e mudanças.

<div class="agenda">Driver e pool · SQL seguro · SQL × ORM · Modelagem e migrations · Transações e bloqueios</div>

<!--
🎤 **Fala do Professor:**

"Primeira metade: persistência. Se o processo do Node reiniciar, tudo o que está em memória some. O banco é o caderno de registros que sobrevive a falhas. Mas persistir não é só salvar: os dados precisam continuar corretos."
-->

---

###### Figura

# Driver, conexão e pool no Node.js

## Abrir conexão é caro: o pool reaproveita as que já existem

<div class="flow">
  <div class="b">Requisições<small>muitas, simultâneas</small></div><div class="a">›</div>
  <div class="b alt">Pool<small>max: 10 conexões</small></div><div class="a">›</div>
  <div class="b">Driver <code>pg</code><small>protocolo do Postgres</small></div><div class="a">›</div>
  <div class="b dark">PostgreSQL<small>processo separado</small></div>
</div>

<div class="cols">
<div>

```js
// src/db.js
const { Pool } = require('pg');
const config = require('./config');

// UM pool para todo o processo
const pool = new Pool({
  connectionString: config.databaseUrl,
  max: 10,
});

module.exports = { pool };
```

</div>
<div>

<div class="box analogia"><div class="t">Analogia · o ponto de táxi</div>Em vez de comprar um carro para cada corrida, a cidade mantém uma <strong>frota</strong> no ponto. Acabou a corrida, o táxi <strong>volta para a fila</strong>.</div>

<div class="box"><div class="t">Em produção</div>Conexão <strong>cifrada</strong> e um usuário de banco <strong>só para a aplicação</strong>, com o mínimo de permissões.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"O banco é administrado por um SGBD, como o PostgreSQL, que roda como um processo separado e conversa com a aplicação pela rede. Para falar com ele, o Node usa um driver; aqui, o pacote pg. Abrir uma conexão é caro: envolve rede, autenticação e memória no servidor. Por isso criamos um único pool para todo o processo, que mantém algumas conexões abertas e as empresta a cada consulta. O e-book observa uma diferença interessante: no Node, o pool vive dentro da própria aplicação, porque o processo continua rodando; no PHP-FPM, usa-se um pooler externo. É o ponto de táxi: a frota fica disponível, e cada carro volta para a fila depois da corrida."
-->

---

<!-- _class: dense -->

###### Código

# Injeção de SQL × consultas parametrizadas

## O valor do usuário **nunca** pode virar parte do comando

```js
// ERRADO: o valor digitado é colado no texto do SQL
const { rows } = await pool.query(
  `SELECT id, nome FROM alunos WHERE email = '${req.body.email}'`);
// Com o valor:   qualquer' OR '1'='1   ➜ a consulta devolve TODOS os alunos

// CERTO: o comando e os valores viajam SEPARADOS até o banco
const { rows } = await pool.query(
  'SELECT id, nome FROM alunos WHERE email = $1',   // marcador de posição
  [req.body.email]);                                // tratado SEMPRE como dado
```

<div class="cols">
<div class="box pratica"><div class="t">O que demonstra</div>Com <code>$1</code>, o banco compila o comando <strong>antes</strong> de receber o valor: aspas e <code>OR</code> viram texto comum, nunca código.</div>
<div class="box"><div class="t">Cuidado</div>Template string com <code>${}</code> dentro de SQL é <strong>sempre</strong> sinal de alerta, inclusive em <code>ORDER BY</code> e nomes de coluna.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este é o exemplo mais importante da aula, e é apenas educacional, para vocês reconhecerem o padrão. Na forma errada, o e-mail é colado no texto do SQL com uma template string. Se alguém digitar um texto que fecha as aspas e acrescenta OR um igual a um, a condição fica sempre verdadeira e a consulta devolve todos os alunos. Na forma certa, o comando vai com o marcador dólar um, e o valor vai separado, num array. O banco prepara o comando antes e trata o valor sempre como dado. Regra prática para revisão de código: viu crase com cifrão dentro de SQL, pare e investigue. Lembram do desafio da Aula 2? Era exatamente isso."
-->

---

###### Comparação

# SQL direto × ORM no ecossistema Node

## Não existe abordagem superior em todos os cenários

| Critério | SQL com `pg` | ORM (Prisma, Sequelize, TypeORM) |
|---|---|---|
| **O que você escreve** | SQL explícito | objetos e métodos: `prisma.aluno.findMany()` |
| **Controle e desempenho** | **total**: você vê cada consulta | bom, mas o SQL fica **escondido** |
| **Produtividade inicial** | média | **alta**, com migrations e tipos |
| **Armadilha clássica** | repetir código de mapeamento | **N+1**: 1 consulta + 1 por item da lista |
| **Estilo** | Repository escrito à mão | Prisma ≈ Data Mapper · Sequelize ≈ Active Record |

<div class="box analogia"><div class="t">Analogia</div>O ORM é um <strong>intérprete</strong>: você fala em objetos, ele traduz para SQL. Ótimo, desde que você saiba conferir a tradução.</div>

<!--
🎤 **Fala do Professor:**

"No e-book, o ORM é o Eloquent do Laravel. No Node, os mais usados são Prisma, Sequelize e TypeORM. Nas nossas aulas usamos SQL direto com o pg, escondido atrás do repositório, porque assim vocês veem exatamente o que chega ao banco. O ORM traduz objetos em tabelas e aumenta muito a produtividade, mas esconde o SQL, e por isso pode gerar o problema N+1: uma consulta para a lista e mais uma para cada item. Com cem alunos, cento e uma consultas. Como o repositório isola o acesso a dados, trocar o pg por um ORM depois não mexe nos services. O conselho do e-book vale aqui: o ORM é poderoso, mas o domínio de SQL é o que diferencia um bom profissional."
-->

---

<!-- _class: dense -->

###### Código

# Modelagem: chaves, relacionamentos e migrations

## As regras declaradas no banco são a última linha de defesa

<div class="cols-60">
<div>

```sql
-- db/001_schema.sql (trecho)
CREATE TABLE disciplinas (
  id     SERIAL PRIMARY KEY,
  nome   VARCHAR(120) NOT NULL,
  vagas  INT NOT NULL CHECK (vagas >= 0)
);

CREATE TABLE matriculas (           -- N:N com dados próprios
  id             SERIAL PRIMARY KEY,
  aluno_id       INT NOT NULL REFERENCES alunos(id),
  disciplina_id  INT NOT NULL REFERENCES disciplinas(id),
  semestre       VARCHAR(6) NOT NULL,
  nota           NUMERIC(4,2) CHECK (nota BETWEEN 0 AND 10),
  UNIQUE (aluno_id, disciplina_id, semestre)
);

CREATE INDEX idx_matriculas_disciplina_status
  ON matriculas (disciplina_id, status);
```

</div>
<div>

- **PK** identifica a linha; **FK** garante a **integridade referencial**
- **1:1** usuário–aluno · **1:N** curso–disciplinas · **N:N** alunos–disciplinas
- `CHECK` e `UNIQUE` barram dados inválidos **mesmo com bug no código**
- **Índice** = índice remissivo do livro

<div class="box pratica"><div class="t">Migrations</div>Cada mudança de estrutura é um <strong>arquivo versionado</strong>: <code>npm run db:migrate</code> recria o banco igual em todas as máquinas.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este é um trecho da migration da nossa API. A chave primária identifica cada linha; a chave estrangeira impede, por exemplo, uma matrícula para um aluno que não existe. A tabela de matrículas liga alunos e disciplinas, um relacionamento N para N, e como guarda semestre e nota, vira uma entidade do negócio. Reparem nas restrições: CHECK vagas maior ou igual a zero, nota entre zero e dez, e UNIQUE impedindo matrícula duplicada. Mesmo que um bug no código tente gravar algo inválido, o banco recusa. E o índice composto acelera a consulta de vagas, como o índice remissivo de um livro. As migrations versionam tudo isso no Git."
-->

---

###### Dados

# Transações e propriedades ACID

## Matricular = verificar vaga + inserir matrícula + decrementar vagas

<div class="flow">
  <div class="b">BEGIN</div><div class="a">›</div>
  <div class="b alt">SELECT ... FOR UPDATE<small>trava a disciplina</small></div><div class="a">›</div>
  <div class="b">INSERT matrícula</div><div class="a">›</div>
  <div class="b">UPDATE vagas − 1</div><div class="a">›</div>
  <div class="b dark">COMMIT<small>ou ROLLBACK</small></div>
</div>

| Propriedade | Significado | Na matrícula |
|---|---|---|
| **A**tomicidade | tudo ou nada | matrícula e vaga gravadas **juntas** |
| **C**onsistência | estado válido ➜ estado válido | vagas **nunca** ficam negativas |
| **I**solamento | transações não interferem | dois alunos não ocupam a **última vaga** |
| **D**urabilidade | após o commit, sobrevive a falhas | a matrícula não some no reinício |

<div class="box analogia"><div class="t">Analogia · compra online</div>Pagamento e baixa no estoque acontecem <strong>juntos</strong>. Se o pagamento falha, o produto volta para a prateleira.</div>

<!--
🎤 **Fala do Professor:**

"Chegamos ao tema mais importante da persistência. Matricular envolve várias alterações; se o servidor cair entre a inserção e a atualização das vagas, o banco fica inconsistente. A transação agrupa tudo numa unidade indivisível: BEGIN, as operações, e COMMIT se deu certo, ou ROLLBACK se algo falhou. As garantias formam a sigla ACID. Olhem a última coluna: cada propriedade tem um significado concreto na matrícula. Se vocês conseguirem explicar ACID usando esse exemplo, entenderam. E reparem no FOR UPDATE do fluxo: é ele que resolve o incidente das 43 matrículas."
-->

---

<!-- _class: dense -->

###### Código

# Transação + bloqueio no Node: o fim das 43 matrículas

## Um helper de transação reutilizável e o service de matrícula

<div class="cols">
<div>

```js
// src/db.js
async function transacao(trabalho) {
  const cliente = await pool.connect(); // 1 conexão
  try {
    await cliente.query('BEGIN');
    const r = await trabalho(cliente);
    await cliente.query('COMMIT');
    return r;
  } catch (erro) {
    await cliente.query('ROLLBACK');    // desfaz TUDO
    throw erro;
  } finally {
    cliente.release();                  // volta ao pool
  }
}
```

<div class="box"><div class="t">Atenção</div>Todas as consultas da transação usam o <strong>mesmo</strong> <code>cliente</code>, não o <code>pool</code>.</div>

</div>
<div>

```js
// src/services/matricula.service.js (trecho)
matricular({ alunoId, disciplinaId, semestre }) {
  return this.#transacao(async (db) => {
    const { rows: [disc] } = await db.query(
      `SELECT id, nome, vagas FROM disciplinas
        WHERE id = $1 FOR UPDATE`,  // trava a linha
      [disciplinaId]);
    if (!disc) throw new NaoEncontradoError('Disciplina');
    if (disc.vagas <= 0) {          // ➜ ROLLBACK
      throw new VagasEsgotadasError(disc.nome);
    }
    const { rows: [m] } = await db.query(
      `INSERT INTO matriculas
         (aluno_id, disciplina_id, semestre)
       VALUES ($1, $2, $3) RETURNING *`,
      [alunoId, disciplinaId, semestre]);
    await db.query(`UPDATE disciplinas
      SET vagas = vagas - 1 WHERE id = $1`,
      [disciplinaId]);
    return m;                       // ➜ COMMIT
  });
}
```

</div>
</div>

<!--
🎤 **Fala do Professor:**

"À esquerda, um helper que qualquer service pode usar: pega uma conexão do pool, abre a transação, executa o trabalho e faz commit; se qualquer erro for lançado, faz rollback e devolve a conexão ao pool no finally. Atenção a um erro clássico do Node: todas as consultas da transação precisam usar o mesmo cliente; se usarem o pool, cada uma pode ir para uma conexão diferente, fora da transação. À direita, o service de matrícula. O SELECT FOR UPDATE trava a linha da disciplina: a segunda requisição espera a primeira terminar e só então lê o número atualizado de vagas. Se não houver vaga, o erro de domínio provoca o rollback e vira 409 no tratador global."
-->

---

###### Dados

# O teste: 43 requisições simultâneas, 40 vagas

## Resultado real do projeto de apoio (`test/concorrencia.test.js`, PostgreSQL 16)

| Versão do service | Matrículas aceitas | Respostas | Vagas no final |
|---|---|---|---|
| **Com** `FOR UPDATE` | **40** | 40 × `201` · **3 × `409`** (vagas esgotadas) | **0** |
| **Sem** `FOR UPDATE` | 40 | 40 × `201` · **3 × `500`** (violou o `CHECK`) | 0 |
| Sem bloqueio **e** sem `CHECK` | risco de **43** | o incidente do e-book | **negativo** |

<p class="fonte">Fonte: elaboração própria, execução de <code>npm test</code> com <code>Promise.allSettled</code> disparando 43 matrículas ao mesmo tempo.</p>

<div class="cols">
<div class="box pratica"><div class="t">Leitura</div>O <strong>bloqueio</strong> dá a resposta certa ao usuário (<strong>409</strong>). O <code>CHECK</code> salvou os dados, mas como <strong>erro 500</strong>.</div>
<div class="box"><div class="t">Lição</div>Use as duas camadas: <strong>regra + bloqueio</strong> no service e <strong>restrição</strong> no banco como última defesa.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este slide traz um dado real: eu rodei o teste de concorrência do projeto de apoio contra um PostgreSQL. Quarenta e três matrículas disparadas ao mesmo tempo para uma disciplina com quarenta vagas. Com o FOR UPDATE, exatamente quarenta aceitas e três respostas 409, vagas esgotadas, que é o comportamento correto. Depois tirei o FOR UPDATE: as vagas não ficaram negativas, porque a restrição CHECK do banco barrou, mas os três alunos receberam erro 500, uma experiência péssima. Sem as duas proteções, chegaríamos ao incidente do e-book. A lição: regra e bloqueio no service, e restrições no banco como última linha de defesa."
-->

---

<!-- _class: secao -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

###### Parte 2

# Segurança em camadas

## Pensar como o atacante para defender melhor: quem é você, o que você pode, e o que acontece se uma camada falhar?

<div class="agenda">OWASP Top 10 · Autenticação × autorização · bcrypt e JWT · RBAC e IDOR · helmet, CORS e rate limit</div>

<!--
🎤 **Fala do Professor:**

"Segunda metade: segurança. A nossa API guarda nomes, e-mails e notas; falhas aqui geram prejuízo às pessoas e podem gerar sanções previstas na LGPD. A boa notícia: a maioria das vulnerabilidades conhecidas é evitada com práticas bem estabelecidas."
-->

---

###### Dados

# OWASP Top 10:2025

## As categorias de risco mais críticas em aplicações web

<div class="cols">
<div>

| Código | Categoria |
|---|---|
| **A01** | Controle de acesso quebrado |
| **A02** | Configuração insegura |
| **A03** | Cadeia de suprimentos |
| **A04** | Falhas criptográficas |
| **A05** | Injeção |

</div>
<div>

| Código | Categoria |
|---|---|
| **A06** | Design inseguro |
| **A07** | Falhas de autenticação |
| **A08** | Falhas de integridade |
| **A09** | Falhas de log e alerta |
| **A10** | Tratamento inadequado de exceções |

</div>
</div>

<div class="box pratica"><div class="t">A03 no Node</div>Rode <code>npm audit</code> no pipeline, versione o <code>package-lock.json</code> e ative o <strong>Dependabot</strong>: a API depende de dezenas de pacotes.</div>

<!--
🎤 **Fala do Professor:**

"A OWASP é uma fundação aberta sobre segurança, e o Top 10 lista as categorias de risco mais críticas, montada a partir de dados de milhares de aplicações. Na versão 2025, o controle de acesso quebrado continua em primeiro lugar: é o nosso incidente 2. Reparem que muitos itens já foram tratados nas aulas anteriores: configuração por ambiente na Aula 1, tratamento de exceções na Aula 3, injeção há poucos minutos. No ecossistema Node, a cadeia de suprimentos merece atenção especial: um projeto Express simples puxa dezenas de pacotes indiretos. Por isso o npm audit deve rodar automaticamente a cada alteração."
-->

---

###### Comparação

# Autenticação × Autorização

## Primeiro identificar, depois permitir

| Aspecto | Autenticação | Autorização |
|---|---|---|
| **Pergunta** | **quem é você?** | **o que você pode fazer?** |
| **Momento** | primeiro | depois |
| **Mecanismos** | senha, token JWT, MFA | papéis (RBAC), policies |
| **Falha gera** | **401** Unauthorized | **403** Forbidden |
| **No Express** | middleware `autenticar` | `exigirPapel(...)` + policy |

<div class="cols">
<div class="box analogia"><div class="t">Analogia · a portaria</div>O <strong>crachá</strong> prova quem você é. A <strong>catraca</strong> de cada andar decide se você pode entrar ali.</div>
<div class="box"><div class="t">Incidente 2</div>O aluno tinha <strong>crachá</strong> (estava autenticado), mas nenhuma <strong>catraca</strong> conferiu se ele podia ver <strong>aquela</strong> matrícula.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Duas perguntas que muita gente mistura. Autenticação: quem é você? Autorização: o que você pode fazer? A autenticação vem sempre antes, porque não dá para decidir permissões sem saber quem é o usuário. Na portaria da empresa, o crachá prova quem você é, e a catraca de cada andar decide se você pode entrar. Falha de autenticação gera 401; falha de autorização gera 403. Guardem essa diferença, ela cai em toda entrevista de back-end. No nosso incidente, o aluno tinha crachá, mas nenhuma catraca conferiu se ele podia ver aquela matrícula específica."
-->

---

###### Comparação

# Sessão × JWT e a anatomia do token

## A API acadêmica atende apps e parceiros: escolhemos JWT

<div class="cols-60">
<div>

| Critério | Sessão (cookie) | JWT (Bearer) |
|---|---|---|
| Estado no servidor | **sim** | **não** (access token) |
| Revogação | simples | difícil: vida **curta** |
| Vários servidores | precisa de Redis | natural |
| Principal risco | CSRF | roubo do token |

</div>
<div>

<div class="flow v">
  <div class="b">Header<small>alg: HS256</small></div>
  <div class="b alt">Payload<small>sub, papeis, iat, exp</small></div>
  <div class="b dark">Assinatura<small>header + payload + segredo</small></div>
</div>

</div>
</div>

<div class="cols">
<div class="box pratica"><div class="t">Integridade</div>Trocou <code>ALUNO</code> por <code>ADMIN</code> no payload? A assinatura <strong>não confere</strong>: 401.</div>
<div class="box"><div class="t">Não é segredo</div>O payload é só <strong>Base64URL</strong>: qualquer um lê. <strong>Nunca</strong> coloque senha ou dado sensível nele.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Depois do login, como o servidor lembra quem é o usuário? Na sessão, o servidor guarda um registro e o navegador envia um cookie; é ótimo para portais web e fácil de revogar. Com JWT, o servidor emite um token assinado e o cliente o envia no cabeçalho Authorization; o servidor só confere a assinatura, sem consultar nada, o que combina com o REST sem estado. Como a nossa API atende aplicativos e parceiros, escolhemos JWT. O token tem três partes: header, payload e assinatura. A assinatura garante a integridade: se alguém trocar ALUNO por ADMIN, ela deixa de conferir. Mas atenção: a assinatura não esconde nada. O payload é só codificado, qualquer pessoa lê."
-->

---

<!-- _class: dense -->

###### Código

# Login com bcrypt e emissão do JWT

## Senha conferida por hash lento; token curto, sem dado sensível

```js
// src/services/auth.service.js (trecho) — usa os pacotes bcrypt e jsonwebtoken
static hashSenha(senha) { return bcrypt.hash(senha, 12); } // custo 12: lento de propósito

async login({ email, senha }) {
  const { rows: [usuario] } = await this.#db.query(
    'SELECT id, senha_hash, papel FROM usuarios WHERE email = $1', [email]);

  const ok = usuario && await bcrypt.compare(senha, usuario.senha_hash);
  if (!ok) throw new NaoAutenticadoError('Credenciais inválidas.'); // GENÉRICA

  const token = jwt.sign(
    { sub: String(usuario.id), papeis: [usuario.papel] },   // nada de senha/e-mail
    config.jwt.segredo,                                     // vem do .env (Aula 1)
    { algorithm: 'HS256', expiresIn: config.jwt.validade }); // ex.: '15m'
  return { access_token: token, token_type: 'Bearer' };
}
```

<div class="cols">
<div class="box"><div class="t">Mensagem genérica</div>"E-mail não encontrado" ajuda o atacante a <strong>descobrir contas</strong>. Diga só "Credenciais inválidas".</div>
<div class="box pratica"><div class="t">Refresh token</div>Access de <strong>~15 min</strong> + refresh de longa duração, guardado como <strong>hash</strong> e <strong>rotacionado</strong> a cada uso.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este é o login da nossa API. Buscamos o usuário pelo e-mail, com parâmetro, claro, e comparamos a senha digitada com o hash guardado usando bcrypt.compare. Se não bater, a mensagem é genérica: dizer 'e-mail não encontrado' ajuda o atacante a descobrir quais contas existem. Se bater, emitimos o JWT com o identificador e os papéis do usuário, assinado com o segredo do .env, aceitando só o algoritmo HS256 e com validade de quinze minutos. Tokens curtos limitam o estrago de um roubo; para não pedir senha a cada quinze minutos, o e-book apresenta o refresh token, guardado como hash e rotacionado a cada uso."
-->

---

<!-- _class: dense -->

###### Código

# Middlewares de autenticação e autorização

## A catraca e o crachá viram duas funções reaproveitáveis

<div class="cols-60">
<div>

```js
// src/middlewares/auth.js
// Autenticação: QUEM é você? (falha ➜ 401)
function autenticar(req, res, next) {
  const [tipo, token] =
    (req.get('Authorization') ?? '').split(' ');
  if (tipo !== 'Bearer' || !token) {
    return next(new NaoAutenticadoError());
  }
  try {
    req.usuario = jwt.verify(token, config.jwt.segredo,
      { algorithms: ['HS256'] });   // só o algoritmo esperado
    next();
  } catch {
    next(new NaoAutenticadoError(
      'Token inválido ou expirado.'));
  }
}

// Autorização por papel: você PODE? (falha ➜ 403)
const exigirPapel = (...papeis) => (req, res, next) =>
  papeis.some(p => req.usuario.papeis.includes(p))
    ? next() : next(new ProibidoError());
```

</div>
<div>

```js
// uso nas rotas
r.post('/alunos',
  autenticar,
  exigirPapel('ADMIN'),
  validar(criarAlunoSchema),
  alunoController.store);
```

<div class="box"><div class="t">algorithms: ['HS256']</div>Bibliotecas antigas já aceitaram tokens com <code>alg: none</code>, <strong>sem assinatura</strong>. Fixe o algoritmo.</div>

<div class="box pratica"><div class="t">Testado</div>Sem token ➜ <strong>401</strong> · aluno criando aluno ➜ <strong>403</strong> · token adulterado ➜ <strong>401</strong>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Dois middlewares. O autenticar lê o cabeçalho Authorization, separa o tipo Bearer do token e verifica a assinatura e a validade com jwt.verify. Se estiver tudo certo, coloca os dados do usuário em req.usuario e passa adiante; senão, 401. Reparem no parâmetro algorithms: aceitamos apenas o algoritmo esperado, porque já houve bibliotecas que aceitavam tokens com alg none, sem assinatura nenhuma, um exemplo do A08. O exigirPapel é uma fábrica de middlewares: recebe os papéis permitidos e devolve uma função que responde 403 se o usuário não tiver nenhum deles. Todos esses cenários estão nos testes do projeto."
-->

---

<!-- _class: dense -->

###### Código

# RBAC + policy: corrigindo o IDOR

## O papel responde "é professor?"; a policy responde "é professor **desta** turma?"

<div class="cols">
<div>

```js
// src/policies/matricula.policy.js
function podeVerMatricula(usuario, matricula) {
  const id = Number(usuario.sub);
  return usuario.papeis.includes('ADMIN')
    || matricula.aluno_usuario_id === id      // dono
    || matricula.professor_usuario_id === id; // professor
}
```

```js
// src/routes/v1/index.js (trecho)
r.get('/matriculas/:id', autenticar, async (req, res) => {
  const id = Number(req.params.id);
  const m = await matriculaService.buscar(db, id);
  if (!m) throw new NaoEncontradoError('Matrícula');
  if (!podeVerMatricula(req.usuario, m)) {
    throw new ProibidoError();                // ➜ 403
  }
  res.json(paraPublico(m));
});
```

</div>
<div>

| Ação | ADMIN | PROFESSOR | ALUNO |
|---|---|---|---|
| Cadastrar alunos | sim | não | não |
| Ver matrícula | todas | **das suas turmas** | **só as próprias** |
| Lançar nota | sim | **suas turmas** | não |

<div class="box"><div class="t">Regra de ouro</div><strong>Negue por padrão</strong> e verifique sempre no back-end. Esconder o botão no front-end <strong>não protege nada</strong>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Esta é a correção do incidente 2. O RBAC, controle de acesso baseado em papéis, coloca as permissões nos papéis e dá papéis aos usuários. Mas algumas regras dependem do objeto: professor vê matrícula apenas das suas turmas, aluno só as próprias. Para isso existe a policy: uma função que responde se este usuário pode acessar este objeto. Na rota, depois de buscar a matrícula, a policy decide, e se negar, 403. Testei: o aluno tentando ver a matrícula de outro recebe 403; a professora da turma recebe 200. Usar ids difíceis de adivinhar ajuda, mas não substitui essa verificação em cada rota."
-->

---

###### Comparação

# Hash × criptografia: guardando senhas

## Senha não se guarda, se compara

| Critério | Hash | Criptografia |
|---|---|---|
| **Reversível?** | **não** (mão única) | **sim**, com a chave |
| **Uso típico** | **senhas**, integridade | dados que precisam ser **lidos** (documento, telefone) |
| **No Node** | `bcrypt`, `argon2` · `node:crypto` (SHA-256) | `node:crypto` com **AES-256-GCM** |

<div class="cols">
<div class="box pratica"><div class="t">Lento de propósito · medido nesta máquina</div><strong>bcrypt</strong> custo 12 ≈ <strong>245 ms</strong> · <strong>SHA-256</strong> ≈ <strong>0,002 ms</strong>. Para o usuário, imperceptível; para a força bruta, <strong>inviável</strong>.</div>
<div class="box analogia"><div class="t">Analogia</div><strong>Hash</strong> é o suco de laranja: não volta a ser laranja, mas dá para espremer outra e <strong>comparar</strong>. <strong>Criptografia</strong> é o cofre: quem tem a chave abre.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Guardar senha em texto puro é uma das falhas mais graves possíveis: se o banco vazar, todas as contas caem, inclusive em outros serviços, porque as pessoas reutilizam senhas. Criptografia é reversível com a chave; serve para dados que precisam ser lidos depois. Hash é mão única; é o que usamos para senhas. No login, calculamos o hash da senha digitada e comparamos. Mas não serve qualquer hash: medi aqui, o bcrypt com custo 12 levou cerca de 245 milissegundos, e o SHA-256 cerca de dois milésimos de milissegundo, mais de cem mil vezes mais rápido. Rapidez aqui ajuda o atacante. O bcrypt é lento de propósito e inclui o salt automaticamente."
-->

---

<!-- _class: dense -->

###### Código

# helmet, CORS e rate limiting no Express

## Proteções que atuam **antes** de a requisição chegar ao controller

<div class="cols">
<div>

```js
// src/app.js (trecho)
app.use(helmet());          // cabeçalhos de segurança
                            // e remove X-Powered-By
app.use(cors({              // só origens confiáveis
  origin: config.corsOrigins,  // nunca '*' em produção
}));
app.use(express.json({ limit: '100kb' }));
```

```js
// src/routes/v1/index.js (trecho)
const limiteLogin = rateLimit({
  windowMs: 15 * 60 * 1000,    // janela de 15 min
  limit: 5,                    // 5 tentativas
  keyGenerator: (req) =>       // por e-mail + IP
    `${req.body?.email}:${ipKeyGenerator(req.ip)}`,
  handler: (req, res, next) =>
    next(new MuitasTentativasError()),   // ➜ 429
});

r.post('/auth/login', limiteLogin, validar(loginSchema), ...);
```

</div>
<div>

<div class="cards c1">
  <div class="card"><b>helmet</b><code>Strict-Transport-Security</code>, <code>X-Content-Type-Options</code>, <code>Content-Security-Policy</code>...</div>
  <div class="card"><b>CORS</b>diz ao <strong>navegador</strong> quem pode chamar. Não é autenticação: o <code>curl</code> ignora.</div>
  <div class="card"><b>Rate limit</b>5 senhas erradas ➜ a 6ª tentativa recebe <strong>429</strong> (testado).</div>
</div>

<div class="box analogia"><div class="t">Analogia</div>O <strong>caixa eletrônico</strong> bloqueia o cartão depois de três senhas erradas.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Três proteções que atuam antes do controller. O helmet adiciona os cabeçalhos de segurança que o e-book lista, como HSTS e X-Content-Type-Options, e remove o X-Powered-By, que anunciava ao mundo que usamos Express. O CORS diz ao navegador quais origens podem chamar a API; nunca use asterisco em produção, e lembrem que o CORS não é autenticação, porque só o navegador o respeita. O rate limit no login é a principal defesa contra força bruta: cinco tentativas por e-mail e IP a cada quinze minutos; a sexta recebe 429, e eu testei isso. E os logs da Aula 2 completam o quadro: monitorem picos de 401, 403 e 429, e nunca registrem senhas ou tokens."
-->

---

###### Figura

# Defesa em profundidade: o pipeline completo

## Nenhuma camada basta sozinha; juntas, a falha de uma é barrada pela próxima

<div class="flow">
  <div class="b">1 · HTTPS<small>Nginx</small></div><div class="a">›</div>
  <div class="b">2 · helmet<small>cabeçalhos</small></div><div class="a">›</div>
  <div class="b">3 · CORS<small>origens</small></div><div class="a">›</div>
  <div class="b alt">4 · Rate limit<small>429</small></div><div class="a">›</div>
  <div class="b alt">5 · autenticar<small>JWT · 401</small></div>
</div>
<div class="flow">
  <div class="b alt">6 · exigirPapel<small>RBAC · 403</small></div><div class="a">›</div>
  <div class="b alt">7 · validar<small>Zod · 422</small></div><div class="a">›</div>
  <div class="b">8 · Service<small>policy + transação</small></div><div class="a">›</div>
  <div class="b">9 · Repository<small>SQL com $1</small></div><div class="a">›</div>
  <div class="b dark">10 · Resource<small>só campos públicos</small></div>
</div>
<p class="legenda">Figura 2 – O caminho de uma requisição na API acadêmica. Logs com <code>request_id</code> e o tratador de erros acompanham todo o fluxo.</p>

<div class="box analogia"><div class="t">Analogia · o castelo</div>Fosso, muralha, portão e guardas: vencer um obstáculo <strong>não basta</strong>. Pergunta-chave: <strong>se eu fosse o atacante, por onde entraria, e qual camada me impediria?</strong></div>

<!--
🎤 **Fala do Professor:**

"Este slide junta a disciplina inteira. A requisição chega por HTTPS, passa pelo helmet, pelo CORS, pelo rate limit, pela autenticação e pela autorização. Só então é validada pelo Zod e chega ao service, que aplica a policy e a transação; o repositório acessa o banco com SQL parametrizado e o resource devolve só os campos públicos. Cada caixa corresponde a um tema das quatro aulas. Esse princípio se chama defesa em profundidade: nenhuma camada é suficiente, mas juntas fazem com que a falha de uma seja barrada pela próxima. Guardem a pergunta-chave: se eu fosse o atacante, por onde tentaria entrar, e qual camada me impediria?"
-->

---

###### Analogias

# Persistência e segurança no dia a dia

## Use a analogia para lembrar; use o termo técnico para explicar

| Conceito | No dia a dia | Na API acadêmica |
|---|---|---|
| **Pool de conexões** | o **ponto de táxi** com a frota esperando | `new Pool({ max: 10 })` |
| **Transação** | **compra online**: paga e baixa o estoque juntos | `transacao(async (db) => ...)` |
| **Bloqueio pessimista** | o **provador**: quem entra tranca a porta | `SELECT ... FOR UPDATE` |
| **Autenticação × autorização** | **crachá** × **catraca** | `autenticar` × `exigirPapel` + policy |
| **Hash × criptografia** | **suco** de laranja × **cofre** | `bcrypt` × AES-256-GCM |
| **Rate limiting** | o **caixa eletrônico** que bloqueia o cartão | `express-rate-limit` ➜ 429 |
| **Defesa em profundidade** | o **castelo** com fosso, muralha e guardas | o pipeline de middlewares |

<!--
🎤 **Fala do Professor:**

"Vamos trazer tudo para o cotidiano. O pool é o ponto de táxi. A transação é a compra online. O bloqueio pessimista é o provador da loja: quem entra tranca a porta e o próximo espera. Autenticação e autorização são o crachá e a catraca. Hash e criptografia são o suco e o cofre. Rate limiting é o caixa eletrônico que bloqueia o cartão. E a defesa em profundidade é o castelo. A terceira coluna mostra cada um no código da nossa API."
-->

---

###### Fechamento

# Resumo da aula e da disciplina

## As ideias que você leva para a vida profissional

<div class="cards">
  <div class="card"><span class="n">1</span><strong>Pool</strong> reaproveita conexões; <strong>parâmetros <code>$1</code></strong> impedem injeção de SQL.</div>
  <div class="card"><span class="n">2</span><strong>Transação + <code>FOR UPDATE</code></strong> garantem o tudo ou nada sob concorrência.</div>
  <div class="card"><span class="n">3</span><strong>Restrições no banco</strong> são a última linha de defesa da integridade.</div>
  <div class="card"><span class="n">4</span><strong>401</strong> = quem é você? · <strong>403</strong> = você pode? · JWT curto, <strong>bcrypt</strong> lento.</div>
  <div class="card"><span class="n">5</span><strong>RBAC + policy</strong> em toda rota que devolve ou altera dados.</div>
  <div class="card"><span class="n">6</span><strong>helmet, CORS, rate limit e logs</strong> completam a defesa em camadas.</div>
</div>

<div class="callout">Da Aula 1 à 4: <strong>HTTP ➜ middlewares e camadas ➜ contrato REST ➜ dados corretos e protegidos</strong>. Quem entende o caminho da requisição domina <strong>qualquer framework</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vamos recapitular a aula e a disciplina. Hoje vimos pool e consultas parametrizadas, transações com bloqueio e restrições no banco, e depois autenticação com JWT e bcrypt, autorização com RBAC e policies e as proteções do Express. Olhem o callout: na Aula 1, o HTTP e o primeiro servidor; na Aula 2, middlewares e camadas; na Aula 3, o contrato REST; e hoje, dados corretos e protegidos. Vocês agora conhecem o caminho completo de uma requisição, e isso vale para Express, Laravel, Spring ou qualquer outro framework."
-->

---

###### Reflexão

# Desafio final: encontre as falhas

## Aponte ao menos 6 problemas e a camada que corrigiria cada um

<div class="cols-60">
<div>

```js
app.get('/v1/matriculas/:id', async (req, res) => {
  const { rows } = await pool.query(
    `SELECT * FROM matriculas
      WHERE id = ${req.params.id}`);
  console.log('consulta', {
    senha: req.query.senha,
    token: req.get('Authorization') });
  res.json(rows[0]);
});

app.use(cors({ origin: '*' }));
app.use(express.json());
```

</div>
<div>

### Reflita

1. Por que esconder um botão no front-end **não** é controle de acesso?
2. Quando você escolheria **sessão** em vez de **JWT**?
3. Por que um hash **rápido** é ruim para senhas?
4. Por que o `CHECK (vagas >= 0)` sozinho **não basta**?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fechar a disciplina, analisem esta rota. Há autenticação? Há verificação de que o usuário pode ver aquela matrícula? Como o SQL é montado? O que está sendo gravado no log? O que é devolvido ao cliente, o SELECT asterisco? E a configuração de CORS, faz sentido? Ah, e reparem na ordem: o cors e o express.json foram registrados depois da rota. Para cada falha, indiquem a camada do slide de defesa em profundidade que a corrigiria. Depois respondam às quatro perguntas. Para estudar, leiam as Unidades IV e V do e-book e rodem os testes do projeto de apoio."
-->

---

<!-- _class: refs -->

###### Fontes

# Referências

SILVA, Allan da. **Desenvolvimento Back-End**: arquitetura, APIs RESTful, persistência de dados e segurança no lado do servidor. E-book. 2026. Unidades IV e V.

OWASP FOUNDATION. **OWASP Top 10:2025**. Disponível em: https://owasp.org/Top10/.

JONES, M.; BRADLEY, J.; SAKIMURA, N. **RFC 7519: JSON Web Token (JWT)**. IETF, 2015.

BRIAN CARLSON. **node-postgres** (pacote `pg`): Pooling e Transactions. Disponível em: https://node-postgres.com.

THE POSTGRESQL GLOBAL DEVELOPMENT GROUP. **PostgreSQL 16 Documentation**: Explicit Locking (`SELECT ... FOR UPDATE`).

OPENJS FOUNDATION. **Express – Production Best Practices: Security**. Disponível em: https://expressjs.com/en/advanced/best-practice-security.html.

<!--
🎤 **Fala do Professor:**

"As referências da aula. A página de boas práticas de segurança do Express é curta e vale a leitura completa; ela recomenda exatamente o helmet e o rate limiting que vimos."
-->

---

<!-- _class: fim -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Obrigado!

**Prof. Esp. Allan da Silva**

Parabéns pela jornada: do primeiro `GET` a uma API segura em camadas.

<!--
🎤 **Fala do Professor:**

"Esta foi a nossa última aula. Vocês saíram de um servidor de quinze linhas e chegaram a uma API organizada em camadas, com contrato REST, dados consistentes sob concorrência e segurança em profundidade. Parabéns pela jornada, e até a próxima!"
-->
