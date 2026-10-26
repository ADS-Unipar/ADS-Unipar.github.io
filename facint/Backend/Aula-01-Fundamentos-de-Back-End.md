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

# Introdução ao Ecossistema e à Arquitetura Server-Side

<div class="line"></div>

## Unidade I · Do toque em "Entrar" até o banco de dados

Back-end · Cliente-servidor · HTTP/HTTPS · Runtimes · Pacotes · Variáveis de ambiente

<!--
🎤 **Fala do Professor:**

"Boa noite, pessoal! Hoje começamos a nossa jornada pelo desenvolvimento back-end, a parte do sistema que ninguém vê, mas da qual todo mundo depende. Nesta primeira aula vamos entender o ecossistema em que o código do servidor vive: quem pede, quem responde, em que língua essa conversa acontece e quais ferramentas usamos para escrever e executar esse código. Ao longo da disciplina, vamos construir juntos uma API de gerenciamento acadêmico em Laravel, com cursos, alunos, disciplinas e matrículas, e de vez em quando vamos espiar como a mesma ideia fica em Node.js. Hoje é a base de tudo: se esses fundamentos ficarem claros, as próximas unidades, que falam de arquitetura, APIs, banco de dados e segurança, vão fluir muito melhor, porque todas elas partem do caminho que uma requisição percorre. Preparados? Então, vamos juntos!"
-->

---

# 🎯 Objetivos de aprendizagem

<div class="cards">
  <div class="card"><span class="ico">🧱</span><b>Compreender</b>o que é o back-end e o modelo cliente-servidor</div>
  <div class="card"><span class="ico">⚖️</span><b>Diferenciar</b>servidor web de servidor de aplicação</div>
  <div class="card"><span class="ico">🔎</span><b>Explicar</b>o caminho de uma requisição, do DNS ao banco</div>
  <div class="card"><span class="ico">📨</span><b>Identificar</b>métodos, cabeçalhos, status e o papel do HTTPS</div>
  <div class="card"><span class="ico">📦</span><b>Relacionar</b>runtime, framework, pacotes e versionamento semântico</div>
  <div class="card"><span class="ico">🔐</span><b>Analisar</b>o uso de variáveis de ambiente e o cuidado com segredos</div>
</div>

<!--
🎤 **Fala do Professor:**

"Estes são os seis objetivos de hoje, e repare que eles seguem uma ordem lógica, do mais geral para o mais prático. Primeiro, vamos entender o que é o back-end e como ele conversa com os clientes; depois, vamos separar dois tipos de servidor que muita gente confunde e acompanhar uma requisição inteira, passo a passo. Em seguida, vamos abrir a 'caixa' do protocolo HTTP para ver métodos, cabeçalhos, códigos de status e a proteção do HTTPS. Por fim, vamos olhar para as ferramentas do dia a dia, como runtimes, gerenciadores de pacotes e versionamento, e fechar com um tema que derruba muita empresa: segredos e variáveis de ambiente. No final da aula, voltem a este slide e vejam se conseguem explicar cada card com as suas palavras, como se estivessem contando para um colega que faltou; se travarem em algum, é sinal de que vale reler aquela seção do e-book."
-->

---

# 📱 O que acontece quando você toca em "Entrar"?

<div class="cols-60">
<div>

Em **menos de um segundo**:

- seus dados **viajam pela internet** até outro estado ou país
- um programa **verifica quem você é**
- ele **consulta um banco de dados**
- e **devolve uma resposta** ao aplicativo

Esse programa **sem tela nem botões** é o **back-end**.

</div>
<div class="card">
<span class="ico">🍽️</span><b>Analogia: o restaurante</b>
O <strong>salão</strong> (mesas, cardápio, garçons) é o <strong>front-end</strong>. A <strong>cozinha</strong> é o <strong>back-end</strong>: ingredientes são os <strong>dados</strong>, receitas são as <strong>regras de negócio</strong> e cozinheiros são o <strong>código</strong>.
</div>
</div>

<div class="callout">O cliente <strong>não entra na cozinha</strong>, mas a qualidade do prato depende <strong>inteiramente dela</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Pensem na última vez que vocês abriram o aplicativo do banco ou o portal da faculdade e tocaram em 'Entrar'. Em menos de um segundo, os dados digitados viajaram pela internet até um computador que pode estar em outro estado ou país; lá, um programa verificou quem vocês são, consultou um banco de dados e devolveu uma resposta. Esse programa invisível, sem tela nem botões, é o back-end, e é dele que vamos cuidar durante toda a disciplina. A analogia que vai nos acompanhar é a do restaurante: o salão, com mesas, cardápio e garçons, é o front-end, e a cozinha, com ingredientes, receitas e cozinheiros, é o back-end. Vocês nunca entram na cozinha de um restaurante, mas se o prato chega frio ou errado, a culpa quase sempre é dela, e é exatamente essa responsabilidade que o back-end carrega."
-->

---

# 🧱 Front-end × Back-end

<div class="cols">
<div class="card">
<span class="ico">🖥️</span><b>Front-end · o salão</b>
O que o usuário <strong>vê e toca</strong>: telas, botões, formulários e animações, executados no <strong>navegador</strong> ou no <strong>app</strong>.
</div>
<div class="card">
<span class="ico">⚙️</span><b>Back-end · a cozinha</b>
Roda no <strong>servidor</strong>: recebe pedidos, aplica <strong>regras de negócio</strong>, acessa <strong>dados</strong> e devolve respostas.
</div>
</div>

<div class="note">💡 <strong>Conceito-chave:</strong> back-end é o conjunto de programas executados no lado do servidor (<strong>server-side</strong>) que recebem requisições, aplicam regras de negócio, persistem e recuperam dados, integram-se a outros sistemas e <strong>garantem a segurança</strong> da aplicação.</div>

<div class="callout">É o back-end que garante que a nota lançada pelo professor apareça <strong>corretamente no boletim</strong> do aluno.</div>

<!--
🎤 **Fala do Professor:**

"De forma simplificada, toda aplicação web moderna tem duas grandes partes. O front-end é o que o usuário vê e com o que interage, rodando no navegador ou no celular; o back-end roda no servidor e cuida de receber pedidos, aplicar as regras de negócio, acessar os dados e devolver respostas. Leiam com calma o conceito-chave da nota, de preferência em voz alta, porque ele resume tudo o que vamos estudar neste semestre e funciona quase como um sumário da disciplina: requisições, regras, persistência, integração e segurança, nessa ordem, aparecem nas cinco unidades do e-book. Um exemplo bem do nosso mundo: quando um professor lança uma nota, não é a tela que garante que ela vai parar no boletim certo, com o valor certo e só visível para o aluno certo. Quem garante isso é o back-end, e por isso um erro na cozinha costuma ser muito mais grave do que um botão desalinhado no salão."
-->

---

# 🔁 O modelo cliente-servidor

<div class="cols-60">
<div>

- O **cliente inicia** a comunicação, pedindo algo
- O **servidor aguarda** pedidos e os atende
- Um mesmo back-end atende **vários clientes**
- O HTTP é **sem estado** (*stateless*): cada requisição é **independente**

</div>
<div class="cards c2" style="margin-top:0">
  <div class="card"><span class="ico">🌐</span><b>Navegador</b>portal do aluno</div>
  <div class="card"><span class="ico">📱</span><b>App</b>celular do professor</div>
  <div class="card"><span class="ico">💳</span><b>Outro sistema</b>plataforma de pagamentos</div>
  <div class="card"><span class="ico">⚙️</span><b>Back-end</b>a mesma API para todos</div>
</div>
</div>

<div class="note">💡 <strong>Sem estado</strong> facilita a escala (qualquer servidor atende qualquer pedido), mas exige <strong>cookies, sessões ou tokens</strong> para reconhecer o usuário entre uma requisição e outra.</div>

<!--
🎤 **Fala do Professor:**

"Essa divisão de papéis tem nome: modelo cliente-servidor. O cliente é sempre quem inicia a conversa, pedindo alguma coisa, e o servidor fica de plantão aguardando pedidos para atendê-los. O ponto mais interessante está nos cards da direita: a mesma API acadêmica pode atender, ao mesmo tempo, o portal no navegador, o aplicativo no celular do professor e até outro sistema, como a plataforma de pagamentos que confirma a quitação de uma mensalidade. Guardem também a palavra stateless: por padrão, o servidor não 'lembra' de nada entre uma requisição e outra, como um atendente que trata cada cliente como se fosse a primeira vez. Isso simplifica muito a escala, porque qualquer servidor de um grupo pode atender qualquer pedido, mas é justamente por isso que vamos precisar de cookies, sessões e tokens para saber quem está logado, assunto que aprofundaremos na Unidade V."
-->

---

# ⚖️ Servidor web × servidor de aplicação

| | 🌐 Servidor web | ⚙️ Servidor de aplicação |
|---|---|---|
| **Exemplos** | Nginx, Apache | PHP-FPM, processo Node.js |
| **Especialidade** | tarefas de **rede** | executar a **lógica** do programa |
| **Faz** | aceita conexões, negocia **TLS**, comprime, entrega **arquivos estáticos** | roda o código, aplica regras, **consulta o banco** |
| **Escala** | de forma **independente** | de forma **independente** |

<div class="note">💡 "Servidor" tem dois sentidos: <strong>físico</strong> (a máquina, real ou virtual) e <strong>lógico</strong> (o programa que escuta uma porta, como a 443). Ao dizer "servidor web", quase sempre falamos do <strong>lógico</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Uma confusão muito comum entre iniciantes é achar que o back-end é um bloco único. Em produção, normalmente há um servidor web na entrada, como o Nginx ou o Apache, especialista em tarefas de rede: aceitar milhares de conexões, negociar a criptografia do HTTPS, comprimir respostas e entregar arquivos que não mudam, como imagens. Atrás dele fica o servidor de aplicação, que no mundo PHP é o PHP-FPM, um gerenciador que mantém processos prontos para executar os nossos scripts. Como cada um tem uma especialidade, eles podem ser configurados e escalados separadamente, assim como um restaurante pode contratar mais recepcionistas sem contratar mais cozinheiros. E atenção à nota: 'servidor' pode ser a máquina física ou o programa que escuta uma porta, e quando falamos em servidor web estamos quase sempre falando do programa."
-->

---

# 🔎 O fluxo de uma requisição

<div class="flow">
  <div class="step">📱 Cliente<br><span class="muted">app do aluno</span></div>
  <div class="arrow">➜</div>
  <div class="step">📒 DNS<br><span class="muted">nome ➜ IP</span></div>
  <div class="arrow">➜</div>
  <div class="step">🌐 Servidor web<br><span class="muted">HTTPS</span></div>
  <div class="arrow">➜</div>
  <div class="step">⚙️ Aplicação<br><span class="muted">regras</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">🗄️ Banco<br>de dados</div>
</div>

- O cliente **descobre o IP** do servidor consultando o **DNS**
- Abre uma **conexão segura** e envia a **requisição HTTP**
- A aplicação **executa o código**, consulta o **banco** e a resposta **faz o caminho de volta**

<div class="callout">Uma lentidão pode estar em <strong>qualquer etapa</strong>: rede, processamento ou, principalmente, <strong>banco de dados</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vamos acompanhar o aplicativo do aluno pedindo a lista de cursos da faculdade. Antes mesmo de falar com o back-end, o celular precisa descobrir o endereço IP do servidor, consultando o DNS, que funciona como uma agenda de contatos da internet, transformando um nome em um número. Depois, abre uma conexão segura e envia a requisição; o servidor web repassa o pedido ao servidor de aplicação, que executa o nosso código, consulta o banco de dados e devolve a resposta pelo mesmo caminho. Esse desenho é importante porque explica por que o desempenho de um back-end depende de vários fatores: latência da rede, tempo de processamento e, quase sempre, tempo gasto no banco. Quando um sistema ficar lento no seu estágio, lembrem deste slide: o desenvolvedor experiente investiga etapa por etapa, em vez de sair chutando."
-->

---

<!-- _class: dense -->

# 💻 O menor back-end possível em PHP

```php
<?php
// public/index.php — rode com: php -S localhost:8000 (só para estudo!)
header('Content-Type: application/json; charset=utf-8');   // a resposta será JSON
$metodo  = $_SERVER['REQUEST_METHOD'];                       // 1. lê o verbo: GET, POST...
$caminho = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH); // 2. lê o caminho pedido
$cursos  = [['id' => 1, 'nome' => 'Engenharia de Software'],  // dados fixos, por enquanto
            ['id' => 2, 'nome' => 'Ciência de Dados']];

if ($metodo === 'GET' && $caminho === '/api/cursos') {       // 3. roteamento: decide o que fazer
    echo json_encode($cursos, JSON_UNESCAPED_UNICODE);       // 4. representação em JSON (200 OK)
    exit;                                                     //    encerra a resposta aqui
}
http_response_code(404);                                      // 5. código de status: não encontrado
echo json_encode(['erro' => 'Rota não encontrada']);          //    corpo explicando o erro
```

<div class="note">📌 <strong>O que demonstra:</strong> todo back-end <strong>lê método e caminho</strong>, faz o <strong>roteamento</strong>, produz uma <strong>representação</strong> dos dados e define o <strong>código de status</strong>. Frameworks fazem o mesmo, de forma organizada e segura. ⚠️ O <code>php -S</code> atende uma requisição por vez: <strong>nunca em produção</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Para tirar tudo isso do abstrato, aqui está o menor back-end possível em PHP, usando o servidor embutido da linguagem. Acompanhem os números nos comentários: primeiro o script lê o método e o caminho da requisição, depois decide o que fazer, o que chamamos de roteamento, em seguida produz uma representação dos dados em JSON e, por fim, define o código de status, como o 404 quando a rota não existe. Por menor que seja, esse código já contém os elementos de qualquer back-end do mundo; o Laravel, o Express e o Spring fazem exatamente isso, só que de forma organizada, segura e escalável. Experimentem comparar com o mesmo servidor em Node.js, na seção 1.3.3 do e-book: muda a sintaxe, mas os cinco passos são idênticos. Uma observação importante: o php -S processa uma requisição por vez e serve apenas para estudar e testar, enquanto em servidores reais usamos Nginx ou Apache com PHP-FPM."
-->

---

# 📨 A anatomia de uma mensagem HTTP

<div class="cols-60">
<div>

```http
GET /api/cursos HTTP/1.1          # linha inicial: método, caminho, versão
Host: localhost:8000              # cabeçalho: qual servidor
Accept: application/json          # cabeçalho: formato aceito
                                  # linha em branco: fim dos cabeçalhos
HTTP/1.1 200 OK                   # linha de status: código + frase
Content-Type: application/json    # cabeçalho: formato do corpo
                                  # linha em branco
[{"id":1,"nome":"Engenharia..."}] # corpo: os dados em JSON
```

</div>
<div>

- **Requisição:** linha inicial, **cabeçalhos**, linha em branco e **corpo** opcional
- **Resposta:** começa com a **linha de status**
- **URL:** esquema, **host**, porta, **caminho**, *query string* e fragmento

</div>
</div>

<div class="note">💡 Rode <code>curl -v</code> na sua API: linhas com <code>&gt;</code> foram <strong>enviadas</strong> pelo cliente; com <code>&lt;</code>, <strong>recebidas</strong> do servidor. O <strong>fragmento</strong> (<code>#...</code>) nunca chega ao servidor.</div>

<!--
🎤 **Fala do Professor:**

"O HTTP, criado por Tim Berners-Lee no CERN, é o protocolo que define como clientes e servidores trocam mensagens, e a boa notícia é que essas mensagens são texto com uma estrutura bem definida. A requisição começa com uma linha inicial, com método, caminho e versão, segue com os cabeçalhos, uma linha em branco e, opcionalmente, um corpo. A resposta tem estrutura parecida, mas começa com a linha de status, que traz o código numérico e uma frase, como 200 OK. Lembrem também das partes da URL: o host identifica o servidor, o caminho identifica o recurso e a query string carrega filtros e paginação, enquanto o fragmento fica só no navegador. Minha dica prática é usar o curl com a opção -v, que mostra tudo o que vai e volta pela rede, sem interface gráfica nenhuma atrapalhando."
-->

---

# 🗣️ Métodos e cabeçalhos

<div class="cols">
<div>

### O método expressa a **intenção**

- `GET` consulta · `POST` cria
- `PUT` substitui · `PATCH` altera parte
- `DELETE` remove
- **Seguro:** não altera o servidor (`GET`)
- **Idempotente:** repetir dá o **mesmo efeito** (`PUT`, `DELETE`)

</div>
<div>

| Cabeçalho | Função |
|---|---|
| `Content-Type` | formato do corpo |
| `Accept` | formatos aceitos |
| `Authorization` | credenciais (`Bearer`) |
| `Cookie` / `Set-Cookie` | envio e criação de cookies |
| `Cache-Control` | regras de cache |

</div>
</div>

<div class="note">💡 O <strong>corpo</strong> carrega os dados: vazio no <code>GET</code>, com a representação do recurso em <code>POST</code>, <code>PUT</code> e <code>PATCH</code>, quase sempre em <strong>JSON</strong>.</div>

<!--
🎤 **Fala do Professor:**

"O método, também chamado de verbo, expressa a intenção de quem pede: GET para consultar, POST para criar, PUT para substituir, PATCH para alterar uma parte e DELETE para remover; vamos detalhar cada um na Unidade III. Agora, dois conceitos que caem em entrevista de emprego: um método é seguro quando não altera o estado do servidor, como o GET, e é idempotente quando repeti-lo várias vezes produz o mesmo efeito que executá-lo uma vez, como o PUT e o DELETE. Apagar o aluno 42 uma vez ou dez vezes dá no mesmo, ele continua apagado. Do lado direito estão os cabeçalhos, que são pares nome-valor com metadados da mensagem: o Content-Type diz o formato do corpo, o Authorization leva as credenciais e o Cache-Control diz por quanto tempo a resposta pode ser reaproveitada. Já o corpo é onde vão os dados de verdade, e nas APIs modernas ele quase sempre está em JSON."
-->

---

# 🚦 Códigos de status: o resultado em 3 dígitos

<div class="cols-60">
<div>

| Classe | Significado | Exemplo |
|---|---|---|
| **1xx** | informativo | — |
| **2xx** | sucesso | `200 OK` |
| **3xx** | redirecionamento | HTTP ➜ HTTPS |
| **4xx** | erro do **cliente** | `404` rota inexistente |
| **5xx** | erro do **servidor** | `500` falha interna |

</div>
<div class="card">
<span class="ico">🍪</span><b>E o "estado"?</b>
O servidor envia <code>Set-Cookie</code>; o navegador devolve <code>Cookie</code> nas próximas requisições. Atributos <strong>HttpOnly</strong>, <strong>Secure</strong> e <strong>SameSite</strong> deixam o cookie mais seguro.
</div>
</div>

<div class="callout">O código de status faz parte do <strong>contrato da API</strong>: é por ele que o cliente decide <strong>o que mostrar ao usuário</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Toda resposta HTTP traz um código de status de três dígitos, e o primeiro dígito já diz a classe: 1xx informativo, 2xx sucesso, 3xx redirecionamento, 4xx erro do cliente e 5xx erro do servidor. A diferença entre 4xx e 5xx é a mais importante para nós: no 4xx, quem pediu errou, por exemplo pedindo uma rota que não existe; no 5xx, quem errou fomos nós, do back-end. Usar o código correto não é perfumaria, é parte do contrato, porque o aplicativo decide o que mostrar ao usuário com base nele. No card da direita, lembrem que o HTTP é sem estado, e por isso os cookies foram criados: o servidor manda um Set-Cookie e o navegador devolve esse valor em cada requisição seguinte, que é exatamente como funcionam as sessões de login tradicionais. Os atributos HttpOnly, Secure e SameSite voltam com força na Unidade V."
-->

---

# 🔒 HTTPS, TLS e a evolução do HTTP

<div class="cards">
  <div class="card"><span class="ico">🙈</span><b>Confidencialidade</b>ninguém no caminho <strong>consegue ler</strong> o conteúdo</div>
  <div class="card"><span class="ico">🧩</span><b>Integridade</b>ninguém <strong>altera</strong> a mensagem sem ser percebido</div>
  <div class="card"><span class="ico">🪪</span><b>Autenticidade</b>o <strong>certificado digital</strong> prova que o servidor é o verdadeiro</div>
</div>

<div class="flow">
  <div class="step">HTTP/1.1 · 1997<br><span class="muted">conexões persistentes</span></div>
  <div class="arrow">➜</div>
  <div class="step">HTTP/2 · 2015<br><span class="muted">binário, multiplexação</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">HTTP/3 · 2022<br>QUIC sobre UDP</div>
</div>

<div class="note">💡 <strong>HTTPS = HTTP sobre TLS.</strong> Em produção: redirecione todo HTTP para HTTPS e use <strong>HSTS</strong>. A <strong>semântica</strong> (métodos, cabeçalhos, status) nunca mudou: só o <strong>transporte</strong> evoluiu.</div>

<!--
🎤 **Fala do Professor:**

"No HTTP puro, as mensagens trafegam em texto aberto, então qualquer equipamento no caminho, como o roteador do Wi-Fi da praça de alimentação, poderia ler senhas e dados pessoais. O HTTPS resolve isso executando o HTTP sobre uma camada chamada TLS, que garante as três propriedades dos cards: confidencialidade, integridade e autenticidade, esta última graças ao certificado digital emitido por uma autoridade certificadora. Hoje o Let's Encrypt emite certificados de graça, então não existe justificativa para publicar uma API sem HTTPS. Embaixo, vejam a evolução do protocolo: o HTTP/2 trouxe a multiplexação de várias requisições numa mesma conexão e o HTTP/3 passou a usar o QUIC, sobre UDP, para reduzir a latência. O detalhe mais importante é que a semântica nunca mudou, ou seja, um GET continua sendo um GET e um 404 continua sendo um 404 em qualquer versão: para quem escreve o back-end, a versão costuma ser transparente, porque o servidor web negocia isso por nós."
-->

---

# 🍽️ Os conceitos da aula no dia a dia

| Conceito | No dia a dia | Na API acadêmica |
|---|---|---|
| **Cliente-servidor** | cliente faz o pedido, a cozinha prepara | o app pede `GET /api/cursos` |
| **DNS** | agenda de contatos: nome ➜ número | `api.faculdade.edu.br` ➜ IP |
| **Status HTTP** | o garçom avisa: "saiu", "acabou", "a cozinha travou" | `200`, `404`, `500` |
| **HTTPS/TLS** | envelope **lacrado** e com remetente comprovado | tokens e notas trafegam cifrados |
| **Lock file** | receita com a **marca exata** de cada ingrediente | `composer.lock` igual em todos os ambientes |

<div class="note">💡 Use as analogias para <strong>lembrar</strong> da ideia, mas explique sempre com o <strong>termo técnico</strong>: é ele que aparece na documentação e nas entrevistas.</div>

<!--
🎤 **Fala do Professor:**

"Vamos fazer uma pausa para conectar tudo com situações do dia a dia, porque é assim que o conceito gruda na memória. O modelo cliente-servidor é o restaurante, o DNS é a agenda de contatos que transforma um nome em número, e o código de status é o garçom avisando se o prato saiu, se o item acabou ou se deu problema na cozinha. O HTTPS é como mandar uma carta em envelope lacrado e com remetente comprovado, e o lock file, que veremos daqui a pouco, é a receita que especifica a marca exata de cada ingrediente para que o prato fique igual em qualquer filial. Vejam que a terceira coluna traz o mesmo conceito na nossa API acadêmica, porque a analogia é só a porta de entrada. Na prova, no estágio e na documentação, o que vale é o termo técnico, então usem a analogia para entender e o vocabulário correto para explicar."
-->

---

# 🧰 Linguagem, runtime, biblioteca e framework

<div class="cards c4">
  <div class="card"><span class="ico">✍️</span><b>Linguagem</b>a <strong>sintaxe</strong> e as regras de escrita: PHP, JavaScript</div>
  <div class="card"><span class="ico">⚙️</span><b>Runtime</b>quem <strong>executa</strong> o código: Zend Engine, Node.js, JVM</div>
  <div class="card"><span class="ico">📚</span><b>Biblioteca</b>código reutilizável que <strong>você chama</strong>: gerar JWT</div>
  <div class="card"><span class="ico">🏗️</span><b>Framework</b>define a estrutura e <strong>chama o seu código</strong>: Laravel, Express</div>
</div>

| Modelo de execução | PHP com PHP-FPM | Node.js |
|---|---|---|
| **Ciclo de vida** | um processo por requisição, **memória liberada** ao final | processo de **longa duração** |
| **Concorrência** | **pool** de processos em paralelo | **event loop** assíncrono |

<div class="callout">"Você chama a biblioteca, mas <strong>o framework chama você</strong>": isso é <strong>inversão de controle</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Para escrever um back-end não basta conhecer a linguagem, é preciso entender o ecossistema, e quatro termos costumam ser confundidos. A linguagem define a sintaxe; o runtime é o programa que de fato executa o código, como o interpretador PHP com o Zend Engine, o Node.js ou a JVM; a biblioteca é um código reutilizável que você chama quando precisa; e o framework define a estrutura da aplicação e chama o seu código nos momentos certos. Guardem a frase do callout, porque essa ideia, chamada inversão de controle, volta com tudo na próxima aula. Na tabela, a comparação com o Node.js: no PHP-FPM, cada requisição começa do zero e descarta a memória ao final, enquanto no Node um único processo fica vivo e atende muitas requisições pelo event loop. Nenhum modelo é melhor em absoluto, cada um exige cuidados diferentes: no PHP o erro clássico é abrir conexões caras a cada requisição, e no Node é travar o event loop com um cálculo pesado."
-->

---

# 📦 Gerenciadores de pacotes e versionamento semântico

<div class="cols">
<div>

| Ecossistema | Gerenciador | Manifesto / trava |
|---|---|---|
| **PHP** | Composer | `composer.json` / `.lock` |
| **Node.js** | npm, pnpm | `package.json` / `-lock.json` |
| **Java** | Maven, Gradle | `pom.xml` / `build.gradle` |

</div>
<div class="card">
<span class="ico">🏷️</span><b>SemVer: MAJOR.MINOR.PATCH</b>
<strong>MAJOR</strong> quebra compatibilidade · <strong>MINOR</strong> novidade compatível · <strong>PATCH</strong> correção.<br>
<code>"firebase/php-jwt": "^6.10"</code> aceita qualquer <strong>6.x ≥ 6.10</strong>, mas <strong>nunca a 7.0</strong>.
</div>
</div>

<div class="note">💡 <strong>Boa prática:</strong> versione o <code>composer.lock</code> e use <code>composer install</code> no servidor. A pasta <code>vendor/</code> (ou <code>node_modules/</code>) <strong>nunca</strong> vai para o Git.</div>

<!--
🎤 **Fala do Professor:**

"Dependência é qualquer pacote externo de que o projeto precisa, e o gerenciador de pacotes é quem baixa, instala, atualiza e registra essas dependências com suas versões. Em todos os ecossistemas a lógica é a mesma: um manifesto que declara o que você quer, um arquivo de trava que fixa as versões exatas instaladas e um repositório público de onde os pacotes vêm, que no nosso caso é o Composer com o Packagist. A maioria dos pacotes segue o versionamento semântico, MAJOR.MINOR.PATCH: o acento circunflexo no ^6.10 significa 'aceite melhorias e correções, mas nunca uma versão que possa quebrar meu código'. Por isso o composer.lock deve ser versionado: é ele que garante que o servidor de produção rode exatamente as versões que vocês testaram. Já a pasta vendor fica fora do Git, porque ela é reconstruída a partir do manifesto."
-->

---

# 🔐 Variáveis de ambiente e segredos

<div class="cols">
<div class="card">
<span class="ico">❌</span><b>Sem separar configuração</b>
• senha do banco <strong>escrita no código</strong><br>
• <code>.env</code> enviado ao <strong>GitHub público</strong><br>
• <code>APP_DEBUG=true</code> em produção<br>
• mesma chave em <strong>todos os ambientes</strong>
</div>
<div class="card">
<span class="ico">✅</span><b>Com variáveis de ambiente</b>
• valores no <code>.env</code>, lidos <strong>só em</strong> <code>config/</code><br>
• no código, apenas <code>config('jwt.ttl_minutos')</code><br>
• <code>.env.example</code> versionado, com valores <strong>fictícios</strong><br>
• produção usa um <strong>cofre de segredos</strong>
</div>
</div>

<div class="callout"><strong>Configuração</strong> é o que varia entre ambientes; <strong>código</strong> é o que não varia. Vazou um segredo? <strong>Revogue e troque</strong> na hora.</div>

<!--
🎤 **Fala do Professor:**

"Uma aplicação real roda em vários ambientes, como a máquina de vocês, o servidor de testes e a produção, e em cada um muda o endereço do banco, as credenciais e o nível de detalhe dos erros, mas o código precisa ser o mesmo. A solução, recomendada pela metodologia The Twelve-Factor App, é separar configuração de código usando variáveis de ambiente; no Laravel, elas ficam no arquivo .env e são lidas apenas nos arquivos da pasta config, enquanto o restante do código usa a função config(). Do lado esquerdo está um caso real, comum em empresas e projetos acadêmicos: um estagiário escreve a senha do banco no código, faz push para um repositório público e, dias depois, o banco é acessado por um IP desconhecido, porque robôs varrem o GitHub o tempo todo atrás de credenciais. A correção é a coluna da direita, mas atenção ao callout: apagar o commit não resolve, a credencial precisa ser revogada e trocada imediatamente."
-->

---

# 🌍 Aplicação em sistemas reais

<div class="cards">
  <div class="card"><span class="ico">🎓</span><b>Portal acadêmico</b>Nginx + <strong>PHP-FPM</strong> + PostgreSQL; um <code>.env</code> diferente por ambiente</div>
  <div class="card"><span class="ico">🏦</span><b>App de banco</b><strong>HTTPS</strong> obrigatório, HSTS e segredos em <strong>cofre auditado</strong></div>
  <div class="card"><span class="ico">💬</span><b>Chat e notificações</b><strong>Node.js</strong> e seu event loop para muitas operações de E/S</div>
</div>

<div class="flow">
  <div class="step">Nova versão</div>
  <div class="arrow">➜</div>
  <div class="step">Sem pacotes<br>de dev</div>
  <div class="arrow">➜</div>
  <div class="step">Cache de<br>configuração</div>
  <div class="arrow">➜</div>
  <div class="step">Debug<br>desligado</div>
  <div class="arrow">➜</div>
  <div class="step fill">HTTPS + HSTS ✔</div>
</div>

<div class="note">💡 A <strong>configuração faz parte da arquitetura e da segurança</strong>: esse roteiro costuma rodar automaticamente em um pipeline de <strong>CI/CD</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vamos ver como isso aparece no mercado. Um portal acadêmico típico usa Nginx na frente, PHP-FPM executando o Laravel e um PostgreSQL atrás, com um .env diferente para cada ambiente; um aplicativo de banco não pode, de jeito nenhum, abrir mão de HTTPS, HSTS e de um cofre de segredos com acesso auditado; e sistemas de chat e notificações em tempo real costumam aproveitar o modelo do Node.js, que é muito eficiente com grande volume de entrada e saída. O fluxo de baixo é um roteiro de publicação baseado na lista de verificação do e-book: instalar sem as dependências de desenvolvimento, gerar o cache de configuração, garantir que o modo de depuração está desligado e conferir o HTTPS. O APP_DEBUG ligado em produção, por exemplo, mostraria a pilha de erros, consultas SQL e até variáveis de ambiente para um possível atacante. Em empresas, esses passos rodam sozinhos num pipeline de CI/CD a cada nova versão."
-->

---

# 🧾 Síntese dos conceitos

<div class="cols">
<div>

1. **Back-end** = a cozinha: regras, dados e segurança
2. **Cliente-servidor**: o cliente pede, o servidor atende
3. **Servidor web** (rede) × **servidor de aplicação** (lógica)
4. **Fluxo**: Cliente ➜ DNS ➜ Web ➜ Aplicação ➜ Banco

</div>
<div>

1. **HTTP**: método, cabeçalhos, corpo e **status**
2. **HTTPS/TLS**: confidencialidade, integridade, autenticidade
3. **Runtime + pacotes + SemVer** organizam o ecossistema
4. **Configuração fora do código**; segredos em **cofre**

</div>
</div>

<div class="callout">O back-end é o <strong>contrato invisível</strong> do sistema: quem domina o <strong>caminho da requisição</strong> domina qualquer framework.</div>

<!--
🎤 **Fala do Professor:**

"Vamos amarrar tudo. Na coluna da esquerda está a arquitetura: o back-end é a cozinha, o modelo cliente-servidor define quem pede e quem atende, o servidor web cuida da rede e o de aplicação cuida da lógica, e a requisição percorre o caminho do DNS até o banco. Na coluna da direita estão a língua e as ferramentas: as mensagens HTTP com métodos, cabeçalhos, corpo e status, a proteção do TLS, o ecossistema de runtimes, pacotes e versionamento e, por fim, a separação entre configuração e código. A frase do callout é a ideia que eu quero que vocês levem para casa: frameworks mudam, linguagens mudam, mas quem entende o caminho da requisição consegue migrar de Laravel para Node.js ou Spring sem dificuldade, porque os fundamentos são transferíveis."
-->

---

# 📝 Reflexão

<div class="cols-60">
<div>

### 🧩 Desafio: complete a primeira rota

```php
// routes/api.php — GET /api/saude
Route::______('/saude', function () {        // qual verbo HTTP?
    return response()->json([
        'status'    => 'ok',
        'aplicacao' => ______('app.name'),   // ler do .env ou da config?
    ]);                                       // qual status sai aqui?
});
```

</div>
<div>

### 💬 Reflita

1. Se o **banco cair**, o usuário deve ver uma tela em branco, o **erro do SQL** ou uma mensagem amigável?
2. Por que o `composer.lock` vai para o Git e a pasta `vendor/` **não**?
3. Na API acadêmica, quais dados **nunca** podem trafegar sem **HTTPS**?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fechar, um desafio rápido: esta é a primeira rota da nossa API acadêmica, a verificação de saúde, aquela que servidores e orquestradores usam para saber se a aplicação está no ar. Completem as lacunas pensando no verbo HTTP adequado para uma consulta, em como ler o nome da aplicação sem escrevê-lo direto no código e em qual código de status essa resposta devolve. Do lado direito, três perguntas para discutir; a primeira, sobre o banco fora do ar, nós vamos responder de verdade na Unidade III, quando estudarmos o tratamento de erros. Na próxima aula vamos olhar para dentro da aplicação: uma rota que devolve JSON é um bom começo, mas sistemas reais têm centenas de rotas, e para organizar tudo isso vamos estudar o padrão MVC, as camadas de Service e Repository e os princípios SOLID. Até lá, leiam as seções 1.1 a 1.4 do e-book, com atenção especial aos quadros de cabeçalhos, de ecossistemas e de configurações por ambiente. Bons estudos e até a próxima!"
-->