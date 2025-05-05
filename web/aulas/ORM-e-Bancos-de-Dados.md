---
marp: true
theme: default
class: lead
paginate: true
header: '**ORM com Sequelize e SQLite**'

---

<!-- _class: title -->
# **ORM com Sequelize e SQLite**
### Simplificando bancos de dados em Node.js
![h:150](https://sequelize.org/img/logo.svg) ![h:150](https://www.sqlite.org/images/sqlite370_banner.gif)

---

<!-- _class: section -->
# 🧠 O que é ORM?
ORM significa Object-Relational Mapping (Mapeamento Objeto-Relacional). É uma técnica que permite interagir com bancos de dados relacionais usando código orientado a objetos, sem precisar escrever SQL puro.

- **Definição**: 
  - Técnica que mapeia objetos ↔ tabelas
  - Traduz código para SQL automaticamente

---

<!-- _class: two-cols -->
## **Vantagens vs Desvantagens**

<!-- left -->
✅ **Prós**:
- Menos SQL "hard-coded"
- Segurança contra SQL injection
- Produtividade em CRUD

<!-- right -->
❌ **Contras**:
- Curva de aprendizado
- Overhead em consultas complexas


---
Em vez de escrever uma query SQL como:

```sql 
SELECT * FROM users WHERE id = 1;

```

Você faz algo assim com ORM:
```js
User.findByPk(1);
```
---


<!-- _class: section -->
# Por que Sequelize + SQLite?

- **Sequelize**:
  - ORM para Node.js
  - Suporte a PostgreSQL, MySQL, SQLite
  - Migrações, Hooks, Validações

- **SQLite**:
  - Banco baseado em arquivo
  - Zero configuração
  - Ideal para prototipagem

---

<!-- _class: code -->
## Configuração Inicial

```bash
npm install sequelize sqlite3
```

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Arquivo do banco
  logging: false // Desativa logs de SQL
});
```

---

<!-- _class: code -->
# Definindo um Modelo

```javascript
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  }
});
```

---

<!-- _class: code -->
# Operações CRUD

```javascript
// CREATE
await User.create({ name: 'Alice', email: 'alice@ex.com' });

// READ
const users = await User.findAll();

// UPDATE
await User.update({ name: 'Bob' }, { where: { id: 1 } });

// DELETE
await User.destroy({ where: { id: 1 } });
```

---

<!-- _class: code -->
# Relacionamentos 1:N

```javascript
// Modelo Post
const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT
});

// Associações
User.hasMany(Post);
Post.belongsTo(User);

// Uso
const user = await User.findByPk(1);
const posts = await user.getPosts();
```

---

<!-- _class: code -->
# Consultas com Operadores

```javascript
const { Op } = require('sequelize');

const adultos = await User.findAll({
  where: {
    idade: { [Op.gte]: 18 }
  }
});

const postsComUsuarios = await Post.findAll({
  include: User // Eager Loading
});
```

---

<!-- _class: code -->
# Migrações com Sequelize-CLI

```bash
npx sequelize-cli init
npx sequelize-cli model:generate --name User --attributes name:string
npx sequelize-cli db:migrate
```

**Arquivo de migração**:
```javascript
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Users', { /* ... */ }),
  down: (queryInterface) => 
    queryInterface.dropTable('Users')
};
```

---

<!-- _class: section -->
# Boas Práticas

1. Use migrações para versionar o esquema
2. Evite N+1 queries com `include`
3. Ative logs para debug:
   ```javascript
   const sequelize = new Sequelize({ logging: console.log });
   ```
4. Índices para campos de busca frequente

---
# Olhando para aula passada

Na aula passada utilizamos um `json-server` para simular um banco de dados, que tal hoje nós pegamos o mesmo projeto e adicionar um baco de dados com ORM(Sequelize)


---

# bora por a mão na massa

---

#### 1. Utilizem a pasta do projeto anterior

```bash
cd meu-projeto-sequelize
```
```bash
code . 
```

---

#### 2. Instale as dependências

```bash
npm install sequelize sqlite3
```

---

#### 3. Configure o Sequelize

Crie um arquivo chamado `database.js`:

```js
// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite' // Nome do arquivo do banco
});

module.exports = sequelize;
```

---

#### 4. Crie um modelo (tabela)

```js
// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }

  // os outro campos que precisamos ter para o usuário
});

module.exports = User;
```



