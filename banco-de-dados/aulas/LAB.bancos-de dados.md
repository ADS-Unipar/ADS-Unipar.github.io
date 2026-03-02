---
marp: true
theme: default
paginate: true
---

# 🐳 Laboratório Docker
## MySQL + PostgreSQL + Adminer

Professor: Allan da Silva  
Disciplina: Banco de Dados  

---

# 🎯 Objetivos da Aula

Ao final da aula o aluno será capaz de:

- Compreender containers no Docker
- Subir múltiplos bancos com Docker Compose
- Entender redes internas do Docker
- Conectar via Adminer
- Comparar MySQL e PostgreSQL

---

# 🧱 Arquitetura do Laboratório

```

Navegador
↓
Adminer (porta 8080)
↓
Rede Docker (aula_network)
↓
MySQL (3306)      PostgreSQL (5432)

````

---

# 📦 O que é Docker Compose?

Docker Compose permite:

- Orquestrar múltiplos containers
- Definir serviços em YAML
- Subir tudo com um único comando
- Criar redes automáticas

Comando principal:

```bash
docker compose up -d
````

---

# 📄 [docker-compose.yml(clique aqui)](https://gist.githubusercontent.com/oAllanWeb/26cc14e51bb9f5ea76d5b5aaaee3290d/raw/cc7afadc3da65c66925d4d6d0db359e01830609d/docker-compose.yml)
---

```yaml
version: '3.9'

services:

  mysql:
    image: mysql:8.0
    container_name: aula_mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: escola
      MYSQL_USER: aluno
      MYSQL_PASSWORD: aluno123
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - aula_network

  postgres:
    image: postgres:15
    container_name: aula_postgres
    restart: always
    environment:
      POSTGRES_DB: escola
      POSTGRES_USER: aluno
      POSTGRES_PASSWORD: aluno123
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - aula_network

  adminer:
    image: adminer
    container_name: aula_adminer
    restart: always
    ports:
      - "8080:8080"
    networks:
      - aula_network

volumes:
  mysql_data:
  postgres_data:

networks:
  aula_network:
    driver: bridge
```

---

# 🔍 Explicando Cada Parte

### services:

Define os containers que serão criados

### image:

Imagem oficial do Docker Hub

### environment:

Variáveis de ambiente (configuração do banco)

---
# 🔍 Explicando Cada Parte
### ports:

Mapeamento → `porta_host:porta_container`

### volumes:

Persistência de dados

### networks:

Comunicação entre containers

---

# 🌐 Acessando o Adminer

Abra no navegador:

```
http://localhost:8080
```

---

# 🔑 Conectando no MySQL

* Sistema: MySQL
* Servidor: mysql
* Usuário: aluno
* Senha: aluno123
* Banco: escola

---

# 🔑 Conectando no PostgreSQL

* Sistema: PostgreSQL
* Servidor: postgres
* Usuário: aluno
* Senha: aluno123
* Banco: escola

---

# ⚠️ Atenção Importante

Dentro do Adminer:

❌ NÃO usar `localhost`
✅ Usar o nome do serviço (`mysql` ou `postgres`)

Porque os containers se comunicam pela rede interna.

---

# 🧠 Comparação Rápida

| MySQL                         | PostgreSQL                           |
| ----------------------------- | ------------------------------------ |
| Muito usado em aplicações web | Muito usado em sistemas corporativos |
| Simples e popular             | Mais robusto e avançado              |
| AUTO_INCREMENT                | SERIAL                               |

---

# 🧪 Atividade Prática

1. Criar tabela `alunos`
2. Inserir 5 registros
3. Criar SELECT com WHERE
4. Criar relacionamento entre tabelas
5. Testar persistência (docker down e up)

---

# 🛑 Parar Ambiente

```bash
docker compose down
```

Para remover volumes:

```bash
docker compose down -v
```

---

# 🚀 Conclusão

Hoje aprendemos:

* Docker Compose
* Rede Docker
* Volumes
* Administração de banco via Adminer
* Diferenças entre MySQL e PostgreSQL

---

# ❓ Dúvidas?


