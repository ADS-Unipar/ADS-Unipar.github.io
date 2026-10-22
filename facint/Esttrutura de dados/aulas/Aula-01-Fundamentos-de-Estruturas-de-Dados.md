---
marp: true
theme: default
html: true
size: 16:9
backgroundImage: url('../materiais/MODELO_SLIDE_FACINT.pptx.svg')
backgroundSize: cover
backgroundPosition: center

style: |
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');

  :root {
    --primary: #092753;
    --primary-soft: #e8eef8;
    --primary-mid: #2c4f86;
    --text: #1d2737;
    --muted: #5b6678;
  }

  section {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: var(--text);
    font-size: 26px;
    line-height: 1.45;
    padding: 64px 96px 120px 84px;
    justify-content: flex-start;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: var(--primary);
    font-size: 1.55em;
    margin: 0 0 0.5em 0;
    padding-left: 18px;
    border-left: 10px solid var(--primary);
    max-width: 82%;
  }

  h2 { font-family: 'Montserrat', sans-serif; color: var(--primary); font-size: 1.05em; margin: 0.2em 0; }
  h3 { color: var(--primary-mid); font-size: 0.9em; margin: 0.2em 0; }
  strong { color: var(--primary); }
  ul, ol { margin: 0.2em 0; }
  li { margin: 0.15em 0; }

  /* ---------- Código ---------- */
  pre {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.62em;
    line-height: 1.5;
    background: #f5f8fd;
    border: 1px solid #d5deec;
    border-left: 8px solid var(--primary);
    border-radius: 12px;
    padding: 16px 22px;
    box-shadow: 0 6px 18px rgba(9, 39, 83, 0.10);
    margin: 0.3em 0;
  }
  code { font-family: 'JetBrains Mono', monospace; }
  p > code, li > code, td > code {
    background: var(--primary-soft);
    color: var(--primary);
    padding: 1px 8px;
    border-radius: 6px;
    font-size: 0.85em;
  }

  /* ---------- Rodapé e paginação ---------- */
  footer { color: var(--muted); font-size: 0.5em; left: 84px; bottom: 30px; }
  section::after {
    color: #fff; background: var(--primary);
    font-weight: 600; font-size: 0.55em;
    border-radius: 999px; padding: 4px 14px;
    right: 40px; bottom: 26px;
  }

  /* ---------- Tabelas ---------- */
  table { border-collapse: collapse; font-size: 0.78em; margin: 0.4em 0; }
  th { background: var(--primary); color: #fff; padding: 10px 18px; }
  td { padding: 9px 18px; background: rgba(255,255,255,0.92); border-bottom: 1px solid #dbe3f0; }

  /* ---------- Componentes ---------- */
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
  .cols-60 { display: grid; grid-template-columns: 1.35fr 1fr; gap: 30px; align-items: start; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 0.4em; }
  .cards.c2 { grid-template-columns: repeat(2, 1fr); }
  .cards.c4 { grid-template-columns: repeat(4, 1fr); }
  .card {
    background: rgba(255,255,255,0.95);
    border: 1px solid #d5deec; border-top: 6px solid var(--primary);
    border-radius: 14px; padding: 16px 20px;
    box-shadow: 0 6px 16px rgba(9,39,83,0.08);
    font-size: 0.78em;
  }
  .card b { display: block; color: var(--primary); font-family: 'Montserrat', sans-serif; font-size: 1.1em; margin-bottom: 4px; }
  .card .ico { font-size: 1.6em; display: block; margin-bottom: 4px; }

  .callout {
    background: var(--primary); color: #fff;
    border-radius: 14px; padding: 14px 24px; margin-top: 0.5em;
    font-size: 0.82em; box-shadow: 0 8px 20px rgba(9,39,83,0.25);
  }
  .callout strong { color: #9cc3ff; }

  .note {
    background: var(--primary-soft); border-left: 6px solid var(--primary);
    border-radius: 10px; padding: 10px 18px; font-size: 0.72em; margin-top: 0.4em;
  }
  .note strong { color: var(--primary); }

  .flow { display: flex; align-items: center; gap: 14px; margin: 0.5em 0; flex-wrap: nowrap; }
  .flow .step {
    background: #fff; border: 2px solid var(--primary); color: var(--primary);
    border-radius: 12px; padding: 12px 18px; font-weight: 600; text-align: center;
    font-size: 0.78em; min-width: 140px; box-shadow: 0 4px 12px rgba(9,39,83,0.10);
  }
  .flow .step.fill { background: var(--primary); color: #fff; }
  .flow .arrow { color: var(--primary); font-size: 1.4em; font-weight: 800; }

  /* Representação de memória (array) */
  .mem { display: flex; gap: 0; margin: 0.4em 0; }
  .mem .cell { text-align: center; font-size: 0.72em; }
  .mem .val {
    border: 2px solid var(--primary); background: #fff; color: var(--primary);
    width: 120px; padding: 12px 0; font-weight: 700; font-family: 'JetBrains Mono', monospace;
  }
  .mem .cell + .cell .val { border-left: none; }
  .mem .idx { color: var(--muted); font-family: 'JetBrains Mono', monospace; margin-top: 4px; }

  /* Lista encadeada */
  .nodes { display: flex; align-items: center; gap: 10px; margin: 0.4em 0; }
  .node { display: flex; border: 2px solid var(--primary); border-radius: 10px; overflow: hidden; font-size: 0.72em; font-family: 'JetBrains Mono', monospace; }
  .node span { padding: 10px 14px; background: #fff; color: var(--primary); font-weight: 700; }
  .node span + span { background: var(--primary); color: #fff; }

  /* Gráfico de crescimento */
  .bars { display: flex; flex-direction: column; gap: 10px; margin-top: 0.3em; font-size: 0.7em; }
  .bar-row { display: grid; grid-template-columns: 110px 1fr 150px; align-items: center; gap: 12px; }
  .bar-row .lbl { font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--primary); }
  .bar { height: 22px; border-radius: 999px; background: var(--primary); }
  .bar-row .ops { color: var(--muted); font-family: 'JetBrains Mono', monospace; }

  .tag {
    display: inline-block; background: var(--primary); color: #fff;
    border-radius: 999px; padding: 3px 14px; font-size: 0.6em; font-weight: 600;
    letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;
  }
  .muted { color: var(--muted); }
  .center { text-align: center; }

  .bigo { gap: 16px; }
  .bigo .card { position: relative; padding: 12px 18px 12px 70px; font-size: 0.72em; }
  .bigo .card .ico { position: absolute; left: 16px; top: 14px; font-size: 1.8em; }
  .bigo .card .js { display: block; margin-top: 6px; color: var(--muted); font-size: 0.9em; }

  section.dense h1 { margin-bottom: 0.3em; }
  section.dense pre { font-size: 0.56em; line-height: 1.4; padding: 12px 20px; }

  /* ---------- Capa / divisórias ---------- */
  section.lead { justify-content: center; padding-left: 110px; }
  section.lead h1 {
    font-size: 2.3em; border: none; padding: 0; max-width: 75%; line-height: 1.1;
  }
  section.lead h2 { color: var(--primary-mid); font-weight: 500; font-size: 1.05em; }
  section.lead .line { width: 140px; height: 8px; background: var(--primary); border-radius: 99px; margin: 18px 0; }
  section.lead p { color: var(--muted); font-size: 0.8em; }
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: '' -->

<span class="tag">Engenharia de Software </span>

# Fundamentos de Estruturas de Dados

<div class="line"></div>

## Organização e Manipulação de Estruturas de Dados

Dados · Organização · Operações · Eficiência · Big O

<!--
🎤 **Fala do Professor:**

"Sejam bem-vindos à nossa primeira aula de Organização e Manipulação de Estruturas de Dados. Hoje vamos construir a base de toda a disciplina: entender o que são estruturas de dados, por que organizamos dados de formas diferentes e como começamos a medir se uma solução é eficiente. Vamos usar JavaScript para tornar tudo bem prático."
-->

---

# 🎯 Objetivos de aprendizagem

<div class="cards">
  <div class="card"><span class="ico">🧩</span><b>Compreender</b>o conceito de estrutura de dados e a diferença entre dado e informação</div>
  <div class="card"><span class="ico">🗂️</span><b>Diferenciar</b>tipos de dados e estruturas estáticas × dinâmicas</div>
  <div class="card"><span class="ico">⚙️</span><b>Aplicar</b>operações básicas: inserir, remover, acessar, buscar e percorrer</div>
  <div class="card"><span class="ico">⏱️</span><b>Analisar</b>a eficiência de algoritmos em tempo e espaço</div>
  <div class="card"><span class="ico">📈</span><b>Interpretar</b>a notação Big O em casos simples</div>
  <div class="card"><span class="ico">💻</span><b>Relacionar</b>estruturas de dados a sistemas reais</div>
</div>

<!--
🎤 **Fala do Professor:**

"Ao final desta aula vocês devem ser capazes de explicar o que é uma estrutura de dados, diferenciar tipos e categorias de estruturas, executar as operações básicas e dar os primeiros passos na análise de eficiência com Big O."
-->

---

# 🧱 O que são estruturas de dados?

<div class="cols-60">
<div>

Uma **estrutura de dados** é uma forma de **organizar, armazenar e acessar** dados na memória para que possam ser usados **de maneira eficiente**.

- Define **como** os dados ficam dispostos
- Define **quais operações** são possíveis
- Influencia o **desempenho** do programa

</div>
<div>

<div class="card"><b>Analogia</b>Uma biblioteca organiza livros por estante, seção e código. Sem organização, encontrar um livro exigiria olhar <strong>todos</strong> eles.</div>

</div>
</div>

<div class="callout">Estrutura de dados = <strong>dados</strong> + <strong>organização</strong> + <strong>operações</strong></div>

<!--
🎤 **Fala do Professor:**

"Estrutura de dados não é só 'onde guardo a informação', mas também como ela é organizada e o que posso fazer com ela. Pensem numa biblioteca: a organização é o que permite encontrar um livro em segundos."
-->

---

# 🔎 Dados × Informação

<div class="flow">
  <div class="step">Dado bruto<br><span class="muted">7.5, 8.0, 6.0</span></div>
  <div class="arrow">➜</div>
  <div class="step">Organização<br><span class="muted">estrutura + contexto</span></div>
  <div class="arrow">➜</div>
  <div class="step">Processamento<br><span class="muted">média, ordenação</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">Informação<br>"Ana foi aprovada"</div>
</div>

<div class="cards c2">
  <div class="card"><b>Dado</b>Valor isolado, sem contexto: <code>8.0</code>, <code>"Ana"</code>, <code>true</code></div>
  <div class="card"><b>Informação</b>Dado <strong>organizado e interpretado</strong> que apoia uma decisão</div>
</div>

<div class="note">💡 A estrutura de dados é a <strong>ponte</strong> entre o dado bruto e a informação útil.</div>

<!--
🎤 **Fala do Professor:**

"O número 8 sozinho não diz nada. Quando sabemos que é a nota da Ana na disciplina X e que a média para aprovação é 6, isso vira informação. A estrutura de dados é o que dá forma e contexto aos dados."
-->

---

# 🗂️ Por que organizar os dados?

<div class="cols">
<div>

### ❌ Sem organização
- Buscas lentas
- Dados duplicados
- Código difícil de manter
- Desperdício de memória

</div>
<div>

### ✅ Com organização
- Acesso **rápido**
- Operações **previsíveis**
- Código **legível**
- Uso **racional** de recursos

</div>
</div>

<div class="note"><strong>Representação na memória:</strong> um array guarda elementos em posições <strong>contíguas</strong>, identificadas por índices.</div>

<div class="mem">
  <div class="cell"><div class="val">"Ana"</div><div class="idx">[0]</div></div>
  <div class="cell"><div class="val">"Carlos"</div><div class="idx">[1]</div></div>
  <div class="cell"><div class="val">"Mariana"</div><div class="idx">[2]</div></div>
  <div class="cell"><div class="val">"João"</div><div class="idx">[3]</div></div>
</div>

<!--
🎤 **Fala do Professor:**

"Organizar dados é uma decisão de projeto. Quando guardamos nomes em posições numeradas, conseguimos chegar a qualquer um deles diretamente pelo índice. É isso que o diagrama representa."
-->

---

# 💻 Estruturas de dados no software

<div class="cards c4">
  <div class="card"><span class="ico">🛒</span><b>E-commerce</b>Carrinho de compras como <strong>lista</strong></div>
  <div class="card"><span class="ico">↩️</span><b>Editores</b>Desfazer (Ctrl+Z) com <strong>pilha</strong></div>
  <div class="card"><span class="ico">🖨️</span><b>Impressão</b>Fila de documentos com <strong>fila</strong></div>
  <div class="card"><span class="ico">🗺️</span><b>Mapas</b>Rotas e caminhos com <strong>grafos</strong></div>
  <div class="card"><span class="ico">📁</span><b>Sistemas de arquivos</b>Pastas com <strong>árvores</strong></div>
  <div class="card"><span class="ico">🔐</span><b>Login</b>Sessões com <strong>tabela hash</strong></div>
  <div class="card"><span class="ico">🗄️</span><b>Bancos de dados</b>Índices com <strong>árvores B</strong></div>
  <div class="card"><span class="ico">🌐</span><b>Navegador</b>Histórico com <strong>pilha/lista</strong></div>
</div>

<div class="callout">Escolher a estrutura certa é uma <strong>decisão de engenharia</strong> que afeta desempenho, custo e escalabilidade.</div>

<!--
🎤 **Fala do Professor:**

"Tudo que vocês usam no dia a dia tem uma estrutura de dados por trás. Ao longo da disciplina vamos estudar várias delas: listas, pilhas, filas, árvores, grafos e hash."
-->

---

# 🔤 Tipos de dados

<div class="cols">
<div>

### Primitivos <span class="muted">(valor único)</span>

| Tipo | Exemplo |
|------|---------|
| `number` | `42`, `3.14` |
| `string` | `"Ana"` |
| `boolean` | `true` |
| `null` / `undefined` | ausência de valor |

</div>
<div>

### Compostos <span class="muted">(agrupam valores)</span>

| Tipo | Exemplo |
|------|---------|
| `Array` | `[1, 2, 3]` |
| `Object` | `{ nome: "Ana" }` |
| `Map` / `Set` | pares e conjuntos |

</div>
</div>

<div class="note">Tipos <strong>abstratos de dados (TAD)</strong> — como pilha e fila — definem <strong>o comportamento</strong>; a estrutura define <strong>como implementá-lo</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Tipos primitivos guardam um único valor. Tipos compostos agrupam vários valores e já são, por si só, estruturas de dados. Mais adiante vamos falar de Tipos Abstratos de Dados, que descrevem o que a estrutura faz, independente de como ela é implementada."
-->

---

# 🚀 Primeiro exemplo em JavaScript

```javascript
// Criamos um array para armazenar os nomes dos alunos
const alunos = ["Ana", "Carlos", "Mariana"];

// Adicionamos um novo elemento ao final da estrutura
alunos.push("João");

// Acessamos diretamente uma posição pelo índice (começa em 0)
console.log(alunos[0]);      // "Ana"
console.log(alunos[3]);      // "João"

// A propriedade length informa o tamanho atual da estrutura
console.log(alunos.length);  // 4
```

<div class="note">📌 <strong>O que demonstra:</strong> o array é uma estrutura <strong>linear e indexada</strong>. Cada elemento ocupa uma posição numerada, o que permite <strong>acesso direto</strong> e <strong>inserção no final</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Este é o nosso primeiro contato prático. Reparem que o índice começa em zero, e que com o índice chegamos a qualquer elemento sem percorrer os anteriores. Rodem isso no console do navegador ou no Node."
-->

---

# ⚖️ Estruturas estáticas e dinâmicas

<div class="cols">
<div class="card">
<b>📏 Estáticas</b>

- Tamanho **definido** na criação
- Memória **contígua**
- Acesso por índice muito rápido
- Ex.: vetores em C, `Int32Array` em JS

<div class="mem">
  <div class="cell"><div class="val">10</div><div class="idx">[0]</div></div>
  <div class="cell"><div class="val">20</div><div class="idx">[1]</div></div>
  <div class="cell"><div class="val">30</div><div class="idx">[2]</div></div>
</div>
</div>
<div class="card">
<b>🔗 Dinâmicas</b>

- Tamanho **varia** em execução
- Memória pode ser **não contígua**
- Crescem e diminuem sob demanda
- Ex.: listas encadeadas, `Array` em JS

<div class="nodes">
  <div class="node"><span>10</span><span>→</span></div>
  <div class="node"><span>20</span><span>→</span></div>
  <div class="node"><span>30</span><span>∅</span></div>
</div>
</div>
</div>

<!--
🎤 **Fala do Professor:**

"Estruturas estáticas têm tamanho fixo: rápidas, mas pouco flexíveis. Dinâmicas crescem conforme a necessidade, normalmente usando nós ligados por referências. O Array do JavaScript é dinâmico, enquanto um Int32Array tem tamanho fixo."
-->

---

# 🛠️ Operações básicas

<div class="cards">
  <div class="card"><span class="ico">➕</span><b>Inserção</b>Adicionar um elemento (início, meio ou fim)</div>
  <div class="card"><span class="ico">➖</span><b>Remoção</b>Retirar um elemento da estrutura</div>
  <div class="card"><span class="ico">🎯</span><b>Acesso</b>Ler o elemento de uma posição específica</div>
  <div class="card"><span class="ico">🔍</span><b>Busca</b>Localizar um elemento pelo seu valor</div>
  <div class="card"><span class="ico">🔁</span><b>Percurso</b>Visitar todos os elementos, um a um</div>
  <div class="card"><span class="ico">✏️</span><b>Atualização</b>Alterar o valor de um elemento existente</div>
</div>

<div class="callout">Cada estrutura executa essas operações com <strong>custos diferentes</strong> — e é isso que guia a escolha.</div>

<!--
🎤 **Fala do Professor:**

"Praticamente toda estrutura de dados é avaliada por essas operações. Inserir, remover, acessar, buscar e percorrer. O ponto central é: o custo de cada operação muda de uma estrutura para outra."
-->

---

# 🧪 Exemplo prático: operações

```javascript
const fila = ["Ana", "Carlos", "Mariana"];

fila.push("João");            // Inserção no FIM     → [Ana, Carlos, Mariana, João]
fila.unshift("Bia");          // Inserção no INÍCIO  → desloca todos os elementos
fila.shift();                 // Remoção do INÍCIO   → remove "Bia"
fila.splice(1, 1);            // Remoção na posição 1 → remove "Carlos"

fila[0] = "Ana Paula";        // Atualização por índice

const pos = fila.indexOf("João");      // Busca: retorna a posição ou -1
console.log(pos);                      // 2

for (const nome of fila) {             // Percurso: visita cada elemento
  console.log(nome);
}
```

<div class="note">📌 <strong>Conceito:</strong> todas as operações básicas em uma única estrutura. Note que inserir/remover no <strong>início</strong> obriga o array a <strong>deslocar</strong> os demais elementos — isso tem custo!</div>

<!--
🎤 **Fala do Professor:**

"Aqui temos inserção, remoção, atualização, busca e percurso. Prestem atenção no unshift e no shift: como o array é indexado, ao colocar algo no início todos os outros precisam 'andar uma casa'. Guardem isso, porque vamos medir esse custo daqui a pouco."
-->

---

# ⚡ Eficiência de algoritmos

<div class="cols-60">
<div>

Dois programas podem dar o **mesmo resultado**, mas com **custos muito diferentes**.

- Quantos **passos** o algoritmo executa?
- Como esse número **cresce** quando os dados aumentam?
- Funciona bem com **10** itens… e com **10 milhões**?

</div>
<div>

<div class="card"><b>Situação real</b>Uma busca que leva 1 ms com 100 clientes pode levar <strong>minutos</strong> com 10 milhões se o algoritmo for ineficiente.</div>

</div>
</div>

<div class="flow">
  <div class="step">Entrada (n)</div><div class="arrow">➜</div>
  <div class="step">Algoritmo</div><div class="arrow">➜</div>
  <div class="step fill">Custo = f(n)</div>
</div>

<!--
🎤 **Fala do Professor:**

"Eficiência não é só 'rodar rápido no meu computador'. É entender como o custo cresce em função do tamanho da entrada, que chamamos de n."
-->

---

# ⏱️ Tempo e 💾 Espaço

<div class="cols">
<div class="card">
<b>⏱️ Complexidade de tempo</b>

Quantidade de **operações** executadas em função do tamanho da entrada.

```javascript
// Percorre n elementos → n passos
let soma = 0;
for (const x of numeros) soma += x;
```
</div>
<div class="card">
<b>💾 Complexidade de espaço</b>

Quantidade de **memória extra** utilizada pelo algoritmo.

```javascript
// Cria uma cópia → n posições extras
const copia = [...numeros];
```
</div>
</div>

<div class="note">⚖️ Muitas vezes existe um <strong>trade-off</strong>: gastar mais memória para ganhar velocidade, ou o contrário.</div>

<!--
🎤 **Fala do Professor:**

"Medimos duas coisas: tempo, que é o número de passos, e espaço, que é a memória extra. O primeiro exemplo usa só uma variável extra; o segundo duplica todo o array na memória."
-->

---

# 📈 Introdução à notação Big O

**Big O** descreve como o custo de um algoritmo **cresce** no **pior caso**, ignorando constantes.

<div class="bars">
  <div class="bar-row"><span class="lbl">O(1)</span><div class="bar" style="width:4%"></div><span class="ops">constante</span></div>
  <div class="bar-row"><span class="lbl">O(log n)</span><div class="bar" style="width:14%;opacity:.85"></div><span class="ops">logarítmica</span></div>
  <div class="bar-row"><span class="lbl">O(n)</span><div class="bar" style="width:40%;opacity:.75"></div><span class="ops">linear</span></div>
  <div class="bar-row"><span class="lbl">O(n²)</span><div class="bar" style="width:100%;opacity:.6"></div><span class="ops">quadrática</span></div>
</div>

| Operação em array | Big O |
|---|---|
| Acessar `arr[i]` / `push` | **O(1)** |
| Buscar com `indexOf` / `unshift` | **O(n)** |
| Comparar todos com todos | **O(n²)** |

<!--
🎤 **Fala do Professor:**

"Big O é uma forma de classificar algoritmos pela taxa de crescimento. Não importa se são 3n ou 5n passos: ambos são O(n). O que interessa é o comportamento quando n fica muito grande."
-->

---

# 🧭 Big O no dia a dia: analogias

<div class="cards c2 bigo">
  <div class="card"><b>O(1) · Constante</b><span class="ico">🔑</span>Abrir o <strong>armário de número 42</strong>: você vai direto nele, existam 50 ou 5.000 armários.<span class="js">JS: <code>arr[42]</code></span></div>
  <div class="card"><b>O(log n) · Logarítmica</b><span class="ico">📖</span>Procurar uma palavra no <strong>dicionário</strong>: abre no meio e descarta metade a cada passo.<span class="js">JS: busca binária em array ordenado</span></div>
  <div class="card"><b>O(n) · Linear</b><span class="ico">🎟️</span>Conferir o <strong>ingresso de cada pessoa</strong> da fila: dobrou a fila, dobrou o tempo.<span class="js">JS: <code>indexOf</code>, <code>for...of</code></span></div>
  <div class="card"><b>O(n²) · Quadrática</b><span class="ico">🤝</span>Numa festa, <strong>todos cumprimentam todos</strong>: 10 pessoas → ~45 apertos; 1.000 → ~500 mil.<span class="js">JS: laço dentro de laço</span></div>
</div>

<div class="note">💡 Pergunta-chave: <strong>se os dados dobrarem, o que acontece com o tempo?</strong> Nada (O(1)) · +1 passo (O(log n)) · dobra (O(n)) · quadruplica (O(n²)).</div>

<!--
🎤 **Fala do Professor:**

"Vamos trazer o Big O para o mundo real. O(1) é o armário numerado: sabendo o número, vou direto nele, como no acesso por índice. O(log n) é o dicionário: ninguém lê página por página, abrimos no meio e descartamos metade a cada tentativa — por isso, mesmo com um milhão de palavras, bastam cerca de 20 passos. O(n) é o fiscal conferindo ingressos: precisa olhar um por um, e se a fila dobra, o tempo dobra. O(n²) é a festa em que todo mundo cumprimenta todo mundo: com poucas pessoas é tranquilo, mas o número de cumprimentos explode quando a festa cresce. Guardem a pergunta-chave: se os dados dobrarem, o que acontece com o tempo?"
-->

---

<!-- _class: dense -->

# 🧠 Complexidade na prática

```javascript
const ids = [12, 45, 7, 89, 33];

// O(1) → acesso direto: 1 passo, não importa o tamanho do array
const primeiro = ids[0];

// O(n) → busca linear: no pior caso visita TODOS os n elementos
function buscar(lista, alvo) {
  for (let i = 0; i < lista.length; i++)
    if (lista[i] === alvo) return i;   // encontrou: retorna a posição
  return -1;                           // não encontrou
}

// O(n²) → laço dentro de laço: compara cada par de elementos
function temDuplicado(lista) {
  for (let i = 0; i < lista.length; i++)
    for (let j = i + 1; j < lista.length; j++)
      if (lista[i] === lista[j]) return true;
  return false;
}
```

<div class="note">📌 <strong>Conceito:</strong> a mesma estrutura, com operações de custos <strong>O(1)</strong>, <strong>O(n)</strong> e <strong>O(n²)</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vejam os três casos lado a lado. Acessar por índice é instantâneo. Buscar exige percorrer. Verificar duplicados com dois laços cresce de forma quadrática: com 1.000 elementos, são cerca de 500 mil comparações."
-->

---

# 🔄 Comparando soluções

```javascript
const lista = [12, 45, 7, 89, 33, 45];

// Solução 1 — O(n²): dois laços aninhados (slide anterior)
temDuplicado(lista);                    // true

// Solução 2 — O(n): um Set guarda o que já foi visto
function temDuplicadoRapido(lista) {
  const vistos = new Set();             // estrutura com busca O(1) em média
  for (const x of lista) {
    if (vistos.has(x)) return true;     // já apareceu antes → duplicado
    vistos.add(x);                      // registra o elemento
  }
  return false;
}
```

<div class="cols">
<div class="note">⏱️ <strong>Tempo:</strong> de O(n²) para <strong>O(n)</strong></div>
<div class="note">💾 <strong>Espaço:</strong> de O(1) para <strong>O(n)</strong> — o trade-off!</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este é o grande ponto da disciplina: trocar a estrutura de dados muda a complexidade. Usando um Set, caímos de quadrático para linear, ao custo de memória extra. Isso é engenharia: escolher conscientemente."
-->

---

# 🌍 Aplicação em sistemas reais

<div class="cards">
  <div class="card"><span class="ico">🔎</span><b>Busca de produtos</b>Índices e hash evitam percorrer milhões de registros a cada consulta</div>
  <div class="card"><span class="ico">📱</span><b>Feed de redes sociais</b>Filas de prioridade ordenam o que aparece primeiro</div>
  <div class="card"><span class="ico">🚗</span><b>Apps de rota</b>Grafos e algoritmos de caminho mínimo calculam trajetos</div>
</div>

<div class="flow">
  <div class="step">Requisito</div><div class="arrow">➜</div>
  <div class="step">Operações mais frequentes</div><div class="arrow">➜</div>
  <div class="step">Análise Big O</div><div class="arrow">➜</div>
  <div class="step fill">Estrutura escolhida</div>
</div>

<!--
🎤 **Fala do Professor:**

"No mercado, a pergunta é sempre: qual operação o meu sistema faz mais vezes? Se é busca, preciso de busca rápida. Se é inserção no início, um array talvez não seja a melhor escolha. A análise de complexidade orienta essa decisão."
-->

---

# 🧾 Síntese dos conceitos

<div class="cols">
<div>

- **Estrutura de dados** = dados + organização + operações
- **Dado** vira **informação** quando organizado e interpretado
- Tipos **primitivos** e **compostos**
- Estruturas **estáticas** × **dinâmicas**

</div>
<div>

- Operações: **inserir, remover, acessar, buscar, percorrer**
- Eficiência medida em **tempo** e **espaço**
- **Big O** descreve o crescimento do custo
- A escolha da estrutura **impacta o software**

</div>
</div>

<div class="callout">🧭 Não existe estrutura "melhor": existe a estrutura <strong>mais adequada ao problema</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vamos recapitular. Se vocês saírem daqui lembrando da frase em destaque, a aula valeu: não existe a melhor estrutura, existe a mais adequada ao problema."
-->

---

# 📝 Reflexão

<div class="cols-60">
<div>

```javascript
// Desafio: complete as funções e informe o Big O de cada uma
const notas = [7.5, 9.0, 6.0, 8.5, 5.0];

function maiorNota(lista) { /* percorra e retorne a maior */ }
function contarAprovados(lista, media) { /* conte >= media */ }
function removerPrimeira(lista) { /* qual o custo de shift()? */ }
```

</div>
<div>

### 💬 Reflita
1. Que estrutura você usaria para um **histórico de navegação**? Por quê?
2. Em um sistema com **milhões de usuários**, por que O(n²) é um risco?
3. Cite uma situação em que vale **gastar memória** para ganhar tempo.

</div>
</div>


<!--
🎤 **Fala do Professor:**

"Para fixar, implementem essas três funções e anotem o Big O de cada uma. Depois respondam às perguntas de reflexão. Na próxima aula vamos aprofundar em vetores e listas."
-->
