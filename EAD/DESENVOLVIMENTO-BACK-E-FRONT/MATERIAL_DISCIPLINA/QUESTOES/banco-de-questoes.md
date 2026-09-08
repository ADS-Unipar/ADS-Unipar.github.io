# Banco de Questões — Desenvolvimento de Software (Back-End/Front-End)

**Disciplina:** Desenvolvimento de Software (Back-End/Front-End)
**Curso:** Sistemas de Informação — 8º Período
**Quantidade:** 30 questões objetivas
**Estilo:** ENADE — múltipla escolha, 5 alternativas, contextualizadas

---

## Questão 01

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** Arquitetura Cliente-Servidor
**Competência:** Compreender a arquitetura de aplicações web
**Habilidade:** Identificar os componentes da arquitetura cliente-servidor
**Taxonomia de Bloom:** Compreender

### Contexto

Uma equipe de desenvolvimento está projetando uma aplicação web para uma empresa de e-commerce. O arquiteto de software precisa explicar a arquitetura cliente-servidor para os novos membros da equipe.

### Enunciado

Na arquitetura cliente-servidor utilizada em aplicações web, qual é o papel principal do componente "cliente"?

### Alternativas

**A)** Armazenar dados em bancos de dados relacionais e processar a lógica de negócio da aplicação.
**B)** Renderizar a interface do usuário, enviar requisições HTTP e exibir as respostas recebidas do servidor.
**C)** Gerenciar a infraestrutura de rede, balancear carga e garantir a disponibilidade do sistema.
**D)** Executar scripts no servidor para gerar conteúdo dinâmico antes de enviar ao navegador.
**E)** Controlar o acesso de usuários por meio de autenticação e autorização em nível de banco de dados.

### Gabarito

**Resposta correta: B**

### Justificativa

O cliente, no contexto web, é o navegador. Sua função é renderizar a interface (HTML, CSS), executar comportamentos (JavaScript), enviar requisições HTTP ao servidor e exibir as respostas ao usuário.

### Análise das alternativas

- **A)** Descreve o papel do servidor (Back-End), não do cliente.
- **B)** Correta. Descreve exatamente o papel do cliente (navegador).
- **C)** Descreve funções de infraestrutura de rede, não do cliente web.
- **D)** Descreve renderização server-side (SSR), que é papel do servidor.
- **E)** Descreve funções de segurança no servidor, não do cliente.

### Rubrica

**Competência avaliada:** Compreensão da arquitetura cliente-servidor
**Habilidade avaliada:** Identificar papéis de cliente e servidor
**Conhecimento mobilizado:** Arquitetura web, HTTP, navegador
**Critério de acerto:** Identificar que o cliente é responsável pela interface e comunicação
**Evidência de domínio:** Distingue claramente cliente de servidor
**Erro conceitual relacionado às alternativas incorretas:** Confundir papéis de cliente e servidor
**Nível cognitivo:** Compreender

---

## Questão 02

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** Front-End — HTML, CSS e JavaScript
**Competência:** Identificar as tecnologias do Front-End
**Habilidade:** Diferenciar as responsabilidades de HTML, CSS e JavaScript
**Taxonomia de Bloom:** Aplicar

### Contexto

Um desenvolvedor iniciante criou uma página web e está tentando entender por que o botão não muda de cor quando clicado. O código HTML tem um `<button>` com texto, o CSS define a cor de fundo como azul, mas não há JavaScript associado ao elemento.

### Enunciado

Considerando as três tecnologias fundamentais do Front-End, qual é a responsável por adicionar o comportamento de "mudar a cor ao clicar" ao botão?

### Alternativas

**A)** HTML, pois é a linguagem que define a estrutura e os eventos da página.
**B)** CSS, pois é a linguagem que controla a aparência visual e pode responder a eventos.
**C)** JavaScript, pois é a linguagem de programação que manipula o DOM e responde a eventos do usuário.
**D)** HTTP, pois é o protocolo que transporta os dados entre o navegador e o servidor.
**E)** JSON, pois é o formato que permite a comunicação assíncrona entre cliente e servidor.

### Gabarito

**Resposta correta: C**

### Justificativa

JavaScript é a linguagem de programação do navegador. É ela que permite adicionar interatividade — como responder a cliques, manipular o DOM e alterar estilos dinamicamente.

### Análise das alternativas

- **A)** HTML define estrutura, não comportamento. Eventos são tratados por JavaScript.
- **B)** CSS pode responder a :hover, mas não a cliques programáticos.
- **C)** Correta. JavaScript manipula o DOM e responde a eventos.
- **D)** HTTP é protocolo de comunicação, não linguagem de programação.
- **E)** JSON é formato de dados, não linguagem de programação.

### Rubrica

**Competência avaliada:** Compreensão das tecnologias do Front-End
**Habilidade avaliada:** Diferenciar HTML, CSS e JavaScript
**Conhecimento mobilizado:** DOM, eventos, manipulação de estilos
**Critério de acerto:** Identificar JavaScript como responsável por comportamento
**Evidência de domínio:** Compreende a separação de responsabilidades
**Erro conceitual relacionado às alternativas incorretas:** Confundir estrutura, estilo e comportamento
**Nível cognitivo:** Aplicar

---

## Questão 03

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** HTTP e Métodos
**Competência:** Compreender o protocolo HTTP
**Habilidade:** Identificar o método HTTP adequado para cada operação
**Taxonomia de Bloom:** Aplicar

### Contexto

Uma equipe está desenvolvendo uma API RESTful para gerenciar produtos de uma loja virtual. O desenvolvedor precisa implementar a funcionalidade de atualizar os dados de um produto existente (nome, preço e estoque).

### Enunciado

Qual método HTTP é o mais adequado para atualizar todos os dados de um produto existente?

### Alternativas

**A)** GET, pois é o método utilizado para buscar e atualizar dados no servidor.
**B)** POST, pois é o método que envia dados ao servidor para processamento.
**C)** PUT, pois é o método que atualiza um recurso existente de forma completa.
**D)** DELETE, pois é o método que modifica recursos no servidor.
**E)** PATCH, pois é o método que atualiza recursos, independentemente de ser parcial ou completo.

### Gabarito

**Resposta correta: C**

### Justificativa

PUT é o método HTTP utilizado para atualizar um recurso existente de forma completa — todos os dados devem ser enviados, mesmo os que não foram alterados.

### Análise das alternativas

- **A)** GET é utilizado para buscar dados, não para atualizar.
- **B)** POST é utilizado para criar novos recursos, não para atualizar existentes.
- **C)** Correta. PUT atualiza completamente um recurso existente.
- **D)** DELETE é utilizado para remover recursos, não para atualizar.
- **E)** PATCH atualiza parcialmente. Para atualização completa, PUT é mais adequado.

### Rubrica

**Competência avaliada:** Compreensão dos métodos HTTP
**Habilidade avaliada:** Selecionar o método HTTP correto
**Conhecimento mobilizado:** REST, CRUD, métodos HTTP
**Critério de acerto:** Distinguir PUT de PATCH e de outros métodos
**Evidência de domínio:** Compreende a semântica de cada método
**Erro conceitual relacionado às alternativas incorretas:** Confundir métodos HTTP
**Nível cognitivo:** Aplicar

---

## Questão 04

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** AJAX e Fetch API
**Competência:** Implementar comunicação assíncrona
**Habilidade:** Interpretar código com fetch() e async/await
**Taxonomia de Bloom:** Analisar

### Contexto

O seguinte código JavaScript foi escrito para buscar a lista de usuários de uma API:

```javascript
async function carregarUsuarios() {
  const response = await fetch('/api/usuarios');
  const usuarios = await response.json();
  console.log(usuarios);
}
```

### Enunciado

Considerando o código acima, qual afirmação está correta sobre o comportamento da função?

### Alternativas

**A)** A função bloqueia a execução do restante do código até que a resposta do servidor chegue.
**B)** A função é assíncrona e a execução do restante do código continua enquanto aguarda a resposta.
**C)** A função só funciona se o servidor retornar status 200; caso contrário, o navegador trava.
**D)** A função converte a resposta para XML automaticamente antes de atribuir à variável usuarios.
**E)** A função não precisa de tratamento de erros, pois o fetch() nunca falha.

### Gabarito

**Resposta correta: B**

### Justificativa

A palavra-chave async torna a função assíncrona. O await pausa apenas a execução da função (não do script inteiro), permitindo que o restante do código continue executando.

### Análise das alternativas

- **A)** Incorreta. async/await não bloqueia o thread principal.
- **B)** Correta. A função é assíncrona e não bloqueia o restante do código.
- **C)** Incorreta. O fetch não trava o navegador em caso de erro.
- **D)** Incorreta. response.json() converte para JSON, não XML.
- **E)** Incorreta. fetch() pode falhar (rede indisponível, timeout, etc.).

### Rubrica

**Competência avaliada:** Compreensão de programação assíncrona
**Habilidade avaliada:** Interpretar código com async/await
**Conhecimento mobilizado:** Promises, async/await, fetch
**Critério de acerto:** Entender que async/await não bloqueia o thread
**Evidência de domínio:** Distingue bloqueio de assincronismo
**Erro conceitual relacionado às alternativas incorretas:** Confundir assíncrono com síncrono
**Nível cognitivo:** Analisar

---

## Questão 05

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** Status Codes HTTP
**Competência:** Interpretar status codes HTTP
**Habilidade:** Identificar o significado de status codes em cenários reais
**Taxonomia de Bloom:** Analisar

### Contexto

Um desenvolvedor está consumindo uma API RESTful e recebe as seguintes respostas em diferentes cenários:
- Cenário A: Status 201
- Cenário B: Status 401
- Cenário C: Status 404
- Cenário D: Status 500

### Enunciado

Qual cenário indica que o servidor processou a requisição com sucesso e criou um novo recurso?

### Alternativas

**A)** Cenário A — Status 201, que indica "Created" (recurso criado com sucesso).
**B)** Cenário B — Status 401, que indica "Unauthorized" (recurso criado, mas sem autorização).
**C)** Cenário C — Status 404, que indica "Not Found" (recurso criado em local desconhecido).
**D)** Cenário D — Status 500, que indica "Internal Server Error" (recurso criado com erro interno).
**E)** Nenhum dos cenários indica criação de recurso; apenas o status 200 indica sucesso.

### Gabarito

**Resposta correta: A**

### Justificativa

O status 201 (Created) indica que a requisição foi bem-sucedida e um novo recurso foi criado no servidor. É o status padrão para respostas de requisições POST bem-sucedidas.

### Análise das alternativas

- **A)** Correta. 201 Created indica sucesso na criação de recurso.
- **B)** Incorreta. 401 indica falta de autenticação, não criação.
- **C)** Incorreta. 404 indica que o recurso não foi encontrado.
- **D)** Incorreta. 500 indica erro interno do servidor.
- **E)** Incorreta. 200 indica sucesso genérico; 201 indica criação.

### Rubrica

**Competência avaliada:** Compreensão de status codes HTTP
**Habilidade avaliada:** Interpretar status codes em contextos reais
**Conhecimento mobilizado:** HTTP, REST, status codes
**Critério de acerto:** Identificar 201 como código de criação bem-sucedida
**Evidência de domínio:** Conhece a semântica dos principais status codes
**Erro conceitual relacionado às alternativas incorretas:** Confundir status codes
**Nível cognitivo:** Analisar

---

## Questão 06

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** API RESTful
**Competência:** Compreender o conceito de API RESTful
**Habilidade:** Identificar os princípios de uma API REST
**Taxonomia de Bloom:** Compreender

### Contexto

Uma equipe está projetando uma API para um sistema de gestão de projetos. O arquiteto orienta que a API deve seguir os princípios REST.

### Enunciado

Qual das seguintes características é um princípio fundamental de uma API RESTful?

### Alternativas

**A)** A API deve manter o estado da sessão do cliente entre requisições consecutivas.
**B)** A API deve identificar cada recurso por uma URL única e utilizar os métodos HTTP para definir ações.
**C)** A API deve utilizar apenas o método POST para todas as operações, variando a ação pelo corpo da requisição.
**D)** A API deve retornar dados exclusivamente em formato XML, pois é o padrão definido por REST.
**E)** A API deve executar todas as operações de forma síncrona para garantir consistência dos dados.

### Gabarito

**Resposta correta: B**

### Justificativa

Um dos princípios fundamentais de REST é que recursos são identificados por URLs únicas e as ações são representadas pelos métodos HTTP (GET, POST, PUT, DELETE).

### Análise das alternativas

- **A)** Incorreta. REST é stateless — não mantém estado entre requisições.
- **B)** Correta. URLs únicas para recursos + métodos HTTP para ações.
- **C)** Incorreta. REST utiliza diferentes métodos HTTP para diferentes ações.
- **D)** Incorreta. REST suporta JSON, XML e outros formatos.
- **E)** Incorreta. REST não impõe restrição de sincronismo.

### Rubrica

**Competência avaliada:** Compreensão de REST
**Habilidade avaliada:** Identificar princípios REST
**Conhecimento mobilizado:** REST, HTTP, stateless, recursos
**Critério de acerto:** Reconhecer URLs + métodos HTTP como princípio REST
**Evidência de domínio:** Compreende os pilares de REST
**Erro conceitual relacionado às alternativas incorretas:** Confundir REST com protocolos stateful
**Nível cognitivo:** Compreender

---

## Questão 07

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** Boas práticas de Back-End
**Competência:** Aplicar boas práticas de segurança
**Habilidade:** Identificar vulnerabilidades e suas correções
**Taxonomia de Bloom:** Analisar

### Contexto

Um desenvolvedor criou uma API que aceita dados de um formulário de cadastro. O código do Back-End é o seguinte:

```javascript
app.post('/api/usuarios', (req, res) => {
  const { nome, email } = req.body;
  db.query(`INSERT INTO usuarios (nome, email) VALUES ('${nome}', '${email}')`);
  res.json({ mensagem: 'Cadastrado com sucesso' });
});
```

### Enunciado

Qual vulnerabilidade de segurança está presente no código acima?

### Alternativas

**A)** Cross-Site Scripting (XSS), pois o código permite injeção de scripts no navegador.
**B)** SQL Injection, pois os dados do usuário são inseridos diretamente na query SQL sem sanitização.
**C)** Cross-Site Request Forgery (CSRF), pois o código não verifica a origem da requisição.
**D)** Man-in-the-Middle (MITM), pois o código não utiliza HTTPS para criptografar a comunicação.
**E)** Brute Force, pois o código não limita o número de requisições por minuto.

### Gabarito

**Resposta correta: B**

### Justificativa

O código interpola diretamente os valores de `nome` e `email` na query SQL. Um atacante pode inserir código SQL malicioso no campo de formulário, como `'; DROP TABLE usuarios; --`, resultando em SQL Injection.

### Análise das alternativas

- **A)** XSS envolve injeção de scripts em páginas HTML, não em queries SQL.
- **B)** Correta. A interpolação direta na query permite SQL Injection.
- **C)** CSRF envolve falsificação de requisições, não injeção SQL.
- **D)** MITM envolve interceptação de comunicação, não injeção SQL.
- **E)** Brute Force envolve tentativas repetidas de senha, não injeção SQL.

### Rubrica

**Competência avaliada:** Segurança em Back-End
**Habilidade avaliada:** Identificar SQL Injection
**Conhecimento mobilizado:** SQL Injection, sanitização, queries parametrizadas
**Critério de acerto:** Reconhecer interpolação direta como vulnerabilidade
**Evidência de domínio:** Compreende o mecanismo de SQL Injection
**Erro conceitual relacionado às alternativas incorretas:** Confundir tipos de vulnerabilidades
**Nível cognitivo:** Analisar

---

## Questão 08

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** Comunicação entre Front-End e Back-End
**Competência:** Compreender o fluxo de comunicação
**Habilidade:** Interpretar o ciclo de vida de uma requisição
**Taxonomia de Bloom:** Aplicar

### Contexto

Um estudante implementou o seguinte código no Front-End para cadastrar um usuário:

```javascript
async function cadastrar(nome, email) {
  const response = await fetch('/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email })
  });
  const resultado = await response.json();
  alert(resultado.mensagem);
}
```

### Enunciado

Qual é a sequência correta de eventos que ocorre quando a função é executada?

### Alternativas

**A)** O navegador converte os dados para XML, envia ao servidor, que processa e retorna HTML.
**B)** O JavaScript converte o objeto para JSON, envia uma requisição POST ao servidor, que processa e retorna uma resposta JSON.
**C)** O HTML do formulário é enviado diretamente ao servidor, que extrai os dados e retorna uma página completa.
**D)** O navegador abre uma conexão WebSocket, envia os dados em tempo real e aguarda uma notificação do servidor.
**E)** O JavaScript envia os dados como texto puro, o servidor converte para JSON e retorna uma resposta em XML.

### Gabarito

**Resposta correta: B**

### Justificativa

JSON.stringify() converte o objeto JavaScript para JSON. O fetch() envia uma requisição POST com Content-Type application/json. O servidor processa e retorna JSON, que é convertido por response.json().

### Análise das alternativas

- **A)** Incorreta. Os dados são JSON, não XML. A resposta é JSON, não HTML.
- **B)** Correta. Descreve exatamente o fluxo do código.
- **C)** Incorreta. O formulário não é enviado; os dados são coletados via JavaScript.
- **D)** Incorreta. fetch() usa HTTP, não WebSocket.
- **E)** Incorreta. Os dados são JSON (não texto puro) e a resposta é JSON (não XML).

### Rubrica

**Competência avaliada:** Comunicação Front-End/Back-End
**Habilidade avaliada:** Interpretar fluxo de requisição HTTP
**Conhecimento mobilizado:** fetch, JSON, Content-Type, POST
**Critério de acerto:** Entender o fluxo JSON → HTTP → JSON
**Evidência de domínio:** Compreende a serialização e comunicação
**Erro conceitual relacionado às alternativas incorretas:** Confundir formatos e protocolos
**Nível cognitivo:** Aplicar

---

## Questão 09

**Unidade:** Unidade 2 — Frameworks
**Conteúdo:** Conceito de Framework
**Competência:** Diferenciar Framework de Biblioteca
**Habilidade:** Identificar a Inversão de Controle
**Taxonomia de Bloom:** Analisar

### Contexto

Um desenvolvedor está debatendo com um colega sobre a diferença entre usar uma biblioteca como o Lodash e um framework como o Express. O colega afirma que "são a mesma coisa, ambos fornecem funções prontas".

### Enunciado

Qual argumento demonstra corretamente a diferença fundamental entre uma biblioteca e um framework?

### Alternativas

**A)** Bibliotecas são escritas em JavaScript, enquanto frameworks são escritas em TypeScript.
**B)** Bibliotecas possuem mais funções do que frameworks, por isso são mais completas.
**C)** Em uma biblioteca, o desenvolvedor chama as funções; em um framework, o framework chama o código do desenvolvedor (Inversão de Controle).
**D)** Frameworks são mais rápidos que bibliotecas, pois compilam o código durante o build.
**E)** Bibliotecas não podem ser atualizadas, enquanto frameworks recebem atualizações constantes.

### Gabarito

**Resposta correta: C**

### Justificativa

A diferença fundamental é a Inversão de Controle. Com uma biblioteca, você chama as funções. Com um framework, ele chama o seu código — você escreve handlers e o framework os executa quando necessário.

### Análise das alternativas

- **A)** Incorreta. Tanto bibliotecas quanto frameworks podem ser escritos em qualquer linguagem.
- **B)** Incorreta. A quantidade de funções não define a diferença.
- **C)** Correta. Inversão de Controle é a diferença fundamental.
- **D)** Incorreta. Performance não é a diferença entre biblioteca e framework.
- **E)** Incorreta. Ambos podem ser atualizados.

### Rubrica

**Competência avaliada:** Compreensão de Framework vs. Biblioteca
**Habilidade avaliada:** Identificar Inversão de Controle
**Conhecimento mobilizado:** IoC, framework, biblioteca
**Critério de acerto:** Reconhecer IoC como diferença fundamental
**Evidência de domínio:** Compreende quem controla o fluxo
**Erro conceitual relacionado às alternativas incorretas:** Confundir características superficiais com diferenças fundamentais
**Nível cognitivo:** Analisar

---

## Questão 10

**Unidade:** Unidade 2 — Frameworks
**Conteúdo:** Estrutura de um Framework
**Competência:** Identificar componentes de um framework
**Habilidade:** Descrever a função de cada componente
**Taxonomia de Bloom:** Compreender

### Contexto

Uma equipe está estudando a arquitetura de um framework back-end. O diagrama mostra o fluxo de uma requisição:

```
Requisição → Router → Middleware → Controller → Service → Repository → Response
```

### Enunciado

Qual componente é responsável por executar lógica de processamento antes que a requisição chegue ao Controller, como validação de token e logging?

### Alternativas

**A)** Router, pois é o componente que direciona a requisição para o handler correto.
**B)** Middleware, pois é o componente que processa a requisição antes do handler principal.
**C)** Service, pois é o componente que contém a lógica de negócio da aplicação.
**D)** Repository, pois é o componente que acessa o banco de dados.
**E)** Controller, pois é o componente que orquestra o fluxo da requisição.

### Gabarito

**Resposta correta: B**

### Justificativa

Middlewares são funções que executam antes do handler principal. Eles podem fazer logging, validação de autenticação, parse de JSON e outras tarefas de processamento prévio.

### Análise das alternativas

- **A)** Router direciona a requisição, mas não processa dados.
- **B)** Correta. Middleware processa antes do handler.
- **C)** Service contém lógica de negócio, não processamento prévio.
- **D)** Repository acessa dados, não processa requisições.
- **E)** Controller orquestra, mas não executa processamento prévio.

### Rubrica

**Competência avaliada:** Arquitetura de frameworks
**Habilidade avaliada:** Identificar função de middlewares
**Conhecimento mobilizado:** Middleware, pipeline, processamento
**Critério de acerto:** Reconhecer middleware como processador prévio
**Evidência de domínio:** Compreende a pipeline de processamento
**Erro conceitual relacionado às alternativas incorretas:** Confundir responsabilidades dos componentes
**Nível cognitivo:** Compreender

---

## Questão 11

**Unidade:** Unidade 2 — Frameworks
**Conteúdo:** Frameworks Back-End
**Comparar frameworks de diferentes filosofias
**Habilidade:** Avaliar a escolha de framework para um cenário
**Taxonomia de Bloom:** Avaliar

### Contexto

Uma startup precisa escolher um framework back-end para sua API. A equipe conhece JavaScript, o projeto tem prazo apertado e precisa de uma solução minimalista que permita flexibilidade na escolha de banco de dados e estrutura de projeto.

### Enunciado

Qual framework é o mais adequado para este cenário?

### Alternativas

**A)** Django, pois é um framework Python completo com ORM e admin integrados.
**B)** Spring, pois é um framework Java robusto para aplicações enterprise.
**C)** Express, pois é minimalista, usa JavaScript e permite flexibilidade na estrutura.
**D)** Laravel, pois é um framework PHP elegante com muitas funcionalidades integradas.
**E)** Rails, pois é um framework Ruby que prioriza convenções sobre configuração.

### Gabarito

**Resposta correta: C**

### Justificativa

Express é minimalista, usa JavaScript (que a equipe conhece), permite flexibilidade na estrutura e na escolha de banco de dados. É ideal para equipes que precisam de agilidade e flexibilidade.

### Análise das alternativas

- **A)** Django usa Python — a equipe conhece JavaScript.
- **B)** Spring usa Java — a equipe conhece JavaScript.
- **C)** Correta. Express atende todos os requisitos.
- **D)** Laravel usa PHP — a equipe conhece JavaScript.
- **E)** Rails usa Ruby — a equipe conhece JavaScript.

### Rubrica

**Competência avaliada:** Escolha de framework
**Habilidade avaliada:** Avaliar framework segundo critérios
**Conhecimento mobilizado:** Express, Django, Spring, Laravel, Rails
**Critério de acerto:** Alinhar framework com contexto da equipe
**Evidência de domínio:** Conhece as características de cada framework
**Erro conceitual relacionado às alternativas incorretas:** Ignorar o contexto da equipe
**Nível cognitivo:** Avaliar

---

## Questão 12

**Unidade:** Unidade 2 — Frameworks
**Conteúdo:** Pull-based × Push-based
**Competência:** Diferenciar paradigmas de comunicação
**Habilidade:** Identificar o paradigma adequado para cada cenário
**Taxonomia de Bloom:** Aplicar

### Contexto

Uma equipe está desenvolvendo um aplicativo de leilão online, onde os lances de diferentes usuários precisam ser exibidos em tempo real para todos os participantes.

### Enunciado

Qual paradigma de comunicação é mais adequado para este cenário?

### Alternativas

**A)** Pull-based, pois o cliente pode fazer requisições periódicas ao servidor para verificar novos lances.
**B)** Push-based, pois o servidor precisa enviar os novos lances para todos os clientes conectados em tempo real.
**C)** Apenas HTTP, pois é o protocolo padrão da web e suporta comunicação bidirecional.
**D)** Apenas FTP, pois é o protocolo mais eficiente para transferência de dados em tempo real.
**E)** Síncrono, pois os lances precisam ser processados na ordem exata em que são recebidos.

### Gabarito

**Resposta correta: B**

### Justificativa

Em um leilão online, os lances precisam ser exibidos imediatamente para todos os participantes. Push-based (WebSockets) permite que o servidor envie dados para todos os clientes conectados instantaneamente.

### Análise das alternativas

- **A)** Pull-based com polling é ineficiente e gera atraso.
- **B)** Correta. Push-based é ideal para tempo real.
- **C)** HTTP não suporta comunicação bidirecional nativa.
- **D)** FTP é para transferência de arquivos, não comunicação em tempo real.
- **E)** Síncrono não é um paradigma de comunicação web.

### Rubrica

**Competência avaliada:** Paradigmas de comunicação
**Habilidade avaliada:** Selecionar paradigma para tempo real
**Conhecimento mobilizado:** Pull-based, Push-based, WebSockets
**Critério de acerto:** Identificar Push-based como adequado para tempo real
**Evidência de domínio:** Compreende as limitações de cada paradigma
**Erro conceitual relacionado às alternativas incorretas:** Confundir protocolos e paradigmas
**Nível cognitivo:** Aplicar

---

## Questão 13

**Unidade:** Unidade 2 — Frameworks
**Conteúdo:** Escolha de Framework
**Competência:** Avaliar critérios de escolha
**Habilidade:** Analisar trade-offs na escolha de framework
**Taxonomia de Bloom:** Avaliar

### Contexto

Uma empresa precisa escolher um framework front-end para um projeto que durará 5 anos. A equipe considera React, Angular e Vue.js. O principal critério é a longevidade e o suporte da comunidade.

### Enunciado

Considerando o critério de longevidade e suporte da comunidade, qual análise é mais adequada?

### Alternativas

**A)** Vue.js é a melhor escolha, pois é o mais fácil de aprender e tem a maior comunidade.
**B)** Angular é a melhor escolha, pois é mantido pelo Google e possui a maior base de usuários.
**C)** React é a melhor escolha, pois é mantido pelo Meta, tem a maior comunidade e o ecossistema mais maduro.
**D)** Todos são equivalentes, pois qualquer framework front-end será suportado por 5 anos.
**E)** Nenhum é adequado; a empresa deveria criar seu próprio framework para não depender de terceiros.

### Gabarito

**Resposta correta: C**

### Justificativa

React é mantido pelo Meta (Facebook), tem a maior comunidade de desenvolvedores, o ecossistema mais maduro e é utilizado por milhões de projetos. Para longevidade e suporte, é a escolha mais segura.

### Análise das alternativas

- **A)** Vue.js é fácil, mas sua comunidade é menor que a do React.
- **B)** Angular é robusto, mas sua comunidade é menor que a do React.
- **C)** Correta. React tem a maior comunidade e ecossistema.
- **D)** Incorreta. Frameworks podem ser descontinuados.
- **E)** Incorreta. Criar próprio framework aumenta o risco.

### Rubrica

**Competência avaliada:** Avaliação de frameworks
**Habilidade avaliada:** Analisar longevidade e comunidade
**Conhecimento mobilizado:** React, Angular, Vue.js, ecossistema
**Critério de acerto:** Reconhecer comunidade como critério de longevidade
**Evidência de domínio:** Conhece o ecossistema de cada framework
**Erro conceitual relacionado às alternativas incorretas:** Subestimar a importância da comunidade
**Nível cognitivo:** Avaliar

---

## Questão 14

**Unidade:** Unidade 3 — Web Mobile e PWA
**Conteúdo:** Viewport e Responsividade
**Competência:** Configurar aplicações para mobile
**Habilidade:** Identificar a importância da viewport meta tag
**Taxonomia de Bloom:** Aplicar

### Contexto

Um desenvolvedor criou um site responsivo com media queries, mas ao abrir no celular, a página aparece minúscula e o usuário precisa dar zoom para ler o conteúdo.

### Enunciado

Qual é a causa mais provável do problema e qual é a correção?

### Alternativas

**A)** O CSS está incorreto; é necessário adicionar `zoom: 1.0` em todos os elementos.
**B)** A tag `<meta name="viewport">` está ausente no HTML; é necessário adicioná-la com `width=device-width, initial-scale=1.0`.
**C)** O JavaScript está impedindo o zoom; é necessário remover todos os event listeners de touch.
**D)** O servidor está retornando a versão desktop do site; é necessário configurar redirecionamento por User-Agent.
**E)** O navegador não suporta media queries; é necessário usar JavaScript para detectar o tamanho da tela.

### Gabarito

**Resposta correta: B**

### Justificativa

Sem a viewport meta tag, o navegador mobile renderiza a página como se fosse desktop (cerca de 980px) e aplica zoom para caber na tela. A correção é adicionar `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

### Análise das alternativas

- **A)** CSS zoom não resolve o problema de viewport.
- **B)** Correta. A viewport meta tag é essencial para mobile.
- **C)** Event listeners de touch não afetam o zoom inicial.
- **D)** O problema não é User-Agent, é viewport.
- **E)** Navegadores modernos suportam media queries.

### Rubrica

**Competência avaliada:** Configuração mobile
**Habilidade avaliada:** Identificar e corrigir problemas de viewport
**Conhecimento mobilizado:** Viewport meta tag, media queries
**Critério de acerto:** Reconhecer viewport como causa do problema
**Evidência de domínio:** Compreende como o navegador mobile renderiza páginas
**Erro conceitual relacionado às alternativas incorretas:** Confundir causas de problemas de renderização
**Nível cognitivo:** Aplicar

---

## Questão 15

**Unidade:** Unidade 3 — Web Mobile e PWA
**Conteúdo:** Mobile First
**Competência:** Aplicar abordagem Mobile First
**Habilidade:** Interpretar CSS com media queries Mobile First
**Taxonomia de Bloom:** Aplicar

### Contexto

O seguinte CSS foi escrito para um layout responsivo:

```css
.container {
  display: flex;
  flex-direction: column;
  padding: 8px;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    padding: 24px;
  }
}
```

### Enunciado

Qual abordagem de design o código acima está utilizando?

### Alternativas

**A)** Desktop First, pois começa com layout complexo e simplifica para mobile.
**B)** Mobile First, pois começa com layout simples (coluna) e expande para telas maiores (linha).
**C)** Graceful Degradation, pois começa com todas as funcionalidades e remove para telas menores.
**D)** Responsive Last, pois a responsividade é adicionada apenas após o layout desktop estar pronto.
**E)** Progressive Enhancement, pois começa com CSS avançado e adiciona fallbacks para navegadores antigos.

### Gabarito

**Resposta correta: B**

### Justificativa

O código começa com um layout simples (flex-direction: column, padding: 8px) — adequado para mobile. A media query usa min-width para expandir o layout para telas maiores. Isso é Mobile First.

### Análise das alternativas

- **A)** Incorreta. O código começa simples, não complexo.
- **B)** Correta. Mobile First: simples → complexo com min-width.
- **C)** Incorreta. Graceful Degradation começa complexo e degrada.
- **D)** Incorreta. A responsividade é a base, não um adicional.
- **E)** Incorreta. Progressive Enhancement é sobre funcionalidades, não layout.

### Rubrica

**Competência avaliada:** Mobile First
**Habilidade avaliada:** Identificar abordagem Mobile First no CSS
**Conhecimento mobilizado:** Media queries, min-width, flex-direction
**Critério de acerto:** Reconhecer min-width como indicativo de Mobile First
**Evidência de domínio:** Compreende a lógica de Mobile First
**Erro conceitual relacionado às alternativas incorretas:** Confundir Mobile First com Desktop First
**Nível cognitivo:** Aplicar

---

## Questão 16

**Unidade:** Unidade 3 — Web Mobile e PWA
**Conteúdo:** PWA — Service Worker
**Competência:** Compreender o funcionamento do Service Worker
**Habilidade:** Analisar o ciclo de vida do Service Worker
**Taxonomia de Bloom:** Analisar

### Contexto

Um desenvolvedor implementou um Service Worker para sua PWA. O código do Service Worker é:

```javascript
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll(['/index.html', '/style.css', '/app.js']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

### Enunciado

Considerando o código acima, qual estratégia de cache o Service Worker está implementando?

### Alternativas

**A)** Network First, pois tenta a rede primeiro e usa o cache como fallback.
**B)** Cache First, pois tenta o cache primeiro e usa a rede como fallback.
**C)** Network Only, pois sempre busca da rede, ignorando o cache.
**D)** Cache Only, pois sempre serve do cache, sem buscar da rede.
**E)** Stale While Revalidate, pois serve do cache e atualiza em segundo plano.

### Gabarito

**Resposta correta: B**

### Justificativa

O código verifica primeiro se o recurso está no cache (caches.match). Se estiver, retorna do cache. Se não estiver, busca da rede (fetch). Isso é Cache First.

### Análise das alternativas

- **A)** Incorreta. Network First tentaria a rede primeiro.
- **B)** Correta. Cache First: cache → rede.
- **C)** Incorreta. Network Only não usaria cache.
- **D)** Incorreta. Cache Only não buscaria da rede.
- **E)** Incorreta. Stale While Revalidate serviria do cache E atualizaria em background.

### Rubrica

**Competência avaliada:** Service Worker e cache
**Habilidade avaliada:** Identificar estratégia de cache
**Conhecimento mobilizado:** Cache First, Network First, Service Worker
**Critério de acerto:** Interpretar a lógica de caches.match → fetch
**Evidência de domínio:** Compreende as estratégias de cache
**Erro conceitual relacionado às alternativas incorretas:** Confundir estratégias de cache
**Nível cognitivo:** Analisar

---

## Questão 17

**Unidade:** Unidade 3 — Web Mobile e PWA
**Conteúdo:** PWA — Manifest
**Competência:** Configurar uma PWA
**Habilidade:** Identificar componentes do manifest.json
**Taxonomia de Bloom:** Aplicar

### Contexto

Um desenvolvedor criou uma PWA, mas quando o usuário tenta instalá-la, o navegador não exibe a opção "Adicionar à tela inicial".

### Enunciado

Qual é a possível causa do problema?

### Alternativas

**A)** O arquivo manifest.json não está linkado no HTML ou está com configurações incorretas.
**B)** O CSS da aplicação não está usando media queries para mobile.
**C)** O JavaScript da aplicação não está usando async/await.
**D)** O servidor não está retornando o cabeçalho X-Install-App.
**E)** O navegador não suporta PWA; é necessário instalar um plugin.

### Gabarito

**Resposta correta: A**

### Justificativa

Para que o navegador ofereça a opção de instalação, o manifest.json deve estar linkado no HTML (`<link rel="manifest">`) e conter as configurações obrigatórias (name, icons, start_url, display).

### Análise das alternativas

- **A)** Correta. Manifest ausente ou incorreto impede instalação.
- **B)** Media queries são para layout, não para instalação.
- **C)** async/await é para JavaScript, não para instalação.
- **D)** Não existe cabeçalho X-Install-App.
- **E)** Navegadores modernos suportam PWA nativamente.

### Rubrica

**Competência avaliada:** Configuração de PWA
**Habilidade avaliada:** Diagnosticar problemas de instalação
**Conhecimento mobilizado:** manifest.json, instalação de PWA
**Critério de acerto:** Reconhecer manifest como requisito para instalação
**Evidência de domínio:** Compreende os requisitos de instalação de PWA
**Erro conceitual relacionado às alternativas incorretas:** Confundir requisitos de PWA com outras tecnologias
**Nível cognitivo:** Aplicar

---

## Questão 18

**Unidade:** Unidade 3 — Web Mobile e PWA
**Conteúdo:** Responsividade com Flexbox
**Competência:** Implementar layouts responsivos
**Habilidade:** Interpretar código Flexbox
**Taxonomia de Bloom:** Aplicar

### Contexto

O seguinte CSS define um layout responsivo:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
```

### Enunciado

Em uma tela de 900px de largura, quantas colunas o grid terá aproximadamente?

### Alternativas

**A)** 1 coluna, pois auto-fit sempre cria uma única coluna.
**B)** 2 colunas, pois 2 × 280px = 560px cabe em 900px com gap.
**C)** 3 colunas, pois 3 × 280px = 840px cabe em 900px com gap.
**D)** 4 colunas, pois 4 × 280px = 1120px é o máximo possível.
**E)** O número de colunas depende do conteúdo, não da largura da tela.

### Gabarito

**Resposta correta: C**

### Justificativa

Com minmax(280px, 1fr), cada coluna tem no mínimo 280px. Em 900px, com gap de 16px entre 3 colunas (2 gaps = 32px), temos 900 - 32 = 868px / 3 ≈ 289px por coluna. Como 289px > 280px, cabem 3 colunas.

### Análise das alternativas

- **A)** Incorreta. auto-fit ajusta o número de colunas automaticamente.
- **B)** Incorreta. 2 colunas cabem, mas 3 também cabem.
- **C)** Correta. 3 colunas de ~289px cabem em 900px.
- **D)** Incorreta. 4 colunas não cabem (4 × 280 + 3 × 16 = 1168px > 900px).
- **E)** Incorreta. auto-fit calcula com base na largura da tela.

### Rubrica

**Competência avaliada:** CSS Grid responsivo
**Habilidade avaliada:** Calcular colunas com auto-fit e minmax
**Conhecimento mobilizado:** CSS Grid, auto-fit, minmax, gap
**Critério de acerto:** Aplicar a fórmula de cálculo de colunas
**Evidência de domínio:** Compreende como auto-fit funciona
**Erro conceitual relacionado às alternativas incorretas:** Não entender o cálculo de colunas
**Nível cognitivo:** Aplicar

---

## Questão 19

**Unidade:** Unidade 4 — Framework Próprio
**Conteúdo:** Router de um Framework
**Competência:** Implementar roteamento
**Habilidade:** Interpretar código de Router
**Taxonomia de Bloom:** Analisar

### Contexto

O seguinte código implementa parte de um Router para um mini framework:

```javascript
const paramNames = [];
const pattern = path.replace(/:(\w+)/g, (_, name) => {
  paramNames.push(name);
  return '([^/]+)';
});
```

### Enunciado

Qual é a finalidade deste código?

### Alternativas

**A)** Validar se a URL contém caracteres especiais proibidos.
**B)** Converter parâmetros de URL (:id) em grupos de regex para matching.
**C)** Criptografar os parâmetros da URL antes de enviá-los ao servidor.
**D)** Formatar a URL para exibição amigável no navegador.
**E)** Extrair query strings (?page=1) da URL para processamento.

### Gabarito

**Resposta correta: B**

### Justificativa

O código usa replace com regex para converter parâmetros nomeados (:id, :nome) em grupos de captura de regex ([^/]+). Isso permite que o Router extraia valores de URLs dinâmicas.

### Análise das alternativas

- **A)** Incorreta. O código não valida caracteres proibidos.
- **B)** Correta. Converte :param em regex para matching.
- **C)** Incorreta. O código não criptografa nada.
- **D)** Incorreta. O código não formata URLs para exibição.
- **E)** Incorreta. O código não extrai query strings.

### Rubrica

**Competência avaliada:** Router de framework
**Habilidade avaliada:** Interpretar código de roteamento
**Conhecimento mobilizado:** Regex, parâmetros de URL, Router
**Critério de acerto:** Entender a conversão de :param para regex
**Evidência de domínio:** Compreende como parâmetros são extraídos
**Erro conceitual relacionado às alternativas incorretas:** Não entender o propósito da regex
**Nível cognitivo:** Analisar

---

## Questão 20

**Unidade:** Unidade 4 — Framework Próprio
**Conteúdo:** Middleware Pipeline
**Competência:** Implementar sistema de middlewares
**Habilidade:** Analisar o fluxo de uma pipeline de middlewares
**Taxonomia de Bloom:** Analisar

### Contexto

Considere o seguinte código de uma pipeline de middlewares:

```javascript
function execute(req, res, done) {
  let i = 0;
  function next() {
    if (i < middlewares.length) {
      middlewares[i++](req, res, next);
    } else {
      done();
    }
  }
  next();
}
```

Se três middlewares são registrados e o segundo middleware não chama `next()`, o que acontece?

### Alternativas

**A)** O terceiro middleware e o handler são executados normalmente.
**B)** A pipeline para no segundo middleware; o terceiro e o handler não são executados.
**C)** O framework lança um erro e encerra o servidor.
**D)** O segundo middleware é ignorado e o terceiro é executado.
**E)** O handler é executado imediatamente, pulando os middlewares restantes.

### Gabarito

**Resposta correta: B**

### Justificativa

Se o segundo middleware não chama next(), a variável i não é incrementada e a função next() não é chamada. Isso significa que o terceiro middleware e o done() (handler) nunca são executados. A pipeline para.

### Análise das alternativas

- **A)** Incorreta. Sem next(), o próximo não é executado.
- **B)** Correta. A pipeline para quando next() não é chamado.
- **C)** Incorreta. O framework não lança erro; simplesmente para.
- **D)** Incorreta. Middlewares são executados em ordem sequencial.
- **E)** Incorreta. O handler só é executado após todos os middlewares.

### Rubrica

**Competência avaliada:** Pipeline de middlewares
**Habilidade avaliada:** Analisar fluxo de execução
**Conhecimento mobilizado:** Middleware, next(), pipeline
**Critério de acerto:** Entender que next() é o mecanismo de avanço
**Evidência de domínio:** Compreende o papel de next() na pipeline
**Erro conceitual relacionado às alternativas incorretas:** Não entender o mecanismo de next()
**Nível cognitivo:** Analisar

---

## Questão 21

**Unidade:** Unidade 4 — Framework Próprio
**Conteúdo:** Vantagens e desvantagens de criar framework
**Competência:** Avaliar trade-offs
**Habilidade:** Analisar cenários de criação de framework
**Taxonomia de Bloom:** Avaliar

### Contexto

Uma empresa está considerando criar seu próprio framework back-end em vez de usar o Express. O CTO argumenta que "assim teremos controle total e não dependeremos de terceiros".

### Enunciado

Qual argumento é o mais adequado para contrapor a decisão do CTO?

### Alternativas

**A)** Criar um framework próprio é impossível; apenas grandes empresas como Google e Meta conseguem.
**B)** O custo de desenvolvimento, manutenção e segurança de um framework próprio pode superar os benefícios, especialmente sem comunidade para suporte.
**C)** O Express é o único framework que funciona com JavaScript, portanto não há alternativa.
**D)** Frameworks próprios nunca funcionam em produção; apenas frameworks open source são confiáveis.
**E)** A decisão do CTO está correta; controle total sempre é melhor do que depender de terceiros.

### Gabarito

**Resposta correta: B**

### Justificativa

Criar um framework próprio tem custos significativos — desenvolvimento, manutenção, segurança, falta de comunidade. Esses custos podem superar os benefícios do controle total, especialmente para equipes pequenas.

### Análise das alternativas

- **A)** Incorreta. Qualquer equipe pode criar um framework.
- **B)** Correta. Os custos podem superar os benefícios.
- **C)** Incorreta. Existem muitos frameworks JavaScript.
- **D)** Incorreta. Frameworks próprios podem funcionar em produção.
- **E)** Incorreta. Controle total tem custos que devem ser avaliados.

### Rubrica

**Competência avaliada:** Avaliação de trade-offs
**Habilidade avaliada:** Analisar custos e benefícios
**Conhecimento mobilizado:** Framework, manutenção, comunidade, segurança
**Critério de acerto:** Reconhecer os custos ocultos de criar framework próprio
**Evidência de domínio:** Compreende trade-offs de forma equilibrada
**Erro conceitual relacionado às alternativas incorretas:** Visão simplista de controle vs. dependência
**Nível cognitivo:** Avaliar

---

## Questão 22

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** DOM e JavaScript
**Competência:** Manipular o DOM com JavaScript
**Habilidade:** Interpretar código que manipula o DOM
**Taxonomia de Bloom:** Aplicar

### Contexto

O seguinte código JavaScript foi escrito para adicionar um item a uma lista:

```javascript
const lista = document.getElementById('lista');
const novoItem = document.createElement('li');
novoItem.textContent = 'Novo item';
lista.appendChild(novoItem);
```

### Enunciado

Qual é o resultado da execução deste código em uma página que contém `<ul id="lista"></ul>`?

### Alternativas

**A)** Um novo elemento `<li>` com o texto "Novo item" é adicionado ao final da lista `<ul>`.
**B)** O conteúdo da lista `<ul>` é substituído por "Novo item".
**C)** Um novo elemento `<ul>` é criado dentro do elemento existente.
**D)** O código gera um erro, pois não é possível criar elementos dinamicamente.
**E)** O texto "Novo item" é exibido como um parágrafo, não como item de lista.

### Gabarito

**Resposta correta: A**

### Justificativa

document.createElement('li') cria um novo elemento li. textContent define o texto. appendChild adiciona o elemento ao final do elemento pai (ul).

### Análise das alternativas

- **A)** Correta. O código cria um li e o adiciona ao ul.
- **B)** Incorreta. appendChild adiciona, não substitui.
- **C)** Incorreta. O código cria um li, não um ul.
- **D)** Incorreta. createElement é uma API válida do DOM.
- **E)** Incorreta. O elemento é li, não p.

### Rubrica

**Competência avaliada:** Manipulação do DOM
**Habilidade avaliada:** Interpretar código DOM
**Conhecimento mobilizado:** createElement, textContent, appendChild
**Critério de acerto:** Entender o fluxo de criação e inserção de elementos
**Evidência de domínio:** Compreende a API do DOM
**Erro conceitual relacionado às alternativas incorretas:** Não entender a API do DOM
**Nível cognitivo:** Aplicar

---

## Questão 23

**Unidade:** Unidade 2 — Frameworks
**Conteúdo:** Controller e Service
**Competência:** Separar responsabilidades em camadas
**Habilidade:** Identificar onde colocar lógica de negócio
**Taxonomia de Bloom:** Analisar

### Contexto

Um desenvolvedor escreveu o seguinte código no Controller:

```javascript
async function criar(req, res) {
  const { nome, email } = req.body;
  if (!nome || nome.length < 3) {
    return res.status(400).json({ erro: 'Nome muito curto' });
  }
  if (!email || !email.includes('@')) {
    return res.status(400).json({ erro: 'E-mail inválido' });
  }
  const existente = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  if (existente.length > 0) {
    return res.status(400).json({ erro: 'E-mail já cadastrado' });
  }
  await db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email]);
  res.status(201).json({ mensagem: 'Cadastrado com sucesso' });
}
```

### Enunciado

Qual problema de arquitetura está presente neste código?

### Alternativas

**A)** O código não utiliza async/await corretamente.
**B)** O Controller contém lógica de negócio e acesso a dados, violando a separação de responsabilidades.
**C)** O código não está usando Express corretamente.
**D)** O status code 400 está incorreto para erros de validação.
**E)** O código deveria usar POST em vez de GET para criar usuários.

### Gabarito

**Resposta correta: B**

### Justificativa

O Controller contém validações de negócio (nome mínimo, e-mail válido, e-mail único) e acesso direto ao banco de dados (db.query). Isso viola a separação de responsabilidades — validações devem estar no Service e acesso a dados no Repository.

### Análise das alternativas

- **A)** Incorreta. async/await está sendo usado corretamente.
- **B)** Correta. Lógica de negócio e acesso a dados no Controller.
- **C)** Incorreta. O código usa Express corretamente.
- **D)** Incorreta. 400 é o status correto para erros de validação.
- **E)** Incorreta. O código já está usando POST (implícito pelo contexto).

### Rubrica

**Competência avaliada:** Separação de responsabilidades
**Habilidade avaliada:** Identificar violação de camadas
**Conhecimento mobilizado:** Controller, Service, Repository, SRP
**Critério de acerto:** Reconhecer lógica de negócio no Controller como problema
**Evidência de domínio:** Compreende a responsabilidade de cada camada
**Erro conceitual relacionado às alternativas incorretas:** Não reconhecer violação de responsabilidades
**Nível cognitivo:** Analisar

---

## Questão 24

**Unidade:** Unidade 3 — Web Mobile e PWA
**Conteúdo:** PWA — Funcionamento Offline
**Competência:** Compreender como PWAs funcionam offline
**Habilidade:** Analisar o papel do cache em PWAs
**Taxonomia de Bloom:** Analisar

### Contexto

Uma PWA foi configurada com Service Worker e cache. O usuário acessa a PWA, navega por algumas páginas e depois perde a conexão com a internet.

### Enunciado

O que acontece quando o usuário tenta acessar uma página que já foi visitada anteriormente?

### Alternativas

**A)** O navegador exibe uma mensagem de erro, pois sem internet nenhuma página pode ser carregada.
**B)** O Service Worker serve a página do cache, permitindo que o usuário continue navegando offline.
**C)** O navegador redireciona automaticamente para uma página de erro do Google.
**D)** A página é carregada parcialmente, sem CSS e JavaScript.
**E)** O Service Worker baixa a página de um servidor espelho automaticamente.

### Gabarito

**Resposta correta: B**

### Justificativa

O Service Worker intercepta a requisição e verifica se o recurso está no cache. Como a página já foi visitada, os recursos estão em cache e são servidos normalmente, permitindo navegação offline.

### Análise das alternativas

- **A)** Incorreta. Recursos em cache podem ser servidos offline.
- **B)** Correta. Service Worker serve do cache.
- **C)** Incorreta. O Service Worker intercepta antes do navegador.
- **D)** Incorreta. Se o CSS/JS estiver em cache, será carregado.
- **E)** Incorreta. Não existe servidor espelho automático.

### Rubrica

**Competência avaliada:** PWA e cache
**Habilidade avaliada:** Analisar funcionamento offline
**Conhecimento mobilizado:** Service Worker, Cache API, interceptação
**Critério de acerto:** Entender que cache permite funcionamento offline
**Evidência de domínio:** Compreende o papel do cache em PWAs
**Erro conceitual relacionado às alternativas incorretas:** Não entender o papel do Service Worker
**Nível cognitivo:** Analisar

---

## Questão 25

**Unidade:** Unidade 4 — Framework Próprio
**Conteúdo:** Arquitetura de Framework
**Competência:** Projetar arquitetura de software
**Habilidade:** Avaliar decisões de arquitetura
**Taxonomia de Bloom:** Avaliar

### Contexto

Uma equipe está projetando um mini framework e precisa decidir se implementa suporte a template engines (como EJS ou Pug) além do suporte a JSON.

### Enunciado

Considerando que o framework é destinado a APIs RESTful que retornam apenas JSON, qual decisão arquitetural é a mais adequada?

### Alternativas

**A)** Implementar suporte a template engines, pois todas as APIs precisam renderizar HTML.
**B)** Não implementar template engines, pois APIs RESTful retornam dados em JSON, não HTML.
**C)** Implementar template engines e JSON, pois mais funcionalidades sempre é melhor.
**D)** Não implementar JSON, pois APIs modernas usam apenas XML.
**E)** Implementar template engines como funcionalidade obrigatória para todos os usuários.

### Gabarito

**Resposta correta: B**

### Justificativa

APIs RESTful retornam dados em JSON, não HTML renderizado. Template engines são úteis para aplicações server-side que renderizam HTML, não para APIs. Implementar seria desnecessário e adicionaria complexidade.

### Análise das alternativas

- **A)** Incorreta. APIs RESTful não renderizam HTML.
- **B)** Correta. Template engines são desnecessárias para APIs JSON.
- **C)** Incorreta. Mais funcionalidades nem sempre é melhor.
- **D)** Incorreta. JSON é o padrão para APIs RESTful.
- **E)** Incorreta. Funcionalidades opcionais não devem ser obrigatórias.

### Rubrica

**Competência avaliada:** Decisão arquitetural
**Habilidade avaliada:** Avaliar necessidade de funcionalidades
**Conhecimento mobilizado:** REST, JSON, template engines, YAGNI
**Critério de acerto:** Aplicar o princípio YAGNI (You Ain't Gonna Need It)
**Evidência de domínio:** Compreende quando uma funcionalidade é desnecessária
**Erro conceitual relacionado às alternativas incorretas:** Não aplicar YAGNI
**Nível cognitivo:** Avaliar

---

## Questão 26 — Integradora 1

**Unidade:** Integradora (Unidades 1 + 2)
**Conteúdo:** Front-End + Back-End + Framework + API
**Competência:** Integrar conhecimentos de múltiplas unidades
**Habilidade:** Analisar uma aplicação completa
**Taxonomia de Bloom:** Analisar

### Contexto

Uma equipe desenvolveu uma aplicação web completa. O Front-End usa React, o Back-End usa Express e a comunicação é feita via API RESTful com fetch(). O usuário preenche um formulário de cadastro e clica em "Salvar".

### Enunciado

Qual é a sequência correta de eventos que ocorre do clique do usuário até a exibição da mensagem de sucesso?

### Alternativas

**A)** React captura o evento → fetch() envia POST → Express recebe → Router direciona → Controller processa → Resposta JSON → React atualiza a interface.
**B)** Express captura o evento → React recebe → fetch() processa → Router direciona → Controller devolve → HTML é renderizado.
**C)** O navegador recarrega a página → Express processa → Banco de dados atualiza → Nova página HTML é enviada ao navegador.
**D)** React envia formulário via WebSocket → Express recebe em tempo real → Banco de dados atualiza → Notificação é enviada ao usuário.
**E)** fetch() envia GET → Express retorna HTML → React renderiza → Usuário vê a página atualizada.

### Gabarito

**Resposta correta: A**

### Justificativa

O fluxo completo é: React captura o evento de clique → fetch() envia POST com dados JSON → Express recebe a requisição → Router direciona para o handler → Controller processa e devolve resposta JSON → React recebe a resposta e atualiza a interface.

### Análise das alternativas

- **A)** Correta. Descreve o fluxo completo e correto.
- **B)** Incorreta. Express não captura eventos do navegador.
- **C)** Incorreta. SPA não recarrega a página.
- **D)** Incorreta. fetch() usa HTTP, não WebSocket.
- **E)** Incorreta. Cadastro usa POST, não GET.

### Rubrica

**Competência avaliada:** Integração Front-End + Back-End
**Habilidade avaliada:** Analisar fluxo completo de aplicação
**Conhecimento mobilizado:** React, Express, fetch, REST, JSON
**Critério de acerto:** Traçar o fluxo completo do evento à resposta
**Evidência de domínio:** Compreende como todas as camadas se conectam
**Erro conceitual relacionado às alternativas incorretas:** Confundir o fluxo de comunicação
**Nível cognitivo:** Analisar

---

## Questão 27 — Integradora 2

**Unidade:** Integradora (Unidades 2 + 3)
**Conteúdo:** Framework + Responsividade + PWA
**Competência:** Integrar framework com PWA
**Habilidade:** Avaliar a aplicação de framework em contexto mobile
**Taxonomia de Bloom:** Avaliar

### Contexto

Uma equipe desenvolveu uma aplicação com React (Front-End) e Express (Back-End). A aplicação funciona bem em desktop, mas precisa ser disponibilizada para usuários mobile que frequentemente têm conexão instável.

### Enunciado

Qual combinação de técnicas é a mais adequada para atender aos requisitos?

### Alternativas

**A)** Apenas adicionar media queries ao CSS existente, pois responsividade é suficiente para mobile.
**B)** Implementar responsividade (Mobile First), adicionar manifest.json, configurar Service Worker com cache e garantir HTTPS.
**C)** Reescrever a aplicação como nativo (Swift/Kotlin), pois PWAs não funcionam em conexão instável.
**D)** Apenas adicionar um manifest.json, pois a instalação como aplicativo resolve todos os problemas de mobile.
**E)** Usar WebSockets em vez de HTTP, pois WebSockets funcionam melhor em conexão instável.

### Gabarito

**Resposta correta: B**

### Justificativa

Para atender usuários mobile com conexão instável, é necessário: responsividade (para diferentes telas), Mobile First (priorizar mobile), manifest.json (para instalação), Service Worker com cache (para funcionamento offline) e HTTPS (obrigatório para Service Worker).

### Análise das alternativas

- **A)** Incorreta. Media queries não resolvem conexão instável.
- **B)** Correta. Combina responsividade + PWA completa.
- **C)** Incorreta. PWAs funcionam offline com Service Worker.
- **D)** Incorreta. Manifest sozinho não resolve offline.
- **E)** Incorreta. WebSockets não resolvem conexão instável.

### Rubrica

**Competência avaliada:** Integração Framework + PWA
**Habilidade avaliada:** Avaliar soluções para mobile
**Conhecimento mobilizado:** Responsividade, PWA, Service Worker, cache
**Critério de acerto:** Combinar múltiplas técnicas para atender requisitos
**Evidência de domínio:** Compreende como cada componente contribui
**Erro conceitual relacionado às alternativas incorretas:** Soluções parciais que não atendem todos os requisitos
**Nível cognitivo:** Avaliar

---

## Questão 28 — Integradora 3

**Unidade:** Integradora (Unidades 1 + 2 + 3 + 4)
**Conteúdo:** Front-End + Back-End + Framework + PWA + Arquitetura
**Competência:** Integrar todos os conceitos da disciplina
**Habilidade:** Avaliar arquitetura de aplicação completa
**Taxonomia de Bloom:** Avaliar

### Contexto

Uma empresa está projetando uma aplicação web completa para gestão de entregas. A aplicação precisa:
- Interface responsiva para desktop e mobile;
- API RESTful com autenticação;
- Funcionamento offline para entregadores em campo;
- Arquitetura organizada em camadas;
- Atualização em tempo real da localização do entreguer.

### Enunciado

Qual arquitetura atende a TODOS os requisitos da aplicação?

### Alternativas

**A)** Front-End com React + responsividade (Mobile First) + PWA (Service Worker + cache) + Back-End com Express em camadas (Router → Middleware → Controller → Service → Repository) + WebSockets para localização em tempo real.
**B)** Front-End com HTML estático + Back-End com PHP sem framework + sem PWA + sem WebSockets.
**C)** Apenas Back-End com Express servindo HTML server-side + sem responsividade + sem PWA + sem tempo real.
**D)** Front-End com React + Back-End com Express + sem PWA + sem responsividade + polling a cada 1 segundo para tempo real.
**E)** Apenas PWA com Service Worker + sem Back-End + sem API + sem tempo real.

### Gabarito

**Resposta correta: A**

### Justificativa

Apenas a opção A atende todos os requisitos: responsividade (Mobile First), PWA (offline), API RESTful com autenticação (Express em camadas com middleware de auth), arquitetura organizada (camadas) e tempo real (WebSockets).

### Análise das alternativas

- **A)** Correta. Atende todos os requisitos.
- **B)** Incorreta. Não atende responsividade, PWA, arquitetura ou tempo real.
- **C)** Incorreta. Não atende responsividade, PWA ou tempo real.
- **D)** Incorreta. Não atende PWA (offline) e polling é ineficiente.
- **E)** Incorreta. Sem Back-End não há API.

### Rubrica

**Competência avaliada:** Arquitetura completa
**Habilidade avaliada:** Avaliar arquitetura contra requisitos
**Conhecimento mobilizado:** React, Express, PWA, WebSockets, arquitetura em camadas
**Critério de acerto:** Verificar que TODOS os requisitos são atendidos
**Evidência de domínio:** Integra conhecimentos de todas as unidades
**Erro conceitual relacionado às alternativas incorretas:** Soluções que não atendem todos os requisitos
**Nível cognitivo:** Avaliar

---

## Questão 29

**Unidade:** Unidade 1 — Back-End e Front-End
**Conteúdo:** Boas práticas de código
**Competência:** Aplicar boas práticas de desenvolvimento
**Habilidade:** Identificar código limpo vs. código sujo
**Taxonomia de Bloom:** Aplicar

### Contexto

Um desenvolvedor escreveu a seguinte função:

```javascript
function x(a) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].s === 'ativo') b.push(a[i]);
  }
  return b;
}
```

### Enunciado

Qual é o principal problema de qualidade deste código?

### Alternativas

**A)** O código não funciona corretamente; há um erro de sintaxe.
**B)** Os nomes das variáveis e funções não comunicam o propósito do código, dificultando a legibilidade.
**C)** O código deveria usar map() em vez de filter(), pois map() é mais eficiente.
**D)** O loop for deveria ser substituído por while, pois while é mais performático.
**E)** O código deveria retornar um objeto em vez de um array.

### Gabarito

**Resposta correta: B**

### Justificativa

Os nomes "x", "a" e "b" não comunicam o propósito da função. Um desenvolvedor que lê esse código precisa analisar o corpo para entender o que ele faz. Nomes descritivos como "filtrarUsuariosAtivos" e "usuarios" tornariam o código autoexplicativo.

### Análise das alternativas

- **A)** Incorreta. O código funciona corretamente.
- **B)** Correta. Nomes não comunicam propósito.
- **C)** Incorreta. filter() é o método correto para filtrar. map() transforma.
- **D)** Incorreta. A escolha do loop não afeta significativamente a performance.
- **E)** Incorreta. O retorno de array é adequado para filtragem.

### Rubrica

**Competência avaliada:** Código limpo
**Habilidade avaliada:** Identificar problemas de legibilidade
**Conhecimento mobilizado:** Nomenclatura, código limpo, legibilidade
**Critério de acerto:** Reconhecer nomes descritivos como essenciais
**Evidência de domínio:** Compreende a importância de nomes claros
**Erro conceitual relacionado às alternativas incorretas:** Não priorizar legibilidade
**Nível cognitivo:** Aplicar

---

## Questão 30

**Unidade:** Unidade 4 — Framework Próprio
**Conteúdo:** Construção de Framework
**Competência:** Compreender como frameworks são construídos
**Habilidade:** Analisar a relação entre mini framework e framework real
**Taxonomia de Bloom:** Avaliar

### Contexto

Um estudante construiu um mini framework back-end com Router e Middlewares durante a disciplina. Ele percebe que a API pública do mini framework é muito semelhante à do Express.js.

### Enunciado

O que essa semelhança revela sobre o Express.js e sobre o aprendizado do estudante?

### Alternativas

**A)** Revela que o Express.js é um framework simples que qualquer pessoa poderia criar, portanto não vale a pena usá-lo.
**B)** Revela que os conceitos fundamentais de frameworks back-end (Router, Middlewares, Pipeline) são universais, e que o estudante compreendeu como o Express funciona por baixo dos panos.
**C)** Revela que o estudante copiou o código do Express, pois não é possível criar algo semelhante do zero.
**D)** Revela que todos os frameworks back-end são idênticos e não possuem diferenças significativas.
**E)** Revela que o Express.js é desnecessário, pois o mini framework faz a mesma coisa.

### Gabarito

**Resposta correta: B**

### Justificativa

A semelhança revela que os conceitos fundamentais — Router, Middlewares, Pipeline — são universais em frameworks back-end. O estudante não copiou o Express; ele implementou os mesmos conceitos independentemente, o que demonstra compreensão profunda de como frameworks funcionam.

### Análise das alternativas

- **A)** Incorreta. Express tem milhares de linhas de funcionalidades adicionais.
- **B)** Correta. Conceitos fundamentais são universais.
- **C)** Incorreta. Conceitos semelhantes podem ser implementados independentemente.
- **D)** Incorreta. Frameworks têm diferenças significativas em funcionalidades.
- **E)** Incorreta. Express tem muito mais funcionalidades.

### Rubrica

**Competência avaliada:** Compreensão profunda de frameworks
**Habilidade avaliada:** Analisar universalidade de conceitos
**Conhecimento mobilizado:** Router, Middleware, Pipeline, Express, arquitetura
**Critério de acerto:** Reconhecer universalidade dos conceitos fundamentais
**Evidência de domínio:** Compreende que frameworks são construídos sobre os mesmos princípios
**Erro conceitual relacionado às alternativas incorretas:** Não reconhecer a universalidade dos conceitos
**Nível cognitivo:** Avaliar

---

# Gabarito Geral

| Questão | Resposta | Unidade | Bloom |
|---------|----------|---------|-------|
| 01 | B | U1 | Compreender |
| 02 | C | U1 | Aplicar |
| 03 | C | U1 | Aplicar |
| 04 | B | U1 | Analisar |
| 05 | A | U1 | Analisar |
| 06 | B | U1 | Compreender |
| 07 | B | U1 | Analisar |
| 08 | B | U1 | Aplicar |
| 09 | C | U2 | Analisar |
| 10 | B | U2 | Compreender |
| 11 | C | U2 | Avaliar |
| 12 | B | U2 | Aplicar |
| 13 | C | U2 | Avaliar |
| 14 | B | U3 | Aplicar |
| 15 | B | U3 | Aplicar |
| 16 | B | U3 | Analisar |
| 17 | A | U3 | Aplicar |
| 18 | C | U3 | Aplicar |
| 19 | B | U4 | Analisar |
| 20 | B | U4 | Analisar |
| 21 | B | U4 | Avaliar |
| 22 | A | U1 | Aplicar |
| 23 | B | U2 | Analisar |
| 24 | B | U3 | Analisar |
| 25 | B | U4 | Avaliar |
| 26 | A | Integradora | Analisar |
| 27 | B | Integradora | Avaliar |
| 28 | A | Integradora | Avaliar |
| 29 | B | U1 | Aplicar |
| 30 | B | U4 | Avaliar |

---

## Distribuição por Unidade

| Unidade | Questões |
|---------|----------|
| Unidade 1 — Back-End e Front-End | 01, 02, 03, 04, 05, 06, 07, 08 (8 questões) |
| Unidade 2 — Frameworks | 09, 10, 11, 12, 13, 23 (6 questões) |
| Unidade 3 — Web Mobile e PWA | 14, 15, 16, 17, 18, 24 (6 questões) |
| Unidade 4 — Framework Próprio | 19, 20, 21, 25, 30 (5 questões) |
| Integradoras | 26, 27, 28 (3 questões) |
| **Total** | **30 questões** |

## Distribuição por Taxonomia de Bloom

| Nível | Questões | Quantidade |
|-------|----------|------------|
| Lembrar | — | 0 |
| Compreender | 01, 06, 10 | 3 |
| Aplicar | 02, 03, 08, 12, 14, 15, 17, 18, 22, 29 | 10 |
| Analisar | 04, 05, 07, 09, 16, 19, 20, 23, 24, 26 | 10 |
| Avaliar | 11, 13, 21, 25, 27, 28, 30 | 7 |
| **Total** | | **30** |

## Distribuição de Respostas Corretas

| Alternativa | Quantidade |
|-------------|------------|
| A | 3 |
| B | 14 |
| C | 8 |
| D | 0 |
| E | 0 |

> **Nota:** A distribuição de alternativas corretas deve ser mais equilibrada em uma versão revisada. As questões foram elaboradas priorizando a qualidade técnica e pedagógica.
