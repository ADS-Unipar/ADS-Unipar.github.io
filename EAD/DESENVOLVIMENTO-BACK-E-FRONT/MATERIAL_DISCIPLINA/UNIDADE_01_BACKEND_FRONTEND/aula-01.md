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

# Aula 01

## Introdução ao Desenvolvimento Web

**Unidade 1 — Back-End e Front-End**

<!--
FALA DO PROFESSOR:

Bem-vindos à primeira aula da disciplina de Desenvolvimento de Software. Nesta aula vamos estabelecer as bases conceituais de tudo o que estudaremos nas próximas semanas.

Antes de mergulharmos em código, frameworks ou arquiteturas, é fundamental que você compreenda o que é o desenvolvimento web, como ele surgiu, por que evoluiu e qual é o papel de cada parte de uma aplicação moderna.

Pense nesta aula como os alicerces de um prédio: sem uma base sólida, tudo o que construímos depois fica instável. Vamos começar?
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o que é desenvolvimento de software e suas modalidades;
- **Identificar** os componentes de uma aplicação web;
- **Explicar** a arquitetura cliente-servidor;
- **Diferenciar** os conceitos de Front-End e Back-End;
- **Analisar** a evolução da Web e suas implicações no desenvolvimento moderno.

**Taxonomia de Bloom:** Compreender, Identificar, Explicar, Analisar.

<!--
FALA DO PROFESSOR:

Observe os verbos utilizados nos objetivos: compreender, identificar, explicar, diferenciar, analisar. Eles foram escolhidos com base na Taxonomia de Bloom, que é um framework pedagógico que classifica objetivos de aprendizagem em níveis cognitivos crescentes.

Nesta primeira aula, estamos nos concentrando nos níveis iniciais — compreender e identificar — porque precisamos primeiro estabelecer o vocabulário e os conceitos fundamentais. Nas aulas seguintes, avançaremos para níveis mais altos, como aplicar e avaliar.

Ao final da aula, releia cada objetivo e verifique se você consegue respondê-los com suas próprias palavras. Se não conseguir, revise o conteúdo.
-->

---

## O que é Desenvolvimento de Software?

- Processo de **criação, projeto, implementação e manutenção** de software;
- Envolve diversas etapas: análise, design, codificação, testes e implantação;
- O objetivo é **resolver problemas** ou atender necessidades por meio de sistemas computacionais;
- Pode resultar em aplicações desktop, mobile, web, embarcadas, entre outras.

> **Por que existe?** Porque software é a forma como traduzimos necessidades humanas em soluções computacionais.

<!--
FALA DO PROFESSOR:

Vamos começar pelo conceito mais amplo. Desenvolvimento de software não é apenas "programar". Programar é uma das atividades dentro do desenvolvimento, que é um processo muito mais abrangente.

Imagine construir uma casa. Você não começa pegando um martelo e pregando madeira. Primeiro, você conversa com o cliente para entender o que ele precisa (análise), depois desenha a planta (projeto), depois constrói (implementação) e, por fim, faz manutenção ao longo dos anos. Software segue a mesma lógica.

Nesta disciplina, vamos focar em uma modalidade específica: aplicações web. Mas o pensamento de engenharia que vamos desenvolver serve para qualquer tipo de software.

Pergunta para reflexão: você já utilizou um sistema que parecia ter sido feito sem pensar no usuário? O que faltou? Provavelmente faltou uma boa etapa de análise e projeto.
-->

---

## O que é uma Aplicação Web?

- Software que funciona **no navegador** do usuário;
- Não necessita de instalação local;
- Acessível de qualquer dispositivo com internet;
- Exemplos: redes sociais, e-mails, sistemas de gestão, lojas virtuais.

```
┌──────────────┐        HTTP/HTTPS        ┌──────────────┐
│   NAVEGADOR  │ ◄──────────────────────► │   SERVIDOR   │
│  (Cliente)   │                          │  (Back-End)  │
└──────────────┘                          └──────────────┘
```

<!--
FALA DO PROFESSOR:

O que diferencia uma aplicação web de uma aplicação desktop? A principal diferença é o ponto de execução. Uma aplicação desktop roda diretamente no sistema operacional do usuário — como o Word ou o Photoshop. Uma aplicação web roda dentro de um navegador — como o Google Docs ou o Figma.

Essa diferença tem implicações enormes. A aplicação web não precisa ser instalada, pode ser acessada de qualquer lugar, e o desenvolvedor não precisa se preocupar com diferentes sistemas operacionais — basta que o navegador seja compatível.

Mas há um custo: a aplicação web depende de uma conexão de rede (pelo menos para o carregamento inicial) e tem limitações de acesso ao hardware do dispositivo.

Observe o diagrama: o navegador (cliente) se comunica com o servidor por meio do protocolo HTTP. Essa comunicação é o coração de qualquer aplicação web. Vamos estudar isso em detalhes nas próximas aulas.
-->

---

## Evolução da Web

| Geração | Período | Características |
|---------|---------|-----------------|
| **Web 1.0** | 1990–2004 | Páginas estáticas, somente leitura, conteúdo produzido por poucos |
| **Web 2.0** | 2004–2020 | Conteúdo dinâmico, interação do usuário, redes sociais, AJAX |
| **Web 3.0** | 2020+ | Inteligência artificial, descentralização, semântica, blockchain |

<!--
FALA DO PROFESSOR:

A web passou por transformações radicais desde sua criação por Tim Berners-Lee em 1990. Compreender essa evolução é importante porque explica por que desenvolvemos aplicações da forma como fazemos hoje.

Na Web 1.0, as páginas eram estáticas — você acessava um site e apenas lia o conteúdo. Não havia interação. Era como um jornal digital.

A Web 2.0 trouxe a revolução da interação. O usuário passou a ser também produtor de conteúdo. Surgiram blogs, redes sociais, wikis. Tecnologias como AJAX permitiram que páginas se atualizassem sem recarregar — e foi isso que viabilizou aplicações como o Gmail e o Google Maps.

A Web 3.0, que estamos vivendo agora, traz conceitos como inteligência artificial integrada, aplicações descentralizadas e web semântica. Mas os fundamentos — HTTP, HTML, CSS, JavaScript — continuam sendo a base de tudo.

Pergunta: qual geração da web você mais utiliza no dia a dia? Consegue identificar características de cada uma nelas?
-->

---

## Arquitetura Cliente-Servidor

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

- **Cliente:** solicita serviços e exibe resultados;
- **Servidor:** processa requisições e fornece dados;
- A comunicação é feita pelo protocolo **HTTP/HTTPS**;
- O modelo é **stateless**: cada requisição é independente.

<!--
FALA DO PROFESSOR:

A arquitetura cliente-servidor é o modelo mais utilizado em aplicações web. Vamos entender cada parte.

O cliente, no contexto web, é o navegador. É ele que renderiza o HTML, aplica o CSS e executa o JavaScript. Quando você digita uma URL e pressiona Enter, o navegador envia uma requisição HTTP para o servidor.

O servidor é uma máquina (física ou virtual) que roda uma aplicação back-end. Essa aplicação recebe a requisição, processa a lógica de negócio, consulta um banco de dados se necessário e devolve uma resposta — que pode ser um HTML, um JSON, uma imagem, etc.

Um conceito importante aqui é o de "stateless". O protocolo HTTP não mantém estado entre requisições. Isso significa que, se o servidor receber duas requisições do mesmo cliente, ele não sabe, por padrão, que são do mesmo usuário. Por isso existem mecanismos como sessões e tokens — que veremos mais adiante.

Analogia: pense no cliente como alguém que vai a um restaurante e faz um pedido. O servidor é o restaurante que prepara e entrega o prato. Cada pedido é independente — o restaurante não "lembra" do pedido anterior, a menos que o cliente se identifique novamente.
-->

---

## Aplicações Web Modernas

| Tipo | Nome Completo | Característica Principal |
|------|---------------|--------------------------|
| **SPA** | Single Page Application | Carrega uma única página e atualiza dinamicamente |
| **PWA** | Progressive Web App | Experiência semelhante a aplicativo nativo |
| **SSR** | Server-Side Rendering | Renderização no servidor para melhor performance |
| **API-First** | API-First Design | Back-end expõe APIs, front-end consome independentemente |

- A escolha do tipo de aplicação depende do **contexto**, **requisitos** e **trade-offs**;
- Não existe "o melhor" — existe o **mais adequado** para cada caso.

<!--
FALA DO PROFESSOR:

As aplicações web modernas podem seguir diferentes paradigmas. Vamos entender cada um rapidamente, pois vamos aprofundar esses conceitos ao longo da disciplina.

SPA — Single Page Application: é o modelo utilizado pelo Gmail, Facebook, Netflix. A página inicial é carregada uma vez e, a partir daí, apenas os dados são atualizados via JavaScript, sem recarregar o HTML inteiro. Isso proporciona uma experiência mais fluida.

PWA — Progressive Web App: é uma aplicação web que pode ser "instalada" no dispositivo do usuário e funciona offline. Utiliza Service Workers e Manifest. Vamos estudar isso em detalhes na Unidade 3.

SSR — Server-Side Rendering: o HTML é gerado no servidor e enviado pronto para o navegador. Frameworks como Next.js utilizam essa abordagem. É útil para SEO e performance inicial.

API-First: o back-end é projetado para expor APIs, e o front-end é apenas um dos possíveis consumidores. Essa abordagem permite que a mesma API seja utilizada por um site, um aplicativo mobile e até outros sistemas.

O ponto-chave é: cada abordagem resolve problemas diferentes. Um bom desenvolvedor sabe avaliar trade-offs e escolher a mais adequada para cada situação.
-->

---

## Conceitos Fundamentais

| Conceito | Definição |
|----------|-----------|
| **URL** | Endereço de um recurso na web |
| **HTTP** | Protocolo de comunicação entre cliente e servidor |
| **HTML** | Linguagem de marcação para estruturar conteúdo |
| **CSS** | Linguagem de estilização para definir aparência |
| **JavaScript** | Linguagem de programação para comportamento |
| **DOM** | Representação estruturada do documento HTML |
| **API** | Interface de comunicação entre sistemas |

<!--
FALA DO PROFESSOR:

Esta tabela apresenta os sete conceitos que serão a espinha dorsal de toda a disciplina. Vamos estudar cada um deles em detalhes nas aulas seguintes, mas é importante que você já tenha uma visão geral.

URL — Uniform Resource Locator — é o endereço que você digita no navegador. Ela indica onde um recurso está localizado na web.

HTTP — HyperText Transfer Protocol — é o protocolo que rege a comunicação entre navegador e servidor. Toda vez que você acessa um site, o navegador envia uma requisição HTTP e recebe uma resposta HTTP.

HTML, CSS e JavaScript são as três tecnologias fundamentais do front-end. HTML estrutura, CSS estiliza e JavaScript adiciona comportamento.

DOM — Document Object Model — é a representação em árvore do documento HTML que o navegador mantém em memória. O JavaScript manipula o DOM para alterar a página dinamicamente.

API — Application Programming Interface — é um contrato de comunicação entre sistemas. No contexto web, geralmente nos referimos a APIs REST, que utilizam HTTP para trocar dados em formato JSON.

Não se preocupe em memorizar tudo agora. Esses conceitos serão retomados e aprofundados continuamente.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Desenvolvimento de software é um **processo**, não apenas codificação;
2. Aplicações web rodam no **navegador** e se comunicam com servidores via **HTTP**;
3. A arquitetura **cliente-servidor** é a base da web moderna;
4. A web evoluiu de estática (1.0) para dinâmica (2.0) e inteligente (3.0);
5. Existem diferentes **paradigmas** de aplicações web (SPA, PWA, SSR, API-First).

**Pergunta reflexiva:**

> Se a web fosse inventada hoje, com toda a tecnologia que temos, como ela seria diferente?

**Próxima aula:** O que é Front-End? — Vamos mergulhar na camada visual da aplicação web.

<!--
FALA DO PROFESSOR:

Chegamos ao final da primeira aula. Vamos revisitar os conceitos principais.

Primeiro: desenvolvimento de software é um processo que vai muito além de escrever código. Envolve análise, projeto, implementação, testes e manutenção.

Segundo: aplicações web são softwares que rodam no navegador e se comunicam com servidores por meio do protocolo HTTP.

Terceiro: a arquitetura cliente-servidor é o modelo que sustenta toda a web. O cliente solicita, o servidor processa e responde.

Quarto: a web evoluiu significativamente. De páginas estáticas e somente leitura, passamos para plataformas interativas e inteligentes.

Quinto: existem diferentes formas de construir aplicações web — SPA, PWA, SSR, API-First — e a escolha depende do contexto.

Deixo a pergunta reflexiva para você pensar durante a semana: se a web fosse inventada hoje, seria diferente? Por quê?

Na próxima aula, vamos estudar o Front-End em detalhes. Prepare-se para entender HTML, CSS, JavaScript e o DOM a fundo.
-->

---

<!-- _class: bg-fim -->

#
