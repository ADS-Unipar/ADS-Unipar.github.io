---
marp: true
theme: default
paginate: true
backgroundColor: #ffffff
---

# **TypeORM: Gerenciamento de Banco de Dados com TypeScript**

---

# **1. Introdução ao TypeORM**

- **O que é TypeORM?**
  - TypeORM é um ORM (Object-Relational Mapping) escrito em TypeScript.
  - Facilita a interação entre aplicações e bancos de dados relacionais.
- **Vantagens:**
  - Simplicidade na criação e manutenção de schemas.
  - Suporte para diversos bancos de dados.
  - Ferramentas poderosas como migrations.

---

# **2. Configuração Inicial**

### **Instalação e Setup do Projeto**
```bash
npm install typeorm reflect-metadata
npm install pg # PostgreSQL driver
```
---

### **Configuração do arquivo `ormconfig.json`**
```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "user",
  "password": "password",
  "database": "test_db",
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration"
  }
}
```

---

# **3. Criação de Entidades**

### **O que são Entidades?**
- Entidades são classes que mapeiam tabelas do banco de dados.
---

### **Exemplo de Entidade `User`**
```typescript
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
```

---

# **4. Relacionamentos entre Entidades**

### **Tipos de Relacionamentos**
- **One-to-One (`@OneToOne`)**
- **One-to-Many (`@OneToMany`)**
- **Many-to-Many (`@ManyToMany`)**
---

### **Exemplo: `User` e `Profile`**
```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
```
```typescript
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;
}
```

---

# **4. Relacionamentos entre Entidades**

### **One-to-Many: `User` e `Post`**
```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.posts)
  user: User;
}
```
---

### **Many-to-Many: `User` e `Role`**
```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```

---

# **5. Migrations no TypeORM**

### **O que são Migrations?**
- Scripts versionados que ajudam a evoluir o esquema do banco de dados.

### **Criando uma Migration**
```bash
npx typeorm migration:create src/migration/CreateUserTable
```
---

### **Aplicando Migrations**
```bash
npx typeorm migration:run
```

### **Revertendo Migrations**
```bash
npx typeorm migration:revert
```

---

# **5. Exemplo de Migration**

### **Criando Migration para `User`**
---

```typescript
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1680000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "user",
      columns: [
        { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
        { name: "firstName", type: "varchar" },
        { name: "lastName", type: "varchar" },
        { name: "isActive", type: "boolean", default: true },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
```

---

# **6. Exemplos Práticos**

### **Exemplo Completo**
- Configuração de um banco de dados para uma aplicação de blog com:
  - Usuários (`User`)
  - Posts (`Post`)
  - Categorias (`Category`)
---

### **Gerando Migrations Automáticas**
```bash
npx typeorm migration:generate src/migration/AutoGeneratedMigration
```

### **Aplicando Migrations**
```bash
npx typeorm migration:run
```

---

# **7. Conclusão**

### **Recapitulação**
- Criação de entidades.
- Configuração de relacionamentos.
- Utilização de migrations.

### **Melhores Práticas**
- Versionar o banco de dados com migrations.
- Usar lazy loading e cascata com cautela.

### **Recursos Adicionais**
- [Documentação Oficial do TypeORM](https://typeorm.io)

