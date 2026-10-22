---
marp: true
theme: default
paginate: true

---

<!-- _class: lead -->

# Gestão de Projetos
## Aula 4 — Scrum e PMO
 

<!-- 
🎤 **Fala do Professor:**

"Bom dia/tarde a todos! Sejam bem-vindos à Aula 4 de Gestão de Projetos. Hoje vamos falar sobre dois temas muito importantes: o Scrum, que é o framework ágil mais utilizado no mundo, e o PMO — o Escritório de Gerenciamento de Projetos. Esses dois temas, apesar de parecerem opostos (um ágil, outro mais estruturado), na verdade se complementam no mercado atual. Prestem bastante atenção, pois vamos ter exercícios práticos ao final!"
-->
---

# 🚀 Por que Metodologias Ágeis?

<!-- 
🎤 **Fala do Professor:**

"Vamos começar entendendo o 'porquê'. Durante décadas, o desenvolvimento de software seguiu o modelo Cascata — sequencial, linear, com tudo definido antes de começar. Mas o mercado mudou. A internet explodiu, os clientes passaram a mudar de ideia o tempo todo, e a velocidade do mercado exigia entregas rápidas. O modelo tradicional não dava mais conta. Olhem essas limitações: exigiam requisitos completos desde o início — mas o cliente quase nunca sabe tudo o que quer no começo. Não admitiam mudanças — se o cliente mudava de ideia, o impacto era enorme. E a entrega era só no final — imagine esperar 1 ano para ver se o sistema ficou bom?"
-->

As metodologias clássicas apresentam limitações:
- ❌ Domínio **completo dos requisitos** necessário
- ❌ Domínio **completo da tecnologia** necessário
- ❌ **Não admitem mudanças** durante o projeto
- ❌ Cliente precisa **conhecer o que precisa**
- ❌ Entrega **somente ao final** do projeto

---

### O mercado precisa de:
- ✅ Ciclo de desenvolvimento **contínuo**
- ✅ **Adaptação** a mudanças de requisitos
- ✅ Entregas **incrementais** e frequentes
- ✅ **Colaboração** com o cliente

<!-- 
🎤 **Fala do Professor:**

"O mercado precisava de algo diferente. Ciclo de desenvolvimento contínuo — em vez de um único ciclo longo, múltiplos ciclos curtos. Adaptação a mudanças — em vez de resistir, abraçar as mudanças. Entregas incrementais — em vez de tudo no final, entregar pedaços ao longo do tempo. E colaboração com o cliente — em vez de contrato rígido, parceria contínua. Pensem assim: no modelo tradicional, é como cozinhar uma refeição inteira e só revelar no final. No modelo ágil, é ir mostrando o prato durante o preparo. Se o cliente não gostou do tempero, você ajusta antes de servir."
-->

---

# 📜 O Manifesto Ágil (2001)

17 profissionais se reuniram e definiram **4 valores**:

| Valor | Em vez de |
|-------|-----------|
| **Indivíduos e interações** | Processos e ferramentas |
| **Software em funcionamento** | Documentação abrangente |
| **Colaboração com o cliente** | Contratos |
| **Respostas a mudanças** | Seguir planos |

### + 12 Princípios que orientam as metodologias ágeis

<!-- 
🎤 **Fala do Professor:**

"Em fevereiro de 2001, 17 profissionais se reuniram em Snowbird, Utah — uma estação de esquí nos Estados Unidos. Eles representavam diferentes metodologias: Scrum, XP, Crystal, DSDM. Perceberam que tinham algo em comum: a insatisfação com os métodos tradicionais pesados. Dessa reunião nasceu o Manifesto Ágil com 4 valores fundamentais. Notem: os valores da direita NÃO são descartados — apenas os da esquerda têm mais importância. Um e-mail explicando uma funcionalidade vale mais que um documento de 50 páginas que ninguém lê. Um software funcionando vale mais que uma especificação perfeita no papel."
-->

---

# 📦 Metodologias Ágeis

| Metodologia | Foco |
|-------------|------|
| **Scrum** | Framework iterativo e incremental |
| **Kanban** | Gestão visual do fluxo |
| **XP** | Extreme Programming — práticas técnicas |
| **FDD** | Feature Driven Development |
| **Crystal** | Família de metodologias adaptativas |
| **DSDM** | Dynamic System Development Model |
| **Lean** | Eliminar desperdícios |

<!-- 
🎤 **Fala do Professor:**

"Existem muitas metodologias ágeis. O Scrum, que vamos estudar em detalhes hoje, é o mais popular — usado por mais de 70% das empresas ágeis. O Kanban, que já vimos na aula passada, é mais focado em fluxo visual. O XP foca em práticas técnicas como programação em par e TDD. O Crystal é uma família adaptativa — quanto mais crítica a aplicação, mais pesada a metodologia. O Lean veio da Toyota e foca em eliminar desperdício. Hoje vamos aprofundar no Scrum."
-->

---

# 🏉 O que é o Scrum?

### História:
- Inserido em artigo da **Harvard Business Review** (1986)
- Autores: **Hirotaka Takeuchi** e **Ikujiro Nonaka**
- Metáfora do jogo de **Rugby** — equipe unida avançando

### Características:
- ✔️ Metodologia **simplificada** para projetos **complexos**
- ✔️ Cenários **caóticos** e requisitos **desconhecidos**
- ✔️ Papéis **bem definidos**
- ✔️ Funcionalidades: **Transparência, Inspeção, Adaptação**

<!-- 
🎤 **Fala do Professor:**

"Scrum vem do Rugby. No Rugby, o scrum é aquela formação onde os jogadores se juntam, empurram juntos e avançam como um time. Takeuchi e Nonaka, em 1986, escreveram na Harvard Business Review que o desenvolvimento de produtos deveria funcionar assim. Os três pilares são fundamentais: Transparência — todo mundo vê o que está acontecendo. Inspeção — a cada sprint, o time revisa o que fez. Adaptação — se algo não está bom, muda. Uma frase famosa do Ken Schwaber: 'Scrum é fácil de entender e difícil de dominar.' Entender as regras leva 1 hora. Dominar o Scrum leva anos de prática."
-->

---

## 👥 Papéis no Scrum

| Papel | Responsabilidades |
|-------|-------------------|
| **Product Owner** | • Representa os stakeholders<br>• Define funcionalidades do produto<br>• Prioriza o Product Backlog<br>• Delega tarefas e cobra resultados |
| **Scrum Master** | • Detém o conhecimento da metodologia<br>• Garante que o time siga os valores Scrum<br>• Facilitador (daily, sprint, reviews, retrospectivas)<br>• Resolve obstáculos |
| **Dev Team** | • Transforma o Backlog em produto funcional<br>• Desenvolve versões incrementais<br>• Auto-organizável e multifuncional |

<!-- 
🎤 **Fala do Professor:**

"O Scrum tem apenas 3 papéis — bem poucos comparado a métodos tradicionais. O Product Owner é a voz do cliente. Ele decide O QUE fazer, mas NÃO é o chefe do time. Ele prioriza o backlog, representa os stakeholders e valida as entregas. O Scrum Master é o guardião do processo — facilitador e coach. Ele remove impedimentos, facilita as cerimônias e protege o time de interferências externas. NÃO é o gerente do time. O Dev Team é o grupo que constrói o produto — multifuncional e auto-organizável. Ninguém de fora diz como fazer as tarefas. São coletivamente responsáveis pelas entregas. Importante: não existe hierarquia entre os papéis."
-->

---

# 📦 Artefatos do Scrum

| Artefato | Descrição |
|----------|-----------|
| **Product Backlog** | Lista de funcionalidades solicitadas<br>Alimentado pelo Product Owner<br>Priorizadas em graus (máxima, média, mínima) |
| **Sprint Backlog** | Funcionalidades priorizadas para a sprint<br>Análogo ao "To Do" do Kanban<br>Atividades atribuídas ao Dev Team |
| **Incremento** | Resultado final da sprint<br>Funcionalidades desenvolvidas e prontas para entrega<br>Marca o fim da iteração |

<!-- 
🎤 **Fala do Professor:**

"Os artefatos do Scrum são como 'containers' de informação. O Product Backlog é a lista COMPLETA de tudo que o produto precisa — alimentado pelo Product Owner e nunca está acabado. O Sprint Backlog é o recorte que o time vai trabalhar NA sprint atual — é como o 'To Do' do Kanban que já vimos. E o Incremento é o resultado — o que foi de fato entregue e funciona. Pensem assim: Product Backlog é o cardápio do restaurante inteiro. Sprint Backlog é o que você pediu HOJE. E o Incremento é a comida que chegou na sua mesa."
-->

---

# 📅 Eventos do Scrum

| Evento | Descrição | Duração |
|--------|-----------|---------|
| **Sprint Planning** | Decide o que será desenvolvido<br>Funcionalidades do backlog → Dev Team | Planejamento |
| **Sprint Execution** | Implementação das funcionalidades | 2 a 4 semanas |
| **Daily Meeting** | Status das atividades com a equipe | ~15 min/dia |
| **Sprint Review** | Revisão do que foi atendido<br>Verificação do incremento | Ao final da sprint |
| **Sprint Retrospective** | Análise de acertos e erros<br>Proposta de melhoria | Último evento |

<!-- 
🎤 **Fala do Professor:**

"São 5 eventos no Scrum. O Sprint Planning é onde o time decide o que vai fazer na sprint — o PO apresenta as prioridades e o time escolhe quanto consegue fazer. A Sprint Execution é onde o trabalho acontece, dura de 2 a 4 semanas. O Daily Meeting é uma reunião rápida de 15 minutos todos os dias — é chamado de 'stand-up' porque as pessoas ficavam em pé para ser rápido. O Sprint Review é onde o time mostra o que construiu para os stakeholders — mostra o SOFTWARE funcionando, não slides. E a Sprint Retrospective é o momento de melhoria contínua — o time reflete sobre o processo e define ações concretas para melhorar. Todo evento tem time-box — tempo máximo que não pode estourar."
-->

---

# 🔄 O Ciclo Scrum

```
    ┌──────────────────────────────────────────────┐
    │                                              │
    ▼                                              │
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Sprint  │───▶│  Sprint │───▶│ Sprint  │───▶│ Sprint  │
│Planning  │    │Execution│    │ Review  │    │ Retro   │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
                    │                              │
                    ▼                              │
              ┌──────────┐                         │
              │  Daily   │                         │
              │ Meeting  │                         │
              └──────────┘                         │
                                                   │
              ┌───────────────────────────────────┘
              │
              ▼
        Nova Sprint
```

<!-- 
🎤 **Fala do Professor:**

"Esse é o ciclo completo. Tudo começa no Product Backlog, que é priorizado pelo PO. No Sprint Planning, o time seleciona os itens. Durante a Sprint Execution, o time trabalha e faz Daily Meetings diários. No final, o Sprint Review mostra o incremento para os stakeholders. A Sprint Retrospective melhora o processo. E o ciclo recomeça — uma sprint atrás da outra, o produto vai crescendo e melhorando. Cada sprint gera um incremento que pode ser entregue ao cliente. É assim que o Scrum entrega valor de forma contínua."
-->

---

# 🏢 O que é um PMO?

**PMO** = Project Management Office (Escritório de Gerenciamento de Projetos)

- **Estrutura organizacional** / departamento
- Faz a **governança e gestão** dos projetos
- Promove **padronização dos processos**
- **Guardião das metodologias** de gestão
- Suporte a gerentes e equipes
- Consultoria e orientação metodológica

<!-- 
🎤 **Fala do Professor:**

"Agora vamos mudar de assunto e falar do PMO. PMO significa Project Management Office — Escritório de Gerenciamento de Projetos. É uma estrutura organizacional que cuida da governança dos projetos. Pensem numa empresa que tem 20 projetos acontecendo ao mesmo tempo. Quem garante que todos sigam os mesmos padrões? Quem compartilha as lições aprendidas? É o PMO. Ele NÃO é o gerente de um projeto específico — ele é o guardião do processo de gestão de projetos."
-->

---

# 📊 Tipos de PMO

| Tipo | Abrangência | Foco |
|------|-------------|------|
| **Corporativo/Estratégico** | Todos os projetos da organização | Ligação com estratégia, gestão do portfólio |
| **Departamental/Tático** | Uma área ou departamento | Padrões de gestão, metodologias, projetos internos |
| **Operacional** | Projeto específico de alta complexidade | Tempo programado, padrões específicos |

<!-- 
🎤 **Fala do Professor:**

"Existem três tipos principais de PMO. O Corporativo ou Estratégico é o mais alto — ele cuida de TODOS os projetos da empresa, está ligado à estratégia do negócio e reporta diretamente à alta direção. O Departamental ou Tático é focado em uma área — por exemplo, o departamento de TI pode ter seu próprio PMO. O Operacional é para um projeto específico de alta complexidade — como a construção de uma nova sede. Cada tipo tem sua abrangência e foco específicos."
-->

---

# ⚙️ Responsabilidades do PMO

### Funções de apoio:
- 📊 Estruturar **relatórios** do portfólio
- 📈 Repassar **progresso** dos projetos
- 📅 Gerenciar **cronograma** em nível de portfólio
- 📋 **Definir metodologias** a serem aplicadas
- 🔄 Desenvolver **melhorias nos processos**
- 📏 Determinar **métricas e estimativas**
- 📢 Facilitar a **comunicação**
- 🤝 **Compartilhar recursos** entre projetos

<!-- 
🎤 **Fala do Professor:**

"As responsabilidades do PMO são amplas. Do lado estratégico, ele garante que os projetos estejam alinhados com a estratégia da empresa — não adianta ter 50 projetos se nenhum contribui para os objetivos. Do lado de apoio, define os padrões: qual metodologia usar, como fazer relatórios, quais métricas acompanhar. Facilita a comunicação entre projetos, compartilha recursos como pessoas e ferramentas, e mantém o repositório de lições aprendidas. Se um projeto descobriu que uma abordagem não funciona, os outros precisam saber para não repetir o erro."
-->

---

# 👤 O Profissional do PMO

**PMO** também pode significar **Project Manager Officer** (Diretor de Projetos)

### Atribuições:
- Estabelecer **cultura** de gerenciamento de projetos
- Desenvolver **estratégias** de gerenciamento
- Manter a **governança** dos projetos
- Definir programas de **treinamento**
- **Monitorar** relatórios e tomar medidas de intervenção
- Promover **melhoria contínua**

<!-- 
🎤 **Fala do Professor:**

"O profissional do PMO — chamado de Project Manager Officer — é um papel muito valorizado no mercado. Precisa ter uma combinação de habilidades técnicas e comportamentais. Do lado técnico, precisa entender de gestão de projetos, metodologias, métricas, orçamento. Do lado comportamental, precisa ser um excelente comunicador, ter visão estratégica e saber negociar. Certificações como PMP, Scrum Master e ACP são muito valorizadas. Esse profissional lida diretamente com a estratégia da organização."
-->

---

# 📈 Vantagens do PMO

| Indicador | Alta Maturidade | Baixa Maturidade |
|-----------|-----------------|------------------|
| Projetos dentro do **prazo** | **88%** | 24% |
| Projetos dentro do **orçamento** | **90%** | 25% |
| Alcançaram **objetivos** | **92%** | 33% |
| Problemas de **escopo** | 28% | **68%** |
| Projetos **falharam** | 6% | **24%** |
| Orçamento **perdido** | 14% | **46%** |

*Fonte: Pulse of the Profession, PMI (2017)*

<!-- 
🎤 **Fala do Professor:**

"Esses dados são impressionantes. Olhem a diferença entre empresas com PMO maduro e sem PMO. Com PMO maduro, 88% dos projetos ficam no prazo. Sem PMO, apenas 24%. Com PMO, 92% alcançam os objetivos. Sem PMO, apenas 33%. E a parte mais chocante: empresas sem PMO desperdiçam 46% do orçamento em projetos que falham, contra apenas 14% em empresas com PMO. Isso mostra que investir em um PMO não é um custo — é um INVESTIMENTO que se paga rapidamente. Empresas com PMO maduro têm taxa de sucesso 3x maior."
-->

---

# 📐 Priorização de Portfólio

Processo de selecionar e classificar projetos por critérios específicos:
- **Retorno sobre investimento**
- **Alinhamento estratégico**
- **Riscos** e recursos disponíveis
- **Impacto** nos objetivos da organização

---

### Indicadores de viabilidade financeira:
| Indicador | Descrição |
|-----------|-----------|
| **TIR** | Taxa Interna de Retorno |
| **VPL** | Valor Presente Líquido |
| **Payback** | Tempo de retorno do investimento |

<!-- 
🎤 **Fala do Professor:**

"Quando uma empresa tem muitos projetos e recursos limitados, precisa escolher quais investir primeiro. A priorização de portfólio usa critérios como retorno financeiro, alinhamento estratégico, riscos e impacto. Os indicadores financeiros são fundamentais: o TIR mostra a porcentagem de retorno — quanto maior, melhor. O VPL mostra quanto o projeto vale em termos de hoje — se positivo, vale a pena. O Payback mostra quanto tempo leva para recuperar o investimento — quanto menor, melhor."
-->

---

# 📐 O que é o AHP?

**AHP** = **Analytic Hierarchy Process** (Processo de Hierarquia Analítica)

- Criado por **Thomas Saaty** nos anos 70
- Técnica de **decisão multicriterial**
- Compara opções **par a par** em vez de todas de uma vez

### Quando usar?
- Quando há **vários projetos** e **múltiplos critérios** para avaliar
- Quando a decisão não pode ser apenas "no feeling"
---
### Escala de comparação (1 a 9):
| Nota | Significado |
|------|-------------|
| **1** | Igualmente importante |
| **3** | Moderadamente mais importante |
| **5** | Fortemente mais importante |
| **7** | Muito fortemente mais importante |
| **9** | Extremamente mais importante |

<!-- 
🎤 **Fala do Professor:**

"Antes de ver o exemplo prático, vamos entender o que é o AHP. AHP significa Analytic Hierarchy Process — Processo de Hierarquia Analítica. Foi criado por Thomas Saaty nos anos 70 e é usado no mundo inteiro. A ideia central é simples: em vez de comparar todos os projetos de uma vez — o que é complicado quando há muitos critérios — você compara PAR A PAR. Usa-se uma escala de 1 a 9. Se dois critérios são igualmente importantes, nota 1. Se um é fortemente mais importante que o outro, nota 5. Se é extremamente mais importante, nota 9. Isso transforma decisões subjetivas em algo objetivo e matemático."
-->

---

# 📐 Técnica AHP — Exemplo Prático

**AHP** (Analytic Hierarchy Process) — Processo de hierarquia analítica

### Passo a passo:
1. Definir os **critérios** (Custo, Prazo, Alinhamento)
2. Definir os **projetos** (A, B, C)
3. Criar **matrizes de comparação** par a par
4. Calcular a **prioridade** de cada projeto
5. Multiplicar pela **prioridade dos critérios**

---

### Resultado:
| Projeto | % Preferência |
|---------|---------------|
| Projeto A | **57,11%** |
| Projeto C | 30,03% |
| Projeto B | 12,86% |

<!-- 
🎤 **Fala do Professor:**

"O AHP é uma técnica muito poderosa criada por Thomas Saaty nos anos 70. A ideia é comparar PAR A PAR. Primeiro, comparamos os critérios entre si: 'Custo é mais importante que Prazo?' Se sim, quanto mais importante? Em uma escala de 1 a 9. Depois, para cada critério, comparamos os projetos entre si. O resultado é uma pontuação final que mostra qual projeto é o melhor considerando TODOS os critérios. No exemplo, o Projeto A vence com 57,11% de preferência. É uma forma objetiva de tomar decisões que normalmente são subjetivas."
-->

---

# 💡 Exemplos Práticos

### 🏉 Exemplo 1 — Scrum na prática:
> Startup **FoodApp** quer criar um app de delivery. Sprint de **2 semanas**.
> - **PO** priorizou: cadastro, cardápio, carrinho, pagamento
> - **Sprint 1:** cadastro + cardápio = **incremento entregue**
> - **Sprint 2:** carrinho + pagamento = **app funcional**
> - A cada sprint, o cliente **testa e dá feedback**

---

### 🏛️ Exemplo 2 — Cascata na prática:
> Banco **XYZ** precisa de sistema regulatório para o **Banco Central**.
> - Requisitos **congelados** por contrato
> - Documentação **obrigatória** por lei
> - Entrega **única** com validação formal
> - Tecnologia **conhecida** e estável

---

### 🏢 Exemplo 3 — PMO em ação:
> Empresa com **15 projetos** cria PMO e em 6 meses:
> - Atrasos caem de **60% → 20%**
> - Metodologias **padronizadas**
> - Relatórios **unificados** para a diretoria

### 🤔 Reflexão final:
*"A metodologia certa depende do contexto, não da preferência."*

<!-- 
🎤 **Fala do Professor:**

"Vamos ver exemplos práticos para fixar o conteúdo. Exemplo 1: uma startup de delivery usa Scrum. O PO prioriza as funcionalidades, e a cada 2 semanas o time entrega um pedaço do app. Na Sprint 1, cadastro e cardápio ficam prontos. Na Sprint 2, carrinho e pagamento. O cliente testa a cada sprint e dá feedback — se não gostou do layout do carrinho, muda antes da próxima sprint. Exemplo 2: um banco precisa de um sistema regulatório. Aqui, os requisitos são congelados por contrato, a documentação é obrigatória por lei, e a entrega é única com validação formal. Faz sentido usar Cascata nesse cenário. Exemplo 3: uma empresa com 15 projetos cria um PMO e em 6 meses os atrasos caem de 60% para 20%, as metodologias são padronizadas e os relatórios ficam unificados. Percebam como cada cenário pede uma abordagem diferente."
-->

---

<!-- _class: lead -->

# 📝 Resumo da Aula

- **Manifesto Ágil** = 4 valores + 12 princípios (2001)
- **Scrum** = Framework ágil com papéis, artefatos e eventos
- **PMO** = Escritório de governança e gestão de projetos
- **AHP** = Técnica de priorização multicriterial
- PMO aumenta **significativamente** as chances de sucesso

## 📚 Próximas aulas:
**Business Model Canvas, Ferramentas de Gestão e Mais!**

<!-- 
🎤 **Fala do Professor:**

"Esse é o resumo da aula de hoje. Vocês aprenderam: o Manifesto Ágil com seus 4 valores e 12 princípios, o Scrum completo com papéis, artefatos e eventos, o PMO com seus tipos e responsabilidades, e a técnica AHP de priorização. São fundamentos que vocês vão usar na vida profissional. Na próxima aula, vamos aprender o Business Model Canvas — uma ferramenta visual para planejar negócios. Qualquer dúvida, me mandem por e-mail ou venham conversar no horário de atendimento."
-->

---

<!-- _class: lead -->

# Dúvidas? 🤔

**Gestão de Projetos — Aula 4**



<!-- 
🎤 **Fala do Professor:**

"Muito obrigado pela atenção de hoje! Qualquer dúvida, estou disponível por e-mail ou no horário de atendimento. Bom descanso e bons estudos! Até a próxima aula!"
-->
