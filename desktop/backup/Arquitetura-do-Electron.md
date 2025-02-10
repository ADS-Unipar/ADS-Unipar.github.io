---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# Arquitetura do Electron.js

---

###### O Electron consiste em três camadas principais:

* Main Process (Processo Principal)
* Renderer Process (Processo de Renderização)
* Preload Scripts (Scripts de Pré-carregamento)


* *Cada camada tem responsabilidades distintas e se comunica de maneiras específicas.*

---

#### 1. Main Process (Processo Principal)

* Função:

  * Controla o ciclo de vida da aplicação, incluindo a criação e gerenciamento das janelas.
  * Executa código Node.js, permitindo o uso completo das APIs do Node.
* Características:

  * Há apenas um processo principal por aplicação.
  * Pode criar múltiplos processos de renderização.

---

###### Arquivo Típico: main.js

```js 
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // Melhor prática para segurança
      contextIsolation: true  // Isola o contexto do Node.js no renderer
    }
  });

  win.loadFile('index.html');
}


```

---

```js
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
```

---
##### 2. Renderer Process (Processo de Renderização)

* Função:

  * Responsável por renderizar o conteúdo da janela.
  * Executa código HTML, CSS e JavaScript.

* Características:

  * Cada janela (ou aba) possui seu próprio processo de renderização.
  * Mais seguro do que o processo principal, pois é isolado por contexto.

---

#### Arquivo Típico: renderer.js

```js
document.getElementById('fetch-data').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error fetching data:', error));
});

```
---
### 3. Preload Scripts (Scripts de Pré-carregamento)

* Função:

  * Executa antes do conteúdo da página ser carregado.
  * Fornece uma ponte segura entre o processo de renderização e o processo principal.
* Características:
  * Permite expor APIs limitadas do Node.js ao processo de renderização de forma controlada e segura.
  * Usado para melhorar a segurança, especialmente quando nodeIntegration está desativado e contextIsolation está ativado.

---
###### Arquivo Típico: preload.js
```js
const { contextBridge, ipcRenderer } = require('electron');

// Expondo uma API segura ao processo de renderização
contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    let validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    let validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});

```

---
## Comunicação entre as Camadas

##### IPC (Inter-Process Communication)
O Electron utiliza IPC para comunicação entre os processos:

Main Process (main.js)
```js
const { ipcMain } = require('electron');

ipcMain.on('toMain', (event, args) => {
  console.log(args);
  event.reply('fromMain', 'Pong');
});
```
---

Renderer Process (renderer.js)
```js
document.getElementById('send-message').addEventListener('click', () => {
  window.api.send('toMain', 'Ping');
});

window.api.receive('fromMain', (data) => {
  console.log(data); // 'Pong'
});
```
---

#### Configuração Segura do Electron
* Para aumentar a segurança da aplicação:

  * Desativar a integração do Node.js no Renderer:
  ```js
    nodeIntegration: false
  ```
Isolar o Contexto:
  ```js
    contextIsolation: true
  ```
* Usar Scripts de Pré-carregamento:

Para expor apenas as partes necessárias das APIs do Node.js.

---


### código no repo

https://github.com/ADS-Unipar/app-exemplo-electron


