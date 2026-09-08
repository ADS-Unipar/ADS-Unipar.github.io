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

# Aula 19

## Por que criar um Framework?

**Unidade 4 — Por que desenvolver seu próprio Framework?**

<!--
FALA DO PROFESSOR:

Bem-vindos à Unidade 4 — a unidade mais desafiadora e mais reveladora da disciplina. Nas unidades anteriores, estudamos frameworks existentes. Agora vamos inverter a perspectiva: vamos entender como frameworks são construídos — e construir o nosso próprio.

Mas antes de construir, precisamos responder à pergunta: por que alguém criaria um framework novo em vez de usar um existente?
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** as motivações para criar um framework próprio;
- **Analisar** cenários em que um framework personalizado é justificável;
- **Avaliar** vantagens e desvantagens de criar versus usar;
- **Projetar** os requisitos de um mini framework.

**Taxonomia de Bloom:** Compreender, Analisar, Avaliar, Projetar.

---

## Motivações para Criar um Framework

| Motivação | Descrição |
|-----------|-----------|
| **Aprendizado** | Entender como frameworks funcionam por dentro |
| **Necessidade específica** | Nenhum framework existente atende o problema |
| **Performance** | Framework genérico é pesado para o caso |
| **Controle** | Total controle sobre o código e decisões |
| **Simplificação** | Reduzir complexidade de frameworks grandes |

<!--
FALA DO PROFESSOR:

Existem várias motivações para criar um framework. A primeira e mais importante para nós é aprendizado. Quando você constrói um framework, entende como roteamento funciona, como middlewares são processados, como controllers orquestram fluxos. Esse conhecimento é inestimável — mesmo que você nunca crie um framework para produção.

A segunda motivação é necessidade específica. Às vezes, nenhum framework existente atende bem ao problema. Frameworks genéricos são projetados para serem amplos — mas isso significa que podem ser overkill para problemas específicos.

A terceira é performance. Frameworks genéricos adicionam overhead — camadas de abstração, parsing, validação. Para casos extremos de performance, um framework minimalista pode ser mais eficiente.

A quarta é controle. Quando você usa um framework de terceiros, está dependente das decisões de outra pessoa. Se o framework for descontinuado, se mudar a API, se introduzir um bug — você é afetado. Com seu próprio framework, você tem controle total.

A quinta é simplificação. Frameworks como Express são minimalistas, mas frameworks como NestJS ou Django são complexos. Para projetos pequenos, um mini framework com apenas o essencial pode ser mais adequado.
-->

---

## Quando NÃO criar um Framework

| Cenário | Recomendação |
|---------|--------------|
| Framework existente atende 90%+ do problema | Use o existente |
| Equipe pequena com prazo apertado | Use o existente |
| Não há experiência com arquitetura de frameworks | Estude primeiro |
| O projeto precisa de suporte da comunidade | Use o existente |
| O objetivo é apenas "reinventar a roda" | Use o existente |

> **Princípio:** Crie um framework apenas quando houver uma **razão técnica válida**, não por ego ou curiosidade.

<!--
FALA DO PROFESSOR:

É importante saber quando NÃO criar um framework. Se o Express atende 90% do seu problema, use o Express. Se a equipe é pequena e o prazo é apertado, use o existente. Se você não tem experiência com arquitetura de frameworks, estude primeiro.

Criar um framework é uma atividade educacional poderosa, mas para produção, a maioria dos projetos se beneficia de frameworks maduros e testados pela comunidade.

O objetivo desta unidade não é que você substitua o Express pelo seu framework. É que você entenda como o Express funciona por dentro — construindo algo semelhante em escala menor.
-->

---

## O que vamos construir

**Mini Framework Back-End:**

```
Requisição
   ↓
Router         → Mapear URL + Método para handler
   ↓
Middleware     → Processar antes do handler
   ↓
Controller     → Orquestrar fluxo
   ↓
Response       → Devolver ao cliente
```

- Inspirado no **Express.js**;
- Implementado do zero com **Node.js puro** (http module);
- Com **roteamento**, **middlewares** e **parâmetros de URL**.

<!--
FALA DO PROFESSOR:

Vamos construir um mini framework back-end inspirado no Express. Ele será implementado do zero, usando apenas o módulo http do Node.js — sem dependências externas.

O framework terá três funcionalidades principais: roteamento (mapear URLs para handlers), middlewares (funções que processam antes do handler) e parâmetros de URL (extrair valores da URL).

Não vamos reimplementar o Express inteiro. Vamos implementar apenas o essencial — o suficiente para entender como ele funciona por dentro.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Existem **motivações válidas** para criar um framework: aprendizado, necessidade, performance, controle;
2. **Nem sempre** é necessário criar — frameworks existentes são maduros e testados;
3. O objetivo é **entender como funcionam**, não substituir;
4. Vamos construir um **mini framework** com roteamento, middlewares e parâmetros;
5. A construção é uma **experiência de aprendizado** fundamental.

---

**Pergunta reflexiva:**

> Se você entende como um framework funciona por dentro, como isso muda a forma como você o utiliza?

**Próxima aula:** Vantagens e desvantagens — Vamos aprofundar a análise de trade-offs.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva é a mais importante da disciplina. Quando você entende como o Express funciona por dentro — como ele faz roteamento, como processa middlewares, como extrai parâmetros — você deixa de ser um usuário passivo e se torna um usuário consciente.

Na próxima aula, vamos aprofundar as vantagens e desvantagens de criar um framework.
-->

---

<!-- _class: bg-fim -->

#
