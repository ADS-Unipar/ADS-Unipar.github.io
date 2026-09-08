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

# Aula 03

## O que é Back-End?

**Unidade 1 — Back-End e Front-End**

<!--
FALA DO PROFESSOR:

Na aula anterior, estudamos o Front-End — a camada visível da aplicação web. Agora vamos explorar o outro lado: o Back-End.

Se o Front-End é a fachada de um banco, o Back-End é todo o sistema por trás do balcão: o cofre, os computadores, os processos de segurança, a equipe que processa transações. O cliente não vê nada disso, mas sem ele, o banco não funciona.

Nesta aula, vamos entender o que é Back-End, quais são suas responsabilidades, quais tecnologias o compõem e por que ele é indispensável em qualquer aplicação web moderna.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o conceito de Back-End e seu papel na aplicação web;
- **Identificar** as principais tecnologias de Back-End (Node.js, PHP, Python, Java);
- **Explicar** o papel do banco de dados no armazenamento de dados;
- **Descrever** o ciclo de vida de uma requisição no servidor;
- **Comparar** as responsabilidades de Front-End e Back-End.

**Taxonomia de Bloom:** Compreender, Identificar, Explicar, Comparar.

<!--
FALA DO PROFESSOR:

Observe que incluí o verbo "comparar" nos objetivos. Isso é intencional: agora que você já conhece o Front-End e está conhecendo o Back-End, é o momento de comparar as duas camadas. Comparar é um nível cognitivo mais alto do que simplesmente descrever — exige que você entenda ambas as partes e identifique semelhanças e diferenças.

Ao final da aula, tente responder: qual é a diferença fundamental entre Front-End e Back-End? Não apenas na tecnologia, mas na responsabilidade.
-->

---

## Conceito de Back-End

- É a parte da aplicação que roda **no servidor**;
- Responsável pelo **processamento**, **armazenamento** e **segurança** dos dados;
- O usuário **não vê** diretamente o Back-End;
- É o "cérebro" da aplicação web.

> **Qual problema resolve?** Processa dados, aplica regras de negócio, acessa bancos de dados e garante a segurança da aplicação.

<!--
FALA DO PROFESSOR:

Back-End é toda a lógica que roda no servidor. Quando o usuário preenche um formulário e clica em "enviar", os dados vão para o Back-End. Lá, o servidor valida os dados, aplica regras de negócio (por exemplo, "o e-mail deve ser único"), armazena no banco de dados e devolve uma resposta ao Front-End.

O usuário nunca vê o código do Back-End. Ele vê apenas os resultados: uma mensagem de sucesso, uma lista de dados, um erro de validação. Mas por trás desses resultados, existe todo um processamento que pode envolver consultas a bancos de dados, cálculos complexos, integrações com outros sistemas, autenticação de usuários e muito mais.

Analogia: pense em um restaurante self-service. O cliente vê a bandeja com a comida (Front-End). Mas por trás, na cozinha, existe todo um processo de preparação, higiene, controle de qualidade e logística (Back-End). Sem a cozinha, não há comida para servir.
-->

---

## Responsabilidades do Back-End

- **Processar** requisições HTTP recebidas do Front-End;
- **Executar** a lógica de negócio da aplicação;
- **Acessar** e **manipular** dados no banco de dados;
- **Autenticar** e **autorizar** usuários;
- **Garantir** a segurança dos dados;
- **Expor** APIs para consumo pelo Front-End;
- **Tratar** erros e exceções de forma adequada.

<!--
FALA DO PROFESSOR:

Vamos detalhar cada responsabilidade.

Processar requisições HTTP: quando o Front-End envia uma requisição (GET, POST, PUT, DELETE), o Back-End recebe, interpreta e direciona para o código correto.

Executar lógica de negócio: são as regras que definem como a aplicação funciona. Por exemplo: "um usuário não pode cadastrar dois e-mails iguais", "um pedido só pode ser feito se houver estoque", "um administrador pode excluir registros, mas um usuário comum não".

Acessar banco de dados: o Back-End é responsável por salvar, consultar, atualizar e deletar dados. O banco de dados é onde os dados persistem — mesmo que o servidor seja reiniciado, os dados continuam lá.

Autenticar e autorizar: autenticação verifica quem é o usuário (login/senha). Autorização verifica o que o usuário pode fazer (permissões). Ambas são responsabilidades do Back-End.

Expor APIs: o Back-End disponibiliza endpoints (URLs) que o Front-End pode consumir. Esses endpoints seguem um contrato — geralmente REST — e retornam dados em formato JSON.

Tratar erros: quando algo dá errado (banco de dados indisponível, dados inválidos, permissão negada), o Back-End precisa capturar o erro e devolver uma resposta adequada ao Front-End.
-->

---

## Tecnologias de Back-End

| Tecnologia | Linguagem | Característica Principal |
|------------|-----------|--------------------------|
| **Node.js** | JavaScript | Assíncrono, event-driven, mesma linguagem do Front-End |
| **Express** | JavaScript | Framework minimalista para Node.js |
| **PHP** | PHP | Amplamente utilizado, fácil hospedagem |
| **Django** | Python | Framework completo, "baterias incluídas" |
| **Spring** | Java | Robusto, enterprise, tipado |
| **Laravel** | PHP | Elegante, sintaxe expressiva |

<!--
FALA DO PROFESSOR:

Existem muitas tecnologias de Back-End. A escolha depende do contexto, da equipe, do projeto e dos requisitos.

Node.js merece destaque porque utiliza JavaScript — a mesma linguagem do Front-End. Isso significa que um desenvolvedor pode trabalhar nas duas camadas com uma única linguagem. Node.js é assíncrono e baseado em eventos, o que o torna eficiente para aplicações que lidam com muitas requisições simultâneas.

Express é o framework mais popular para Node.js. Ele simplifica a criação de servidores, rotas e middlewares. Vamos utilizá-lo extensivamente nesta disciplina.

PHP é uma das linguagens mais antigas da web. Apesar de críticas, ainda é utilizada em milhões de sites (WordPress, por exemplo). Laravel é o framework PHP moderno mais popular.

Django (Python) e Spring (Java) são frameworks mais robustos, utilizados em aplicações de grande porte.

Nesta disciplina, vamos focar em Node.js com Express, pois permite trabalhar com JavaScript em ambas as camadas — o que simplifica o aprendizado e reflete uma tendência do mercado.
-->

---

## Banco de Dados

```
┌──────────┐     ┌──────────┐     ┌──────────────┐
│ FRONT-END│ ──► │ BACK-END │ ──► │ BANCO DE     │
│          │ ◄── │          │ ◄── │ DADOS        │
└──────────┘     └──────────┘     └──────────────┘
  Requisição      Processamento     Armazenamento
  Resposta        Lógica            Persistência
```

- **Banco de Dados:** sistema organizado para armazenar e recuperar dados;
- **Relacional (SQL):** MySQL, PostgreSQL, SQLite — dados em tabelas com relacionamentos;
- **Não-relacional (NoSQL):** MongoDB, Redis — dados em documentos, chave-valor, grafos.

<!--
FALA DO PROFESSOR:

O banco de dados é o componente responsável pela persistência dos dados. Sem ele, os dados existiriam apenas na memória do servidor — e seriam perdidos a cada reinicialização.

Existem duas grandes categorias de bancos de dados.

Bancos relacionais (SQL) armazenam dados em tabelas com linhas e colunas, como uma planilha. As tabelas se relacionam por meio de chaves (primárias e estrangeiras). São ideais para dados estruturados e que exigem consistência. Exemplos: MySQL, PostgreSQL, SQLite.

Bancos não-relacionais (NoSQL) armazenam dados em formatos mais flexíveis: documentos JSON (MongoDB), pares chave-valor (Redis), grafos (Neo4j). São ideais para dados semi-estruturados ou que exigem alta escalabilidade horizontal.

A escolha entre SQL e NoSQL depende do tipo de dados, dos requisitos de consistência e da escalabilidade necessária. Não existe "o melhor" — existe o mais adequado para cada caso.

Nesta disciplina, vamos utilizar SQLite para exemplos simples e MongoDB para exemplos NoSQL. O mais importante é compreender o conceito, não a ferramenta específica.
-->

---

## Ciclo de Vida de uma Requisição

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

<!--
FALA DO PROFESSOR:

Este diagrama mostra o ciclo completo de uma requisição. Vamos passar por cada etapa.

1. O usuário interage com a interface — por exemplo, preenche um formulário e clica em "Salvar".

2. O Front-End captura o evento e envia uma requisição HTTP (neste caso, POST) para o endpoint /api/usuarios, com os dados do usuário no corpo da requisição em formato JSON.

3. O servidor (Node.js com Express, por exemplo) recebe a requisição.

4. Os middlewares processam a requisição. Middlewares são funções intermediárias que executam antes do handler principal. Podem fazer parse de JSON, verificar CORS, validar tokens de autenticação, etc.

5. O Router direciona a requisição para o Controller correto, com base no método HTTP e na URL.

6. O Controller executa a lógica de negócio — valida os dados, aplica regras e chama o Repository.

7. O Repository acessa o banco de dados — insere, consulta, atualiza ou deleta registros.

8. O Controller constrói a resposta — geralmente um JSON com status code (200, 201, 400, 404, 500).

9. O Front-End recebe a resposta e atualiza a interface — mostra uma mensagem de sucesso, atualiza a lista, exibe um erro, etc.

Esse ciclo se repete para cada interação do usuário. Compreendê-lo é fundamental para entender como as aplicações web funcionam.
-->

---

## Exemplo de Back-End com Express

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

<!--
FALA DO PROFESSOR:

Este é um exemplo real de um servidor Back-End com Express. Vamos analisar linha por linha.

Na primeira linha, importamos o Express. Na segunda, criamos a aplicação. Na terceira, configuramos o middleware express.json(), que faz o parse do corpo das requisições JSON — sem isso, req.body seria undefined.

Criamos um array vazio para simular um banco de dados. Em uma aplicação real, usaríamos um banco de dados como MySQL ou MongoDB.

A primeira rota (GET /api/usuarios) retorna todos os usuários. Quando o Front-End faz uma requisição GET para essa URL, o servidor devolve o array completo em formato JSON.

A segunda rota (POST /api/usuarios) cria um novo usuário. Ela extrai nome e email do corpo da requisição (req.body), cria um objeto com um ID gerado automaticamente, adiciona ao array e devolve o objeto criado com status 201 (Created).

Por fim, o servidor começa a escutar na porta 3000. Quando você executa node server.js, o servidor fica aguardando requisições.

Note a simplicidade. Em poucas linhas, temos um servidor funcional com duas rotas REST. É claro que uma aplicação real seria muito mais complexa, mas o princípio é o mesmo.
-->

---

## Erros Comuns

| Erro | Consequência | Solução |
|------|--------------|---------|
| Não validar dados no Back-End | Dados inválidos no banco | Sempre validar no servidor |
| Expor detalhes internos no erro | Falha de segurança | Mensagens genéricas para o cliente |
| Não tratar exceções | Servidor trava | Usar try/catch e middleware de erro |
| Confundir autenticação com autorização | Falha de segurança | Implementar ambos separadamente |
| Não usar HTTPS | Dados interceptados | Sempre usar HTTPS em produção |

<!--
FALA DO PROFESSOR:

Vamos falar dos erros mais comuns que desenvolvedores iniciantes cometem no Back-End.

O primeiro e mais grave: não validar dados no servidor. Muitos desenvolvedores validam apenas no Front-End. Isso é um erro crítico, porque o Front-End pode ser contornado — qualquer pessoa pode enviar uma requisição HTTP diretamente, sem passar pelo formulário. O Back-End deve ser o último bastião de validação.

O segundo: expor detalhes internos em mensagens de erro. Se o servidor devolve "Erro na query SQL: tabela usuarios não encontrada", você está revelando informações sobre sua estrutura interna para um possível atacante. Em produção, devolva mensagens genéricas como "Erro interno do servidor".

O terceiro: não tratar exceções. Se uma exceção não capturada ocorre, o servidor pode travar. Use try/catch e middlewares de tratamento de erro.

O quarto: confundir autenticação com autorização. Autenticação é "quem é você?". Autorização é "o que você pode fazer?". São camadas de segurança distintas.

O quinto: não usar HTTPS. Em produção, toda comunicação deve ser criptografada. Sem HTTPS, dados como senhas e informações pessoais podem ser interceptados.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Back-End é a **camada de processamento** que roda no servidor;
2. É responsável pela **lógica de negócio**, **banco de dados** e **segurança**;
3. Tecnologias populares: **Node.js**, **Express**, **PHP**, **Django**, **Spring**;
4. O **banco de dados** garante a persistência dos dados;
5. O ciclo de vida de uma requisição envolve **múltiplas etapas** no servidor.

**Pergunta reflexiva:**

> Se o Back-End fosse responsável apenas por servir arquivos estáticos, precisaríamos dele?

**Próxima aula:** Como Front-End e Back-End se comunicam? — Vamos estudar HTTP, APIs e o contrato entre as camadas.

<!--
FALA DO PROFESSOR:

Encerramos a aula sobre Back-End. Revise os cinco conceitos principais e certifique-se de que compreende cada um.

A pergunta reflexiva é interessante: se o Back-End apenas servisse arquivos estáticos (HTML, CSS, JS), ele seria apenas um servidor de arquivos — como o Apache ou Nginx em sua configuração mais básica. Nesse caso, não haveria processamento de dados, não haveria banco de dados, não haveria lógica de negócio. A aplicação seria puramente estática.

Mas aplicações modernas não são estáticas. Elas precisam processar dados, autenticar usuários, aplicar regras de negócio. É aí que o Back-End se torna indispensável.

Na próxima aula, vamos estudar como Front-End e Back-End se comunicam. Essa comunicação é o que une as duas camadas em uma aplicação funcional.
-->

---

<!-- _class: bg-fim -->

#
