---
marp: true
theme: default
paginate: true
---

# Entidades, Relacionamentos e DER
---

## O que é uma Entidade?

- **Entidade** é um objeto ou conceito do mundo real que pode ser identificado de forma única.
- Exemplos:  
  - Aluno  
  - Produto  
  - Funcionário  

---

## Tipos de Entidade

- **Entidade Forte**: Uma entidade que pode ser identificada de maneira única sem depender de outra entidade.
- **Entidade Fraca**: Depende de outra entidade para sua identificação.

---

## O que é um Relacionamento?

- **Relacionamento** é a associação entre duas ou mais entidades.
- Representa a forma como as entidades interagem entre si.
  
---

## Tipos de Relacionamento

- **Um para um (1:1)**: Uma entidade está relacionada a no máximo uma outra.
- **Um para muitos (1:N)**: Uma entidade está relacionada a várias outras, mas as outras estão relacionadas a no máximo uma.
- **Muitos para muitos (M:N)**: Uma entidade pode se relacionar com várias outras e vice-versa.

---

## O Diagrama de Entidade-Relacionamento (DER)

- O **DER** é uma representação gráfica de um banco de dados, onde entidades são representadas por retângulos e os relacionamentos por losangos.
- Ele é usado para modelar o relacionamento entre os dados.

---

## Componentes do DER

- **Entidades**: Representadas por retângulos.
- **Relacionamentos**: Representados por losangos.
- **Atributos**: Representados por elipses ligadas a entidades ou relacionamentos.
- **Cardinalidade**: Define o número de instâncias de uma entidade que podem estar associadas a outra.

---

## Exemplo de DER

```plaintext
  +------------+       +------------+
  |  Cliente   |-------|  Pedido    |
  +------------+       +------------+
        |                  |
        |                  |
     +------------+    +------------+
     |   Nome    |    |   Data     |
     +------------+    +------------+
```

- Neste exemplo, um cliente pode fazer muitos pedidos, mas cada pedido pertence a um único cliente.

---

## Notações de Cardinalidade

- **1:1**: Uma instância de uma entidade se relaciona com uma única instância de outra entidade.
- **1:N**: Uma instância de uma entidade pode se relacionar com várias instâncias de outra.
- **M:N**: Muitas instâncias de uma entidade podem se relacionar com muitas instâncias de outra.

---

## Exemplos de Relacionamentos no DER

- **1:1**: Cada funcionário tem um número de identificação único.
  
  ```plaintext
  +------------+     +--------------------+
  | Funcionário|-----| Identificação      |
  +------------+     +--------------------+
  ```
---

- **1:N**: Um autor pode escrever vários livros, mas um livro tem apenas um autor.
  
  ```plaintext
  +------------+     +------------+
  |  Autor     |-----|  Livro     |
  +------------+     +------------+
  ```
---

- **M:N**: Estudantes podem se inscrever em muitos cursos, e um curso pode ter muitos estudantes.
  
  ```plaintext
  +------------+     +------------+     +------------+
  | Estudante  |-----| Matrícula  |-----|  Curso     |
  +------------+     +------------+     +------------+
  ```

---

## Normalização e DER

- A **normalização** é o processo de estruturar os dados para evitar redundâncias e dependências indesejadas.
- No DER, a normalização pode ajudar a identificar e separar entidades relacionadas.

---

## Conclusão

- **Entidade** e **Relacionamento** são componentes fundamentais no modelo de dados.
- O **DER** é uma ferramenta essencial para representar e entender o banco de dados.
- Compreender os tipos de relacionamento e cardinalidade é crucial para modelar sistemas eficazmente.

---


# Tarefa: Criar um Diagrama de Entidade-Relacionamento (DER)

## Objetivo

O objetivo desta tarefa é criar um **Diagrama de Entidade-Relacionamento (DER)** para um sistema de **gestão de biblioteca**. Você deverá identificar as entidades principais, os relacionamentos entre elas e os atributos de cada entidade.

---


## Tarefa

1. Crie um DER para o sistema de gestão de biblioteca com base nas entidades e relacionamentos acima.


