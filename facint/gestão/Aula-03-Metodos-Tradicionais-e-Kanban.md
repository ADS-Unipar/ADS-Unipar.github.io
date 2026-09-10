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
---

<!-- _class: lead -->

# Gestão de Projetos
## Aula 3 — Métodos Tradicionais e Kanban
 

---

# 📋 Roteiro da Aula

| Tempo | Conteúdo |
|-------|----------|
| 0-10 min | Metodologias Tradicionais |
| 10-25 min | Modelo Cascata (Waterfall) |
| 25-40 min | Metodologia Kanban |
| 40-50 min | Exercício Prático |

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

---

# 🌊 Modelo Cascata (Waterfall)

Criado para minimizar problemas:
- Desenvolvimento defeituoso de software
- Baixa qualidade e documentação precária
- Poucos requisitos levantados
- Muito retrabalho e depurações demoradas

### Características:
- 📐 Modelo **sequencial e sistemático**
- 📄 Etapas **completamente finalizadas** antes de avançar
- 📝 Processos **rígidos de documentação**
- 🧪 Testes **à exaustão**
- 🔒 Preza pela **estabilidade** do software
- 📦 Software entregável **somente ao final**

---

# 📋 Fase 1: Requisitos

Levantamento e análise com o cliente:
- Identificar **requisitos funcionais** e não funcionais
- Descobrir **etapas do negócio**
- Deixar claro o que o **cliente necessita**

### Técnicas utilizadas:
| Técnica | Exemplo |
|---------|---------|
| **Entrevistas** | Departamentos, usuários, gerentes |
| **Workshops** | Brainstorms colaborativos |
| **Diagramação** | UML, BPMN, VSM |
| **Frameworks** | SIPOC, DMAIC, PDCA |

---

# 📐 Fase 2: Projeto

Análise e planejamento detalhado:
- Analisar os requisitos levantados
- Elencar e **priorizar funcionalidades**
- Estimar **custos e prazos**
- Designar atividades e gerar **product backlog**

### Ferramentas:
- **Frameworks:** PMBOK, PRINCE
- **Estimativas:** APF, APCU, APH
- **Prototipação:** Mockups, esboços
- **Análise financeira:** Fluxos, previsões de caixa

---

# ⚡ Fase 3: Implementação

Desenvolvimento do software:
- Domínio completo das **ferramentas**
- Capacitar equipe e usar **boas práticas**
- Implementar cada **funcionalidade prevista**
- Cronometrar e controlar **tempo**
- **Versionar** o projeto

### Ferramentas:
- **Artefatos:** Linguagens, IDEs, SGBDs, Git/SVN
- **Automação:** DevOps, SecOps, DevSecOps
- **Gestão:** MS Project, Gantt, Kanban
- **Qualidade:** Revisão de código, testes unitários

---

# 🧪 Fase 4: Verificação

Testes e validação:
- Identificar **casos de teste** por requisito
- Testar **funcionalidades implementadas**
- Documentar testes e adicionar **evidências**
- Comparar requisitos com funcionalidades
- Gerar retorno de **não conformidades**

### Ferramentas:
- **Testes manuais:** Ponta a ponta, desempenho
- **Frameworks:** Selenium, Cypress, Cucumber
- **Métricas:** Incidentes, defeitos, cobertura de testes

---

# 🔧 Fase 5: Manutenção

Encerramento e sustentação:
- Iniciar fase de **encerramento**
- Disponibilizar software para **teste do cliente**
- Iniciar **ciclo de vida** do produto
- Executar **implantação** no cliente
- Criar equipe de **sustentação e help desk**

### Ferramentas:
- Software de **gestão de chamados**
- **Métricas:** % resolução, incidentes por ticket
- **Análise de custo:** Custo por atendimento/correção
- **Bases de conhecimento:** Roteiros, FAQs

---

# ✅ Cascata — Quando usar?

### Recomendado quando:
- ✔️ Requisitos **muito bem definidos**
- ✔️ Deseja-se **estabilidade** do produto
- ✔️ Há **domínio completo** da tecnologia
- ✔️ Todos os **recursos disponíveis** a todo momento
- ✔️ O projeto **não é muito grande**

---

# ⚖️ Cascata — Vantagens vs. Desvantagens

| ✅ Vantagens | ❌ Desvantagens |
|-------------|----------------|
| Fácil compreensão do modelo | Software disponível só no final |
| Etapas bem definidas | Inadequado para projetos grandes |
| Etapas bem documentadas | Requer domínio completo dos requisitos |
| Prescritividade | Difícil mensurar progresso |
| Produto não disponível em tempo de projeto | Integração apenas no final |

---

# 🏭 A Metodologia Kanban

### História — Modelo Toyota de Produção:
- Idealizado por **Kiichiro Toyoda** (década de 1930)
- Conhecido como **Lean Manufacturing** (Manufatura Enxuta)
- Baseado em dois princípios:
  - **Just in Time** (Taiichi Ohno)
  - **Automação com parada contínua**

### Kanban em Software:
- Criado por **David J. Anderson** (2010)
- Adaptado para **desenvolvimento de software**
- Gestão visual do sistema Toyota
- Agiliza entregas e ataca problemas rapidamente

---

# 📊 Princípios do Kanban

| Princípio | Descrição |
|-----------|-----------|
| **Fluxo contínuo** | Atividades fluem sem interrupções |
| **Gestão Visual** | Quadro visualiza o trabalho |
| **Interrupções** | Pensado para que sempre haja interrupções |
| **Sem papéis definidos** | Não há papéis rígidos |
| **Teoria das restrições** | O que mudar? Para o que? Como? |

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

---

# 🔄 Adaptações do Kanban

O Kanban é **flexível** e se adapta facilmente:

- As etapas mínimas **não são obrigatórias** (podem aumentar ou diminuir)
- Adapta-se ao **processo de cada equipe**
- Pode ser combinado com outras metodologias:
  - **Scrumban** = Scrum + Kanban
- Ferramentas online disponíveis:
  - **Trello**, Kanbanflow, **Jira**, Kanbanchi

---

# 💡 Exercício Prático (10 min)

Em grupos, respondam:

1. **Cascata ou Kanban?** Para cada cenário abaixo, escolha a metodologia mais adequada:
   - Sistema bancário com requisitos definidos por lei
   - Startup criando um app inovador
   - Projeto acadêmico com prazo de 4 meses

2. **Montem um quadro Kanban** (no papel) para organizar as atividades de um trabalho em grupo da faculdade

### 🤔 Reflexão:
*"Por que o Kanban se adapta melhor a cenários de incerteza do que o Cascata?"*

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

---

<!-- _class: lead -->

# Dúvidas? 🤔

**Gestão de Projetos — Aula 3**

📧 Contato do professor
