---
marp: true
theme: default
paginate: true
title: "Trabalho Prático (4,0 pts): API de Blog com NestJS + Prisma + SQLite"
author: "Professor(a)"
---

# 🧩 Trabalho Prático (4,0 pts)
## API de Blog com NestJS + Prisma + SQLite

🎯 **Objetivo:**  
Criar uma API de Blog com:
- NestJS + Prisma + SQLite  
- Filtros por autor e data  
- Edição (PUT)  
- Favoritar posts  

---

## 📘 Descrição do Projeto

Você deverá desenvolver uma **API RESTful** que simule um sistema de blog.

Cada **usuário** pode ser vinculado a um **autor**, e cada **autor** pode criar vários **posts**.

Além disso:
- Usuários poderão **favoritar posts**
- Todos os recursos devem suportar **edição (PUT)**

---

## ⚙️ Tecnologias Obrigatórias

- 🧱 [NestJS](https://nestjs.com/)
- 🔶 [Prisma ORM](https://www.prisma.io/)
- 💾 [SQLite](https://www.sqlite.org/)
- 💙 [TypeScript](https://www.typescriptlang.org/)

---

## 🧱 Modelagem do Banco (Prisma)

Arquivo: `prisma/schema.prisma`

---

```prisma
model User {
  id        Int       @id @default(autoincrement())
  name      String
  email     String    @unique
  author    Author?
  favorites Favorite[]
}

model Author {
  id       Int     @id @default(autoincrement())
  bio      String?
  userId   Int     @unique
  user     User    @relation(fields: [userId], references: [id])
  posts    Post[]
}

model Post {
  id           Int        @id @default(autoincrement())
  title        String
  content      String
  publishedAt  DateTime   @default(now())
  authorId     Int
  author       Author     @relation(fields: [authorId], references: [id])
  favoritedBy  Favorite[]
}

model Favorite {
  id      Int    @id @default(autoincrement())
  userId  Int
  postId  Int
  user    User   @relation(fields: [userId], references: [id])
  post    Post   @relation(fields: [postId], references: [id])
  @@unique([userId, postId])
}
````

---

## 🚀 Funcionalidades: Usuários

| Método | Endpoint                       | Descrição                  |
| ------ | ------------------------------ | -------------------------- |
| POST   | `/users`                       | Cria um novo usuário       |
| GET    | `/users`                       | Lista todos os usuários    |
| PUT    | `/users/:id`                   | Atualiza um usuário        |
| POST   | `/users/:id/favorites/:postId` | Favorita um post           |
| GET    | `/users/:id/favorites`         | Lista favoritos do usuário |

---

## 🚀 Funcionalidades: Autores

| Método | Endpoint       | Descrição                            |
| ------ | -------------- | ------------------------------------ |
| POST   | `/authors`     | Cria um autor vinculado a um usuário |
| GET    | `/authors`     | Lista autores                        |
| PUT    | `/authors/:id` | Atualiza dados do autor              |

---

## 🚀 Funcionalidades: Posts

| Método | Endpoint     | Descrição                  |
| ------ | ------------ | -------------------------- |
| POST   | `/posts`     | Cria um novo post          |
| GET    | `/posts`     | Lista todos os posts       |
| PUT    | `/posts/:id` | Atualiza um post existente |

---

## 🔍 Filtros de Busca

| Exemplo                                 | Resultado         |
| --------------------------------------- | ----------------- |
| `GET /posts?authorId=1`                 | Posts de um autor |
| `GET /posts?date=2025-10-27`            | Posts de uma data |
| `GET /posts?authorId=1&date=2025-10-27` | Filtro combinado  |

---

## 🧩 Estrutura Recomendada

```
src/
├── prisma/
│   ├── prisma.service.ts
│   └── prisma.module.ts
├── users/
├── authors/
├── posts/
└── app.module.ts
```

Cada módulo deve conter seu `service`, `controller` e `module`.

---

## 💡 Exemplo PUT no Service

```ts
async update(id: number, data: { title?: string; content?: string }) {
  return this.prisma.post.update({
    where: { id },
    data,
  });
}
```

---

## 💡 Favoritos (Relação N:N)

Adicionar favorito:

```ts
async addFavorite(userId: number, postId: number) {
  return this.prisma.favorite.create({ data: { userId, postId } });
}
```

Listar favoritos:

```ts
async getFavorites(userId: number) {
  return this.prisma.favorite.findMany({
    where: { userId },
    include: { post: true },
  });
}
```

---

## 💡 Filtros Dinâmicos (Prisma)

```ts
async findAll(authorId?: number, date?: string) {
  return this.prisma.post.findMany({
    where: {
      authorId: authorId ? Number(authorId) : undefined,
      publishedAt: date
        ? { gte: new Date(date), lt: new Date(`${date}T23:59:59`) }
        : undefined,
    },
    include: { author: true },
  });
}
```

---

## 🧠 Critérios de Avaliação (4,0 pts)

| Critério                                 | Pontos |
| ---------------------------------------- | -----: |
| Configuração NestJS + Prisma             |    0,7 |
| Modelagem (User, Author, Post, Favorite) |    0,7 |
| CRUD e PUT implementado                  |    1,0 |
| Favoritos e filtros funcionando          |    1,0 |
| Boas práticas e documentação             |    0,6 |

---

## 🧩 Entrega

📦 Entregue o link do repositório **GitHub** com o projeto funcional.

O projeto deve rodar com:

```bash
npm install
npx prisma migrate dev
npm run start:dev
```

---

## 💬 Desafio Extra (opcional)

* Ordenar posts por data (`GET /posts?sort=desc`)
* Remover favorito (`DELETE /users/:id/favorites/:postId`)
* Exibir nome do autor nos posts favoritos

---

## 🏁 Conclusão

Com esse projeto você vai:

✅ Aplicar **Prisma ORM**
✅ Integrar **NestJS + SQLite**
✅ Trabalhar com **relacionamentos 1:N e N:N**
✅ Criar uma **API moderna e escalável** 🚀

---

**Envie o trabalho aqui:** https://docs.google.com/forms/d/e/1FAIpQLSf-OZ2qxFwiMu3AMDJrBpbkrdMC0_COZHdclSqGITm_A_fyuw/viewform?usp=dialog