---
marp: true
theme: default
paginate: false

style: |
  section {
    font-family: 'Calibri', 'Century Gothic', sans-serif;
    font-size: 26px;
    text-align: justify;
    color: #272425;
    background-image: url('bg-padrao.png');
    background-size: cover;
    background-position: center;
  }
  h1 { font-family: 'Century Gothic', 'Calibri', sans-serif; font-size: 32px; font-weight: bold; color: #272425; text-align: left; }
  h2 { font-family: 'Century Gothic', 'Calibri', sans-serif; font-size: 29px; font-weight: bold; color: #C22820; text-align: left; }
  h3 { font-family: 'Calibri', 'Century Gothic', sans-serif; font-size: 26px; font-weight: bold; color: #5C2034; text-align: left; }
  strong { color: #C22820; }
  em { color: #5C2034; }
  code { font-size: 22px; background-color: #f5f5f5; color: #5C2034; }
  pre { font-size: 20px; background-color: #f5f5f5; border-left: 4px solid #C22820; }
  table { font-size: 24px; }
  th { background-color: #C22820; color: #ffffff; font-weight: bold; }
  td { border-bottom: 1px solid #e0e0e0; }
  ul, ol { text-align: justify; }
  li { margin-bottom: 6px; }
  blockquote { border-left: 4px solid #EB8087; background-color: #fdf2f2; padding: 10px 20px; }
  section.bg-capa { background-image: url('bg-capa.png'); background-size: cover; background-position: center; text-align: center; justify-content: center; align-items: center; }
  section.bg-capa h1 { text-align: center; font-size: 32px; color: #ffffff; }
  section.bg-capa h2 { text-align: center; font-size: 29px; color: #ffffff; }
  section.bg-fim { background-image: url('bg-fim.png'); background-size: cover; background-position: center; }
---

<!-- _class: bg-capa -->

# Atividade Prática Orientada

## Unidade 2 — Frameworks

### Construção de uma aplicação com arquitetura em camadas usando Express

<!--
FALA DO PROFESSOR:

Bem-vindo à Atividade Prática Orientada da Unidade 2. Nesta atividade, você vai aplicar os conceitos de frameworks estudados nas aulas anteriores, construindo uma aplicação back-end com Express seguindo a arquitetura em camadas: Router, Controller, Service e Repository.

O objetivo é que você vivencie, na prática, como um framework organiza o código e como a separação de responsabilidades facilita a manutenção e os testes.
-->

---

## 1. Identificação da Atividade

| Item | Descrição |
|---|---|
| **Disciplina** | Desenvolvimento de Software (Back-End/Front-End) |
| **Unidade** | 2 — Frameworks |
| **Tipo** | Atividade Prática Orientada (APO) |
| **Carga horária** | 10 horas |
| **Modalidade** | Individual ou dupla |
| **Entrega** | Repositório público no GitHub + README documentado |

<!--
FALA DO PROFESSOR:

A entrega é composta pelo código-fonte em um repositório público no GitHub e um README documentado explicando a estrutura do projeto, as decisões técnicas e como rodar a aplicação.
-->

---

## 2. Contextualização

Você foi contratado(a) como desenvolvedor(a) back-end para construir a **API de um sistema de biblioteca**. A API deve permitir o gerenciamento de **livros** e **autores**, seguindo uma arquitetura em camadas com Express.

> **Por que esta atividade existe?**
> Para que você aplique, na prática, os conceitos de framework estudados na Unidade 2 — Router, Controller, Service, Repository e Middleware — em um cenário profissional real.

<!--
FALA DO PROFESSOR:

O cenário é profissional: uma API de biblioteca. Isso envolve dois recursos (livros e autores) com relacionamento entre eles. É mais complexo que a atividade da Unidade 1, pois exige pensar em arquitetura e organização.
-->

---

## 3. Objetivos de Aprendizagem

Ao concluir esta atividade, o estudante deverá ser capaz de:

- **Implementar** uma API RESTful com Express seguindo arquitetura em camadas;
- **Separar** responsabilidades entre Router, Controller, Service e Repository;
- **Criar** middlewares para autenticação, validação e tratamento de erros;
- **Projetar** endpoints REST para múltiplos recursos relacionados;
- **Documentar** a API com README e comentários claros.

**Taxonomia de Bloom:** Aplicar, Analisar, Projetar.

---

## 4. Requisitos Funcionais

A API deve gerenciar dois recursos:

### Autores

| Método | Rota | Ação |
|--------|------|------|
| GET | `/api/autores` | Listar todos os autores |
| GET | `/api/autores/:id` | Buscar autor por ID |
| POST | `/api/autores` | Cadastrar autor |
| PUT | `/api/autores/:id` | Atualizar autor |
| DELETE | `/api/autores/:id` | Excluir autor |

### Livros

| Método | Rota | Ação |
|--------|------|------|
| GET | `/api/livros` | Listar todos os livros |
| GET | `/api/livros/:id` | Buscar livro por ID |
| POST | `/api/livros` | Cadastrar livro (com ID do autor) |
| PUT | `/api/livros/:id` | Atualizar livro |
| DELETE | `/api/livros/:id` | Excluir livro |

---

## 5. Requisitos Não-Funcionais

- **Arquitetura em camadas:** Router → Controller → Service → Repository;
- **Middleware de log:** registrar método, URL e data/hora de cada requisição;
- **Middleware de validação:** validar dados antes de criar/atualizar;
- **Middleware de erro:** tratar erros centralmente;
- **Persistência em memória** (arrays);
- **Organização de pastas** seguindo o padrão do framework;
- **README** com documentação do projeto.

---

## 6. Estrutura Esperada

```
biblioteca-api/
├── src/
│   ├── routes/
│   │   ├── autores.js
│   │   └── livros.js
│   ├── controllers/
│   │   ├── autorController.js
│   │   └── livroController.js
│   ├── services/
│   │   ├── autorService.js
│   │   └── livroService.js
│   ├── repositories/
│   │   ├── autorRepository.js
│   │   └── livroRepository.js
│   └── middlewares/
│       ├── logger.js
│       ├── validarAutor.js
│       ├── validarLivro.js
│       └── errorHandler.js
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

---

## 7. Critérios de Avaliação

| Critério | Peso | Descrição |
|----------|------|-----------|
| Arquitetura em camadas | 30% | Separação correta entre Router, Controller, Service, Repository |
| Funcionalidade | 25% | Todas as rotas funcionando corretamente |
| Middlewares | 20% | Logger, validação e tratamento de erros implementados |
| Organização do código | 15% | Pastas, nomes, convenções |
| Documentação | 10% | README completo e claro |

---

## 8. Resultado Esperado

Ao finalizar a atividade, o estudante deverá ter:

- Uma API RESTful completa com 10 endpoints;
- Arquitetura em camadas com separação de responsabilidades;
- Middlewares funcionais (log, validação, erro);
- Código organizado em pastas separadas;
- README documentando o projeto.

<!--
FALA DO PROFESSOR:

Esta atividade é um passo além da atividade da Unidade 1. Lá, construímos tudo em um único arquivo. Aqui, separamos em camadas. A comparação entre as duas abordagens é a melhor forma de perceber o valor dos frameworks.

Dediquem tempo para organizar o código. Não basta que funcione — ele precisa estar organizado seguindo a arquitetura em camadas.
-->

---

<!-- _class: bg-fim -->

#
