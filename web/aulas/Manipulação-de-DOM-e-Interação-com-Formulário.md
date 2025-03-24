---
marp: true
title: Manipulação de DOM e Interação com Formulário
---

# O que é o DOM?

O **Document Object Model (DOM)** é uma representação estruturada do documento HTML que permite a manipulação dos elementos via JavaScript.

---

# Estrutura do DOM

O DOM organiza os elementos HTML em uma hierarquia de nós. Exemplo:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo DOM</title>
</head>
<body>
    <h1 id="titulo">Manipulação de DOM</h1>
    <p class="descricao">Aprendendo a modificar o DOM com JavaScript.</p>
</body>
</html>
```

---

# Representação no DOM

```
Document
 ├── html
      ├── head
      │    ├── title
      ├── body
           ├── h1 (id="titulo")
           ├── p (class="descricao")
```

---

# Selecionando Elementos no DOM

Existem diferentes formas de selecionar elementos no DOM:

```js
// Seleciona um elemento pelo ID
const titulo = document.getElementById('titulo');

// Seleciona o primeiro elemento que corresponde ao seletor CSS
const descricao = document.querySelector('.descricao');

// Seleciona todos os elementos que correspondem ao seletor CSS (NodeList)
const paragrafos = document.querySelectorAll('p');

// Seleciona todos os elementos de uma tag específica (HTMLCollection)
const divs = document.getElementsByTagName('div');

// Seleciona todos os elementos que possuem uma classe específica (HTMLCollection)
const caixas = document.getElementsByClassName('caixa');
```
---

🔹 `querySelector` e `querySelectorAll` permitem utilizar seletores CSS avançados, como:

```js
const negrito = document.querySelector('p strong'); // Seleciona um elemento <strong> dentro de <p>
const inputRequerido = document.querySelector('input[required]'); // Seleciona um <input> com o atributo required
```

---

# Modificando Elementos no DOM

```js
titulo.textContent = "Novo Título";
descricao.style.color = "blue";
```

---

# Interação com Formulário e Envio de Dados para API

## HTML do Formulário

```html
<form id="formulario">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Enviar</button>
</form>
<p id="mensagem"></p>
```

---

##### JavaScript para Capturar e Enviar os Dados

```js
document.getElementById('formulario').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const dados = { nome, email };

    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (resposta.ok) {
            document.getElementById('mensagem').textContent = 'Dados enviados com sucesso!';
            document.getElementById('mensagem').style.color = 'green';
        } else {
            document.getElementById('mensagem').textContent = 'Erro ao enviar os dados.';
            document.getElementById('mensagem').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('mensagem').textContent = 'Erro na conexão com a API.';
        document.getElementById('mensagem').style.color = 'red';
    }
});
```

---

# Conclusão

- O DOM permite a manipulação dinâmica dos elementos da página.
- Podemos capturar eventos, modificar estilos e interagir com o usuário.
- O exemplo mostrou como capturar e enviar dados de um formulário para uma API.
- Existem várias formas de selecionar elementos no DOM para manipulação.

💡 Experimente modificar o código e adicionar novas funcionalidades! 🚀

---

# Conteúdo extra: Vídeos recomendados 🎥

🔗 [Introdução ao DOM no JavaScript - Curso em Vídeo](https://www.youtube.com/watch?v=UftSB4DaRU4)

🔗 [Manipulação do DOM com JavaScript - Código Fonte TV](https://www.youtube.com/watch?v=wN3i8gS-gbY)

🔗 [Enviando Formulários via Fetch API - Fellyph Cintra](https://www.youtube.com/watch?v=7K3e0dUoLS8)

