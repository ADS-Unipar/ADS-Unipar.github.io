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

## Unidade 4 — Framework Próprio

### Construção e extensão de um Mini Framework Back-End

<!--
FALA DO PROFESSOR:

Bem-vindo à Atividade Prática Orientada da Unidade 4 — a última atividade da disciplina. Nesta atividade, você vai estender o mini framework construído na aula ao vivo, adicionando funcionalidades que o aproximem de um framework real.
-->

---

## 1. Identificação da Atividade

| Item | Descrição |
|---|---|
| **Disciplina** | Desenvolvimento de Software (Back-End/Front-End) |
| **Unidade** | 4 — Framework Próprio |
| **Tipo** | Atividade Prática Orientada (APO) |
| **Carga horária** | 10 horas |
| **Modalidade** | Individual ou dupla |
| **Entrega** | Repositório público no GitHub + README + testes |

---

## 2. Contextualização

Você é um desenvolvedor(a) que participa de um time que precisa de um **framework back-end minimalista** para microsserviços. O time decidiu construir um framework próprio, pois os frameworks existentes são pesados demais para o caso de uso — uma API simples com poucas rotas e baixa latência.

> **Por que esta atividade existe?**
> Para que você aplique, na prática, os conceitos de arquitetura de frameworks estudados na Unidade 4 — construindo e estendendo um mini framework funcional.

---

## 3. Objetivos de Aprendizagem

Ao concluir esta atividade, o estudante deverá ser capaz de:

- **Estender** um mini framework com novas funcionalidades;
- **Implementar** middlewares customizados;
- **Projetar** uma API pública coerente;
- **Testar** o framework com uma aplicação de exemplo;
- **Documentar** a API do framework.

**Taxonomia de Bloom:** Aplicar, Analisar, Projetar.

---

## 4. Requisitos

### Funcionalidades do Framework

O mini framework deve suportar:

- [ ] **Rotas GET, POST, PUT, DELETE** com parâmetros de URL;
- [ ] **Middlewares globais** (app.use);
- [ ] **Middlewares de rota** (aplicados a rotas específicas);
- [ ] **res.json()** e **res.status()**;
- [ ] **req.params** (parâmetros de URL);
- [ ] **req.body** (corpo da requisição parseado como JSON);
- [ ] **Tratamento de erros** (middleware com 4 parâmetros);
- [ ] **Rota 404** (quando nenhuma rota corresponde).

### Aplicação de Exemplo

Construir uma aplicação de exemplo usando o framework:

- **API de livros** com CRUD completo;
- Middleware de log;
- Middleware de autenticação (token fixo);
- Tratamento de erros.

---

## 5. Estrutura Esperada

```
mini-framework/
├── src/
│   ├── index.js          ← Ponto de entrada do framework
│   ├── router.js         ← Router Engine
│   ├── pipeline.js       ← Middleware Pipeline
│   └── helpers.js        ← req.params, res.json, etc.
├── examples/
│   └── livros-api.js     ← Aplicação de exemplo
├── test/
│   └── framework.test.js ← Testes básicos
├── package.json
└── README.md
```

---

## 6. Critérios de Avaliação

| Critério | Peso | Descrição |
|----------|------|-----------|
| Funcionalidades implementadas | 30% | Rotas, middlewares, parâmetros, JSON |
| Qualidade do código | 25% | Organização, nomes, separação de responsabilidades |
| Aplicação de exemplo | 20% | API funcional usando o framework |
| Testes | 15% | Testes básicos do framework |
| Documentação | 10% | README com API e exemplos |

---

## 7. Resultado Esperado

Ao finalizar a atividade, o estudante deverá ter:

- Um mini framework funcional com Router e Middlewares;
- Uma aplicação de exemplo rodando sobre o framework;
- Testes básicos validando o funcionamento;
- README documentando a API do framework.

<!--
FALA DO PROFESSOR:

Esta é a atividade mais desafiadora da disciplina. Você vai estender o mini framework que construímos na aula ao vivo, adicionando funcionalidades que o aproximem de um framework real.

O mais importante não é que o framework seja perfeito — é que você entenda como cada componente funciona e como eles se conectam.

Dediquem tempo para organizar o código e escrever testes. A organização e os testes são tão importantes quanto as funcionalidades.
-->

---

<!-- _class: bg-fim -->

#
