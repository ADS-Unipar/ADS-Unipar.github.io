# Atividade de Estudo — Back-End

**Disciplina:** Desenvolvimento de Software (Back-End/Front-End)
**Tipo:** Atividade de Estudo
**Foco:** Back-End com Node.js e Express
**Carga horária estimada:** 4 horas

---

## Objetivo

Compreender e praticar os fundamentos do desenvolvimento Back-End, construindo uma API RESTful simples com Node.js e Express.

---

## Instruções

Leia cada etapa com atenção e implemente no seu computador. Ao final, você terá uma API funcional.

---

## Etapa 1 — Ambiente

Crie uma pasta e inicialize o projeto:

```bash
mkdir api-estudo
cd api-estudo
npm init -y
npm install express
```

Crie o arquivo `server.js`.

---

## Etapa 2 — Servidor Básico

Em `server.js`, crie um servidor simples:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando!' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

**Teste:** Execute `node server.js` e acesse `http://localhost:3000` no navegador.

---

## Etapa 3 — CRUD de Produtos

Implemente as rotas para gerenciar produtos:

| Método | Rota | Ação |
|--------|------|------|
| GET | `/api/produtos` | Listar todos |
| GET | `/api/produtos/:id` | Buscar por ID |
| POST | `/api/produtos` | Cadastrar |
| PUT | `/api/produtos/:id` | Atualizar |
| DELETE | `/api/produtos/:id` | Excluir |

**Dados do produto:**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | Número | Gerado automaticamente |
| `nome` | Texto | Nome do produto |
| `preco` | Número | Preço em reais |
| `estoque` | Número | Quantidade em estoque |

---

## Etapa 4 — Validação

Adicione validação nas rotas de criação e atualização:

- `nome` é obrigatório e deve ter pelo menos 2 caracteres;
- `preco` é obrigatório e deve ser maior que 0;
- `estoque` é obrigatório e deve ser maior ou igual a 0.

Se a validação falhar, retorne status **400** com uma mensagem de erro.

---

## Etapa 5 — Teste com curl ou Thunder Client

Teste cada rota:

```bash
# Listar produtos
curl http://localhost:3000/api/produtos

# Cadastrar produto
curl -X POST http://localhost:3000/api/produtos \
  -H "Content-Type: application/json" \
  -d '{"nome": "Notebook", "preco": 3500, "estoque": 10}'

# Buscar por ID
curl http://localhost:3000/api/produtos/1

# Atualizar
curl -X PUT http://localhost:3000/api/produtos/1 \
  -H "Content-Type: application/json" \
  -d '{"nome": "Notebook Gamer", "preco": 5000, "estoque": 5}'

# Excluir
curl -X DELETE http://localhost:3000/api/produtos/1
```

---

## Perguntas para Reflexão

1. O que acontece se você enviar um JSON com campos faltando?
2. Qual a diferença entre PUT e PATCH?
3. Por que usamos `express.json()` no servidor?
4. O que significa o status code 201?
5. Como você faria para conectar este Back-End a um banco de dados real?

---

## Checklist de Aprendizagem

- [ ] Criar um servidor com Express;
- [ ] Definir rotas REST (GET, POST, PUT, DELETE);
- [ ] Receber e processar dados em JSON;
- [ ] Implementar validação de dados;
- [ ] Retornar status codes adequados;
- [ ] Testar uma API com curl ou Thunder Client.
