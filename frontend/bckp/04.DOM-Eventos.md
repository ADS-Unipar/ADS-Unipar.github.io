---
marp: true
theme: default
class: lead
paginate: true
header: "Eventos no DOM"
footer: "Allan da Silva"
---

# Eventos no DOM

- Os eventos são interações realizadas pelo usuário ou pelo navegador.
- Eles permitem que as páginas sejam dinâmicas e interativas.

---

# Tipos de Eventos

## Eventos de Mouse
- `click`: Quando o usuário clica em um elemento.
- `dblclick`: Quando o usuário dá um duplo clique.
- `mousemove`: Quando o mouse é movido sobre um elemento.
- `mouseover`: Quando o mouse passa sobre um elemento.

```html
<button id="hoverBtn">Passe o mouse</button>
<script>
  const hoverBtn = document.getElementById('hoverBtn');
  hoverBtn.addEventListener('mouseover', () => {
    hoverBtn.textContent = 'Mouse sobre o botão';
  });
</script>
```

---

## Eventos de Teclado
- `keydown`: Disparado quando uma tecla é pressionada.
- `keyup`: Disparado quando uma tecla é solta.

```html
<input type="text" id="textInput" placeholder="Digite algo">
<script>
  document.getElementById('textInput').addEventListener('keydown', (event) => {
    console.log('Tecla pressionada:', event.key);
  });
</script>
```

---

## Eventos de Formulário
- `change`: Disparado quando o valor de um campo muda.
- `submit`: Disparado quando o formulário é enviado.

```html
<form id="myForm">
  <input type="text" name="username" placeholder="Digite seu nome">
  <button type="submit">Enviar</button>
</form>
<script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio real do formulário
    console.log('Formulário enviado!');
  });
</script>
```

---

## Eventos de Janela
- `load`: Disparado quando a página é carregada.
- `resize`: Disparado quando a janela é redimensionada.
- `scroll`: Disparado quando a página é rolada.

```html
<script>
  window.addEventListener('resize', () => {
    console.log('A janela foi redimensionada');
  });
</script>
```

---

# Fases de Propagação de Eventos

1. **Captura**: O evento vai do `document` até o elemento alvo.
2. **Bubbling (propagação)**: O evento "borbulha" de volta para os elementos ancestrais.
3. **Alvo**: Onde o evento é disparado.
 
---

```html
<div id="parentDiv">
  <button id="childBtn">Clique</button>
</div>
<script>
  document.getElementById('parentDiv').addEventListener('click', () => {
    console.log('Div pai clicada');
  });

  document.getElementById('childBtn').addEventListener('click', (event) => {
    console.log('Botão clicado');
    event.stopPropagation(); // Interrompe a propagação
  });
</script>
```

---

# Delegação de Eventos

- Permite ouvir eventos em vários elementos filhos sem precisar adicionar ouvintes em cada um.
  
```html
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  document.getElementById('itemList').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      console.log('Item clicado:', event.target.textContent);
    }
  });
</script>
```

---

# Customização de Eventos

- Você pode criar eventos personalizados com `CustomEvent`.

```javascript
const meuEvento = new CustomEvent('meuEvento', {
  detail: { mensagem: 'Evento customizado disparado!' }
});

document.addEventListener('meuEvento', (event) => {
  console.log(event.detail.mensagem);
});

document.dispatchEvent(meuEvento);
```

---

# Conclusão

- A manipulação de eventos no DOM é essencial para criar páginas dinâmicas.
- Eventos comuns como `click`, `keydown` e `submit` são amplamente utilizados.
- Técnicas como delegação e propagação ajudam a otimizar o uso de eventos.
- Podemos criar eventos customizados para maior controle de interações.

---
