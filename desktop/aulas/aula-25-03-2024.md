---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# Fluxo de Dados entre uma Aplicação Frontend e uma Aplicação Backend

---

* No desenvolvimento de aplicativos modernos, é comum ter uma divisão entre a camada frontend e a camada backend.
* Para que essas duas partes se comuniquem de forma eficiente, é essencial entender o fluxo de dados entre elas.

---
#### Requisição do Cliente (Frontend):

- O cliente faz uma requisição HTTP para o servidor.

```js
import API from './utils/api';

API.get('/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

--- 
#### Roteamento no Backend (Express):
O servidor recebe a requisição e a roteia para o manipulador apropriado.

```js
const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  // Manipula a requisição e envia uma resposta
  res.json({ message: 'Dados recebidos com sucesso!' });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
```

---

#### Resposta do Servidor (Backend):
O servidor processa a requisição e envia uma resposta de volta ao cliente.
```js
{ message: 'Dados recebidos com sucesso!' }
```
---

#### Tratamento da Resposta (Frontend):
O cliente recebe a resposta do servidor e a processa conforme necessário.

```js
axios.get('/api/data')
  .then(response => {
    console.log('Resposta do servidor:', response.data.message);
  })
  .catch(error => {
    console.error('Erro ao receber resposta do servidor:', error);
  });
```

---

* O uso de Axios no frontend e Express no backend simplifica o processo de comunicação entre as duas camadas de uma aplicação.
* Entender o fluxo de dados entre o cliente e o servidor é crucial para o desenvolvimento eficaz de aplicativos web modernos.


---
<!-- _class: lead -->

# Vamos ver isso nas nossa aplicações

---

#### Backend

* clone o repo
```bash
git clone https://github.com/ADS-Unipar/task-api.git
```
* entre na pasta e abra no TERMINAL e execute
```bash
    npm i
```
---
* em seguida execute o projeto
```bash
    npm start
```
---
#### Frontend

* clone o repo
```bash
git clone https://github.com/ADS-Unipar/todo-list-electron.git
```
* entre na pasta e abra no VSCode e execute o comando para instalar as dependências no TERMINAL.
```bash
    npm i
```
---
* em seguida execute o projeto no TERMINAL
```bash
    npm start
```
* instale o axios
```bash
    npm i axios
```
---
# E vamos para o código ...

