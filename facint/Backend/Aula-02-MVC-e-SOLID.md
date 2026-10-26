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

# Arquitetura MVC e Design de Código com SOLID

<div class="line"></div>

## Unidade II · Organizando o código para que ele continue fácil de mudar

MVC · Controller · Service · Repository · SOLID · Refatoração · Injeção de dependência

<!--
🎤 **Fala do Professor:**

"Olá, pessoal! Na aula passada, a nossa API acadêmica respondeu às primeiras requisições, e vimos o caminho completo de um pedido, do DNS até o banco de dados. Hoje vamos olhar para dentro da aplicação, para a cozinha do nosso restaurante, e responder a uma pergunta que todo desenvolvedor enfrenta cedo ou tarde: como organizar o código para que ele continue compreensível depois de meses de evolução? Vamos estudar o padrão MVC, a divisão em Controllers, Services e Repositories, os cinco princípios SOLID e a injeção de dependência. Não se assustem com as siglas: a ideia central da aula inteira é uma só, que é reduzir o custo de mudar o sistema sem quebrar o que já funciona. Ao final, a nossa API acadêmica vai deixar de ser um conjunto de rotas soltas e se tornar uma aplicação bem estruturada, do jeito que vocês vão encontrar nas empresas."
-->

---

# 🎯 Objetivos de aprendizagem

<div class="cards">
  <div class="card"><span class="ico">🧩</span><b>Compreender</b>o padrão MVC e por que, em APIs, a "visão" é o JSON</div>
  <div class="card"><span class="ico">🔁</span><b>Explicar</b>o ciclo de vida de uma requisição no Laravel</div>
  <div class="card"><span class="ico">🧱</span><b>Diferenciar</b>as camadas Controller, Service e Repository</div>
  <div class="card"><span class="ico">📐</span><b>Relacionar</b>cada princípio SOLID ao problema que ele resolve</div>
  <div class="card"><span class="ico">👃</span><b>Identificar</b>maus cheiros que pedem refatoração</div>
  <div class="card"><span class="ico">💉</span><b>Analisar</b>como a injeção de dependência torna o código testável</div>
</div>

<!--
🎤 **Fala do Professor:**

"Estes são os nossos seis objetivos de hoje. Começamos pelo MVC, o padrão que organiza a maioria dos frameworks web, e vamos entender o que acontece dentro do Laravel antes de o nosso código ser chamado. Depois, vamos dividir a aplicação em camadas com papéis bem definidos e conhecer os cinco princípios SOLID, sempre a partir do problema que cada um resolve, e não como uma lista para decorar. Por fim, vamos aprender a reconhecer os sinais de que um código precisa ser refatorado e ver como a injeção de dependência conecta todas as peças de um jeito flexível e testável. Guardem uma pergunta para o final: o código que vocês escreveram no último projeto, seja um trabalho da faculdade ou um sistema do estágio, passaria nesses critérios? Não tem problema se a resposta for não, porque é justamente para isso que estamos aqui."
-->

---

# 😰 "É só mudar a média de 6 para 7..."

<div class="cols-60">
<div>

Um pedido simples da coordenação:

- a regra está **misturada** com SQL, HTML e e-mail
- o mesmo cálculo está **copiado** em vários arquivos
- cada correção gera um **novo defeito** em outro lugar
- **não há testes** para confirmar nada

</div>
<div class="card">
<span class="ico">🍽️</span><b>Analogia: a cozinha</b>
Imagine uma cozinha em que <strong>o mesmo cozinheiro</strong> atende o salão, prepara o prato, lava a louça e faz as compras. Funciona com 3 mesas; com 50, vira <strong>caos</strong>.
</div>
</div>

<div class="callout">Organizar o código não é questão de gosto: é questão de <strong>custo</strong>. Quanto mais confusa a estrutura, mais <strong>caro</strong> fica evoluir o sistema.</div>

<!--
🎤 **Fala do Professor:**

"Imaginem a cena: a coordenação pede para mudar a média de aprovação de 6 para 7, uma alteração de um único número. Só que, no sistema, essa regra está misturada com consultas SQL, com o HTML do boletim e com o envio de e-mails, e ainda foi copiada em vários arquivos; vocês mudam em um lugar, esquecem outro e, de quebra, o relatório para de funcionar. Escrever código que funciona é apenas o primeiro passo, porque o verdadeiro desafio começa meses depois, quando surgem novas regras e novas pessoas entram na equipe. Pensem numa cozinha em que o mesmo cozinheiro atende, cozinha, lava a louça e faz as compras: com três mesas até dá conta, mas com cinquenta vira caos. É exatamente isso que acontece com um código sem divisão de responsabilidades, e o callout resume o porquê desta aula: organizar o código não é uma questão de gosto pessoal ou de estética, é uma questão de custo, porque quanto mais confusa a estrutura, mais caro e arriscado fica evoluir o sistema."
-->

---

# 🧩 O padrão MVC

<div class="cards">
  <div class="card"><span class="ico">🗄️</span><b>Model</b>os <strong>dados</strong> e as <strong>regras de negócio</strong>, incluindo o acesso ao banco</div>
  <div class="card"><span class="ico">🖼️</span><b>View</b><strong>apresenta</strong> o resultado: uma página HTML ou um <strong>JSON</strong></div>
  <div class="card"><span class="ico">🎛️</span><b>Controller</b><strong>recebe</strong> a requisição, aciona os models e escolhe a view</div>
</div>

<div class="flow">
  <div class="step">Requisição</div>
  <div class="arrow">➜</div>
  <div class="step">Controller</div>
  <div class="arrow">➜</div>
  <div class="step">Model</div>
  <div class="arrow">➜</div>
  <div class="step fill">View</div>
</div>

<div class="note">💡 <strong>Na secretaria acadêmica:</strong> o atendente do balcão é o <strong>Controller</strong>; arquivos e normas são o <strong>Model</strong>; a declaração impressa entregue ao aluno é a <strong>View</strong>.</div>

<!--
🎤 **Fala do Professor:**

"O MVC foi formulado por Trygve Reenskaug no final dos anos 1970, no Xerox PARC, para resolver um problema que continua atual: quando o código que manipula os dados, o que os exibe e o que reage ao usuário ficam misturados, qualquer mudança em uma parte afeta as outras. A solução foi separar três responsabilidades: o Model representa os dados e as regras, a View apresenta o resultado e o Controller recebe a requisição e coordena o fluxo. A analogia do e-book ajuda muito: numa secretaria acadêmica, o atendente do balcão recebe o seu pedido, mas não decide as regras sozinho nem guarda os documentos; as normas e os arquivos são o Model; e a declaração que você recebe impressa é a View. Décadas depois, essa ideia virou a base do Rails, do Laravel, do Spring MVC e do ASP.NET MVC."
-->

---

# 📤 Em APIs, a "visão" é o JSON

<div class="cols-60">
<div>

| ✅ Vantagens | ⚠️ Limitações |
|---|---|
| separa dados, apresentação e controle | não diz onde ficam regras **complexas** |
| pastas e classes **previsíveis** | tende a **fat controller** ou **fat model** |
| várias Views para o **mesmo Model** | exige **disciplina** da equipe |

</div>
<div class="card">
<span class="ico">📱</span><b>Mesmo Model, duas Views</b>
Portal web: <code>view('cursos.index')</code> gera HTML.<br>
API: <code>response()->json($cursos)</code> devolve dados.<br>
No Laravel, a "visão" da API vira <strong>API Resource</strong> (Unidade III).
</div>
</div>

<div class="callout">O MVC é um <strong>ponto de partida</strong>, não o ponto de chegada: sistemas maiores pedem <strong>camadas adicionais</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Uma dúvida comum é: se a nossa API não tem telas, onde fica a View? Em uma API, a View passa a ser a representação em JSON do recurso; o controller continua coordenando, mas devolve dados estruturados em vez de uma página. Vejam no card que o modo de buscar os cursos é o mesmo nos dois casos, e só muda a forma de apresentar, e essa é justamente a vantagem de separar o Model da View: o mesmo modelo serve ao portal em HTML e ao aplicativo que consome JSON. Na tabela, porém, aparece o ponto fraco do padrão: o MVC não diz onde colocar regras de negócio complexas, e em projetos que crescem elas acabam no controller, gerando o famoso controller gordo, ou no model. Isso não invalida o MVC, só mostra que ele é o começo da conversa."
-->

---

# 🔁 O ciclo de vida de uma requisição no Laravel

<div class="flow">
  <div class="step">📥 Entrada<br><span class="muted">index.php</span></div>
  <div class="arrow">➜</div>
  <div class="step">⚙️ Início<br><span class="muted">providers</span></div>
  <div class="arrow">➜</div>
  <div class="step">🛡️ Middlewares<br><span class="muted">CORS, auth</span></div>
  <div class="arrow">➜</div>
  <div class="step">🧭 Rotas<br><span class="muted">api.php</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">🎛️<br>Controller</div>
</div>

- A **resposta** volta **pelos middlewares** antes de sair
- Autenticação e logs de acesso pertencem aos **middlewares**, não ao controller
- **Spring:** `DispatcherServlet` + filters · **Express:** `app.use()` antes das rotas

<div class="note">💡 O controller é <strong>apenas uma parte do caminho</strong>: quando entende o ciclo em um ecossistema, você <strong>reconhece</strong> a mesma estrutura nos demais.</div>

<!--
🎤 **Fala do Professor:**

"Para aplicar bem o MVC, vale saber o que o framework faz antes de chamar o nosso controller. Toda requisição entra por um único arquivo, o public/index.php, chamado de front controller; a partir dele, o Laravel cria a aplicação e registra os service providers, executa os middlewares, que são filtros como sessão, CORS e autenticação, encontra a rota correspondente e, só então, chama o método do controller com as dependências já injetadas. A resposta faz o caminho de volta, passando de novo pelos middlewares. A lição prática é que muita coisa que iniciante coloca dentro do controller, como verificar se o usuário está logado, pertence aos middlewares. E reparem na última linha: o Spring tem o DispatcherServlet, o Express tem o app.use, mas a ideia é exatamente a mesma. Voltaremos a esse ciclo nas Unidades III e V, quando criarmos middlewares de validação, autenticação e autorização para a nossa API."
-->

---

# 🧱 Controller ➜ Service ➜ Repository

<div class="flow">
  <div class="step">🎛️ Controller<br><span class="muted">HTTP</span></div>
  <div class="arrow">➜</div>
  <div class="step">🧠 Service<br><span class="muted">regras de negócio</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">🗄️ Repository<br>acesso a dados</div>
</div>

| Camada | Responsabilidade | Não deve | Analogia |
|---|---|---|---|
| **Controller** | traduzir HTTP em chamadas e respostas | conter **regras** ou **SQL** | atendente do balcão |
| **Service** | executar regras e **casos de uso** | conhecer `Request` ou SQL | responsável pelo setor |
| **Repository** | buscar e guardar **dados** | decidir regras de negócio | arquivista |

<div class="note">💡 Cada camada conversa <strong>apenas com a camada imediatamente abaixo</strong>. O Service não sabe nada de HTTP; o Repository esconde se os dados vêm do banco, de uma API ou de um arquivo.</div>

<!--
🎤 **Fala do Professor:**

"Para resolver as limitações do MVC, a comunidade adotou uma divisão mais fina em camadas, em que cada uma tem um único tipo de preocupação. O Controller lida com HTTP: recebe a requisição, valida a entrada, chama o caso de uso e monta a resposta. O Service guarda as regras de negócio, como verificar se ainda há vagas numa disciplina, gerar o RA ou decidir se um aluno pode se matricular, e ele não sabe nada de HTTP. Já o Repository encapsula o acesso aos dados e esconde do resto da aplicação se eles vêm de um banco relacional, de uma API externa ou de um arquivo. Voltando à secretaria: o atendente recebe o pedido, o responsável pelo setor aplica as normas e o arquivista busca e guarda os documentos, e ninguém faz o trabalho do outro."
-->

---

<!-- _class: dense -->

# 🔧 Antes e depois: o cadastro de alunos

<div class="cols">
<div>

```php
// ❌ ANTES: controller gordo
public function store(Request $request) {
  if (!$request->nome) { /* validação manual */ }
  $existe = DB::select('SELECT ...', [$email]); // SQL
  if ($existe) return response()->json(..., 409);
  $ra = date('Y') . random_int(0, 99999);  // regra
  DB::table('alunos')->insert([...]);  // persistência
  Mail::raw("Seu RA é {$ra}", ...);    // e-mail
  return response()->json(['ra' => $ra], 201);
}
```

</div>
<div>

```php
// ✅ DEPOIS: controller fino
public function __construct(
  private readonly CadastroAlunoService $cadastro
) {}                                  // injetado

public function store(Request $request) {
  $dados = $request->validate([...]); // 1. validar
  $aluno = $this->cadastro
                ->cadastrar($dados);  // 2. delegar
  return response()->json(            // 3. responder
    ['id' => $aluno->id, 'ra' => $aluno->ra], 201);
}
```

</div>
</div>

<div class="note">📌 <strong>O que demonstra:</strong> o controller passa a ter só <strong>três passos</strong>. A regra do e-mail duplicado vai para o <strong>Service</strong> (testável sem HTTP), o SQL vai para o <strong>Repository</strong> (trocável) e o envio de mensagens fica atrás de uma <strong>interface</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vamos ver isso no código da nossa API. À esquerda está um controller que funciona, mas concentra tudo num só método: validação manual, consulta SQL, regra do e-mail duplicado, geração do RA, gravação no banco e envio de e-mail. Os problemas aparecem logo: para testar a regra do e-mail duplicado é preciso simular uma requisição HTTP inteira e um banco; a geração do RA não pode ser reaproveitada numa importação por planilha; e, se a faculdade trocar o e-mail pelo WhatsApp, o controller precisa ser alterado. À direita, depois da refatoração, o controller só valida, delega para o CadastroAlunoService e responde com 201. Não sumiu nenhuma funcionalidade: cada responsabilidade só mudou de endereço. E na Unidade III vamos deixar esse controller ainda mais enxuto, movendo a validação para uma classe Form Request e os dados para um DTO."
-->

---

# 📐 SOLID: cinco princípios, um objetivo

<div class="cards">
  <div class="card"><span class="ico">🎯</span><b>S · Responsabilidade Única</b>um módulo responde a <strong>um único ator</strong>, ou seja, tem um só motivo para mudar</div>
  <div class="card"><span class="ico">🔌</span><b>O · Aberto/Fechado</b><strong>aberto</strong> para extensão, <strong>fechado</strong> para modificação</div>
  <div class="card"><span class="ico">🔄</span><b>L · Substituição de Liskov</b>a subclasse <strong>substitui</strong> a superclasse sem quebrar nada</div>
  <div class="card"><span class="ico">✂️</span><b>I · Segregação de Interfaces</b>ninguém depende de métodos que <strong>não usa</strong></div>
  <div class="card"><span class="ico">🔃</span><b>D · Inversão de Dependência</b>regras e detalhes dependem de <strong>abstrações</strong></div>
  <div class="card"><span class="ico">💰</span><b>Objetivo comum</b>reduzir o <strong>custo de mudança</strong>: uma regra nova altera <strong>poucos arquivos</strong></div>
</div>

<!--
🎤 **Fala do Professor:**

"Os princípios SOLID foram reunidos por Robert C. Martin no início dos anos 2000, e o acrônimo foi cunhado por Michael Feathers. Cada letra é um princípio: Responsabilidade Única, Aberto/Fechado, Substituição de Liskov, Segregação de Interfaces e Inversão de Dependência. Reparem no sexto card, porque ele é o mais importante: todos os princípios servem a um mesmo objetivo, que é reduzir o custo de mudança, de modo que uma nova regra de negócio exija alterar poucos arquivos, sem efeitos colaterais inesperados. Eles não são leis rígidas, são orientações. Outra coisa importante é que eles se reforçam mutuamente: classes com responsabilidade única tendem a depender de poucas abstrações, e abstrações bem definidas permitem estender o sistema sem modificá-lo. Nos próximos slides, vamos ver cada um sempre na mesma sequência do e-book: o problema, o sinal de alerta e a refatoração."
-->

---

# 🎯 SRP: um único motivo para mudar

<div class="cols">
<div class="card">
<span class="ico">❌</span><b>Sem SRP: RelatorioDesempenho</b>
• calcula a média <span class="muted">(coordenação)</span><br>
• monta o HTML <span class="muted">(comunicação)</span><br>
• envia o e-mail <span class="muted">(infraestrutura)</span><br>
➜ <strong>três motivos</strong> para mudar; testar a média <strong>envia e-mail</strong>
</div>
<div class="card">
<span class="ico">✅</span><b>Com SRP: classes coesas</b>
• <code>CalculadoraDesempenho</code><br>
• <code>FormatadorRelatorioHtml</code><br>
• <code>EnvioRelatorioDesempenho</code> coordena<br>
➜ o cálculo é testado <strong>isoladamente</strong>, com <code>MEDIA_APROVACAO</code> explícita
</div>
</div>

<div class="callout">"Um módulo deve ser responsável por <strong>um, e apenas um, ator</strong>" (Martin, 2019). A pergunta certa é: <strong>quem pede as mudanças?</strong></div>

<!--
🎤 **Fala do Professor:**

"O SRP costuma ser resumido como 'uma classe deve fazer uma única coisa', mas essa leitura é imprecisa, porque toda classe faz várias coisas em algum nível de detalhe. O que importa é quem pede as mudanças: se a coordenação pedagógica pede para mudar a fórmula da média e o setor de comunicação pede para mudar o layout do relatório, essas duas mudanças não deveriam tocar a mesma classe. É o que acontece no lado esquerdo: o RelatorioDesempenho calcula, formata e envia, então tem três motivos para mudar, e para testar a média você acaba disparando um e-mail. Do lado direito, cada responsabilidade virou uma classe coesa, e de brinde a média de aprovação deixou de ser um número escondido no meio do código e virou uma constante com nome. Aniche relaciona esse princípio à coesão: uma classe coesa cuida de um único conceito do sistema, e é muito mais fácil de entender, testar e reaproveitar."
-->

---

<!-- _class: dense -->

# 🔌 OCP: novos descontos sem mexer no que funciona

```php
interface Desconto {                                     // a abstração
    public function aplicar(float $valor): float;
}
final class DescontoPercentual implements Desconto {     // cada desconto é uma classe
    public function __construct(private float $percentual) {}
    public function aplicar(float $valor): float {
        return round($valor * (1 - $this->percentual / 100), 2);
    }
}
final class CalculadoraMensalidade {                     // fechada para modificação
    public function calcular(float $valor, Desconto ...$descontos): float {
        foreach ($descontos as $d) { $valor = $d->aplicar($valor); } // aplica um a um
        return $valor;                                   // convênio 20% + pontualidade 5%: 1200 ➜ 912
    }
}
```

<div class="note">📌 <strong>O que demonstra:</strong> <strong>antes</strong>, um <code>switch</code> com <code>'BOLSA_INTEGRAL'</code>, <code>'CONVENIO'</code>, <code>'PONTUALIDADE'</code>... crescia a cada desconto novo. <strong>Agora</strong>, o "desconto para irmãos" é <strong>uma classe nova</strong> que implementa <code>Desconto</code>, e os descontos ainda podem ser <strong>combinados</strong>.</div>

<!--
🎤 **Fala do Professor:**

"O Princípio Aberto/Fechado, formulado originalmente por Bertrand Meyer, diz que um módulo deve estar aberto para extensão, mas fechado para modificação: deve ser possível acrescentar comportamento escrevendo código novo, sem alterar o código já testado. O sintoma clássico de violação é um if ou um switch que cresce a cada regra nova, como a calculadora de mensalidades que tinha um case para bolsa integral, outro para convênio, outro para pontualidade, e amanhã teria para irmãos e ex-alunos. Na versão refatorada, a calculadora só conhece a interface Desconto e aplica um desconto após o outro. Quando a faculdade criar um desconto novo, alguém escreve uma classe nova e a calculadora nem fica sabendo; e ainda ganhamos a possibilidade de combinar descontos, que era difícil no switch. Façam a conta do comentário: 1.200 reais com 20% de convênio vira 960, e com mais 5% de pontualidade chega a 912."
-->

---

# 🔄 LSP e ✂️ ISP: contratos confiáveis

<div class="cols">
<div class="card">
<span class="ico">🔄</span><b>Substituição de Liskov</b>
❌ <code>NotificadorSms</code> lança exceção acima de <strong>160 caracteres</strong>: exige mais que a classe-mãe.<br>
✅ divide a mensagem em partes e <strong>cumpre a promessa</strong> da superclasse.<br>
🚩 Sinal: <code>if ($n instanceof NotificadorSms)</code>
</div>
<div class="card">
<span class="ico">✂️</span><b>Segregação de Interfaces</b>
❌ <code>RepositorioAcademico</code> com listar, salvar, excluir, <strong>exportarPdf</strong>, <strong>importarPlanilha</strong>.<br>
✅ <code>LeituraRepositorio</code>, <code>EscritaRepositorio</code>, <code>ExportadorPdf</code>.<br>
🚩 Sinal: métodos <strong>vazios</strong> ou que lançam exceção
</div>
</div>

<div class="note">💡 Herança deve modelar <strong>comportamento compatível</strong>, não só uma relação "é um" do mundo real: o quadrado é um retângulo na matemática, mas não no código.</div>

<!--
🎤 **Fala do Professor:**

"Os dois próximos princípios tratam de contratos. O de Liskov, formulado por Barbara Liskov em 1987, diz que uma subclasse deve poder substituir a superclasse sem quebrar o programa, ou seja, não pode exigir mais nem entregar menos do que ela promete. O NotificadorSms que recusa mensagens com mais de 160 caracteres quebra essa promessa, e o sinal de alerta é o programador começar a perguntar 'que tipo de objeto é este?' com instanceof; a correção é dividir a mensagem em partes. Já o ISP diz que ninguém deve depender de métodos que não usa: um repositório somente leitura de um sistema legado não deveria ser obrigado a implementar salvar ou importar planilha. A correção é dividir o contrato em interfaces menores, como leitura e escrita, para que cada classe implemente só o que faz sentido para ela. Interfaces pequenas também deixam os testes mais simples, porque o objeto falso precisa implementar poucos métodos."
-->

---

# 🔃 DIP: a regra não depende do detalhe

<div class="cols">
<div class="card">
<span class="ico">❌</span><b>Sem inversão</b>
O <code>MatriculaService</code> faz<br><code>new MySqlMatriculaRepository()</code><br>
• migrar para PostgreSQL ➜ <strong>alterar o service</strong><br>
• testar sem banco ➜ <strong>impossível</strong>
</div>
<div class="card">
<span class="ico">✅</span><b>Com inversão</b>
O service declara no construtor<br><code>MatriculaRepositoryInterface</code><br>
• a implementação é escolhida <strong>fora dele</strong><br>
• testes com repositórios <strong>em memória</strong>
</div>
</div>

<div class="callout">Módulos de <strong>alto nível</strong> (regras) e de <strong>baixo nível</strong> (banco, e-mail) dependem de <strong>abstrações</strong>: o detalhe passa a depender da regra, e não o contrário.</div>

<!--
🎤 **Fala do Professor:**

"O último princípio é o da Inversão de Dependência, que diz que módulos de alto nível não devem depender de módulos de baixo nível, e que ambos devem depender de abstrações. Alto nível é onde moram as regras de negócio, como o serviço de matrícula; baixo nível são os detalhes técnicos, como o MySQL ou o envio de e-mail. No lado esquerdo, o service cria o repositório concreto com new, e isso o amarra ao MySQL: se a faculdade migrar de banco, ou se quisermos testar sem banco, teremos de mexer na regra de negócio. No lado direito, o service só pede uma interface, e quem escolhe a implementação é alguém de fora. A dependência foi invertida: agora é o detalhe que se adapta à regra, e é isso que permite trocar peças sem medo. Esse mesmo desacoplamento explica por que Express, ASP.NET Core, Spring Boot, Django e Laravel, mesmo em linguagens diferentes, organizam as aplicações com ideias tão parecidas."
-->

---

# 👃 Maus cheiros e refatoração

| Mau cheiro | Como aparece no back-end | Remédio |
|---|---|---|
| **Função longa** | `store()` com centenas de linhas | SRP · extrair função |
| **Classe grande** | controller ou service que faz "tudo" | SRP · extrair classe |
| **Código duplicado** | mesma regra de situação em vários controllers | extrair função |
| **Switches repetidos** | `if`/`switch` por tipo espalhado | OCP · polimorfismo |
| **Lista longa de parâmetros** | métodos com seis ou mais argumentos | DTO · objeto de parâmetro |

<div class="callout"><strong>Refatorar</strong> é mudar a estrutura interna <strong>sem alterar o comportamento observável</strong> (Fowler, 2019): em <strong>pequenos passos</strong>, rodando os <strong>testes</strong> a cada passo.</div>

<!--
🎤 **Fala do Professor:**

"Na vida real, raramente vocês vão aplicar SOLID num projeto novinho: quase sempre vão encontrar um código que já existe e precisa melhorar sem quebrar o que funciona. Esse processo se chama refatoração, e o Fowler define bem: mudar a estrutura interna para deixar o código mais fácil de entender e mais barato de alterar, sem mudar o comportamento observável. Refatorar não é corrigir bug nem criar funcionalidade, e por isso depende de testes automatizados que confirmem, a cada passo, que nada quebrou. Para saber onde mexer, usamos os maus cheiros da tabela, como a função longa, a classe que faz tudo e o código duplicado. Por exemplo, a regra de 'Aprovado, Reprovado ou Em andamento' copiada em vários controllers vira um método situacao() no model Matricula, extraído em passos pequenos e com os testes rodando a cada passo."
-->

---

# 💉 Injeção de dependência e inversão de controle

<div class="flow">
  <div class="step">📦 Service Container</div>
  <div class="arrow">➜</div>
  <div class="step">Aluno&shy;Controller</div>
  <div class="arrow">➜</div>
  <div class="step">CadastroAluno&shy;Service</div>
  <div class="arrow">➜</div>
  <div class="step fill">EloquentAluno&shy;Repository</div>
</div>

- A classe **declara** o que precisa no **construtor**; alguém de fora **entrega pronto**
- O container monta a cadeia **recursivamente**; você só faz o `bind` da interface
- **Tempo de vida:** `bind` (novo a cada uso), `singleton` (um só), `scoped` (um por requisição)
- Nos testes, entra um **fake em memória** e o service **não muda nada**

<div class="note">💡 <strong>DIP</strong> é o princípio; <strong>injeção de dependência</strong> é a técnica; <strong>IoC</strong> é o framework, e não o seu código, controlar a criação dos objetos.</div>

<!--
🎤 **Fala do Professor:**

"Se as classes não criam mais suas dependências com new, alguém precisa criá-las e entregá-las prontas, e essa técnica se chama injeção de dependência. Pensem num cirurgião: ele não fabrica o bisturi antes de cada operação, recebe o instrumento pronto e esterilizado da equipe, e o instrumento pode ser trocado sem que ele mude o jeito de operar. No Laravel, quem faz o papel da equipe é o Service Container: quando a rota aponta para o AlunoController, ele percebe que o construtor exige um CadastroAlunoService, que exige um AlunoRepositoryInterface, e monta toda a cadeia sozinho; nós só dizemos, no AppServiceProvider, qual implementação usar para cada interface. O maior benefício aparece nos testes: trocamos o banco por um repositório em memória e testamos a regra do e-mail duplicado em milissegundos. Um cuidado com o tempo de vida: um singleton que guarda dados do usuário atual pode vazar informação entre requisições."
-->

---

# 🍽️ Arquitetura no dia a dia

| Conceito | No dia a dia | Na API acadêmica |
|---|---|---|
| **Camadas** | balcão, setor responsável e arquivo da secretaria | Controller, Service, Repository |
| **SRP** | o professor não emite boleto nem limpa a sala | média, layout e envio em classes separadas |
| **OCP** | tomada padrão: aparelho novo, **mesma tomada** | novo desconto = nova classe `Desconto` |
| **DIP** | o motorista depende da **habilitação**, não de um carro | service depende da **interface** |
| **Injeção de dependência** | o cirurgião **recebe** o bisturi pronto | o container entrega o repositório |

<div class="note">💡 Se uma classe precisa de <strong>dependências demais</strong> no construtor, desconfie: ela provavelmente acumula responsabilidades e <strong>viola o SRP</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vamos trazer tudo isso para o cotidiano, porque assim os princípios param de parecer abstratos. As camadas são a secretaria com balcão, setor responsável e arquivo; o SRP é o professor que dá aula, mas não emite boleto nem limpa a sala; e o OCP é a tomada padrão, porque você compra um aparelho novo e não precisa refazer a instalação elétrica. O DIP é o motorista que depende de saber dirigir, e não de um carro específico, e a injeção de dependência é o cirurgião que recebe o bisturi pronto. Reparem na dica da nota, que é um ótimo termômetro prático: quando o construtor de uma classe começa a pedir seis, sete dependências, é sinal de que ela está fazendo coisas demais. A boa prática do e-book é sempre injetar pelo construtor com private readonly, justamente para deixar isso visível."
-->

---

# 🌍 Aplicação em sistemas reais

<div class="cards">
  <div class="card"><span class="ico">🏚️</span><b>Sistema legado</b>controller de <strong>1.500 linhas</strong> refatorado em Repository, Service e classes de desconto, com testes a cada extração</div>
  <div class="card"><span class="ico">💳</span><b>Pagamentos</b>novos meios de pagamento como <strong>novas classes</strong> de uma mesma interface (OCP)</div>
  <div class="card"><span class="ico">📲</span><b>Notificações</b>trocar e-mail por WhatsApp mudando só o <strong>bind</strong> da <code>NotificadorInterface</code></div>
</div>

<div class="flow">
  <div class="step">Protótipo<br><span class="muted">tudo na rota</span></div>
  <div class="arrow">➜</div>
  <div class="step">Controller<br>+ Model</div>
  <div class="arrow">➜</div>
  <div class="step">Surgiram regras?<br><span class="muted">Service</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">Consulta reutilizada?<br>Repository</div>
</div>

<div class="note">💡 <strong>Comece simples.</strong> Um service que só repassa <code>$repositorio->listar()</code> é burocracia: extraia camadas quando a <strong>complexidade justificar</strong>.</div>

<!--
🎤 **Fala do Professor:**

"No mercado, esses conceitos aparecem o tempo todo. O caso do e-book é clássico: você é contratado para manter um sistema acadêmico com um MatriculaController de 1.500 linhas e nenhum teste, e em vez de reescrever tudo, extrai o repositório, depois o service com interfaces, troca o switch de descontos por classes e escreve testes a cada passo, até o controller ficar com algumas dezenas de linhas. Em sistemas de pagamento, cada novo meio de pagamento vira uma nova classe; e em notificações, trocar e-mail por WhatsApp pode ser só uma linha no container. O fluxo de baixo mostra como um endpoint evolui naturalmente, da rota com SQL ao controller com model e, só quando surgem regras e reaproveitamento, ao service e ao repositório. Atenção à nota: arquitetura deve reduzir complexidade, não criar classes vazias que só repassam chamadas. Não existe uma versão certa em absoluto: o ponto de partida deve ser o mais simples possível, e a estrutura evolui quando o problema pedir."
-->

---

# 🧾 Síntese dos conceitos

<div class="cols">
<div>

1. **MVC** separa dados, apresentação e controle
2. Em **APIs**, a **View** é a representação em **JSON**
3. **Controller** (HTTP) ➜ **Service** (regras) ➜ **Repository** (dados)
4. **Middlewares** atuam antes e depois do controller

</div>
<div>

1. **SOLID** existe para reduzir o **custo de mudança**
2. **Maus cheiros** indicam onde refatorar
3. **Refatorar** = pequenos passos + **testes**
4. **Injeção de dependência** torna o código **testável**

</div>
</div>

<div class="callout">Código bom não é o que <strong>funciona hoje</strong>: é o que continua <strong>fácil de mudar amanhã</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vamos amarrar a aula. Na coluna da esquerda está a arquitetura: o MVC separa modelo, visão e controle; nas APIs, a visão é o JSON; e, para sistemas maiores, dividimos a aplicação em Controller, Service e Repository, com os middlewares cuidando do que acontece antes e depois do controller. Na coluna da direita está o design do código: os princípios SOLID servem para reduzir o custo de mudança, os maus cheiros mostram onde mexer, a refatoração acontece em pequenos passos protegidos por testes, e a injeção de dependência é o que permite trocar peças e testar regras sem banco de dados. E lembrem que aplicar os princípios em excesso, criando interfaces para classes que nunca terão outra implementação, também gera complexidade; o bom senso profissional está em reconhecer o sinal e aplicar o princípio certo quando o problema aparece. Se vocês lembrarem de uma frase só, que seja a do callout: código bom é o que continua fácil de mudar amanhã."
-->

---

# 📝 Reflexão

<div class="cols-60">
<div>

### 🧩 Desafio: aplique o DIP

```php
class MatriculaService {
    public function __construct(
        private readonly ________ $matriculas, // interface ou classe concreta?
    ) {}
}

// app/Providers/AppServiceProvider.php
$this->app->____(                            // bind, singleton ou scoped?
    MatriculaRepositoryInterface::class,
    EloquentMatriculaRepository::class,
);
```

</div>
<div>

### 💬 Reflita

1. No seu último projeto, qual classe tinha **mais de um motivo** para mudar?
2. Quando criar um **Service** é burocracia, e não arquitetura?
3. Como testar a regra de **vagas esgotadas** sem um **banco de dados**?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fechar, um desafio: completem o MatriculaService para que ele dependa de uma abstração, e não de uma classe concreta, e decidam qual tempo de vida faz sentido para o repositório no container, lembrando que um repositório sem estado pode ser criado a cada uso. Depois, pensem nas três perguntas da direita, principalmente na segunda, porque saber quando não criar uma camada é tão importante quanto saber criá-la. Na próxima aula, vamos aplicar toda essa estrutura na construção de uma API RESTful de verdade: recursos, URIs, verbos, códigos de status, tratamento de erros, validação e DTOs, deixando o nosso controller ainda mais enxuto. Até lá, leiam as seções 2.1 a 2.5 do e-book, com atenção especial ao Quadro 17, que resume os princípios SOLID, e escolham um projeto antigo de vocês para caçar maus cheiros. Bons estudos e até a próxima!"
-->