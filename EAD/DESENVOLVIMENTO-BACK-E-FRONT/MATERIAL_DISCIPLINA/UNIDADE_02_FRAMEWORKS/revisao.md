# Revisão — Unidade 2: Frameworks

<!--
FALA DO PROFESSOR:

Esta é a revisão da Unidade 2. Utilize este material para consolidar os conceitos estudados nas seis aulas gravadas e na aula ao vivo.
-->

---

## Resumo dos Conceitos

### Aula 07 — O que é um Framework?

- Framework é uma **estrutura de software** que fornece padrões, componentes e convenções;
- A diferença fundamental entre Framework e biblioteca é a **Inversão de Controle**;
- Em uma biblioteca, **você** controla o fluxo. Em um framework, **ele** controla;
- Frameworks impõem **restrições** em troca de **produtividade**.

### Aula 08 — Por que utilizar Frameworks?

- Eliminam **repetição** de código de infraestrutura;
- Fornecem **padronização** que facilita colaboração;
- Possuem **comunidade** ativa com documentação e plugins;
- Contribuem para **segurança** e **escalabilidade**;
- Nem sempre são a melhor escolha — avalie o **contexto**.

### Aula 09 — Estrutura de um Framework

- Componentes fundamentais: **Router**, **Middleware**, **Controller**, **Service**, **Repository**;
- O **Router** mapeia URLs para handlers;
- O **Middleware** processa requisições antes do handler;
- O **Controller** orquestra sem conter lógica de negócio;
- O **Service** contém a lógica de negócio;
- O **Repository** abstrai o acesso a dados.

### Aula 10 — Frameworks Back-End e Front-End

- Back-End: **Express**, **NestJS**, **Django**, **Flask**, **Spring**, **Laravel**, **Rails**;
- Front-End: **React**, **Angular**, **Vue.js**, **Svelte**, **Next.js**;
- Cada framework tem **filosofia** e **público-alvo** diferentes;
- A escolha depende do **contexto**, **equipe** e **requisitos**.

### Aula 11 — Pull-based × Push-based

- **Pull-based:** cliente puxa dados (HTTP, fetch);
- **Push-based:** servidor envia dados (WebSockets, SSE);
- Pull-based é **mais simples** e **mais escalável**;
- Push-based é **essencial** para tempo real;
- Muitas aplicações **combinam** os dois.

### Aula 12 — Como escolher um Framework?

- Critérios: comunidade, documentação, curva de aprendizagem, ecossistema, performance, escalabilidade, manutenção, licença;
- **Não existe framework universal**;
- Erros comuns: escolher por hype, ignorar a equipe, não avaliar ecossistema;
- A escolha deve ser **justificada tecnicamente**.

---

## Mapa Conceitual

```
                        FRAMEWORKS
                            │
              ┌─────────────┼─────────────┐
              │             │             │
         CONCEITO       ESTRUTURA      ESCOLHA
              │             │             │
        ┌─────┼─────┐   ┌──┼──┐      ┌───┼───┐
        │     │     │   │  │  │      │   │   │
       IoC  Vant.  Desv.R  M  C     Crit. Matriz
              │         │  │  │
         Produt.      Router│ Controller
         Padrão    Middleware│ Service
         Comun.           Repository
```

---

## Conceitos Fundamentais

| Conceito | Definição | Exemplo |
|----------|-----------|---------|
| **Framework** | Estrutura de software com padrões e convenções | Express, React, Django |
| **Biblioteca** | Conjunto de funções que você chama | Lodash, jQuery |
| **Inversão de Controle** | Framework chama seu código, não o contrário | app.get('/', handler) |
| **Router** | Mapeia URLs para handlers | app.get('/api/users') |
| **Middleware** | Função que processa antes do handler | express.json() |
| **Controller** | Orquestra requisição e resposta | req → service → res |
| **Service** | Lógica de negócio | validarDados() |
| **Repository** | Acesso a dados | db.query() |
| **Pull-based** | Cliente puxa dados | fetch('/api/users') |
| **Push-based** | Servidor envia dados | WebSocket.send() |

---

## Erros Comuns

| Erro | Consequência | Correção |
|------|--------------|----------|
| Usar framework sem entender fundamentos | Dependência sem compreensão | Estudar fundamentos primeiro |
| Escolher por hype | Tecnologia inadequada | Avaliar critérios objetivos |
| Não seguir convenções do framework | Código inconsistente | Respeitar as convenções |
| Colocar lógica de negócio no Controller | Código difícil de testar | Usar Service |
| Não usar middlewares | Código repetitivo | Extrair para middlewares |
| Ignorar a estrutura do framework | Projeto desorganizado | Seguir a estrutura padrão |

---

## Perguntas para Reflexão

1. **Se frameworks impõem restrições**, por que a maioria das equipes profissionais os utiliza?

2. **Qual é a diferença** entre Inversão de Controle e inversão de dependência?

3. **Por que separar Controller, Service e Repository** em vez de ter tudo em uma única função?

4. **Se você pudesse criar seu próprio framework**, quais componentes incluiria?

5. **Pull-based ou Push-based?** Para cada cenário abaixo, qual é mais adequado?
   - Lista de produtos de um e-commerce
   - Chat em tempo real
   - Dashboard com gráficos atualizados
   - Formulário de cadastro

6. **O que acontece** quando um componente do framework "invade" a responsabilidade de outro?

---

## Checklist de Aprendizagem

Ao final da Unidade 2, o estudante deve ser capaz de:

- [ ] Explicar o que é um framework e como difere de uma biblioteca;
- [ ] Descrever o princípio de Inversão de Controle;
- [ ] Listar as vantagens e desvantagens dos frameworks;
- [ ] Identificar os componentes internos de um framework;
- [ ] Explicar a função de Router, Middleware, Controller, Service e Repository;
- [ ] Listar os principais frameworks Back-End e Front-End;
- [ ] Diferenciar Pull-based de Push-based;
- [ ] Identificar critérios para escolha de um framework;
- [ ] Implementar uma aplicação com Express seguindo a estrutura de framework;
- [ ] Avaliar a qualidade de uma aplicação segundo critérios de framework.

---

## Conexão com a Unidade 3

Na Unidade 2, estudamos frameworks que organizam o desenvolvimento web. Aprendemos que frameworks fornecem estrutura, convenções e componentes reutilizáveis.

Na **Unidade 3 — Web Mobile e PWA**, vamos estudar como transformar aplicações web em experiências nativas em dispositivos móveis. Você vai aprender sobre responsividade, Mobile First, Progressive Web Apps, Service Workers e Manifest.

> **Pergunta de transição:** Se já temos uma aplicação web funcionando com framework, como fazê-la funcionar bem em um celular?

<!--
FALA DO PROFESSOR:

Esta revisão cobre tudo o que estudamos na Unidade 2. Utilize o checklist para verificar se você atingiu todos os objetivos de aprendizagem.

A conexão com a Unidade 3 é natural. Na próxima unidade, vamos estudar como adaptar aplicações web para dispositivos móveis — um tema cada vez mais importante, considerando que a maioria dos acessos à web hoje vem de celulares.

Bons estudos!
-->
