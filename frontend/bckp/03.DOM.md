---
marp: true
theme: default
paginate: true
header: 'Manipulação do DOM com JavaScript'
footer: 'Allan da Silva'
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

# **Manipulação do DOM com JavaScript**

---

# **1. Introdução ao DOM**

- **O que é o DOM?**

  - _DOM_ significa _Document Object Model_.
  - Representa a estrutura de um documento HTML como uma árvore de objetos.
  - Cada elemento HTML é um nó na árvore.

- **Por que é importante?**
  - Permite que o JavaScript interaja e manipule o conteúdo e a estrutura do documento HTML.

---

# **2. Estrutura do DOM**

## **Nós do DOM:**

- _Element Nodes_: Representam tags HTML.
- _Text Nodes_: Contêm o texto dentro das tags.
- _Attribute Nodes_: Contêm os atributos de uma tag.
- _Comment Nodes_: Comentários dentro do HTML.

---

## **Exemplo:**

```html
<div id="content">
  <p>Hello, <strong>world!</strong></p>
</div>
```

- `div`, `p`, e `strong` são _Element Nodes_.
- `"Hello, world!"` é um _Text Node_.
- `id="content"` é um _Attribute Node_.

---

# **3. Selecionando Elementos no DOM**

## **Métodos de Seleção:**

- `getElementById()`
- `getElementsByClassName()`
- `getElementsByTagName()`
- `querySelector()`
- `querySelectorAll()`

---

## **Exemplos de Uso:**

```javascript
const elementById = document.getElementById('content');
const elementsByClass = document.getElementsByClassName('item');
const elementsByTag = document.getElementsByTagName('p');
const firstDiv = document.querySelector('div');
const allDivs = document.querySelectorAll('div');
```

---

# **4. Manipulando o Conteúdo**

## **Alterar o Texto:**

- `textContent`
- `innerHTML`
- `innerText`

---

## **Exemplo:**

```javascript
const paragraph = document.querySelector('p');
paragraph.textContent = 'Novo conteúdo';
paragraph.innerHTML = '<strong>Novo</strong> conteúdo';
```

---

## **Adicionar e Remover Elementos:**

- `createElement()`
- `appendChild()`
- `removeChild()`

---

## **Exemplo:**

```javascript
const newElement = document.createElement('p');
newElement.textContent = 'Elemento Adicionado';
document.body.appendChild(newElement);

const parent = document.getElementById('content');
const child = document.querySelector('strong');
parent.removeChild(child);
```

---

# **5. Manipulando Atributos e Classes**

## **Atributos:**

- `getAttribute()`
- `setAttribute()`
- `removeAttribute()`

---

## **Exemplo:**

```javascript
const img = document.querySelector('img');
img.setAttribute('src', 'nova-imagem.jpg');
const altText = img.getAttribute('alt');
img.removeAttribute('width');
```

---

## **Classes:**

- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `classList.contains()`

---

## **Exemplo:**

```javascript
const div = document.querySelector('div');
div.classList.add('active');
div.classList.remove('hidden');
div.classList.toggle('highlight');
const hasClass = div.classList.contains('active');
```

---

# **6. Eventos e Manipulação do DOM**

## **Eventos Comuns:**

- `click`, `mouseover`, `keydown`, `submit`, etc.

## **Adicionar Eventos:**

- `addEventListener()`

---

## **Exemplo:**

```javascript
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Botão clicado!');
});
```

## **Remover Eventos:**

- `removeEventListener()`

---

---

# **7. Exercícios Práticos**

## **Exercício 1:**

- Criar um botão que adiciona uma nova lista de itens ao clicar.

---

# **9. Conclusão**

## **Resumo:**

- O DOM é uma interface poderosa que permite a manipulação de documentos HTML.
- A manipulação do DOM é fundamental para criar experiências interativas na web.

---

```

```
