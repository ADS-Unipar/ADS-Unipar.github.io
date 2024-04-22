---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# Introdução aos Bancos de Dados Relacionais e SQL

---

# O que são Bancos de Dados Relacionais?

- Os bancos de dados relacionais são um tipo de banco de dados que armazena e organiza dados em tabelas relacionadas entre si.
- O modelo relacional foi proposto por Edgar F. Codd na década de 1970.

---

# Conceitos Fundamentais:

- **Tabelas:** Uma tabela é uma coleção de dados organizados em linhas e colunas. Cada linha representa uma entrada individual, e cada coluna representa um atributo.

- **Chave Primária:** Uma chave primária é um campo ou conjunto de campos que identifica exclusivamente cada registro em uma tabela.

- **Relacionamentos:** Relacionamentos são estabelecidos entre tabelas usando chaves estrangeiras. Isso permite conectar informações de diferentes tabelas.

---

# Linguagem SQL:

**SQL (Structured Query Language):** É uma linguagem de programação usada para gerenciar e manipular bancos de dados relacionais.

#### Operações Básicas:

- **SELECT:** Usado para recuperar dados de uma ou mais tabelas.
- **INSERT:** Usado para adicionar novos registros a uma tabela.
- **UPDATE:** Usado para modificar os dados existentes em uma tabela.
- **DELETE:** Usado para excluir registros de uma tabela.

---

#### Claúsulas Importantes:

- **WHERE:** Usado para filtrar registros com base em uma condição.
- **ORDER BY:** Usado para classificar os resultados de uma consulta.
- **GROUP BY:** Usado para agrupar linhas com base em um critério específico.
- **JOIN:** Usado para combinar dados de duas ou mais tabelas com base em uma condição de relacionamento.

---

### Exemplos de Consultas SQL:

```sql
  SELECT * FROM tabela;
```

Retorna todos os registros e colunas da tabela especificada.

```sql
SELECT coluna1, coluna2 FROM tabela WHERE condição;
```

Retorna apenas as colunas especificadas da tabela que atendem à condição especificada.

---

```sql
INSERT INTO tabela (coluna1, coluna2) VALUES (valor1, valor2);
```

Adiciona um novo registro à tabela com os valores especificados.

```sql
UPDATE tabela SET coluna1 = valor1 WHERE condição;
```

Atualiza os valores da coluna1 na tabela que atendem à condição especificada.

```sql
DELETE FROM tabela WHERE condição;
```

Exclui os registros da tabela que atendem à condição especificada.

---

# Bora pra praticar

- instalem o https://dbeaver.io/download/

- criem uma tabela `pessoa`

```sql
CREATE TABLE pessoa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20)
);
```

---

- criem uma tabela `carro`

```sql

CREATE TABLE carro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(100),
    ano INT,
    id_pessoa INT,
    FOREIGN KEY (id_pessoa) REFERENCES pessoa(id)
);

```
