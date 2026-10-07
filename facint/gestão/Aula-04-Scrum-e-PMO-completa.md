---
marp: true
theme: default
paginate: true
backgroundColor: #1a1a2e
color: #eee
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1 {
    color: #00d4ff;
    border-bottom: 3px solid #00d4ff;
    padding-bottom: 10px;
  }
  h2 {
    color: #00d4ff;
  }
  strong {
    color: #00d4ff;
  }
  ul {
    font-size: 0.9em;
  }
  table {
    font-size: 0.85em;
  }
  blockquote {
    border-left: 4px solid #00d4ff;
    padding-left: 15px;
    font-style: italic;
    color: #ccc;
  }
  code {
    background-color: #16213e;
    padding: 2px 6px;
    border-radius: 4px;
    color: #00d4ff;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
---

<!-- _class: lead -->

# Gestão de Projetos
## Aula 4 — Scrum e Project Management Office (PMO)

<!-- 
🎤 **Fala do Professor:**

"Bom dia/tarde a todos! Sejam bem-vindos à Aula 4 de Gestão de Projetos. Hoje vamos mergulhar em dois temas fundamentais: o Scrum, que é o framework ágil mais utilizado no mundo, e o PMO — o Escritório de Gerenciamento de Projetos. Esses dois temas, apesar de parecerem opostos (um ágil, outro mais estruturado), na verdade se complementam no mercado atual. Prestem bastante atenção, pois vamos ter exercícios práticos ao final!"
-->

---

# 🎯 Objetivos da Aula

Ao final desta aula, o aluno deverá ser capaz de:

- ✅ Compreender por que as **metodologias ágeis** surgiram
- ✅ Conhecer os **valores e princípios** do Manifesto Ágil
- ✅ Explicar o framework **Scrum** completo (papéis, artefatos, eventos)
- ✅ Entender o que é um **PMO** e seus tipos
- ✅ Conhecer **técnicas de priorização** de portfólio (AHP)
- ✅ Aplicar os conceitos em **cenários práticos**

<!-- 
🎤 **Fala do Professor:**

"Esses são os objetivos de hoje. Note que vamos cobrir bastante conteúdo, mas tudo de forma progressiva. Começaremos pelo 'porquê' das metodologias ágeis, depois vamos entender o Scrum em detalhes, depois o PMO e, por fim, técnicas de priorização. No final teremos um exercício em grupo para fixar o conteúdo."
-->

---

# Parte 1
## Metodologias Ágeis — Contexto e Fundamentos

---

# 🏛️ O Contexto: Por que as Metodologias Tradicionais Não Eram Suficientes?

Durante décadas, o desenvolvimento de software seguiu o modelo **Cascata** (Waterfall):

```
Requisitos → Design → Implementação → Testes → Manutenção
```

### O Problema:
O mercado de software começou a mudar **muito rápido**:

- 📈 Crescimento exponencial da internet (anos 90/2000)
- 🔄 Mudanças constantes nas necessidades dos clientes
- ⏰ Janelas de oportunidade cada vez menores
- 🌐 Concorrência global
- 💻 Tecnologias surgindo e se tornando obsoletas rapidamente

<!-- 
🎤 **Fala do Professor:**

"Vamos entender o contexto histórico. Durante muitos anos, o modelo Cascata funcionou bem. Era previsível, documentado e linear. Porém, com a explosão da internet nos anos 90 e o surgimento das empresas de tecnologia, o cenário mudou drasticamente. Os requisitos passaram a mudar durante o desenvolvimento. O cliente muitas vezes não sabia exatamente o que queria. E a velocidade do mercado exigia entregas rápidas. Foi nesse cenário que nasceu a necessidade de algo diferente."
-->

---

# ❌ Limitações das Metodologias Clássicas

| Limitação | Impacto no Projeto |
|-----------|-------------------|
| Exigem **requisitos completos** desde o início | Cliente raramente sabe tudo o que precisa no começo |
| Exigem **domínio total da tecnologia** | Tecnologias novas surgem durante o projeto |
| **Não admitem mudanças** facilmente | Mudanças geram retrabalho e custo alto |
| Entrega **somente ao final** | Cliente só vê o produto depois de meses ou anos |
| **Documentação excessiva** | Tempo gasto escrevendo em vez de construindo |

### 💡 Dados Importantes:
- **Standish Group (CHAOS Report):** Apenas **29%** dos projetos de software eram bem-sucedidos com métodos tradicionais
- **70%** dos projetos falhavam ou tinham problemas sérios

<!-- 
🎤 **Fala do Professor:**

"Vamos analisar cada limitação. Primeira: os métodos clássicos exigem que os requisitos estejam completos desde o início. Mas na prática, quantas vezes o cliente sabe exatamente o que quer? Quase nunca. Segunda: exigem domínio total da tecnologia. Mas e quando o projeto usa uma tecnologia nova que ninguém conhece bem? Terceira: não admitem mudanças. Se o cliente muda de ideia no meio do caminho, o impacto é enorme. Quarta: a entrega é só ao final. Imagina esperar 1 ano para ver se o sistema ficou bom? Por fim, a documentação excessiva. Já viram projetos onde se escreve mais do que se programa? Pois é. Os dados do Standish Group mostram que esse modelo tinha uma taxa de fracasso muito alta."
-->

---

# ✅ O que o Mercado Precisava?

O mercado de software precisava de uma abordagem que permitisse:

### 🔄 Ciclo de Desenvolvimento Contínuo
> Em vez de um único ciclo longo → **múltiplos ciclos curtos**

### 🔀 Adaptação a Mudanças
> Em vez de resistir às mudanças → **abraçar as mudanças**

### 📦 Entregas Incrementais
> Em vez de tudo no final → **entregar pedaços ao longo do tempo**

### 🤝 Colaboração com o Cliente
> Em vez de contrato rígido → **parceria contínua**

### 📊 Exemplo Prático:
- **Tradicional:** Sistema de e-commerce entregue após 12 meses
- **Ágil:** Primeira versão funcional em  semanas, com melhorias a cada 2 semanas

<!-- 
🎤 **Fala do Professor:**

"Aqui está o contraste. No modelo tradicional, você entrega tudo no final. Se deu errado, o prejuízo é enorme. No modelo ágil, você entrega em ciclos curtos — a cada 2 ou 4 semanas. O cliente vê o produto funcionando, dá feedback, e você ajusta. É como a diferença entre cozinhar uma refeição inteira e só revelar no final, versus ir mostrando o prato durante o preparo. Se o cliente não gostou do tempero, você ajusta antes de servir. O exemplo do e-commerce é clássico: imagine esperar 12 meses para descobrir que a página de carrinho não funciona como o cliente esperava? Com Scrum, em 2 semanas você já teria essa funcionalidade pronta e validada."
-->

---

# 📜 O Manifesto Ágil — 2001

Em **fevereiro de 2001**, 17 profissionais de software se reuniram em **Snowbird, Utah (EUA)** e criaram o **Manifesto Ágil**.

### Os Fundadores (alguns):
- **Kent Beck** — criador do XP e do TDD
- **Martin Fowler** — especialista em arquitetura e refatoração
- **Ken Schwaber** e **Jeff Sutherland** — criadores do Scrum
- **Alistair Cockburn** — criador do Crystal
- **Robert C. Martin** (Uncle Bob) — princípios SOLID

### O que produziram:
- **4 valores** fundamentais
- **12 princípios** de apoio

> *"Estamos descobrindo melhores maneiras de desenvolver software fazendo-o e ajudando outros a fazê-lo."*
> — Manifesto Ágil

<!-- 
🎤 **Fala do Professor:**

"Esse é um marco na história do desenvolvimento de software. Em fevereiro de 2001, 17 profissionais se encontraram em Snowbird, Utah — uma estação de esquí nos Estados Unidos. Eles representavam diferentes metodologias: Scrum, XP, Crystal, DSDM, entre outras. Perceberam que tinham algo em comum: a insatisfação com os métodos tradicionais pesados. Dessa reunião nasceu o Manifesto Ágil. Note os nomes: Kent Beck é o pai do XP. Ken Schwaber e Jeff Sutherland criaram o Scrum. Alistair Cockburn criou o Crystal. São nomes gigantes da indústria. O Manifesto não é uma metodologia em si — é um conjunto de valores e princípios que orientam todas as metodologias ágeis."
-->

---

# 📜 Os 4 Valores do Manifesto Ágil

| Valor | Mais importante que | Em vez de |
|-------|-------------------|-----------|
| 🤝 **Indivíduos e interações** | | Processos e ferramentas |
| 💻 **Software em funcionamento** | | Documentação abrangente |
| 🤝 **Colaboração com o cliente** | | Negociação de contratos |
| 🔄 **Respostas a mudanças** | | Seguir um plano |

### ⚠️ Atenção:
> Os valores da **direita** não são descartados — apenas os da **esquerda** têm **mais importância**.

### Exemplo:
- Um e-mail explicando uma funcionalidade **vale mais** que um documento de 50 páginas que ninguém lê
- Um software funcionando **vale mais** que uma especificação perfeita no papel

<!-- 
🎤 **Fala do Professor:**

"Vamos entender cada valor. Primeiro: indivíduos e interações sobre processos e ferramentas. Isso significa que a comunicação entre as pessoas é mais importante que seguir processos rígidos. Um papo rápido no corredor resolve mais que uma reunião formal de 2 horas com ata. Segundo: software em funcionamento sobre documentação abrangente. Isso NÃO significa que não se faz documentação. Significa que o software funcionando é a medida principal de progresso. Terceiro: colaboração com o cliente sobre negociação de contratos. Em vez de discutir cláusulas, trabalhe junto com o cliente. Quarto: respostas a mudanças sobre seguir um plano. Planos são importantes, mas o plano precisa ser flexível. NÃO jogamos a documentação fora — apenas priorizamos o que gera mais valor."
-->

---

# 📋 Os 12 Princípios do Manifesto Ágil

**Nossa maior prioridade é satisfazer o cliente** através da entrega contínua de software de valor.

**Aceitar mudanças** de requisitos, mesmo no final do desenvolvimento.

**Entregar software funcional** frequentemente (semanas a meses).

**Pessoas de negócio e desenvolvedores** devem trabalhar juntos diariamente.

**Projetos em torno de pessoas motivadas** — confiança e autonomia.

**Conversa face a face** é a melhor forma de comunicação.

<!-- 
🎤 **Fala do Professor:**

"São 12 princípios, e vou destacar os mais importantes. O primeiro é claro: o cliente em primeiro lugar. Tudo o que fazemos é para gerar valor para o cliente. Segundo: aceitar mudanças, mesmo no final. Isso é revolucionário! No modelo tradicional, mudar requisitos no final era praticamente proibido. No ágil, é esperado. Terceiro: entregar frequentemente. Quanto mais cedo você entrega, mais cedo recebe feedback. Quarto: pessoas de negócio e desenvolvedores juntos. Não pode ter o 'time de lá' e o 'time de cá'. Quinto: pessoas motivadas. Não adianta ter o melhor processo do mundo com pessoas desmotivadas. Sexto: conversa presencial. Quando possível, vá falar com a pessoa em vez de trocar 20 e-mails."
-->

---

# 📋 Os 12 Princípios (continuação)

**Software funcional** é a medida principal de progresso.

**Processos ágeis** promovem desenvolvimento sustentável (ritmo constante).

**Excelência técnica e bom design** aumentam a agilidade.

**Simplicidade** — maximizar o trabalho que NÃO é feito.

**As melhores arquiteturas, requisitos e designs** emergem de times auto-organizáveis.

**Regularmente, o time reflete** sobre como ser mais eficaz e ajusta seu comportamento.

> 💡 **Resumo:** Os 12 princípios giram em torno de 3 ideias centrais:
> **Valor para o cliente** • **Pessoas e colaboração** • **Melhoria contínua**

<!-- 
🎤 **Fala do Professor:**

"Continuando com os princípios. Software funcional como medida de progresso — se não funciona, não vale. Desenvolvimento sustentável — ágil não é 'trabalhar 16 horas por dia', é manter um ritmo constante e saudável. Excelência técnica — código limpo, bem feito, testado. Simplicidade — às vezes, a melhor decisão é NÃO fazer algo. Auto-organização — o time decide COMO fazer o trabalho. E retrospectiva — parar para refletir periodicamente. Percebam como esses princípios se complementam. Não adianta ser ágil em velocidade se a qualidade fica para trás. O equilíbrio é fundamental."
-->

---

# 📦 Panorama das Metodologias Ágeis

| Metodologia | Criador(es) | Foco Principal |
|-------------|-------------|----------------|
| 🏉 **Scrum** | Schwaber & Sutherland | Framework iterativo e incremental |
| 📋 **Kanban** | David Anderson | Gestão visual do fluxo de trabalho |
| ⚡ **XP** (Extreme Programming) | Kent Beck | Práticas técnicas de excelência |
| 🏗️ **FDD** | Jeff De Luca | Desenvolvimento orientado a features |
| 💎 **Crystal** | Alistair Cockburn | Família adaptativa por criticidade |
| 🔄 **DSDM** | DSDM Consortium | Framework completo e estruturado |
| 🏭 **Lean** | Mary Poppendieck | Eliminar desperdícios (origem Toyota) |
| 🎯 **SAFe** | Dean Leffewell | Scrum em larga escala (enterprise) |

> 💡 **Diferença chave:** Scrum e Kanban são os mais utilizados no Brasil e no mundo.

<!-- 
🎤 **Fala do Professor:**

"Existem muitas metodologias ágeis. O Scrum, que vamos estudar em detalhes hoje, é o mais popular — usado por mais de 70% das empresas ágeis segundo o State of Agile Report. O Kanban, que já vimos na aula passada, é mais focado em fluxo visual. O XP foca em práticas técnicas como programação em par, TDD e integração contínua. O FDD é orientado a funcionalidades. O Crystal é uma família — quanto mais crítica a aplicação, mais pesada a metodologia. O DSDM é mais estruturado. O Lean veio da Toyota e foca em eliminar desperdício. O SAFe é para grandes empresas que precisam escolar o Scrum. Hoje vamos aprofundar no Scrum."
-->

---

# Parte 2
## Scrum — Framework Ágil Completo

---

# 🏉 O que é o Scrum?

> **Scrum** é um **framework leve** que ajuda as pessoas, times e organizações a **gerar valor** através de soluções adaptativas para problemas complexos.

### Origem:
- 📄 Artigo na **Harvard Business Review** (1986) — *"The New New Product Development Game"*
- ✍️ Autores: **Hirotaka Takeuchi** e **Ikujiro Nonaka**
- 🏉 Metáfora do **Rugby**: equipe unida avançando juntos com a bola
- 📐 Formalizado por **Ken Schwaber** e **Jeff Sutherland** nos anos 90
- 📖 **Scrum Guide** oficial (atualizado em 2020)

### Por que "Scrum"?
No Rugby, **scrum** (scrummage) é a formação onde os jogadores se unem para retomar a bola — **trabalho em equipe, colaboração e avanço conjunto**.

<!-- 
🎤 **Fala do Professor:**

"Scrum vem do Rugby. No Rugby, o scrum é aquela formação onde os jogadores se juntam, empurram juntos e avançam como um time. Takeuchi e Nonaka, em 1986, escreveram na Harvard Business Review que o desenvolvimento de produtos deveria funcionar assim — times multifuncionais trabalhando juntos de forma iterativa, em vez de cada um fazer sua parte isoladamente. Nos anos 90, Ken Schwaber e Jeff Sutherland formalizaram isso como um framework. Em 2020, eles atualizaram o Scrum Guide oficial. O Scrum NÃO é uma metodologia — é um framework. A diferença é que uma metodologia diz EXATAMENTE o que fazer, enquanto o Scrum dá a estrutura e você adapta ao seu contexto."
-->

---

# 🏉 Características do Scrum

### Quando usar Scrum?
- ✔️ Projetos com **requisitos incertos** ou em constante mudança
- ✔️ Cenários **complexos** e **caóticos**
- ✔️ Quando o cliente precisa **ver resultados rapidamente**
- ✔️ Times que precisam de **auto-organização**

### Os 3 Pilares do Scrum:

| Pilar | Significado |
|-------|-------------|
| 🔍 **Transparência** | Todos veem o progresso — backlog visível, reuniões abertas |
| 🔎 **Inspeção** | Revisar frequentemente o produto e o processo |
| 🔧 **Adaptação** | Ajustar quando algo não está funcionando |

### Scrum é:
- **Leve** — poucas regras, fácil de entender
- **Difícil de dominar** — exige disciplina e prática

<!-- 
🎤 **Fala do Professor:**

"Quando usar Scrum? Quando os requisitos mudam, quando o projeto é complexo, quando o cliente quer ver resultados rápido. E quando NÃO usar? Quando o projeto é totalmente previsível, com requisitos congelados e tecnologia conhecida — aí o Cascata pode ser mais adequado. Os três pilares são fundamentais. Transparência: todo mundo vê o que está acontecendo — o backlog é público, as reuniões são abertas. Inspeção: a cada sprint, o time revisa o que fez. Adaptação: se algo não está bom, muda. E uma frase famosa do Ken Schwaber: 'Scrum é fácil de entender e difícil de dominar.' Entender as regras leva 1 hora. Dominar o Scrum leva anos de prática."
-->

---

# 👥 Os 3 Papéis do Scrum (Scrum Team)

O Scrum Team é composto por **apenas 3 papéis**:

```
┌─────────────────────────────────────────┐
│              SCRUM TEAM                 │
│                                         │
│  ┌──────────────┐                       │
│  │ Product Owner │  (1 por time)        │
│  └──────────────┘                       │
│                                         │
│  ┌──────────────┐                       │
│  │ Scrum Master │  (1 por time)        │
│  └──────────────┘                       │
│                                         │
│  ┌──────────────┐                       │
│  │  Developers  │  (3 a 9 pessoas)     │
│  └──────────────┘                       │
│                                         │
│  TOTAL: time pequeno e enxuto (≤10)     │
└─────────────────────────────────────────┘
```

> ⚠️ Não existe hierarquia entre os papéis. Todos são **iguais** dentro do time.

<!-- 
🎤 **Fala do Professor:**

"O Scrum Team tem apenas 3 papéis. Notem que são POUCOS papéis comparado a métodos tradicionais. O Product Owner é UMA pessoa. O Scrum Master é UMA pessoa. E o Developers — que antes chamávamos de Dev Team — é um grupo de 3 a 9 pessoas. O time total fica entre 5 e 11 pessoas. Importante: não existe hierarquia. O Product Owner NÃO é o chefe do time. O Scrum Master NÃO é o gerente. São papéis com responsabilidades diferentes, mas todos no mesmo nível. Isso é fundamental para a auto-organização."
-->

---

# 👤 Product Owner (PO)

### Quem é?
- A **voz do cliente** dentro do time
- Responsável pela **visão do produto**

### Responsabilidades:
- 🎯 Definir e comunicar o **objetivo do produto**
- 📋 Gerenciar e priorizar o **Product Backlog**
- 🤝 Representar os **stakeholders** (clientes, usuários, diretoria)
- ✅ Garantir que o time esteja trabalhando no que **gera mais valor**
- 💬 Estar disponível para **esclarecer dúvidas** do time
- 📊 Validar e **aceitar** as entregas da sprint

### Exemplo no dia a dia:
> *"Nesta sprint, a prioridade é o sistema de login com autenticação em 2 fatores. O relatório de vendas fica para a próxima sprint."*

<!-- 
🎤 **Fala do Professor:**

"O Product Owner é talvez o papel mais importante do Scrum. Ele é a voz do cliente. Se você imaginar uma empresa de software, o PO é quem sabe o que o produto precisa fazer. Ele conversa com os clientes, com a diretoria, com os usuários, e traduz tudo isso em funcionalidades no Product Backlog. Uma coisa muito importante: o PO NÃO é o gerente do time. Ele decide o QUE fazer, mas o time decide COMO fazer. Exemplo prático: o PO pode dizer 'precisamos de um sistema de login com 2 fatores', mas é o time que decide qual biblioteca usar, qual arquitetura implementar, etc. Outro ponto crucial: o PO precisa estar disponível. Se o time tem dúvida e o PO não responde, o trabalho para. Por isso, o PO precisa ser alguém com autoridade e disponibilidade."
-->

---

# 🧑‍🏫 Scrum Master (SM)

### Quem é?
- O **guardião do processo Scrum**
- **Facilitador** e **coach** do time

### Responsabilidades:
- 📚 Garantir que o time **entenda e aplique** o Scrum
- 🚧 **Remover impedimentos** que bloqueiam o time
- 🤝 Facilitar as **cerimônias** (Daily, Planning, Review, Retrospective)
- 🛡️ Proteger o time de **interferências externas**
- 📈 Promover a **melhoria contínua**
- 🏢 Ajudar a organização a entender o Scrum

### O que o SM **NÃO é**:
- ❌ NÃO é o **chefe** do time
- ❌ NÃO é um **secretário** que só agenda reuniões
- ❌ NÃO é responsável pelo **produto** (isso é do PO)

<!-- 
🎤 **Fala do Professor:**

"O Scrum Master é frequentemente mal interpretado. Muita gente acha que é o 'gerente do Scrum' ou o 'chefe da equipe'. NÃO é. O Scrum Master é um facilitador e coach. Pensem nele como um treinador de futebol: ele não entra em campo para jogar, mas ajuda o time a jogar melhor. Se tem um impedimento — por exemplo, o time precisa de um servidor e o departamento de TI não libera — o SM vai lá e resolve. Se tem uma reunião importante, ele facilita. Se o time está com dificuldades, ele ajuda a encontrar soluções. Mas ele NÃO manda no time. Uma coisa importante: o SM também ajuda a ORGANIZAÇÃO a entender o Scrum. Muitas vezes, os problemas não estão no time, mas na empresa que não entende como trabalhar com ágil."
-->

---

# 👨‍💻 Developers (Time de Desenvolvimento)

### Quem são?
- O grupo que **constrói o produto**
- **Multifuncional** — tem todas as habilidades necessárias
- **Auto-organizável** — decide COMO fazer o trabalho

### Características:
- 🔧 Tamanho ideal: **3 a 9 pessoas**
- 👥 **Multifuncional**: designers, devs, testers, analistas — tudo no mesmo time
- 🎯 **Auto-organização**: ninguém de fora diz como fazer as tarefas
- ✅ Coletivamente **responsáveis** pelas entregas
- 📊 Sem títulos hierárquicos dentro do time

### Exemplo:
> Em um time de e-commerce: 2 devs frontend, 2 devs backend, 1 tester, 1 designer UX, 1 analista de dados = 7 pessoas = time multifuncional

<!-- 
🎤 **Fala do Professor:**

"O Developers — antes chamado de Dev Team — é o grupo que de fato constrói o produto. O Scrum Guide de 2020 mudou o nome de 'Dev Team' para apenas 'developers' porque o termo 'team dentro de um time' era confuso. Os developers são multifuncionais. Isso significa que dentro do time TEM que ter todas as habilidades necessárias para entregar o produto. Não pode depender de outro time para testar, por exemplo. Se o time não tem tester, alguém do time precisa aprender a testar. São auto-organizáveis: o PO diz O QUE fazer, mas o time decide COMO fazer. Ninguém de fora atribui tarefas — o time se organiza. E são coletivamente responsáveis. Se deu errado, a culpa não é de um único dev — é do time inteiro. Isso cria um senso de coletividade muito forte."
-->

---

# 📦 Artefatos do Scrum

O Scrum possui **3 artefatos** (documentos/objetos que representam o trabalho):

```
┌─────────────────────────────────────────────────────┐
│                   ARTEFATOS                         │
│                                                     │
│  ┌──────────────────┐                               │
│  │  Product Backlog │  → O QUE pode ser feito       │
│  └──────────────────┘       (visão completa)        │
│           │                                         │
│           ▼                                         │
│  ┌──────────────────┐                               │
│  │  Sprint Backlog  │  → O QUE será feito AGORA     │
│  └──────────────────┘       (sprint atual)          │
│           │                                         │
│           ▼                                         │
│  ┌──────────────────┐                               │
│  │    Incremento    │  → O QUE foi ENTREGUE         │
│  └──────────────────┘       (produto funcional)     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

<!-- 
🎤 **Fala do Professor:**

"Os artefatos do Scrum são como 'containers' de informação. O Product Backlog é a lista COMPLETA de tudo que o produto precisa. É alimentado pelo Product Owner e nunca termina — sempre tem coisa nova. O Sprint Backlog é o recorte que o time vai trabalhar NA SPRINT ATUAL. É como tirar uma foto do que você vai fazer esta semana. E o Incremento é o resultado — o que foi de fato entregado e funciona. Pense assim: Product Backlog é o cardápio do restaurante inteiro. Sprint Backlog é o que você pediu HOJE. E o Incremento é a comida que chegou na sua mesa."
-->

---

# 📋 Product Backlog — Detalhamento

### O que é?
- Lista **ordenada** e **viva** de tudo que é necessário no produto
- **Nunca está completo** — sempre evolui

### Quem gerencia?
- **Product Owner** é o responsável
- Mas **qualquer pessoa** pode sugerir itens

### Características:
- 📝 Cada item tem: **descrição, prioridade, estimativa, valor de negócio**
- 📊 Priorização em graus: **Alta, Média, Baixa** (ou numérica)
- 🔄 Refinado constantemente (**Backlog Refinement/Grooming**)
- 📏 Estimado em **Story Points** ou **horas**

### Exemplo de itens:

| Prioridade | Item | Story Points |
|------------|------|:------------:|
| 🔴 Alta | Cadastro de usuário com validação de CPF | 8 |
| 🔴 Alta | Login com autenticação 2 fatores | 13 |
| 🟡 Média | Relatório de vendas mensal | 5 |
| 🟢 Baixa | Exportar relatório em PDF | 3 |

<!-- 
🎤 **Fala do Professor:**

"O Product Backlog é o coração do Scrum. É onde tudo começa. O PO cria, gerencia e prioriza essa lista. Mas qualquer pessoa pode sugerir items — um desenvolvedor pode dizer 'precisamos refatorar o módulo de pagamentos', o cliente pode pedir uma nova funcionalidade. Os itens são priorizados. No exemplo, o cadastro de usuário e o login são prioridade ALTA — são funcionalidades essenciais. O relatório é MÉDIA — importante mas não urgente. A exportação em PDF é BAIXA — legal ter, mas não é crucial agora. As Story Points são uma medida de COMPLEXIDADE, não de tempo. 8 pontos é mais complexo que 3 pontos. Isso é importante para o planejamento da sprint."
-->

---

# 📋 Sprint Backlog — Detalhamento

### O que é?
- Subconjunto do Product Backlog selecionado **para a sprint atual**
- É o **plano** do time para a sprint

### Quem define?
- O **time de desenvolvimento** escolhe quanto pode fazer
- O **PO** prioriza quais itens entrarão

### Características:
- ✅ Visível para **todo o time** (quadro Kanban/Scrum Board)
- 🔄 Atualizado **diariamente** durante a sprint
- 📊 Cada item tem: **status** (A Fazer → Em Progresso → Concluído)
- 🎯 Pode ser ajustado durante a sprint (dentro do objetivo)

### Exemplo de Scrum Board:

| A Fazer 🔴 | Em Progresso 🟡 | Concluído 🟢 |
|------------|-----------------|--------------|
| Validação CPF | Login 2 fatores | Cadastro básico |
| Testes unitários | | API de usuários |

<!-- 
🎤 **Fala do Professor:**

"O Sprint Backlog é como o 'quadro de tarefas' da sprint. O PO chega com as prioridades e o time decide quanto consegue fazer. Essa é uma decisão DO TIME, não do PO. Se o PO diz 'quero 10 funcionalidades' e o time diz 'conseguimos 5', são 5. O PO pode negociar, mas não pode forçar. O Scrum Board é a visualização desse backlog. É basicamente um quadro Kanban dentro do Scrum — com colunas A Fazer, Em Progresso e Concluído. A cada dia, durante a Daily Meeting, o time atualiza o quadro. É assim que todo mundo vê o progresso. Notem que o Sprint Backlog é VIVO — muda durante a sprint. Se um dev termina uma tarefa, puxa a próxima. Se um impedimento surge, o quadro reflete isso."
-->

---

# 📦 Incremento — Detalhamento

### O que é?
- A **soma** de todos os itens do Product Backlog completados durante a sprint **+** os das sprints anteriores
- Deve estar em **estado utilizável** (pronto para entrega)

### Definition of Done (DoD):
Critérios que definem quando um item está **COMPLETO**:

| Critério | Exemplo |
|----------|---------|
| ✅ Código escrito e revisado | Code review feito por outro dev |
| ✅ Testes automatizados passando | Cobertura mínima de 80% |
| ✅ Documentação atualizada | README e API docs atualizados |
| ✅ Integrado ao branch principal | Merge no `main` sem conflitos |
| ✅ Aceito pelo PO | PO validou em ambiente de staging |

> ⚠️ Se não atende a **DoD**, NÃO pode ser considerado incremento e NÃO pode ser entregue.

<!-- 
🎤 **Fala do Professor:**

"O Incremento é o resultado do trabalho. É o que de fato foi construído e funciona. Um ponto muito importante é a Definition of Done — a DoD. É um checklist que o time define para dizer 'sim, isso está pronto'. Exemplo: o código foi escrito? Sim. Foi revisado por outro dev? Sim. Tem testes automatizados? Sim. Passou em todos? Sim. Está integrado? Sim. O PO validou? Sim. Então está DONE. Se qualquer um desses critérios não for atendido, o item NÃO está pronto. Isso é fundamental para a qualidade. Muitos times têm problemas porque definem 'feito' como 'o código funciona na minha máquina'. Isso NÃO é feito no Scrum."
-->

---

# 📅 Eventos do Scrum — Visão Geral

O Scrum define **5 eventos** (cerimônias):

```
┌─────────────────────────────────────────────────────────┐
│                     SPRINT (2-4 semanas)                │
│                                                         │
│  ┌──────────┐  ┌─────────────────────────┐  ┌───────┐  │
│  │ Sprint   │  │     Sprint Execution    │  │ Sprint│  │
│  │ Planning │  │                         │  │ Review│  │
│  └──────────┘  │   ┌─────────────────┐   │  └───────┘  │
│                │   │  Daily Meeting  │   │             │
│                │   │   (~15 min)     │   │  ┌───────┐  │
│                │   └─────────────────┘   │  │ Sprint│  │
│                │   (todos os dias)       │  │ Retro │  │
│                └─────────────────────────┘  └───────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
                    NOVA SPRINT
```

> 🕐 Todo evento tem **time-box** (tempo máximo): não pode estourar.

<!-- 
🎤 **Fala do Professor:**

"São 5 eventos no Scrum. A Sprint é o contêiner de todos os outros — é o período de tempo (2 a 4 semanas) onde tudo acontece. Começa com o Sprint Planning — onde o time decide o que vai fazer. Depois vem a Sprint Execution — onde o trabalho acontece de fato. Durante a execução, todos os dias tem o Daily Meeting — uma reunião rápida de 15 minutos. No final da sprint, tem o Sprint Review — onde o time mostra o que fez. E por último, a Sprint Retrospective — onde o time reflete sobre como melhorar. Um conceito importante: time-box. Cada evento TEM um tempo máximo. O Daily TEM que durar no máximo 15 minutos. Se passar de 15 minutos, algo está errado. Isso obriga o time a ser eficiente."
-->

---

# 📅 Sprint Planning — Detalhamento

### Objetivo:
Definir **o que** será entregue na sprint e **como** será feito.

### Perguntas-chave:
1. **O que** pode ser entregue nesta sprint? (Seleção do backlog)
2. **Como** o trabalho será realizado? (Plano de execução)

### Dinâmica:
| Etapa | Quem lidera | O que faz |
|-------|-------------|-----------|
| 1ª Parte | Product Owner | Apresenta as **prioridades** do backlog |
| 2ª Parte | Developers | Estima e seleciona os **itens** que cabem na sprint |
| Resultado | Time todo | Define o **Sprint Goal** (objetivo da sprint) |

### Duração máxima:
- Sprint de **2 semanas** → Planning de **4 horas**
- Sprint de **4 semanas** → Planning de **8 horas`

### Exemplo de Sprint Goal:
> *"Ao final desta sprint, o usuário poderá se cadastrar, fazer login e acessar seu perfil no sistema."*

<!-- 
🎤 **Fala do Professor:**

"O Sprint Planning é onde a sprint começa. É dividido em duas partes. Na primeira parte, o PO apresenta as prioridades — ele mostra o Product Backlog e diz 'essas são as funcionalidades mais importantes agora'. Na segunda parte, o time de desenvolvimento estima e decide quanto consegue fazer. É aqui que o time se compromete com a sprint. O resultado é o Sprint Goal — uma frase que resume o objetivo da sprint. Exemplo: 'nesta sprint, vamos entregar o cadastro e login do usuário'. Esse objetivo dá foco e direção. Se durante a sprint alguém perguntar 'por que estamos fazendo isso?', a resposta é o Sprint Goal. A duração é limitada: para uma sprint de 2 semanas, o planning pode durar no máximo 4 horas."
-->

---

# 📅 Daily Meeting — Detalhamento

### O que é?
- Reunião **diária** de **sincronização** do time
- **Time-box estrito**: máximo **15 minutos**

### 3 Perguntas Clássicas:
Cada membro responde:

| Pergunta | Exemplo |
|----------|---------|
| 1️⃣ O que fiz **ontem**? | *"Terminei a API de cadastro"* |
| 2️⃣ O que vou fazer **hoje**? | *"Vou começar os testes unitários"* |
| 3️⃣ Tenho algum **impedimento**? | *"Preciso de acesso ao servidor de staging"* |

### Regras importantes:
- ⏰ **Mesmo horário**, **mesmo local**, todos os dias
- 🚫 **Não é** reunião de status para o gerente
- ✅ É **sincronização** entre os membros do time
- 🧍‍♂️ Preferencialmente **em pé** (stand-up) para ser rápida

<!-- 
🎤 **Fala do Professor:**

"A Daily Meeting é talvez o evento mais mal compreendido do Scrum. Muita gente acha que é uma reunião de status onde cada um presta contas para o gerente. NÃO É. É uma reunião do TIME para o TIME. O objetivo é sincronização — todo mundo saber o que os outros estão fazendo e se há impedimentos. As três perguntas clássicas são simples: o que fiz ontem, o que vou fazer hoje, e se tenho impedimentos. É chamada de 'stand-up' porque, antigamente, as pessoas ficavam em pé para a reunião ser rápida. Se ficar sentado, o pessoal enrola e a reunião vira uma hora. A regra de 15 minutos é sagrada. Se precisar de mais tempo para discutir algo, faz uma reunião SEPARADA depois, com apenas as pessoas envolvidas."
-->

---

# 📅 Sprint Review — Detalhamento

### Objetivo:
**Inspecionar o incremento** e adaptar o Product Backlog.

### Dinâmica:
- 🎯 O time **demonstra** o que foi construído
- 👥 **Stakeholders** participam (clientes, diretoria, usuários)
- 💬 **Feedback** dos stakeholders é coletado
- 📋 Product Backlog é **atualizado** com base no feedback

### O que NÃO é:
- ❌ NÃO é uma apresentação formal de PowerPoint
- ❌ NÃO é uma "aprovação" do gerente
- ✅ É uma **revisão colaborativa** do produto

### Duração máxima:
- Sprint de **2 semanas** → Review de **2 horas**
- Sprint de **4 semanas** → Review de **4 horas**

<!-- 
🎤 **Fala do Professor:**

"A Sprint Review é o evento onde o time mostra o que construiu. É diferente de uma apresentação formal — aqui o time mostra o SOFTWARE FUNCIONANDO, não slides. Os stakeholders participam: o cliente, o usuário final, a diretoria. Eles veem o produto, testam, e dão feedback. Esse feedback é MUITO valioso, porque pode mudar as prioridades do Product Backlog. Exemplo: o time mostra o sistema de login, e o cliente diz 'nossa, ficou ótimo, mas precisamos também de login com Google'. Isso vai para o backlog com prioridade alta. O Review NÃO é uma aprovação formal — é uma revisão colaborativa. O time e os stakeholders juntos decidem os próximos passos."
-->

---

# 📅 Sprint Retrospective — Detalhamento

### Objetivo:
**Inspecionar o processo** e criar um plano de melhoria.

### Perguntas-chave:
| Pergunta | Exemplo de resposta |
|----------|-------------------|
| ✅ O que **funcionou** bem? | *"A comunicação com o PO melhorou muito"* |
| ❌ O que **NÃO funcionou**? | *"As Daily Meetings estavam demorando 30 min"* |
| 🔧 O que podemos **melhorar**? | *"Vamos usar timer de 15 min na Daily"* |

### Técnica popular — **Start, Stop, Continue**:
- 🟢 **Start**: O que devemos **começar** a fazer?
- 🔴 **Stop**: O que devemos **parar** de fazer?
- 🔵 **Continue**: O que devemos **continuar** fazendo?

### Duração máxima:
- Sprint de **2 semanas** → Retrospective de **1,5 horas**
- Sprint de **4 semanas** → Retrospective de **3 horas**

<!-- 
🎤 **Fala do Professor:**

"A Sprint Retrospective é o evento de melhoria contínua. É o momento onde o time PARA e reflete sobre o processo. Não é sobre o produto — é sobre COMO o time está trabalhando. As três perguntas: o que funcionou? O que não funcionou? O que podemos melhorar? Uma técnica muito popular é o Start, Stop, Continue. Exemplo: Start — vamos começar a fazer code review antes de cada merge. Stop — vamos parar de fazer reuniões desnecessárias de 1 hora. Continue — vamos continuar com as Daily em pé, pois estão funcionando bem. O mais importante é que a retrospective gera AÇÕES CONCRETAS. Não adianta apenas reclamar — tem que definir o que vai mudar e quem vai cuidar disso. Se não houver ação, a retrospective é inútil."
-->

---

# 🔄 O Ciclo Completo do Scrum

```
         Product Backlog (PO prioriza)
                  │
                  ▼
    ┌─────────────────────────┐
    │    SPRINT PLANNING      │ ◄── Seleciona itens do backlog
    │    (Time decide o que)  │
    └────────────┬────────────┘
                 │
                 ▼
    ┌─────────────────────────┐
    │    SPRINT EXECUTION     │ ◄── 2 a 4 semanas
    │                         │
    │  ┌───────────────────┐  │
    │  │  Daily Meeting    │  │ ◄── Todos os dias (15 min)
    │  └───────────────────┘  │
    │                         │
    │  Dev Team trabalha nos  │
    │  itens do Sprint Backlog│
    └────────────┬────────────┘
                 │
                 ▼
    ┌─────────────────────────┐
    │    SPRINT REVIEW        │ ◄── Mostra o incremento
    │    (Stakeholders veem)  │
    └────────────┬────────────┘
                 │
                 ▼
    ┌─────────────────────────┐
    │    SPRINT RETROSPECTIVE │ ◄── Melhora o processo
    │    (Time reflete)       │
    └────────────┬────────────┘
                 │
                 ▼
         NOVA SPRINT 🔄
```

<!-- 
🎤 **Fala do Professor:**

"Esse é o ciclo completo. Tudo começa no Product Backlog, que é priorizado pelo PO. No Sprint Planning, o time seleciona os itens. Durante a Sprint Execution, o time trabalha e faz Daily Meetings diários. No final, o Sprint Review mostra o incremento para os stakeholders. A Sprint Retrospective melhora o processo. E o ciclo recomeça. Cada sprint gera um incremento que pode ser entregue ao cliente. É assim que o Scrum entrega valor de forma contínua. Uma sprint atrás da outra, o produto vai crescendo e melhorando."
-->

---

# 📊 Exemplo Prático: Sprint de 2 Semanas

### Cenário: Sistema de Delivery de Comida

| Dia | Atividade | Duração |
|-----|-----------|---------|
| Seg (Semana 0) | **Sprint Planning** | 4h |
| Seg-Dom (Sem 1-2) | **Sprint Execution** + Daily | 15 min/dia |
| Sex (Semana 2) | **Sprint Review** | 2h |
| Sex (Semana 2) | **Sprint Retrospective** | 1,5h |
| **Total** | **1 sprint completa** | **10 dias úteis** |

### Itens da Sprint:
1. 🔴 **Cadastro de restaurante** (8 pts) → Concluído ✅
2. 🔴 **Cardápio digital** (13 pts) → Concluído ✅
3. 🟡 **Carrinho de compras** (5 pts) → Em progresso 🔄
4. 🟡 **Integrar pagamento** (8 pts) → A fazer 🔲

### Sprint Goal:
> *"O restaurante poderá cadastrar seu cardápio e o cliente poderá montar um pedido."*

<!-- 
🎤 **Fala do Professor:**

"Vamos ver um exemplo prático. Imagine um sistema de delivery de comida. A sprint dura 2 semanas. Na segunda-feira da primeira semana, o time faz o Sprint Planning — 4 horas para planejar tudo. Durante as 2 semanas, todos os dias tem o Daily Meeting de 15 minutos. Na sexta da segunda semana, tem o Sprint Review — 2 horas mostrando o que foi feito — e depois a Retrospective — 1,5 horas para melhorar o processo. Os itens selecionados foram cadastro de restaurante, cardápio digital, carrinho de compras e pagamento. O time se comprometeu com esses itens. No final da sprint, o cadastro e o cardápio foram concluídos. O carrinho ficou em progresso. O pagamento ainda não começou. Isso acontece — nem sempre tudo fica pronto. O importante é que o PO saiba disso e replaneje."
-->

---

# Parte 3
## PMO — Project Management Office

---

# 🏢 O que é um PMO?

**PMO** = **Project Management Office**
(Em português: **Escritório de Gerenciamento de Projetos**)

### Definição:
> É uma **estrutura organizacional** (departamento ou equipe) responsável por **padronizar e governar** os processos de gerenciamento de projetos dentro de uma organização.

### Analogia:
- Se a empresa é uma **orquestra**, o PMO é o **maestro** que garante que todos toquem em harmonia
- Se os projetos são **obras de construção**, o PMO é a **engenharia** que padroniza processos e materiais

### PMO NÃO é:
- ❌ Não é o **gerente de um projeto específico**
- ❌ Não é um **departamento de TI**
- ❌ Não faz o **trabalho operacional** dos projetos

<!-- 
🎤 **Fala do Professor:**

"Agora vamos falar do PMO. PMO significa Project Management Office — Escritório de Gerenciamento de Projetos. É uma estrutura organizacional que cuida da governança dos projetos. Pense numa empresa que tem 20 projetos acontecendo ao mesmo tempo. Quem garante que todos sigam os mesmos padrões? Quem garante que os relatórios sejam feitos? Quem compartilha as lições aprendidas entre os projetos? É o PMO. O PMO NÃO é o gerente de um projeto — ele é o guardião do processo de gestão de projetos. É como a ouro do futebol: ela não joga, mas define as regras, aplica as penalidades e garante que o jogo funcione."
-->

---

# 📊 Os 3 Tipos de PMO

### 1. 🏛️ PMO Corporativo / Estratégico
- Abrange **TODOS** os projetos da organização
- Ligado à **estratégia do negócio**
- Gerencia o **portfólio** completo de projetos
- Reporta diretamente à **alta direção** (CEO, CTO)

### 2. 🏢 PMO Departamental / Tático
- Focado em **uma área ou departamento**
- Define **padrões e metodologias** para a área
- Gerencia projetos **internos** do departamento
- Reporta ao **gerente da área**

### 3. ⚙️ PMO Operacional
- Focado em um **projeto específico** de alta complexidade
- Define padrões **específicos** para aquele projeto
- Foco em **prazos e entregas**
- Reporta ao **sponsor do projeto**

<!-- 
🎤 **Fala do Professor:**

"Existem três tipos principais de PMO. O Corporativo ou Estratégico é o mais alto — ele cuida de TODOS os projetos da empresa. Imagina uma empresa como o Itaú ou a Petrobras — centenas de projetos acontecendo. O PMO Corporativo garante que todos estejam alinhados com a estratégia da empresa. Ele decide quais projetos têm prioridade, aloca recursos entre departamentos, e reporta para a diretoria. O Departamental ou Tático é focado em uma área. Por exemplo, o departamento de TI pode ter seu próprio PMO que define como os projetos de TI serão geridos. O Operacional é para um projeto específico e complexo. Por exemplo, a construção de uma nova sede pode ter um PMO dedicado apenas para aquele projeto."
-->

---

# ⚙️ Responsabilidades do PMO

### Funções Estratégicas:
- 🎯 **Alinhar projetos** com a estratégia organizacional
- 📊 **Gerir o portfólio** de projetos (priorização)
- 💰 **Alocar recursos** entre projetos
- 📈 **Monitorar indicadores** de desempenho (KPIs)

### Funções de Apoio:
- 📋 **Definir metodologias** (Scrum, PMBOK, Kanban, etc.)
- 📊 **Estruturar relatórios** padronizados do portfólio
- 📅 **Gerenciar cronograma** em nível de portfólio
- 🔄 **Desenvolver melhorias** nos processos de gestão
- 📏 **Determinar métricas** e estimativas padrão
- 📢 **Facilitar comunicação** entre projetos e stakeholders
- 🤝 **Compartilhar recursos** (pessoas, ferramentas) entre projetos
- 📚 **Manter repositório** de lições aprendidas

<!-- 
🎤 **Fala do Professor:**

"As responsabilidades do PMO são amplas. Do lado estratégico, ele garante que os projetos estejam alinhados com a estratégia da empresa. Não adianta ter 50 projetos se nenhum deles contribui para os objetivos da organização. Ele gerencia o portfólio — decide quais projetos continuam, quais são cancelados, quais têm prioridade. Do lado de apoio, o PMO define os padrões. Qual metodologia usar? Como fazer relatórios? Quais métricas acompanhar? Ele também facilita a comunicação — muitas vezes, os projetos precisam compartilhar pessoas ou informações, e o PMO faz essa ponte. Uma função muito importante é manter o repositório de lições aprendidas. Se um projeto descobriu que uma abordagem não funciona, os outros projetos precisam saber para não repetir o erro."
-->

---

# 👤 O Profissional do PMO (Project Manager Officer)

**PMO** também pode se referir ao profissional: **Project Manager Officer** (Diretor de Projetos)

### Perfil do profissional:
- 🎓 Formação em **gestão**, **TI** ou áreas relacionadas
- 📜 Certificações valorizadas: **PMP**, **ACP**, **Scrum Master**, **PRINCE2**
- 🗣️ Habilidades de **comunicação** e **liderança**
- 📊 Visão **estratégica** e **analítica**
- 🤝 Capacidade de **negociação** e **influência**

### Atribuições:
- Estabelecer **cultura de gestão de projetos**
- Desenvolver **estratégias** de gerenciamento
- Manter a **governança** dos projetos
- Definir programas de **treinamento** e capacitação
- **Monitorar** relatórios e tomar decisões de intervenção
- Promover **melhoria contínua** nos processos

<!-- 
🎤 **Fala do Professor:**

"O profissional do PMO é um papel muito valorizado no mercado. Ele precisa ter uma combinação de habilidades técnicas e comportamentais. Do lado técnico, precisa entender de gestão de projetos, metodologias, métricas, orçamento. Do lado comportamental, precisa ser um excelente comunicador, ter visão estratégica, saber negociar. Certificações como PMP (do PMI), Scrum Master, e ACP (Agile Certified Practitioner) são muito valorizadas. O salário desse profissional é geralmente alto, pois lida diretamente com a estratégia da organização. Um PMO Officer pode ganhar entre R$ 10.000 e R$ 25.000 por mês, dependendo do porte da empresa."
-->

---

# 📈 Impacto do PMO — Dados Reais

### Pesquisa: *Pulse of the Profession* (PMI, 2017)

| Indicador | 🟢 Alta Maturidade PMO | 🔴 Baixa Maturidade PMO |
|-----------|:----------------------:|:-----------------------:|
| Projetos dentro do **prazo** | **88%** | 24% |
| Projetos dentro do **orçamento** | **90%** | 25% |
| Alcançaram **objetivos originais** | **92%** | 33% |
| Tiveram problemas de **escopo** | 28% | **68%** |
| Projetos **falharam** | 6% | **24%** |
| **Orçamento desperdiçado** | 14% | **46%** |

### Conclusão:
> 🏢 Empresas com PMO maduro têm **taxa de sucesso 3x maior** que empresas sem PMO.

> 💰 Empresas com PMO desperdiçam **3x menos orçamento** em projetos fracassados.

<!-- 
🎤 **Fala do Professor:**

"Esses dados são impressionantes. Olhem a diferença entre empresas com PMO maduro e sem PMO. Com PMO maduro, 88% dos projetos ficam no prazo. Sem PMO, apenas 24%. Com PMO, 92% alcançam os objetivos. Sem PMO, apenas 33%. E a parte mais chocante: empresas sem PMO desperdiçam 46% do orçamento em projetos que falham, contra apenas 14% em empresas com PMO. Esses dados mostram que investir em um PMO não é um custo — é um INVESTIMENTO que se paga rapidamente. Agora, é importante entender que isso não acontece da noite para o dia. Um PMO leva tempo para amadurecer. Começa como operacional, depois evolui para tático e, finalmente, para estratégico."
-->

---

# 📐 Priorização de Portfólio — Técnicas

### O que é Priorização de Portfólio?
Selecionar e classificar projetos por **critérios específicos** para decidir quais investir primeiro.

### Critérios comuns:
| Critério | Pergunta-chave |
|----------|----------------|
| 💰 **Retorno sobre investimento** | Este projeto vai dar lucro? |
| 🎯 **Alinhamento estratégico** | Este projeto contribui para os objetivos da empresa? |
| ⚠️ **Riscos** | Quais são os riscos envolvidos? |
| 📊 **Impacto organizacional** | Quantas áreas/people são impactadas? |
| 💵 **Recursos disponíveis** | Temos pessoas e dinheiro para isso? |

### Indicadores de Viabilidade Financeira:

| Indicador | Descrição |
|-----------|-----------|
| **TIR** | Taxa Interna de Retorno — % de retorno do investimento |
| **VPL** | Valor Presente Líquido — valor do projeto hoje |
| **Payback** | Tempo necessário para recuperar o investimento |

<!-- 
🎤 **Fala do Professor:**

"A priorização de portfólio é uma das funções mais importantes do PMO. Quando uma empresa tem muitos projetos e recursos limitados, precisa escolher quais investir primeiro. Os critérios incluem retorno financeiro, alinhamento com a estratégia, riscos, impacto e recursos disponíveis. Os indicadores financeiros são fundamentais. O TIR (Taxa Interna de Retorno) mostra qual a porcentagem de retorno que o projeto gera. Um projeto com TIR de 20% é melhor que um com 10%. O VPL (Valor Presente Líquido) mostra quanto o projeto vale em termos de hoje — se o VPL é positivo, o projeto vale a pena. O Payback mostra quanto tempo leva para recuperar o investimento. Um projeto com payback de 6 meses é melhor que um com payback de 3 anos."
-->

---

# 📐 Técnica AHP — Processo de Hierarquia Analítica

**AHP** = **Analytic Hierarchy Process** (Thomas Saaty, 1970s)

### O que é?
Técnica de **decisão multicriterial** que ajuda a escolher a melhor opção quando há múltiplos critérios.

### Passo a passo:

**Passo 1:** Definir os **critérios** (ex: Custo, Prazo, Alinhamento Estratégico)

**Passo 2:** Definir as **alternativas** (ex: Projeto A, Projeto B, Projeto C)

**Passo 3:** Criar **matrizes de comparação par a par** dos critérios

**Passo 4:** Calcular a **prioridade** de cada alternativa

**Passo 5:** Multiplicar pela **prioridade dos critérios** e somar

### Regra de comparação:
> *"Se o Critério X é 'muito mais importante' que o Critério Y, atribuímos nota 7. Se é 'igualmente importante', nota 1."*

<!-- 
🎤 **Fala do Professor:**

"O AHP é uma técnica muito poderosa e elegante. Foi criada por Thomas Saaty nos anos 70 e é usada no mundo inteiro. A ideia é simples: em vez de comparar todos os projetos de uma vez — o que é complicado quando há muitos critérios — você compara PAR A PAR. Primeiro, compara os critérios entre si: 'Custo é mais importante que Prazo?' Se sim, quanto mais importante? Em uma escala de 1 a 9. Depois, para cada critério, compara os projetos entre si: 'Projeto A tem custo melhor que Projeto B?' O resultado é uma pontuação final que mostra qual projeto é o melhor considerando TODOS os critérios. É uma forma objetiva de tomar decisões que normalmente são subjetivas."
-->

---

# 📐 AHP — Exemplo Numérico Completo

### Cenário: Escolher entre 3 Projetos (A, B, C)

**Critérios:** Custo, Prazo, Alinhamento Estratégico

**Passo 1 — Comparação dos Critérios:**

| | Custo | Prazo | Alinhamento |
|---|:-----:|:-----:|:-----------:|
| **Custo** | 1 | 3 | 1/2 |
| **Prazo** | 1/3 | 1 | 1/4 |
| **Alinhamento** | 2 | 4 | 1 |

**Prioridades calculadas:** Custo = 33,2% | Prazo = 12,1% | Alinhamento = 54,7%

**Passo 2 — Comparação dos Projetos por critério:**

| Projeto | Custo | Prazo | Alinhamento |
|---------|:-----:|:-----:|:-----------:|
| Projeto A | 55% | 60% | 57% |
| Projeto B | 20% | 15% | 10% |
| Projeto C | 25% | 25% | 33% |

**Passo 3 — Cálculo Final:**

| Projeto | Cálculo | **Resultado** |
|---------|---------|:------------:|
| **Projeto A** | (0,55×0,332)+(0,60×0,121)+(0,57×0,547) | **57,11%** |
| **Projeto C** | (0,25×0,332)+(0,25×0,121)+(0,33×0,547) | **30,03%** |
| **Projeto B** | (0,20×0,332)+(0,15×0,121)+(0,10×0,547) | **12,86%** |

> 🏆 **Projeto A vence** com 57,11% de preferência!

<!-- 
🎤 **Fala do Professor:**

"Vamos ver o AHP na prática. Temos 3 projetos e 3 critérios. Primeiro, comparamos os critérios entre si. Na matriz, vemos que Alinhamento Estratégico é mais importante que Custo (nota 2), e muito mais importante que Prazo (nota 4). Custo é mais importante que Prazo (nota 3). Depois, para cada critério, comparamos os projetos. O Projeto A é melhor em todos os critérios: 55% no custo, 60% no prazo, 57% no alinhamento. No cálculo final, multiplicamos as prioridades dos critérios pelas prioridades dos projetos e somamos. O resultado: Projeto A com 57,11%, Projeto C com 30,03%, e Projeto B com 12,86%. O PMO usaria essa análise para recomendar que o Projeto A seja priorizado."
-->

---

# Parte 4
## Scrum vs. Cascata — Quando Usar Cada Um?

---

# ⚖️ Scrum vs. Cascata — Comparação Detalhada

| Aspecto | 🏛️ Cascata | 🏉 Scrum |
|---------|------------|---------|
| **Abordagem** | Sequencial (fases lineares) | Iterativa (sprints) |
| **Requisitos** | Definidos no início, congelados | Evoluem a cada sprint |
| **Entrega** | Uma entrega no final | Entregas incrementais |
| **Mudanças** | Difíceis e custosas | Bem-vindas a qualquer momento |
| **Feedback** | No final do projeto | A cada sprint (2-4 semanas) |
| **Documentação** | Extensa e detalhada | Mínima necessária |
| **Risco** | Descoberto tardiamente | Descoberto cedo |
| **Cliente** | Participa no início e no final | Participa continuamente |
| **Equipe** | Hierárquica | Auto-organizável |
| **Melhor para** | Requisitos estáveis e conhecidos | Requisitos incertos e mutáveis |

<!-- 
🎤 **Fala do Professor:**

"Essa é uma comparação fundamental. Vamos linha por linha. Na abordagem, o Cascata é sequencial — uma fase depois da outra. O Scrum é iterativo — ciclos curtos. Nos requisitos, o Cascata exige que estejam definidos e congelados no início. O Scrum permite que evoluam. Na entrega, o Cascata entrega tudo no final. O Scrum entrega pedaços ao longo do tempo. Nas mudanças, o Cascata custa caro para mudar. O Scrum abraça mudanças. No feedback, o Cascata recebe feedback no final — quando já é tarde. O Scrum recebe feedback a cada 2 semanas. Na documentação, o Cascata precisa de muita documentação. O Scrum precisa do mínimo necessário. No risco, o Cascata descobre problemas tarde. O Scrum descobre cedo. E no cliente, o Cascata tem participação limitada. O Scrum tem participação contínua."
-->

---

# 🎯 Quando Usar Scrum vs. Cascata?

### ✅ Use **Scrum** quando:
- Requisitos são **incertos** ou **mudam frequentemente**
- O projeto é **complexo** e com **muitas variáveis**
- O cliente precisa **ver resultados rapidamente**
- A tecnologia é **nova** ou pouco conhecida
- O time é **multifuncional** e **auto-organizável**
- O projeto permite **entregas incrementais**

### ✅ Use **Cascata** quando:
- Requisitos são **claros, estáveis e bem definidos**
- A tecnologia é **conhecida e dominada**
- O projeto é **regulatório** (ex: legislação exige documentação completa)
- O cliente **não pode participar** frequentemente
- O projeto é **simples e previsível**
- Existe **contrato fixo** com escopo fechado

### 💡 Na prática:
> Muitas empresas usam **abordagens híbridas** — combinando elementos de ambos.

<!-- 
🎤 **Fala do Professor:**

"A grande pergunta: quando usar cada um? Scrum é ideal para projetos complexos, com requisitos que mudam, e onde o cliente pode participar ativamente. Startups, produtos digitais, aplicativos — geralmente usam Scrum. Cascata é ideal para projetos previsíveis, com requisitos estáveis, e onde a documentação é obrigatória. Sistemas governamentais, projetos regulatórios, contratos com escopo fechado — geralmente usam Cascata. E na prática real, muitas empresas usam híbridos. Por exemplo, usam Cascata para a fase de planejamento e Scrum para o desenvolvimento. Ou usam Scrum para o desenvolvimento, mas com documentação mais pesada para atender requisitos regulatórios. O importante é escolher a abordagem certa para o CONTEXTO, não por modismo."
-->

---

# Parte 5
## Exercícios e Atividades Práticas

---

# 💡 Exercício 1 — Estudo de Caso (15 min)

### Cenário:
A empresa **TechFood** quer desenvolver um **aplicativo de delivery de comida**. O mercado é altamente competitivo e as funcionalidades mudam frequentemente baseadas no feedback dos usuários.

### Em grupos, respondam:

1. **Qual metodologia** vocês recomendariam? Por quê?
2. Definam os **3 papéis do Scrum** para este projeto:
   - Quem seria o **Product Owner**?
   - Quem seria o **Scrum Master**?
   - Quem comporia o **time de desenvolvimento**?
3. Listem **5 itens** para o Product Backlog (com prioridade)
4. Definam o **Sprint Goal** para a primeira sprint
5. Quais seriam os critérios da **Definition of Done**?

<!-- 
🎤 **Fala do Professor:**

"Vamos para o exercício prático. Formem grupos de 4 a 5 pessoas. Vocês vão imaginar que são a equipe da TechFood, uma empresa que quer criar um app de delivery. Respondam as 5 perguntas. Pensem no Product Owner — provavelmente seria alguém da área de negócio que conhece o mercado de delivery. O Scrum Master seria alguém com experiência em metodologias ágeis. O time de desenvolvimento precisaria ser multifuncional. Para o backlog, pensem nas funcionalidades mais importantes para um MVP — Minimum Viable Product. Para o Sprint Goal, foquem no que é essencial para o primeiro lançamento. E para a DoD, pensem no que significa 'feito' para vocês. Vocês têm 15 minutos. Depois cada grupo apresenta."
-->

---

# 💡 Exercício 2 — Cenário de PMO (10 min)

### Cenário:
A **Empresa XYZ** tem **15 projetos simultâneos** e enfrenta:
- 📉 60% dos projetos atrasam
- 💰 Estouram o orçamento em 40% em média
- 🔄 Cada gerente usa um método diferente
- 📊 Não existem indicadores padronizados
- ❌ Não há compartilhamento de lições aprendidas

### Em grupos, discutam:

1. A empresa **precisa de um PMO**? Por quê?
2. **Que tipo de PMO** vocês recomendariam?
3. Quais seriam as **3 primeiras ações** que o PMO tomaria?
4. Quais **indicadores (KPIs)** vocês monitorariam?
5. Como vocês **convenceriam a diretoria** a investir no PMO?

### Dica:
> Usem os dados reais do PMI (slide anterior) para argumentar!

<!-- 
🎤 **Fala do Professor:**

"Agora um exercício sobre PMO. A Empresa XYZ está com sérios problemas — 60% dos projetos atrasam, o orçamento estoura em 40%, cada gerente faz de um jeito diferente, não tem indicadores, não tem lições aprendidas. É um cenário caótico. Vocês precisam responder se precisam de um PMO, que tipo, as 3 primeiras ações, os KPIs, e como convencer a diretoria. Para convencer a diretoria, usem os dados do PMI que mostramos: empresas com PMO maduro têm 88% dos projetos no prazo contra 24% sem PMO. Isso é um argumento poderoso. Lembrem-se: o PMO é um investimento, não um custo. Os 10 minutos começam agora."
-->

---

# 💡 Exercício 3 — Simulação de Daily Meeting (5 min)

### Simulação rápida:
Cada aluno do grupo assume um papel e responde as 3 perguntas:

| Aluno | Papel no Scrum | Perguntas |
|-------|---------------|-----------|
| Aluno 1 | Product Owner | *Priorizei o backlog para a sprint...* |
| Aluno 2 | Scrum Master | *Identifiquei um impedimento...* |
| Aluno 3 | Dev Frontend | *Terminei a tela de login...* |
| Aluno 4 | Dev Backend | *Comecei a API de pagamentos...* |
| Aluno 5 | Tester | *Testei a funcionalidade X...* |

### Cada um responde:
1. ✅ **O que fiz** desde a última Daily?
2. 📋 **O que vou fazer** hoje?
3. 🚧 **Tenho algum impedimento**?

> 🎯 **Objetivo:** Vivenciar na prática como funciona uma Daily Meeting.

<!-- 
🎤 **Fala do Professor:**

"Vamos fazer uma simulação rápida da Daily Meeting. Cada membro do grupo assume um papel: Product Owner, Scrum Master, Dev Frontend, Dev Backend e Tester. Cada um vai responder as 3 perguntas clássicas: o que fez, o que vai fazer, e se tem impedimentos. Imaginem que estão no meio de uma sprint do app de delivery. O PO pode dizer que priorizou a funcionalidade de pagamento. O SM pode dizer que identificou que o time precisa de um servidor de staging. O Dev Frontend pode dizer que terminou a tela de login. O Dev Backend pode dizer que começou a API. O Tester pode dizer que testou o cadastro. Lembrem-se: 15 minutos no máximo para o grupo inteiro. Depois, vamos discutir como foi a experiência."
-->

---

# 💡 Exercício 4 — Reflexão Individual (5 min)

Respondam individualmente no caderno:

1. **Scrum vs. Cascata:** Em qual cenário profissional você pretende trabalhar? Qual metodologia seria mais adequada?

2. Se você fosse **criar um PMO** em uma empresa de tecnologia com 50 pessoas, quais seriam as **3 primeiras ações**?

3. Quais **indicadores** você usaria para medir o sucesso de um projeto? (Liste pelo menos 3)

4. **Opinião pessoal:** O Scrum é apenas uma moda ou é uma evolução real na gestão de projetos?

5. O que você achou mais **desafiador** no Scrum? Por quê?

### 🤔 Reflexão final:
> *"A metodologia certa depende do contexto, não da preferência pessoal."*

<!-- 
🎤 **Fala do Professor:**

"Agora uma reflexão individual. Peguem o caderno e respondam as 5 perguntas. Não precisa ser longo — frases curtas já bastam. A pergunta 1 é sobre o futuro profissional de vocês. A pergunta 2 é sobre PMO. A pergunta 3 é sobre métricas. A pergunta 4 é sobre opinião pessoal — será que o Scrum é modismo ou evolução? E a pergunta 5 é sobre desafios. Eu vou circular pela sala para ajudar. Vocês têm 5 minutos. Depois, vamos fazer uma discussão rápida com base nas respostas."
-->

---

# Parte 6
## Resumo, Conceitos-Chave e Próximos Passos

---

# 📝 Mapa Mental da Aula

```
                    ┌──────────────────────┐
                    │  GESTÃO DE PROJETOS  │
                    │      (Aula 4)        │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
     ┌────────▼───────┐ ┌─────▼──────┐ ┌───────▼──────┐
     │ METODOLOGIAS   │ │   SCRUM    │ │     PMO      │
     │    ÁGEIS       │ │            │ │              │
     └────────┬───────┘ └─────┬──────┘ └───────┬──────┘
              │               │                │
        ┌─────┴─────┐   ┌────┴────┐     ┌─────┴─────┐
        │ Manifesto │   │ Papéis  │     │   Tipos   │
        │   Ágil    │   │Artefatos│     │Responsabi-│
        │ Valores   │   │ Eventos │     │lidades    │
        │ Princípios│   │ Ciclo   │     │ Indicadores│
        └───────────┘   └─────────┘     └───────────┘
```

<!-- 
🎤 **Fala do Professor:**

"Vamos fazer o resumo da aula com esse mapa mental. Temos 3 grandes blocos. Primeiro: Metodologias Ágeis — o Manifesto, os valores, os princípios, e o panorama das metodologias. Segundo: Scrum — os papéis (PO, SM, Developers), os artefatos (Product Backlog, Sprint Backlog, Incremento), os eventos (Planning, Daily, Review, Retrospective) e o ciclo completo. Terceiro: PMO — os tipos (Corporativo, Departamental, Operacional), as responsabilidades, os indicadores de impacto, e as técnicas de priorização como o AHP. Tudo isso se conecta: as metodologias ágeis fundamentam o Scrum, e o PMO pode governar tanto projetos ágeis quanto tradicionais."
-->

---

# 📝 Conceitos-Chave para Guardar

| # | Conceito | Definição Essencial |
|---|----------|-------------------|
| 1 | **Manifesto Ágil** | 4 valores + 12 princípios que orientam metodologias ágeis (2001) |
| 2 | **Scrum** | Framework ágil iterativo e incremental para projetos complexos |
| 3 | **Product Owner** | Voz do cliente — gerencia e prioriza o Product Backlog |
| 4 | **Scrum Master** | Guardião do processo — facilitador e coach do time |
| 5 | **Developers** | Time multifuncional e auto-organizável que constrói o produto |
| 6 | **Sprint** | Período de 2-4 semanas onde um incremento é criado |
| 7 | **Product Backlog** | Lista priorizada de funcionalidades do produto |
| 8 | **Definition of Done** | Critérios que definem quando um item está "completo" |
| 9 | **PMO** | Escritório de governança e gestão de projetos |
| 10 | **AHP** | Técnica de priorização multicriterial de projetos |

<!-- 
🎤 **Fala do Professor:**

"Esses são os 10 conceitos-chave que vocês precisam guardar. São os fundamentos. Se alguém perguntar 'o que é Scrum?', vocês precisam saber responder. Se perguntar 'qual a diferença entre Product Owner e Scrum Master?', precisam saber. Se perguntar 'o que faz um PMO?', precisam saber. Esses conceitos vão aparecer nas provas, nos exercícios futuros, e principalmente na vida profissional de vocês. Não é para decorar — é para entender. Cada um desses conceitos tem uma aplicação prática no mercado."
-->

---

# 📚 Referências Bibliográficas

### Obrigatórias:
- **Schwaber, K. & Sutherland, J.** (2020). *The Scrum Guide*. Disponível em: scrumguides.org
- **PMI** (2017). *Pulse of the Profession*. Project Management Institute
- **Takeuchi, H. & Nonaka, I.** (1986). *The New New Product Development Game*. Harvard Business Review

### Complementares:
- **Schwaber, K.** (2004). *Agile Project Management with Scrum*. Microsoft Press
- **Saaty, T. L.** (1990). *How to Make a Decision: The Analytic Hierarchy Process*. European Journal of Operational Research
- **PMI** (2021). *A Guide to the Project Management Body of Knowledge (PMBOK Guide)* — 7ª edição
- **Rigby, D. Sutherland, J. & Takeuchi, H.** (2016). *Embracing Agile*. Harvard Business Review

### Sites Úteis:
- 📄 **scrumguides.org** — Guia oficial do Scrum
- 📄 **pmi.org** — Project Management Institute
- 📄 **scrumalliance.org** — Scrum Alliance

<!-- 
🎤 **Fala do Professor:**

"Essas são as referências bibliográficas. As obrigatórias são o Scrum Guide de 2020 — que é o guia oficial e tem apenas 13 páginas, recomendo muito a leitura — o Pulse of the Profession do PMI, que tem os dados sobre PMO, e o artigo original do Takeuchi e Nonaka de 1986 na Harvard Business Review. As complementares são para quem quiser se aprofundar. O livro do Schwaber é excelente para entender Scrum na prática. O Saaty é o criador do AHP. E o artigo do Rigby na Harvard Business Review de 2016 é ótimo para entender como empresas reais estão adotando ágil."
-->

---

# 📅 Próximas Aulas

### Aula 5 — Business Model Canvas
- 🎯 Ferramenta de **planejamento estratégico** de negócios
- 📊 Os **9 blocos** do Canvas
- 🏢 **Estudo de caso** prático

### Aula 6 — Ferramentas de Gestão de Projetos
- 🛠️ **Jira**, **Trello**, **Asana**, **MS Project**
- 📋 Como usar na prática
- 📊 **Relatórios** e **dashboards**

### Aula 7 — Revisão e Prova
- 📝 Revisão de todo o conteúdo
- 💡 Exercícios preparatórios
- 🎯 Dicas para a avaliação

> 📚 **Dica:** Releiam o Scrum Guide (scrumguides.org) antes da próxima aula!

<!-- 
🎤 **Fala do Professor:**

"Para as próximas aulas, temos conteúdos muito práticos. Na Aula 5, vamos aprender o Business Model Canvas — uma ferramenta visual para planejar negócios. Na Aula 6, vamos colocar a mão na massa com ferramentas reais como Jira e Trello. E na Aula 7, teremos revisão para a prova. A dica importante: leiam o Scrum Guide antes da próxima aula. São apenas 13 páginas e vai ajudar muito na fixação do conteúdo. Qualquer dúvida, me mandem por e-mail ou venham conversar no horário de atendimento."
-->

---

<!-- _class: lead -->

# 📝 Resumo Final da Aula

### O que aprendemos hoje:

✅ **Por que** as metodologias ágeis surgiram (limitações do Cascata)

✅ O **Manifesto Ágil** — 4 valores + 12 princípios (2001)

✅ O **Scrum completo** — papéis, artefatos, eventos e ciclo

✅ O **PMO** — tipos, responsabilidades e impacto comprovado

✅ **AHP** — técnica de priorização multicriterial

✅ **Scrum vs. Cascata** — quando usar cada um

### 💡 Frase para levar:
> *"Scrum não é sobre seguir regras — é sobre entregar valor de forma contínua e colaborativa."*

<!-- 
🎤 **Fala do Professor:**

"Esse é o resumo final. Vocês aprenderam hoje: o porquê das metodologias ágeis, o Manifesto Ágil, o Scrum completo com todos os detalhes, o PMO e seus tipos, a técnica AHP de priorização, e quando usar Scrum versus Cascata. É bastante conteúdo, mas são fundamentos que vocês vão usar na vida profissional. A frase que eu quero que vocês levem é: 'Scrum não é sobre seguir regras — é sobre entregar valor de forma contínua e colaborativa.' Se vocês entenderem isso, entenderam o espírito do Scrum. Na próxima aula, vamos para o Business Model Canvas. Bom descanso e bons estudos!"
-->

---

<!-- _class: lead -->

# Dúvidas? 🤔

**Gestão de Projetos — Aula 4**
**Scrum e PMO**

📧 Contato do professor

---

<!-- _class: lead -->

# Material Complementar 📖

### Quer se aprofundar?

🎮 **Simulação de Scrum online:**
[scrumgame.com](https://www.scrumgame.com)

📹 **Vídeos recomendados:
- *"Scrum em 16 minutos"* — YouTube
- *"O que é PMO?"* — YouTube

📱 **Apps úteis:
- **Jira** — Gestão de projetos ágeis
- **Trello** — Quadros Kanban
- **Miro** — Colaboração visual

📄 **Leitura recomendada:
- Scrum Guide 2020 (scrumguides.org) — apenas 13 páginas!

<!-- 
🎤 **Fala do Professor:**

"Para quem quiser se aprofundar, deixo essas sugestões. O Scrum Game é um simulador online onde você pode praticar Scrum de forma gamificada. No YouTube, tem vídeos excelentes explicando Scrum em poucos minutos. Os apps como Jira e Trello são ferramentas que vocês vão usar no mercado de trabalho — já vão se familiarizando. E o Scrum Guide é a leitura mais importante — são apenas 13 páginas e é o documento oficial. Muito obrigado pela atenção de hoje. Até a próxima aula!"
-->