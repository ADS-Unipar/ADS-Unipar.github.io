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

# Aula 10

## Frameworks Back-End e Front-End

**Unidade 2 — Frameworks**

<!--
FALA DO PROFESSOR:

Nas aulas anteriores, estudamos o conceito de framework, suas motivações e sua estrutura interna. Agora vamos conhecer os principais frameworks do mercado — tanto back-end quanto front-end.

Não vamos nos aprofundar em nenhum deles — isso seria material para disciplinas inteiras. O objetivo é que você conheça o panorama, entenda as diferenças e seja capaz de avaliar qual framework é mais adequado para cada cenário.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Identificar** os principais frameworks Back-End e Front-End;
- **Comparar** frameworks de diferentes linguagens e paradigmas;
- **Explicar** as características de cada framework;
- **Avaliar** qual framework é mais adequado para cada cenário.

**Taxonomia de Bloom:** Identificar, Comparar, Explicar, Avaliar.

<!--
FALA DO PROFESSOR:

O mercado de frameworks é vasto. Existem dezenas de opções para cada linguagem e paradigma. Nosso objetivo não é aprender todos — é entender o panorama e desenvolver a capacidade de avaliar e escolher.
-->

---

## Frameworks Back-End

| Framework | Linguagem | Características | Ideal para |
|-----------|-----------|-----------------|------------|
| **Express** | JavaScript | Minimalista, flexível, grande ecossistema | APIs, SPAs, microsserviços |
| **NestJS** | TypeScript | Arquitetura modular, inspirado no Angular | APIs enterprise, microsserviços |
| **Django** | Python | "Baterias incluídas", ORM, admin | Aplicações completas, CMS |
| **Flask** | Python | Minimalista, flexível | APIs simples, microsserviços |
| **Spring** | Java | Robusto, enterprise, tipado | Sistemas de grande porte |
| **Laravel** | PHP | Elegante, ORM, Blade | Aplicações web completas |
| **Rails** | Ruby | "Convention over Configuration", produtivo | Startups, protótipos |

<!--
FALA DO PROFESSOR:

Vamos conhecer os principais frameworks back-end.

Express é o framework mais popular do Node.js. É minimalista — fornece o essencial (roteamento, middlewares, servir arquivos estáticos) e deixa o resto para plugins. É a escolha padrão para APIs em JavaScript.

NestJS é um framework TypeScript que segue uma arquitetura modular inspirada no Angular. É mais estruturado que Express e é ideal para projetos enterprise.

Django é o framework mais popular do Python. Diferente do Express, Django é "baterias incluídas" — vem com ORM, admin, autenticação, formulários e muito mais. É ideal para aplicações completas.

Flask é o "Express do Python" — minimalista e flexível. É ideal para APIs simples e microsserviços.

Spring é o framework padrão para Java enterprise. É robusto, tipado e possui um ecossistema enorme. É a escolha para sistemas de grande porte.

Laravel é o framework mais popular do PHP. É conhecido por sua sintaxe elegante e produtividade.

Rails é o framework Ruby que popularizou o princípio "Convention over Configuration". É extremamente produtivo e foi a inspiração para muitos outros frameworks.
-->

---

## Frameworks Front-End

| Framework | Linguagem | Características | Ideal para |
|-----------|-----------|-----------------|------------|
| **React** | JavaScript/JSX | Biblioteca de UI, virtual DOM, componentes | SPAs, aplicações complexas |
| **Angular** | TypeScript | Framework completo, two-way binding | Aplicações enterprise |
| **Vue.js** | JavaScript | Progressivo, fácil de aprender | SPAs, projetos de qualquer porte |
| **Svelte** | JavaScript | Compilação, sem virtual DOM | Performance, projetos leves |
| **Next.js** | React | SSR, SSG, rotas por arquivo | SEO, performance, aplicações completas |

<!--
FALA DO PROFESSOR:

No front-end, o panorama é diferente. Aqui, os frameworks focam em construir interfaces de usuário dinâmicas.

React é o mais popular. Tecnicamente, é uma biblioteca de UI (não um framework completo), mas na prática é usado como framework. Utiliza JSX (JavaScript + HTML), componentes e virtual DOM para atualizar a interface de forma eficiente.

Angular é um framework completo — roteamento, formulários, HTTP, testes, tudo integrado. É mais estruturado e opinativo que React. É a escolha para aplicações enterprise.

Vue.js é o "meio termo" — mais fácil de aprender que Angular, mais completo que React. É progressivo — você pode usar apenas para uma parte da página ou para a aplicação inteira.

Svelte é diferente dos outros. Em vez de usar virtual DOM, ele compila o código em JavaScript otimizado durante o build. Isso resulta em aplicações menores e mais rápidas.

Next.js é um framework construído sobre React que adiciona renderização no servidor (SSR), geração estática (SSG) e rotas por arquivo. É a escolha para aplicações que precisam de SEO e performance.
-->

---

## Express.js — Exemplo Back-End

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// Rota com middleware
app.get('/api/usuarios', autenticar, async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

// Rota com parâmetro
app.get('/api/usuarios/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  if (!usuario) return res.status(404).json({ erro: 'Não encontrado' });
  res.json(usuario);
});

app.listen(3000);
```

<!--
FALA DO PROFESSOR:

Vamos ver um exemplo prático com Express. Observe a simplicidade.

Criamos a aplicação, configuramos o middleware JSON e definimos duas rotas. A primeira rota GET /api/usuarios usa um middleware de autenticação antes de executar o handler. A segunda rota GET /api/usuarios/:id busca um usuário pelo ID.

O Express é minimalista — não tem ORM, não tem template engine, não tem autenticação integrada. Tudo isso é adicionado via plugins. Isso dá flexibilidade, mas exige mais decisões do desenvolvedor.
-->

---

## React — Exemplo Front-End

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

<!--
FALA DO PROFESSOR:

Agora um exemplo com React. Observe a estrutura.

O componente ListaUsuarios é uma função que retorna JSX — uma sintaxe que mistura JavaScript com HTML. O useState é um hook que gerencia estado — a lista de usuários. O useEffect é um hook que executa efeitos colaterais — neste caso, buscar dados do servidor quando o componente é montado.

O React utiliza o conceito de "componentes" — funções que retornam pedaços de interface. Cada componente pode ter seu próprio estado e ciclo de vida. Componentes podem ser compostos — um componente pode renderizar outros componentes.

O virtual DOM do React é uma representação em memória do DOM real. Quando o estado muda, o React calcula a diferença entre o virtual DOM antigo e o novo e atualiza apenas o que mudou. Isso é mais eficiente do que recriar o DOM inteiro.
-->

---

## Comparativo: Express vs. Django vs. Laravel

| Aspecto | Express | Django | Laravel |
|---------|---------|--------|---------|
| **Linguagem** | JavaScript | Python | PHP |
| **Filosofia** | Minimalista | Baterias incluídas | Elegante |
| **ORM** | Não (usa plugins) | Sim (integrado) | Eloquent (integrado) |
| **Admin** | Não | Sim (integrado) | Não (usa plugins) |
| **Template Engine** | Não (usa plugins) | Sim (Django Templates) | Blade |
| **Curva de aprendizagem** | Baixa | Média | Média |
| **Flexibilidade** | Alta | Média | Média |

<!--
FALA DO PROFESSOR:

Vamos comparar três frameworks back-end de filosofias diferentes.

Express é minimalista. Não vem com ORM, admin ou template engine. Você adiciona o que precisa via plugins. Isso dá muita flexibilidade, mas exige mais decisões.

Django é "baterias incluídas". Vem com ORM, admin, autenticação, formulários, template engine — tudo integrado. Isso reduz decisões, mas pode ser overkill para projetos simples.

Laravel é o meio termo. Vem com ORM (Eloquent), template engine (Blade) e muitas funcionalidades integradas, mas mantém flexibilidade.

A escolha depende do contexto. Se você precisa de flexibilidade total, Express. Se precisa de produtividade rápida, Django ou Laravel. Se a equipe conhece JavaScript, Express. Se conhece Python, Django. Se conhece PHP, Laravel.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Existem muitos frameworks **Back-End** e **Front-End** — cada um com filosofia diferente;
2. **Express** é minimalista, **Django** é completo, **Laravel** é elegante;
3. **React**, **Angular** e **Vue.js** são os principais frameworks Front-End;
4. A escolha do framework depende do **contexto**, **equipe** e **requisitos**;
5. Não existe "o melhor" framework — existe o **mais adequado** para cada caso.

**Pergunta reflexiva:**

> Se você fosse iniciar um novo projeto hoje, qual framework escolheria e por quê?

**Próxima aula:** Pull-based × Push-based — Vamos estudar dois paradigmas fundamentais de frameworks.

<!--
FALA DO PROFESSOR:

Encerramos esta aula panorâmica. O objetivo era que você conhecesse o mercado e desenvolvesse a capacidade de comparar e avaliar.

Na próxima aula, vamos estudar dois paradigmas importantes: Pull-based e Push-based. Essa distinção afeta a forma como o framework processa requisições e renderiza interfaces.
-->

---

<!-- _class: bg-fim -->

#
