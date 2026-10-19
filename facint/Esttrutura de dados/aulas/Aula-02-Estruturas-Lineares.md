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

  /* Pilha vertical */
  .stack-vis { display: flex; flex-direction: column-reverse; align-items: center; gap: 0; margin: 0.5em 0; }
  .stack-vis .s-item {
    width: 260px; text-align: center; padding: 12px 0;
    border: 2px solid var(--primary); background: #fff; color: var(--primary);
    font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.78em;
  }
  .stack-vis .s-item + .s-item { border-bottom: none; }
  .stack-vis .s-item.top { background: var(--primary); color: #fff; }
  .stack-vis .s-label { font-size: 0.65em; color: var(--muted); margin-top: 4px; }

  /* Fila horizontal */
  .queue-vis { display: flex; align-items: center; gap: 0; margin: 0.5em 0; }
  .queue-vis .q-item {
    text-align: center; padding: 14px 20px;
    border: 2px solid var(--primary); background: #fff; color: var(--primary);
    font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.78em;
  }
  .queue-vis .q-item + .q-item { border-left: none; }
  .queue-vis .q-item.out { background: var(--primary); color: #fff; }
  .queue-vis .q-label { font-size: 0.65em; color: var(--muted); margin: 0 8px; }
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: '' -->

<span class="tag">Engenharia de Software </span>

# Estruturas Lineares

<div class="line"></div>

## Organização e Manipulação de Estruturas de Dados

Arrays · Listas Encadeadas · Pilhas · Filas · LIFO · FIFO

<!--
🎤 **Fala do Professor:**

"Sejam bem-vindos à segunda aula de Organização e Manipulação de Estruturas de Dados. Na aula passada, entendemos o que são estruturas de dados e como medir eficiência com Big O. Hoje vamos mergulhar nas estruturas lineares: arrays, listas encadeadas, pilhas e filas. São as estruturas mais utilizadas no dia a dia de um engenheiro de software."
-->

---

# 🎯 Objetivos de aprendizagem

<div class="cards">
  <div class="card"><span class="ico">🧱</span><b>Compreender</b>o conceito de estrutura linear e suas características</div>
  <div class="card"><span class="ico">📦</span><b>Dominar</b>arrays: índices, acesso, inserção, remoção e custos</div>
  <div class="card"><span class="ico">🔗</span><b>Entender</b>listas encadeadas: nós, referências e operações</div>
  <div class="card"><span class="ico">📚</span><b>Aplicar</b>o princípio LIFO em pilhas e o princípio FIFO em filas</div>
  <div class="card"><span class="ico">💻</span><b>Implementar</b>estruturas lineares em JavaScript</div>
  <div class="card"><span class="ico">⚖️</span><b>Comparar</b>estruturas e escolher a mais adequada para cada situação</div>
</div>

<!--
🎤 **Fala do Professor:**

"Ao final desta aula, vocês devem ser capazes de explicar o que é uma estrutura linear, manipular arrays e listas, implementar pilhas e filas em JavaScript e, o mais importante, saber qual estrutura usar em cada situação."
-->

---

# 🧱 O que são estruturas lineares?

<div class="cols-60">
<div>

Uma **estrutura linear** organiza os elementos em uma **sequência**, onde cada elemento possui:

- Um **antecessor** (exceto o primeiro)
- Um **sucessor** (exceto o último)

Os elementos são acessados de forma **ordenada**, um após o outro.

</div>
<div>

<div class="card"><b>Analogia</b>Uma fila de banco: cada pessoa está atrás de outra, em uma única direção. Não é possível "pular" para o meio sem passar pelas anteriores.</div>

</div>
</div>

<div class="callout">Estrutura linear = elementos organizados em <strong>sequência única</strong>, com <strong>ordem definida</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Estrutura linear é aquela onde os elementos ficam um atrás do outro, como uma fila. Pensem numa prateleira: o primeiro livro, o segundo, o terceiro — sempre em sequência. Arrays, listas, pilhas e filas são todos exemplos de estruturas lineares."
-->

---

# 🔄 Lineares × Não Lineares

<div class="cols">
<div>

### 📏 Estruturas Lineares

- Elementos em **sequência**
- Cada elemento tem **um** antecessor e **um** sucessor
- Exemplos: **array, lista, pilha, fila**

<div class="nodes">
  <div class="node"><span>A</span><span>→</span></div>
  <div class="node"><span>B</span><span>→</span></div>
  <div class="node"><span>C</span><span>→</span></div>
  <div class="node"><span>D</span><span>∅</span></div>
</div>

</div>
<div>

### 🌳 Estruturas Não Lineares

- Elementos em **hierarquia** ou **rede**
- Um elemento pode ter **vários** sucessores
- Exemplos: **árvore, grafo**

```
        A
       / \
      B   C
     / \   \
    D   E   F
```

</div>
</div>

<div class="note">💡 Nesta aula focamos nas <strong>estruturas lineares</strong>. Árvores e grafos serão abordados nas aulas seguintes.</div>

<!--
🎤 **Fala do Professor:**

"Vejam a diferença: numa estrutura linear, cada elemento tem no máximo um vizinho antes e um depois. Numa árvore, um elemento pode ter vários filhos. Hoje nosso foco é 100% nas lineares."
-->

---

# 📦 Arrays e Vetores

<div class="cols-60">
<div>

Um **array** é uma estrutura linear que armazena elementos em **posições contíguas** de memória.

- Tamanho **fixo** (em linguagens como C) ou **dinâmico** (em JavaScript)
- Acesso **direto** por índice
- Índice começa em **0**
- Elementos do **mesmo tipo** (em linguagens estáticas)

</div>
<div>

<div class="mem">
  <div class="cell"><div class="val">10</div><div class="idx">[0]</div></div>
  <div class="cell"><div class="val">20</div><div class="idx">[1]</div></div>
  <div class="cell"><div class="val">30</div><div class="idx">[2]</div></div>
  <div class="cell"><div class="val">40</div><div class="idx">[3]</div></div>
  <div class="cell"><div class="val">50</div><div class="idx">[4]</div></div>
</div>

</div>
</div>

<div class="callout">A grande vantagem do array: acesso <strong>O(1)</strong> a qualquer elemento pelo índice.</div>

<!--
🎤 **Fala do Professor:**

"O array é a estrutura linear mais fundamental. Ele guarda elementos em posições vizinhas na memória, numeradas a partir do zero. Se sei o índice, vou direto ao elemento — é como saber o número da estante na biblioteca."
-->

---

# 📍 Índices e acesso aos elementos

```javascript
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

// Acesso direto por índice — O(1)
console.log(frutas[0]);      // "Maçã"
console.log(frutas[3]);      // "Uva"
console.log(frutas.length);  // 5

// Primeiro e último elemento
const primeiro = frutas[0];
const ultimo  = frutas[frutas.length - 1];  // "Manga"

// Tentativa de acessar índice inexistente
console.log(frutas[10]);     // undefined (não gera erro)
```

<div class="note">📌 <strong>Conceito:</strong> o acesso por índice é <strong>instantâneo</strong> — o computador calcula o endereço diretamente: <code>endereço base + índice × tamanho</code>.</div>

<!--
🎤 **Fala do Professor:**

"Reparem que acessar frutas[3] leva o mesmo tempo que acessar frutas[0]. Não importa a posição: o cálculo do endereço é direto. Por isso o Big O é O(1). E quando o índice não existe, o JavaScript retorna undefined em vez de travar."
-->

---

# 🛠️ Criação e manipulação de arrays

```javascript
const notas = [7.5, 8.0, 6.0, 9.5];

// push() e pop() — FINAL → O(1)
notas.push(10.0);              // [7.5, 8.0, 6.0, 9.5, 10.0]
notas.pop();                   // remove 10.0

// unshift() e shift() — INÍCIO → O(n)
notas.unshift(5.0);            // [5.0, 7.5, 8.0, 6.0, 9.5]
notas.shift();                 // remove 5.0

// splice() — POSIÇÃO ESPECÍFICA → O(n)
notas.splice(1, 0, 7.0);       // insere 7.0 na posição 1
notas.splice(2, 1);            // remove 1 elemento na posição 2
console.log(notas);            // [7.5, 7.0, 6.0, 9.5]
```

<div class="note">⚠️ <code>push</code> e <code>pop</code> = rápidos <strong>O(1)</strong>. <code>unshift</code>, <code>shift</code> e <code>splice</code> = deslocam elementos → <strong>O(n)</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Este é o slide mais importante sobre arrays. Gravem: push e pop são O(1), trabalham no final. Mas unshift, shift e splice mexem nas posições dos outros elementos, então são O(n). Em arrays grandes, isso faz diferença real."
-->

---

# 🔍 Busca e percurso em arrays

```javascript
const cidades = ["Curitiba", "Londrina", "Maringá", "Cascavel", "Foz"];

// indexOf() — busca linear — O(n)
const pos = cidades.indexOf("Maringá");    // 2
const existe = cidades.includes("Foz");     // true

// find() — busca com condição — O(n)
const grande = cidades.find(c => c.length > 7);

// Percurso completo — O(n)
for (const cidade of cidades) {
  console.log(cidade);
}
```

<div class="note">📌 Busca em array é <strong>O(n)</strong>: no pior caso, é preciso visitar <strong>todos</strong> os elementos.</div>

<!--
🎤 **Fala do Professor:**

"Busca linear é o jeito mais simples de procurar: olha um por um até encontrar. Com 5 cidades, é instantâneo. Com 5 milhões de registros, isso vira um problema. Por isso precisamos conhecer outras estruturas ao longo da disciplina."
-->

---

<!-- _class: dense -->

# ⚡ Custos das operações em arrays

| Operação | Método JS | Big O | Observação |
|---|---|---|---|
| Acessar por índice | `arr[i]` | **O(1)** | Cálculo direto de endereço |
| Inserir no final | `push()` | **O(1)** | Amortizado |
| Remover do final | `pop()` | **O(1)** | Sem deslocamento |
| Inserir no início | `unshift()` | **O(n)** | Desloca todos os elementos |
| Remover do início | `shift()` | **O(n)** | Desloca todos os elementos |
| Inserir/remover no meio | `splice()` | **O(n)** | Desloca elementos à direita |
| Buscar por valor | `indexOf()` | **O(n)** | Percorre até encontrar |
| Percurso completo | `for...of` | **O(n)** | Visita cada elemento |

<div class="callout">🔑 <strong>Regra:</strong> operações no <strong>final</strong> do array são rápidas. Operações no <strong>início ou meio</strong> exigem deslocamento → custo linear.</div>

<!--
🎤 **Fala do Professor:**

"Esta tabela é a síntese do array. Guardem a regra: final é rápido, início e meio são lentos. Quando o sistema precisa ficar inserindo e removendo no início, o array não é a melhor escolha — e é aí que entram as listas encadeadas."
-->

---

# ❓ O problema do array

<div class="cols">
<div>

### Inserir "X" na posição 2 de um array:

<div class="mem">
  <div class="cell"><div class="val">10</div><div class="idx">[0]</div></div>
  <div class="cell"><div class="val">20</div><div class="idx">[1]</div></div>
  <div class="cell"><div class="val" style="border-color:#999; color:#999;">30</div><div class="idx">[2]</div></div>
  <div class="cell"><div class="val" style="border-color:#999; color:#999;">40</div><div class="idx">[3]</div></div>
</div>

⚠️ É preciso **deslocar** 30 e 40 para abrir espaço → **O(n)**

</div>
<div>

### Inserir "X" na posição 2 de uma lista:

<div class="nodes">
  <div class="node"><span>10</span><span>→</span></div>
  <div class="node"><span>X</span><span>→</span></div>
  <div class="node"><span>20</span><span>→</span></div>
  <div class="node"><span>30</span><span>∅</span></div>
</div>

✅ Basta **religar** os ponteiros → **O(1)**

</div>
</div>

<div class="callout">A lista encadeada nasceu para resolver o <strong>problema do deslocamento</strong> em arrays.</div>

<!--
🎤 **Fala do Professor:**

"Vejam o problema: no array, para inserir na posição 2, preciso empurrar o 30 e o 40 uma casa para a direita. Se o array tiver um milhão de elementos, preciso deslocar quase um milhão de itens. Na lista encadeada, basta ajustar dois ponteiros e pronto. É por isso que as listas existem."
-->

---

# 🔗 Introdução às listas encadeadas

<div class="cols-60">
<div>

Uma **lista encadeada** é uma estrutura linear onde cada elemento (chamado **nó**) contém:

- O **valor** armazenado
- Uma **referência** (ponteiro) para o próximo nó

Os nós **não precisam estar contíguos** na memória — podem estar espalhados, mas estão **conectados** por ponteiros.

<div class="note">💡 <strong>Analogia:</strong> como uma caça ao tesouro — cada pista te diz onde está a próxima. Não há caminho direto, só a sequência.</div>

</div>
<div>

<div class="nodes">
  <div class="node"><span>10</span><span>→</span></div>
  <div class="node"><span>20</span><span>→</span></div>
  <div class="node"><span>30</span><span>→</span></div>
  <div class="node"><span>∅</span><span></span></div>
</div>

<div class="note">Cada nó aponta para o <strong>próximo</strong>. O último aponta para <code>null</code> (∅), indicando o <strong>fim</strong> da lista.</div>

</div>
</div>

<div class="callout">Diferente do array: a lista <strong>não tem índice</strong>. Para acessar um elemento, é preciso <strong>percorrer</strong> a partir do início.</div>

<!--
🎤 **Fala do Professor:**

"A lista encadeada funciona como uma caça ao tesouro: cada nó te diz onde está o próximo. Não existe índice — para chegar ao terceiro elemento, preciso passar pelo primeiro e pelo segundo. A vantagem? Inserir e remover são operações rápidas se eu já estiver na posição certa."
-->

---

# 🔗 Array × Lista — Diferença fundamental

<div class="cols">
<div>

### Array — Acesso por índice

<div class="mem">
  <div class="cell"><div class="val">10</div><div class="idx">[0]</div></div>
  <div class="cell"><div class="val">20</div><div class="idx">[1]</div></div>
  <div class="cell"><div class="val">30</div><div class="idx">[2]</div></div>
</div>

- Memória **contígua** (lado a lado)
- Acesso **direto** por índice → O(1)
- Inserir no meio → **desloca** → O(n)

</div>
<div>

### Lista — Acesso por referência

<div class="nodes">
  <div class="node"><span>10</span><span>→</span></div>
  <div class="node"><span>20</span><span>→</span></div>
  <div class="node"><span>30</span><span>∅</span></div>
</div>

- Memória **dispersa** (espalhada)
- Acesso **sequencial** → O(n)
- Inserir no meio → **religa ponteiros** → O(1)*

</div>
</div>

<div class="callout">Array é como uma <strong>prateleira numerada</strong>. Lista é como uma <strong>corrente</strong>: cada elo aponta para o próximo.</div>

<!--
🎤 **Fala do Professor:**

"A diferença central é a memória. O array ocupa posições seguidas — por isso o acesso é direto. A lista pode ter nós espalhados pela memória, mas cada um sabe onde está o próximo. Array é prateleira: vou direto na estante 3. Lista é corrente: preciso seguir elo por elo."
-->

---

# 🧩 Anatomia de um nó

<div class="cols">
<div>

### Representação visual

<div class="nodes">
  <div class="node"><span>A</span><span>→</span></div>
  <div class="node"><span>B</span><span>→</span></div>
  <div class="node"><span>C</span><span>∅</span></div>
</div>

- **head**: referência ao primeiro nó ( porta de entrada)
- Cada nó guarda: **valor** + **ponteiro** (próximo)
- Último nó aponta para **null** (fim da lista)

<div class="note">💡 Cada nó é uma <strong>caixinha</strong> com dois campos: o dado e o endereço da próxima caixinha.</div>

</div>
<div>

### Implementação em JavaScript

```javascript
// Definição de um nó
class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

// Criando os nós
const a = new No("A");
const b = new No("B");
const c = new No("C");

// Conectando os nós
a.proximo = b;
b.proximo = c;
// c.proximo já é null

// A lista começa em 'a' (head)
```

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Cada nó é um objeto que guarda duas coisas: o valor e o endereço do próximo nó. Quando conectamos os nós, formamos a cadeia. O último nó aponta para null porque não existe próximo. A variável 'head' é a entrada da lista — sem ela, não sabemos onde a lista começa."
-->

---

# 🏗️ Construindo uma lista passo a passo

```javascript
class No {
  constructor(valor) {
    this.valor = valor;     // O dado armazenado
    this.proximo = null;    // Ponteiro para o próximo nó
  }
}

// Passo 1: Criar nós isolados
const a = new No("Ana");     // {valor: "Ana", proximo: null}
const b = new No("Bruno");   // {valor: "Bruno", proximo: null}
const c = new No("Carlos");  // {valor: "Carlos", proximo: null}

// Passo 2: Conectar os nós
a.proximo = b;   // Ana → Bruno
b.proximo = c;   // Bruno → Carlos
// c.proximo continua null (fim da lista)

// Passo 3: Definir o head
const head = a;  // A lista começa em Ana
```

<div class="note">📌 Antes de conectar: 3 nós <strong>isolados</strong>. Depois: uma <strong>cadeia</strong> — <code>head → Ana → Bruno → Carlos → null</code></div>

<!--
🎤 **Fala do Professor:**

"Vamos construir a lista passo a passo. Primeiro, criamos três nós isolados — cada um com valor e proximo null. Depois, conectamos: Ana aponta para Bruno, Bruno aponta para Carlos. Carlos continua apontando para null porque é o último. Por fim, a variável head aponta para Ana, que é a porta de entrada da lista."
-->

---

# ➕ Inserção em lista encadeada

<div class="cols-60">
<div>

### Inserir no início — O(1)

```javascript
const novo = new No("Diana");
novo.proximo = head;  // Diana aponta para Ana
head = novo;          // head agora é Diana
```

**Antes:** `head → [Ana] → [Bruno] → [Carlos] → ∅`

**Depois:** `head → [Diana] → [Ana] → [Bruno] → [Carlos] → ∅`

</div>
<div>

### Inserir no meio — O(1)*

```javascript
// Inserir "Eva" depois de "Ana"
const anterior = buscarNo("Ana"); // O(n) para encontrar
const novo = new No("Eva");

novo.proximo = anterior.proximo;  // Eva aponta para Bruno
anterior.proximo = novo;          // Ana aponta para Eva
```

**Antes:** `… → [Ana] → [Bruno] → …`

**Depois:** `… → [Ana] → [Eva] → [Bruno] → …`

<div class="note">⚠️ A inserção em si é <strong>O(1)</strong>, mas <strong>encontrar</strong> a posição é <strong>O(n)</strong>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"A grande mágica da lista encadeada: para inserir, basta ajustar os ponteiros. Não preciso deslocar nada. No array, inserir no meio empurra todos os elementos. Na lista, eu apenas religo os nós. Mas atenção: primeiro preciso encontrar a posição, e isso é O(n)."
-->

---

# ➖ Remoção em lista encadeada

<div class="cols-60">
<div>

### Remover do início — O(1)

```javascript
head = head.proximo; // Ana sai, Bruno vira head
```

**Antes:** `head → [Ana] → [Bruno] → [Carlos] → ∅`

**Depois:** `head → [Bruno] → [Carlos] → ∅`

</div>
<div>

### Remover do meio — O(n)

```javascript
// Encontrar o nó anterior ao que será removido
let atual = head;
while (atual.proximo.valor !== "Bruno") {
  atual = atual.proximo;
}
// Pular o nó "Bruno"
atual.proximo = atual.proximo.proximo;
```

**Antes:** `… → [Ana] → [Bruno] → [Carlos] → …`

**Depois:** `… → [Ana] → [Carlos] → …`

</div>
</div>

<div class="callout">Remoção em lista: <strong>reajustar ponteiros</strong>, sem deslocar elementos. Mas é preciso <strong>percorrer</strong> até o nó anterior.</div>

<!--
🎤 **Fala do Professor:**

"Remover é o inverso de inserir: faço o nó anterior pular o nó que quero remover. Não há deslocamento, mas preciso encontrar o nó anterior, o que exige percurso. Reparem como o nó B simplesmente deixa de ser apontado — ele fica 'solto' na memória e o coletor de lixo do JavaScript cuida do resto."
-->

---

# 🔁 Percurso de uma lista encadeada

```javascript
// Função para percorrer e exibir todos os elementos
function percorrerLista(head) {
  let atual = head;            // Começa pelo primeiro nó
  let posicao = 0;

  while (atual !== null) {     // Enquanto não chegar ao fim
    console.log(`${posicao}: ${atual.valor}`);
    atual = atual.proximo;     // Avança para o próximo nó
    posicao++;
  }
}

// Com a lista: head → Ana → Bruno → Carlos → null
percorrerLista(head);
// Saída:
// 0: Ana
// 1: Bruno
// 2: Carlos
```

<div class="note">📌 <strong>Percurso</strong> é <strong>O(n)</strong>: é preciso visitar cada nó, um a um. Não existe acesso direto como no array.</div>

<!--
🎤 **Fala do Professor:**

"Percorrer uma lista é como seguir um fio: começo no primeiro, vou seguindo as referências até chegar ao null. Não tem como pular etapas. Se a lista tem 100 elementos, preciso dar 100 passos. Compare com o array: lá eu vou direto ao índice 99 em O(1)."
-->

---

# 🎯 Quando usar uma lista encadeada?

<div class="cards c2">
  <div class="card"><span class="ico">✅</span><b>Use lista quando:</b>Inserções e remoções <strong>frequentes</strong> no início ou meio. O tamanho dos dados <strong>muda muito</strong>. Não precisa acessar por <strong>índice</strong>.</div>
  <div class="card"><span class="ico">❌</span><b>Use array quando:</b>Precisa de acesso <strong>direto</strong> por índice. Operações no <strong>final</strong> (push/pop). Tamanho relativamente <strong>estável</strong>.</div>
</div>

### 🌍 Onde listas encadeadas são usadas?

<div class="cards c4">
  <div class="card"><span class="ico">🎵</span><b>Playlists</b>Músicas reordenadas, adicionadas e removidas dinamicamente</div>
  <div class="card"><span class="ico">↩️</span><b>Undo/Redo</b>Cada ação aponta para a anterior → navegar pelo histórico</div>
  <div class="card"><span class="ico">🗂️</span><b>Sistemas de arquivos</b>Pastas e arquivos encadeados em disco</div>
  <div class="card"><span class="ico">⚙️</span><b>Filas e pilhas</b>Implementação interna de filas e pilhas eficientes</div>
</div>

<div class="callout">💡 <strong>Regra:</strong> se você precisa <strong>inserir/remover no meio</strong> com frequência, a lista vence o array.</div>

<!--
🎤 **Fala do Professor:**

"A pergunta-chave é: o que meu sistema faz mais vezes? Se é busca por índice, use array. Se são inserções e remoções no meio, use lista. Playlists, histórico de undo/redo, implementação de filas e pilhas eficientes — tudo isso usa listas encadeadas nos bastidores."
-->

---

# 📊 Pilhas — Stack

<div class="cols">
<div>

Uma **pilha** é uma estrutura linear que funciona como uma **pilha de pratos**.

O último a entrar é o primeiro a sair — **LIFO** (*Last In, First Out*).

### Operações principais

| Operação | Descrição |
|---|---|
| `push()` | Empilha (insere no **topo**) |
| `pop()` | Desempilha (remove do **topo**) |
| `peek()`* | Consulta o **topo** sem remover |

</div>
<div>

<div class="stack-vis">
  <div class="s-item top">Manga ← Topo</div>
  <div class="s-item">Banana</div>
  <div class="s-item">Maçã</div>
</div>
<div class="s-label">← Base (primeiro a entrar)</div>

</div>
</div>

<div class="note">💡 <code>peek()</code> é um conceito do TAD Pilha — não existe nativamente no JS. Na prática: <code>pilha[pilha.length - 1]</code>.</div>

<div class="callout">LIFO: o <strong>último</strong> a entrar é o <strong>primeiro</strong> a sair. Só se acessa o <strong>topo</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Pilha é uma estrutura onde tudo acontece no topo. Pensem numa pilha de pratos: não dá pra tirar o prato de baixo sem remover os de cima. O último prato que colocamos é o primeiro que tiramos. Por isso LIFO — Last In, First Out."
-->

---

# ⚙️ Operações de uma pilha

<div class="cols">
<div>

```javascript
const pilha = [];

// Push — empilha no topo
pilha.push("Maçã");    // [Maçã]
pilha.push("Banana");  // [Maçã, Banana]
pilha.push("Manga");   // [Maçã, Banana, Manga]

// Pop — desempilha do topo
const topo = pilha.pop(); // "Manga"

// Peek — consulta o topo sem remover
// (peek() é do conceito de Pilha; em JS usamos o último índice)
console.log(pilha[pilha.length - 1]); // "Banana"
```

</div>
<div>

### Estado da pilha

**Após 3× push:**
<div class="nodes"><div class="node"><span>Manga</span><span>🔝</span></div></div>
<div class="nodes"><div class="node"><span>Banana</span><span></span></div></div>
<div class="nodes"><div class="node"><span>Maçã</span><span></span></div></div>

**Após pop():**
<div class="nodes"><div class="node"><span>Banana</span><span>🔝</span></div></div>
<div class="nodes"><div class="node"><span>Maçã</span><span></span></div></div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Push coloca no topo, pop tira do topo. E o peek, que aparece na tabela, é só uma consulta: olho o topo sem tirar nada. No JavaScript não existe peek nativo, então usamos pilha[pilha.length - 1]. Olhem como a pilha muda: cada operação só afeta o topo."
-->

---

# 💻 Pilha em JavaScript — exemplo comentado

```javascript
// Histórico de ações de um editor (Ctrl+Z)
const historico = [];

historico.push("Digitou 'Olá'");
historico.push("Negritou texto");
historico.push("Inseriu imagem");

// Ctrl+Z desfaz a ÚLTIMA ação (LIFO)
const acao = historico.pop();
console.log("Desfez:", acao); // "Inseriu imagem"

const acao2 = historico.pop();
console.log("Desfez:", acao2); // "Negritou texto"
```

<div class="note">📌 "Desfazer" de editores é uma <strong>pilha</strong>: última ação feita = primeira a ser desfeita → <strong>LIFO</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Este é um exemplo clássico de pilha no mundo real. Quando vocês apertam Ctrl+Z no VS Code ou no Word, o programa desfaz a última ação primeiro. É literalmente uma pilha: cada ação é empilhada, e ao desfazer, desempilhamos a mais recente."
-->

---

# 📊 Filas — Queue

<div class="cols">
<div>

Uma **fila** é uma estrutura linear que funciona como uma **fila de espera**.

O primeiro a entrar é o primeiro a sair — **FIFO** (*First In, First Out*).

### Operações principais

| Operação | Descrição |
|---|---|
| `enqueue()` | Enfileira (insere no **final**) |
| `dequeue()` | Desenfileira (remove do **início**) |
| `front()` | Consulta o **primeiro** sem remover |

</div>
<div>

<div class="queue-vis">
  <div class="q-label">← Entrada</div>
  <div class="q-item">Ana</div>
  <div class="q-item">Carlos</div>
  <div class="q-item">Mariana</div>
  <div class="q-item out">João</div>
  <div class="q-label">Saída →</div>
</div>

</div>
</div>

<div class="callout">FIFO: o <strong>primeiro</strong> a entrar é o <strong>primeiro</strong> a sair. Entrada pelo <strong>final</strong>, saída pelo <strong>início</strong>.</div>

<!--
🎤 **Fala do Professor:**

"A fila é o oposto da pilha. Pensem na fila do banco: quem chega primeiro é atendido primeiro. FIFO — First In, First Out. Entra pelo final, sai pelo início. Ninguém pula a fila."
-->

---

# ⚙️ Operações de uma fila

<div class="cols">
<div>

```javascript
const fila = [];

// Enqueue — insere no final
fila.push("Ana");       // [Ana]
fila.push("Carlos");    // [Ana, Carlos]

// Dequeue — remove do início
const atendido = fila.shift(); // "Ana"

// Front — consulta o primeiro
console.log(fila[0]); // "Carlos"
```

</div>
<div>

### Estado da fila

**Após enqueue("Ana") e enqueue("Carlos"):**
<div class="queue-vis">
  <div class="q-item">Ana</div>
  <div class="q-item out">Carlos</div>
</div>

**Após dequeue() → remove "Ana":**
<div class="queue-vis">
  <div class="q-item out">Carlos</div>
</div>

<div class="note">⚠️ <code>shift()</code> em array é <strong>O(n)</strong>. Para filas eficientes, use listas com ponteiros.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Enqueue é push — insere no final. Dequeue é shift — remove do início. Reparem que shift é O(n) porque desloca os elementos. Para filas eficientes de verdade, usamos listas ou estruturas dedicadas. Mas para entender o conceito, esse modelo com array funciona bem."
-->

---

# 💻 Fila em JavaScript — exemplo comentado

```javascript
// Fila de impressão de documentos
const filaImpressao = [];

filaImpressao.push("Relatório.pdf");
filaImpressao.push("Contrato.docx");
filaImpressao.push("Apresentação.pptx");

// Primeiro a entrar é o primeiro a sair (FIFO)
const impresso = filaImpressao.shift();
console.log("Imprimiu:", impresso); // "Relatório.pdf"

const impresso2 = filaImpressao.shift();
console.log("Imprimiu:", impresso2); // "Contrato.docx"

console.log("Restante:", filaImpressao);
// ["Apresentação.pptx"]
```

<div class="note">📌 Impressão, atendimento, emails — tudo que exige <strong>ordem de chegada</strong> usa <strong>FIFO</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Imprimantes usam fila: o primeiro documento enviado é o primeiro a sair. Se mandarmos 3 arquivos, eles serão impressos na ordem de envio. Isso é FIFO. O mesmo vale para filas de atendimento em sistemas, processamento de pedidos e muito mais."
-->

---

# 📊 LIFO × FIFO — Comparação visual

<div class="cols">
<div>

### 📚 Pilha (LIFO)

<div class="stack-vis">
  <div class="s-item top">Último → Sai primeiro</div>
  <div class="s-item">…</div>
  <div class="s-item">Primeiro → Sai por último</div>
</div>

- Acesso apenas ao **topo**
- `push()` / `pop()` → **O(1)**
- Exemplos: desfazer, chamada de funções, histórico

</div>
<div>

### 🚶 Fila (FIFO)

<div class="queue-vis">
  <div class="q-label">Entra →</div>
  <div class="q-item">Primeiro</div>
  <div class="q-item">…</div>
  <div class="q-item out">Último</div>
  <div class="q-label">→ Sai</div>
</div>

- Acesso ao **primeiro** e ao **último**
- `enqueue()` / `dequeue()`
- Exemplos: fila de espera, impressão, tarefas

</div>
</div>

<div class="callout">Pilha: <strong>vertical</strong>, último a entrar sai primeiro. Fila: <strong>horizontal</strong>, primeiro a entrar sai primeiro.</div>

<!--
🎤 **Fala do Professor:**

"Lado a lado, fica claro: a pilha é como empilhar pratos — só mexo no de cima. A fila é como uma fila de banco — o primeiro que chega é o primeiro que sai. São comportamentos opostos e cada um serve para situações diferentes."
-->

---

# ⚖️ Comparação entre as estruturas

| Característica | Array | Lista Encadeada | Pilha | Fila |
|---|---|---|---|---|
| **Organização** | Contígua | Nós ligados | LIFO | FIFO |
| **Acesso por índice** | ✅ O(1) | ❌ O(n) | ❌ Só topo | ❌ Só frente |
| **Inserir no início** | O(n) | **O(1)** | — | — |
| **Inserir no final** | **O(1)** | O(n)* | **O(1)** | **O(1)** |
| **Remover do início** | O(n) | **O(1)** | — | **O(1)** |
| **Remover do final** | **O(1)** | O(n) | **O(1)** | — |
| **Uso de memória** | Compacto | +ponteiro por nó | Variável | Variável |

<div class="note">💡 * Inserir no final de uma lista simplesmente encadeada é O(n) sem cauda. Com referência à cauda, torna-se O(1).</div>

<!--
🎤 **Fala do Professor:**

"Esta tabela é a síntese da aula. Não existe estrutura perfeita — cada uma tem pontos fortes e fracos. O array é ótimo para acesso por índice, mas lento para inserir no início. A lista é o inverso. Pilha e fila são restrições sobre listas: uma só mexe no topo, a outra só mexe nas pontas."
-->

---

# 🌍 Aplicações em Engenharia de Software

<div class="cards c4">
  <div class="card"><span class="ico">↩️</span><b>Desfazer (Ctrl+Z)</b><strong>Pilha</strong> — histórico de ações</div>
  <div class="card"><span class="ico">📞</span><b>Atendimento</b><strong>Fila</strong> — ordem de chegada</div>
  <div class="card"><span class="ico">🖨️</span><b>Impressão</b><strong>Fila</strong> — documentos em espera</div>
  <div class="card"><span class="ico">🔙</span><b>Voltar (navegador)</b><strong>Pilha</strong> — páginas visitadas</div>
  <div class="card"><span class="ico">🛒</span><b>Carrinho de compras</b><strong>Array/Lista</strong> — itens dinâmicos</div>
  <div class="card"><span class="ico">⚙️</span><b>Chamada de funções</b><strong>Pilha</strong> — call stack do JS</div>
  <div class="card"><span class="ico">📧</span><b>Fila de emails</b><strong>Fila</strong> — envio em ordem</div>
  <div class="card"><span class="ico">🎮</span><b>Buffer de teclas</b><strong>Fila</strong> — entradas sequenciais</div>
</div>

<div class="callout">Toda aplicação real usa <strong>combinações</strong> de estruturas lineares. A escolha depende do <strong>comportamento</strong> que o sistema exige.</div>

<!--
🎤 **Fala do Professor:**

"Vocês já usam essas estruturas todos os dias sem perceber. Quando apertam Ctrl+Z, é uma pilha. Quando o sistema processa pedidos na ordem de chegada, é uma fila. Quando guardam itens num carrinho, é um array ou lista. Identificar qual estrutura se encaixa em cada cenário é a habilidade central desta disciplina."
-->

---

# 🧾 Síntese dos principais conceitos

<div class="cols">
<div>

- **Estrutura linear**: elementos em **sequência**
- **Array**: acesso **O(1)** por índice, inserção no início é **O(n)**
- **Lista encadeada**: inserção/remoção **O(1)** (se na posição), acesso **O(n)**
- **Pilha (LIFO)**: último a entrar, primeiro a sair

</div>
<div>

- **Fila (FIFO)**: primeiro a entrar, primeiro a sair
- Arrays são **contíguos**, listas usam **ponteiros**
- A escolha da estrutura depende das **operações mais frequentes**
- JavaScript: arrays são **dinâmicos** e flexíveis

</div>
</div>

<div class="callout">🧭 Não existe estrutura "melhor": existe a estrutura <strong>mais adequada ao problema</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Encerramos com a mesma frase da aula anterior: não existe a melhor estrutura, existe a mais adequada. Se preciso de acesso rápido por índice, array. Se preciso de inserções e remoções frequentes, lista. Se preciso de LIFO, pilha. Se preciso de FIFO, fila. A decisão é de engenharia."
-->

---

# 📝 Atividade — Pilha e Fila

```javascript
// PILHA — Analise e responda:
const pilha = [];
pilha.push("A");  pilha.push("B");  pilha.push("C");
const x = pilha.pop();     // x = ?
pilha.push("D");
const y = pilha.pop();     // y = ?
```

```javascript
// FILA — Analise e responda:
const fila = [];
fila.push("1");  fila.push("2");  fila.push("3");
const a = fila.shift();    // a = ?
fila.push("4");
const b = fila.shift();    // b = ?
```

<div class="note">💡 Execute no console para verificar. Pergunte-se: qual o valor de <strong>x, y, a, b</strong>? O que sobrou em cada estrutura?</div>

<!--
🎤 **Fala do Professor:**

"Rode mentalmente cada linha. Na pilha: push A, B, C. Pop tira C → x = C. Push D. Pop tira D → y = D. Sobrou A e B. Na fila: push 1, 2, 3. Shift tira 1 → a = 1. Push 4. Shift tira 2 → b = 2. Sobrou 3 e 4."
-->

---

# 📝 Atividade — Reflexão

<div class="cards c2">
  <div class="card"><span class="ico">↩️</span><b>Desfazer (Ctrl+Z)</b>Qual estrutura usaria? Justifique com <strong>LIFO</strong> ou <strong>FIFO</strong>.</div>
  <div class="card"><span class="ico">🏦</span><b>Atendimento bancário</b>Qual estrutura é mais adequada? Por quê?</div>
  <div class="card"><span class="ico">📦</span><b>Inserção no início</b>Array <code>[10, 20, 30]</code> precisa receber <code>5</code> no início. Qual operação e custo?</div>
  <div class="card"><span class="ico">🔗</span><b>Lista × Array</b>Em que situação uma lista encadeada é melhor que um array?</div>
</div>

<div class="callout">🧠 <strong>Dica:</strong> pense em cada cenário antes de responder. Não existe resposta errada quando há <strong>justificativa</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Agora são perguntas abertas. Para o desfazer, é pilha — LIFO. Para o banco, é fila — FIFO. Para inserir no início, use unshift, mas o custo é O(n). E a lista encadeada é melhor quando há muitas inserções e remoções, porque não precisa deslocar elementos."
-->

---

<!-- _class: dense -->

# 📖 Glossário

| Termo | Definição |
|---|---|
| **Estrutura linear** | Estrutura de dados onde os elementos são organizados em sequência, um após o outro |
| **Array (Vetor)** | Estrutura que armazena elementos em posições contíguas de memória, acessíveis por índice |
| **Índice** | Posição numérica de um elemento dentro de um array, iniciando em 0 |
| **Lista encadeada** | Estrutura formada por nós, onde cada nó guarda um valor e a referência para o próximo |
| **Nó (Node)** | Elemento de uma lista encadeada que contém dado + ponteiro para o próximo nó |
| **Head** | Referência ao primeiro nó de uma lista encadeada |
| **Pilha (Stack)** | Estrutura LIFO: o último elemento inserido é o primeiro a ser removido |
| **Fila (Queue)** | Estrutura FIFO: o primeiro elemento inserido é o primeiro a ser removido |
---
<!-- _class: dense -->

# 📖 Glossário
| Termo | Definição |
|---|---|
| **LIFO** | *Last In, First Out* — último a entrar, primeiro a sair |
| **FIFO** | *First In, First Out* — primeiro a entrar, primeiro a sair |
| **Push** | Operação de inserção em uma pilha (adiciona no topo) |
| **Pop** | Operação de remoção em uma pilha (remove do topo) |
| **Peek** | Consulta ao topo de uma pilha sem remover o elemento |
| **Enqueue** | Operação de inserção em uma fila (adiciona no final) |
| **Dequeue** | Operação de remoção em uma fila (remove do início) |
| **Big O** | Notação que descreve o crescimento do custo de um algoritmo no pior caso |