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
  h1 {
    font-family: 'Century Gothic', 'Calibri', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #272425;
    text-align: left;
  }
  h2 {
    font-family: 'Century Gothic', 'Calibri', sans-serif;
    font-size: 29px;
    font-weight: bold;
    color: #C22820;
    text-align: left;
  }
  h3 {
    font-family: 'Calibri', 'Century Gothic', sans-serif;
    font-size: 26px;
    font-weight: bold;
    color: #5C2034;
    text-align: left;
  }
  strong {
    color: #C22820;
  }
  em {
    color: #5C2034;
  }
  code {
    font-size: 22px;
    background-color: #f5f5f5;
    color: #5C2034;
  }
  pre {
    font-size: 20px;
    background-color: #f5f5f5;
    border-left: 4px solid #C22820;
  }
  table {
    font-size: 24px;
  }
  th {
    background-color: #C22820;
    color: #ffffff;
    font-weight: bold;
  }
  td {
    border-bottom: 1px solid #e0e0e0;
  }
  ul, ol {
    text-align: justify;
  }
  li {
    margin-bottom: 6px;
  }
  blockquote {
    border-left: 4px solid #EB8087;
    background-color: #fdf2f2;
    padding: 10px 20px;
  }
  footer {
    font-size: 16px;
    color: #999999;
  }
  header {
    font-size: 16px;
    color: #999999;
  }
  section.bg-capa {
    background-image: url('bg-capa.png');
    background-size: cover;
    background-position: center;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  section.bg-capa h1 {
    text-align: center;
    font-size: 32px;
    color: #ffffff;
  }
  section.bg-capa h2 {
    text-align: center;
    font-size: 29px;
    color: #ffffff;
  }
  section.aula-titulo {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  section.aula-titulo h1 {
    text-align: center;
    font-size: 32px;
    color: #C22820;
  }
  section.bg-fim {
    background-image: url('bg-fim.png');
    background-size: cover;
    background-position: center;
  }
---

<!-- _class: bg-capa -->

# Aula 04

## Como Front-End e Back-End se comunicam?

**Unidade 1 — Back-End e Front-End**

<!--
FALA DO PROFESSOR:

Nas aulas anteriores, estudamos o Front-End e o Back-End separadamente. Agora vamos conectar as duas pontas.

A comunicação entre Front-End e Back-End é o que transforma duas camadas independentes em uma aplicação funcional. Sem essa comunicação, o Front-End seria uma página estática e o Back-End seria um servidor sem clientes.

Nesta aula, vamos estudar o protocolo HTTP em detalhes, entender o que é uma API REST, conhecer os métodos HTTP e aprender como os dados trafegam entre cliente e servidor.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Explicar** o protocolo HTTP e seus métodos;
- **Identificar** os componentes de uma requisição e uma resposta HTTP;
- **Compreender** o conceito de API RESTful;
- **Aplicar** os métodos HTTP (GET, POST, PUT, DELETE) em exemplos práticos;
- **Analisar** a estrutura de uma comunicação cliente-servidor.

**Taxonomia de Bloom:** Explicar, Identificar, Compreender, Aplicar, Analisar.

<!--
FALA DO PROFESSOR:

Esta aula é central para a disciplina. A comunicação HTTP é o mecanismo que permite ao Front-End e ao Back-End trocarem dados. Sem ela, não existe aplicação web dinâmica.

Observe que os objetivos incluem "aplicar" e "analisar". Não basta saber o que é HTTP — é preciso saber utilizá-lo e interpretar o que acontece em cada requisição.

Vamos começar pelo protocolo e depois avançar para APIs REST.
-->

---

## O Protocolo HTTP

- **HTTP** = HyperText Transfer Protocol;
- Protocolo de **comunicação** entre cliente (navegador) e servidor;
- Baseado em **requisição** e **resposta**;
- É **stateless**: não mantém estado entre requisições;
- Opera, por padrão, na **porta 80** (HTTP) ou **443** (HTTPS).

```
CLIENTE                          SERVIDOR
   │                                │
   │──── Requisição HTTP ─────────►│
   │                                │
   │◄──── Resposta HTTP ───────────│
   │                                │
```

<!--
FALA DO PROFESSOR:

HTTP é o protocolo que rege toda a comunicação na web. Toda vez que você acessa um site, envia um formulário ou carrega uma imagem, o navegador está fazendo uma requisição HTTP.

O protocolo é baseado em um modelo simples: o cliente envia uma requisição e o servidor devolve uma resposta. Não existe comunicação "ao contrário" — o servidor não pode iniciar uma conversa com o cliente. É sempre o cliente quem começa.

Um conceito crucial é o de "stateless". O HTTP não mantém memória entre requisições. Se o cliente enviar duas requisições seguidas, o servidor não sabe que são do mesmo usuário — a menos que mecanismos como cookies, sessões ou tokens sejam utilizados.

Analogia: pense no HTTP como um carteiro. Você escreve uma carta (requisição), o carteiro entrega ao destinatário (servidor), o destinatário escreve uma resposta e o carteiro devolve para você. Cada carta é independente — o carteiro não lembra da carta anterior.

HTTPS é a versão segura do HTTP. A diferença é que os dados são criptografados durante o transporte. Em produção, sempre use HTTPS.
-->

---

## Componentes da Requisição HTTP

```
POST /api/usuarios HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...

{
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

| Componente | Descrição | Exemplo |
|------------|-----------|---------|
| **Método** | Ação a ser executada | POST |
| **URL/Path** | Recurso acessado | /api/usuarios |
| **Headers** | Metadados da requisição | Content-Type, Authorization |
| **Body** | Dados enviados (quando aplicável) | JSON com nome e email |

<!--
FALA DO PROFESSOR:

Vamos analisar os componentes de uma requisição HTTP.

O método indica a ação que o cliente quer executar. POST significa "criar um novo recurso". Veremos os métodos em detalhes no próximo slide.

A URL (ou path) indica qual recurso está sendo acessado. No exemplo, /api/usuarios indica que queremos acessar o recurso "usuários" na API.

Os headers são metadados da requisição. Content-Type diz ao servidor qual o formato dos dados enviados — no caso, application/json. Authorization contém o token de autenticação do usuário.

O body contém os dados propriamente ditos. Nem todos os métodos têm body — GET e DELETE geralmente não têm. POST e PUT geralmente têm.

Quando o servidor recebe essa requisição, ele interpreta cada componente para saber o que fazer: qual ação executar (método), em qual recurso (URL), com quais dados (body) e de qual usuário (headers de autenticação).
-->

---

## Métodos HTTP

| Método | Ação | CRUD | Exemplo |
|--------|------|------|---------|
| **GET** | Ler/Listar | Read | `GET /api/usuarios` |
| **POST** | Criar | Create | `POST /api/usuarios` |
| **PUT** | Atualizar (completo) | Update | `PUT /api/usuarios/1` |
| **PATCH** | Atualizar (parcial) | Update | `PATCH /api/usuarios/1` |
| **DELETE** | Excluir | Delete | `DELETE /api/usuarios/1` |

- **GET:** não altera dados, é **idempotente** (repetir retorna o mesmo resultado);
- **POST:** cria um novo recurso, **não** é idempotente;
- **PUT:** atualiza todo o recurso, é idempotente;
- **DELETE:** remove o recurso, é idempotente.

<!--
FALA DO PROFESSOR:

Os métodos HTTP são a forma como o cliente comunica ao servidor o que quer fazer. Eles se alinham diretamente com as operações CRUD — Create, Read, Update, Delete.

GET é o método mais utilizado. Toda vez que você digita uma URL no navegador, está fazendo um GET. Ele busca dados sem alterar nada no servidor. É idempotente — se você fizer a mesma requisição GET 10 vezes, o resultado será o mesmo (desde que os dados não tenham sido alterados por outra operação).

POST é utilizado para criar novos recursos. Quando você preenche um formulário de cadastro e clica em "enviar", geralmente é um POST. Não é idempotente — se você enviar o mesmo POST 10 vezes, pode criar 10 registros diferentes.

PUT atualiza um recurso existente de forma completa. Você envia todos os dados do recurso, mesmo os que não foram alterados. É idempotente — enviar o mesmo PUT 10 vezes produz o mesmo resultado.

PATCH atualiza parcialmente. Você envia apenas os campos que deseja alterar. É mais eficiente quando você quer mudar apenas um campo.

DELETE remove um recurso. É idempotente — deletar algo que já foi deletado não causa erro (o recurso simplesmente não existe mais).

A escolha do método correto é fundamental para que a API seja coerente e previsível.
-->

---

## Componentes da Resposta HTTP

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

| Componente | Descrição | Exemplo |
|------------|-----------|---------|
| **Status Code** | Resultado da operação | 201 Created |
| **Headers** | Metadados da resposta | Content-Type |
| **Body** | Dados retornados | JSON com o usuário criado |

<!--
FALA DO PROFESSOR:

Assim como a requisição, a resposta HTTP também possui componentes bem definidos.

O status code é o número que indica o resultado da operação. 201 significa "Created" — o recurso foi criado com sucesso. Vamos ver os principais status codes no próximo slide.

Os headers da resposta contêm metadados, como o formato dos dados (Content-Type), informações de cache, cookies, etc.

O body contém os dados propriamente ditos. No exemplo, o servidor devolve o objeto do usuário que foi criado, incluindo o ID gerado automaticamente.

Uma boa prática é sempre devolver o objeto criado ou atualizado no body da resposta. Isso permite que o Front-End atualize a interface sem precisar fazer uma nova requisição GET.
-->

---

## Status Codes HTTP

| Faixa | Significado | Exemplos |
|-------|-------------|----------|
| **1xx** | Informacional | 100 Continue |
| **2xx** | Sucesso | 200 OK, 201 Created, 204 No Content |
| **3xx** | Redirecionamento | 301 Moved, 304 Not Modified |
| **4xx** | Erro do cliente | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| **5xx** | Erro do servidor | 500 Internal Server Error, 503 Service Unavailable |

<!--
FALA DO PROFESSOR:

Os status codes são fundamentais para a comunicação entre cliente e servidor. Eles informam ao Front-End o que aconteceu com a requisição.

Os códigos 2xx indicam sucesso. 200 OK é o mais comum — significa que a requisição foi processada com sucesso. 201 Created indica que um novo recurso foi criado (usado após POST). 204 No Content indica sucesso, mas sem dados no body (usado após DELETE).

Os códigos 4xx indicam erro do cliente — algo que o Front-End (ou o usuário) fez de errado. 400 Bad Request significa que os dados enviados são inválidos. 401 Unauthorized significa que o usuário não está autenticado. 403 Forbidden significa que o usuário está autenticado, mas não tem permissão. 404 Not Found significa que o recurso não existe.

Os códigos 5xx indicam erro do servidor — algo que deu errado no Back-End. 500 Internal Server Error é o mais genérico. 503 Service Unavailable indica que o servidor está temporariamente indisponível.

Um desenvolvedor que conhece os status codes consegue diagnosticar problemas rapidamente. Se o Front-End recebe um 401, sabe que precisa autenticar o usuário. Se recebe um 404, sabe que o recurso não existe. Se recebe um 500, sabe que o problema está no servidor.
-->

---

## O que é uma API?

- **API** = Application Programming Interface;
- É um **contrato** de comunicação entre sistemas;
- Define **endpoints** (URLs), **métodos** (HTTP) e **formatos** (JSON);
- O Front-End **consome** a API; o Back-End **expõe** a API.

```
┌──────────┐         ┌──────────┐         ┌──────────┐
│ FRONT-END│ ──API──►│ BACK-END │ ──SQL──►│ BANCO DE │
│          │ ◄────── │          │ ◄────── │ DADOS    │
└──────────┘         └──────────┘         └──────────┘
```

> **Analogia:** A API é como o cardápio de um restaurante. Ele lista o que está disponível (endpoints), como pedir (métodos) e o que esperar como resultado (formato).

<!--
FALA DO PROFESSOR:

API — Application Programming Interface — é um dos conceitos mais importantes da disciplina. Vamos desmontar o termo.

"Application" refere-se ao sistema. "Programming" indica que é uma interface para programadores, não para usuários finais. "Interface" é o ponto de contato entre dois sistemas.

No contexto web, quando falamos de API, geralmente nos referimos a uma API REST — uma interface que utiliza HTTP para comunicação e JSON para troca de dados.

A API é o contrato entre Front-End e Back-End. Ela define: quais URLs estão disponíveis (endpoints), quais métodos HTTP podem ser utilizados (GET, POST, PUT, DELETE), quais dados devem ser enviados (formato do body) e quais dados serão retornados (formato da resposta).

Analogia: pense na API como o cardápio de um restaurante. O cardápio lista os pratos disponíveis (endpoints), diz como pedir ("para o prato X, informe o ponto da carne" — parâmetros) e descreve o que você receberá ("filé grelhado com arroz e salada" — resposta). Você não precisa saber como a cozinha prepara o prato — você apenas segue o cardápio.

Essa separação é poderosa. O Front-End não precisa saber como o Back-End funciona internamente. Ele apenas precisa conhecer o contrato (a API). Isso permite que as equipes trabalhem de forma independente.
-->

---

## API RESTful

- **REST** = Representational State Transfer;
- Estilo arquitetônico para APIs baseado em HTTP;
- Princípios fundamentais:

| Princípio | Descrição |
|-----------|-----------|
| **Stateless** | Cada requisição contém todas as informações necessárias |
| **Recursos** | Tudo é identificado por uma URL (/api/usuarios/1) |
| **Métodos HTTP** | Ações são representadas pelos métodos (GET, POST, PUT, DELETE) |
| **Representações** | Dados são representados em JSON (ou XML) |

<!--
FALA DO PROFESSOR:

REST não é um protocolo — é um estilo arquitetônico. Foi descrito por Roy Fielding em sua tese de doutorado em 2000. REST define um conjunto de restrições que, quando seguidas, resultam em APIs escaláveis, flexíveis e de fácil compreensão.

O primeiro princípio é stateless: cada requisição deve conter todas as informações necessárias para ser processada. O servidor não guarda estado entre requisições. Se o usuário está autenticado, o token de autenticação deve ser enviado em cada requisição.

O segundo princípio é que tudo é um recurso. Usuários são um recurso. Produtos são um recurso. Pedidos são um recurso. Cada recurso é identificado por uma URL única: /api/usuarios, /api/usuarios/1, /api/produtos.

O terceiro princípio é que as ações são representadas pelos métodos HTTP. Para listar usuários, use GET. Para criar, use POST. Para atualizar, use PUT. Para deletar, use DELETE.

O quarto princípio é que os dados são representados em um formato padrão — geralmente JSON. O cliente envia JSON e recebe JSON.

Uma API que segue esses princípios é chamada de "RESTful". Nem toda API HTTP é RESTful — muitas APIs violam esses princípios e ainda funcionam, mas perdem os benefícios do estilo REST.
-->

---

## Exemplo Prático: Requisição e Resposta

**Front-End (JavaScript):**
```javascript
// Requisição GET para listar usuários
fetch('/api/usuarios')
  .then(response => response.json())
  .then(usuarios => {
    console.log(usuarios);
    // Atualizar a interface com os dados
  })
  .catch(error => console.error('Erro:', error));
```

**Back-End (Express):**
```javascript
// Rota GET para listar usuários
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});
```

<!--
FALA DO PROFESSOR:

Vamos ver um exemplo completo de comunicação entre Front-End e Back-End.

No Front-End, utilizamos a API fetch() para enviar uma requisição GET para /api/usuarios. O fetch retorna uma Promise. O primeiro .then converte a resposta para JSON. O segundo .then recebe os dados e pode atualizar a interface. O .catch trata erros — por exemplo, se o servidor estiver offline.

No Back-End, temos uma rota GET em /api/usuarios. Quando o servidor recebe essa requisição, ele executa o handler que devolve o array de usuários em formato JSON.

Observe a simplicidade. Em poucas linhas de cada lado, temos uma comunicação funcional. O Front-End pede dados, o Back-End devolve dados. O contrato é claro: GET /api/usuarios retorna um array de objetos JSON.

Em uma aplicação real, haveria validação, autenticação, paginação, filtros e tratamento de erros mais sofisticados. Mas o princípio é o mesmo.

Um ponto importante: o fetch() é assíncrono. Isso significa que o JavaScript não "para" enquanto espera a resposta. Ele continua executando e, quando a resposta chega, o callback é chamado. Isso é fundamental para a experiência do usuário — a página não trava enquanto espera o servidor.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. **HTTP** é o protocolo de comunicação entre cliente e servidor;
2. Uma requisição HTTP possui **método**, **URL**, **headers** e **body**;
3. Os **métodos HTTP** (GET, POST, PUT, DELETE) correspondem às operações CRUD;
4. Uma **API RESTful** é uma interface baseada em HTTP e JSON;
5. O **fetch()** é o mecanismo do JavaScript para enviar requisições HTTP.

**Pergunta reflexiva:**

> Por que o HTTP é stateless? Quais são as vantagens e desvantagens dessa característica?

**Próxima aula:** AJAX e comunicação assíncrona — Vamos aprofundar a comunicação sem recarregar a página.

<!--
FALA DO PROFESSOR:

Encerramos mais uma aula. Os conceitos estudados hoje são a espinha dorsal da comunicação web. HTTP, métodos, status codes, APIs e REST — tudo isso será utilizado em todas as aulas seguintes.

A pergunta reflexiva convida você a pensar sobre o stateless. Por que o HTTP foi projetado assim? A principal vantagem é a escalabilidade: se o servidor não precisa guardar estado, qualquer servidor pode atender qualquer requisição. Isso facilita o balanceamento de carga e a distribuição de servidores. A desvantagem é que, para manter estado (como "usuário logado"), são necessários mecanismos adicionais como cookies e tokens.

Na próxima aula, vamos aprofundar a comunicação assíncrona com AJAX. Você vai entender como o Gmail consegue carregar novos e-mails sem recarregar a página.
-->

---

<!-- _class: bg-fim -->

#
