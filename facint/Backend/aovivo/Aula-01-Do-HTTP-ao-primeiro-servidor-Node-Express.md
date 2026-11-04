---
marp: true
theme: default
html: true
size: 16:9
paginate: true
footer: "Desenvolvimento Back-End · Aula 1 · Prof. Esp. Allan da Silva"
backgroundImage: url('assets/bg-conteudo.png')
backgroundSize: cover
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

  :root {
    --marinho: #03152F;
    --azul: #006DF6;
    --azul-txt: #006BEB;
    --ciano: #00BDEF;
    --texto: #243044;
    --cinza: #6B7A8C;
    --borda: #DCE3EE;
    --azul-claro: #EAF2FE;
    --ciano-claro: #E6F8FD;
  }

  section {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: var(--texto);
    font-size: 24px;
    line-height: 1.42;
    padding: 34px 104px 60px 61px;
    justify-content: flex-start !important;
    background-color: #fff;
  }

  /* Rótulo azul em caixa alta, como "CONTEÚDO" no modelo */
  h6 {
    font-size: 15px; font-weight: 700; color: var(--azul-txt);
    letter-spacing: 0.14em; text-transform: uppercase; margin: 0 0 2px 0;
  }
  h1 {
    font-weight: 700; color: var(--marinho); font-size: 36px;
    line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 4px 0;
  }
  h2 { font-weight: 400; color: var(--cinza); font-size: 19px; margin: 0 0 14px 0; }
  h3 { font-weight: 700; color: var(--marinho); font-size: 21px; margin: 4px 0 6px 0; }
  strong { color: var(--marinho); font-weight: 700; }
  ul, ol { margin: 4px 0; padding-left: 1.1em; }
  li { margin: 4px 0; }
  li::marker { color: var(--ciano); }
  p { margin: 6px 0; }

  /* Código */
  pre {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 16px; line-height: 1.45;
    background: #F5F8FD; color: #1B2A41;
    border: 1px solid var(--borda); border-left: 5px solid var(--azul);
    border-radius: 10px; padding: 12px 18px; margin: 6px 0;
  }
  pre code { background: none; padding: 0; }
  code { font-family: 'JetBrains Mono', monospace; }
  p > code, li > code, td > code, .card code, .box code, .conceito code {
    background: var(--azul-claro); color: var(--marinho);
    padding: 1px 6px; border-radius: 5px; font-size: 0.86em;
  }
  .hljs-keyword, .hljs-built_in, .hljs-literal { color: #0B57C9; }
  .hljs-string, .hljs-regexp { color: #0A7F5A; }
  .hljs-comment { color: #7A8799; font-style: italic; }
  .hljs-number { color: #B4501E; }
  .hljs-title, .hljs-title.function_ { color: #6F3FC4; }
  .hljs-attr, .hljs-property, .hljs-variable { color: var(--marinho); }
  .hljs-params { color: #243044; }
  section.dense pre { font-size: 14.5px; line-height: 1.4; padding: 10px 16px; }

  /* Rodapé e numeração (o logo Un fica no fundo) */
  footer { color: var(--cinza); font-size: 12px; left: 61px; bottom: 22px; }
  section::after { color: var(--cinza); font-size: 13px; font-weight: 600; right: 122px; bottom: 21px; }

  /* Tabelas */
  table { border-collapse: collapse; font-size: 19px; margin: 8px 0; width: 100%; display: table; }
  th { background: var(--marinho); color: #fff; padding: 8px 14px; font-weight: 600; text-align: left; border: none; }
  td { padding: 7px 14px; border: none; border-bottom: 1px solid var(--borda); background: #fff; }
  tr:nth-child(even) td { background: #F7F9FC; }
  table strong { color: var(--marinho); }

  /* Grades */
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; align-items: start; }
  .cols-60 { display: grid; grid-template-columns: 1.4fr 1fr; gap: 26px; align-items: start; }
  .cols > *, .cols-60 > *, .cols-40 > *, .compare > * { min-width: 0; }
  .box code, .card code { overflow-wrap: anywhere; }
  .cols-40 { display: grid; grid-template-columns: 1fr 1.4fr; gap: 26px; align-items: start; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 6px; }
  .cards.c2 { grid-template-columns: repeat(2, 1fr); }
  .cards.c4 { grid-template-columns: repeat(4, 1fr); }

  /* Cartão com número em círculo (layout "Objetivos" / "Resumo") */
  .card {
    background: #fff; border: 1px solid var(--borda); border-radius: 8px;
    padding: 14px 16px; font-size: 19px; line-height: 1.4; color: var(--cinza);
  }
  .card b { display: block; color: var(--marinho); font-size: 19.5px; margin-bottom: 4px; }
  .card .n {
    display: inline-flex; align-items: center; justify-content: center;
    width: 26px; height: 26px; border-radius: 50%; color: #fff; background: var(--azul);
    font-weight: 700; font-size: 14px; margin-bottom: 8px; display: flex;
  }
  .card:nth-child(3n+2) .n { background: var(--ciano); }
  .card:nth-child(3n) .n { background: var(--marinho); }
  .card .ico { font-size: 26px; display: block; margin-bottom: 4px; }
  .card strong { color: var(--marinho); }

  /* Boxes didáticos: ATENÇÃO / NA PRÁTICA / ANALOGIA */
  .box {
    border-radius: 6px; padding: 12px 18px 12px 18px; font-size: 19px; line-height: 1.42;
    background: var(--azul-claro); border-left: 6px solid var(--azul); margin-top: 8px;
  }
  .box .t {
    display: flex; align-items: center; gap: 10px; font-weight: 800; color: var(--marinho);
    font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px;
  }
  .box .t::before {
    content: '!'; display: inline-flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; border-radius: 50%; background: var(--azul); color: #fff;
    font-size: 13px; letter-spacing: 0;
  }
  .box.pratica { background: var(--ciano-claro); border-left-color: var(--ciano); }
  .box.pratica .t::before { content: '✓'; background: var(--ciano); }
  .box.analogia { background: #F3F5F9; border-left-color: var(--marinho); }
  .box.analogia .t::before { content: '≈'; background: var(--marinho); }

  /* Conceito-chave */
  .conceito {
    background: var(--azul-claro); border-left: 6px solid var(--azul); border-radius: 6px;
    padding: 16px 24px; margin-top: 8px;
  }
  .conceito .t { font-size: 14px; font-weight: 800; color: var(--azul-txt); letter-spacing: 0.1em; }
  .conceito .q { font-size: 24px; font-weight: 700; color: var(--marinho); line-height: 1.3; margin: 6px 0; }
  .conceito p { font-size: 17px; color: var(--texto); margin: 4px 0 0; }

  /* Faixa de destaque escura */
  .callout {
    background: var(--marinho); color: #fff; border-radius: 8px; padding: 12px 22px;
    margin-top: 10px; font-size: 18px; border-left: 6px solid var(--ciano);
  }
  .callout strong { color: var(--ciano); }

  /* Sequência numerada (layout "Processo / passo a passo") */
  .steps { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; margin: 10px 0; }
  .steps .s { flex: 1; text-align: center; font-size: 16.5px; color: var(--cinza); line-height: 1.35; }
  .steps .s b { display: block; color: var(--marinho); font-size: 18px; margin: 6px 0 2px; }
  .steps .s i {
    display: inline-flex; align-items: center; justify-content: center; font-style: normal;
    width: 34px; height: 34px; border-radius: 50%; color: #fff; background: var(--azul);
    font-weight: 700; font-size: 15px;
  }
  .steps .s:nth-of-type(2n) i { background: var(--ciano); }
  .steps .s.dark i { background: var(--marinho); }
  .steps .chev { color: #8FB8EE; font-size: 30px; font-weight: 800; padding-top: 2px; }

  /* Fluxo em caixas (layout "Esquema / diagrama") */
  .flow { display: flex; align-items: center; gap: 8px; margin: 10px 0; }
  .flow .b {
    flex: 1; background: var(--azul-claro); border: 1.5px solid #9CC2F5; color: var(--marinho);
    border-radius: 6px; padding: 10px 8px; font-weight: 700; text-align: center; font-size: 17px; line-height: 1.3;
  }
  .flow .b small { display: block; font-weight: 400; color: var(--cinza); font-size: 14px; }
  .flow .b.alt { background: var(--ciano-claro); border-color: #8FDDF3; }
  .flow .b.dark { background: var(--marinho); color: #fff; border-color: var(--marinho); }
  .flow .b.dark small { color: #BFD3EE; }
  .flow.v { flex-direction: column; align-items: stretch; }
  .cards.c1, .compare.c1 { grid-template-columns: 1fr; }
  .flow .a { color: #6FA3EA; font-size: 22px; font-weight: 800; }

  /* Comparação A × B */
  .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 6px; }
  .compare > div { border: 1px solid var(--borda); border-radius: 6px; overflow: hidden; font-size: 19px; }
  .compare .h { background: var(--marinho); color: #fff; font-weight: 700; text-align: center; padding: 7px; font-size: 16px; letter-spacing: 0.04em; }
  .compare > div:nth-child(2) .h { background: var(--azul); }
  .compare ul { margin: 8px 14px 10px 6px; }
  .compare pre { margin: 0; border: none; border-radius: 0; font-size: 13.5px; }

  .legenda { font-size: 13px; color: var(--marinho); margin-top: 4px; }
  .fonte { font-size: 12.5px; color: var(--cinza); font-style: italic; }
  .muted { color: var(--cinza); }
  .small { font-size: 17px; }

  /* Capa */
  section.capa { padding: 0 260px 0 58px; justify-content: center !important; }
  section.capa h1 { font-size: 44px; line-height: 1.12; margin-top: 70px; max-width: 760px; }
  section.capa h2 { font-size: 21px; margin: 12px 0 22px; max-width: 760px; }
  section.capa .linha { width: 88px; height: 5px; background: var(--ciano); margin-bottom: 22px; }
  section.capa p { font-size: 18px; margin: 4px 0; color: var(--cinza); }
  section.capa p strong { color: var(--texto); }

  /* Divisória de parte (layout "Unidade") */
  section.secao { padding: 60px 220px 60px 67px; justify-content: flex-start; }
  section.secao h6 { font-size: 26px; letter-spacing: 0.08em; margin-bottom: 18px; }
  section.secao h1 { font-size: 42px; max-width: 800px; }
  section.secao h2 { font-size: 20px; max-width: 700px; margin-top: 18px; }
  section.secao .agenda { margin-top: 30px; font-size: 19px; color: var(--texto); }

  /* Encerramento */
  section.fim { padding: 0 220px 0 69px; justify-content: center !important; }
  section.fim h1 { font-size: 56px; }
  section.fim p { font-size: 20px; color: var(--cinza); }

  /* Referências */
  section.refs p { font-size: 16px; border-bottom: 1px solid var(--borda); padding: 7px 0; margin: 0; }
---

<!-- _class: capa -->
<!-- _backgroundImage: url('assets/bg-capa.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Do HTTP ao primeiro servidor com Node.js e Express

## Aula 1 · Unidade I · Introdução ao ecossistema e à arquitetura server-side

<div class="linha"></div>

**Professor: Prof. Esp. Allan da Silva**

Desenvolvimento Back-End  •  Aula 1 de 4  •  50 minutos

<!--
🎤 **Fala do Professor:**

"Boa noite, pessoal! Hoje começamos a nossa jornada pelo back-end, a parte do sistema que ninguém vê, mas da qual todo mundo depende. Nestas quatro aulas vamos construir, passo a passo, a API acadêmica do e-book, com cursos, alunos, disciplinas e matrículas, só que usando Node.js e Express. O e-book traz os exemplos em Laravel, e isso é ótimo: vocês vão perceber que os conceitos são os mesmos e só muda a sintaxe. Hoje é a base de tudo. Vamos entender quem pede, quem responde, em que língua essa conversa acontece e, no final, vamos subir o nosso primeiro servidor de verdade."
-->

---

###### Planejamento

# Roteiro da aula · 50 minutos

## Uma aula em quatro blocos, do conceito ao código rodando

<div class="steps">
  <div class="s"><i>1</i><b>0–5 min</b>Abertura e o problema do "Entrar"</div>
  <div class="chev">›</div>
  <div class="s"><i>2</i><b>5–20 min</b>Back-end, cliente-servidor e HTTP</div>
  <div class="chev">›</div>
  <div class="s"><i>3</i><b>20–42 min</b>Node.js, event loop e Express na prática</div>
  <div class="chev">›</div>
  <div class="s dark"><i>4</i><b>42–50 min</b>npm, <code>.env</code>, síntese e desafio</div>
</div>

<div class="cols">
<div class="box pratica"><div class="t">Para acompanhar</div>Node.js 20 ou superior, um editor de código e um terminal. Teste com <code>node -v</code> e <code>npm -v</code>.</div>
<div class="box"><div class="t">Projeto da disciplina</div>Todos os exemplos fazem parte da <strong>API acadêmica</strong> em Node + Express, que cresce a cada aula.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este é o nosso roteiro. Nos primeiros minutos vamos entender o problema. Depois, uns quinze minutos de fundamentos: o que é back-end, o modelo cliente-servidor e o protocolo HTTP. O bloco mais longo é prático: vamos conhecer o Node.js, entender o event loop e escrever o mesmo servidor duas vezes, primeiro com o módulo nativo e depois com o Express. Fechamos com o ecossistema, ou seja, npm e variáveis de ambiente, e um desafio. Se vocês tiverem o Node instalado, acompanhem digitando os exemplos; aprender back-end é muito mais fácil quando o servidor responde na sua máquina."
-->

---

###### Objetivos

# Metas de aprendizagem

## Ao final da aula, você deve ser capaz de:

<div class="cards">
  <div class="card"><span class="n">1</span><b>Explicar</b>o papel do back-end e o modelo cliente-servidor, sem estado</div>
  <div class="card"><span class="n">2</span><b>Descrever</b>o caminho de uma requisição, do DNS até o banco de dados</div>
  <div class="card"><span class="n">3</span><b>Identificar</b>método, cabeçalhos, corpo e código de status de uma mensagem HTTP</div>
  <div class="card"><span class="n">4</span><b>Diferenciar</b>o modelo do Node.js (event loop) do modelo de um processo por requisição</div>
  <div class="card"><span class="n">5</span><b>Construir</b>um servidor com <code>node:http</code> e o mesmo servidor com Express</div>
  <div class="card"><span class="n">6</span><b>Configurar</b>dependências com npm e segredos com variáveis de ambiente</div>
</div>

<!--
🎤 **Fala do Professor:**

"Estes são os seis objetivos de hoje, e eles seguem uma ordem: do mais geral para o mais prático. Reparem nos verbos: explicar, descrever, identificar, diferenciar, construir e configurar. No final da aula, voltem a este slide e tentem explicar cada card com as suas palavras, como se estivessem contando para um colega que faltou. Se travarem em algum, é sinal de que vale reler aquela seção do e-book, que neste caso é a Unidade I, seções 1.1 a 1.4."
-->

---

###### Contextualização

# O que acontece quando você toca em "Entrar"?

## Em menos de um segundo, uma conversa inteira acontece longe da tela

<div class="cols-60">
<div>

- Seus dados **viajam pela internet** até outro estado ou país
- Um programa **verifica quem você é**
- Ele **consulta um banco de dados**
- E **devolve uma resposta** ao aplicativo

Esse programa **sem tela nem botões** é o **back-end**.

</div>
<div class="box analogia"><div class="t">Analogia · o restaurante</div>
O <strong>salão</strong> (mesas, cardápio, garçons) é o <strong>front-end</strong>. A <strong>cozinha</strong> é o <strong>back-end</strong>: ingredientes são os <strong>dados</strong>, receitas são as <strong>regras de negócio</strong> e cozinheiros são o <strong>código</strong>.
</div>
</div>

<div class="callout">O cliente <strong>não entra na cozinha</strong>, mas a qualidade do prato depende <strong>inteiramente dela</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Pensem na última vez que vocês abriram o aplicativo do banco ou o portal da faculdade e tocaram em Entrar. Em menos de um segundo, os dados viajaram até um computador que pode estar em outro país; lá, um programa verificou quem vocês são, consultou um banco de dados e devolveu uma resposta. Esse programa invisível é o back-end. A analogia que vai nos acompanhar nas quatro aulas é a do restaurante: o salão é o front-end, a cozinha é o back-end. Vocês nunca entram na cozinha, mas se o prato chega frio ou errado, a culpa quase sempre é dela. Pergunta para a turma: qual foi o último sistema que travou com vocês? Onde vocês acham que estava o problema, no salão ou na cozinha?"
-->

---

###### Comparação

# Front-end × Back-end

## Duas partes, responsabilidades diferentes

<div class="compare">
<div><div class="h">FRONT-END · O SALÃO</div>

- O que o usuário **vê e toca**
- Telas, botões, formulários, animações
- Roda no **navegador** ou no **app**
- Pode ser **inspecionado e alterado** pelo usuário

</div>
<div><div class="h">BACK-END · A COZINHA</div>

- Roda no **servidor** (*server-side*)
- Recebe pedidos e aplica **regras de negócio**
- **Persiste** e recupera dados, integra sistemas
- **Garante a segurança** da aplicação

</div>
</div>

<div class="conceito"><div class="t">CONCEITO-CHAVE</div><div class="q">"Back-end é o conjunto de programas executados no servidor que recebem requisições, aplicam regras de negócio, persistem dados e garantem a segurança."</div></div>

<!--
🎤 **Fala do Professor:**

"Toda aplicação web moderna tem duas grandes partes. O front-end é o que o usuário vê e com o que interage. O back-end roda no servidor e cuida de receber pedidos, aplicar as regras, acessar os dados e devolver respostas. Reparem no último item do front-end: o usuário pode inspecionar e alterar tudo o que roda no navegador. Por isso, qualquer regra importante, como 'só professor lança nota', precisa estar no back-end. Leiam o conceito-chave em voz alta: requisições, regras, persistência e segurança. Isso é praticamente o sumário das nossas quatro aulas."
-->

---

###### Conteúdo

# O modelo cliente-servidor

## Quem pede inicia a conversa; quem atende fica de plantão

<div class="cols-60">
<div>

- O **cliente inicia** a comunicação, pedindo algo
- O **servidor aguarda** pedidos e os atende
- Um mesmo back-end atende **vários clientes**: portal, app, sistema parceiro
- O HTTP é **sem estado** (*stateless*): cada requisição é **independente**

<div class="box"><div class="t">Consequência</div>Sem estado facilita a <strong>escala</strong> (qualquer servidor atende qualquer pedido), mas exige <strong>cookies, sessões ou tokens</strong> para reconhecer o usuário.</div>

</div>
<div class="box analogia"><div class="t">Analogia · o caixa do supermercado</div>
O caixa <strong>não lembra</strong> de você da última compra. A cada atendimento, você apresenta o <strong>cartão</strong> de novo.<br><br>
Na API, o "cartão" é o <strong>token</strong> enviado em <strong>toda</strong> requisição.
</div>
</div>

<!--
🎤 **Fala do Professor:**

"Essa divisão de papéis tem nome: modelo cliente-servidor. O cliente sempre inicia a conversa e o servidor fica de plantão. A mesma API acadêmica pode atender, ao mesmo tempo, o portal no navegador, o aplicativo no celular do professor e até a plataforma de pagamentos. Guardem a palavra stateless: por padrão o servidor não lembra de nada entre uma requisição e outra, como o caixa do supermercado, que pede o cartão a cada compra. Isso é ótimo para escalar, porque qualquer servidor de um grupo pode atender qualquer pedido. Mas é exatamente por isso que vamos precisar de tokens para saber quem está logado, assunto da nossa Aula 4."
-->

---

###### Figura

# O caminho de uma requisição

## Do toque no app até o banco de dados, e de volta

<div class="flow">
  <div class="b">📱 Cliente<small>app do aluno</small></div><div class="a">›</div>
  <div class="b alt">📒 DNS<small>nome ➜ IP</small></div><div class="a">›</div>
  <div class="b">🌐 Servidor web<small>Nginx · HTTPS</small></div><div class="a">›</div>
  <div class="b alt">⚙️ Aplicação<small>Node.js + Express</small></div><div class="a">›</div>
  <div class="b dark">🗄️ Banco<small>PostgreSQL</small></div>
</div>
<p class="legenda">Figura 1 – Fluxo de <code>GET https://api.faculdade.edu.br/api/cursos</code>. Fonte: elaboração própria, com base no e-book (seção 1.1).</p>

<div class="cols">
<div>

1. O cliente **descobre o IP** consultando o **DNS**
2. Abre uma **conexão segura** e envia a requisição
3. A aplicação **executa o código** e consulta o **banco**
4. A resposta **faz o caminho de volta**

</div>
<div class="box analogia"><div class="t">Analogia · os Correios</div>
O <strong>DNS</strong> é a agenda que transforma o nome no endereço. O <strong>servidor web</strong> é a portaria que recebe a carta e a entrega ao <strong>setor certo</strong> (a aplicação).
</div>
</div>

<!--
🎤 **Fala do Professor:**

"Vamos acompanhar o aplicativo do aluno pedindo a lista de cursos. Antes de falar com o back-end, o celular precisa descobrir o endereço IP do servidor: ele consulta o DNS, a agenda de contatos da internet. Depois abre uma conexão segura e envia a requisição. Em produção, quem recebe primeiro costuma ser um servidor web como o Nginx, que repassa o pedido para o nosso processo Node.js. A aplicação executa o código, consulta o banco e a resposta volta pelo mesmo caminho. Quando um sistema ficar lento no estágio de vocês, lembrem deste slide: o profissional experiente investiga etapa por etapa, rede, aplicação e banco, em vez de sair chutando."
-->

---

###### Comparação

# Servidor web × servidor de aplicação

## Em produção, a "cozinha" tem uma recepção na frente

| | Servidor web (proxy reverso) | Servidor de aplicação |
|---|---|---|
| **Exemplos** | Nginx, Apache, Caddy | processo **Node.js** com Express · PHP-FPM |
| **Especialidade** | tarefas de **rede** | executar a **lógica** do programa |
| **Faz** | aceita conexões, negocia **TLS**, comprime, entrega **arquivos estáticos** | roda o código, aplica regras, **consulta o banco** |
| **Escala** | de forma **independente** | de forma **independente** (várias instâncias) |

<div class="cols">
<div class="box analogia"><div class="t">Analogia</div>A <strong>recepcionista</strong> organiza a fila e encaminha; o <strong>cozinheiro</strong> prepara o prato. Dá para contratar mais de um sem contratar mais do outro.</div>
<div class="box"><div class="t">No Node.js</div>O próprio processo Node <strong>escuta uma porta</strong> (ex.: 3000). Em produção, o Nginx fica na frente, na porta <strong>443</strong>.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Uma confusão comum é achar que o back-end é um bloco único. Em produção, normalmente há um servidor web na entrada, como o Nginx, especialista em rede: aceitar milhares de conexões, negociar o HTTPS, comprimir respostas e entregar imagens. Atrás dele fica o servidor de aplicação, que no nosso caso é o próprio processo Node.js rodando o Express. No mundo PHP, esse papel é do PHP-FPM, como mostra o e-book. Uma diferença interessante: o Node já escuta uma porta sozinho, então em desenvolvimento nem precisamos do Nginx. Em produção, colocamos o Nginx na frente, cuidando do HTTPS na porta 443 e repassando para a porta 3000."
-->

---

<!-- _class: secao -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

###### Parte 1

# A língua da conversa: HTTP

## Mensagens de texto com estrutura bem definida: linha inicial, cabeçalhos, linha em branco e corpo.

<div class="agenda">Anatomia da mensagem · Métodos · Cabeçalhos · Códigos de status · HTTPS</div>

<!--
🎤 **Fala do Professor:**

"Já sabemos quem conversa com quem. Agora vamos aprender a língua dessa conversa: o HTTP. A boa notícia é que o HTTP é texto, e dá para ler cada mensagem com os próprios olhos. Vamos abrir essa caixa."
-->

---

###### Conteúdo

# A anatomia de uma mensagem HTTP

## O que realmente trafega entre o cliente e o servidor

<div class="cols-60">
<div>

```http
GET /api/cursos HTTP/1.1          # método, caminho, versão
Host: localhost:3000              # qual servidor
Accept: application/json          # formato aceito
                                  # linha em branco: fim dos cabeçalhos
HTTP/1.1 200 OK                   # linha de status
Content-Type: application/json    # formato do corpo
X-Request-Id: 7f3c2a90-...        # cabeçalho da nossa API
                                  # linha em branco
[{"id":1,"nome":"Engenharia..."}] # corpo em JSON
```

</div>
<div>

- **Requisição:** linha inicial, **cabeçalhos**, linha em branco e **corpo** opcional
- **Resposta:** começa pela **linha de status**
- **URL:** esquema, **host**, porta, **caminho**, *query string*

<div class="box pratica"><div class="t">Na prática</div>Rode <code>curl -v localhost:3000/api/cursos</code>: linhas com <code>&gt;</code> foram <strong>enviadas</strong>; com <code>&lt;</code>, <strong>recebidas</strong>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"O HTTP, criado por Tim Berners-Lee no CERN, define como clientes e servidores trocam mensagens, e essas mensagens são texto. A requisição começa com uma linha com método, caminho e versão, segue com os cabeçalhos, uma linha em branco e, opcionalmente, um corpo. A resposta começa com a linha de status, como 200 OK. Lembrem das partes da URL: o host identifica o servidor, o caminho identifica o recurso e a query string carrega filtros, como ?curso=3. Minha dica prática: usem o curl com -v. Ele mostra tudo o que vai e volta, sem nenhuma interface gráfica escondendo detalhes. Daqui a pouco vamos fazer isso com o nosso próprio servidor."
-->

---

###### Conteúdo

# Métodos, cabeçalhos e códigos de status

## O método diz a intenção; o status diz o resultado

<div class="cols">
<div>

| Método | Intenção | Seguro? | Idempotente? |
|---|---|---|---|
| `GET` | consultar | sim | sim |
| `POST` | criar | não | **não** |
| `PUT` | substituir | não | sim |
| `PATCH` | alterar parte | não | não* |
| `DELETE` | remover | não | sim |

</div>
<div>

| Classe | Significado | Exemplo |
|---|---|---|
| **2xx** | sucesso | `200 OK`, `201 Created` |
| **3xx** | redirecionamento | HTTP ➜ HTTPS |
| **4xx** | erro do **cliente** | `404 Not Found` |
| **5xx** | erro do **servidor** | `500 Internal Error` |

</div>
</div>

<div class="cols">
<div class="box"><div class="t">Cabeçalhos essenciais</div><code>Content-Type</code> (formato do corpo) · <code>Accept</code> · <code>Authorization</code> (credenciais) · <code>Cache-Control</code></div>
<div class="box analogia"><div class="t">Analogia · o garçom</div>"Saiu o prato" (<strong>200</strong>) · "Esse prato não existe no cardápio" (<strong>404</strong>) · "A cozinha pegou fogo" (<strong>500</strong>).</div>
</div>

<!--
🎤 **Fala do Professor:**

"O método expressa a intenção: GET consulta, POST cria, PUT substitui, PATCH altera uma parte e DELETE remove. Dois conceitos que caem em entrevista de emprego: seguro é o método que não altera o servidor, como o GET; idempotente é aquele em que repetir dá o mesmo efeito. Apagar o aluno 42 uma vez ou dez vezes dá no mesmo. Já repetir um POST pode criar duas matrículas. Na direita, as classes de status: 4xx significa que quem pediu errou; 5xx significa que nós, do back-end, erramos. O código de status é como o garçom avisando o que aconteceu com o pedido, e é por ele que o aplicativo decide o que mostrar ao usuário."
-->

---

###### Box didático

# HTTPS: o envelope lacrado

## HTTPS = HTTP sobre TLS

<div class="cards">
  <div class="card"><span class="ico">🙈</span><b>Confidencialidade</b>ninguém no caminho <strong>consegue ler</strong> senhas, tokens e notas</div>
  <div class="card"><span class="ico">🧩</span><b>Integridade</b>ninguém <strong>altera</strong> a mensagem sem ser percebido</div>
  <div class="card"><span class="ico">🪪</span><b>Autenticidade</b>o <strong>certificado digital</strong> prova que o servidor é o verdadeiro</div>
</div>

<div class="cols">
<div class="box"><div class="t">Atenção</div>No HTTP puro, o roteador do Wi-Fi da praça de alimentação <strong>consegue ler</strong> o que você envia. Em produção: redirecione tudo para HTTPS e ative o <strong>HSTS</strong>.</div>
<div class="box analogia"><div class="t">Analogia</div>HTTP é um <strong>cartão-postal</strong>: qualquer carteiro lê. HTTPS é um <strong>envelope lacrado</strong> com remetente comprovado.</div>
</div>

<!--
🎤 **Fala do Professor:**

"No HTTP puro, as mensagens trafegam em texto aberto. Qualquer equipamento no caminho poderia ler senhas e dados pessoais. O HTTPS resolve isso executando o HTTP sobre uma camada chamada TLS, que garante três propriedades: confidencialidade, integridade e autenticidade, esta última graças ao certificado digital. Hoje existem certificados gratuitos, como os do Let's Encrypt, então não há justificativa para publicar uma API sem HTTPS. Um detalhe importante: o Express em si não precisa saber de TLS; normalmente o Nginx ou a plataforma de hospedagem cuidam do certificado e repassam a requisição para o Node."
-->

---

<!-- _class: secao -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

###### Parte 2

# Node.js na prática

## JavaScript fora do navegador: um runtime, um processo de longa duração e um laço de eventos.

<div class="agenda">Runtime e event loop · Servidor com <code>node:http</code> · O mesmo servidor com Express</div>

<!--
🎤 **Fala do Professor:**

"Chegou a hora de colocar a mão no código. Vamos entender o que é o Node.js, por que ele atende muitas requisições com um único processo e, depois, escrever o nosso primeiro servidor."
-->

---

###### Conteúdo

# Linguagem, runtime, biblioteca e framework

## Quatro termos que todo mundo confunde

<div class="cards c4">
  <div class="card"><span class="ico">✍️</span><b>Linguagem</b>a <strong>sintaxe</strong>: JavaScript, PHP</div>
  <div class="card"><span class="ico">⚙️</span><b>Runtime</b>quem <strong>executa</strong>: Node.js (motor V8)</div>
  <div class="card"><span class="ico">📚</span><b>Biblioteca</b><strong>você chama</strong>: <code>bcrypt</code>, <code>pg</code></div>
  <div class="card"><span class="ico">🏗️</span><b>Framework</b><strong>chama você</strong>: Express, NestJS</div>
</div>

| Modelo de execução | PHP com PHP-FPM | Node.js |
|---|---|---|
| **Ciclo de vida** | um processo por requisição, **memória liberada** ao final | **um processo de longa duração** atende muitas |
| **Concorrência** | **pool** de processos em paralelo | **event loop** com E/S assíncrona |
| **Erro comum** | abrir conexões caras a cada requisição | **bloquear o event loop** com cálculo pesado |

<div class="callout">"Você chama a biblioteca, mas <strong>o framework chama você</strong>": isso é <strong>inversão de controle</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Quatro termos que muita gente mistura. A linguagem é a sintaxe; o runtime é o programa que executa o código, e o Node.js é exatamente isso: um runtime que roda JavaScript fora do navegador, usando o motor V8 do Chrome. Biblioteca é um código que você chama quando precisa; framework é quem define a estrutura e chama o seu código. A tabela vem do Quadro 7 do e-book: no PHP-FPM, cada requisição começa do zero; no Node, um único processo fica vivo atendendo muitas requisições. Nenhum modelo é melhor em absoluto; cada um exige cuidados diferentes. E guardem a frase do callout: ela volta com tudo na próxima aula."
-->

---

###### Conteúdo

# O event loop: um garçom que não fica parado

## Como um único processo atende centenas de pedidos ao mesmo tempo

<div class="cols-60">
<div>

- Operações de **E/S** (banco, rede, disco) são **delegadas**
- Enquanto esperam, o processo **atende outros pedidos**
- Quando a E/S termina, o **callback** volta para a fila
- Ideal para APIs, chats e notificações: **muita espera, pouco cálculo**

<div class="flow">
  <div class="b">Pedido chega</div><div class="a">›</div>
  <div class="b alt">Delega E/S<small>banco, rede</small></div><div class="a">›</div>
  <div class="b">Atende o próximo</div><div class="a">›</div>
  <div class="b dark">Responde<small>quando a E/S volta</small></div>
</div>

</div>
<div class="box analogia"><div class="t">Analogia · o garçom eficiente</div>
Ele anota o pedido da mesa 1, <strong>entrega à cozinha</strong> e vai atender a mesa 2. <strong>Não fica parado</strong> esperando o prato ficar pronto.<br><br>
Mas se ele resolver <strong>descascar batatas</strong> no salão (cálculo pesado), <strong>todas as mesas esperam</strong>.
</div>
</div>

<!--
🎤 **Fala do Professor:**

"Como um único processo dá conta de tantas requisições? Pelo event loop, o laço de eventos. Quando o código precisa esperar o banco ou outra API, essa espera é delegada, e o processo segue atendendo outros pedidos. Quando o resultado chega, o callback entra numa fila e é executado. A analogia é o garçom eficiente: ele anota o pedido, entrega à cozinha e vai atender a próxima mesa, sem ficar parado olhando o fogão. Agora, se ele resolver descascar batatas no meio do salão, todas as mesas ficam esperando. É isso que acontece quando colocamos um cálculo pesado e síncrono dentro de uma rota. Vamos ver isso no código."
-->

---

<!-- _class: dense -->

###### Código

# O primeiro servidor, só com o Node.js

## Módulo nativo `node:http`, sem nenhuma dependência

```js
// exemplos/01-http-nativo.js — execute com: node exemplos/01-http-nativo.js
const http = require('node:http');

const cursos = [{ id: 1, nome: 'Engenharia de Software' },   // dados fixos,
                { id: 2, nome: 'Ciência de Dados' }];         // por enquanto

const servidor = http.createServer((req, res) => {       // chamada a CADA requisição
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'GET' && req.url === '/api/cursos') {  // 1. lê método e caminho (roteamento)
    res.statusCode = 200;                                   // 2. define o status
    return res.end(JSON.stringify(cursos));                 // 3. representação em JSON
  }

  res.statusCode = 404;                                     // rota inexistente
  res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
});

servidor.listen(8000, () => console.log('Servidor em http://localhost:8000'));
```

<div class="box pratica"><div class="t">O que demonstra</div>Ler método e caminho ➜ <strong>rotear</strong> ➜ <strong>representar</strong> em JSON ➜ definir o <strong>status</strong>: a base de todo back-end.</div>

<!--
🎤 **Fala do Professor:**

"Este é o menor back-end possível em Node.js, o mesmo do Código 8 do e-book. O createServer recebe uma função que é chamada a cada requisição, com dois objetos: req, a requisição, e res, a resposta. Acompanhem os números nos comentários: o código lê o método e o caminho, decide o que fazer, o que chamamos de roteamento, define o status e devolve uma representação em JSON. Se a rota não existir, devolve 404. Por menor que seja, esse código tem os elementos de qualquer back-end do mundo. Testei este exemplo: rodem com node e acessem com curl ou com o navegador. Agora imaginem cinquenta rotas com ifs desse jeito. É aí que entra o Express."
-->

---

<!-- _class: dense -->

###### Código

# O mesmo servidor com Express

## O framework assume o trabalho repetitivo: roteamento, parâmetros e JSON

<div class="cols-60">
<div>

```js
// exemplos/02-express-minimo.js
const express = require('express');
const app = express();

const cursos = [
  { id: 1, nome: 'Engenharia de Software' },
  { id: 2, nome: 'Ciência de Dados' },
];

app.get('/api/cursos', (req, res) => {
  res.json(cursos);        // 200 + Content-Type automáticos
});

app.get('/api/cursos/:id', (req, res) => {
  const curso = cursos.find(c => c.id === Number(req.params.id));
  if (!curso) {
    return res.status(404).json({ erro: 'Curso não encontrado' });
  }
  res.json(curso);
});

app.listen(8000, () => console.log('Express em http://localhost:8000'));
```

</div>
<div>

### O que o Express faz por você

- **Roteamento** por método + caminho: `app.get`, `app.post`...
- **Parâmetros** de rota prontos: `req.params.id`
- `res.json()` serializa e define o **Content-Type**
- `res.status(404)` encadeado e legível
- **404 padrão** para rotas não declaradas

<div class="box"><div class="t">Atenção</div><code>req.params.id</code> chega como <strong>texto</strong> (<code>"2"</code>): converta antes de comparar com números.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Agora o mesmo servidor com Express, o framework web mais tradicional do Node. Reparem como o código fica declarativo: app.get com o caminho e a função. O Express cuida do roteamento, transforma o :id da URL em req.params.id, e o res.json serializa o objeto e já define o Content-Type. Acrescentamos uma segunda rota, a de um curso específico, que devolve 404 quando o curso não existe. Um detalhe que pega todo iniciante: tudo o que vem da URL chega como texto. Por isso convertemos com Number antes de comparar. Na próxima aula vamos abrir o Express por dentro e entender que tudo isso é construído com middlewares."
-->

---

<!-- _class: dense -->

###### Box didático

# Não bloqueie o event loop

## Um laço síncrono numa rota congela o servidor inteiro

<div class="cols-60">
<div>

```js
// exemplos/03-event-loop.js
app.get('/rapida', (req, res) => res.json({ ok: true }));

app.get('/lenta', (req, res) => {        // ERRADO: bloqueia
  const fim = Date.now() + 5000;
  while (Date.now() < fim) {}            // ninguém é atendido
  res.json({ fim: true });
});

app.get('/espera', async (req, res) => { // CERTO: não bloqueia
  await new Promise(r => setTimeout(r, 5000));
  res.json({ fim: true });
});
```

</div>
<div>

<div class="steps">
  <div class="s"><i>1</i><b>Abra /lenta</b>numa aba</div>
  <div class="s"><i>2</i><b>Abra /rapida</b>em outra</div>
  <div class="s dark"><i>3</i><b>Compare</b>com /espera</div>
</div>

<div class="box"><div class="t">Atenção</div>Com <code>/lenta</code>, até a rota rápida espera 5 s. Com <code>/espera</code>, ela responde na hora.</div>

<div class="box pratica"><div class="t">Na prática</div>Cálculos pesados (relatórios, imagens) vão para <strong>filas</strong> ou <em>worker threads</em>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este experimento vale mais do que qualquer explicação. Rodem o arquivo, abram a rota /lenta numa aba e, logo em seguida, a rota /rapida em outra. A rota rápida vai demorar cinco segundos! Isso porque o while síncrono ocupa o único processo, e ninguém mais é atendido. É o garçom descascando batatas no salão. Agora façam o mesmo com /espera: ela também demora cinco segundos, mas a rota rápida responde na hora, porque a espera foi delegada. Na vida real, operações de banco e de rede já são assíncronas. O cuidado é com cálculo pesado: relatórios enormes, processamento de imagem. Esses vão para filas ou worker threads."
-->

---

<!-- _class: secao -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

###### Parte 3

# O ecossistema: pacotes e configuração

## Um projeto profissional declara dependências, trava versões e mantém segredos fora do código.

<div class="agenda">npm e <code>package.json</code> · Versionamento semântico · Variáveis de ambiente</div>

<!--
🎤 **Fala do Professor:**

"Nosso servidor funciona. Agora vamos organizá-lo como um projeto profissional: dependências declaradas, versões travadas e configurações fora do código."
-->

---

###### Conteúdo

# npm, `package.json` e versionamento semântico

## Manifesto, trava de versões e scripts do projeto

<div class="cols">
<div>

```json
{
  "name": "api-academica-node",
  "version": "1.0.0",
  "type": "commonjs",
  "scripts": {
    "start": "node --env-file=.env server.js",
    "dev": "node --env-file=.env --watch server.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

</div>
<div>

<div class="card"><b>SemVer: MAJOR.MINOR.PATCH</b><strong>MAJOR</strong> quebra compatibilidade · <strong>MINOR</strong> novidade compatível · <strong>PATCH</strong> correção.<br><code>^5.1.0</code> aceita qualquer <strong>5.x ≥ 5.1.0</strong>, mas <strong>nunca a 6.0</strong>.</div>

<div class="box pratica"><div class="t">Boa prática</div>Versione o <code>package-lock.json</code> e use <code>npm ci</code> no servidor. A pasta <code>node_modules/</code> <strong>nunca</strong> vai para o Git.</div>

<div class="box analogia"><div class="t">Analogia</div>O lock file é a receita com a <strong>marca exata</strong> de cada ingrediente: o prato sai igual em qualquer filial.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Dependência é qualquer pacote externo de que o projeto precisa, e o npm é quem baixa, instala e registra essas dependências. Este é o package.json da nossa API, igual ao Código 9 do e-book. Repare nos scripts: npm run dev roda o servidor com --watch, que reinicia sozinho a cada alteração, e --env-file, que carrega o arquivo .env, recurso nativo do Node a partir da versão 20.6. O acento circunflexo do ^5.1.0 significa: aceite melhorias e correções, mas nunca uma versão que possa quebrar o meu código. Por isso o package-lock.json vai para o Git: ele garante que produção rode exatamente as versões testadas. Já a node_modules fica de fora, porque é reconstruída com npm ci."
-->

---

<!-- _class: dense -->

###### Conteúdo

# Variáveis de ambiente e segredos

## Configuração é o que muda entre ambientes; código é o que não muda

<div class="cols">
<div>

```bash
# .env.example — vai para o Git, com valores FICTÍCIOS
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://usuario:senha@localhost:5432/academica
JWT_SECRET=troque-por-um-valor-longo-e-aleatorio
```

```js
// src/config.js — o ÚNICO arquivo que lê process.env
const obrigatorias = ['DATABASE_URL', 'JWT_SECRET'];
for (const nome of obrigatorias) {
  if (!process.env[nome]) {
    throw new Error(`Variável de ambiente ausente: ${nome}`);
  }
}
module.exports = Object.freeze({
  porta: Number(process.env.PORT ?? 3000),
  databaseUrl: process.env.DATABASE_URL,
  jwt: { segredo: process.env.JWT_SECRET },
});
```

</div>
<div>

<div class="box"><div class="t">Caso real</div>Um estagiário escreve a senha do banco no código e faz <code>git push</code> para um repositório <strong>público</strong>. Dias depois, o banco é acessado por um IP desconhecido: <strong>robôs varrem o GitHub</strong> atrás de credenciais.</div>

<div class="box pratica"><div class="t">Como evitar</div>
<code>.env</code> no <code>.gitignore</code> · valores lidos <strong>só</strong> em <code>config.js</code> · a aplicação <strong>falha cedo</strong> se faltar variável · produção usa um <strong>cofre de segredos</strong>.</div>

<div class="callout">Vazou um segredo? Apagar o commit <strong>não resolve</strong>: <strong>revogue e troque</strong> na hora.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Uma aplicação real roda em vários ambientes: a máquina de vocês, o servidor de testes e a produção. Muda o endereço do banco, as credenciais e o nível de detalhe dos erros, mas o código precisa ser o mesmo. A solução, recomendada pela metodologia Twelve-Factor App, é separar configuração de código com variáveis de ambiente. No Node, elas ficam em process.env; o arquivo .env é carregado pelo --env-file. Reparem em duas boas práticas no config.js: ele é o único lugar que lê process.env, e ele falha logo na inicialização se faltar algo importante, em vez de quebrar no meio de uma requisição. E atenção ao caso real: apagar o commit não resolve. A credencial precisa ser revogada e trocada imediatamente."
-->

---

###### Na prática

# Mão na massa: sua primeira rota em 5 passos

## Do diretório vazio ao `curl` respondendo

<div class="steps">
  <div class="s"><i>1</i><b>Criar</b><code>npm init -y</code></div>
  <div class="chev">›</div>
  <div class="s"><i>2</i><b>Instalar</b><code>npm i express</code></div>
  <div class="chev">›</div>
  <div class="s"><i>3</i><b>Escrever</b><code>server.js</code></div>
  <div class="chev">›</div>
  <div class="s"><i>4</i><b>Rodar</b><code>npm run dev</code></div>
  <div class="chev">›</div>
  <div class="s dark"><i>5</i><b>Testar</b><code>curl -v</code></div>
</div>

<div class="cols">
<div>

```js
// server.js
const express = require('express');
const app = express();

app.get('/api/saude', (req, res) => {
  res.json({ status: 'ok', ambiente: process.env.NODE_ENV });
});

app.listen(process.env.PORT ?? 3000);
```

</div>
<div>

```bash
$ curl -i localhost:3000/api/saude
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"status":"ok","ambiente":"development"}
```

<div class="box pratica"><div class="t">Rota de saúde</div>Orquestradores e balanceadores consultam <code>/api/saude</code> para saber se a aplicação está no ar.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Agora é com vocês. Em cinco passos: criem uma pasta, rodem npm init, instalem o Express, escrevam o server.js com a rota de saúde e subam com npm run dev. Depois testem com curl -i e vejam a linha de status, os cabeçalhos e o corpo, exatamente como estudamos na anatomia do HTTP. A rota de saúde parece boba, mas é usada de verdade: plataformas de nuvem e balanceadores consultam essa rota periodicamente para saber se a aplicação está viva. Se ela parar de responder, a instância é substituída automaticamente. Quem terminar antes, tente adicionar a rota /api/cursos da aula de hoje."
-->

---

###### Analogias

# Os conceitos da aula no dia a dia

## Use a analogia para lembrar; use o termo técnico para explicar

| Conceito | No dia a dia | Na API acadêmica |
|---|---|---|
| **Cliente-servidor** | o cliente pede, a **cozinha** prepara | o app pede `GET /api/cursos` |
| **Stateless** | o caixa pede o **cartão** a cada compra | token em **toda** requisição |
| **DNS** | **agenda de contatos**: nome ➜ número | `api.faculdade.edu.br` ➜ IP |
| **Status HTTP** | o garçom avisa: "saiu", "não existe", "a cozinha travou" | `200`, `404`, `500` |
| **HTTPS/TLS** | **envelope lacrado** com remetente comprovado | senhas e notas cifradas |
| **Event loop** | o **garçom** que não fica parado esperando o prato | E/S assíncrona com `await` |
| **Lock file** | a receita com a **marca exata** de cada ingrediente | `package-lock.json` + `npm ci` |

<!--
🎤 **Fala do Professor:**

"Vamos fazer uma pausa para conectar tudo com o dia a dia, porque é assim que o conceito gruda na memória. Leiam a tabela linha por linha: cada conceito técnico tem uma imagem do cotidiano e, na terceira coluna, o mesmo conceito na nossa API. A analogia é só a porta de entrada. Na prova, no estágio e na documentação, o que vale é o termo técnico. Então usem a analogia para entender e o vocabulário correto para explicar. Um exercício rápido: escolham uma linha e expliquem para o colega do lado em trinta segundos, sem usar a analogia."
-->

---

###### Fechamento

# Resumo da aula

## As ideias que você leva para a próxima etapa

<div class="cards">
  <div class="card"><span class="n">1</span>O <strong>back-end</strong> é a cozinha: regras, dados e segurança, num modelo <strong>cliente-servidor sem estado</strong>.</div>
  <div class="card"><span class="n">2</span>A requisição percorre <strong>DNS ➜ servidor web ➜ aplicação ➜ banco</strong>, e o HTTP é a língua dessa conversa.</div>
  <div class="card"><span class="n">3</span><strong>Método</strong> = intenção; <strong>status</strong> = resultado; <strong>HTTPS</strong> = envelope lacrado.</div>
  <div class="card"><span class="n">4</span>O <strong>Node.js</strong> atende muitos pedidos num só processo graças ao <strong>event loop</strong>: não o bloqueie.</div>
  <div class="card"><span class="n">5</span>O <strong>Express</strong> organiza o roteamento e as respostas sobre o <code>node:http</code>.</div>
  <div class="card"><span class="n">6</span><strong>npm + lock</strong> garantem versões; <strong>variáveis de ambiente</strong> mantêm segredos fora do código.</div>
</div>

<div class="callout"><strong>Próxima aula:</strong> Express por dentro — middlewares, MVC, camadas e SOLID. Leitura: e-book, seções 2.1 a 2.5.</div>

<!--
🎤 **Fala do Professor:**

"Vamos amarrar. O back-end é a cozinha, num modelo cliente-servidor sem estado. A requisição percorre o caminho do DNS até o banco, e o HTTP é a língua da conversa: o método diz a intenção, o status diz o resultado e o HTTPS lacra o envelope. O Node.js atende muitos pedidos num único processo pelo event loop, e o Express organiza tudo isso de forma declarativa. Por fim, npm e variáveis de ambiente transformam um script num projeto profissional. A ideia que eu quero que vocês levem: frameworks mudam, mas quem entende o caminho da requisição consegue trabalhar com qualquer um deles."
-->

---

###### Reflexão

# Desafio e perguntas para discussão

## Complete o código e discuta em dupla

<div class="cols-60">
<div>

```js
// Complete as lacunas
const express = require('express');
const app = express();

app.______('/api/cursos', (req, res) => {   // verbo?
  res.______(cursos);                         // método?
});

app.get('/api/cursos/:id', (req, res) => {
  const id = ______(req.params.id);           // conversão?
  // curso inexistente ➜ qual status?
});

app.listen(process.env.______ ?? 3000);       // variável?
```

</div>
<div>

### Reflita

1. Se o **banco cair**, o usuário deve ver o **erro do SQL**, uma tela em branco ou uma mensagem amigável?
2. Por que o `package-lock.json` vai para o Git e a `node_modules/` **não**?
3. Que tipo de rota **nunca** deveria fazer um cálculo pesado e síncrono no Node?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fechar, completem as lacunas: o verbo adequado para listar, o método do Express que devolve JSON, a conversão do parâmetro e a variável de ambiente da porta. E pensem: um curso inexistente devolve qual status? Depois discutam as três perguntas. A primeira, sobre o banco fora do ar, vamos responder de verdade na Aula 3, quando estudarmos o tratamento de erros. Para a próxima aula, leiam as seções 2.1 a 2.5 do e-book e, se puderem, deixem o servidor de hoje rodando na máquina de vocês: vamos evoluí-lo."
-->

---

<!-- _class: refs -->

###### Fontes

# Referências

SILVA, Allan da. **Desenvolvimento Back-End**: arquitetura, APIs RESTful, persistência de dados e segurança no lado do servidor. E-book. 2026. Unidade I.

OPENJS FOUNDATION. **HTTP**. Node.js Documentation. Disponível em: https://nodejs.org/api/http.html.

OPENJS FOUNDATION. **Express 5.x – API Reference**. Disponível em: https://expressjs.com/en/5x/api.html.

FIELDING, R.; NOTTINGHAM, M.; RESCHKE, J. **RFC 9110: HTTP Semantics**. IETF, 2022.

WIGGINS, Adam. **The Twelve-Factor App**: III. Config. Disponível em: https://12factor.net/config.

<div class="box pratica"><div class="t">Código de apoio</div>Os exemplos desta aula estão na pasta <code>api-academica-node/exemplos</code>, entregue junto com os slides.</div>

<!--
🎤 **Fala do Professor:**

"Estas são as referências da aula. O e-book é a base; a documentação oficial do Node e do Express é onde vocês vão buscar detalhes no dia a dia. Vale criar o hábito de ler a documentação oficial antes de procurar respostas em fóruns."
-->

---

<!-- _class: fim -->
<!-- _backgroundImage: url('assets/bg-secao.png') -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Obrigado!

**Prof. Esp. Allan da Silva**

Dúvidas? Traga o seu servidor rodando para a próxima aula.

<!--
🎤 **Fala do Professor:**

"Obrigado, pessoal! Até a próxima aula. Tragam o servidor de hoje funcionando, porque vamos abri-lo por dentro."
-->
