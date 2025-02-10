---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# Autenticação com JWT no frontend 

---

#### Iniciando
- Vamos criar uma aplicação Electron usando o boilerplate do [Vite](https://electron-vite.org/)

```sh
npm create @quick-start/electron auth-electron --template react
```
- Entre na pasta
```sh
  cd auth-electron
```

---

- Vamos encontrar a seguinte estrutura: 

```
├──src/
│  ├──main
│  ├──preload
│  └──renderer
├──electron.vite.config.js
└──package.json
```

---
### Vamos instalar as dependências necessárias.

```sh
  npm install axios jwt-decode react-hook-form  react-router-dom yup @hookform/resolvers
```

---

### Criando o Formulário de Login com Validação

- Criando o formulário de login *LoginForm.jsx* dentro da pasta renderer
- Importando dependerias 
```jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

```

---

### Criando um esquema de validação com `yup`

```jsx
const schema = yup.object().shape({
  email: yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});
```

---

### Agora criando o componente de login de fato

- Iniciamos uma função com o nome do componente
- e vamos usar os hooks `useForm` e o `useNavigate`
```jsx
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  //...continua
```

---

##### Criar uma função que recebe os valores do formulário e envia para o servidor

```jsx
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

```

---

##### Criando o componente

```jsx
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Senha</label>
        <input type="password" {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
```
---

### Criando uam rota protegida 

```jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;

```
---

##### Criando o App.js com as rotas

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}
```

---

##### Criando componente de dashboard com botão de Logout 

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
```

---

# Finalizando

Pronto! Agora você tem uma aplicação Electron com autenticação JWT, utilizando React, Vite, React Hook Form, Yup e React Router Dom.