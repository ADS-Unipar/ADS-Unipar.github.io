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

# Aula 08

## Por que utilizar Frameworks?

**Unidade 2 — Frameworks**

<!--
FALA DO PROFESSOR:

Na aula anterior, entendemos o que é um Framework e como ele difere de uma biblioteca. Agora vamos aprofundar a pergunta: por que utilizá-los?

A resposta não é simplesmente "porque é mais fácil". Existem razões técnicas, econômicas e organizacionais profundas. Nesta aula, vamos estudar cada uma delas e comparar cenários com e sem framework.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Explicar** as motivações técnicas para o uso de Frameworks;
- **Comparar** o desenvolvimento com e sem Framework;
- **Analisar** o impacto de Frameworks na produtividade e qualidade;
- **Avaliar** cenários em que o uso de Framework é recomendado ou não.

**Taxonomia de Bloom:** Explicar, Comparar, Analisar, Avaliar.

<!--
FALA DO PROFESSOR:

Note os verbos "analisar" e "avaliar". Estamos subindo na Taxonomia de Bloom. Não basta saber que frameworks são úteis — é preciso ser capaz de avaliar quando usá-los e quando não usá-los.
-->

---

## Motivação 1: Eliminar Repetição

**Sem framework — código repetido em cada projeto:**
```javascript
// Criar servidor (todo projeto)
const server = http.createServer(handler);
// Parse de JSON (todo projeto)
let body = '';
req.on('data', chunk => body += chunk);
req.on('end', () => { data = JSON.parse(body); });
// Servir arquivos estáticos (todo projeto)
fs.readFile('./public/index.html', (err, data) => { ... });
```

**Com framework — código focado no que é único:**
```javascript
app.use(express.json());
app.use(express.static('public'));
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});
```

<!--
FALA DO PROFESSOR:

A primeira motivação é eliminar repetição. Sem framework, cada projeto começa com dezenas de linhas de código de infraestrutura — criar servidor, fazer parse de JSON, servir arquivos estáticos, configurar CORS, tratar erros. Esse código é igual em todos os projetos.

Com framework, toda essa infraestrutura é fornecida automaticamente. Você escreve apenas o que é único do seu projeto — as rotas, a lógica de negócio, os dados.

Isso não é apenas uma questão de conveniência. É uma questão de foco. Quanto mais tempo você gasta com infraestrutura, menos tempo tem para a lógica de negócio — que é o que realmente agrega valor ao projeto.
-->

---

## Motivação 2: Padronização

| Sem Framework | Com Framework |
|---------------|---------------|
| Cada dev organiza de um jeito | Convenções definidas pelo framework |
| Nomes inconsistentes | Padrões de nomenclatura |
| Estruturas diferentes | Estrutura de pastas padronizada |
| Dificulta colaboração | Facilita colaboração |

> **Convenção sobre Configuração (Convention over Configuration):** O framework define padrões razoáveis por padrão, reduzindo a necessidade de configuração manual.

<!--
FALA DO PROFESSOR:

A segunda motivação é padronização. Sem framework, cada desenvolvedor organiza o projeto de um jeito. Um coloca as rotas no arquivo principal, outro cria uma pasta routes. Um usa callbacks, outro usa Promises. Um nomeia em português, outro em inglês.

Com framework, existem convenções — regras de como fazer as coisas. O Express, por exemplo, espera que middlewares sejam funções com a assinatura (req, res, next). O React espera que componentes sejam funções que retornam JSX. O Django espera que modelos estejam na pasta models.

Isso facilita enormemente a colaboração. Quando um novo desenvolvedor entra em um projeto que usa Express, ele já sabe onde procurar as rotas, os middlewares e os controllers. Não precisa aprender uma estrutura customizada.

Esse princípio se chama "Convention over Configuration" — convenção sobre configuração. O framework define padrões razoáveis por padrão. Se você seguir as convenções, não precisa configurar nada. Se quiser personalizar, pode — mas a configuração padrão já é suficiente para a maioria dos casos.
-->

---

## Motivação 3: Comunidade e Ecossistema

- **Documentação** oficial e da comunidade;
- **Tutoriais** e cursos disponíveis;
- **Plugins** e extensões prontas;
- **Stack Overflow** com milhares de respostas;
- **GitHub** com issues e discussões;
- **Conferências** e meetups.

> **Dado:** O Express.js possui mais de **60.000 estrelas** no GitHub e é utilizado por **milhões** de projetos.

<!--
FALA DO PROFESSOR:

A terceira motivação é a comunidade. Quando você escolhe um framework popular, não está apenas escolhendo uma tecnologia — está escolhendo um ecossistema.

Documentação: frameworks populares possuem documentação completa, com exemplos, guias e referências de API.

Tutoriais: existem milhares de tutoriais, cursos e vídeos sobre frameworks populares. Se você tiver uma dúvida, é provável que alguém já tenha publicado uma solução.

Plugins: frameworks populares possuem ecossistemas de plugins. O Express, por exemplo, tem middlewares para autenticação, validação, upload de arquivos, cache, CORS, logging e muito mais. Em vez de implementar tudo do zero, você instala um plugin.

Stack Overflow: se você encontrar um erro, é provável que alguém já tenha perguntado e recebido uma resposta no Stack Overflow.

Tudo isso reduz o tempo de desenvolvimento e o risco de ficar preso em um problema sem solução.
-->

---

## Motivação 4: Segurança

| Vulnerabilidade | Sem Framework | Com Framework |
|-----------------|---------------|---------------|
| **XSS** | Implementar manualmente | Proteção built-in |
| **CSRF** | Implementar manualmente | Middleware pronto |
| **SQL Injection** | Implementar manualmente | ORM parametrizado |
| **Helmet** | Configurar manualmente | Middleware pronto |

> **Frameworks populares são auditados** por milhares de desenvolvedores. Vulnerabilidades são identificadas e corrigidas rapidamente.

<!--
FALA DO PROFESSOR:

A quarta motivação é segurança. Segurança é difícil. Existem dezenas de vulnerabilidades conhecidas — XSS, CSRF, SQL Injection, clickjacking, session fixation, entre outras.

Sem framework, você precisa implementar proteções contra cada uma delas manualmente. É fácil esquecer uma. É fácil implementar incorretamente.

Com framework, muitas proteções já estão integradas. O Express tem middlewares como helmet (que configura headers de segurança) e csurf (que protege contra CSRF). ORMs como Sequelize e Mongoose parametrizam queries, prevenindo SQL Injection.

Além disso, frameworks populares são auditados por milhares de desenvolvedores. Quando uma vulnerabilidade é descoberta, ela é corrigida rapidamente e uma atualização é lançada. Se você implementa tudo manualmente, não tem essa rede de segurança.
-->

---

## Motivação 5: Escalabilidade

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

> **Frameworks são projetados para escalar** — de pequenos a grandes projetos.

<!--
FALA DO PROFESSOR:

A quinta motivação é escalabilidade. Um projeto pequeno pode funcionar bem sem framework. Um server.js com 200 linhas é perfeitamente gerenciável.

Mas conforme o projeto cresce, a falta de estrutura se torna um problema. Com 2.000 linhas em um único arquivo, torna-se difícil encontrar código, adicionar funcionalidades e corrigir bugs. Com 20.000 linhas, é praticamente impossível.

Frameworks são projetados para escalar. Eles impõem uma estrutura modular — rotas em uma pasta, controllers em outra, services em outra. Isso permite que o projeto cresça de forma organizada.

Além disso, frameworks oferecem mecanismos de escalabilidade técnica — como suporte a cache, balanceamento de carga, separação de camadas e integração com bancos de dados distribuídos.
-->

---

## Quando NÃO Usar um Framework?

| Cenário | Recomendação |
|---------|--------------|
| Projeto muito simples (1-2 rotas) | Pode ser overkill |
| Aprendizado de fundamentos | Prefira fazer manualmente primeiro |
| Requisitos muito específicos | Framework pode ser restritivo |
| Equipe sem experiência com o framework | Considere a curva de aprendizagem |
| Protótipo rápido (hackathon) | Pode usar abordagem mais simples |

> **Princípio:** Não use um framework apenas porque é popular. Use porque resolve o **seu problema**.

<!--
FALA DO PROFESSOR:

Frameworks não são sempre a melhor escolha. Existem cenários em que não usá-los é mais adequado.

Projeto muito simples: se você precisa de uma API com duas rotas, criar um servidor com Express pode ser overkill. Um script simples com Node.js puro pode ser suficiente.

Aprendizado de fundamentos: é exatamente o que fizemos na Unidade 1. Antes de usar frameworks, você precisa entender o que acontece por baixo dos panos.

Requisitos muito específicos: se o projeto tem requisitos que o framework não atende bem, pode ser mais fácil construir do zero do que "lutar" contra o framework.

Equipe sem experiência: se a equipe nunca usou o framework, há um custo de aprendizagem. Em projetos com prazos apertados, isso pode ser um problema.

Protótipo rápido: em hackathons ou provas de conceito, a velocidade é mais importante que a organização. Uma abordagem mais simples pode ser mais adequada.

O princípio é: não use um framework porque é popular. Use porque resolve o seu problema, no seu contexto, com sua equipe.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Frameworks eliminam **repetição** e fornecem infraestrutura pronta;
2. A **padronização** facilita colaboração e manutenção;
3. A **comunidade** oferece documentação, plugins e suporte;
4. Frameworks contribuem para **segurança** e **escalabilidade**;
5. Nem sempre um framework é a melhor escolha — avalie o **contexto**.

**Pergunta reflexiva:**

> Se você pudesse escolher apenas UMA razão para usar um framework, qual seria? Por quê?

**Próxima aula:** Estrutura de um Framework — Vamos desmontar um framework para entender suas partes.

<!--
FALA DO PROFESSOR:

Encerramos esta aula. A pergunta reflexiva é deliberadamente difícil — pede que você escolha apenas uma razão. Isso força uma análise mais profunda.

Na próxima aula, vamos desmontar a estrutura de um framework. Você vai entender que todo framework é composto por componentes fundamentais — e que esses componentes são os mesmos conceitos que estudamos na Unidade 1.
-->

---

<!-- _class: bg-fim -->

#
