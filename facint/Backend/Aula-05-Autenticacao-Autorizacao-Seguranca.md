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

  .bigo { gap: 16px; }
  .bigo .card { position: relative; padding: 12px 18px 12px 70px; font-size: 0.72em; }
  .bigo .card .ico { position: absolute; left: 16px; top: 14px; font-size: 1.8em; }
  .bigo .card .js { display: block; margin-top: 6px; color: var(--muted); font-size: 0.9em; }

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

<span class="tag">Desenvolvimento Back-End · Unidade V</span>

# Autenticação, Autorização e Segurança

<div class="line"></div>

## Protegendo a API acadêmica em camadas

OWASP · JWT · RBAC · Hash · CORS · Rate limiting · Logs

<!--
🎤 **Fala do Professor:**

"Sejam bem-vindos à nossa quinta e última aula. Ao longo da disciplina, construímos uma API acadêmica organizada em camadas, com rotas REST e dados persistidos com segurança no banco. Agora vamos tratar de um tema que nenhum desenvolvedor back-end pode ignorar: a segurança. A nossa API guarda nomes, e-mails, notas e matrículas. De nada adianta uma arquitetura elegante se qualquer pessoa conseguir ver as notas de qualquer aluno. Além do prejuízo às pessoas, falhas desse tipo podem gerar sanções previstas na LGPD e abalar a confiança de toda a comunidade que usa o sistema. A boa notícia é que a maioria das vulnerabilidades conhecidas pode ser evitada com práticas bem estabelecidas. Hoje vamos aprender a pensar como um atacante para defender melhor a nossa aplicação."
-->

---

# 🎯 Objetivos de aprendizagem

<div class="cards">
  <div class="card"><span class="ico">🛡️</span><b>Identificar</b>as principais vulnerabilidades do OWASP Top 10:2025</div>
  <div class="card"><span class="ico">🪪</span><b>Diferenciar</b>autenticação de autorização, e 401 de 403</div>
  <div class="card"><span class="ico">🎟️</span><b>Explicar</b>sessões, JWT, refresh tokens e MFA</div>
  <div class="card"><span class="ico">👥</span><b>Aplicar</b>o controle de acesso por papéis (RBAC) com policies</div>
  <div class="card"><span class="ico">🔐</span><b>Distinguir</b>hash de criptografia no armazenamento de dados</div>
  <div class="card"><span class="ico">🧱</span><b>Relacionar</b>CORS, rate limiting e logs à defesa em camadas</div>
</div>

<!--
🎤 **Fala do Professor:**

"Estes são os objetivos da aula. Vamos começar pelas vulnerabilidades mais comuns em aplicações web, segundo a OWASP. Depois, vamos separar duas perguntas que muita gente confunde: quem é você e o que você pode fazer. Veremos como manter o usuário autenticado com tokens, como organizar permissões por papéis, como guardar senhas corretamente e quais proteções atuam antes mesmo de a requisição chegar ao controller. No final, vamos juntar tudo numa visão de segurança em camadas."
-->

---

# 💡 Basta trocar um número na URL?

<div class="cols-60">
<div>

Uma auditoria descobriu que, alterando o id em `/api/v1/matriculas/{id}`, um aluno **via as notas dos colegas**.

- O login aceitava **tentativas ilimitadas**
- Os logs **não registravam** quem acessou o quê
- O usuário estava **autenticado**, mas ninguém verificou se **podia** ver aquele dado

</div>
<div>

<div class="card"><b>Analogia</b>Ter o <strong>crachá</strong> da empresa não significa poder entrar na <strong>sala da diretoria</strong>. Cada porta precisa da sua própria verificação.</div>

</div>
</div>

<div class="callout">Segurança não é uma etapa final: é uma <strong>qualidade construída</strong> ao longo de todo o desenvolvimento.</div>

<!--
🎤 **Fala do Professor:**

"Vamos começar com um caso que está no e-book. Numa auditoria interna, a equipe descobriu que bastava trocar o número na URL de matrículas para ver as notas de outros alunos. Além disso, o login aceitava tentativas ilimitadas e os logs não registravam quem tinha acessado cada matrícula. Reparem que o aluno estava autenticado: o sistema sabia quem ele era. O problema é que ninguém perguntou se ele podia ver aquele dado específico. É como ter o crachá da empresa e conseguir abrir qualquer porta, inclusive a da diretoria. Ao longo da aula, vamos ver exatamente quais controles corrigem cada um desses problemas. E fiquem com esta ideia: segurança não é algo que se coloca no final, é algo construído desde o início."
-->

---

# 🛡️ OWASP Top 10:2025

<div class="cols">
<div>

| Código | Categoria |
|---|---|
| **A01** | Controle de acesso quebrado |
| **A02** | Configuração insegura |
| **A03** | Cadeia de suprimentos |
| **A04** | Falhas criptográficas |
| **A05** | Injeção |

</div>
<div>

| Código | Categoria |
|---|---|
| **A06** | Design inseguro |
| **A07** | Falhas de autenticação |
| **A08** | Falhas de integridade |
| **A09** | Falhas de log e alerta |
| **A10** | Tratamento inadequado de exceções |

</div>
</div>

<div class="note">📦 <strong>A03 na prática:</strong> rode <code>composer audit</code> no pipeline, versione o <code>composer.lock</code> e use o Dependabot para receber correções de segurança.</div>

<!--
🎤 **Fala do Professor:**

"A OWASP é uma fundação sem fins lucrativos que produz materiais abertos sobre segurança. Seu documento mais famoso é o Top 10, a lista das categorias de risco mais críticas em aplicações web, montada a partir de dados de milhares de aplicações. Na versão de 2025, o controle de acesso quebrado continua em primeiro lugar, exatamente o problema do nosso caso de abertura. Reparem que muitos itens já foram tratados nas unidades anteriores: configuração por ambiente na Unidade I, validação e tratamento de exceções na Unidade III, consultas parametrizadas na Unidade IV. Um destaque é a cadeia de suprimentos: nossa aplicação depende de dezenas de pacotes, e uma falha em qualquer um deles nos atinge. Por isso, o composer audit deve rodar automaticamente a cada alteração. Usem essa lista como checklist ao revisar código. Vejam também o A02, configuração insegura: deixar APP_DEBUG ligado em produção expõe a pilha de erros, com caminhos de arquivos e até trechos de configuração. É o tipo de descuido simples que um atacante procura primeiro."
-->

---

# 💉 Injeção de SQL

```php
// ❌ VULNERÁVEL: o valor do usuário é concatenado ao SQL
$usuario = DB::select("SELECT * FROM users WHERE email = '$email'");
// Com o valor:  qualquer' OR '1'='1   → a consulta devolve TODOS os usuários

// ✅ SEGURO: consultas parametrizadas
$usuario = DB::select('SELECT * FROM users WHERE email = ?', [$email]);
$usuario = User::where('email', $email)->first();        // ORM

// ⚠️ Cuidado com métodos "raw": use sempre os parâmetros
User::whereRaw('lower(email) = ?', [$email]);
```

<div class="note">📌 <strong>O que demonstra:</strong> dados do usuário <strong>nunca</strong> devem ser concatenados a comandos. Escapar caracteres funciona, mas depende de nunca esquecer: a OWASP recomenda <strong>consultas parametrizadas</strong>.</div>

<!--
🎤 **Fala do Professor:**

"A injeção acontece quando um dado do usuário é interpretado como parte de um comando. Este exemplo é apenas educacional, para vocês reconhecerem o padrão. Se o e-mail for concatenado ao SQL, um atacante pode digitar um texto que fecha as aspas e acrescenta a condição um igual a um, que é sempre verdadeira. Resultado: a consulta devolve todos os usuários. Antigamente, a defesa era escapar aspas e apóstrofos, como descreve o Bento, citado no e-book. Funciona, mas basta esquecer um único campo. Por isso a recomendação atual é usar consultas parametrizadas, que vimos na aula passada. ORM e Query Builder já fazem isso por padrão. O cuidado fica com os métodos raw: se precisar deles, use os parâmetros que eles aceitam. A regra vale para SQL, comandos do sistema e qualquer expressão."
-->

---

# 🧪 XSS, exposição e atribuição em massa

<div class="cards">
  <div class="card"><span class="ico">📜</span><b>XSS</b>Um <code>&lt;script&gt;</code> salvo numa "observação" roda no navegador de <strong>outro usuário</strong>.<br><br><strong>Defesa:</strong> escapar a saída (<code>{{ }}</code> no Blade) e responder sempre JSON</div>
  <div class="card"><span class="ico">🔓</span><b>Exposição de dados</b>Devolver o model <code>User</code> inteiro pode vazar o <strong>hash da senha</strong> e tokens.<br><br><strong>Defesa:</strong> <code>$hidden</code> no model e <strong>API Resources</strong> com campos explícitos</div>
  <div class="card"><span class="ico">📥</span><b>Atribuição em massa</b><code>User::create($request->all())</code> aceita até um campo de <strong>papel de administrador</strong>.<br><br><strong>Defesa:</strong> <code>$fillable</code> e <code>$request->validated()</code></div>
</div>

<div class="callout">Princípio comum: a API só <strong>aceita</strong> e só <strong>devolve</strong> o que foi <strong>declarado explicitamente</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Três falhas que aparecem muito em APIs. O XSS acontece quando a aplicação devolve ao navegador um código JavaScript enviado por um atacante. Imaginem um campo de observação na matrícula com uma tag script: se o portal exibir esse texto sem tratamento, o script roda no navegador do coordenador. A exposição de dados acontece quando a API devolve mais do que deveria, como o model User inteiro, com o hash da senha. E a atribuição em massa acontece quando gravamos tudo o que chegou na requisição, inclusive um campo que transforma o usuário em administrador. Reparem que as três defesas seguem o mesmo princípio: a API só aceita e só devolve o que foi declarado explicitamente. Os API Resources da Unidade III e o método validated dos Form Requests são exatamente essas listas explícitas. E, no caso do XSS, lembrem que a defesa é compartilhada: a API devolve JSON com o Content-Type correto, mas o front-end também precisa tratar a saída antes de exibi-la na tela."
-->

---

<!-- _class: dense -->

# 🚪 Controle de acesso quebrado (IDOR)

```php
// ❌ VULNERÁVEL: autenticado ≠ autorizado. GET /matriculas/1, /2, /3...
public function show(Matricula $matricula): MatriculaResource
{
    return new MatriculaResource($matricula);
}

// ✅ Policy: concentra a regra "quem pode ver esta matrícula?"
public function view(User $user, Matricula $matricula): bool
{
    return $user->hasRole('ADMIN')
        || $matricula->aluno->user_id === $user->id                    // dono
        || $matricula->disciplina->professor?->user_id === $user->id;  // professor da turma
}

// ✅ Controller corrigido: 403 Forbidden se a policy negar
Gate::authorize('view', $matricula);
```

<div class="note">📌 <strong>O que demonstra:</strong> toda rota que devolve ou altera dados precisa responder <strong>"este usuário pode acessar ESTE objeto?"</strong>. UUIDs dificultam adivinhar ids, mas <strong>não substituem</strong> a verificação.</div>

<!--
🎤 **Fala do Professor:**

"Este é o problema do nosso caso de abertura, e tem nome: IDOR, referência insegura e direta a objetos. A API verifica que o usuário está autenticado, mas não verifica se ele tem direito àquele objeto. Basta trocar o número na URL. A correção usa as Policies do Laravel: classes que concentram as regras de autorização de um model. A regra aqui é clara: pode ver a matrícula o administrador, o próprio aluno dono da matrícula ou o professor da turma. No controller, uma única linha, Gate authorize, consulta a policy e devolve 403 se a regra negar. Reparem: a correção tem poucas linhas, mas muda completamente o nível de proteção. E um alerta do e-book: usar identificadores difíceis de adivinhar, como UUIDs, ajuda, mas não substitui essa pergunta em cada rota. Por isso, revisar a autorização de cada endpoint deve fazer parte de toda revisão de código, e o ideal é ter um teste automatizado garantindo que um aluno recebe 403 ao tentar ver a matrícula de outro."
-->

---

# 🍪 CSRF e cabeçalhos de segurança

<div class="cols">
<div>

### CSRF
- O navegador envia **cookies automaticamente**
- Um site malicioso pode disparar uma ação **em nome do professor**
- **Defesas:** cookie `SameSite` e **token CSRF**
- APIs com `Authorization: Bearer` **não sofrem** o CSRF clássico

</div>
<div>

| Cabeçalho | Protege contra |
|---|---|
| `X-Content-Type-Options` | executar arquivos como script |
| `X-Frame-Options` | clickjacking |
| `Content-Security-Policy` | recursos de origens indevidas |
| `Strict-Transport-Security` | acesso sem HTTPS |

</div>
</div>

<div class="note">💡 Um <strong>middleware</strong> adiciona esses cabeçalhos a <strong>todas</strong> as respostas, sem que nenhum controller precise se preocupar.</div>

<!--
🎤 **Fala do Professor:**

"O CSRF, falsificação de requisição entre sites, explora um comportamento do navegador: ele envia automaticamente os cookies de um domínio em qualquer requisição para esse domínio. Imaginem um professor logado no portal que visita uma página maliciosa com um formulário oculto que altera uma nota. O navegador anexa o cookie e o servidor executa a ação como se fosse o professor. As defesas são o atributo SameSite nos cookies e os tokens CSRF, que o Laravel aplica automaticamente nas rotas web. A nossa API usa token no cabeçalho Authorization, que o navegador não envia sozinho, então não sofre o CSRF clássico. Outra camada são os cabeçalhos de segurança, que pedem ao navegador comportamentos mais restritivos, como só usar HTTPS. No e-book, eles são adicionados por um middleware, aplicado a todas as respostas."
-->

---

# 🪪 Autenticação × Autorização

<div class="cols-60">
<div>

| Aspecto | Autenticação | Autorização |
|---|---|---|
| Pergunta | **quem é você?** | **o que você pode fazer?** |
| Momento | primeiro | depois |
| Mecanismos | senha, token, MFA | papéis, policies |
| Falha gera | **401** Unauthorized | **403** Forbidden |
| Exemplo | login com e-mail e senha | só professores lançam notas |

</div>
<div>

<div class="card"><b>Analogia</b>Na portaria da empresa, o <strong>crachá</strong> prova quem você é. A <strong>catraca</strong> de cada andar decide se você pode entrar ali.</div>

</div>
</div>

<div class="callout">Primeiro <strong>identificar</strong>, depois <strong>permitir</strong>: não existe autorização sem autenticação.</div>

<!--
🎤 **Fala do Professor:**

"Agora vamos separar duas perguntas que muita gente mistura. Autenticação responde: quem é você? Autorização responde: o que você pode fazer? A autenticação vem sempre antes, porque não dá para decidir permissões sem saber quem é o usuário. A analogia do e-book é a portaria de uma empresa: o crachá prova quem você é, mas a catraca de cada andar decide se você pode entrar ali. E isso aparece nos códigos de status que vimos na Unidade III: uma falha de autenticação gera 401, ou seja, não sei quem você é; uma falha de autorização gera 403, ou seja, sei quem você é, mas você não pode fazer isso. Guardem essa diferença, porque ela cai em toda entrevista de back-end. Na nossa API, as duas verificações ficam em pontos bem definidos: um middleware cuida da autenticação, antes de qualquer controller, e as policies cuidam da autorização. Assim, nenhum controller precisa repetir essa lógica."
-->

---

# 🎟️ Sessão × JWT

| Critério | Sessão com cookie | JWT (Bearer) |
|---|---|---|
| Estado no servidor | **sim** (stateful) | **não**, para o access token (stateless) |
| Revogação imediata | simples: apagar a sessão | difícil: expiração curta ou lista de bloqueio |
| Escalar em vários servidores | exige armazenamento compartilhado (Redis) | natural |
| Clientes ideais | portal web no mesmo domínio | apps móveis, SPAs, integrações |
| Principal risco | CSRF | roubo do token |

<div class="note">🧭 Não há abordagem superior em todos os cenários. Na API acadêmica, consumida por <strong>apps e sistemas parceiros</strong>, usamos <strong>JWT com refresh token</strong>. No Laravel, o <strong>Sanctum</strong> oferece as duas opções.</div>

<!--
🎤 **Fala do Professor:**

"Depois do login, como o servidor lembra quem é o usuário nas próximas requisições? Existem duas abordagens. Na sessão, o servidor guarda um registro e envia ao navegador um cookie com o identificador; a cada requisição, consulta esse registro. É uma abordagem com estado, ótima para portais web tradicionais. Com token, o servidor emite um token assinado, que o cliente envia no cabeçalho Authorization; o servidor só confere a assinatura, sem consultar nada. É sem estado, alinhado ao REST e ideal para aplicativos móveis e integrações. A tabela mostra os trade-offs: a sessão é fácil de revogar, mas precisa de armazenamento compartilhado quando há vários servidores; o JWT escala naturalmente, mas é difícil de revogar. Como a nossa API atende aplicativos e parceiros, escolhemos JWT com refresh token."
-->

---

# 🧩 Anatomia de um JWT

<div class="flow">
  <div class="step">Header<br><span class="muted">algoritmo: HS256</span></div>
  <div class="arrow">·</div>
  <div class="step">Payload<br><span class="muted">sub, roles, iat, exp</span></div>
  <div class="arrow">·</div>
  <div class="step fill">Assinatura<br>header + payload + chave</div>
</div>

<div class="cards">
  <div class="card"><span class="ico">✍️</span><b>Integridade</b>Trocou <code>ALUNO</code> por <code>ADMIN</code> no payload? A assinatura <strong>não confere</strong> e o token é rejeitado.</div>
  <div class="card"><span class="ico">👀</span><b>Não é segredo</b>O payload é só <strong>codificado</strong> em Base64URL: <strong>qualquer pessoa</strong> consegue ler.</div>
  <div class="card"><span class="ico">⏳</span><b>Vida curta</b>Access token de <strong>~15 minutos</strong>, sempre com a claim <code>exp</code>.</div>
</div>

<div class="note">⚠️ Nunca coloque <strong>senhas ou dados sensíveis</strong> no payload. No servidor, aceite <strong>apenas o algoritmo esperado</strong>: bibliotecas antigas já aceitaram tokens com <code>alg: none</code>.</div>

<!--
🎤 **Fala do Professor:**

"O JWT, definido pela RFC 7519, tem três partes separadas por pontos. O header indica o algoritmo de assinatura. O payload traz as claims, as afirmações sobre o usuário: sub é o identificador, iat é o momento de emissão, exp é a expiração, e na nossa API incluímos também os papéis. A terceira parte é a assinatura, calculada a partir das duas primeiras e de uma chave secreta. Ela garante a integridade: se alguém trocar ALUNO por ADMIN, a assinatura deixa de conferir. Mas atenção, e esse é um erro comum: a assinatura não esconde nada. O payload é apenas codificado, e qualquer pessoa consegue ler. Por isso nunca colocamos dados sensíveis ali. E no servidor aceitamos apenas o algoritmo esperado, o que a biblioteca firebase php-jwt faz com a classe Key. Já aconteceu de bibliotecas antigas aceitarem tokens com o algoritmo none, ou seja, sem assinatura nenhuma, o que permitia falsificar a identidade de qualquer usuário. Esse é um exemplo do A08, falhas de integridade."
-->

---

# 🔄 Access token + refresh token

<div class="flow">
  <div class="step">Login<br><span class="muted">e-mail + senha</span></div>
  <div class="arrow">➜</div>
  <div class="step">Access <span class="muted">15 min</span><br>+ Refresh <span class="muted">7 dias</span></div>
  <div class="arrow">➜</div>
  <div class="step">Access expira<br><span class="muted">401</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">POST /auth/refresh<br>novo par de tokens</div>
</div>

<div class="cols">
<div>

- Refresh token **guardado no servidor**, só o **hash** (SHA-256)
- **Rotação:** cada uso invalida o anterior
- **Reuso** de um token antigo = **roubo** → revogar todos

</div>
<div>

<div class="note">🔒 No login, mensagem <strong>genérica</strong>: "Credenciais inválidas." Dizer "e-mail não encontrado" ajuda o atacante a descobrir contas.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Tokens curtos aumentam a segurança, porque um token roubado para de funcionar em poucos minutos. Mas pedir a senha a cada 15 minutos seria inviável. A solução é o refresh token: um segundo token, de longa duração, que serve apenas para obter um novo access token. Diferente do access token, o refresh token fica registrado no servidor, para poder ser revogado no logout. E, como é uma credencial, guardamos só o hash, assim como fazemos com senhas. A boa prática é a rotação: a cada uso, o refresh antigo é invalidado e um novo é emitido. Se alguém apresentar um token que já foi usado, é sinal de roubo, e todos os tokens daquele usuário são revogados. Reparem também no detalhe do login: a mensagem de erro é genérica, para não revelar quais e-mails existem no sistema."
-->

---

# 🔑 Senhas fortes e autenticação multifator

<div class="cols-60">
<div>

| Fator | O que é | Exemplos |
|---|---|---|
| **Conhecimento** | algo que você **sabe** | senha, PIN |
| **Posse** | algo que você **tem** | app autenticador (TOTP), chave física |
| **Inerência** | algo que você **é** | digital, reconhecimento facial |

</div>
<div>

<div class="card"><b>Recomendações atuais (NIST)</b>Senhas <strong>longas</strong> em vez de regras complexas, checagem contra <strong>senhas vazadas</strong> e nada de troca periódica sem motivo.</div>

</div>
</div>

<div class="note">💡 No Laravel: <code>Password::min(12)->uncompromised()</code>. Para <strong>administradores e professores</strong>, exigir o <strong>segundo fator</strong> no login.</div>

<!--
🎤 **Fala do Professor:**

"Mesmo com tudo isso, uma senha fraca ou reutilizada continua sendo um risco. As recomendações atuais do NIST, instituto de padrões dos Estados Unidos, vão contra o que muita gente imagina: preferem senhas longas a regras complexas de composição, que levam a padrões previsíveis. Também recomendam verificar se a senha aparece em listas de vazamentos e não exigir trocas periódicas sem motivo. No Laravel, a regra uncompromised faz essa verificação sem enviar a senha nem o hash completo. Para contas com mais privilégios, a proteção mais eficaz é a autenticação multifator, que combina fatores de categorias diferentes: algo que você sabe, algo que você tem e algo que você é. Assim, o vazamento de uma senha sozinho não basta para invadir a conta."
-->

---

# 👥 Autorização com RBAC

<div class="flow">
  <div class="step">Usuário<br><span class="muted">Profa. Ana</span></div>
  <div class="arrow">➜</div>
  <div class="step">Papel<br><span class="muted">PROFESSOR</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">Permissões<br>notas.lancar · disciplinas.ver</div>
</div>

| Ação | ADMIN | PROFESSOR | ALUNO |
|---|---|---|---|
| Gerenciar cursos e usuários | sim | não | não |
| Lançar notas | sim | **só nas suas turmas** | não |
| Ver notas | todas | das suas turmas | **só as próprias** |

<div class="note">🧭 <strong>Middleware de papel</strong> responde "é professor?"; <strong>policies e gates</strong> respondem "é professor <strong>desta</strong> turma?". <strong>Menor privilégio:</strong> negue por padrão e verifique sempre no back-end.</div>

<!--
🎤 **Fala do Professor:**

"Depois de saber quem é o usuário, precisamos decidir o que ele pode fazer. Configurar permissões usuário por usuário seria impossível numa instituição com milhares de pessoas. O RBAC, controle de acesso baseado em papéis, cria uma camada intermediária: as permissões ficam nos papéis, e os usuários recebem papéis. Quando um professor é contratado, basta dar a ele o papel PROFESSOR. Reparem na matriz: algumas regras dependem só do papel, mas outras dependem do objeto, como lançar notas apenas nas suas turmas. Por isso as duas técnicas trabalham juntas: o middleware de papel responde se o usuário é professor, e as policies e gates respondem se ele é professor daquela turma. O Gate before ainda permite dar ao administrador acesso a tudo, num único ponto. E duas regras de ouro: menor privilégio, e esconder um botão no front-end melhora a interface, mas não protege nada."
-->

---

# 🔐 Hash × criptografia

| Critério | Hash | Criptografia |
|---|---|---|
| Reversível? | **não** (mão única) | **sim**, com a chave |
| Uso típico | **senhas**, integridade | dados que precisam ser **lidos** (documento, telefone) |
| Algoritmos | bcrypt, Argon2id · SHA-256 | AES-256 (simétrica), RSA |
| No Laravel | `Hash::make()`, `Hash::check()` | cast `encrypted`, `Crypt::encryptString()` |

<div class="cols">
<div class="note">🐢 <strong>Lento de propósito:</strong> bcrypt custo 10 ≈ <strong>61 ms</strong>; SHA-256 ≈ <strong>0,0004 ms</strong>. Para o usuário, imperceptível; para a força bruta, <strong>inviável</strong>.</div>
<div class="note">🧂 <strong>Salt</strong> automático: senhas iguais geram hashes <strong>diferentes</strong>. A chave <code>APP_KEY</code> fica <strong>fora</strong> do repositório.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Guardar senha em texto puro é uma das falhas mais graves possíveis: se o banco vazar, todas as contas caem, inclusive em outros serviços, porque as pessoas reutilizam senhas. Para entender a solução, separem dois conceitos. Criptografia é reversível: com a chave, o dado volta ao original. Serve para dados que precisam ser lidos depois, como um documento. Hash é mão única: não dá para voltar. É o que usamos para senhas: no login, calculamos o hash da senha digitada e comparamos. Mas não serve qualquer hash. As medições do e-book mostram que o SHA-256 é mais de cem mil vezes mais rápido que o bcrypt, e rapidez aqui ajuda o atacante. Bcrypt e Argon2id são lentos de propósito e incluem o salt automaticamente. Para dados que precisam ser lidos, o Laravel cifra com AES-256 usando a APP_KEY."
-->

---

# 🚦 CORS, rate limiting e logs

<div class="cards">
  <div class="card"><span class="ico">🌐</span><b>CORS</b>Diz ao navegador <strong>quais origens</strong> podem chamar a API. Liste as origens confiáveis; nunca <code>'*'</code> em produção.<br><br><span class="muted">Não é autenticação: o curl ignora.</span></div>
  <div class="card"><span class="ico">⏱️</span><b>Rate limiting</b>Limita requisições por tempo. Excedeu? <strong>429 Too Many Requests</strong>. No login: chave por <strong>e-mail + IP</strong>.<br><br><span class="muted">Vários servidores? Contadores no Redis.</span></div>
  <div class="card"><span class="ico">📋</span><b>Logs e auditoria</b>Auditoria responde <strong>quem fez o quê, quando e de onde</strong>. Monitore picos de <strong>401, 403 e 429</strong>.<br><br><span class="muted">Logs só valem se alguém olhar.</span></div>
</div>

<div class="note">⚠️ <strong>Nunca</strong> registre senhas, tokens ou documentos completos nos logs: um log com dados sensíveis é um <strong>vazamento esperando para acontecer</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Estes três mecanismos atuam, em grande parte, antes de a requisição chegar ao controller. O CORS existe porque os navegadores bloqueiam, por padrão, que um script de uma origem leia respostas de outra. O servidor informa quais origens são confiáveis. Liberar todas com asterisco em produção é um erro, e lembrem que o CORS não é autenticação: só o navegador o respeita. O rate limiting limita quantas requisições um cliente faz por minuto e responde 429 quando o limite estoura; no login, ele é a principal defesa contra força bruta. E os logs registram o que aconteceu. A auditoria é um registro especial para ações sensíveis, como alterar uma nota. Mas logs só têm valor com monitoramento: um pico de respostas 401 no login pode ser um ataque em andamento. E nunca, jamais, registrem senhas ou tokens."
-->

---

# 🧱 Defesa em profundidade

<div class="flow">
  <div class="step">1 · HTTPS</div><div class="arrow">➜</div>
  <div class="step">2 · CORS</div><div class="arrow">➜</div>
  <div class="step">3 · Rate limit<br><span class="muted">429</span></div><div class="arrow">➜</div>
  <div class="step">4 · Autenticação<br><span class="muted">JWT · 401</span></div>
</div>

<div class="flow">
  <div class="step">5 · Autorização<br><span class="muted">RBAC · policy · 403</span></div><div class="arrow">➜</div>
  <div class="step">6 · Validação<br><span class="muted">Form Request</span></div><div class="arrow">➜</div>
  <div class="step">7 · Service<br><span class="muted">regras + transação</span></div>
</div>

<div class="flow">
  <div class="step">8 · Repository<br><span class="muted">SQL parametrizado</span></div><div class="arrow">➜</div>
  <div class="step fill">9 · Resource<br>só campos públicos</div>
</div>

<div class="callout">Nenhuma camada basta sozinha: se uma <strong>falhar</strong>, a próxima ainda <strong>impede o ataque</strong>. Logs e tratamento de exceções acompanham todo o fluxo.</div>

<!--
🎤 **Fala do Professor:**

"Este slide junta a disciplina inteira. Reparem no caminho de uma requisição na API acadêmica. Ela chega por HTTPS, passa pelo CORS, pelo rate limiting, pela autenticação e pela autorização. Só então é validada e chega ao controller. O service aplica as regras de negócio dentro de transações, o repositório acessa o banco com consultas parametrizadas e o Resource devolve apenas os campos públicos. Cada caixa corresponde a um tema que estudamos nas cinco unidades. Esse princípio se chama defesa em profundidade: nenhuma camada é suficiente sozinha, mas juntas elas fazem com que a falha de uma seja barrada pela próxima. E reparem que, no caso de abertura, a equipe corrigiu tudo sem mudar a arquitetura, justamente porque as responsabilidades estavam bem separadas em camadas."
-->

---

# 🧭 Segurança no dia a dia: analogias

<div class="cards c2 bigo">
  <div class="card"><b>Hash · Mão única</b><span class="ico">🍊</span>Do <strong>suco</strong> não dá para voltar à laranja. Mas dá para espremer outra e comparar o sabor.<span class="js">Laravel: <code>Hash::check()</code></span></div>
  <div class="card"><b>Criptografia · Reversível</b><span class="ico">🗝️</span>Um <strong>cofre</strong>: quem tem a chave abre e lê o conteúdo de volta.<span class="js">Laravel: cast <code>encrypted</code> + <code>APP_KEY</code></span></div>
  <div class="card"><b>Rate limiting</b><span class="ico">🏧</span>O <strong>caixa eletrônico</strong> bloqueia o cartão depois de três senhas erradas.<span class="js">Laravel: <code>throttle:login</code> → 429</span></div>
  <div class="card"><b>Defesa em profundidade</b><span class="ico">🏰</span>O <strong>castelo</strong> tem fosso, muralha, portão e guardas: vencer um obstáculo não basta.<span class="js">HTTPS → CORS → auth → policy → validação</span></div>
</div>

<div class="note">💡 Pergunta-chave: <strong>se eu fosse o atacante, por onde tentaria entrar, e qual camada me impediria?</strong></div>

<!--
🎤 **Fala do Professor:**

"Vamos trazer esses conceitos para o cotidiano. O hash é como fazer suco de laranja: do suco, ninguém volta à laranja. Mas, se eu espremer outra laranja, consigo comparar o resultado; é exatamente o que o login faz com a senha. A criptografia é um cofre: quem tem a chave abre e recupera o conteúdo. Por isso a chave precisa ficar longe do cofre, ou seja, a APP_KEY longe do repositório e dos backups. O rate limiting é o caixa eletrônico que bloqueia o cartão depois de três senhas erradas. E a defesa em profundidade é o castelo, com fosso, muralha, portão e guardas. Guardem a pergunta-chave: se eu fosse o atacante, por onde tentaria entrar, e qual camada me impediria? Pensar assim é uma das habilidades mais valorizadas num profissional de back-end. O e-book sugere um exercício divertido: assistir à série Mr. Robot com olhar defensivo e, em cada invasão, identificar qual categoria do OWASP está sendo explorada e qual controle desta aula teria impedido o ataque."
-->

---

# 🧾 Síntese dos conceitos

<div class="cols">
<div>

- **OWASP Top 10**: checklist das falhas mais críticas
- **Consultas parametrizadas** contra injeção
- Só aceitar e devolver o que é **declarado**
- **401** = quem é você? · **403** = você pode?

</div>
<div>

- **JWT curto** + **refresh** com rotação
- **RBAC + policies**: papel e propriedade do recurso
- **Hash** para senhas, **criptografia** para dados legíveis
- **CORS, rate limiting e logs** completam a defesa

</div>
</div>

<div class="callout">🧭 Segurança não é um recurso que se instala no final: é a soma de <strong>pequenas práticas consistentes</strong> em <strong>todas as camadas</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Vamos recapitular. Vimos o OWASP Top 10 como checklist e as principais falhas: injeção, XSS, exposição de dados, atribuição em massa e o campeão, o controle de acesso quebrado. Separamos autenticação de autorização, 401 de 403. Implementamos tokens JWT curtos com refresh tokens rotacionados, organizamos permissões com RBAC e policies, e entendemos por que senhas usam hash lento e dados legíveis usam criptografia. Por fim, CORS, rate limiting e logs completam a proteção. O e-book mostra que a maioria das falhas nasce de pequenos descuidos, que podem ser evitados com práticas simples e consistentes. Essa é a mensagem principal desta aula."
-->

---

# 📝 Reflexão

<div class="cols-60">
<div>

```php
// Desafio: encontre ao menos 5 falhas de segurança
// e indique a camada que corrigiria cada uma
Route::get('/v1/matriculas/{id}', function ($id) {
    $m = DB::select("SELECT * FROM matriculas WHERE id = $id");
    Log::info('consulta', ['senha' => request('senha')]);
    return $m;
});
```

</div>
<div>

### 💬 Reflita
1. Por que esconder um botão no front-end **não** é controle de acesso?
2. Quando você escolheria **sessão** em vez de **JWT**?
3. Por que um hash **rápido** é ruim para senhas?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fechar, analisem esta rota. Ela tem pelo menos cinco falhas. Pensem: há autenticação? Há verificação de que o usuário pode ver aquela matrícula? Como o SQL é montado? O que está sendo gravado no log? E o que está sendo devolvido ao cliente? Para cada falha, indiquem a camada do slide de defesa em profundidade que a corrigiria. Depois, respondam às três perguntas de reflexão. Para estudar, leiam as seções 5.1 a 5.5 do e-book, com atenção ao quadro do OWASP e ao caso das matrículas expostas. Esta foi a última aula da disciplina. Vocês agora conhecem o caminho completo de uma requisição, do HTTP ao banco, passando pela arquitetura, pelas APIs REST e pela segurança. Parabéns pela jornada, e até a próxima!"
-->