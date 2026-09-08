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

# Aula 02

## O que é Front-End?

**Unidade 1 — Back-End e Front-End**

<!--
FALA DO PROFESSOR:

Na aula anterior, estabelecemos os fundamentos do desenvolvimento web e da arquitetura cliente-servidor. Agora vamos mergulhar em uma das duas grandes camadas de qualquer aplicação web: o Front-End.

O Front-End é tudo aquilo que o usuário vê, toca e interage. É a parte visível da aplicação. Mas não se engane: por trás dessa aparente simplicidade, existe uma complexidade técnica significativa.

Nesta aula, vamos entender o que é Front-End, quais tecnologias o compõem, qual é o papel de cada uma e como elas trabalham juntas para criar a experiência do usuário.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o conceito de Front-End e seu papel na aplicação web;
- **Identificar** as três tecnologias fundamentais: HTML, CSS e JavaScript;
- **Explicar** o papel do DOM na manipulação dinâmica de páginas;
- **Diferenciar** os conceitos de UI (User Interface) e UX (User Experience);
- **Aplicar** exemplos básicos de HTML, CSS e JavaScript.

**Taxonomia de Bloom:** Compreender, Identificar, Explicar, Aplicar.

<!--
FALA DO PROFESSOR:

Note que os objetivos desta aula já incluem o verbo "aplicar", que está em um nível cognitivo mais alto do que os verbos da aula anterior. Isso é intencional: estamos progredindo. Na aula passada, você aprendeu o que é desenvolvimento web. Agora, você vai começar a aplicar esse conhecimento no contexto específico do Front-End.

Releia os objetivos ao final da aula. Se você conseguir explicar, com suas próprias palavras, o que é Front-End, quais tecnologias o compõem e como elas se relacionam, significa que a aula cumpriu seu propósito.
-->

---

## Conceito de Front-End

- É a parte da aplicação que o **usuário vê e interage** diretamente;
- Responsável pela **interface visual** e pela **experiência do usuário (UX)**;
- Roda no **navegador** do cliente;
- É a "fachada" da aplicação web.

> **Qual problema resolve?** Transforma dados e lógica em uma interface visual compreensível e interativa para o ser humano.

<!--
FALA DO PROFESSOR:

Vamos começar pelo conceito. Front-End é a camada de apresentação. É o que o usuário vê quando abre um site ou aplicação web.

Pense em um banco. Quando você entra na agência, você vê o balcão, o caixa, o gerente. Isso é o Front-End do banco — a parte visível ao cliente. Por trás, existe todo um sistema de processamento, contabilidade e segurança que o cliente não vê — isso é o Back-End.

No desenvolvimento web, a mesma lógica se aplica. O Front-End é a fachada. Ele recebe dados do Back-End e os apresenta de forma visual e interativa. Mas ele também faz muito mais: valida formulários, gerencia navegação, anima elementos, adapta-se a diferentes tamanhos de tela.

Um ponto importante: o Front-End roda no navegador do usuário. Isso significa que o desenvolvedor não tem controle total sobre o ambiente de execução. O usuário pode estar usando Chrome, Firefox, Safari ou Edge. Pode estar em um desktop de 27 polegadas ou em um celular de 5 polegadas. O Front-End precisa lidar com toda essa variabilidade.
-->

---

## As Três Tecnologias Fundamentais

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

- **HTML** → Estrutura e conteúdo;
- **CSS** → Aparência visual e layout;
- **JavaScript** → Interatividade e comportamento.

<!--
FALA DO PROFESSOR:

O Front-End é construído sobre três pilares fundamentais: HTML, CSS e JavaScript. Cada um tem uma responsabilidade específica, e juntos eles formam a base de qualquer interface web.

HTML — HyperText Markup Language — define a estrutura. É ele que diz: "isso é um título", "isso é um parágrafo", "isso é um botão", "isso é uma imagem". Sem HTML, não existe página.

CSS — Cascading Style Sheets — define a aparência. É ele que diz: "o título deve ser vermelho", "o parágrafo deve ter 16 pixels", "o botão deve ter bordas arredondadas". Sem CSS, a página seria um documento sem formatação — como um texto puro do Word.

JavaScript — a linguagem de programação — define o comportamento. É ele que diz: "quando o usuário clicar no botão, envie uma requisição ao servidor", "quando os dados chegarem, atualize a tabela". Sem JavaScript, a página seria estática — como um PDF.

Analogia: pense em uma casa. HTML é a estrutura — paredes, portas, janelas. CSS é a decoração — cores, móveis, iluminação. JavaScript é a eletricidade — interruptores, automação, interatividade.
-->

---

## HTML — Estrutura

- **HyperText Markup Language**
- Define a **estrutura** e o **conteúdo** da página;
- Utiliza **tags** semânticas: `<header>`, `<nav>`, `<main>`, `<footer>`;
- É a linguagem de **marcação**, não de programação.

---

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

<!--
FALA DO PROFESSOR:

HTML é a espinha dorsal de qualquer página web. Sem ele, não existe conteúdo para estilizar ou para o JavaScript manipular.

Observe o exemplo. Temos a declaração DOCTYPE, que informa ao navegador que se trata de um documento HTML5. A tag html envolve todo o conteúdo. Dentro dela, temos head (metadados) e body (conteúdo visível).

Note o uso de tags semânticas: header, nav, main, footer. Isso é fundamental. Tags semânticas não apenas estruturam o conteúdo, mas também comunicam significado. Quando um leitor de tela encontra uma tag nav, ele sabe que aquela seção contém navegação. Quando encontra main, sabe que é o conteúdo principal.

Evite usar div para tudo. Uma div não tem significado semântico. Use div apenas quando não existir uma tag mais adequada. Prefira header, nav, main, section, article, aside e footer.

HTML não é programação. É marcação. Você não "programa" em HTML — você "marca" o conteúdo com tags que descrevem o que cada elemento é.
-->

---

## CSS — Estilo

- **Cascading Style Sheets**
- Define a **aparência visual** da página;
- Controla cores, fontes, espaçamentos, layouts;
- Pode ser aplicado inline, interno ou externo.

---

## CSS — Estilo
```css
/* Estilo externo — arquivo .css */
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

<!--
FALA DO PROFESSOR:

CSS é responsável pela aparência visual. Sem CSS, uma página HTML seria um documento sem formatação — texto preto em fundo branco, sem cores, sem layout, sem identidade visual.

Existem três formas de aplicar CSS: inline (direto no elemento HTML, usando o atributo style), interno (dentro da tag style no head) e externo (em um arquivo .css separado). A forma externa é a mais recomendada, pois separa a estrutura (HTML) da apresentação (CSS), facilitando a manutenção.

Observe o exemplo. Selecionamos elementos por sua tag (body, header, nav) e definimos propriedades visuais. O CSS trabalha com seletores e propriedades. Existem seletores de tag, de classe (.minha-classe), de ID (#meu-id), compostos, descendentes e muitos outros.

Um conceito importante é o de "cascata" (Cascading). Quando múltiplas regras CSS afetam o mesmo elemento, o navegador precisa decidir qual aplicar. Ele segue uma hierarquia de especificidade: inline > ID > classe > tag. Entender essa hierarquia é essencial para evitar bugs de estilização.

Na próxima aula, vamos estudar responsividade — como o CSS permite que a mesma página se adapte a diferentes tamanhos de tela.
-->

---

## JavaScript — Comportamento

- Linguagem de **programação** do navegador;
- Adiciona **interatividade** e **dinamismo**;
- Manipula o **DOM** (Document Object Model);
- Pode fazer **requisições assíncronas** ao servidor.

---

## JavaScript — Comportamento
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

<!--
FALA DO PROFESSOR:

JavaScript é a linguagem de programação do front-end. É ela que dá vida à página. Sem JavaScript, a página seria estática — o usuário poderia ler o conteúdo, clicar em links e preencher formulários básicos, mas não haveria interatividade dinâmica.

Observe o exemplo. Primeiro, selecionamos um elemento do DOM usando querySelector. Depois, adicionamos um "ouvinte de evento" (event listener) que reage ao clique do usuário. Quando o usuário clica no título, o texto muda e a cor é alterada.

A última parte do exemplo mostra uma requisição fetch. Essa é uma das funcionalidades mais poderosas do JavaScript moderno: a capacidade de se comunicar com o servidor de forma assíncrona, sem recarregar a página. Isso é o que permite aplicações como o Gmail, onde novos e-mails aparecem automaticamente sem que você precise atualizar a página.

JavaScript é uma linguagem completa. Ela suporta programação orientada a objetos, funcional, assíncrona e muito mais. Nesta disciplina, vamos focar nas funcionalidades mais relevantes para o desenvolvimento web.
-->

---

## DOM — Document Object Model

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

- Representação **estruturada** do documento HTML na memória;
- Permite que o JavaScript **leia, altere, adicione ou remova** elementos;
- É a **ponte** entre HTML e JavaScript.

<!--
FALA DO PROFESSOR:

O DOM — Document Object Model — é um conceito absolutamente central no desenvolvimento front-end. Quando o navegador carrega um arquivo HTML, ele não apenas exibe o conteúdo na tela. Ele constrói, em memória, uma representação em árvore desse documento. Essa árvore é o DOM.

Cada tag HTML se torna um "nó" nessa árvore. O documento como um todo é o nó raiz. As tags html, head e body são nós filhos. E assim por diante, até as folhas da árvore, que são os textos e atributos.

Por que o DOM é importante? Porque é através do DOM que o JavaScript interage com a página. Quando você quer alterar o texto de um parágrafo, você acessa o nó correspondente no DOM e modifica sua propriedade textContent. Quando quer adicionar um novo elemento, você cria um novo nó e o insere na árvore.

Analogia: pense no DOM como a planta baixa de um prédio. A planta mostra todas as salas, corredores e andares. Se você quer reformar uma sala, você consulta a planta, identifica a sala e faz a alteração. O DOM é a planta da página web.

Vamos utilizar o DOM extensivamente nas próximas aulas, especialmente quando estudarmos AJAX e comunicação assíncrona.
-->

---

## UI e UX

| Conceito | Significado | Foco |
|----------|-------------|------|
| **UI** | User Interface | Design visual: botões, cores, tipografia, ícones |
| **UX** | User Experience | Experiência: facilidade de uso, navegação intuitiva, acessibilidade |

- **UI** é o que o usuário **vê**;
- **UX** é o que o usuário **sente**;
- Um bom front-end combina **UI agradável** com **UX eficiente**.

> **Erro comum:** confundir UI bonita com UX boa. Uma interface pode ser visualmente agradável e, ao mesmo tempo, difícil de usar.

<!--
FALA DO PROFESSOR:

UI e UX são conceitos frequentemente confundidos, mas são distintos e complementares.

UI — User Interface — é o design visual da aplicação. São as cores, os botões, os ícones, a tipografia, o layout. É a parte estética.

UX — User Experience — é a experiência do usuário ao utilizar a aplicação. É a facilidade de navegação, a clareza das informações, a velocidade de resposta, a acessibilidade para pessoas com deficiência.

Um erro muito comum é confundir UI bonita com UX boa. Você pode ter uma interface linda, com gradientes, animações e tipografia elegante, mas se o usuário não consegue encontrar o botão de "enviar", a UX é péssima.

Analogia: pense em um restaurante. A UI é a decoração — toalhas bonitas, talheres de prata, iluminação agradável. A UX é a experiência completa — o atendimento, a velocidade da comida, a clareza do cardápio, a facilidade de pedir a conta. Um restaurante pode ser lindo e ter um atendimento terrível.

No desenvolvimento web, o Front-End precisa equilibrar UI e UX. Uma aplicação bonita que é difícil de usar fracassa. Uma aplicação fácil de usar que é visualmente confusa também.
-->

---

## Responsabilidades do Front-End

- **Estruturar** o conteúdo da página com HTML semântico;
- **Estilizar** a aparência com CSS;
- **Implementar** interações com JavaScript;
- **Consumir** dados do Back-End via APIs;
- **Garantir** responsividade (adaptação a diferentes telas);
- **Garantir** acessibilidade (uso por pessoas com deficiência);
- **Otimizar** performance (tempo de carregamento).

<!--
FALA DO PROFESSOR:

Vamos consolidar as responsabilidades do Front-End. Não é apenas "fazer a tela bonita". O Front-End tem responsabilidades técnicas significativas.

Estruturar conteúdo com HTML semântico — isso afeta acessibilidade, SEO e manutenibilidade.

Estilizar com CSS — isso inclui não apenas cores e fontes, mas também layout (Flexbox, Grid), responsividade (media queries) e animações.

Implementar interações com JavaScript — isso inclui validação de formulários, manipulação do DOM, eventos do usuário e comunicação assíncrona.

Consumir dados do Back-End — o Front-End precisa saber fazer requisições HTTP, tratar respostas e lidar com erros.

Garantir responsividade — a aplicação precisa funcionar bem em desktops, tablets e celulares.

Garantir acessibilidade — a aplicação precisa ser utilizável por pessoas com deficiência visual, motora ou cognitiva. Isso inclui uso de leitores de tela, contraste de cores, navegação por teclado, entre outros.

Otimizar performance — o tempo de carregamento afeta diretamente a experiência do usuário e o posicionamento em mecanismos de busca.

Perceba que o Front-End é uma área complexa e multifacetada. Não é apenas "colocar coisas na tela".
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Front-End é a **camada de apresentação** da aplicação web;
2. É construído sobre três pilares: **HTML** (estrutura), **CSS** (estilo) e **JavaScript** (comportamento);
3. O **DOM** é a representação em árvore do HTML que permite manipulação dinâmica;
4. **UI** (interface) e **UX** (experiência) são conceitos complementares e distintos;
5. O Front-End tem responsabilidades que vão muito além da aparência visual.

**Pergunta reflexiva:**

> Se o Front-End fosse removido de uma aplicação web, o que sobraria? Seria utilizável?

**Próxima aula:** O que é Back-End? — Vamos entender a camada que processa, armazena e protege os dados.

<!--
FALA DO PROFESSOR:

Encerramos mais uma aula. Revise os cinco conceitos principais e verifique se você consegue explicar cada um com suas próprias palavras.

A pergunta reflexiva é provocativa de propósito: se o Front-End fosse removido, o que sobraria? Sobraria o Back-End — um servidor processando dados, mas sem nenhuma forma de o usuário interagir. Seria como um restaurante sem salão: a cozinha funciona, mas o cliente não consegue pedir nada.

Na próxima aula, vamos estudar o outro lado da moeda: o Back-End. Você vai entender por que o Front-End, sozinho, não é suficiente para construir aplicações completas.
-->

---

<!-- _class: bg-fim -->

#
