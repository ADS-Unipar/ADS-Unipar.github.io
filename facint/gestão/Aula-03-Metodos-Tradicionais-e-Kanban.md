---
marp: true
theme: default
paginate: true

---

<!-- _class: lead -->

# Gestão de Projetos
## Aula 3 — Métodos Tradicionais e Kanban
 


<!-- 
🎤 **Fala do Professor:**

"Bom dia/tarde a todos! Sejam bem-vindos à Aula 3 de Gestão de Projetos. Hoje vamos falar sobre dois temas muito importantes: as metodologias tradicionais de desenvolvimento de software, com foco no modelo Cascata, e depois vamos conhecer o Kanban, uma metodologia ágil muito popular no mercado. Prestem atenção, porque esses conceitos vão aparecer bastante nas próximas aulas e nos exercícios."
-->
---

# 📚 Metodologias Tradicionais

Também chamadas de **metodologias orientadas à documentação**:

### Contexto histórico:
- Software para **mainframes** e terminais burros
- Computadores limitados, sem ferramentas modernas
- Necessidade de rigor no desenvolvimento

### 3 Pilares:
- ✅ Software **criticamente planejado**
- ✅ Software **criticamente documentado**
- ✅ Software **criticamente testado**

<!-- 
🎤 **Fala do Professor:**

"As metodologias tradicionais nasceram numa época em que os computadores eram enormes — os chamados mainframes — e os terminais eram 'burros', ou seja, não tinham processamento próprio. Nesse cenário, não existiam as ferramentas modernas que temos hoje, então o desenvolvimento de software exigia muito rigor. Os três pilares são fundamentais: o software precisava ser criticamente planejado, documentado e testado. Percebam que a documentação era essencial, porque sem ela era impossível dar manutenção no sistema depois."
-->

---

# 📖 Metodologias Tradicionais

| Metodologia | Característica |
|-------------|----------------|
| **Cascata (Waterfall)** | Sequencial e linear |
| **Modelo em V** | Verificação em cada fase |
| **Modelo em Espiral** | Iterações com análise de risco |
| **Modelo Incremental** | Entregas parciais |
| **RUP** | Processo unificado racional |
| **Five-Phase Model** | Cinco fases definidas |
| **RAD** | Desenvolvimento rápido |

<!-- 
🎤 **Fala do Professor:**

"Aqui temos as principais metodologias tradicionais. O Cascata é o mais conhecido e vamos aprofundar nele hoje. O Modelo em V é uma evolução do Cascata, onde cada fase de desenvolvimento tem uma fase de teste correspondente. O Modelo em Espiral introduz a análise de risco em cada iteração. O Incremental entrega o software em partes. O RUP, criado pela IBM, é um processo mais completo. O Five-Phase e o RAD são variações focadas em velocidade. Não precisamos decorar todos agora, mas é importante conhecer o panorama."
-->

---

# 🌊 Modelo Cascata (Waterfall)

Criado para minimizar problemas:
- Desenvolvimento defeituoso de software
- Baixa qualidade e documentação precária
- Poucos requisitos levantados
- Muito retrabalho e depurações demoradas

---
### Características:
- 📐 Modelo **sequencial e sistemático**
- 📄 Etapas **completamente finalizadas** antes de avançar
- 📝 Processos **rígidos de documentação**
- 🧪 Testes **à exaustão**
- 🔒 Preza pela **estabilidade** do software
- 📦 Software entregável **somente ao final**

<!-- 
🎤 **Fala do Professor:**

"O modelo Cascata foi criado justamente para resolver os problemas crônicos do desenvolvimento de software da época: defeitos, baixa qualidade, poucos requisitos levantados e muito retrabalho. Percebam as características: é sequencial e sistemático — você só passa para a próxima fase quando a anterior está completamente finalizada. A documentação é rígida, os testes são exaustivos e a prioridade é a estabilidade. O grande 'porém'? O software só fica pronto no final do projeto. Imaginem esperar meses para ver o resultado!"
-->

---

# 📋 Fase 1: Requisitos

Levantamento e análise com o cliente:
- Identificar **requisitos funcionais** e não funcionais
- Descobrir **etapas do negócio**
- Deixar claro o que o **cliente necessita**
---
### Técnicas utilizadas:
| Técnica | Exemplo |
|---------|---------|
| **Entrevistas** | Departamentos, usuários, gerentes |
| **Workshops** | Brainstorms colaborativos |
| **Diagramação** | UML, BPMN, VSM |
| **Frameworks** | SIPOC, DMAIC, PDCA |

<!-- 
🎤 **Fala do Professor:**

"A primeira fase do Cascata é o levantamento de requisitos. Aqui você vai até o cliente, conversa com os stakeholders — gerentes, usuários, departamentos — e tenta entender exatamente o que o sistema precisa fazer. Existem requisitos funcionais, que são as funções propriamente ditas, e requisitos não funcionais, como performance, segurança, usabilidade. As técnicas mais usadas são entrevistas, workshops de brainstorm, diagramação com UML e BPMN, e frameworks como SIPOC e PDCA. Se errar aqui, o projeto inteiro vai para o buraco. Requisito mal levantado é a causa número um de fracasso em projetos."
-->

---

# 📐 Fase 2: Projeto

Análise e planejamento detalhado:
- Analisar os requisitos levantados
- Elencar e **priorizar funcionalidades**
- Estimar **custos e prazos**
- Designar atividades e gerar **product backlog**
---
### Ferramentas:
- **Frameworks:** PMBOK, PRINCE
- **Estimativas:** APF, APCU, APH
- **Prototipação:** Mockups, esboços
- **Análise financeira:** Fluxos, previsões de caixa

<!-- 
🎤 **Fala do Professor:**

"Na fase de Projeto, a gente pega tudo que foi levantado na fase de requisitos e começa a analisar em detalhes. Aqui a gente prioriza funcionalidades — nem tudo pode ser feito ao mesmo tempo, então precisamos definir o que é mais importante. Também estimamos custos e prazos, que é uma tarefa difícil mas essencial. Usamos frameworks como PMBOK e PRINCE para organizar o processo, e técnicas de estimativa como APF, APCU e APH. A prototipação com mockups ajuda o cliente a visualizar o que será construído antes mesmo de começar a codar."
-->

---

# ⚡ Fase 3: Implementação

Desenvolvimento do software:
- Domínio completo das **ferramentas**
- Capacitar equipe e usar **boas práticas**
- Implementar cada **funcionalidade prevista**
- Cronometrar e controlar **tempo**
- **Versionar** o projeto
---
### Ferramentas:
- **Artefatos:** Linguagens, IDEs, SGBDs, Git/SVN
- **Automação:** DevOps, SecOps, DevSecOps
- **Gestão:** MS Project, Gantt, Kanban
- **Qualidade:** Revisão de código, testes unitários

<!-- 
🎤 **Fala do Professor:**

"Chegamos à fase de Implementação — que é onde o código é escrito de verdade. Aqui é fundamental que a equipe domine as ferramentas: linguagens de programação, IDEs, bancos de dados, controle de versão com Git. O DevOps e o DevSecOps entram para automatizar processos de build e deploy. A gestão do tempo é crucial — usamos ferramentas como MS Project e Gantt para acompanhar o cronograma. E lembrem-se: versionar o projeto não é opcional, é obrigatório. Quem não versiona, perde trabalho."
-->

---

# 🧪 Fase 4: Verificação

Testes e validação:
- Identificar **casos de teste** por requisito
- Testar **funcionalidades implementadas**
- Documentar testes e adicionar **evidências**
- Comparar requisitos com funcionalidades
- Gerar retorno de **não conformidades**
---
### Ferramentas:
- **Testes manuais:** Ponta a ponta, desempenho
- **Frameworks:** Selenium, Cypress, Cucumber
- **Métricas:** Incidentes, defeitos, cobertura de testes

<!-- 
🎤 **Fala do Professor:**

"A fase de Verificação é onde a gente descobre se o software funciona mesmo. Identificamos casos de teste para cada requisito — ou seja, para cada coisa que o cliente pediu, a gente cria um teste para verificar se foi implementada corretamente. Documentamos tudo com evidências, e se encontrarmos não conformidades, geramos um retorno para a equipe de desenvolvimento. As ferramentas como Selenium e Cypress automatizam esses testes, o que é muito mais eficiente do que testar tudo manualmente."
-->

---

# 🔧 Fase 5: Manutenção

Encerramento e sustentação:
- Iniciar fase de **encerramento**
- Disponibilizar software para **teste do cliente**
- Iniciar **ciclo de vida** do produto
- Executar **implantação** no cliente
- Criar equipe de **sustentação e help desk**
---
### Ferramentas:
- Software de **gestão de chamados**
- **Métricas:** % resolução, incidentes por ticket
- **Análise de custo:** Custo por atendimento/correção
- **Bases de conhecimento:** Roteiros, FAQs

<!-- 
🎤 **Fala do Professor:**

"A última fase do Cascata é a Manutenção. Muita gente acha que o trabalho termina quando o software é entregue, mas não é bem assim. Aqui a gente faz o encerramento do projeto, disponibiliza o software para o cliente testar, e aí começa o ciclo de vida do produto — que pode durar anos! É preciso criar uma equipe de sustentação e help desk para resolver problemas que vão surgir. As métricas aqui são importantes: percentual de resolução, custo por atendimento, tempo médio de resolução. E as bases de conhecimento com roteiros e FAQs ajudam a equipe a resolver problemas recorrentes mais rápido."
-->

---

# ✅ Cascata — Quando usar?

### Recomendado quando:
- ✔️ Requisitos **muito bem definidos**
- ✔️ Deseja-se **estabilidade** do produto
- ✔️ Há **domínio completo** da tecnologia
- ✔️ Todos os **recursos disponíveis** a todo momento
- ✔️ O projeto **não é muito grande**

<!-- 
🎤 **Fala do Professor:**

"Agora uma pergunta importante: quando devemos usar o Cascata? Olhem os critérios: primeiro, os requisitos precisam ser muito bem definidos — se o cliente não sabe o que quer, o Cascata vai fracassar. Segundo, quando se deseja estabilidade no produto. Terceiro, quando há domínio completo da tecnologia — se a equipe nunca usou aquela linguagem ou framework, o modelo vai sofrer. Quarto, todos os recursos precisam estar disponíveis o tempo todo. E quinto, o projeto não pode ser muito grande, porque quanto maior, mais difícil de gerenciar de forma sequencial."
-->

---

# ⚖️ Cascata — Vantagens vs. Desvantagens

| ✅ Vantagens | ❌ Desvantagens |
|-------------|----------------|
| Fácil compreensão do modelo | Software disponível só no final |
| Etapas bem definidas | Inadequado para projetos grandes |
| Etapas bem documentadas | Requer domínio completo dos requisitos |
| Prescritividade | Difícil mensurar progresso |
| Produto não disponível em tempo de projeto | Integração apenas no final |

<!-- 
🎤 **Fala do Professor:**

"Vamos comparar vantagens e desvantagens. Do lado positivo: o modelo é fácil de entender, as etapas são bem definidas e bem documentadas, e a prescritividade — ou seja, tudo é definido de antemão — dá segurança. Do lado negativo: o software só fica disponível no final, o que é um grande problema. É inadequado para projetos grandes, exige domínio completo dos requisitos desde o início, é difícil medir o progresso durante o projeto, e a integração acontece apenas no final, o que pode gerar surpresas desagradáveis."
-->

---

# 🏭 A Metodologia Kanban

### História — Modelo Toyota de Produção:
- Idealizado por **Kiichiro Toyoda** (década de 1930)
- Conhecido como **Lean Manufacturing** (Manufatura Enxuta)
- Baseado em dois princípios:
  - **Just in Time** (Taiichi Ohno)
  - **Automação com parada contínua**
---
### Kanban em Software:
- Criado por **David J. Anderson** (2010)
- Adaptado para **desenvolvimento de software**
- Gestão visual do sistema Toyota
- Agiliza entregas e ataca problemas rapidamente

<!-- 
🎤 **Fala do Professor:**

"Agora vamos mudar completamente de cenário e conhecer o Kanban. Essa metodologia vem do mundo da manufatura, mais especificamente do Sistema Toyota de Produção, idealizado por Kiichiro Toyoda nos anos 1930. O conceito é o Lean Manufacturing, ou Manufatura Enxuta — produzir apenas o necessário, na quantidade certa, no momento certo. Os dois princípios são o Just in Time, de Taiichi Ohno, e a automação com parada contínua — se algo der errado, a linha para. Em 2010, David J. Anderson adaptou esse conceito para o desenvolvimento de software, criando o Kanban como conhecemos hoje na área de TI."
-->

---

# 📊 Princípios do Kanban

| Princípio | Descrição |
|-----------|-----------|
| **Fluxo contínuo** | Atividades fluem sem interrupções |
| **Gestão Visual** | Quadro visualiza o trabalho |
| **Interrupções** | Pensado para que sempre haja interrupções |
| **Sem papéis definidos** | Não há papéis rígidos |
| **Teoria das restrições** | O que mudar? Para o que? Como? |

<!-- 
🎤 **Fala do Professor:**

"Vamos aos princípios do Kanban. Primeiro: fluxo contínuo — as atividades fluem sem interrupções, diferente do Cascata que tem fases definidas. Segundo: gestão visual — o quadro Kanban permite ver todo o trabalho de uma olhada. Terceiro: o Kanban é pensado para que sempre haja interrupções — isso parece contraditório, mas significa que o sistema é flexível o suficiente para absorver mudanças. Quarto: não há papéis rígidos como no Scrum. E quinto: a teoria das restrições — que nos faz perguntar: o que mudar? Para o que mudar? Como mudar? É uma filosofia de melhoria contínua."
-->

---

# 📋 Quadro Kanban — Como funciona?

Controlar demandas em um **quadro visual**:

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│  BACKLOG    │  TO DO      │  DOING      │  DONE       │
│  (Demandas) │  (Para      │  (Fazendo)  │  (Feito)    │
│             │   fazer)    │             │             │
├─────────────┼─────────────┼─────────────┼─────────────┤
│  📋         │  📝         │  ⚡         │  ✅         │
│  Tarefa A   │  Tarefa C   │  Tarefa E   │  Tarefa G   │
│  📋         │  📝         │  ⚡         │  ✅         │
│  Tarefa B   │  Tarefa D   │  Tarefa F   │  Tarefa H   │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

<!-- 
🎤 **Fala do Professor:**

"Esse é o famoso quadro Kanban. Olhem como é simples e poderoso. Temos quatro colunas: Backlog, que são as demandas que ainda vão ser trabalhadas; To Do, que são as tarefas que já foram priorizadas e estão prontas para começar; Doing, que é o que está sendo feito agora; e Done, que é o que já foi concluído. Cada tarefa é representada por um cartão que vai sendo movido da esquerda para a direita conforme o trabalho avança. A grande sacada é que qualquer pessoa pode ver o estado do projeto em tempo real. É isso que chamamos de gestão visual."
-->

---

# 🔄 Adaptações do Kanban

O Kanban é **flexível** e se adapta facilmente:

- As etapas mínimas **não são obrigatórias** (podem aumentar ou diminuir)
- Adapta-se ao **processo de cada equipe**
- Pode ser combinado com outras metodologias:
  - **Scrumban** = Scrum + Kanban
- Ferramentas online disponíveis:
  - **Trello**, Kanbanflow, **Jira**, Kanbanchi

<!-- 
🎤 **Fala do Professor:**

"Uma das maiores vantagens do Kanban é a flexibilidade. As etapas mínimas do quadro não são obrigatórias — você pode adicionar colunas como 'Em Revisão', 'Em Teste', 'Aguardando Deploy', ou reduzir se o processo for mais simples. O Kanban se adapta ao processo de cada equipe, e não o contrário. E ele pode ser combinado com outras metodologias — por exemplo, o Scrumban, que é a mistura de Scrum com Kanban. No mercado, as ferramentas mais usadas são o Trello, o Jira e o Kanbanchi. Recomendo que vocês criem um quadro no Trello hoje mesmo para organizar seus trabalhos da faculdade."
-->

---

#### Cascata vs. Kanban — Comparativo Detalhado


| Aspecto | 🌊 Cascata | 🏭 Kanban |
|---------|-----------|----------|
| **Fluxo** | Sequencial (fases em ordem) | Contínuo (tarefas fluem livremente) |
| **Entrega** | Ao final do projeto | Entregas incrementais |
| **Mudanças** | Dificultadas após início | Bem-vindas a qualquer momento |
| **Documentação** | Pesada e obrigatória | Leve e suficiente |
| **Papéis** | Bem definidos (gerente, analista...) | Flexíveis, sem papéis rígidos |
| **Visualização** | Diagramas e documentos | Quadro visual (board) |
| **Risco** | Detectado tardiamente | Visível o tempo todo |

<!-- 
🎤 **Fala do Professor:**

"Vamos fazer uma comparação direta entre o Cascata e o Kanban para fixar as diferenças. No fluxo, o Cascata é sequencial — você vai de fase em fase — enquanto o Kanban tem fluxo contínuo, as tarefas fluem livremente. Na entrega, o Cascata entrega tudo no final, já o Kanban faz entregas incrementais, o cliente vai recebendo pedaços do software ao longo do tempo. Sobre mudanças: no Cascata, mudar requisitos depois que o projeto começou é muito custoso; no Kanban, mudanças são bem-vindas a qualquer momento. A documentação no Cascata é pesada e obrigatória, já no Kanban é leve — apenas o suficiente. Os papéis no Cascata são bem definidos, no Kanban são flexíveis. A visualização no Cascata depende de diagramas e documentos, no Kanban usamos o quadro visual. E o risco no Cascata só aparece no final, no Kanban é visível o tempo todo."
-->

---

### 🎯 Quando Escolher Cascata vs. Kanban?
---
| Cenário | Metodologia | Justificativa |
|---------|-------------|---------------|
| Sistema bancário com requisitos definidos por lei | **Cascata** | Requisitos estáveis e regulamentados |
| Startup criando app inovador | **Kanban** | Incerteza alta, necessidade de adaptação rápida |
| Projeto acadêmico com prazo de 4 meses | **Kanban** | Prazo curto, precisa de visibilidade do progresso |
| Software para aviação civil | **Cascata** | Rigor e documentação são obrigatórios |
| E-commerce em constante evolução | **Kanban** | Mercado muda rapidamente |
| Sistema legado com manutenção contínua | **Kanban** | Demandas variam, fluxo contínuo |

<!-- 
🎤 **Fala do Professor:**

"Agora vamos analisar cenários reais para entender quando usar cada metodologia. Um sistema bancário com requisitos definidos por lei é perfeito para o Cascata, porque os requisitos são estáveis e regulamentados — ninguém vai mudar a legislação no meio do projeto. Uma startup criando um app inovador precisa do Kanban, porque a incerteza é alta e o mercado muda rápido. Um projeto acadêmico de 4 meses se beneficia do Kanban porque dá visibilidade do progresso — vocês vão ver o que foi feito e o que falta. Software para aviação civil exige Cascata pelo rigor e documentação obrigatórios. Um e-commerce em constante evolução precisa do Kanban para se adaptar ao mercado. E um sistema legado com manutenção contínua se encaixa no Kanban porque as demandas variam constantemente."
-->

---

# 🔄 Ciclo de Vida: Cascata vs. Kanban

### Cascata — Fluxo Linear:
```
Requisitos → Projeto → Implementação → Verificação → Manutenção
   (100%)      (100%)      (100%)         (100%)        (100%)
```

### Kanban — Fluxo Contínuo:
```
┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐
│Backlog │ → │To Do   │ → │Doing   │ → │ Done   │
│        │   │        │   │ (WIP=3)│   │        │
│ T1 T2  │   │ T3 T4  │   │ T5 T6  │   │ T7 T8  │
│ T3 T4  │   │ T5     │   │ T7     │   │ T9     │
└────────┘   └────────┘   └────────┘   └────────┘
         ← Fluxo contínuo de tarefas →
```
---
### Conceito-chave: **WIP (Work In Progress)**
- Limite máximo de tarefas simultâneas em cada coluna
- Evita sobrecarga da equipe
- Identifica gargalos rapidamente

<!-- 
🎤 **Fala do Professor:**

"Olhem como os ciclos de vida são diferentes. No Cascata, é uma linha reta — você termina 100% de cada fase antes de avançar. É como uma esteira de fábrica que só anda para frente. No Kanban, o fluxo é contínuo — as tarefas vão entrando e saindo das colunas o tempo todo. E tem um conceito muito importante aqui: o WIP, ou Work In Progress, que é o limite de tarefas simultâneas. Se a equipe está sobrecarhecida, o WIP mostra isso visualmente. Se uma coluna está lotada, é um gargalo que precisa ser resolvido. Isso é a teoria das restrições em ação — você identifica o ponto de estrangulamento e resolve ele primeiro."
-->

---

# 📈 Benefícios do Kanban na Prática

### Por que empresas adotam Kanban?

- 🎯 **Transparência total** — Todos veem o estado do trabalho
- ⚡ **Entregas mais rápidas** — Sem esperar o projeto inteiro acabar
- 🔄 **Adaptabilidade** — Mudanças são incorporadas facilmente
- 📊 **Métricas visuais** — Lead time e cycle time fáceis de medir
- 🚫 **Redução de desperdício** — Só se trabalha no que importa
- 👥 **Melhoria contínua** — A equipe evolui o processo constantemente
---
### Métricas importantes do Kanban:
| Métrica | O que mede |
|---------|-----------|
| **Lead Time** | Tempo total desde a solicitação até a entrega |
| **Cycle Time** | Tempo que a tarefa fica em execução |
| **Throughput** | Quantidade de tarefas concluídas por período |

<!-- 
🎤 **Fala do Professor:**

"Vamos ver por que tantas empresas estão adotando o Kanban. Primeiro: transparência total — qualquer pessoa pode ver o quadro e saber o que está acontecendo. Segundo: entregas mais rápidas — não precisa esperar o projeto inteiro acabar para entregar valor ao cliente. Terceiro: adaptabilidade — mudanças são incorporadas facilmente, sem quebrar o processo. Quarto: métricas visuais — o Kanban torna fácil medir o lead time e o cycle time. Quinto: redução de desperdício — a equipe só trabalha no que realmente importa. E sexto: melhoria contínua — a equipe pode evoluir o processo a cada semana. Sobre as métricas: o lead time mede o tempo total desde que o cliente pediu até receber; o cycle time mede quanto tempo a tarefa ficou em execução; e o throughput é a quantidade de tarefas concluídas por período. Empresas como Spotify, Netflix e Amazon usam variações do Kanban em seus processos."
-->

---

<!-- _class: lead -->

# 📝 Resumo da Aula

- **Metodologias tradicionais** = prescritivas, documentadas, testadas
- **Cascata** = 5 fases sequenciais (Requisitos → Projeto → Implementação → Verificação → Manutenção)
- **Kanban** = gestão visual, fluxo contínuo, flexível
- Quadro Kanban: **Backlog → To Do → Doing → Done**
- Cascata é melhor para projetos **estáveis**; Kanban para projetos **adaptáveis**

## 📚 Próxima Aula:
**Gestão Ágil com Scrum e PMO**

<!-- 
🎤 **Fala do Professor:**

"Vamos fazer um resumo rápido do que vimos hoje. As metodologias tradicionais são prescritivas, documentadas e testadas — nascidas numa época de mainframes e rigor excessivo. O Cascata tem 5 fases sequenciais: Requisitos, Projeto, Implementação, Verificação e Manutenção. É ideal para projetos estáveis com requisitos bem definidos. O Kanban, por outro lado, é uma metodologia de gestão visual com fluxo contínuo e flexível — veio da Toyota e foi adaptado para software. O quadro Kanban com as colunas Backlog, To Do, Doing e Done é simples mas muito poderoso. Na próxima aula, vamos falar sobre Gestão Ágil com Scrum e PMO, que complementa o que aprendemos hoje."
-->

---

<!-- _class: lead -->

# Dúvidas? 🤔

**Gestão de Projetos — Aula 3**

📧 Contato do professor

<!-- 
🎤 **Fala do Professor:**

"Antes de encerrarmos, alguém tem alguma dúvida sobre o conteúdo de hoje? Lembrem-se: o Cascata é o modelo mais tradicional e ainda é muito usado em projetos com requisitos bem definidos. O Kanban é mais flexível e visual, ideal para equipes que precisam de agilidade. Na próxima aula vamos aprofundar nas metodologias ágeis com Scrum e PMO. Não esqueçam de fazer o exercício que passamos e trazer na próxima aula. Bom descanso a todos!"
-->
