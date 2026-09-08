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

# Aula 07

## O que é um Framework?

**Unidade 2 — Frameworks**

<!--
FALA DO PROFESSOR:

Bem-vindos à Unidade 2! Na Unidade 1, construímos aplicações web manualmente. Definimos rotas, middlewares, controllers e toda a estrutura do zero. Isso foi essencial para entender como as coisas funcionam por dentro.

Agora vamos estudar Frameworks — ferramentas que automatizam e organizam grande parte desse trabalho. Mas antes de usar um framework, precisamos entender o que ele é, por que existe e como funciona.

Nesta aula, vamos responder às perguntas fundamentais: O que é um Framework? Por que ele existe? Qual problema resolve? Como difere de uma biblioteca?
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o conceito de Framework e sua finalidade;
- **Diferenciar** Framework de biblioteca;
- **Identificar** as vantagens do uso de Frameworks;
- **Explicar** o princípio de Inversão de Controle;
- **Analisar** quando utilizar e quando não utilizar um Framework.

**Taxonomia de Bloom:** Compreender, Diferenciar, Identificar, Explicar, Analisar.

<!--
FALA DO PROFESSOR:

Esta aula é conceitual. Não vamos escrever código ainda — vamos entender o "porquê" antes do "como". Isso é fundamental porque muitos desenvolvedores pulam direto para o código sem entender o que o framework faz por eles.

O conceito mais importante desta aula é a Inversão de Controle. Quando você usa um framework, não é mais você quem controla o fluxo da aplicação — é o framework. Isso muda completamente a forma como você pensa o código.
-->

---

## O Problema: Desenvolvimento Sem Framework

Imagine construir uma aplicação web **sem framework**:

- Criar servidor HTTP manualmente;
- Implementar roteamento manualmente;
- Fazer parse de JSON manualmente;
- Gerenciar middlewares manualmente;
- Servir arquivos estáticos manualmente;
- Tratar erros manualmente;
- Cada desenvolvedor cria sua própria estrutura.

> **Resultado:** Código repetitivo, inconsistente, difícil de manter e de colaborar.

<!--
FALA DO PROFESSOR:

Na Unidade 1, fizemos tudo manualmente. Criamos o servidor com http.createServer(), implementamos rotas com if/else, fizemos parse de JSON com JSON.parse(), servimos arquivos estáticos com fs.readFile(). Funcionou, mas foi trabalhoso.

Agora imagine fazer isso em cada projeto. Cada vez que você inicia uma aplicação, precisa reescrever toda essa infraestrutura. Cada desenvolvedor cria sua própria estrutura — um usa callbacks, outro usa Promises, outro usa async/await. As pastas são organizadas de formas diferentes. Os padrões são diferentes.

Isso gera três problemas. Primeiro: repetição. Você reescreve o mesmo código várias vezes. Segundo: inconsistência. Cada projeto é organizado de forma diferente. Terceiro: dificuldade de colaboração. Quando um novo desenvolvedor entra no projeto, precisa aprender a estrutura única daquele projeto.

Frameworks resolvem esses problemas fornecendo uma estrutura padronizada, reutilizável e testada pela comunidade.
-->

---

## O que é um Framework?

- É uma **estrutura de software** que fornece:
  - **Padrões** de organização;
  - **Componentes** reutilizáveis;
  - **Convenções** de desenvolvimento;
  - **Infraestrutura** pronta para uso.

> **Definição formal:** Um framework é um conjunto de classes, bibliotecas e ferramentas que fornecem uma estrutura genérica e reutilizável para o desenvolvimento de aplicações.

<!--
FALA DO PROFESSOR:

Vamos definir framework com precisão. Um framework é uma estrutura de software que fornece padrões, componentes, convenções e infraestrutura para o desenvolvimento de aplicações.

Observe que não disse "código pronto". Um framework não é um produto final — é uma base sobre a qual você constrói. É como a estrutura de um prédio: vigas, pilares, fundações. Você não constrói o prédio do zero — você parte da estrutura e adiciona paredes, acabamento, instalações.

Frameworks fornecem convenções — regras de como fazer as coisas. Por exemplo: "rotas ficam na pasta routes", "controllers ficam na pasta controllers", "o arquivo principal se chama index.js". Essas convenções eliminam a necessidade de tomar decisões repetitivas e garantem consistência entre projetos.

Frameworks também fornecem componentes reutilizáveis — como roteadores, middlewares, ORMs, template engines. Em vez de implementar tudo do zero, você utiliza os componentes do framework e foca na lógica de negócio.
-->

---

## Framework vs. Biblioteca

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

> **Diferença-chave:** Em uma biblioteca, **você** controla o fluxo. Em um framework, **ele** controla o fluxo.

<!--
FALA DO PROFESSOR:

Esta é uma das distinções mais importantes da aula. Framework e biblioteca não são a mesma coisa.

Uma biblioteca é um conjunto de funções que você chama quando precisa. jQuery, por exemplo, é uma biblioteca. Você importa jQuery e usa suas funções — $.ajax(), $.addClass(), $.animate(). Você controla quando e como chamar cada função.

Um framework é o oposto. Ele define a estrutura e o fluxo da aplicação. Você escreve o código que o framework chama. No Express, por exemplo, você define rotas e middlewares — mas é o Express que recebe as requisições e chama suas funções.

Isso se chama Inversão de Controle (Inversion of Control — IoC). Em uma biblioteca, o controle está no seu código. Em um framework, o controle está no framework. É por isso que dizemos: "com uma biblioteca, você usa a biblioteca. Com um framework, o framework usa você."

Essa distinção é sutil, mas fundamental. Ela explica por que frameworks impõem mais restrições do que bibliotecas — e por que, ao mesmo tempo, eles proporcionam mais produtividade.
-->

---

## Princípio de Inversão de Controle (IoC)

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

<!--
FALA DO PROFESSOR:

Vamos ver a Inversão de Controle na prática.

Sem framework, você cria o servidor HTTP manualmente, verifica a URL e o método com ifs, define os headers manualmente e envia a resposta. Você controla cada detalhe.

Com framework (Express), você apenas define a rota e o handler. O Express cuida de tudo mais — criar o servidor, fazer o parse da URL, verificar o método, chamar o handler correto, enviar a resposta.

Observe que, no segundo exemplo, é o Express que chama a sua função (req, res) => { ... }. Você não chama o Express — ele chama você. Isso é Inversão de Controle.

A vantagem é enorme. Em vez de reescrever toda a infraestrutura a cada projeto, você foca no que é único: as rotas, a lógica de negócio, os dados. O framework cuida do que é comum: servidor, roteamento, parsing, middlewares, tratamento de erros.
-->

---

## Vantagens dos Frameworks

| Vantagem | Descrição |
|----------|-----------|
| **Produtividade** | Menos código para escrever, mais foco na lógica de negócio |
| **Padronização** | Convenções que garantem consistência entre projetos |
| **Comunidade** | Documentação, tutoriais, plugins, suporte |
| **Testes** | Muitos frameworks possuem suporte integrado a testes |
| **Segurança** | Proteções contra vulnerabilidades comuns (XSS, CSRF, SQL Injection) |
| **Escalabilidade** | Arquitetura preparada para crescer |

<!--
FALA DO PROFESSOR:

Vamos detalhar cada vantagem.

Produtividade: com um framework, você não precisa implementar roteamento, parsing de JSON, servir arquivos estáticos, gerenciar sessões. Tudo isso já está pronto. Você foca no que é único do seu projeto.

Padronização: quando toda a equipe usa o mesmo framework, todos seguem as mesmas convenções. Isso facilita a colaboração, a revisão de código e a manutenção.

Comunidade: frameworks populares possuem comunidades enormes. Isso significa documentação abundante, tutoriais, cursos, plugins prontos e suporte ativo. Se você tiver um problema, é provável que alguém já tenha resolvido.

Testes: muitos frameworks possuem suporte integrado a testes — ferramentas de mocking, helpers de teste, integração com frameworks de teste como Jest e Mocha.

Segurança: frameworks populares implementam proteções contra vulnerabilidades comuns — XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery), SQL Injection. Em vez de implementar essas proteções manualmente, você as obtém "de graça".

Escalabilidade: frameworks são projetados para crescer. Arquitetura modular, suporte a cache, balanceamento de carga, separação de camadas — tudo isso facilita a escalabilidade.
-->

---

## Desvantagens dos Frameworks

| Desvantagem | Descrição |
|-------------|-----------|
| **Curva de aprendizagem** | Cada framework tem seus conceitos e convenções |
| **Restrições** | O framework impõe como você deve fazer as coisas |
| **Overhead** | Pode adicionar complexidade desnecessária a projetos simples |
| **Dependência** | Se o framework for descontinuado, o projeto é afetado |
| **"Magia"** | O que acontece por baixo dos panos pode ser opaco |

> **Princípio:** Use o framework certo para o problema certo. Nem sempre um framework é a melhor solução.

<!--
FALA DO PROFESSOR:

Frameworks não são perfeitos. Vamos discutir as desvantagens.

Curva de aprendizagem: cada framework tem seus conceitos, convenções e APIs. Express é relativamente simples, mas React, Angular e Django exigem um investimento significativo de tempo para aprender.

Restrições: o framework impõe como você deve fazer as coisas. Se você quiser fazer diferente, pode ser difícil ou impossível. Isso é o custo da padronização.

Overhead: para projetos muito simples — como uma API com duas rotas — um framework pode ser overkill. O overhead de configuração e dependências pode não justificar.

Dependência: se o framework for descontinuado ou perder suporte da comunidade, seu projeto fica dependente de uma tecnologia obsoleta. Por isso é importante escolher frameworks maduros e ativamente mantidos.

"Magia": frameworks fazem muitas coisas automaticamente. Isso é bom para produtividade, mas ruim para compreensão. Quando algo dá errado "dentro do framework", pode ser difícil diagnosticar se você não entende o que ele faz por baixo dos panos.

É por isso que estudamos o "manual" na Unidade 1 antes de usar frameworks na Unidade 2. Você precisa entender o que o framework faz para poder usá-lo com eficiência.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Um Framework é uma **estrutura de software** que fornece padrões, componentes e convenções;
2. A diferença fundamental entre Framework e biblioteca é a **Inversão de Controle**;
3. Frameworks aumentam **produtividade**, **padronização** e **qualidade**;
4. Frameworks têm **desvantagens**: curva de aprendizagem, restrições e dependência;
5. A escolha do framework deve considerar o **contexto**, os **requisitos** e os **trade-offs**.

**Pergunta reflexiva:**

> Se frameworks impõem restrições, por que a maioria das equipes profissionais os utiliza?

**Próxima aula:** Por que utilizar Frameworks? — Vamos aprofundar as motivações e estudar casos reais.

<!--
FALA DO PROFESSOR:

Encerramos a primeira aula da Unidade 2. Revise os cinco conceitos principais e reflita sobre a pergunta.

A resposta esperada é que as vantagens superam as desvantagens na maioria dos casos. A padronização, a produtividade e o suporte da comunidade compensam as restrições impostas pelo framework.

Na próxima aula, vamos aprofundar as motivações para usar frameworks e estudar como diferentes frameworks resolvem diferentes problemas.
-->

---

<!-- _class: bg-fim -->

#
