---
marp: true
theme: default
class: invert
---

# 🚀 Criando um To-Do List com Electron, React e SQLite

## 📌 Objetivo
Nesta aula, vamos criar um **To-Do List** utilizando **Electron Vite** e **React**, com armazenamento local usando **SQLite**.

---

## 🔧 Tecnologias Utilizadas
### 📡 Electron Vite
Electron Vite é um boilerplate moderno que integra Electron com Vite, proporcionando uma melhor experiência de desenvolvimento e build mais rápido.

---

### ⚛️ React
React é uma biblioteca JavaScript para construção de interfaces de usuário. Utilizaremos Vite como ferramenta de build para facilitar o desenvolvimento e a performance da aplicação.

---

### 🗄️ SQLite
SQLite é um banco de dados relacional leve e integrado, ideal para aplicações que precisam armazenar dados localmente sem um servidor de banco de dados dedicado.

### 🔧 Knex.js
Knex.js é um query builder para SQL, permitindo interagir com bancos de dados usando JavaScript de forma simples e escalável.

---

## 📂 Estrutura do Projeto
```sh
npx create-electron-vite my-todo-app --template react-ts
cd my-todo-app
npm install sqlite3 knex
```

```
my-todo-app/
├── src/
│   ├── main/         # Código principal do Electron
│   │   ├── index.ts  # Inicialização do Electron
│   │   ├── database.ts  # Configuração do SQLite
│   ├── preload/      # Comunicação entre Electron e React
│   │   ├── index.ts
│   ├── renderer/     # Frontend React
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   ├── dist/     # Build do React para produção
├── package.json
```

---

## 🏗️ Criando o Banco de Dados
Crie `src/main/database.ts`:
```ts
import path from "path";
import { app } from "electron";
import knex from "knex";

const dbPath = path.join(app.getPath("userData"), "tasks.db");
const db = knex({ client: "sqlite3", connection: { filename: dbPath }, useNullAsDefault: true });

async function createTable() {
  const exists = await db.schema.hasTable("tasks");
  if (!exists) {
    await db.schema.createTable("tasks", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
    });
    console.log("Tabela criada.");
  }
}
createTable();
export default db;
```

---

## 🖥️ Configurando o Electron
Modifique `src/main/index.ts`:

---

```ts
import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import db from "./database";

let mainWindow: BrowserWindow | null = null;
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { preload: path.join(__dirname, "../preload/index.js") }
  });
  if (import.meta.env.MODE === "development") {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../../renderer/dist/index.html"));
  }
});

ipcMain.handle("add-task", async (_, task) => {
  const [id] = await db("tasks").insert(task);
  return { id, ...task };
});
ipcMain.handle("get-tasks", async () => db("tasks").select("*") );
ipcMain.handle("delete-task", async (_, id) => db("tasks").where("id", id).del());
```

---

## 🔗 Criando a Comunicação entre Electron e React
Modifique `src/preload/index.ts`:
```ts
import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("electron", {
  addTask: (task) => ipcRenderer.invoke("add-task", task),
  getTasks: () => ipcRenderer.invoke("get-tasks"),
  deleteTask: (id) => ipcRenderer.invoke("delete-task", id),
});
```

---

## 🎨 Criando a Interface do To-Do List
Modifique `src/renderer/src/App.tsx`:

---

```tsx
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => { window.electron.getTasks().then(setTasks); }, []);

  const addTask = async () => {
    if (!title.trim() || !description.trim()) return;
    const newTask = await window.electron.addTask({ title, description });
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = async (id) => {
    await window.electron.deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.description}
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
```

---

## 📦 Ajustando o Build do Electron
Modifique `package.json`:
```json
"scripts": {
  "dev": "electron-vite dev",
  "build": "electron-vite build"
}
```

---

## 🚀 Executando e Empacotando
Rodando o app no modo dev:
```sh
npm run dev
```
Criando o build para produção:
```sh
npm run build
```

---

## ✅ Conclusão
Agora temos um **To-Do List** funcional, utilizando **Electron Vite, React e SQLite**, pronto para rodar localmente e ser distribuído! 🎉




---
# Podemos melhorar isso!
Vamos melhorar colocando css com https://tailwindcss.com/
