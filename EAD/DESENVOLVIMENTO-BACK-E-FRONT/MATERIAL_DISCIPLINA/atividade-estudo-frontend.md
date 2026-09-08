# Atividade de Estudo — Front-End

**Disciplina:** Desenvolvimento de Software (Back-End/Front-End)
**Tipo:** Atividade de Estudo
**Foco:** Front-End com HTML, CSS e JavaScript
**Carga horária estimada:** 4 horas

---

## Objetivo

Compreender e praticar os fundamentos do desenvolvimento Front-End, construindo uma interface web responsiva que consome uma API.

---

## Instruções

Leia cada etapa com atenção e implemente no seu computador. Ao final, você terá uma página web funcional e responsiva.

---

## Etapa 1 — Estrutura HTML

Crie uma pasta e os arquivos iniciais:

```bash
mkdir front-estudo
cd front-estudo
```

Crie o arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de Produtos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Loja Virtual</h1>
  </header>

  <main>
    <section id="formulario">
      <h2>Cadastrar Produto</h2>
      <form id="form-produto">
        <input type="text" id="nome" placeholder="Nome do produto" required>
        <input type="number" id="preco" placeholder="Preço" step="0.01" required>
        <input type="number" id="estoque" placeholder="Estoque" required>
        <button type="submit">Salvar</button>
      </form>
    </section>

    <section id="lista">
      <h2>Produtos</h2>
      <div id="produtos"></div>
    </section>
  </main>

  <script src="app.js"></script>
</body>
</html>
```

---

## Etapa 2 — Estilo CSS

Crie o arquivo `style.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Calibri', sans-serif;
  color: #272425;
  padding: 16px;
}

header {
  background-color: #C22820;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  margin-bottom: 24px;
}

h2 {
  color: #C22820;
  margin-bottom: 16px;
}

form {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1 1 200px;
}

button {
  padding: 10px 20px;
  background-color: #C22820;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #5C2034;
}

.produto-card {
  border: 1px solid #e0e0e0;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

/* Responsividade */
@media (max-width: 600px) {
  form {
    flex-direction: column;
  }
  .produto-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

---

## Etapa 3 — JavaScript e Fetch

Crie o arquivo `app.js`:

```javascript
const API = 'http://localhost:3000/api/produtos';
const form = document.getElementById('form-produto');
const divProdutos = document.getElementById('produtos');

// Listar produtos
async function listarProdutos() {
  const response = await fetch(API);
  const produtos = await response.json();
  divProdutos.innerHTML = produtos.map(p => `
    <div class="produto-card">
      <div>
        <strong>${p.nome}</strong><br>
        R$ ${p.preco.toFixed(2)} — Estoque: ${p.estoque}
      </div>
      <button onclick="excluirProduto(${p.id})">Excluir</button>
    </div>
  `).join('');
}

// Cadastrar produto
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dados = {
    nome: form.nome.value,
    preco: parseFloat(form.preco.value),
    estoque: parseInt(form.estoque.value)
  };
  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  form.reset();
  listarProdutos();
});

// Excluir produto
async function excluirProduto(id) {
  if (confirm('Deseja realmente excluir?')) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    listarProdutos();
  }
}

listarProdutos();
```

---

## Etapa 4 — Teste

1. Inicie o servidor Back-End: `node server.js` (na pasta da atividade de Back-End);
2. Abra o `index.html` no navegador;
3. Cadastre alguns produtos;
4. Verifique se a lista é atualizada sem recarregar a página;
5. Teste a exclusão;
6. Redimensione o navegador para testar a responsividade.

---

## Perguntas para Reflexão

1. Por que usamos `e.preventDefault()` no submit do formulário?
2. O que acontece se o servidor Back-End estiver desligado?
3. Por que o `meta viewport` é importante para mobile?
4. Qual a diferença entre `flex-direction: column` e `row`?
5. Como você adicionaria a funcionalidade de edição?

---

## Checklist de Aprendizagem

- [ ] Criar HTML semântico com formulário e lista;
- [ ] Estilizar com CSS responsivo (Flexbox + media queries);
- [ ] Consumir API com fetch() e async/await;
- [ ] Manipular o DOM para listar, cadastrar e excluir;
- [ ] Tratar erros de requisição;
- [ ] Testar responsividade em diferentes tamanhos de tela.
