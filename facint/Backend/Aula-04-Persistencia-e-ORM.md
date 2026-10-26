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

<span class="tag">Desenvolvimento Back-End · Unidade IV</span>

# Persistência de Dados e ORM

<div class="line"></div>

## Dando memória durável à API acadêmica

SGBD · SQL · ORM · Migrations · Índices · Transações

<!--
🎤 **Fala do Professor:**

"Sejam bem-vindos à nossa quarta aula. Até aqui, nossa API acadêmica já recebe requisições, está organizada em camadas e responde no padrão REST. Mas falta uma coisa essencial: ela ainda precisa lembrar das coisas. Hoje vamos falar de persistência de dados: como a aplicação conversa com o banco, como o ORM traduz objetos em tabelas e como garantimos que os dados continuem corretos mesmo quando centenas de pessoas usam o sistema ao mesmo tempo."
-->

---

# 🎯 Objetivos de aprendizagem

<div class="cards">
  <div class="card"><span class="ico">🗄️</span><b>Compreender</b>o papel do SGBD, dos drivers, das conexões e dos pools</div>
  <div class="card"><span class="ico">🛡️</span><b>Explicar</b>por que prepared statements tornam as consultas seguras</div>
  <div class="card"><span class="ico">🔁</span><b>Diferenciar</b>SQL direto e ORM, Active Record e Data Mapper</div>
  <div class="card"><span class="ico">🔗</span><b>Identificar</b>chaves e relacionamentos 1:1, 1:N e N:N</div>
  <div class="card"><span class="ico">🗂️</span><b>Relacionar</b>migrations, seeders e índices à evolução do banco</div>
  <div class="card"><span class="ico">🔒</span><b>Analisar</b>transações ACID e problemas de concorrência</div>
</div>

<!--
🎤 **Fala do Professor:**

"Estes são os nossos objetivos. Ao final da aula, vocês devem conseguir explicar o caminho entre a aplicação e o banco, entender por que existe o ORM e quais cuidados ele exige, reconhecer os tipos de relacionamento e, principalmente, entender o que é uma transação e por que ela é indispensável em operações de negócio como uma matrícula. Reparem que o foco hoje é o porquê de cada coisa, e não decorar comandos. Os trechos de código que aparecerem servem apenas para ilustrar as ideias, e todos eles fazem parte da API acadêmica que estamos construindo desde a primeira unidade."
-->

---

# 💡 E se a API esquecesse tudo?

<div class="cols-60">
<div>

Imagine reiniciar a API acadêmica e descobrir que **todos os alunos, cursos e matrículas sumiram**.

- Dados só na memória **morrem** com o processo
- **Persistir** é armazenar de forma **durável**
- Mas persistir **não é só "salvar"**: os dados precisam continuar **corretos**

</div>
<div>

<div class="card"><b>Analogia</b>Anotar recados num quadro branco funciona… até alguém apagar o quadro. O banco de dados é o <strong>caderno de registros</strong> que sobrevive a falhas e reinicializações.</div>

</div>
</div>

<div class="callout">Persistência = <strong>durabilidade</strong> + <strong>correção</strong> sob concorrência, falhas e mudanças</div>

<!--
🎤 **Fala do Professor:**

"Pensem na seguinte situação: o servidor da API reinicia por causa de uma atualização e, quando volta, não existe mais nenhum aluno cadastrado. É exatamente o que aconteceria se os dados ficassem só na memória do programa. Por isso persistimos os dados, normalmente num banco de dados. Mas o e-book chama a atenção para um ponto importante: persistir não é apenas salvar. Os dados precisam continuar corretos quando muita gente acessa ao mesmo tempo, quando uma operação falha no meio do caminho ou quando a estrutura do banco precisa mudar. É sobre esses desafios que vamos conversar. E uma curiosidade: segundo a pesquisa do Stack Overflow de 2025, apresentada no e-book, PostgreSQL e MySQL são os bancos mais usados pelos desenvolvedores. Os bancos relacionais continuam no centro dos sistemas transacionais, e é com eles que vamos trabalhar hoje."
-->

---

# 🗄️ SGBD, driver e conexão

<div class="flow">
  <div class="step">Requisições<br><span class="muted">usuários da API</span></div>
  <div class="arrow">➜</div>
  <div class="step">Pool de conexões<br><span class="muted">reutiliza canais</span></div>
  <div class="arrow">➜</div>
  <div class="step">Driver<br><span class="muted">PDO + pdo_pgsql</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">SGBD<br>PostgreSQL / MySQL</div>
</div>

<div class="cards">
  <div class="card"><span class="ico">🗄️</span><b>SGBD</b>Processo separado que administra o banco e entende <strong>SQL</strong></div>
  <div class="card"><span class="ico">🔌</span><b>Driver</b>Traduz as chamadas da linguagem para o <strong>protocolo</strong> do banco</div>
  <div class="card"><span class="ico">♻️</span><b>Pool</b>Abrir conexão é <strong>caro</strong>: reutilizamos as que já existem</div>
</div>

<div class="note">🔐 Em produção: conexão <strong>cifrada</strong> (<code>sslmode=require</code>) e um usuário de banco <strong>só para a aplicação</strong>, com o mínimo de permissões.</div>

<!--
🎤 **Fala do Professor:**

"O banco de dados é administrado por um SGBD, como PostgreSQL ou MySQL, que roda como um processo separado da aplicação e se comunica com ela pela rede. Para conversar com ele, a aplicação usa um driver, uma biblioteca que conhece o protocolo daquele banco. No PHP, a camada padrão é o PDO, e o driver específico, como o pdo_pgsql, é carregado como extensão. Cada conversa acontece por uma conexão, e abrir uma conexão é caro: envolve rede, autenticação e recursos no servidor. Por isso usamos pools, que reaproveitam conexões. E dois cuidados de produção: cifrar a comunicação com o banco e nunca usar o usuário administrador na aplicação. Assim, se a aplicação tiver uma falha, o estrago fica limitado ao que aquele usuário pode fazer. Um detalhe interessante: em Java e Node.js, o pool fica dentro da própria aplicação, porque o processo continua rodando. No modelo tradicional do PHP-FPM, cada processo mantém sua conexão, e quando o número de processos cresce, usamos um pooler externo, como o PgBouncer. O princípio é o mesmo: conexões são recursos limitados e precisam ser reaproveitadas."
-->

---

# 🛡️ Consultas seguras: prepared statements

```php
// ❌ Vulnerável: o valor digitado vira PARTE do comando SQL
$sql = "SELECT id, ra FROM alunos WHERE curso_id = " . $_GET['curso'];

// ✅ Seguro: o comando e o valor viajam SEPARADOS até o banco
$stmt = $pdo->prepare('SELECT id, ra FROM alunos WHERE curso_id = :curso');
$stmt->execute(['curso' => (int) $_GET['curso']]);   // valor tratado só como dado

// No Laravel, a fachada DB e o Query Builder também usam parâmetros
$alunos = DB::select('SELECT id, ra FROM alunos WHERE curso_id = ?', [$cursoId]);
```

<div class="note">📌 <strong>O que demonstra:</strong> no prepared statement o banco compila o comando com <strong>marcadores</strong> (<code>:curso</code>, <code>?</code>) e só depois recebe os valores. Eles <strong>nunca</strong> são interpretados como código SQL.</div>

<!--
🎤 **Fala do Professor:**

"Uma query é um comando SQL enviado ao banco. Na primeira linha, o valor que veio da URL é colado diretamente no texto do SQL. Se alguém enviar um texto malicioso no lugar de um número, esse texto passa a fazer parte do comando. Esse é o caminho da injeção de SQL, que vamos aprofundar na próxima unidade. Na forma segura, o comando vai com um marcador de posição, o banco o prepara, e só depois recebe o valor, que é tratado sempre como dado. O Laravel faz isso por nós quando passamos os valores como parâmetros. A regra é simples: nunca concatene valores do usuário em SQL. Reparem também no cast para inteiro e na opção que desliga a emulação do preparo no PDO, que aparece no e-book: são camadas extras de cuidado. E vale um lembrete da Unidade I: os dados de conexão, como host, usuário e senha, nunca ficam no código. Eles vêm das variáveis de ambiente, e no Laravel são lidos pelo arquivo config/database.php."
-->

---

# 🧾 SQL essencial para o back-end

| Categoria | Finalidade | Comandos |
|---|---|---|
| **DDL** | definir a estrutura | `CREATE`, `ALTER`, `DROP` |
| **DML** | inserir, alterar e excluir | `INSERT`, `UPDATE`, `DELETE` |
| **DQL** | consultar dados | `SELECT` com `JOIN`, `WHERE` |
| **DCL** | conceder permissões | `GRANT`, `REVOKE` |
| **TCL** | controlar transações | `BEGIN`, `COMMIT`, `ROLLBACK` |

<div class="note">💡 O boletim do aluno é um <code>SELECT</code> com <strong>INNER JOIN</strong> entre <code>matriculas</code>, <code>alunos</code> e <code>disciplinas</code>. Frameworks geram SQL, mas <strong>é o SQL que chega ao banco</strong>, e é lendo-o que encontramos lentidões e erros.</div>

<!--
🎤 **Fala do Professor:**

"Mesmo com frameworks e ORMs, quem desenvolve back-end precisa ler e escrever SQL. Os comandos são agrupados por finalidade: DDL define a estrutura, DML altera os dados, DQL consulta, DCL cuida de permissões e TCL controla transações, que serão o grande tema do final da aula. No dia a dia de uma API, as consultas com JOIN são as mais comuns. O boletim de um aluno, por exemplo, junta três tabelas usando as chaves estrangeiras. Guardem esta ideia: nenhuma ferramenta substitui o entendimento do que acontece no banco. Quando uma tela da API fica lenta, a investigação quase sempre termina numa consulta SQL. Por isso, recomendo que vocês ativem o log de consultas do Laravel com DB listen e observem o SQL que o framework gera. É um exercício excelente para perder o medo do banco e entender o que está por trás de cada linha de código."
-->

---

# 🔁 ORM: traduzindo objetos em tabelas

<div class="cols-60">
<div>

Código **orientado a objetos** e banco **relacional** falam línguas diferentes: o **descompasso de impedância**.

| No código (objetos) | No banco (relacional) |
|---|---|
| Classe `Aluno` | Tabela `alunos` |
| Objeto | Linha |
| Atributo `ra` | Coluna `ra` |
| `$aluno->curso` | Chave estrangeira `curso_id` |

</div>
<div>

<div class="card"><b>Analogia</b>O ORM é um <strong>intérprete</strong>: você fala em objetos, ele traduz para SQL e devolve a resposta como objetos.</div>

<div class="note">No Laravel, o ORM é o <strong>Eloquent</strong>: <code>$aluno->curso->nome</code> navega entre tabelas sem SQL manual.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"No código trabalhamos com objetos, atributos e referências. No banco temos tabelas, linhas, colunas e chaves estrangeiras. Converter um no outro a cada consulta gera muito código repetitivo, e essa diferença tem nome: descompasso de impedância objeto-relacional. O ORM, mapeamento objeto-relacional, automatiza essa tradução: classe vira tabela, objeto vira linha, atributo vira coluna e associação vira chave estrangeira. No Laravel, esse papel é do Eloquent. Com os relacionamentos declarados, escrever aluno, seta, curso, seta, nome já devolve o nome do curso do aluno. Um detalhe para quem escreve em português: o Eloquent gera o nome da tabela pelo plural em inglês. Para o model Professor, ele procuraria a tabela professors, então precisamos informar explicitamente que a tabela é professores. Pequenos detalhes como esse mostram que é preciso conhecer as convenções da ferramenta que estamos usando."
-->

---

# ⚖️ Active Record × Data Mapper

| Critério | Active Record (Eloquent) | Data Mapper (Doctrine) |
|---|---|---|
| Quem grava os dados | a própria entidade: `$curso->save()` | um componente separado: `EntityManager` |
| Acoplamento ao ORM | **alto**: herda de `Model` | **baixo**: classe comum |
| Produtividade inicial | **alta** | média |
| Domínios complexos | média | **alta** |
| Onde aparece | Laravel, Ruby on Rails | Symfony, Hibernate, Entity Framework |

<div class="callout">Na API acadêmica, o melhor dos dois mundos: <strong>Eloquent</strong> pela produtividade, escondido atrás de <strong>interfaces de repositório</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Existem dois estilos principais de ORM. No Active Record, usado pelo Eloquent, cada objeto sabe salvar a si mesmo: basta chamar save. É simples e muito produtivo. No Data Mapper, usado pelo Doctrine, pelo Hibernate e pelo Entity Framework, a entidade é uma classe comum que nem sabe que existe um banco, e um componente separado faz a gravação. Isso dá mais código, mas isola melhor o domínio. Não existe padrão superior em todos os cenários. Na nossa API combinamos os dois: usamos o Eloquent, mas os services dependem de interfaces de repositório, como vimos na Unidade II, e não do Eloquent diretamente. Isso conversa com uma frase provocativa do Robert Martin, citada no e-book: do ponto de vista arquitetural, o banco é um detalhe, como a maçaneta é um detalhe da casa. Ele não diz que os dados são pouco importantes; diz que a tecnologia de armazenamento não deve ditar as regras do negócio."
-->

---

# 🐢 A armadilha do N+1

```php
// ❌ N+1: 1 consulta para os alunos + 1 consulta POR aluno para o curso
foreach (Aluno::all() as $aluno) {
    echo $aluno->curso->nome;          // 100 alunos → 101 consultas
}

// ✅ Eager loading: os cursos são carregados antecipadamente
foreach (Aluno::with('curso')->get() as $aluno) {
    echo $aluno->curso->nome;          // 100 alunos → apenas 2 consultas
}
```

<div class="cols">
<div class="note">📌 <strong>O que demonstra:</strong> o ORM esconde o SQL, e por isso pode gerar <strong>muitas consultas</strong> sem você perceber.</div>
<div class="note">🛠️ Em desenvolvimento, ative <code>Model::preventLazyLoading()</code> para o Laravel <strong>acusar</strong> o problema.</div>
</div>

<!--
🎤 **Fala do Professor:**

"Este é o erro de desempenho mais comum com ORMs. No primeiro laço, o ORM busca os alunos com uma consulta e, a cada volta, faz mais uma consulta para buscar o curso daquele aluno. Com 100 alunos, são 101 consultas. Por isso o nome N mais 1. A solução é o carregamento antecipado, o eager loading: com o método with, o Eloquent busca todos os cursos de uma vez, e o total cai para 2 consultas. Isso mostra que o ORM facilita, mas não substitui o conhecimento do banco. E há uma dica prática: em desenvolvimento, o Laravel pode avisar automaticamente quando isso acontecer. O Eloquent tem outros recursos que levam o trabalho para o banco: withCount conta registros relacionados numa subconsulta, sem carregar milhares de objetos, e chunkById processa grandes volumes em lotes, economizando memória. A ideia geral é: deixe o banco fazer o que ele faz melhor."
-->

---

# 🔗 Chaves e relacionamentos

<div class="cards">
  <div class="card"><span class="ico">👤</span><b>1:1 · Um para um</b>Cada <strong>usuário</strong> tem, no máximo, um cadastro de <strong>aluno</strong></div>
  <div class="card"><span class="ico">📚</span><b>1:N · Um para muitos</b>Um <strong>curso</strong> possui várias <strong>disciplinas</strong></div>
  <div class="card"><span class="ico">🔀</span><b>N:N · Muitos para muitos</b><strong>Alunos</strong> e <strong>disciplinas</strong>, ligados pela tabela <code>matriculas</code></div>
</div>

<div class="cols">
<div class="note"><strong>PK (chave primária):</strong> identifica cada linha de forma única, como o <code>id</code> do aluno.</div>
<div class="note"><strong>FK (chave estrangeira):</strong> guarda a PK de outra tabela e garante a <strong>integridade referencial</strong>.</div>
</div>

<div class="callout">Quando a tabela intermediária tem <strong>dados próprios</strong> (semestre, status, nota), ela vira uma <strong>entidade do negócio</strong>: <code>Matricula</code>.</div>

<!--
🎤 **Fala do Professor:**

"Toda tabela tem uma chave primária, que identifica cada linha. Os relacionamentos são feitos com chaves estrangeiras, que guardam a chave primária de outra tabela. Além de ligar os dados, a chave estrangeira impede, por exemplo, uma matrícula para um aluno que não existe. Pela cardinalidade, temos o 1 para 1, como usuário e aluno; o 1 para N, como curso e disciplinas; e o N para N, como alunos e disciplinas, que exige uma tabela intermediária. Reparem que a tabela matrículas guarda semestre, status e nota, então ela deixa de ser só uma ligação técnica e vira um conceito do negócio, com model próprio. Já a role_user, entre usuários e papéis, tem só as duas chaves e será usada na próxima unidade. E notem um ponto importante: essas regras ficam declaradas no próprio banco. Mesmo que um defeito no código tente gravar algo inválido, o banco recusa. Ele funciona como a última linha de defesa da integridade dos dados."
-->

---

# 🗂️ Migrations: esquema como código

<div class="flow">
  <div class="step">Arquivo<br><span class="muted">up() e down()</span></div>
  <div class="arrow">➜</div>
  <div class="step">Git<br><span class="muted">versionado</span></div>
  <div class="arrow">➜</div>
  <div class="step"><code>php artisan migrate</code><br><span class="muted">só as pendentes</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">Banco igual em<br>todos os ambientes</div>
</div>

<div class="cols">
<div>

- **Migrations** registram cada mudança de estrutura
- **Seeders** criam dados iniciais (papéis, cursos)
- **Factories** geram dados fictícios em volume

</div>
<div>

<div class="note">⚠️ <strong>Boa prática:</strong> nunca altere uma migration já executada em outro ambiente. Crie uma <strong>nova</strong>, como <code>add_vagas_to_disciplinas</code>.</div>

</div>
</div>

<div class="callout">Um comando recria o banco do zero, igual ao dos colegas: <strong>php artisan migrate:fresh --seed</strong></div>

<!--
🎤 **Fala do Professor:**

"Durante o desenvolvimento, a estrutura do banco muda o tempo todo. Se cada pessoa alterar o banco à mão, logo ninguém sabe qual é a estrutura certa. As migrations tratam o esquema como código: cada mudança é um arquivo versionado no Git, com um método up que aplica a alteração e um down que desfaz. O Laravel guarda numa tabela quais migrations já rodaram e executa só as pendentes. Nunca alterem uma migration que já rodou em outro ambiente; criem uma nova. E, junto com seeders e factories, qualquer pessoa da equipe recria um banco idêntico com um único comando, o que é essencial para testes e para receber novos colegas no projeto. Em produção, a implantação de uma nova versão inclui rodar as migrations pendentes, garantindo que o código e o banco evoluam juntos. E se algo der errado, o comando migrate rollback desfaz o último lote. Pensem nas migrations como o histórico de versões do banco, do mesmo jeito que o Git é o histórico do código."
-->

---

# 📖 Índices e desempenho

<div class="cols-60">
<div>

| Situação | Recomendação |
|---|---|
| Colunas em `WHERE` e `JOIN` frequentes | criar índice |
| Chaves estrangeiras | criar índice |
| Colunas únicas (e-mail, RA) | índice **único** |
| Tabelas pequenas | geralmente desnecessário |

</div>
<div>

<div class="card"><b>Analogia</b>O <strong>índice remissivo</strong> de um livro aponta direto para a página certa. Sem ele, o banco lê a tabela inteira: o <em>full table scan</em>.</div>

</div>
</div>

<div class="note">⚖️ Índices <strong>não são gratuitos</strong>: ocupam espaço e deixam as escritas mais lentas. Confirme sempre com <code>EXPLAIN</code> se a consulta usa o índice.</div>

<!--
🎤 **Fala do Professor:**

"Quando as tabelas crescem, a velocidade das consultas passa a depender dos índices. A analogia do e-book é ótima: o índice remissivo de um livro. Em vez de ler todas as páginas, você consulta uma lista ordenada que aponta para a página certa. Sem índice, o banco percorre a tabela inteira. Criamos índices para colunas usadas com frequência em WHERE e JOIN, para chaves estrangeiras e para colunas únicas, como o RA. Mas índice tem custo: ocupa espaço e precisa ser atualizado a cada escrita. Por isso a regra prática é medir. O comando EXPLAIN mostra o plano que o banco vai usar e é a principal ferramenta para investigar lentidões. Na nossa migration de matrículas, criamos um índice composto com disciplina e status, justamente porque a contagem de vagas faz essa consulta o tempo todo. Com o EXPLAIN, verificamos se o plano mostra uma busca pelo índice, e não a leitura sequencial da tabela inteira. Medir antes de otimizar é sempre a melhor estratégia."
-->

---

# 🗑️ Exclusão lógica (soft delete)

<div class="cols">
<div>

### ❌ Exclusão física
- `DELETE` remove a linha **para sempre**
- Perde o **histórico**
- Exclusão acidental **sem volta**

</div>
<div>

### ✅ Exclusão lógica
- Preenche a coluna **`deleted_at`**
- Consultas **ignoram** os excluídos
- Permite **auditar** e **restaurar**

</div>
</div>

<div class="note">⚠️ <strong>Atenção:</strong> restrições <code>unique</code> continuam valendo para os "excluídos". E a <strong>LGPD</strong> pode exigir a eliminação ou anonimização real de dados pessoais: aí o soft delete não basta.</div>

<!--
🎤 **Fala do Professor:**

"Em muitos sistemas, apagar definitivamente um registro não é desejável. Uma matrícula cancelada pode precisar ser consultada anos depois numa auditoria. A exclusão lógica resolve isso: em vez de remover a linha, preenchemos a coluna deleted_at, e o Eloquent passa a ignorar esses registros automaticamente, com a opção de restaurar depois. Mas há dois cuidados. As restrições de unicidade continuam valendo para os registros marcados. E a LGPD garante ao titular o direito de pedir a eliminação dos seus dados pessoais em certas situações; nesse caso, marcar como excluído não é suficiente: os dados precisam ser removidos ou anonimizados de verdade. Ou seja, a escolha entre exclusão física e lógica não é só técnica; ela também envolve regras de negócio e obrigações legais."
-->

---

# 🔒 Transações e propriedades ACID

<div class="flow">
  <div class="step">BEGIN</div>
  <div class="arrow">➜</div>
  <div class="step">Verificar vaga<br><span class="muted">+ inserir matrícula</span></div>
  <div class="arrow">➜</div>
  <div class="step">Decrementar<br><span class="muted">vagas</span></div>
  <div class="arrow">➜</div>
  <div class="step fill">COMMIT<br><span>ou ROLLBACK</span></div>
</div>

| Propriedade | Significado | Na matrícula |
|---|---|---|
| **A**tomicidade | tudo ou nada | matrícula e vaga gravadas juntas |
| **C**onsistência | estado válido → estado válido | vagas nunca ficam negativas |
| **I**solamento | transações não interferem | dois alunos não ocupam a última vaga |
| **D**urabilidade | após o commit, sobrevive a falhas | a matrícula não se perde no reinício |

<!--
🎤 **Fala do Professor:**

"Chegamos ao tema mais importante da aula. Matricular um aluno envolve várias alterações: verificar a vaga, inserir a matrícula e diminuir o número de vagas. Se o servidor cair depois da inserção e antes da atualização, o banco fica inconsistente. A transação agrupa essas operações numa unidade indivisível. Começa com BEGIN; se tudo der certo, o COMMIT grava; se algo falhar, o ROLLBACK desfaz tudo. As garantias formam a sigla ACID: atomicidade, tudo ou nada; consistência, o banco sai de um estado válido para outro; isolamento, transações simultâneas não se atrapalham; e durabilidade, depois do commit os dados sobrevivem a falhas. Olhem a última coluna da tabela: cada propriedade tem um significado concreto na matrícula. Se vocês conseguirem explicar ACID usando esse exemplo, entenderam o conceito. E lembrem que BEGIN, COMMIT e ROLLBACK são exatamente os comandos TCL que vimos na tabela de SQL, alguns slides atrás."
-->

---

<!-- _class: dense -->

# 🏁 Concorrência: 40 vagas, 43 matriculados

```php
public function matricular(MatricularAlunoDTO $dto): Matricula
{
    return DB::transaction(function () use ($dto) {          // BEGIN
        $disciplina = Disciplina::whereKey($dto->disciplinaId)
            ->lockForUpdate()                                // SELECT ... FOR UPDATE
            ->firstOrFail();

        if ($disciplina->vagas <= 0) {
            throw new VagasEsgotadasException($disciplina->nome);   // → ROLLBACK
        }

        $matricula = Matricula::create([...]);               // INSERT
        $disciplina->decrement('vagas');                     // UPDATE vagas - 1
        return $matricula;                                   // → COMMIT
    });
}
```

<div class="note">📌 <strong>O que demonstra:</strong> a <strong>transação</strong> garante o tudo ou nada, e o <strong>bloqueio pessimista</strong> faz a segunda requisição <strong>esperar</strong> a primeira terminar, evitando a condição de corrida.</div>

<!--
🎤 **Fala do Professor:**

"Este caso está no e-book: no primeiro dia de matrículas, a optativa de Inteligência Artificial tinha 40 vagas e terminou com 43 alunos. Várias requisições chegaram no mesmo segundo, todas leram que havia vaga, e todas inseriram a matrícula. Isso é uma condição de corrida. A correção combina duas ideias. O DB transaction envolve tudo numa transação: se uma exceção for lançada, o Laravel faz o rollback automaticamente. E o lockForUpdate bloqueia a linha da disciplina: a segunda requisição espera a primeira terminar e só então lê o número atualizado de vagas. Além disso, a restrição unique no banco continua como última linha de defesa contra matrículas duplicadas. Reparem também como as unidades anteriores se encontram aqui: a exceção de domínio, criada na Unidade III, interrompe a transação e é convertida pelo tratador global em 409 Conflict. E no projeto real essas consultas ficam nos repositórios, injetados no service, como vimos na Unidade II. Um teste automatizado com requisições simultâneas confirma que as matrículas nunca ultrapassam as vagas."
-->

---

# 🎚️ Isolamento e bloqueios

<div class="cols-60">
<div>

| Nível | Leitura suja | Não repetível | Fantasma |
|---|---|---|---|
| Read Uncommitted | possível | possível | possível |
| **Read Committed** <span class="muted">(PostgreSQL)</span> | evitada | possível | possível |
| **Repeatable Read** <span class="muted">(MySQL)</span> | evitada | evitada | possível* |
| Serializable | evitada | evitada | evitada |

</div>
<div>

<div class="card"><b>🔒 Pessimista</b>Bloqueia a linha <strong>antes</strong> do conflito. Ideal quando a disputa é <strong>alta</strong>: matrículas.</div>

<div class="card" style="margin-top:14px"><b>🔢 Otimista</b>Cada registro tem uma <strong>versão</strong>; se ela mudou, a atualização falha com <strong>409 Conflict</strong>.</div>

</div>
</div>

<div class="note">⚠️ Nada de e-mail ou API externa <strong>dentro</strong> da transação: use <code>DB::afterCommit()</code> ou filas.</div>

<!--
🎤 **Fala do Professor:**

"O isolamento não é absoluto: os bancos oferecem níveis que equilibram consistência e desempenho. Quanto mais alto o nível, menos anomalias, mas mais espera entre transações. Na prática, usamos o nível padrão do banco, Read Committed no PostgreSQL, e bloqueios explícitos nos pontos críticos. O bloqueio pessimista, que vimos na matrícula, evita o conflito antes que ele aconteça. Já o otimista serve quando conflitos são raros, como dois coordenadores editando o mesmo curso: cada registro tem um número de versão, e se ele mudou desde a leitura, a API responde 409. Por fim, nunca façam chamadas lentas, como enviar e-mail, dentro da transação: elas prendem as linhas e não podem ser desfeitas por um rollback. Imaginem enviar o e-mail de confirmação e depois a transação ser desfeita: o aluno recebe a confirmação de uma matrícula que não existe. Por isso o e-book usa DB afterCommit, que agenda o envio para depois da confirmação e o descarta se houver rollback. Em APIs REST, o bloqueio otimista também aparece nos cabeçalhos ETag e If-Match."
-->

---

# 🧭 Persistência no dia a dia: analogias

<div class="cards c2 bigo">
  <div class="card"><b>Transação · Tudo ou nada</b><span class="ico">🛒</span>Numa <strong>compra online</strong>, o pagamento e a baixa no estoque acontecem juntos. Se o pagamento falha, o produto volta para a prateleira.<span class="js">Laravel: <code>DB::transaction()</code></span></div>
  <div class="card"><b>Bloqueio pessimista</b><span class="ico">🚪</span>O <strong>provador da loja</strong>: quem entra tranca a porta, e o próximo espera do lado de fora.<span class="js">Laravel: <code>lockForUpdate()</code></span></div>
  <div class="card"><b>Bloqueio otimista</b><span class="ico">📝</span>O editor de texto avisa: <strong>"este arquivo foi alterado por outra pessoa"</strong>. Você recarrega e decide o que fazer.<span class="js">Coluna <code>versao</code> + 409 Conflict</span></div>
  <div class="card"><b>Deadlock · Impasse</b><span class="ico">🚗</span>Dois carros numa <strong>ponte estreita</strong>, cada um esperando o outro recuar. O banco cancela um deles.<span class="js">Laravel: <code>attempts: 3</code></span></div>
</div>

<div class="note">💡 Pergunta-chave: <strong>se duas pessoas fizerem isso ao mesmo tempo, o que pode dar errado?</strong></div>

<!--
🎤 **Fala do Professor:**

"Vamos trazer esses conceitos para o cotidiano. A transação é como uma compra online: pagamento e baixa no estoque acontecem juntos, ou nenhum dos dois acontece. O bloqueio pessimista é o provador da loja: quem entra tranca a porta e o próximo espera. O bloqueio otimista é aquele aviso de que o arquivo foi alterado por outra pessoa: ninguém foi impedido de editar, mas o conflito é detectado na hora de salvar. E o deadlock é a ponte estreita, com dois carros esperando um pelo outro para sempre. O banco detecta o impasse e cancela uma das transações, e o Laravel pode repetir automaticamente com o parâmetro attempts. Guardem a pergunta-chave: se duas pessoas fizerem isso ao mesmo tempo, o que pode dar errado? Para reduzir o risco de deadlock, o e-book recomenda duas práticas: manter as transações curtas e bloquear os registros sempre na mesma ordem."
-->

---

# 🌍 Aplicação em sistemas reais

<div class="cards">
  <div class="card"><span class="ico">🎟️</span><b>Venda de ingressos</b>Milhares disputando os mesmos assentos: <strong>transação + bloqueio</strong> evitam vender o mesmo lugar duas vezes</div>
  <div class="card"><span class="ico">🏦</span><b>Bancos digitais</b>Débito numa conta e crédito na outra: <strong>atomicidade</strong> é obrigatória</div>
  <div class="card"><span class="ico">🛍️</span><b>E-commerce</b>Catálogo com milhões de produtos: <strong>índices</strong> e <strong>eager loading</strong> mantêm a busca rápida</div>
</div>

<div class="flow">
  <div class="step">Operação de negócio</div><div class="arrow">➜</div>
  <div class="step">Várias escritas?</div><div class="arrow">➜</div>
  <div class="step">Concorrência alta?</div><div class="arrow">➜</div>
  <div class="step fill">Transação + bloqueio adequado</div>
</div>

<!--
🎤 **Fala do Professor:**

"Esses problemas não são exclusivos da nossa API acadêmica. Num site de ingressos, milhares de pessoas disputam o mesmo assento ao mesmo tempo. Num banco digital, uma transferência é débito numa conta e crédito na outra, e não pode acontecer só metade. Num e-commerce com milhões de produtos, índices e consultas eficientes fazem a diferença entre uma busca instantânea e uma página travada. O raciocínio é sempre o mesmo: a operação faz várias escritas? Então precisa de transação. Há disputa pelo mesmo registro? Então escolho o bloqueio adequado. Disputa alta pede bloqueio pessimista; conflitos raros podem usar o otimista. Esse raciocínio vale para qualquer linguagem ou framework, não só para Laravel."
-->

---

# 🧾 Síntese dos conceitos

<div class="cols">
<div>

- **SGBD**, **driver** e **pool** ligam a API ao banco
- **Prepared statements**: SQL e valores **separados**
- **ORM** traduz objetos ↔ tabelas, mas cuidado com o **N+1**
- **Active Record** (produtividade) × **Data Mapper** (isolamento)

</div>
<div>

- **PK**, **FK** e relacionamentos **1:1, 1:N e N:N**
- **Migrations** versionam o esquema; **índices** aceleram
- **Transações ACID** garantem o tudo ou nada
- **Bloqueios** protegem contra condições de corrida

</div>
</div>

<div class="callout">🧭 O ORM é uma ferramenta poderosa, mas o <strong>domínio de SQL e da modelagem relacional</strong> é o que diferencia um bom profissional.</div>

<!--
🎤 **Fala do Professor:**

"Vamos recapitular. Vimos como a API se conecta ao banco e como executar consultas com segurança. Entendemos o ORM, seus dois estilos e sua principal armadilha, o N+1. Modelamos relacionamentos com chaves, versionamos o esquema com migrations e usamos índices para ganhar desempenho. E, por fim, vimos que transações e bloqueios mantêm os dados corretos mesmo sob concorrência. Se ficarem com uma frase, que seja esta, que fecha a unidade no e-book: o ORM é poderoso, mas o domínio de SQL e da modelagem relacional é o que diferencia um bom profissional. Antes de seguirmos para a reflexão, pensem: qual desses conceitos vocês já tinham visto em outra disciplina, e qual foi totalmente novo?"
-->

---

# 📝 Reflexão

<div class="cols-60">
<div>

```php
// Desafio: identifique os problemas deste código
// e diga como os conceitos da aula resolveriam cada um
$disciplina = Disciplina::find($id);

if ($disciplina->vagas > 0) {
    Matricula::create([...]);
    Mail::to($aluno)->send(new Confirmacao());
    $disciplina->decrement('vagas');
}
```

</div>
<div>

### 💬 Reflita
1. Por que uma regra como `unique` deve existir **também no banco**, e não só no código?
2. Quando você escolheria **soft delete** e quando ele **não** é suficiente?
3. Em que situação um **índice** pode **piorar** o desempenho?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Para fixar, analisem este código. Ele lê as vagas, cria a matrícula, envia um e-mail e só depois atualiza as vagas, tudo sem transação. Quantos problemas vocês encontram? Pensem na condição de corrida, no e-mail enviado antes de a operação estar confirmada e no que acontece se o servidor cair no meio. Depois, respondam às três perguntas de reflexão. Para estudar, leiam as seções 4.1 a 4.4 do e-book, com atenção especial ao quadro das propriedades ACID e ao caso das 43 matrículas. Na próxima aula, vamos proteger esses dados com autenticação, autorização e boas práticas de segurança. Até lá!"
-->