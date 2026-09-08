# Revisão — Unidade 1: Back-End e Front-End

<!--
FALA DO PROFESSOR:

Esta é a revisão da Unidade 1. Utilize este material para consolidar os conceitos estudados nas seis aulas gravadas e na aula ao vivo. A revisão contém um resumo dos conceitos, um mapa conceitual, erros comuns, perguntas para reflexão e um checklist de aprendizagem.
-->

---

## Resumo dos Conceitos

### Aula 01 — Introdução ao Desenvolvimento Web

- Desenvolvimento de software é um **processo** que envolve análise, projeto, implementação, testes e manutenção;
- Aplicações web rodam no **navegador** e se comunicam com servidores via **HTTP**;
- A arquitetura **cliente-servidor** é o modelo fundamental da web;
- A web evoluiu de **estática** (1.0) para **dinâmica** (2.0) e **inteligente** (3.0);
- Existem diferentes paradigmas: **SPA**, **PWA**, **SSR**, **API-First**.

### Aula 02 — O que é Front-End?

- Front-End é a **camada de apresentação** — o que o usuário vê e interage;
- Três pilares: **HTML** (estrutura), **CSS** (estilo), **JavaScript** (comportamento);
- O **DOM** é a representação em árvore do HTML que permite manipulação dinâmica;
- **UI** (interface) e **UX** (experiência) são conceitos complementares;
- Responsabilidades incluem: estrutura, estilo, interatividade, responsividade e acessibilidade.

### Aula 03 — O que é Back-End?

- Back-End é a **camada de processamento** que roda no servidor;
- Responsável pela **lógica de negócio**, **banco de dados** e **segurança**;
- Tecnologias: **Node.js**, **Express**, **PHP**, **Django**, **Spring**;
- O **banco de dados** garante persistência (SQL ou NoSQL);
- O ciclo de vida de uma requisição envolve: recepção, middleware, rota, controller, service, repository, resposta.

### Aula 04 — Como Front-End e Back-End se comunicam?

- **HTTP** é o protocolo de comunicação cliente-servidor;
- Requisição possui: **método**, **URL**, **headers** e **body**;
- Métodos HTTP: **GET** (ler), **POST** (criar), **PUT** (atualizar), **DELETE** (excluir);
- **API RESTful** é uma interface baseada em HTTP e JSON;
- Status codes indicam o resultado: **2xx** (sucesso), **4xx** (erro do cliente), **5xx** (erro do servidor).

### Aula 05 — AJAX e Comunicação Assíncrona

- **AJAX** é a técnica de comunicação assíncrona sem recarregar a página;
- **Fetch API** é a forma moderna de fazer requisições HTTP no navegador;
- **async/await** simplifica código assíncrono;
- O **DOM** é atualizado dinamicamente com os dados recebidos;
- **Tratamento de erros** é essencial (try/catch, response.ok).

### Aula 06 — Boas Práticas em Front-End e Back-End

- Código é **lido** mais do que escrito — priorize legibilidade;
- **Separação de responsabilidades** em ambas as camadas;
- **Validação** deve acontecer no servidor (último bastião);
- **Organização de projeto** facilita manutenção;
- **Código limpo** é código compreensível por outros desenvolvedores.

---

## Mapa Conceitual

```
                    DESENVOLVIMENTO WEB
                           │
              ┌────────────┼────────────┐
              │            │            │
         FRONT-END     COMUNICAÇÃO   BACK-END
              │            │            │
        ┌─────┼─────┐      │      ┌─────┼─────┐
        │     │     │      │      │     │     │
       HTML  CSS   JS    HTTP    Node  Express DB
        │     │     │      │      │     │     │
     Estrutura│  Comport.  │   Servidor│  Dados
              │         AJAX/fetch     │
           Estilo      Assíncrono   Lógica
                                   Negócio
```

---

## Conceitos Fundamentais

| Conceito | Definição | Exemplo |
|----------|-----------|---------|
| **Cliente** | Navegador do usuário | Chrome, Firefox |
| **Servidor** | Máquina que processa requisições | Node.js, Apache |
| **HTTP** | Protocolo de comunicação | GET /api/usuarios |
| **API** | Contrato de comunicação entre sistemas | REST + JSON |
| **DOM** | Árvore do HTML em memória | document.querySelector() |
| **Fetch** | API do JS para requisições HTTP | fetch('/api/dados') |
| **CRUD** | Create, Read, Update, Delete | POST, GET, PUT, DELETE |
| **JSON** | Formato de troca de dados | {"nome": "Maria"} |
| **Middleware** | Função intermediária no servidor | express.json() |
| **Status Code** | Resultado da requisição | 200, 201, 400, 404, 500 |

---

## Erros Comuns

| Erro | Consequência | Correção |
|------|--------------|----------|
| Usar `div` para tudo | Semântica ruim | Usar tags semânticas |
| Não validar dados no servidor | Dados inválidos no banco | Validar sempre no Back-End |
| Não tratar erros do fetch | Bugs silenciosos | Usar try/catch |
| Hardcodar credenciais | Falha de segurança | Usar variáveis de ambiente |
| Commitar `.env` | Credenciais expostas | Usar .gitignore |
| Confundir autenticação com autorização | Falha de segurança | Implementar ambos |
| Não atualizar o DOM após operação | Interface desatualizada | Recarregar dados após cada operação |
| Usar XMLHttpRequest em vez de fetch | Código verboso | Preferir fetch com async/await |

---

## Perguntas para Reflexão

1. **Por que o HTTP é stateless?** Quais são as vantagens e desvantagens dessa característica?

2. **Se o Front-End pode ser contornado**, por que ainda validamos dados nele?

3. **Qual é a diferença** entre uma API REST e uma API que apenas usa HTTP?

4. **Por que separar Front-End e Back-End** em vez de ter tudo em um único sistema?

5. **Se AJAX não existisse**, como seria a experiência do usuário em aplicações como Gmail e Facebook?

6. **Por que o código limpo importa** se o computador não se importa com nomes de variáveis?

7. **Qual é o papel do middleware** no ciclo de vida de uma requisição?

8. **Por que usar HTTPS** em vez de HTTP? O que acontece sem criptografia?

---

## Checklist de Aprendizagem

Ao final da Unidade 1, o estudante deve ser capaz de:

- [ ] Explicar o que é desenvolvimento web e sua evolução;
- [ ] Descrever a arquitetura cliente-servidor;
- [ ] Identificar as três tecnologias do Front-End (HTML, CSS, JS);
- [ ] Explicar o que é o DOM e como o JavaScript o manipula;
- [ ] Descrever as responsabilidades do Back-End;
- [ ] Listar as principais tecnologias de Back-End;
- [ ] Explicar o protocolo HTTP e seus métodos;
- [ ] Diferenciar GET, POST, PUT e DELETE;
- [ ] Interpretar status codes HTTP;
- [ ] Explicar o que é uma API RESTful;
- [ ] Implementar requisições assíncronas com fetch();
- [ ] Usar async/await para simplificar código assíncrono;
- [ ] Tratar erros em requisições HTTP;
- [ ] Aplicar boas práticas de Front-End e Back-End;
- [ ] Organizar um projeto com Front-End e Back-End separados.

---

## Conexão com a Unidade 2

Na Unidade 1, construímos aplicações **manualmente** — definindo rotas, middlewares e controllers "do zero". Isso foi fundamental para compreender como as coisas funcionam por dentro.

Na **Unidade 2 — Frameworks**, vamos estudar como **frameworks** como Express, React e outros **organizam e automatizam** grande parte desse trabalho. Você vai perceber que muitas das tarefas que fizemos manualmente — roteamento, parsing de JSON, servir arquivos estáticos — são resolvidas automaticamente por frameworks.

> **Pergunta de transição:** Se já sabemos construir tudo manualmente, por que precisamos de frameworks?

<!--
FALA DO PROFESSOR:

Esta revisão cobre tudo o que estudamos na Unidade 1. Utilize o checklist para verificar se você atingiu todos os objetivos de aprendizagem. Se algum item não foi marcado, revise a aula correspondente.

As perguntas para reflexão não têm resposta única — o objetivo é estimular o pensamento crítico. Discuta com colegas, pesquise e forme sua própria opinião.

A conexão com a Unidade 2 é intencional. Na próxima unidade, vamos estudar frameworks — e você vai perceber que tudo o que fizemos manualmente na Unidade 1 tem equivalente em frameworks. Mas só porque você fez manualmente é que vai compreender o que o framework faz por você.

Bons estudos!
-->
