# 📖 Desenvolvimento Back-End e Front-End

## Do Zero aos Frameworks — Um Guia Completo

**Disciplina:** Desenvolvimento de Software  
**Instituição:** UNIPAR — Análise e Desenvolvimento de Sistemas  
**Formato:** eBook Digital (Markdown)

---

## 📋 Sumário Geral

- [Prefácio](#prefácio)
- **PARTE I — Fundamentos: Back-End e Front-End**
  - [Capítulo 1 — Introdução ao Desenvolvimento Web](#capítulo-1--introdução-ao-desenvolvimento-web)
  - [Capítulo 2 — O que é Front-End?](#capítulo-2--o-que-é-front-end)
  - [Capítulo 3 — O que é Back-End?](#capítulo-3--o-que-é-back-end)
  - [Capítulo 4 — Como Front-End e Back-End se Comunicam](#capítulo-4--como-front-end-e-back-end-se-comunicam)
  - [Capítulo 5 — AJAX e Comunicação Assíncrona](#capítulo-5--ajax-e-comunicação-assíncrona)
  - [Capítulo 6 — Boas Práticas em Front-End e Back-End](#capítulo-6--boas-práticas-em-front-end-e-back-end)
  - [Capítulo 7 — Revisão da Parte I](#capítulo-7--revisão-da-parte-i)
- **PARTE II — Frameworks**
  - [Capítulo 8 — O que é um Framework?](#capítulo-8--o-que-é-um-framework)
  - [Capítulo 9 — Por que Utilizar Frameworks?](#capítulo-9--por-que-utilizar-frameworks)
  - [Capítulo 10 — Estrutura de um Framework](#capítulo-10--estrutura-de-um-framework)
  - [Capítulo 11 — Frameworks Back-End e Front-End](#capítulo-11--frameworks-back-end-e-front-end)
  - [Capítulo 12 — Pull-based × Push-based](#capítulo-12--pull-based--push-based)
  - [Capítulo 13 — Como Escolher um Framework](#capítulo-13--como-escolher-um-framework)
  - [Capítulo 14 — Revisão da Parte II](#capítulo-14--revisão-da-parte-ii)
- **PARTE III — Prática**
  - [Capítulo 15 — Atividade Prática: CRUD Full Stack](#capítulo-15--atividade-prática-crud-full-stack)
  - [Capítulo 16 — Atividade Prática: API com Framework](#capítulo-16--atividade-prática-api-com-framework)
- [Glossário](#glossário)
- [Referências](#referências)

---

# Prefácio

Este eBook foi elaborado como material de apoio para a disciplina de **Desenvolvimento de Software (Back-End/Front-End)** do curso de Análise e Desenvolvimento de Sistemas da UNIPAR. Ele reúne, em um único documento, todo o conteúdo das **Unidades 1 e 2** da disciplina, organizado de forma progressiva e didática.

### Como utilizar este material

O conteúdo está organizado em **dois grandes blocos**:

1. **Parte I — Fundamentos:** Constrói, do zero, o entendimento sobre como aplicações web funcionam — desde o conceito de desenvolvimento de software até a comunicação assíncrona entre Front-End e Back-End.

2. **Parte II — Frameworks:** Introduz o conceito de frameworks, demonstra por que são essenciais no desenvolvimento profissional e apresenta os principais frameworks do mercado.

3. **Parte III — Prática:** Apresenta duas atividades práticas orientadas que integram todos os conceitos estudados.

> **Princípio pedagógico adotado:** Primeiro compreendemos os fundamentos (Parte I), depois automatizamos com frameworks (Parte II), e por fim aplicamos em projetos reais (Parte III). Isso garante que o estudante entenda *o que* o framework faz antes de usá-lo.

### Pré-requisitos

- Conhecimentos básicos de lógica de programação
- Familiaridade com o uso de navegador e terminal
- Instalação do Node.js (versão LTS recomendada)

---

# PARTE I — Fundamentos: Back-End e Front-End

---

# Capítulo 1 — Introdução ao Desenvolvimento Web

## 1.1 O que é Desenvolvimento de Software?

Desenvolvimento de software é o **processo de criação, projeto, implementação e manutenção** de software. Envolve diversas etapas:

- **Análise:** entender o problema e os requisitos
- **Projeto (Design):** arquitetar a solução
- **Implementação:** escrever o código
- **Testes:** verificar se funciona corretamente
- **Implantação:** colocar em produção
- **Manutenção:** corrigir bugs e adicionar funcionalidades

O objetivo do desenvolvimento é **resolver problemas** ou atender necessidades por meio de sistemas computacionais. Pode resultar em aplicações desktop, mobile, web, embarcadas, entre outras.

> 💡 **Ponto-chave:** Desenvolvimento de software não é apenas "programar". Programar é uma das atividades dentro de um processo muito mais abrangente. Assim como construir uma casa não é apenas "bater martelo", desenvolver software não é apenas "escrever código".

## 1.2 O que é uma Aplicação Web?

Uma aplicação web é um software que funciona **no navegador** do usuário. Suas características principais são:

- **Não necessita de instalação local** — basta um navegador
- **Acessível de qualquer dispositivo** com conexão à internet
- **Centralizada no servidor** — atualizações são imediatas para todos os usuários

Exemplos: redes sociais (Facebook, Instagram), e-mails (Gmail), sistemas de gestão (ERP), lojas virtuais (Amazon), editores online (Google Docs, Figma).

### Arquitetura Cliente-Servidor

```
┌─────────────────┐                    ┌─────────────────┐
│     CLIENTE     │   Requisição HTTP  │     SERVIDOR    │
│                 │ ─────────────────► │                 │
│  - Navegador    │                    │  - Aplicação    │
│  - HTML/CSS/JS  │   Resposta HTTP    │  - Banco de     │
│  - Interface    │ ◄───────────────── │    Dados        │
│                 │                    │  - Lógica       │
└─────────────────┘                    └─────────────────┘
```

- **Cliente:** solicita serviços e exibe resultados (navegador do usuário)
- **Servidor:** processa requisições e fornece dados (máquina que roda a aplicação)
- A comunicação é feita pelo protocolo **HTTP/HTTPS**
- O modelo é **stateless**: cada requisição é independente

> 💡 **Analogia:** Pense no cliente como alguém que vai a um restaurante e faz um pedido. O servidor é o restaurante que prepara e entrega o prato. Cada pedido é independente — o restaurante não "lembra" do pedido anterior, a menos que o cliente se identifique novamente.

## 1.3 Evolução da Web

| Geração | Período | Características |
|---------|---------|-----------------|
| **Web 1.0** | 1990–2004 | Páginas estáticas, somente leitura, conteúdo produzido por poucos |
| **Web 2.0** | 2004–2020 | Conteúdo dinâmico, interação do usuário, redes sociais, AJAX |
| **Web 3.0** | 2020+ | Inteligência artificial, descentralização, semântica, blockchain |

A web passou por transformações radicais desde sua criação por Tim Berners-Lee em 1990. Na **Web 1.0**, as páginas eram estáticas — como um jornal digital. A **Web 2.0** trouxe a revolução da interação: blogs, redes sociais, wikis e tecnologias como AJAX que permitiram atualizações sem recarregar a página. A **Web 3.0**, que vivemos atualmente, traz inteligência artificial integrada, aplicações descentralizadas e web semântica.

## 1.4 Paradigmas de Aplicações Web Modernas

| Tipo | Nome Completo | Característica Principal |
|------|---------------|--------------------------|
| **SPA** | Single Page Application | Carrega uma única página e atualiza dinamicamente |
| **PWA** | Progressive Web App | Experiência semelhante a aplicativo nativo |
| **SSR** | Server-Side Rendering | Renderização no servidor para melhor performance |
| **API-First** | API-First Design | Back-end expõe APIs, front-end consome independentemente |

A escolha do paradigma depende do **contexto**, **requisitos** e **trade-offs**. Não existe "o melhor" — existe o **mais adequado** para cada caso.

## 1.5 Conceitos Fundamentais

| Conceito | Definição |
|----------|-----------|
| **URL** | Endereço de um recurso na web |
| **HTTP** | Protocolo de comunicação entre cliente e servidor |
| **HTML** | Linguagem de marcação para estruturar conteúdo |
| **CSS** | Linguagem de estilização para definir aparência |
| **JavaScript** | Linguagem de programação para comportamento |
| **DOM** | Representação estruturada do documento HTML |
| **API** | Interface de comunicação entre sistemas |

---

# Capítulo 2 — O que é Front-End?

## 2.1 Conceito de Front-End

Front-End é a parte da aplicação que o **usuário vê e interage** diretamente. É responsável pela **interface visual** e pela **experiência do usuário (UX)**. O Front-End roda no **navegador** do cliente e é a "fachada" da aplicação web.

> 💡 **Qual problema resolve?** Transforma dados e lógica em uma interface visual compreensível e interativa para o ser humano.

O Front-End roda no navegador do usuário, o que significa que o desenvolvedor não tem controle total sobre o ambiente de execução. O usuário pode estar usando Chrome, Firefox, Safari ou Edge, em um desktop de 27 polegadas ou em um celular de 5 polegadas. O Front-End precisa lidar com toda essa variabilidade.

## 2.2 As Três Tecnologias Fundamentais

```
┌─────────────────────────────────────────┐
│              FRONT-END                  │
│                                         │
│   ┌─────────┐ ┌─────────┐ ┌──────────┐  │
│   │  HTML   │ │   CSS   │ │JavaScript│  │
│   │Estrutura│ │  Estilo │ │Comport.  │  │
│   └─────────┘ └─────────┘ └──────────┘  │
│                                         │
│   O QUE?      COMO?        O QUE FAZ?   │
└─────────────────────────────────────────┘
```

- **HTML** → Estrutura e conteúdo (*O que?*)
- **CSS** → Aparência visual e layout (*Como?*)
- **JavaScript** → Interatividade e comportamento (*O que faz?*)

### 2.2.1 HTML — Estrutura

**HTML** (HyperText Markup Language) define a **estrutura** e o **conteúdo** da página. Utiliza **tags** semânticas como `<header>`, `<nav>`, `<main>`, `<footer>`. HTML é uma linguagem de **marcação**, não de programação.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Minha Página</title>
</head>
<body>
  <header>
    <h1>Bem-vindo</h1>
    <nav>
      <a href="/">Início</a>
      <a href="/sobre">Sobre</a>
    </nav>
  </header>
  <main>
    <p>Este é o conteúdo principal.</p>
  </main>
  <footer>
    <p>&copy; 2025</p>
  </footer>
</body>
</html>
```

> ⚠️ **Boa prática:** Use tags semânticas (`header`, `nav`, `main`, `section`, `article`, `footer`) em vez de `div` para tudo. Tags semânticas comunicam significado — para o navegador, para mecanismos de busca e para leitores de tela.

### 2.2.2 CSS — Estilo

**CSS** (Cascading Style Sheets) define a **aparência visual** da página: cores, fontes, espaçamentos, layouts. Pode ser aplicado de três formas: inline, interno ou externo. A forma **externa** (arquivo `.css` separado) é a mais recomendada.

```css
body {
  font-family: 'Calibri', sans-serif;
  color: #272425;
  margin: 0;
  padding: 0;
}

header {
  background-color: #C22820;
  color: #ffffff;
  padding: 20px;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  margin-right: 16px;
}
```

O CSS trabalha com **seletores** e **propriedades**. Existem seletores de tag, de classe (`.minha-classe`), de ID (`#meu-id`), compostos, descendentes e muitos outros.

O conceito de **cascata** determina qual regra prevalece quando múltiplas regras afetam o mesmo elemento, seguindo a hierarquia de especificidade: **inline > ID > classe > tag**.

### 2.2.3 JavaScript — Comportamento

JavaScript é a linguagem de **programação** do navegador. Adiciona **interatividade** e **dinamismo**, manipula o **DOM** e pode fazer **requisições assíncronas** ao servidor.

```javascript
// Selecionar um elemento do DOM
const titulo = document.querySelector("h1");

// Adicionar um evento de clique
titulo.addEventListener("click", () => {
  titulo.style.color = "#C22820";
  titulo.textContent = "Você clicou!";
});

// Requisição assíncrona ao servidor
fetch("/api/dados")
  .then(response => response.json())
  .then(data => console.log(data));
```

## 2.3 DOM — Document Object Model

```
            Document
               │
             <html>
            /       \
        <head>      <body>
          │          /    \
       <title>   <h1>    <p>
                  │        │
               "Olá"   "Mundo"
```

O DOM é a representação **estruturada** do documento HTML na memória do navegador. Ele permite que o JavaScript **leia, altere, adicione ou remova** elementos da página. É a **ponte** entre HTML e JavaScript.

Quando o navegador carrega um arquivo HTML, ele constrói uma árvore em memória. Cada tag HTML se torna um "nó" nessa árvore. O JavaScript interage com a página acessando e modificando esses nós.

> 💡 **Analogia:** O DOM é como a planta baixa de um prédio. Se você quer reformar uma sala, consulta a planta, identifica a sala e faz a alteração.

## 2.4 UI e UX

| Conceito | Significado | Foco |
|----------|-------------|------|
| **UI** | User Interface | Design visual: botões, cores, tipografia, ícones |
| **UX** | User Experience | Experiência: facilidade de uso, navegação intuitiva, acessibilidade |

- **UI** é o que o usuário **vê**
- **UX** é o que o usuário **sente**
- Um bom front-end combina **UI agradável** com **UX eficiente**

> ⚠️ **Erro comum:** Confundir UI bonita com UX boa. Uma interface pode ser visualmente agradável e, ao mesmo tempo, difícil de usar.

## 2.5 Responsabilidades do Front-End

- **Estruturar** o conteúdo da página com HTML semântico
- **Estilizar** a aparência com CSS
- **Implementar** interações com JavaScript
- **Consumir** dados do Back-End via APIs
- **Garantir** responsividade (adaptação a diferentes telas)
- **Garantir** acessibilidade (uso por pessoas com deficiência)
- **Otimizar** performance (tempo de carregamento)

---

# Capítulo 3 — O que é Back-End?

## 3.1 Conceito de Back-End

Back-End é a parte da aplicação que roda **no servidor**. É responsável pelo **processamento**, **armazenamento** e **segurança** dos dados. O usuário **não vê** diretamente o Back-End — ele é o "cérebro" da aplicação web.

> 💡 **Qual problema resolve?** Processa dados, aplica regras de negócio, acessa bancos de dados e garante a segurança da aplicação.

> 💡 **Analogia:** Pense em um restaurante self-service. O cliente vê a bandeja com a comida (Front-End). Mas por trás, na cozinha, existe todo um processo de preparação, higiene, controle de qualidade e logística (Back-End).

## 3.2 Responsabilidades do Back-End

- **Processar** requisições HTTP recebidas do Front-End
- **Executar** a lógica de negócio da aplicação
- **Acessar** e **manipular** dados no banco de dados
- **Autenticar** e **autorizar** usuários
- **Garantir** a segurança dos dados
- **Expor** APIs para consumo pelo Front-End
- **Tratar** erros e exceções de forma adequada

### Detalhamento das responsabilidades:

- **Processar requisições HTTP:** Quando o Front-End envia uma requisição (GET, POST, PUT, DELETE), o Back-End recebe, interpreta e direciona para o código correto.

- **Executar lógica de negócio:** São as regras que definem como a aplicação funciona. Exemplos: "um e-mail deve ser único", "um pedido só pode ser feito se houver estoque", "um administrador pode excluir registros, mas um usuário comum não".

- **Acessar banco de dados:** O Back-End é responsável por salvar, consultar, atualizar e deletar dados. O banco de dados garante a **persistência** — mesmo que o servidor seja reiniciado, os dados continuam armazenados.

- **Autenticar e autorizar:** Autenticação verifica **quem é** o usuário (login/senha). Autorização verifica **o que** o usuário pode fazer (permissões).

## 3.3 Tecnologias de Back-End

| Tecnologia | Linguagem | Característica Principal |
|------------|-----------|--------------------------|
| **Node.js** | JavaScript | Assíncrono, event-driven, mesma linguagem do Front-End |
| **Express** | JavaScript | Framework minimalista para Node.js |
| **PHP** | PHP | Amplamente utilizado, fácil hospedagem |
| **Django** | Python | Framework completo, "baterias incluídas" |
| **Spring** | Java | Robusto, enterprise, tipado |
| **Laravel** | PHP | Elegante, sintaxe expressiva |

**Node.js** merece destaque por utilizar **JavaScript** — a mesma linguagem do Front-End. Isso permite que um desenvolvedor trabalhe nas duas camadas com uma única linguagem.

## 3.4 Banco de Dados

```
┌──────────┐     ┌──────────┐     ┌──────────────┐
│ FRONT-END│ ──► │ BACK-END │ ──► │ BANCO DE     │
│          │ ◄── │          │ ◄── │ DADOS        │
└──────────┘     └──────────┘     └──────────────┘
  Requisição      Processamento     Armazenamento
  Resposta        Lógica            Persistência
```

| Tipo | Modelo | Exemplos | Ideal para |
|------|--------|----------|------------|
| **Relacional (SQL)** | Tabelas com relacionamentos | MySQL, PostgreSQL, SQLite | Dados estruturados, consistência |
| **Não-relacional (NoSQL)** | Documentos, chave-valor, grafos | MongoDB, Redis, Neo4j | Dados flexíveis, alta escalabilidade |

## 3.5 Ciclo de Vida de uma Requisição

```
1. Usuário clica em "Salvar"
        ↓
2. Front-End envia POST /api/usuarios
        ↓
3. Servidor recebe a requisição
        ↓
4. Middleware processa (JSON, CORS, autenticação)
        ↓
5. Rota direciona para o Controller
        ↓
6. Controller executa a lógica de negócio
        ↓
7. Repository acessa o banco de dados
        ↓
8. Resposta é construída (JSON)
        ↓
9. Front-End recebe e atualiza a tela
```

Cada etapa tem uma função específica:
1. **Interação do usuário** — clique, submit, etc.
2. **Requisição HTTP** — fetch(), axios ou formulário
3. **Recepção no servidor** — Node.js com Express
4. **Middlewares** — parse de JSON, verificação de CORS, autenticação
5. **Router** — direciona para o handler correto
6. **Controller/Service** — lógica de negócio
7. **Repository** — acesso ao banco de dados
8. **Resposta** — JSON com status code
9. **Atualização da interface** — DOM é modificado

## 3.6 Exemplo de Back-End com Express

```javascript
const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];

// GET — Listar todos os usuários
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// POST — Criar um novo usuário
app.post('/api/usuarios', (req, res) => {
  const { nome, email } = req.body;
  const usuario = { id: usuarios.length + 1, nome, email };
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

## 3.7 Erros Comuns no Back-End

| Erro | Consequência | Solução |
|------|--------------|---------|
| Não validar dados no Back-End | Dados inválidos no banco | Sempre validar no servidor |
| Expor detalhes internos no erro | Falha de segurança | Mensagens genéricas para o cliente |
| Não tratar exceções | Servidor trava | Usar try/catch e middleware de erro |
| Confundir autenticação com autorização | Falha de segurança | Implementar ambos separadamente |
| Não usar HTTPS | Dados interceptados | Sempre usar HTTPS em produção |

---

# Capítulo 4 — Como Front-End e Back-End se Comunicam

## 4.1 O Protocolo HTTP

**HTTP** (HyperText Transfer Protocol) é o protocolo de **comunicação** entre cliente (navegador) e servidor. É baseado em **requisição** e **resposta**, é **stateless** (não mantém estado entre requisições) e opera, por padrão, na **porta 80** (HTTP) ou **443** (HTTPS).

```
CLIENTE                          SERVIDOR
   │                                │
   │──── Requisição HTTP ─────────►│
   │                                │
   │◄──── Resposta HTTP ───────────│
   │                                │
```

> 💡 **Analogia:** Pense no HTTP como um carteiro. Você escreve uma carta (requisição), o carteiro entrega ao destinatário (servidor), o destinatário escreve uma resposta e o carteiro devolve para você. Cada carta é independente.

**HTTPS** é a versão segura do HTTP — os dados são **criptografados** durante o transporte. Em produção, **sempre** use HTTPS.

### O conceito de Stateless

O HTTP não mantém memória entre requisições. Se o cliente enviar duas requisições seguidas, o servidor não sabe que são do mesmo usuário — a menos que mecanismos como **cookies**, **sessões** ou **tokens** sejam utilizados.

- **Vantagem:** escalabilidade — qualquer servidor pode atender qualquer requisição
- **Desvantagem:** para manter estado, são necessários mecanismos adicionais

## 4.2 Componentes da Requisição HTTP

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

## 4.3 Métodos HTTP

| Método | Ação | CRUD | Exemplo | Idempotente? |
|--------|------|------|---------|--------------|
| **GET** | Ler/Listar | Read | `GET /api/usuarios` | ✅ Sim |
| **POST** | Criar | Create | `POST /api/usuarios` | ❌ Não |
| **PUT** | Atualizar (completo) | Update | `PUT /api/usuarios/1` | ✅ Sim |
| **PATCH** | Atualizar (parcial) | Update | `PATCH /api/usuarios/1` | ✅ Sim |
| **DELETE** | Excluir | Delete | `DELETE /api/usuarios/1` | ✅ Sim |

- **GET:** busca dados sem alterar nada no servidor. Toda vez que você digita uma URL no navegador, está fazendo um GET.
- **POST:** cria um novo recurso. Se você enviar o mesmo POST 10 vezes, pode criar 10 registros diferentes.
- **PUT:** atualiza todo o recurso. Você envia todos os dados, mesmo os que não foram alterados.
- **PATCH:** atualiza parcialmente — envia apenas os campos que deseja alterar.
- **DELETE:** remove um recurso.

## 4.4 Componentes da Resposta HTTP

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

## 4.5 Status Codes HTTP

| Faixa | Significado | Exemplos |
|-------|-------------|----------|
| **1xx** | Informacional | 100 Continue |
| **2xx** | ✅ Sucesso | 200 OK, 201 Created, 204 No Content |
| **3xx** | ↗️ Redirecionamento | 301 Moved, 304 Not Modified |
| **4xx** | ❌ Erro do cliente | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| **5xx** | 💥 Erro do servidor | 500 Internal Server Error, 503 Service Unavailable |

### Status Codes mais utilizados:

| Code | Nome | Quando usar |
|------|------|-------------|
| **200** | OK | Requisição bem-sucedida (GET, PUT) |
| **201** | Created | Recurso criado com sucesso (POST) |
| **204** | No Content | Sucesso sem dados no body (DELETE) |
| **400** | Bad Request | Dados enviados são inválidos |
| **401** | Unauthorized | Usuário não autenticado |
| **403** | Forbidden | Usuário autenticado, mas sem permissão |
| **404** | Not Found | Recurso não encontrado |
| **500** | Internal Server Error | Erro genérico do servidor |

## 4.6 O que é uma API?

**API** (Application Programming Interface) é um **contrato** de comunicação entre sistemas. Define **endpoints** (URLs), **métodos** (HTTP) e **formatos** (JSON).

```
┌──────────┐         ┌──────────┐         ┌──────────┐
│ FRONT-END│ ──API──►│ BACK-END │ ──SQL──►│ BANCO DE │
│          │ ◄────── │          │ ◄────── │ DADOS    │
└──────────┘         └──────────┘         └──────────┘
```

> 💡 **Analogia:** A API é como o cardápio de um restaurante. Ele lista o que está disponível (endpoints), como pedir (métodos) e o que esperar como resultado (formato). Você não precisa saber como a cozinha prepara o prato.

## 4.7 API RESTful

**REST** (Representational State Transfer) é um estilo arquitetônico para APIs baseado em HTTP. Seus princípios fundamentais:

| Princípio | Descrição |
|-----------|-----------|
| **Stateless** | Cada requisição contém todas as informações necessárias |
| **Recursos** | Tudo é identificado por uma URL (/api/usuarios/1) |
| **Métodos HTTP** | Ações são representadas pelos métodos (GET, POST, PUT, DELETE) |
| **Representações** | Dados são representados em JSON (ou XML) |

## 4.8 Exemplo Prático: Comunicação Completa

**Front-End (JavaScript):**
```javascript
fetch('/api/usuarios')
  .then(response => response.json())
  .then(usuarios => {
    console.log(usuarios);
  })
  .catch(error => console.error('Erro:', error));
```

**Back-End (Express):**
```javascript
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});
```

---

# Capítulo 5 — AJAX e Comunicação Assíncrona

## 5.1 O Problema: Síncrono vs. Assíncrono

**Comunicação síncrona (antes de AJAX):**
```
Usuário clica → Página recarrega → Servidor processa → Nova página carrega
```
- A página **trava** durante o processamento
- Experiência **lenta** e **frustrante**
- **Desperdício** de banda (recarrega tudo)

**Comunicação assíncrona (com AJAX):**
```
Usuário clica → Requisição em segundo plano → Servidor processa → Apenas parte da página atualiza
```
- A página **não trava**
- Experiência **fluida** e **responsiva**
- **Eficiente** (atualiza apenas o necessário)

## 5.2 O que é AJAX?

**AJAX** (Asynchronous JavaScript And XML) **não é uma tecnologia** — é uma **técnica** que combina:
- **JavaScript** (programação)
- **XMLHttpRequest** ou **Fetch API** (comunicação)
- **DOM** (manipulação da interface)
- **JSON** (formato de dados — antes era XML)

> 💡 **Por que existe?** Para permitir que o navegador se comunique com o servidor **sem recarregar a página**.

## 5.3 XMLHttpRequest (Legado)

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/usuarios', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const usuarios = JSON.parse(xhr.responseText);
    console.log(usuarios);
  }
};

xhr.send();
```

Foi a **primeira** forma de fazer AJAX. Ainda funciona, mas é **verbosa** e **complexa**. A API moderna é o `fetch()`.

## 5.4 Fetch API (Moderno)

```javascript
fetch('/api/usuarios')
  .then(response => response.json())
  .then(usuarios => {
    console.log(usuarios);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
```

A Fetch API é:
- **Moderna** e **nativa** do navegador
- Baseada em **Promises**
- Sintaxe **mais limpa** e **legível**
- Suporta **async/await**

## 5.5 Fetch com Async/Await

```javascript
async function carregarUsuarios() {
  try {
    const response = await fetch('/api/usuarios');
    const usuarios = await response.json();
    console.log(usuarios);
  } catch (error) {
    console.error('Erro:', error);
  }
}

carregarUsuarios();
```

- `async` declara que a função é assíncrona
- `await` pausa a execução até a Promise ser resolvida
- `try/catch` trata erros de forma mais intuitiva

> 💡 **Recomendação:** Prefira `async/await` para código novo. É mais legível, mais fácil de manter e menos propenso a erros de encadeamento.

## 5.6 Requisição POST com Fetch

```javascript
async function criarUsuario(nome, email) {
  try {
    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email })
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const usuario = await response.json();
    console.log('Usuário criado:', usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  }
}
```

> ⚠️ **Boa prática:** Sempre verifique `response.ok` antes de processar a resposta. Sem isso, pode tentar converter um corpo de erro como se fosse JSON válido.

## 5.7 Fluxo Completo de uma Aplicação Assíncrona

```
┌──────────────────────────────────────────────────┐
│                    FRONT-END                     │
│                                                  │
│  1. Usuário interage (clique, formulário)        │
│  2. JavaScript captura o evento                  │
│  3. fetch() envia requisição HTTP                │
│  4. Página continua responsiva                   │
│  5. Resposta chega (callback/await)              │
│  6. DOM é atualizado com os novos dados          │
│                                                  │
└──────────────────┬───────────────────────────────┘
                   │ HTTP (JSON)
                   ▼
┌──────────────────────────────────────────────────┐
│                    BACK-END                      │
│                                                  │
│  7. Servidor recebe a requisição                 │
│  8. Processa a lógica de negócio                 │
│  9. Consulta o banco de dados                    │
│  10. Retorna resposta JSON                       │
│                                                  │
└──────────────────────────────────────────────────┘
```

## 5.8 Erros Comuns com Fetch

| Erro | Consequência | Solução |
|------|--------------|---------|
| Não tratar erros do fetch | Aplicação "quebra" silenciosamente | Usar try/catch ou .catch() |
| Não verificar response.ok | Trata erro como sucesso | Verificar antes de processar |
| Esquecer o Content-Type no POST | Servidor não interpreta o body | Definir headers corretamente |
| Usar fetch síncrono | Página trava | Sempre usar async/await |
| Não atualizar o DOM após sucesso | Interface desatualizada | Atualizar no .then() ou após await |

---

# Capítulo 6 — Boas Práticas em Front-End e Back-End

## 6.1 Por que Boas Práticas Importam?

- Código é **lido** muito mais vezes do que é **escrito**
- Equipes trabalham **colaborativamente** — código precisa ser compreensível
- Manutenção consome **mais tempo** do que desenvolvimento inicial
- Código mal escrito **custa dinheiro** e **tempo**
- Boas práticas **reduzem bugs** e **facilitam depuração**

> 📊 **Dado real:** Estudos indicam que ~70% do tempo de um desenvolvedor é gasto **lendo** código, não escrevendo.

## 6.2 Boas Práticas — Front-End

| Prática | Descrição |
|---------|-----------|
| **HTML semântico** | Usar tags que comunicam significado (`header`, `nav`, `main`, `footer`) |
| **Separação de responsabilidades** | HTML para estrutura, CSS para estilo, JS para comportamento |
| **Nomes descritivos** | Classes, IDs e variáveis com nomes claros (`card-produto` em vez de `x`) |
| **Mobile First** | Projetar primeiro para mobile, depois para desktop |
| **Acessibilidade** | ARIA labels, contraste, navegação por teclado |
| **Performance** | Otimizar imagens, minificar CSS/JS, lazy loading |

## 6.3 Boas Práticas — Back-End

| Prática | Descrição |
|---------|-----------|
| **Separação de responsabilidades** | Router, Controller, Service, Repository |
| **Validação de dados** | Sempre validar no servidor, nunca confiar no cliente |
| **Tratamento de erros** | try/catch, middlewares de erro, mensagens claras |
| **Variáveis de ambiente** | Nunca hardcodar senhas, chaves ou URLs |
| **Versionamento de API** | /api/v1/usuarios, /api/v2/usuarios |
| **Logging** | Registrar eventos importantes para depuração |

## 6.4 Organização de Projeto

```
projeto/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── assets/
│       └── images/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── usuarios.js
│   ├── controllers/
│   │   └── usuarioController.js
│   ├── services/
│   │   └── usuarioService.js
│   └── repositories/
│       └── usuarioRepository.js
│
├── .env
├── .gitignore
└── README.md
```

## 6.5 Código Limpo vs. Código Sujo

**❌ Código sujo:**
```javascript
function x(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].s === b) c.push(a[i]);
  }
  return c;
}
```

**✅ Código limpo:**
```javascript
function filtrarUsuariosPorStatus(usuarios, status) {
  return usuarios.filter(usuario => usuario.status === status);
}
```

**Princípios de código limpo:**
- Nomes **descritivos** para funções, variáveis e parâmetros
- Funções **pequenas** — idealmente, cada função faz uma coisa
- Evitar **comentários desnecessários** — o código deve ser autoexplicativo
- Evitar **repetição** — se você copiou e colou código, refatore
- **Consistência** — use o mesmo padrão em todo o projeto

## 6.6 Erros Comuns de Iniciantes

| Erro | Impacto | Correção |
|------|---------|----------|
| Usar `div` para tudo | Semântica ruim, acessibilidade comprometida | Usar tags semânticas |
| Misturar HTML, CSS e JS | Código difícil de manter | Separar em arquivos |
| Hardcodar valores | Inflexibilidade | Usar variáveis de ambiente |
| Ignorar erros do fetch | Bugs silenciosos | Tratar todos os erros |
| Não validar dados no servidor | Falha de segurança | Validar sempre no Back-End |
| Commitar `.env` no Git | Credenciais expostas | Usar .gitignore |

---

# Capítulo 7 — Revisão da Parte I

## 7.1 Mapa Conceitual

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

## 7.2 Conceitos Fundamentais

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

## 7.3 Checklist de Aprendizagem

Ao final da Parte I, o estudante deve ser capaz de:

- [ ] Explicar o que é desenvolvimento web e sua evolução
- [ ] Descrever a arquitetura cliente-servidor
- [ ] Identificar as três tecnologias do Front-End (HTML, CSS, JS)
- [ ] Explicar o que é o DOM e como o JavaScript o manipula
- [ ] Descrever as responsabilidades do Back-End
- [ ] Listar as principais tecnologias de Back-End
- [ ] Explicar o protocolo HTTP e seus métodos
- [ ] Diferenciar GET, POST, PUT e DELETE
- [ ] Interpretar status codes HTTP
- [ ] Explicar o que é uma API RESTful
- [ ] Implementar requisições assíncronas com fetch()
- [ ] Usar async/await para simplificar código assíncrono
- [ ] Tratar erros em requisições HTTP
- [ ] Aplicar boas práticas de Front-End e Back-End
- [ ] Organizar um projeto com Front-End e Back-End separados

## 7.4 Perguntas para Reflexão

1. **Por que o HTTP é stateless?** Quais são as vantagens e desvantagens dessa característica?
2. **Se o Front-End pode ser contornado**, por que ainda validamos dados nele?
3. **Qual é a diferença** entre uma API REST e uma API que apenas usa HTTP?
4. **Por que separar Front-End e Back-End** em vez de ter tudo em um único sistema?
5. **Se AJAX não existisse**, como seria a experiência do usuário em aplicações como Gmail e Facebook?
6. **Por que o código limpo importa** se o computador não se importa com nomes de variáveis?

---

# PARTE II — Frameworks

---

# Capítulo 8 — O que é um Framework?

## 8.1 O Problema: Desenvolvimento Sem Framework

Imagine construir uma aplicação web **sem framework**:
- Criar servidor HTTP manualmente
- Implementar roteamento manualmente
- Fazer parse de JSON manualmente
- Gerenciar middlewares manualmente
- Servir arquivos estáticos manualmente
- Tratar erros manualmente
- Cada desenvolvedor cria sua própria estrutura

> **Resultado:** Código repetitivo, inconsistente, difícil de manter e de colaborar.

## 8.2 Definição de Framework

Um framework é uma **estrutura de software** que fornece:
- **Padrões** de organização
- **Componentes** reutilizáveis
- **Convenções** de desenvolvimento
- **Infraestrutura** pronta para uso

> 📖 **Definição formal:** Um framework é um conjunto de classes, bibliotecas e ferramentas que fornecem uma estrutura genérica e reutilizável para o desenvolvimento de aplicações.

Um framework não é um produto final — é uma **base** sobre a qual você constrói. É como a estrutura de um prédio: vigas, pilares, fundações. Você não constrói o prédio do zero — parte da estrutura e adiciona paredes, acabamento, instalações.

## 8.3 Framework vs. Biblioteca

| Aspecto | Biblioteca | Framework |
|---------|-----------|-----------|
| **Controle** | Você chama a biblioteca | O framework chama seu código |
| **Inversão de Controle** | Não | Sim |
| **Exemplo** | Lodash, jQuery | Express, React, Django |
| **Uso** | "Eu uso a biblioteca" | "O framework me usa" |

```
Biblioteca:  Seu código ──chama──► Biblioteca
Framework:   Framework ──chama──► Seu código
```

> 💡 **Diferença-chave:** Em uma biblioteca, **você** controla o fluxo. Em um framework, **ele** controla o fluxo.

## 8.4 Princípio de Inversão de Controle (IoC)

```javascript
// SEM framework — você controla tudo:
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home</h1>');
  }
  // ... dezenas de ifs
});

// COM framework — o framework controla:
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});
// O Express cuida do servidor, roteamento, parsing, etc.
```

A **Inversão de Controle** é o conceito mais importante desta unidade. Quando você usa um framework, não é mais você quem controla o fluxo da aplicação — é o framework que chama o seu código.

## 8.5 Vantagens dos Frameworks

| Vantagem | Descrição |
|----------|-----------|
| **Produtividade** | Menos código para escrever, mais foco na lógica de negócio |
| **Padronização** | Convenções que garantem consistência entre projetos |
| **Comunidade** | Documentação, tutoriais, plugins, suporte |
| **Testes** | Muitos frameworks possuem suporte integrado a testes |
| **Segurança** | Proteções contra vulnerabilidades comuns (XSS, CSRF, SQL Injection) |
| **Escalabilidade** | Arquitetura preparada para crescer |

## 8.6 Desvantagens dos Frameworks

| Desvantagem | Descrição |
|-------------|-----------|
| **Curva de aprendizagem** | Cada framework tem seus conceitos e convenções |
| **Restrições** | O framework impõe como você deve fazer as coisas |
| **Overhead** | Pode adicionar complexidade desnecessária a projetos simples |
| **Dependência** | Se o framework for descontinuado, o projeto é afetado |
| **"Magia"** | O que acontece por baixo dos panos pode ser opaco |

> 💡 **Princípio:** Use o framework certo para o problema certo. Nem sempre um framework é a melhor solução.

---

# Capítulo 9 — Por que Utilizar Frameworks?

## 9.1 Motivação 1: Eliminar Repetição

**Sem framework:**
```javascript
const server = http.createServer(handler);
let body = '';
req.on('data', chunk => body += chunk);
req.on('end', () => { data = JSON.parse(body); });
fs.readFile('./public/index.html', (err, data) => { ... });
```

**Com framework:**
```javascript
app.use(express.json());
app.use(express.static('public'));
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});
```

## 9.2 Motivação 2: Padronização

| Sem Framework | Com Framework |
|---------------|---------------|
| Cada dev organiza de um jeito | Convenções definidas pelo framework |
| Nomes inconsistentes | Padrões de nomenclatura |
| Estruturas diferentes | Estrutura de pastas padronizada |
| Dificulta colaboração | Facilita colaboração |

> 💡 **Convention over Configuration:** O framework define padrões razoáveis por padrão, reduzindo a necessidade de configuração manual.

## 9.3 Motivação 3: Comunidade e Ecossistema

- **Documentação** oficial e da comunidade
- **Tutoriais** e cursos disponíveis
- **Plugins** e extensões prontas
- **Stack Overflow** com milhares de respostas
- **GitHub** com issues e discussões

## 9.4 Motivação 4: Segurança

| Vulnerabilidade | Sem Framework | Com Framework |
|-----------------|---------------|---------------|
| **XSS** | Implementar manualmente | Proteção built-in |
| **CSRF** | Implementar manualmente | Middleware pronto |
| **SQL Injection** | Implementar manualmente | ORM parametrizado |
| **Helmet** | Configurar manualmente | Middleware pronto |

## 9.5 Motivação 5: Escalabilidade

```
Projeto pequeno (sem framework):
├── server.js (200 linhas)
└── Funciona bem

Projeto médio (sem framework):
├── server.js (2.000 linhas)
├── Difícil de manter
└── Precisa de organização

Projeto grande (sem framework):
├── server.js (20.000 linhas)
├── Impossível de manter
└── Precisa de framework
```

## 9.6 Quando NÃO Usar um Framework?

| Cenário | Recomendação |
|---------|--------------|
| Projeto muito simples (1-2 rotas) | Pode ser overkill |
| Aprendizado de fundamentos | Prefira fazer manualmente primeiro |
| Requisitos muito específicos | Framework pode ser restritivo |
| Equipe sem experiência com o framework | Considere a curva de aprendizagem |
| Protótipo rápido (hackathon) | Pode usar abordagem mais simples |

---

# Capítulo 10 — Estrutura de um Framework

## 10.1 Componentes Fundamentais

```
Requisição HTTP
      ↓
   Router        → Qual handler executar?
      ↓
   Middleware     → Processar antes do handler?
      ↓
   Controller     → Receber requisição, devolver resposta
      ↓
   Service        → Lógica de negócio
      ↓
   Repository     → Acesso a dados
      ↓
   Response       → Devolver ao cliente
```

## 10.2 Router — Roteamento

```javascript
app.get('/api/usuarios', usuarioController.listar);
app.get('/api/usuarios/:id', usuarioController.buscar);
app.post('/api/usuarios', usuarioController.criar);
app.put('/api/usuarios/:id', usuarioController.atualizar);
app.delete('/api/usuarios/:id', usuarioController.excluir);
```

O Router **mapeia URLs + Métodos HTTP** para handlers. É o "despachante" da aplicação — quando uma requisição chega, ele direciona para o código correto.

## 10.3 Middleware — Pipeline de Processamento

```javascript
// Middleware de parse JSON
app.use(express.json());

// Middleware de autenticação
function autenticar(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }
  next();
}

// Middleware de log
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
}
```

Middlewares são funções que executam **antes** do handler principal. Podem **interceptar**, **modificar** ou **rejeitar** a requisição. A função `next()` é crucial — ela diz "passe para o próximo middleware na pipeline".

## 10.4 Controller — Orquestração

```javascript
const usuarioController = {
  async listar(req, res) {
    try {
      const usuarios = await usuarioService.listar();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ erro: 'Erro interno' });
    }
  },

  async criar(req, res) {
    try {
      const usuario = await usuarioService.criar(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }
};
```

O Controller **recebe a requisição** e **devolve a resposta**. Ele orquestra o fluxo: chama o Service, recebe o resultado e formata a resposta HTTP. **Não contém lógica de negócio** diretamente.

## 10.5 Service — Lógica de Negócio

```javascript
const usuarioService = {
  async listar() {
    return await usuarioRepository.buscarTodos();
  },

  async criar(dados) {
    if (!dados.nome || dados.nome.length < 3) {
      throw new Error('Nome deve ter pelo menos 3 caracteres');
    }
    if (!dados.email || !dados.email.includes('@')) {
      throw new Error('E-mail inválido');
    }
    const existente = await usuarioRepository.buscarPorEmail(dados.email);
    if (existente) {
      throw new Error('E-mail já cadastrado');
    }
    return await usuarioRepository.criar(dados);
  }
};
```

O Service contém a **lógica de negócio**. **Não conhece HTTP** (não usa `req`, `res`). Recebe **dados** e retorna **dados**. Isso permite testes independentes e reutilização.

## 10.6 Repository — Acesso a Dados

```javascript
const usuarioRepository = {
  async buscarTodos() {
    return await db.query('SELECT * FROM usuarios');
  },

  async buscarPorEmail(email) {
    return await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  },

  async criar(dados) {
    const result = await db.query(
      'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
      [dados.nome, dados.email]
    );
    return { id: result.insertId, ...dados };
  }
};
```

O Repository **abstrai** o acesso ao banco de dados. O Service **não sabe** se é SQL, NoSQL ou arquivo. Facilita a **troca** de banco de dados sem alterar a lógica de negócio.

## 10.7 Fluxo Completo no Framework

```
Requisição: POST /api/usuarios
Body: { "nome": "Maria", "email": "maria@email.com" }

1. Router → identifica POST /api/usuarios → usuarioController.criar
2. Middleware → express.json() → parse do body
3. Middleware → autenticar → verifica token → next()
4. Controller → extrai dados de req.body → chama usuarioService.criar()
5. Service → valida nome, email → verifica duplicidade → chama usuarioRepository.criar()
6. Repository → INSERT INTO usuarios → retorna objeto criado
7. Service → retorna objeto para o Controller
8. Controller → res.status(201).json(usuario)
9. Resposta: 201 Created + JSON com o usuário
```

---

# Capítulo 11 — Frameworks Back-End e Front-End

## 11.1 Frameworks Back-End

| Framework | Linguagem | Características | Ideal para |
|-----------|-----------|-----------------|------------|
| **Express** | JavaScript | Minimalista, flexível, grande ecossistema | APIs, SPAs, microsserviços |
| **NestJS** | TypeScript | Arquitetura modular, inspirado no Angular | APIs enterprise, microsserviços |
| **Django** | Python | "Baterias incluídas", ORM, admin | Aplicações completas, CMS |
| **Flask** | Python | Minimalista, flexível | APIs simples, microsserviços |
| **Spring** | Java | Robusto, enterprise, tipado | Sistemas de grande porte |
| **Laravel** | PHP | Elegante, ORM, Blade | Aplicações web completas |
| **Rails** | Ruby | "Convention over Configuration", produtivo | Startups, protótipos |

### Express.js — Exemplo

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/usuarios', autenticar, async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

app.get('/api/usuarios/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).json({ erro: 'Não encontrado' });
  res.json(usuario);
});

app.listen(3000);
```

## 11.2 Frameworks Front-End

| Framework | Linguagem | Características | Ideal para |
|-----------|-----------|-----------------|------------|
| **React** | JavaScript/JSX | Biblioteca de UI, virtual DOM, componentes | SPAs, aplicações complexas |
| **Angular** | TypeScript | Framework completo, two-way binding | Aplicações enterprise |
| **Vue.js** | JavaScript | Progressivo, fácil de aprender | SPAs, projetos de qualquer porte |
| **Svelte** | JavaScript | Compilação, sem virtual DOM | Performance, projetos leves |
| **Next.js** | React | SSR, SSG, rotas por arquivo | SEO, performance, aplicações completas |

### React — Exemplo

```jsx
function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('/api/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <ul>
      {usuarios.map(u => (
        <li key={u.id}>{u.nome} — {u.email}</li>
      ))}
    </ul>
  );
}
```

## 11.3 Comparativo: Express vs. Django vs. Laravel

| Aspecto | Express | Django | Laravel |
|---------|---------|--------|---------|
| **Linguagem** | JavaScript | Python | PHP |
| **Filosofia** | Minimalista | Baterias incluídas | Elegante |
| **ORM** | Não (usa plugins) | Sim (integrado) | Eloquent (integrado) |
| **Admin** | Não | Sim (integrado) | Não (usa plugins) |
| **Template Engine** | Não (usa plugins) | Sim (Django Templates) | Blade |
| **Curva de aprendizagem** | Baixa | Média | Média |
| **Flexibilidade** | Alta | Média | Média |

---

# Capítulo 12 — Pull-based × Push-based

## 12.1 Pull-based (Puxar)

```
Cliente (Front-End)              Servidor (Back-End)
      │                                │
      │──── "Me dá os dados" ────────►│
      │                                │
      │◄──── Aqui estão os dados ─────│
      │                                │
      │  (Cliente RENDERIZA os dados)  │
```

- O **cliente puxa** os dados do servidor
- O cliente decide **quando** buscar dados
- O servidor é **reativo** — responde quando solicitado
- **Exemplos:** React, Vue.js, Angular (com HTTP)

## 12.2 Push-based (Empurrar)

```
Servidor (Back-End)              Cliente (Front-End)
      │                                │
      │──── "Tem dados novos!" ──────►│
      │                                │
      │  (Cliente RECEBE e atualiza)   │
```

- O **servidor empurra** dados para o cliente
- O servidor decide **quando** enviar dados
- O cliente é **reativo** — atualiza quando recebe
- **Exemplos:** WebSockets, Server-Sent Events (SSE), Firebase

## 12.3 Comparativo

| Aspecto | Pull-based | Push-based |
|---------|-----------|------------|
| **Quem inicia** | Cliente | Servidor |
| **Quando buscar** | Quando o cliente precisa | Quando o servidor tem dados novos |
| **Tecnologias** | HTTP, fetch, axios | WebSockets, SSE, Firebase |
| **Casos de uso** | Listas, formulários, CRUD | Chat, notificações, tempo real |
| **Complexidade** | Simples | Mais complexa |
| **Escalabilidade** | Fácil | Mais difícil (conexões persistentes) |

### Exemplo Pull-based (React + fetch)

```jsx
function Tarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch('/api/tarefas')
      .then(res => res.json())
      .then(data => setTarefas(data));
  }, []);

  return (
    <ul>
      {tarefas.map(t => <li key={t.id}>{t.titulo}</li>)}
    </ul>
  );
}
```

### Exemplo Push-based (WebSocket)

```javascript
// Servidor (Node.js + ws)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  setInterval(() => {
    ws.send(JSON.stringify({ temperatura: Math.random() * 40 }));
  }, 5000);
});

// Cliente (JavaScript)
const ws = new WebSocket('ws://localhost:8080');
ws.onmessage = (event) => {
  const dados = JSON.parse(event.data);
  console.log('Temperatura:', dados.temperatura);
};
```

---

# Capítulo 13 — Como Escolher um Framework

## 13.1 Critérios de Escolha

| Critério | Pergunta-chave |
|----------|----------------|
| **Comunidade** | O framework tem comunidade ativa? |
| **Documentação** | A documentação é completa e clara? |
| **Curva de aprendizagem** | A equipe consegue aprender rapidamente? |
| **Ecossistema** | Existem plugins e integrações disponíveis? |
| **Performance** | Atende aos requisitos de performance? |
| **Escalabilidade** | Suporta o crescimento do projeto? |
| **Manutenção** | É ativamente mantido? |
| **Licença** | A licença é compatível com o projeto? |

## 13.2 Matriz de Decisão

| Projeto | Recomendação | Justificativa |
|---------|--------------|---------------|
| API simples (Node.js) | **Express** | Minimalista, flexível, fácil de aprender |
| API enterprise (Node.js) | **NestJS** | Arquitetura modular, TypeScript, testável |
| Aplicação completa (Python) | **Django** | Baterias incluídas, produtivo, seguro |
| SPA complexa | **React** ou **Angular** | Ecossistema maduro, comunidade ativa |
| SPA leve | **Vue.js** | Fácil de aprender, progressivo |
| SEO + Performance | **Next.js** | SSR, SSG, otimizado para busca |
| Chat / Tempo real | **WebSockets** + framework | Push-based, conexão persistente |

## 13.3 Erros Comuns na Escolha

| Erro | Consequência | Correção |
|------|--------------|----------|
| Escolher por hype | Tecnologia inadequada para o projeto | Avaliar critérios objetivos |
| Ignorar a equipe | Equipe não consegue usar | Considerar curva de aprendizagem |
| Não avaliar ecossistema | Falta de plugins e integrações | Verificar disponibilidade |
| Escolher framework muito novo | Comunidade pequena, bugs não resolvidos | Preferir frameworks maduros |
| Não considerar manutenção | Framework descontinuado | Verificar histórico de commits |

---

# Capítulo 14 — Revisão da Parte II

## 14.1 Mapa Conceitual

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

## 14.2 Conceitos Fundamentais

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

## 14.3 Erros Comuns

| Erro | Consequência | Correção |
|------|--------------|----------|
| Usar framework sem entender fundamentos | Dependência sem compreensão | Estudar fundamentos primeiro |
| Escolher por hype | Tecnologia inadequada | Avaliar critérios objetivos |
| Não seguir convenções do framework | Código inconsistente | Respeitar as convenções |
| Colocar lógica de negócio no Controller | Código difícil de testar | Usar Service |
| Não usar middlewares | Código repetitivo | Extrair para middlewares |
| Ignorar a estrutura do framework | Projeto desorganizado | Seguir a estrutura padrão |

## 14.4 Checklist de Aprendizagem

Ao final da Parte II, o estudante deve ser capaz de:

- [ ] Explicar o que é um framework e como difere de uma biblioteca
- [ ] Descrever o princípio de Inversão de Controle
- [ ] Listar as vantagens e desvantagens dos frameworks
- [ ] Identificar os componentes internos de um framework
- [ ] Explicar a função de Router, Middleware, Controller, Service e Repository
- [ ] Listar os principais frameworks Back-End e Front-End
- [ ] Diferenciar Pull-based de Push-based
- [ ] Identificar critérios para escolha de um framework
- [ ] Implementar uma aplicação com Express seguindo a estrutura de framework
- [ ] Avaliar a qualidade de uma aplicação segundo critérios de framework

## 14.5 Perguntas para Reflexão

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

# PARTE III — Prática

---

# Capítulo 15 — Atividade Prática: CRUD Full Stack

## 15.1 Identificação

| Item | Descrição |
|------|-----------|
| **Unidade** | 1 — Back-End e Front-End |
| **Tipo** | Atividade Prática Orientada (APO) |
| **Carga horária** | 10 horas |
| **Modalidade** | Individual ou dupla |
| **Entrega** | Repositório público no GitHub + vídeo curto (até 5 min) |

## 15.2 Contextualização

Você foi contratado(a) por uma **startup de gestão de tarefas** para desenvolver o **MVP (Produto Mínimo Viável)** de uma aplicação web de lista de tarefas colaborativas. O sistema precisa permitir que usuários cadastrem, listem, editem e removam tarefas. O Back-End deve expor uma API RESTful e o Front-End deve consumir essa API de forma assíncrona, sem recarregar a página.

## 15.3 Objetivos de Aprendizagem

- **Compreender** o fluxo de comunicação entre cliente e servidor via HTTP
- **Implementar** um servidor Back-End com Node.js e Express, expondo endpoints REST
- **Desenvolver** uma interface Front-End responsiva com HTML, CSS e JavaScript
- **Aplicar** requisições assíncronas com a API `fetch()` para consumir a API
- **Executar** as quatro operações CRUD (Create, Read, Update, Delete)
- **Analisar** erros comuns de integração e propor soluções
- **Avaliar** a qualidade do código segundo boas práticas de organização

## 15.4 Requisitos Funcionais

| Código | Requisito | Prioridade |
|--------|-----------|------------|
| RF01 | Cadastrar tarefa (POST `/api/tarefas`) | Alta |
| RF02 | Listar todas as tarefas (GET `/api/tarefas`) | Alta |
| RF03 | Atualizar uma tarefa (PUT `/api/tarefas/:id`) | Alta |
| RF04 | Excluir uma tarefa (DELETE `/api/tarefas/:id`) | Alta |
| RF05 | Filtrar tarefas por status | Média |
| RF06 | Marcar tarefa como concluída | Média |
| RF07 | Validar campos obrigatórios | Alta |
| RF08 | Interface responsiva (mobile first) | Média |

## 15.5 Arquitetura da Solução

```
┌──────────────────┐         HTTP/JSON          ┌──────────────────┐
│                  │  ───────────────────────►   │                  │
│   FRONT-END      │                             │   BACK-END       │
│   (HTML+CSS+JS)  │  ◄───────────────────────   │   (Node + Exp)   │
│                  │     Resposta em JSON        │                  │
└──────────────────┘                             └──────────────────┘
        │                                                  │
        │ Renderiza                                        │ Persiste
        ▼                                                  ▼
   ┌────────┐                                      ┌──────────────┐
   │  DOM   │                                      │ Array em     │
   │        │                                      │ memória      │
   └────────┘                                      └──────────────┘
```

## 15.6 Estrutura do Projeto

```
taskflow/
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── routes/
│   │   │   └── tarefas.js
│   │   └── data/
│   │       └── tarefasStore.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── app.js
├── README.md
└── .gitignore
```

## 15.7 Exemplo de Implementação — Back-End

```javascript
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let contatos = [];
let idCounter = 1;

// Listar todos
app.get('/api/contatos', (req, res) => {
  res.json(contatos);
});

// Cadastrar
app.post('/api/contatos', (req, res) => {
  const { nome, telefone, email } = req.body;
  if (!nome || !telefone || !email) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }
  const contato = { id: idCounter++, nome, telefone, email };
  contatos.push(contato);
  res.status(201).json(contato);
});

// Excluir
app.delete('/api/contatos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  contatos = contatos.filter(c => c.id !== id);
  res.status(204).send();
});

app.listen(3000, () => console.log('Servidor na porta 3000'));
```

## 15.8 Exemplo de Implementação — Front-End

```javascript
const form = document.getElementById('form-contato');
const lista = document.getElementById('lista-contatos');

async function carregarContatos() {
  const response = await fetch('/api/contatos');
  const contatos = await response.json();
  lista.innerHTML = contatos.map(c => `
    <li>
      <strong>${c.nome}</strong> — ${c.telefone} — ${c.email}
      <button onclick="excluirContato(${c.id})">Excluir</button>
    </li>
  `).join('');
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dados = {
    nome: form.nome.value,
    telefone: form.telefone.value,
    email: form.email.value
  };
  await fetch('/api/contatos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  form.reset();
  carregarContatos();
});

async function excluirContato(id) {
  if (confirm('Deseja realmente excluir?')) {
    await fetch(`/api/contatos/${id}`, { method: 'DELETE' });
    carregarContatos();
  }
}

carregarContatos();
```

---

# Capítulo 16 — Atividade Prática: API com Framework

## 16.1 Identificação

| Item | Descrição |
|------|-----------|
| **Unidade** | 2 — Frameworks |
| **Tipo** | Atividade Prática Orientada (APO) |
| **Carga horária** | 10 horas |
| **Modalidade** | Individual ou dupla |
| **Entrega** | Repositório público no GitHub + README documentado |

## 16.2 Contextualização

Você foi contratado(a) como desenvolvedor(a) back-end para construir a **API de um sistema de biblioteca**. A API deve permitir o gerenciamento de **livros** e **autores**, seguindo uma arquitetura em camadas com Express.

## 16.3 Requisitos Funcionais

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

## 16.4 Requisitos Não-Funcionais

- **Arquitetura em camadas:** Router → Controller → Service → Repository
- **Middleware de log:** registrar método, URL e data/hora de cada requisição
- **Middleware de validação:** validar dados antes de criar/atualizar
- **Middleware de erro:** tratar erros centralmente
- **Persistência em memória** (arrays)
- **Organização de pastas** seguindo o padrão do framework
- **README** com documentação do projeto

## 16.5 Estrutura Esperada

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

## 16.6 Critérios de Avaliação

| Critério | Peso | Descrição |
|----------|------|-----------|
| Arquitetura em camadas | 30% | Separação correta entre Router, Controller, Service, Repository |
| Funcionalidade | 25% | Todas as rotas funcionando corretamente |
| Middlewares | 20% | Logger, validação e tratamento de erros implementados |
| Organização do código | 15% | Pastas, nomes, convenções |
| Documentação | 10% | README completo e claro |

---

# Glossário

| Termo | Definição |
|-------|-----------|
| **AJAX** | Técnica de comunicação assíncrona entre navegador e servidor sem recarregar a página |
| **API** | Application Programming Interface — contrato de comunicação entre sistemas |
| **Assíncrono** | Operação que não bloqueia a execução do programa |
| **Banco de Dados** | Sistema organizado para armazenar e recuperar dados |
| **CRUD** | Create, Read, Update, Delete — operações básicas de persistência |
| **CSS** | Cascading Style Sheets — linguagem de estilização para definir aparência |
| **DOM** | Document Object Model — representação em árvore do documento HTML |
| **Endpoint** | URL específica de uma API que aceita requisições HTTP |
| **Express** | Framework minimalista para Node.js |
| **Fetch API** | API do navegador para fazer requisições HTTP assíncronas |
| **Framework** | Estrutura de software que fornece padrões, componentes e convenções |
| **Front-End** | Camada de apresentação da aplicação — o que o usuário vê |
| **Back-End** | Camada de processamento que roda no servidor |
| **HTML** | HyperText Markup Language — linguagem de marcação para estruturar conteúdo |
| **HTTP** | HyperText Transfer Protocol — protocolo de comunicação cliente-servidor |
| **HTTPS** | Versão segura do HTTP com criptografia |
| **Idempotente** | Operação que, ao ser repetida, produz o mesmo resultado |
| **IoC** | Inversão de Controle — o framework chama seu código |
| **JSON** | JavaScript Object Notation — formato de troca de dados |
| **Middleware** | Função que processa requisições antes do handler principal |
| **Node.js** | Ambiente de execução JavaScript no servidor |
| **ORM** | Object-Relational Mapping — mapeamento objeto-relacional |
| **Promise** | Objeto que representa o resultado futuro de uma operação assíncrona |
| **Pull-based** | Paradigma onde o cliente puxa dados do servidor |
| **Push-based** | Paradigma onde o servidor envia dados ao cliente |
| **REST** | Representational State Transfer — estilo arquitetônico para APIs |
| **Router** | Componente que mapeia URLs para handlers |
| **SPA** | Single Page Application — aplicação de página única |
| **Stateless** | Protocolo que não mantém estado entre requisições |
| **Status Code** | Número que indica o resultado de uma requisição HTTP |
| **URL** | Uniform Resource Locator — endereço de um recurso na web |
| **UX** | User Experience — experiência do usuário |
| **UI** | User Interface — interface do usuário |
| **WebSocket** | Protocolo de comunicação bidirecional em tempo real |

---

# Referências

- MDN Web Docs — Documentação de referência para HTML, CSS, JavaScript e HTTP
- Express.js — Documentação oficial do framework Express
- Node.js — Documentação oficial do Node.js
- React — Documentação oficial do React
- Django — Documentação oficial do Django
- Laravel — Documentação oficial do Laravel
- Fielding, R. T. (2000). *Architectural Styles and the Design of Network-based Software Architectures*. Doctoral dissertation, University of California, Irvine.
- Mozilla Developer Network — Fetch API
- W3C — World Wide Web Consortium

---

> **📝 Nota:** Este eBook foi compilado a partir do material da disciplina de Desenvolvimento de Software (Back-End/Front-End) do curso de Análise e Desenvolvimento de Sistemas da UNIPAR, abrangendo as Unidades 1 e 2 do conteúdo programático.
