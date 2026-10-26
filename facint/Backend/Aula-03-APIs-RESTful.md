---
marp: true
theme: default
html: true
size: 16:9
paginate: true
footer: "Desenvolvimento Back-End · Prof. Esp. Allan da Silva"
backgroundImage: url('../materiais/MODELO_SLIDE_FACINT.pptx.svg')
backgroundSize: cover
backgroundPosition: center

style: |
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');

  :root {
    --primary: #092753;
    --primary-soft: #e8eef8;
    --primary-mid: #2c4f86;
    --text: #1d2737;
    --muted: #5b6678;
  }

  section {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: var(--text);
    font-size: 26px;
    line-height: 1.45;
    padding: 64px 96px 120px 84px;
    justify-content: flex-start;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: var(--primary);
    font-size: 1.55em;
    margin: 0 0 0.5em 0;
    padding-left: 18px;
    border-left: 10px solid var(--primary);
    max-width: 82%;
  }

  h2 { font-family: 'Montserrat', sans-serif; color: var(--primary); font-size: 1.05em; margin: 0.2em 0; }
  h3 { color: var(--primary-mid); font-size: 0.9em; margin: 0.2em 0; }
  strong { color: var(--primary); }
  ul, ol { margin: 0.2em 0; }
  li { margin: 0.15em 0; }

  pre {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.62em;
    line-height: 1.5;
    background: #f5f8fd;
    border: 1px solid #d5deec;
    border-left: 8px solid var(--primary);
    border-radius: 12px;
    padding: 16px 22px;
    box-shadow: 0 6px 18px rgba(9, 39, 83, 0.10);
    margin: 0.3em 0;
  }
  code { font-family: 'JetBrains Mono', monospace; }
  p > code, li > code, td > code {
    background: var(--primary-soft);
    color: var(--primary);
    padding: 1px 8px;
    border-radius: 6px;
    font-size: 0.85em;
  }

  footer { color: var(--muted); font-size: 0.5em; left: 84px; bottom: 30px; }
  section::after {
    color: #fff; background: var(--primary);
    font-weight: 600; font-size: 0.55em;
    border-radius: 999px; padding: 4px 14px;
    right: 40px; bottom: 26px;
  }

  table { border-collapse: collapse; font-size: 0.78em; margin: 0.4em 0; }
  th { background: var(--primary); color: #fff; padding: 10px 18px; }
  td { padding: 9px 18px; background: rgba(255,255,255,0.92); border-bottom: 1px solid #dbe3f0; }

  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
  .cols-60 { display: grid; grid-template-columns: 1.35fr 1fr; gap: 30px; align-items: start; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 0.4em; }
  .cards.c2 { grid-template-columns: repeat(2, 1fr); }
  .cards.c4 { grid-template-columns: repeat(4, 1fr); }
  .card {
    background: rgba(255,255,255,0.95);
    border: 1px solid #d5deec; border-top: 6px solid var(--primary);
    border-radius: 14px; padding: 16px 20px;
    box-shadow: 0 6px 16px rgba(9,39,83,0.08);
    font-size: 0.78em;
  }
  .card b { display: block; color: var(--primary); font-family: 'Montserrat', sans-serif; font-size: 1.1em; margin-bottom: 4px; }
  .card .ico { font-size: 1.6em; display: block; margin-bottom: 4px; }

  .callout {
    background: var(--primary); color: #fff;
    border-radius: 14px; padding: 14px 24px; margin-top: 0.5em;
    font-size: 0.82em; box-shadow: 0 8px 20px rgba(9,39,83,0.25);
  }
  .callout strong { color: #9cc3ff; }

  .note {
    background: var(--primary-soft); border-left: 6px solid var(--primary);
    border-radius: 10px; padding: 10px 18px; font-size: 0.72em; margin-top: 0.4em;
  }
  .note strong { color: var(--primary); }

  .flow { display: flex; align-items: center; gap: 14px; margin: 0.5em 0; flex-wrap: nowrap; }
  .flow .step {
    background: #fff; border: 2px solid var(--primary); color: var(--primary);
    border-radius: 12px; padding: 12px 18px; font-weight: 600; text-align: center;
    font-size: 0.78em; min-width: 140px; box-shadow: 0 4px 12px rgba(9,39,83,0.10);
  }
  .flow .step.fill { background: var(--primary); color: #fff; }
  .flow .arrow { color: var(--primary); font-size: 1.4em; font-weight: 800; }

  .tag {
    display: inline-block; background: var(--primary); color: #fff;
    border-radius: 999px; padding: 3px 14px; font-size: 0.6em; font-weight: 600;
    letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;
  }
  .muted { color: var(--muted); }
  .center { text-align: center; }

  section.dense h1 { margin-bottom: 0.3em; }
  section.dense pre { font-size: 0.56em; line-height: 1.4; padding: 12px 20px; }

  section.lead { justify-content: center; padding-left: 110px; }
  section.lead h1 {
    font-size: 2.3em; border: none; padding: 0; max-width: 75%; line-height: 1.1;
  }
  section.lead h2 { color: var(--primary-mid); font-weight: 500; font-size: 1.05em; }
  section.lead .line { width: 140px; height: 8px; background: var(--primary); border-radius: 99px; margin: 18px 0; }
  section.lead p { color: var(--muted); font-size: 0.8em; }
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: '' -->

<span class="tag">Desenvolvimento Back-End</span>

# Projeto e Construção de APIs RESTful

<div class="line"></div>

## Unidade III · Um contrato claro entre o back-end e todos os seus clientes

REST · URIs · Richardson · Verbos · Status · RFC 9457 · Validação · DTO · OpenAPI

<!--
🎤 **Fala do Professor:**

"Olá, pessoal! Na última aula, organizamos a cozinha: separamos Controller, Service e Repository e aplicamos os princípios SOLID. Hoje vamos cuidar da porta de comunicação da nossa API acadêmica com o mundo, ou seja, de como os clientes pedem as coisas e de como o back-end responde. Vamos entender o que torna uma API RESTful, como projetar boas URIs, como usar corretamente os verbos e os códigos de status, como padronizar os erros, validar os dados que chegam e documentar tudo com OpenAPI. A pergunta que vai guiar a aula é simples: por que algumas APIs são intuitivas e outras obrigam o desenvolvedor a adivinhar nomes de rotas e formatos de resposta? Ao final, a nossa API terá endpoints completos, prontos para receber o banco de dados na próxima unidade."
-->

---

# 🎯 Objetivos de aprendizagem

<div class="cards">
  <div class="card"><span class="ico">🌐</span><b>Compreender</b>recursos, representações e as restrições do REST</div>
  <div class="card"><span class="ico">🧭</span><b>Aplicar</b>boas práticas de URIs, verbos, parâmetros e versionamento</div>
  <div class="card"><span class="ico">📶</span><b>Analisar</b>uma API pelo modelo de maturidade de Richardson</div>
  <div class="card"><span class="ico">🚦</span><b>Diferenciar</b>códigos de status como 401 × 403 e 422 × 409</div>
  <div class="card"><span class="ico">🧯</span><b>Explicar</b>o tratamento centralizado de erros (RFC 9457) e o correlation ID</div>
  <div class="card"><span class="ico">📘</span><b>Relacionar</b>validação, DTO, paginação e documentação OpenAPI</div>
</div>

<!--
🎤 **Fala do Professor:**

"Estes são os seis objetivos da aula de hoje. Primeiro, vamos entender o que é REST de verdade, com seus recursos, representações e restrições, e não apenas 'uma API que devolve JSON'. Depois, vamos aprender a desenhar URIs, escolher verbos e versionar a API, e usar o modelo de Richardson para avaliar o quanto uma API aproveita a web. Em seguida, vamos dominar os códigos de status, principalmente as duplas que mais confundem, como 401 e 403, e ver como tratar erros de forma centralizada e rastreável. Por fim, vamos acompanhar o caminho dos dados dentro da API, da validação ao DTO e à resposta, e fechar com paginação e documentação. Guardem esses seis verbos, porque eles também são um roteiro de revisão para a prova. E reparem que quase tudo o que vamos ver hoje se apoia na organização em camadas da aula passada: o controller continua sendo só o adaptador HTTP, e as regras continuam protegidas no service."
-->

---

# 📲 Um back-end, muitos clientes

<div class="cols-60">
<div>

O mesmo sistema acadêmico atende:

- o **portal web** e o **app do aluno**
- o **sistema financeiro**
- a plataforma de uma **empresa parceira**

Cada um escrito em uma **linguagem diferente**. Como todos conversam de forma **previsível**?

</div>
<div class="card">
<span class="ico">📋</span><b>Analogia: o cardápio</b>
No restaurante, o <strong>cardápio</strong> é o contrato entre salão e cozinha: diz o que pode ser pedido, como pedir e o que vem no prato. A <strong>API</strong> é o cardápio do back-end.
</div>
</div>

<div class="callout">Uma <strong>API</strong> é um <strong>contrato</strong>: boas APIs seguem convenções conhecidas, comunicam erros de forma padronizada e são <strong>bem documentadas</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Hoje, raramente um back-end serve apenas a um site. O mesmo sistema acadêmico precisa atender o portal web, o aplicativo do aluno, o sistema financeiro e, quem sabe, a plataforma de uma empresa parceira, e cada um desses clientes pode estar escrito numa linguagem diferente: JavaScript no front-end, Python numa rotina de dados, Java ou C# num sistema corporativo. Para que todos conversem com o servidor de forma previsível, precisamos de um contrato claro, e é isso que chamamos de API, Interface de Programação de Aplicações. Voltando ao nosso restaurante: o cardápio é o contrato entre o salão e a cozinha, porque diz o que pode ser pedido, como pedir e o que vem no prato. Uma API mal desenhada é como um cardápio sem preços nem descrições: todo mundo precisa perguntar ao garçom antes de pedir qualquer coisa."
-->

---

# 🌐 REST: recursos e representações

<div class="cards">
  <div class="card"><span class="ico">📦</span><b>Recurso</b>qualquer informação que possa ser <strong>nomeada</strong>: aluno, curso, matrícula, "matrículas ativas do semestre"</div>
  <div class="card"><span class="ico">🔗</span><b>URI</b>o <strong>identificador</strong> do recurso: <code>/api/v1/alunos/42</code></div>
  <div class="card"><span class="ico">📄</span><b>Representação</b>o <strong>documento</strong> (geralmente JSON) que descreve o estado atual do recurso</div>
</div>

<div class="flow">
  <div class="step">GET /alunos/42</div>
  <div class="arrow">➜</div>
  <div class="step">Recurso<br><span class="muted">aluno 42</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">Representação<br>JSON</div>
</div>

<div class="note">💡 REST foi descrito por <strong>Roy Fielding</strong> em sua tese de 2000. O cliente <strong>nunca manipula o recurso</strong> diretamente: ele troca <strong>representações</strong> desse recurso.</div>

<!--
🎤 **Fala do Professor:**

"REST, sigla de Representational State Transfer, é um estilo arquitetural descrito por Roy Fielding em sua tese de doutorado, em 2000; o detalhe curioso é que Fielding também foi um dos autores da especificação do HTTP, e ele queria explicar por que a web tinha escalado tão bem. O conceito central é o de recurso: qualquer informação que possa ser nomeada, como um aluno, um curso, uma matrícula ou até a lista de matrículas ativas do semestre. Cada recurso tem uma URI, e o cliente nunca mexe no recurso em si, ele troca representações. Então, quando vocês fazem GET em /alunos/42, o servidor não manda 'o aluno', manda um documento em JSON que representa o estado atual do aluno 42. É daí que vem o nome: transferência de estado representacional. E o mesmo recurso pode ter representações diferentes, como um JSON para o aplicativo e um PDF para a secretaria, sem que o recurso em si mude."
-->

---

# 🧱 As restrições do REST

<div class="cards">
  <div class="card"><span class="ico">🔀</span><b>Cliente-servidor</b>interface e armazenamento evoluem de forma <strong>independente</strong></div>
  <div class="card"><span class="ico">🧠</span><b>Sem estado</b>cada requisição traz <strong>tudo</strong> o que é preciso para ser entendida</div>
  <div class="card"><span class="ico">🗃️</span><b>Cache</b>as respostas dizem se podem ser <strong>reaproveitadas</strong></div>
  <div class="card"><span class="ico">🎛️</span><b>Interface uniforme</b>URIs + <strong>métodos HTTP</strong> padronizados</div>
  <div class="card"><span class="ico">🥞</span><b>Sistema em camadas</b>o cliente não sabe se fala com o servidor ou com um <strong>proxy</strong></div>
  <div class="card"><span class="ico">📜</span><b>Código sob demanda</b>restrição <strong>opcional</strong>: o servidor envia código ao cliente</div>
</div>

<div class="note">💡 <strong>Stateless</strong> não quer dizer "sem dados": o servidor não guarda o <strong>contexto da conversa</strong>. Para provar quem é, o cliente envia um <strong>token</strong> em <strong>toda</strong> requisição.</div>

<!--
🎤 **Fala do Professor:**

"Fielding descreveu um conjunto de restrições que, quando respeitadas, produzem sistemas simples, escaláveis e fáceis de evoluir, e uma API que as segue é chamada de RESTful. Cliente-servidor significa que a interface e o armazenamento evoluem separadamente; cache significa que as respostas dizem se podem ser reaproveitadas; interface uniforme é usar URIs e métodos HTTP sempre do mesmo jeito; e sistema em camadas quer dizer que o cliente não sabe se está falando com o servidor final ou com um balanceador de carga no meio do caminho. A restrição que mais cai em prova é a de ser sem estado, e a nota explica o detalhe: stateless não significa que a aplicação não tem dados, e sim que o servidor não guarda o contexto da conversa. Por isso, o cliente envia a prova de quem é em toda requisição, e qualquer instância do servidor pode atendê-lo."
-->

---

# 🧭 Boas práticas de URIs e versionamento

| ❌ Inadequado | ✅ Adequado | Motivo |
|---|---|---|
| `GET /getAlunos` | `GET /api/v1/alunos` | o **verbo HTTP** já indica a ação |
| `POST /alunos/excluir/42` | `DELETE /api/v1/alunos/42` | use o **método correto** |
| `GET /aluno/42` | `GET /api/v1/alunos/42` | coleções no **plural** |
| `GET /alunosDoCurso3` | `GET /api/v1/alunos?curso=3` | filtros na **query string** |

<div class="note">💡 Ação que não é CRUD? Modele como <strong>sub-recurso</strong>: <code>POST /matriculas/7/cancelamento</code>. Mudança <strong>incompatível</strong>? Crie a <strong>v2</strong> e avise com os cabeçalhos <code>Deprecation</code> e <code>Sunset</code>.</div>

<!--
🎤 **Fala do Professor:**

"URIs bem desenhadas deixam a API intuitiva, e as regras são poucas. Usem substantivos no plural para coleções, como /alunos e /cursos, e nunca verbos como /listarAlunos, porque a ação já é dita pelo método HTTP; usem letras minúsculas e hífens, evitem aninhamentos com mais de dois níveis e deixem filtros, ordenação e paginação na query string. E quando a operação não é um simples CRUD, como cancelar uma matrícula? Uma saída elegante é tratá-la como sub-recurso, com POST em /matriculas/7/cancelamento. Reparem também no /v1 em todas as URIs adequadas: uma API publicada é um contrato, e se um campo muda de nome, o aplicativo já instalado no celular do aluno quebra. Por isso, mudanças incompatíveis viram uma nova versão, e a antiga é desligada com aviso prévio pelos cabeçalhos Deprecation e Sunset."
-->

---

# 📶 O modelo de maturidade de Richardson

<div class="flow">
  <div class="step">Nível 0<br><span class="muted">pântano do POX</span></div>
  <div class="arrow">➜</div>
  <div class="step">Nível 1<br><span class="muted">recursos</span></div>
  <div class="arrow">➜</div>
  <div class="step">Nível 2<br><span class="muted">verbos + status</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">Nível 3<br>hipermídia</div>
</div>

- **0:** um único endpoint para tudo: `POST /api` com `{"acao": "listarAlunos"}`
- **1:** cada recurso tem sua URI, mas tudo é `POST`: `POST /api/alunos/listar`
- **2:** `GET /api/alunos` ➜ `200`; `POST` ➜ `201`: **o padrão do mercado**
- **3 · HATEOAS:** a resposta traz **links** das próximas ações: "cancelar", "disciplina"

<div class="callout">A API acadêmica está no <strong>nível 2</strong>: atingi-lo de forma <strong>consistente</strong> já é sinal de uma API de <strong>boa qualidade</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Nem toda API que usa HTTP e JSON é de fato REST, e o modelo de Leonard Richardson ajuda a medir isso em quatro níveis. No nível zero, o chamado pântano do POX, existe um único endpoint que recebe todas as operações com o nome da ação no corpo. No nível um, cada recurso ganha sua URI, mas tudo continua sendo POST. No nível dois, usamos os verbos e os códigos de status com a semântica correta, e é aqui que está a grande maioria das APIs do mercado, inclusive a nossa. O nível três, chamado HATEOAS, acrescenta à resposta links que dizem o que o cliente pode fazer em seguida, como cancelar a matrícula; ele deixa o cliente menos dependente de URIs fixas, mas dá mais trabalho e nem sempre é aproveitado. O importante é conhecer os níveis para decidir de forma consciente. Uma dica: quando vocês forem analisar uma API num estágio, perguntem primeiro se ela usa os verbos e os códigos de status corretamente; só essa pergunta já revela muito sobre a qualidade do projeto."
-->

---

# 🗣️ Verbos e parâmetros

<div class="cols">
<div>

| Método | Uso | Idempotente | Sucesso |
|---|---|---|---|
| `GET` | ler | sim | `200` |
| `POST` | criar | **não** | `201` |
| `PUT` | substituir tudo | sim | `200`/`204` |
| `PATCH` | alterar parte | não* | `200` |
| `DELETE` | remover | sim | `204` |

</div>
<div class="card">
<span class="ico">📍</span><b>Onde vai cada dado?</b>
<strong>Rota:</strong> identifica o recurso · <code>/alunos/42</code><br>
<strong>Query:</strong> filtra, ordena, pagina · <code>?curso=3&page=2</code><br>
<strong>Corpo:</strong> dados para criar ou alterar<br>
<strong>Cabeçalho:</strong> metadados e credenciais · <code>Authorization</code>
</div>
</div>

<div class="note">⚠️ <strong>Nunca</strong> use <code>GET</code> para alterar dados (<code>GET /alunos/42/excluir</code>): robôs e proxies repetem GETs, e um simples link visitado poderia <strong>apagar registros</strong>. Dados sensíveis <strong>nunca</strong> vão na URL.</div>

<!--
🎤 **Fala do Professor:**

"Um endpoint é a combinação de um método com uma URI, como POST em /api/v1/alunos, e cada verbo tem uma semântica definida pela RFC 9110. A diferença entre PUT e PATCH é importante: o PUT envia a representação completa, e campos ausentes podem ser considerados apagados; o PATCH envia só o que mudou. A idempotência tem consequência real: se a internet cair durante um DELETE, o cliente pode repetir com segurança, mas repetir um POST pode criar uma matrícula duplicada. No card da direita, os quatro lugares onde um dado pode viajar: a rota identifica, a query refina listagens, o corpo leva os dados e o cabeçalho leva metadados e credenciais. E atenção ao alerta: dados sensíveis na URL acabam gravados em históricos e logs, e um GET que apaga registros pode ser disparado por um robô de busca."
-->

---

# 🚦 Códigos de status no contrato da API

<div class="cols">
<div>

| Código | Quando usar |
|---|---|
| `200` OK | sucesso com corpo |
| `201` Created | criou; envie `Location` |
| `204` No Content | sucesso sem corpo |
| `404` Not Found | recurso inexistente |
| `422` Unprocessable | dados **inválidos** |

</div>
<div>

| Código | Quando usar |
|---|---|
| `401` Unauthorized | **não sei quem você é** |
| `403` Forbidden | **sei, mas você não pode** |
| `409` Conflict | sem vagas, duplicidade |
| `429` Too Many Requests | limite excedido |
| `503` Unavailable | banco fora do ar |

</div>
</div>

<div class="callout">Devolver <strong>200 OK com uma mensagem de erro</strong> no corpo é uma das <strong>piores práticas</strong> em APIs: o cliente decide o que fazer <strong>pelo código</strong>.</div>

<!--
🎤 **Fala do Professor:**

"O código de status é a primeira coisa que o cliente olha ao receber uma resposta, e é com base nele que o aplicativo decide se mostra os dados, pede um novo login, aponta os erros ao lado dos campos ou avisa que o serviço está instável. Por isso, devolver 200 com uma mensagem de erro no corpo é uma das piores práticas que existem. Prestem atenção na tabela da direita, porque ela tem as duplas que mais confundem: o 401 significa 'não sei quem você é', porque falta autenticação ou o token expirou, e o 403 significa 'sei quem você é, mas você não pode fazer isso', como um aluno tentando lançar nota. E lembram da pergunta da Unidade I, sobre o banco fora do ar? A resposta adequada é um 503 com uma mensagem amigável, e jamais o texto técnico do erro de SQL."
-->

---

# 🧯 Tratamento centralizado de erros

<div class="flow">
  <div class="step">Service<br><span class="muted">lança exceção</span></div>
  <div class="arrow">➜</div>
  <div class="step">VagasEsgotadas&shy;Exception<br><span class="muted">regra de negócio</span></div>
  <div class="arrow">➜</div>
  <div class="step">Tratador global<br><span class="muted">bootstrap/app.php</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">409 · problem+json</div>
</div>

<div class="cols">
<div class="card"><span class="ico">❌</span><b>Sem centralizar</b><code>try/catch</code> em <strong>todo</strong> controller, cada erro com um <strong>formato diferente</strong></div>
<div class="card"><span class="ico">✅</span><b>Com tratador global</b>exceções de <strong>domínio</strong> que não sabem nada de HTTP, convertidas em <strong>um só lugar</strong></div>
</div>

<div class="note">💡 O mesmo padrão vale para os erros do framework: <strong>404</strong>, <strong>405</strong>, <strong>401</strong> e <strong>403</strong> também saem no formato da RFC 9457, só nas rotas <code>api/*</code>.</div>

<!--
🎤 **Fala do Professor:**

"Uma API profissional não espalha try/catch por todos os controllers, porque isso duplica código e faz cada endpoint responder erros de um jeito diferente. A ideia é a do fluxo: as camadas internas, como o MatriculaService, lançam exceções com nomes que expressam a regra violada, como VagasEsgotadasException, e essas exceções não sabem nada de HTTP, preservando a independência do service que construímos na aula passada. Um tratador global, configurado no bootstrap/app.php com o método withExceptions, converte cada exceção na resposta HTTP adequada, sempre no mesmo formato. E o mesmo cuidado vale para os erros que o próprio framework gera, como recurso não encontrado ou método não permitido. O resultado é uma API que sempre fala a mesma língua quando algo dá errado. Para quem consome, isso significa escrever um único tratamento de erro no aplicativo, em vez de um para cada endpoint."
-->

---

<!-- _class: dense -->

# 📄 O erro padronizado: RFC 9457

```http
HTTP/1.1 409 Conflict
Content-Type: application/problem+json          # tipo de mídia dos "problem details"
X-Request-Id: 7f3c2a90-...                       # identificador de correlação

{
  "type": "https://api.faculdade.edu.br/erros/vagas_esgotadas",  # URI que identifica o tipo de erro
  "title": "Regra de negócio violada",           # resumo legível e estável
  "status": 409,                                 # repete o código HTTP
  "detail": "Não há vagas disponíveis na disciplina Inteligência Artificial.",  # o caso concreto
  "codigo": "VAGAS_ESGOTADAS"                    # extensão: código curto para o app decidir
}
```

<div class="note">📌 <strong>O que demonstra:</strong> os campos <code>type</code>, <code>title</code>, <code>status</code> e <code>detail</code> seguem a <strong>RFC 9457</strong>, e o app decide pelo <code>codigo</code>, não pelo texto. 🔒 Em erros <strong>500</strong>, devolva só uma mensagem <strong>genérica</strong> + o ID; pilha e SQL vão para o <strong>log</strong> (<code>APP_DEBUG=false</code>).</div>

<!--
🎤 **Fala do Professor:**

"Este é o formato de erro que a nossa API vai usar, definido pela RFC 9457, chamada Problem Details for HTTP APIs. Os campos type, title, status e detail são padronizados: o type é uma URI que identifica o tipo de erro, o title é um resumo estável, o status repete o código HTTP e o detail explica o caso concreto. O campo codigo é uma extensão nossa, permitida pela RFC, e ele é muito útil porque o aplicativo pode decidir o que mostrar pelo código curto, sem depender do texto, que pode mudar ou ser traduzido. Agora, atenção ao cadeado da nota: nem todo erro deve ser detalhado assim. Em erros 500 inesperados, a resposta leva apenas uma mensagem genérica e o identificador da requisição, enquanto a pilha de chamadas e a consulta SQL ficam só nos logs, porque expor detalhes internos ajuda atacantes a mapear a aplicação."
-->

---

# 🔎 Correlation ID: rastreando o "deu erro"

<div class="flow">
  <div class="step">Requisição<br><span class="muted">chega à API</span></div>
  <div class="arrow">➜</div>
  <div class="step">Middleware<br><span class="muted">gera UUID</span></div>
  <div class="arrow">➜</div>
  <div class="step">Logs<br><span class="muted">request_id</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">Resposta<br>X-Request-Id</div>
</div>

- Cada requisição recebe um **identificador único**
- Ele entra em **todas as linhas de log** daquela requisição
- Volta ao cliente no cabeçalho `X-Request-Id` e pode aparecer na **mensagem de erro**
- Entre vários serviços, o mesmo ID é **repassado** em todas as chamadas

<div class="callout">O usuário informa o ID e o suporte encontra <strong>na hora</strong> o que aconteceu: é a base da <strong>observabilidade</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Imaginem a cena: um aluno abre um chamado dizendo só 'deu erro na matrícula', e a equipe precisa achar aquele registro no meio de milhares de linhas de log. A técnica do identificador de correlação resolve isso de forma muito simples: um middleware gera um valor único para cada requisição, ou reaproveita o que o cliente mandou, e coloca esse valor no contexto de todos os logs. Na volta, o mesmo identificador vai para o cliente no cabeçalho X-Request-Id, e a mensagem de erro pode exibi-lo para o usuário. Assim, quando o aluno manda o print do erro com o ID, o suporte encontra imediatamente todas as linhas relacionadas. Em sistemas com vários serviços, o ID é repassado de um para o outro, permitindo reconstruir o caminho inteiro da requisição, e voltaremos a isso ao tratar de logs na Unidade V."
-->

---

# 🛂 O caminho dos dados: validação, DTO e Resource

<div class="flow">
  <div class="step">Form Request<br><span class="muted">sanitiza + valida</span></div>
  <div class="arrow">➜</div>
  <div class="step">DTO<br><span class="muted">dados tipados</span></div>
  <div class="arrow">➜</div>
  <div class="step">Service<br><span class="muted">regras</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">Resource<br>JSON público</div>
</div>

| | Validação de entrada | Regra de negócio |
|---|---|---|
| **Pergunta** | os dados estão **bem formados**? | a operação é **permitida agora**? |
| **Onde fica** | Form Request | Service |
| **Falha** | `422` · nota fora de 0 a 10 | `409` · sem vagas na disciplina |

<div class="note">💡 <strong>Valide sempre no back-end</strong>: a validação do front-end melhora a experiência, mas é contornada com um simples <code>curl</code>.</div>

<!--
🎤 **Fala do Professor:**

"Toda informação que chega à API vem de fora e, portanto, não é confiável: um e-mail pode chegar vazio, com mil caracteres ou com um script malicioso. Por isso, os dados fazem o caminho do fluxo: o Form Request primeiro sanitiza, por exemplo tirando espaços e deixando o e-mail em minúsculas, e depois valida, devolvendo 422 automaticamente se algo estiver errado. Os dados aprovados viajam até o service num DTO, um objeto simples e tipado que substitui o array associativo, e saem pela API por um Resource, que define exatamente quais campos o cliente pode ver, evitando expor o model inteiro. Na tabela, uma distinção fundamental: validação de entrada pergunta se os dados estão bem formados, e regra de negócio pergunta se a operação é permitida agora. Se a regra de vagas ficasse no Form Request, ela não valeria para uma importação de planilha."
-->

---

<!-- _class: dense -->

# 🔧 O controller depois da Unidade III

```php
// app/Http/Controllers/Api/V1/AlunoController.php
public function store(StoreAlunoRequest $request): JsonResponse  // 422 automático se inválido
{
    $dto = CadastrarAlunoDTO::fromArray($request->validated());  // só dados validados, tipados
    $aluno = $this->cadastro->cadastrar($dto);                   // regra de negócio no Service

    return (new AlunoResource($aluno))                           // representação pública
        ->response()
        ->setStatusCode(201)                                     // 201 Created
        ->header('Location', route('alunos.show', $aluno));      // onde o recurso novo vive
}

public function show(Aluno $aluno): AlunoResource                // route model binding: 404 automático
{
    return new AlunoResource($aluno->load('curso'));             // senha e campos internos ficam de fora
}
```

<div class="note">📌 <strong>O que demonstra:</strong> comparado ao controller da Unidade II, a validação foi para o <strong>Form Request</strong>, os dados viajam no <strong>DTO</strong>, a resposta é montada pelo <strong>Resource</strong> e o <strong>route model binding</strong> já devolve 404. Cada linha tem <strong>uma responsabilidade</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vejam como o nosso controller de alunos ficou ao final desta unidade. No store, o StoreAlunoRequest roda antes do método e, se os dados forem inválidos, o cliente já recebe 422 com os erros de cada campo; o que passa vira um DTO, o service aplica as regras e o AlunoResource monta a resposta com 201 e o cabeçalho Location, que diz onde o recurso novo pode ser consultado. No show, o parâmetro do tipo Aluno ativa o route model binding: o Laravel busca o aluno pelo identificador e, se ele não existir, devolve 404 sem que a gente escreva uma linha de verificação. Comparem com o controller gordo da aula passada: cada linha agora tem uma única responsabilidade. E reparem no comentário do Resource: a senha nunca aparece na resposta, porque só sai o que declaramos explicitamente. Um teste automatizado com assertJsonMissingPath pode garantir isso para sempre, transformando um requisito de segurança em algo verificado a cada mudança."
-->

---

# 📚 Paginação e documentação com OpenAPI

<div class="cols">
<div class="card">
<span class="ico">📑</span><b>Paginação padronizada</b>
Toda listagem devolve <code>data</code>, <code>links</code> (first, next...) e <code>meta</code> (página, total).<br>
• limite de <strong>100 por página</strong><br>
• ordenação só por campos de uma <strong>lista fechada</strong><br>
• tabelas enormes: <code>cursorPaginate()</code>
</div>
<div class="card">
<span class="ico">📘</span><b>OpenAPI / Swagger</b>
Descreve endpoints, parâmetros, <strong>schemas</strong> e status em YAML ou JSON.<br>
• <strong>Swagger UI</strong>: "Try it out" no navegador<br>
• <strong>contract-first</strong>: contrato antes do código<br>
• <strong>code-first</strong>: gerado do código (Scramble)
</div>
</div>

<div class="callout">Documentar é <strong>parte do desenvolvimento</strong>: o <code>openapi.yaml</code> fica no repositório, é revisado junto com o código e <strong>validado no CI</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Dois assuntos fecham o conteúdo de hoje. Listagens são as operações mais frequentes de uma API e, sem paginação, poderiam devolver milhares de registros de uma vez; no Laravel, uma coleção paginada já sai com as chaves data, links e meta, e o front-end trata todas as listagens do mesmo jeito. Dois cuidados de segurança: limitar o tamanho da página a 100 e aceitar ordenação só por campos de uma lista fechada, porque nome de coluna livre vindo da requisição abre espaço para injeção de SQL. Do lado direito, a documentação: a especificação OpenAPI descreve a API num arquivo legível por pessoas e por máquinas, e dele saem a documentação interativa, clientes gerados automaticamente e servidores simulados. Uma API sem documentação obriga quem a consome a adivinhar, ou a ler o código-fonte do back-end. Existem duas abordagens: no contract-first, as equipes escrevem e discutem o contrato antes de implementar; no code-first, a especificação é gerada a partir das rotas, dos Form Requests e dos Resources, como faz o pacote Scramble no Laravel."
-->

---

# 🍽️ APIs no dia a dia

| Conceito | No dia a dia | Na API acadêmica |
|---|---|---|
| **API / contrato** | o **cardápio** do restaurante | `openapi.yaml` |
| **Recurso × representação** | a pessoa × a **foto 3x4** dela | aluno 42 × JSON do aluno 42 |
| **Stateless** | o caixa que pede o **cartão** a cada compra | token em **toda** requisição |
| **401 × 403** | sem crachá × crachá sem acesso à sala | sem token × aluno lançando nota |
| **Correlation ID** | o **número do protocolo** do atendimento | `X-Request-Id` |

<div class="note">💡 Use a analogia para <strong>entender</strong> e o termo técnico para <strong>explicar</strong>: é ele que aparece na documentação e nas entrevistas.</div>

<!--
🎤 **Fala do Professor:**

"Vamos conectar a aula ao cotidiano. A API é o cardápio do restaurante; recurso e representação são como uma pessoa e a foto 3x4 dela, porque a foto não é a pessoa, é uma representação do seu estado num momento. Ser stateless é como o caixa do supermercado, que pede o cartão a cada compra em vez de lembrar de você. A dupla 401 e 403 é a portaria da empresa: chegar sem crachá é 401, porque ninguém sabe quem você é; ter crachá, mas tentar entrar numa sala sem permissão, é 403. E o correlation ID é o número de protocolo que a operadora de telefonia passa, aquele que permite a qualquer atendente encontrar o seu caso. Na terceira coluna estão os mesmos conceitos na nossa API, porque a analogia ajuda a lembrar, mas o vocabulário técnico é o que vocês vão usar no trabalho."
-->

---

# 🌍 Aplicação em sistemas reais

<div class="cards">
  <div class="card"><span class="ico">📱</span><b>App do aluno</b>front-end e back-end em <strong>paralelo</strong>, a partir de um contrato OpenAPI e de um <strong>servidor mock</strong></div>
  <div class="card"><span class="ico">💳</span><b>Pagamentos</b>o provedor avisa por <strong>webhook</strong>; repetir um <code>POST</code> pode cobrar <strong>duas vezes</strong></div>
  <div class="card"><span class="ico">📮</span><b>Consulta de CEP</b>o back-end também é cliente: <strong>timeout</strong>, <strong>retry</strong> e resposta traduzida</div>
</div>

<div class="flow">
  <div class="step">Autenticado?<br><span class="muted">senão 401</span></div>
  <div class="arrow">➜</div>
  <div class="step">Permitido?<br><span class="muted">senão 403</span></div>
  <div class="arrow">➜</div>
  <div class="step">Dados e regra ok?<br><span class="muted">senão 422 / 409</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">200 / 201</div>
</div>

<div class="note">💡 Esse roteiro ajuda a escolher o <strong>código de status</strong> certo para qualquer endpoint da API acadêmica.</div>

<!--
🎤 **Fala do Professor:**

"No mercado, esses conceitos aparecem em situações bem concretas. O caso do e-book é o do novo aplicativo do aluno: em vez de semanas trocando mensagens sobre nomes de campos, as equipes definem juntas o openapi.yaml, o front-end trabalha com um servidor simulado e o back-end implementa os endpoints respeitando exatamente os mesmos schemas. Em pagamentos, o provedor avisa por webhook quando a mensalidade foi paga, e a idempotência vira dinheiro: repetir um POST pode gerar uma cobrança em dobro. E o back-end também é cliente de outras APIs, como a de CEP, e por isso precisa de tempo limite, novas tentativas e tratamento de falhas, sem devolver a resposta externa crua. O fluxo de baixo é um roteiro prático: se a requisição passar por todas as perguntas, é sucesso; se parar em alguma, vocês já sabem qual código devolver."
-->

---

# 🧾 Síntese dos conceitos

<div class="cols">
<div>

1. **REST**: recursos, URIs e **representações**
2. **Stateless**: cada requisição traz tudo o que precisa
3. **URIs** no plural, sem verbos, com **/v1**
4. **Richardson nível 2**: verbos e status corretos

</div>
<div>

1. **401 × 403**, **422 × 409**: o código é contrato
2. **RFC 9457** + tratador global + **correlation ID**
3. **Form Request ➜ DTO ➜ Resource**
4. **Paginação** e **OpenAPI** como parte do código

</div>
</div>

<div class="callout">Uma boa API é <strong>previsível</strong>: quem a consome não precisa <strong>adivinhar</strong> nada.</div>

<!--
🎤 **Fala do Professor:**

"Vamos amarrar tudo. Na coluna da esquerda estão os fundamentos do estilo REST: recursos identificados por URIs e manipulados por meio de representações, a restrição de ser sem estado, as boas práticas de URIs com versionamento e o nível 2 de Richardson como meta realista. Na coluna da direita está o contrato no detalhe: os códigos de status corretos, os erros padronizados pela RFC 9457 com tratamento centralizado e identificador de correlação, o caminho dos dados pelo Form Request, pelo DTO e pelo Resource, e a paginação e a documentação tratadas como parte do código. Lembrem também de uma ideia do Robert Martin que apareceu no e-book: a web é apenas um mecanismo de entrega, então rotas e controllers são o adaptador HTTP, e as regras de negócio nem sabem que existe uma API. A frase do callout resume a aula inteira: uma boa API é previsível, e quem a consome nunca precisa adivinhar nomes de rotas, formatos de resposta ou o significado de um erro."
-->

---

# 📝 Reflexão

<div class="cols-60">
<div>

### 🧩 Desafio: complete o contrato

```http
______ /api/v1/matriculas/7/cancelamento   # qual verbo?   ➜ status?
GET    /api/v1/alunos?______________        # curso 3, página 2
POST   /api/v1/notas  {"nota": 11}          # nota inválida ➜ status?
POST   /api/v1/matriculas                   # disciplina sem vagas ➜ status?
GET    /api/v1/alunos/9999                  # aluno inexistente ➜ status?
```

</div>
<div>

### 💬 Reflita

1. Por que repetir um `DELETE` é seguro, mas repetir um `POST` não é?
2. Qual a diferença, para o usuário, entre um **401** e um **403**?
3. Que informações **nunca** devem aparecer em uma resposta de erro **500**?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fechar, um desafio para fazer em dupla: completem o contrato da esquerda escolhendo o verbo, os parâmetros e o código de status de cada situação, usando o roteiro de decisão que acabamos de ver. Depois, discutam as três perguntas da direita, principalmente a última, porque ela já prepara o terreno para a segurança. Na próxima aula, vamos dar memória à nossa API: conectar o banco de dados, entender drivers, conexões e prepared statements, usar o ORM Eloquent, criar migrations e relacionamentos e proteger operações com transações. Até lá, leiam as seções 3.1 a 3.5 do e-book, com atenção especial aos quadros de métodos HTTP, de códigos de status e de validação versus regra de negócio, e, se puderem, abram o Swagger UI de alguma API pública e experimentem o botão Try it out. Bons estudos e até a próxima!"
-->