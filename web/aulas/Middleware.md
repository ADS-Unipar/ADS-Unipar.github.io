---
marp: true
theme: default
paginate: true
class: invert
title: Aula Teórica: Middlewares
description: Conceitos, exemplos e atividade prática com Express.js
---

# 🎓 Aula Teórica: *Middlewares*

### Desenvolvimento Web

🧠 Conceitos  
🔩 Funcionamento  
🧪 Exemplos  
✍️ Atividade prática

---

## 🎯 Objetivos da Aula

- Compreender o conceito de middleware no desenvolvimento web.
- Identificar os tipos e usos comuns de middlewares.
- Aprender como middlewares funcionam em frameworks como Express (Node.js).
- Praticar a criação de middlewares simples.

---

## 🧠 O que é um Middleware?

> Uma **função** com acesso a `req`, `res` e `next()`  
> que pode **interceptar**, **processar** ou **modificar** a requisição/resposta.

---

## 🔁 Fluxo de Execução

```
Cliente --> Middleware 1 --> Middleware 2 --> Rota --> Middleware Final --> Resposta
```

Cada middleware pode:

- Executar lógica
- Modificar `req` ou `res`
- Encerrar resposta com `res.send()`
- Chamar `next()` para continuar

---

## 🧩 Tipos de Middleware

| Tipo                   | Exemplo                            |
|------------------------|------------------------------------|
| Aplicação              | `app.use(logger)`                  |
| Rota                   | `app.get('/rota', autenticar)`     |
| Erro                   | função com 4 parâmetros             |
| Terceiros              | `body-parser`, `cors`, `helmet`    |

---

## 🛠 Exemplo Prático com Express

```js
const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(3000);
```

---

## ⚠️ Middleware de Erro

```js
app.use((err, req, res, next) => {
  console.error('Erro:', err.message);
  res.status(500).send('Erro interno no servidor');
});
```

> É chamado apenas quando um erro ocorre em um middleware anterior.

---

## ✅ Boas Práticas

- Sempre chame `next()` se não encerrar a resposta
- Modularize middlewares em arquivos separados
- Utilize middlewares para lógica comum
- Ordem de declaração é importante

---

## 📚 Casos de Uso Comuns

✅ Log de requisições  
✅ Autenticação e autorização  
✅ Tratamento de erros  
✅ Análise de payload (JSON, forms)  
✅ Habilitação de CORS  

---



### 🧠 Exercício de Fixação
- **🚀 Desafio 1:**
Crie um middleware que registra a hora da requisição.

- **🔐 Desafio 2:**
Crie um middleware que bloqueia acesso fora do horário comercial (8h às 18h).


---

## 📁 Estrutura Sugerida

```
- server.js
- middlewares/
  - timer.js
  - validateServiceTime.js
```


---

## 📌 Conclusão

- Middleware é peça-chave no fluxo HTTP
- Reutilizável, modular e poderoso
- Controla autenticação, logs, erros e mais

🚀 Vamos codar agora!


