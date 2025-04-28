---
marp: true
theme: gaia  
_class: lead  
paginate: true  
backgroundColor: #fff  

---

## HTTP no Front-end com Axios 🚀

Aprenda a integrar APIs em suas aplicações React de forma fácil e moderna!

---

### O que é o Axios?

- **Axios** é uma biblioteca JavaScript para fazer requisições HTTP.
- Funciona tanto no **navegador** quanto no **Node.js**.
- Ideal para:
  - Buscar dados de APIs 📦
  - Enviar informações para servidores 📤
  - Autenticação de usuários 🔐
  - Uploads, downloads e muito mais!

---

### Por que usar o Axios?

✅ **Fácil de usar**: API intuitiva baseada em Promises.  
✅ **Flexível**: Suporta todos os métodos HTTP (GET, POST, PUT, DELETE...).  
✅ **Interceptors**: Permite interceptar requisições e respostas.  
✅ **Timeouts e Cancelamento**: Mais controle sobre as requisições.  
✅ **Suporte automático a JSON**.  
✅ **Popularidade**: Comunidade ativa e ótima documentação.

---

### Criando uma instância Axios personalizada

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default api;
```

---

### Como fazer uma requisição **POST**

```javascript
import api from './api';

api.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(response => {
  console.log('Usuário criado:', response.data);
})
.catch(error => {
  console.error('Erro ao criar usuário:', error);
});
```

---

### Como fazer uma requisição **GET**

```javascript
import api from './api';

async function buscarUsuario() {
  try {
    const response = await api.get('/user/1');
    console.log('Usuário:', response.data);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
  }
}
```

---

### Integrando Axios com React e Hooks

Exemplo usando **useEffect** para buscar dados ao carregar o componente:

---

```javascript
import { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await api.get('/user/1');
        setUser(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Usuário:</h1>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Carregando...</p>}
    </div>
  );
}

export default App;
```

---

### Mãos à Obra com Vite! ⚡

**Criando seu projeto React com Vite:**

---

```bash
# Crie um novo projeto com Vite
npm create vite@latest react-axios -- --template react

# Acesse a pasta
cd react-axios

# Instale as dependências
npm install

# Instale o Axios
npm install axios

# Rode o servidor
npm run dev
```

---

### Dicas Extras ✨

- Utilize **loading states** para uma melhor experiência do usuário.
- Trate erros de maneira amigável.
- Use uma **instância Axios** para evitar repetir configurações.
- Explore os **interceptors** para gerenciar autenticação.

---

## 🎯 Desafio Prático: Crie um CRUD Completo!

**Objetivo:**  
Construa uma pequena aplicação React com Axios que permita **Cadastrar**, **Listar**, **Editar** e **Excluir** itens.

**Sugestão de tema:**  
Gerenciar uma lista de **tarefas** ou **usuários**.

---

**Requisitos:**

- **[C] Create:** Formulário para adicionar um novo item.
- **[R] Read:** Listar todos os itens vindos da API.
- **[U] Update:** Editar um item existente.
- **[D] Delete:** Remover um item da lista.

---

**Dicas:**

- Use uma API pública como [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (`/posts` ou `/users`)  
  ou crie sua própria API simulada com [json-server](https://www.npmjs.com/package/json-server).

```bash
# Para instalar o JSON Server
npm install -g json-server

# Para rodar um servidor fake
json-server --watch db.json --port 3001
```

- Utilize `POST`, `GET`, `PUT/PATCH` e `DELETE` via Axios.
- Crie componentes separados para melhor organização: ex. `Form`, `List`, `Item`.

---

# 🚀 Bora construir seu primeiro CRUD com React + Axios!

