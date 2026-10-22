# 📝 To-Do List CLÁSSICA — SEM AJAX e SEM FETCH

Aplicação prática da **Unidade 1** — *Desenvolvimento de Software (Back-End e Front-End)*.

Esta versão funciona **como era "antigamente"**, antes do AJAX:
**não existe JavaScript no navegador** (sem `fetch()`, sem `XMLHttpRequest`).
A cada ação, um **formulário HTML** é enviado ao servidor e a **página recarrega por inteiro**.

## 🔁 Como funciona (fluxo clássico)

```
1. Usuário clica em um botão de um <form> HTML
            ↓
2. Navegador ENVIA O FORMULÁRIO ao servidor (POST)
            ↓
3. Servidor processa e MONTA O HTML pronto
            ↓
4. Navegador recebe e EXIBE A PÁGINA INTEIRA novamente
```

Compare com a versão moderna (`../todo-list-app`):

| Aspecto | Versão clássica (esta) | Versão moderna |
|---------|------------------------|----------------|
| Comunicação | Formulários HTML (`<form method="POST">`) | `fetch()` + JSON |
| JavaScript no navegador | **Nenhum** | `app.js` com `async/await` |
| Quem monta o HTML | O **servidor** (server-side rendering) | O **navegador** (DOM) |
| Recarga da página | **Sim**, a cada ação | Não (atualiza só a lista) |
| Middleware | `express.urlencoded()` | `express.json()` |
| Mensagens | Vêm no HTML / URL `?msg=` | Criadas por JavaScript |

## 📁 Estrutura do projeto

```
todo-list-app-sem-ajax/
├── public/
│   └── style.css      ← único arquivo do Front-End (sem .js!)
├── server.js          ← BACK-end + montagem do HTML
├── package.json       ← dependências e scripts
└── README.md          ← este arquivo
```

## 🗂️ Rotas (cada uma devolve uma página HTML completa)

| Ação | Método | Rota | O que faz |
|------|--------|------|-----------|
| Listar | `GET` | `/` | Página com formulário + lista |
| Criar | `POST` | `/tarefas` | Recebe o formulário e redireciona |
| Editar (página) | `GET` | `/tarefas/:id/editar` | Página com formulário preenchido |
| Editar (envio) | `POST` | `/tarefas/:id/editar` | Atualiza e redireciona |
| Concluir | `POST` | `/tarefas/:id/concluir` | Alterna concluída/não concluída |
| Excluir | `POST` | `/tarefas/:id/excluir` | Exclui e redireciona |

## ▶️ Como executar

```bash
cd todo-list-app-sem-ajax
npm install
npm start
# acesse http://localhost:3000
```

> **Teste rápido:** aperte `Ctrl+U` no navegador para ver o código-fonte
> da página — todo o HTML já veio pronto do servidor!
> E desative o JavaScript do navegador: a aplicação continua funcionando. 😉

## 📚 Conceitos ensinados nos comentários

- **Server-side rendering (SSR):** o servidor monta e devolve o HTML;
- **`express.urlencoded()`:** leitura de dados de formulários HTML;
- **Padrão PRG (Post → Redirect → Get):** evita reenvio duplicado ao apertar F5;
- **Escape de HTML (`escaparHTML()`):** proteção contra ataques XSS;
- **Validação no servidor:** o título obrigatório é verificado antes de criar/editar.

> **Nota:** os dados ficam em **memória** (array no `server.js`) e são
> perdidos ao reiniciar o servidor — nas próximas unidades usaremos um banco de dados real.
