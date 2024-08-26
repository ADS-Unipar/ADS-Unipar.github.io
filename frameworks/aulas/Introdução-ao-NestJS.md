---
marp: true
title: NestJS com TypeORM e SQLite
theme: default
paginate: true

footer: 'Allan da Silva'
---

# Introdução ao NestJS + Passo a Passo de como criar uma API e Conectar ao banco

---

- **NestJS** é um framework Node.js para a construção de aplicações back-end eficientes e escaláveis.
- Baseado em **TypeScript** e utiliza conceitos como **Injeção de Dependência**, **Decorators**, e **Pipes**.
- Ideal para construir **APIs RESTful** e **APIs GraphQL**.

---

# O que é o TypeORM?

- **TypeORM** é um ORM (Object-Relational Mapper) para TypeScript e JavaScript.
- Suporta múltiplos bancos de dados: MySQL, PostgreSQL, MariaDB, SQLite, entre outros.
- Facilita a criação de modelos, migrações e consultas utilizando classes e decoradores.

---

# Por que usar SQLite?

- **SQLite** é um banco de dados leve, ideal para desenvolvimento e aplicações pequenas.
- **Zero Configuração:** Não requer um servidor de banco de dados separado.
- **Portabilidade:** O banco de dados é armazenado em um único arquivo.

---

# Instale o CLI do nest de forma global

```sh
  npm i -g @nestjs/cli
```
---

# Configurando o Projeto

1. Crie um novo projeto NestJS:
  ```sh
  nest new [nome da pasta do projeto]
  ```
2. Entre na pasta

```sh
  cd [pasta do projeto]
```

3. instale as dependências 
```sh
  npm i typeorm sqlite3 @nestjs/typeorm class-validator class-transformer
```
---
# Criando a conexão com banco de daods
dentro do arquivo `app.module.ts` adicione o imports e a conexão com banco de dados

---

```ts
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
 import { TypeOrmModule } from '@nestjs/typeorm';
// @Module({
//   imports: [
//     UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


```
---
# Criando o CRUD de users
rode o comando do nest que gera um  resource com um crud completo
```sh
  nest g res user
```
---
# Criando uma Entidade

```ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
  
  @Column()
  password: string;

}
```
---

# Adicionar middleware de validações
 no arquivo `main.ts`

 ```ts
//   import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
//   await app.listen(3000);
// }
// bootstrap();

 ```

---

# Adicionado a entidade ao modulo de usuarios
no arquivo `user.module.ts` adione a classe de entidade ao imports
```ts
// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

// @Module({
  imports: [TypeOrmModule.forFeature([User])],
//   controllers: [UserController],
//   providers: [UserService],
// })
// export class UserModule {}
```

---

# Adicionado validações a nossa API 

No arquivo `create-user.dto.ts` 

```ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome deve ser uma string' })
  name: string;

  @IsEmail({ require_tld: true }, { message: 'Email inválido' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  password: string;
}

```
---
### Injetando a dependência do Repository no Service para poder trabalhar com o a entidade no banco de dados

[user.service.ts](https://gist.github.com/oAllanWeb/764a36eed5764f0718236f0e00c89dbc
)

```ts
// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

// @Injectable()
// export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  // create(dto: CreateUserDto) {
  //   const user = this.repository.create(dto);
  //   return this.repository.save(user);
  // }

  // ...
// }


```

---


# Editando o controller 

 [user.controller.ts](https://gist.github.com/oAllanWeb/65026adf572da73da9cf8d3ed8fe43be)


---
- Repositório de exemplo: https://github.com/ADS-Unipar/nest-js-api

- Referências: 
  - https://www.youtube.com/watch?v=dFFpjjD9cj4
  - https://docs.nestjs.com/
---

# Tarefa 

- Adicione criptografia na senha
- Acrescente JWT Auth 
- Adicione esquema de login com os dados do usuário
- Adicione necessidade da autenticação para editar o usuário 