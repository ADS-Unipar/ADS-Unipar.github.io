# 📝 To-Do List — CRUD com Node.js + Express

Aplicação prática da **Unidade 1** — *Desenvolvimento de Software (Back-End e Front-End)*,
baseada na **aula ao vivo** (Integração Front-End + Back-End + API).

A aplicação implementa um **CRUD completo** de tarefas:

| Letra | Ação          | Verbo HTTP | Rota              |
|-------|---------------|------------|-------------------|
| C     | Criar         | `POST`     | `/api/tarefas`    |
| R     | Ler/Listar    | `GET`      | `/api/tarefas`    |
| U     | Atualizar     | `PUT`      | `/api/tarefas/:id`|
| D     | Excluir       | `DELETE`   | `/api/tarefas/:id`|

Também inclui o **desafio da aula** (edição com `PUT`) e o
marcar/desmarcar tarefa como **concluída**.

## 📁 Estrutura do projeto

```
todo-list-app/
├── public/            ← FRONT-END (o que o usuário vê)
│   ├── index.html     ← página/estrutura (HTML)
│   ├── style.css      ← aparência (CSS)
│   └── app.js         ← lógica + fetch() (JavaScript)
├── server.js          ← BACK-END (rotas da API REST)
├── package.json       ← dependências e scripts
└── README.md          ← este arquivo
```

## ▶️ Como executar

1. Abra o terminal dentro da pasta `todo-list-app`;
2. Instale a dependência do Express:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

4. Acesse no navegador: **http://localhost:3000**

> **Nota:** os dados ficam em **memória** (array no `server.js`), ou seja,
> ao reiniciar o servidor a lista começa vazia novamente. Nas próximas
> unidades vamos substituir esse array por um **banco de dados real**.

## 🔁 Fluxo da aplicação

```
Front-End (HTML + CSS + JS)
        ↓
    fetch() — Requisição HTTP assíncrona
        ↓
Back-End (Node.js + Express)
        ↓
    Rotas REST (GET, POST, PUT, DELETE)
        ↓
    Dados em memória (array)
        ↓
    Resposta JSON
        ↓
Front-End atualiza o DOM (sem recarregar a página)
```

## 📚 O que cada arquivo ensina

- **[server.js](./server.js)** — middlewares (`express.json()`, `express.static()`),
  rotas REST, validação no servidor, códigos de status HTTP
  (`200`, `201`, `204`, `400`, `404`);
- **[public/app.js](./public/app.js)** — `fetch()` com `async/await`,
  `POST`/`PUT`/`DELETE`, manipulação do DOM, modo criar/editar
  com a variável `editandoId`;
- **[public/index.html](./public/index.html)** — estrutura semântica da página;
- **[public/style.css](./public/style.css)** — layout responsivo e identidade visual.

Todos os arquivos estão **comentados linha a linha** para servirem de estudo.
