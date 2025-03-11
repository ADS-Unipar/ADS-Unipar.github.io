---
marp: true
---

# Aula sobre Express.js

## Introdução ao Express.js

O Express.js é um framework minimalista para Node.js que facilita a criação de servidores HTTP e APIs REST. Ele fornece uma camada simples para lidar com requisições, respostas, middlewares e roteamento.

---

### Instalação

Antes de começar, certifique-se de ter o Node.js instalado. Para instalar o Express, utilize o seguinte comando:

```sh
npm install express
```

---

## Criando um Servidor com Express

Crie um arquivo chamado `server.js` e adicione o seguinte código para criar um servidor básico:

```js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para permitir envio de JSON no corpo da requisição

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```

---

## Métodos HTTP no Express

### 1. GET - Buscar Dados

O método GET é usado para recuperar informações do servidor.

```js
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: "Alice" },
        { id: 2, nome: "Bob" }
    ]);
});
```

Acessando `http://localhost:3000/usuarios`, você receberá a lista de usuários.

---

### 2. POST - Criar um Novo Recurso

O método POST é usado para enviar dados e criar um novo recurso.

```js
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;
    res.status(201).json({ mensagem: "Usuário criado", usuario: novoUsuario });
});
```

---

### 3. PUT - Atualizar um Recurso

O método PUT é usado para atualizar um recurso existente.

```js
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    res.json({ mensagem: `Usuário ${id} atualizado`, dados: dadosAtualizados });
});
```

---

### 4. PATCH - Atualização Parcial

O PATCH é usado para atualizar parcialmente um recurso.

```js
app.patch('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const camposAtualizados = req.body;
    res.json({ mensagem: `Usuário ${id} atualizado parcialmente`, dados: camposAtualizados });
});
```

---

### 5. DELETE - Remover um Recurso

O DELETE é usado para excluir um recurso.

```js
app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Usuário ${id} removido` });
});
```

---

## Middleware no Express

Um middleware é uma função que tem acesso ao objeto de requisição (`req`), ao objeto de resposta (`res`) e à função `next()`. Ele pode modificar a requisição e a resposta ou encerrar o ciclo da requisição.

---

### Exemplo de Middleware Global

```js
app.use((req, res, next) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);
    next(); // Chama o próximo middleware ou rota
});
```

---

### Middleware para Rota Específica

```js
const logRequest = (req, res, next) => {
    console.log(`Acessando a rota: ${req.url}`);
    next();
};

app.get('/log', logRequest, (req, res) => {
    res.send("Log registrado no console");
});
```

---

## Conclusão

O Express facilita a criação de APIs REST utilizando diferentes métodos HTTP. Neste material, abordamos GET, POST, PUT, PATCH e DELETE, além do conceito de middleware e como utilizá-lo para modificar ou interceptar requisições.

Agora, você pode expandir essa API conectando-a a um banco de dados ou adicionando autenticação!

