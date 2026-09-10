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
## Aula 4 — Scrum e PMO
 

---

# 📋 Roteiro da Aula

| Tempo | Conteúdo |
|-------|----------|
| 0-10 min | Manifesto Ágil e Metodologias Ágeis |
| 10-30 min | Metodologia Scrum |
| 30-45 min | PMO — Project Management Office |
| 45-50 min | Encerramento e Exercício |

---

# 🚀 Por que Metodologias Ágeis?

As metodologias clássicas apresentam limitações:
- ❌ Domínio **completo dos requisitos** necessário
- ❌ Domínio **completo da tecnologia** necessário
- ❌ **Não admitem mudanças** durante o projeto
- ❌ Cliente precisa **conhecer o que precisa**
- ❌ Entrega **somente ao final** do projeto

### O mercado precisa de:
- ✅ Ciclo de desenvolvimento **contínuo**
- ✅ **Adaptação** a mudanças de requisitos
- ✅ Entregas **incrementais** e frequentes
- ✅ **Colaboração** com o cliente

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

---

# 👥 Papéis no Scrum

| Papel | Responsabilidades |
|-------|-------------------|
| **Product Owner** | • Representa os stakeholders<br>• Define funcionalidades do produto<br>• Prioriza o Product Backlog<br>• Delega tarefas e cobra resultados |
| **Scrum Master** | • Detém o conhecimento da metodologia<br>• Garante que o time siga os valores Scrum<br>• Facilitador (daily, sprint, reviews, retrospectivas)<br>• Resolve obstáculos |
| **Dev Team** | • Transforma o Backlog em produto funcional<br>• Desenvolve versões incrementais<br>• Auto-organizável e multifuncional |

---

# 📦 Artefatos do Scrum

| Artefato | Descrição |
|----------|-----------|
| **Product Backlog** | Lista de funcionalidades solicitadas<br>Alimentado pelo Product Owner<br>Priorizadas em graus (máxima, média, mínima) |
| **Sprint Backlog** | Funcionalidades priorizadas para a sprint<br>Análogo ao "To Do" do Kanban<br>Atividades atribuídas ao Dev Team |
| **Incremento** | Resultado final da sprint<br>Funcionalidades desenvolvidas e prontas para entrega<br>Marca o fim da iteração |

---

# 📅 Eventos do Scrum

| Evento | Descrição | Duração |
|--------|-----------|---------|
| **Sprint Planning** | Decide o que será desenvolvido<br>Funcionalidades do backlog → Dev Team | Planejamento |
| **Sprint Execution** | Implementação das funcionalidades | 2 a 4 semanas |
| **Daily Meeting** | Status das atividades com a equipe | ~15 min/dia |
| **Sprint Review** | Revisão do que foi atendido<br>Verificação do incremento | Ao final da sprint |
| **Sprint Retrospective** | Análise de acertos e erros<br>Proposta de melhoria | Último evento |

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

---

# 🏢 O que é um PMO?

**PMO** = Project Management Office (Escritório de Gerenciamento de Projetos)

- **Estrutura organizacional** / departamento
- Faz a **governança e gestão** dos projetos
- Promove **padronização dos processos**
- **Guardião das metodologias** de gestão
- Suporte a gerentes e equipes
- Consultoria e orientação metodológica

---

# 📊 Tipos de PMO

| Tipo | Abrangência | Foco |
|------|-------------|------|
| **Corporativo/Estratégico** | Todos os projetos da organização | Ligação com estratégia, gestão do portfólio |
| **Departamental/Tático** | Uma área ou departamento | Padrões de gestão, metodologias, projetos internos |
| **Operacional** | Projeto específico de alta complexidade | Tempo programado, padrões específicos |

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

---

# 📐 Priorização de Portfólio

Processo de selecionar e classificar projetos por critérios específicos:
- **Retorno sobre investimento**
- **Alinhamento estratégico**
- **Riscos** e recursos disponíveis
- **Impacto** nos objetivos da organização

### Indicadores de viabilidade financeira:
| Indicador | Descrição |
|-----------|-----------|
| **TIR** | Taxa Interna de Retorno |
| **VPL** | Valor Presente Líquido |
| **Payback** | Tempo de retorno do investimento |

---

# 📐 Técnica AHP — Exemplo Prático

**AHP** (Analytic Hierarchy Process) — Processo de hierarquia analítica

### Passo a passo:
1. Definir os **critérios** (Custo, Prazo, Alinhamento)
2. Definir os **projetos** (A, B, C)
3. Criar **matrizes de comparação** par a par
4. Calcular a **prioridade** de cada projeto
5. Multiplicar pela **prioridade dos critérios**

### Resultado:
| Projeto | % Preferência |
|---------|---------------|
| Projeto A | **57,11%** |
| Projeto C | 30,03% |
| Projeto B | 12,86% |

---

# 💡 Exercício Final (5 min)

Em grupos, discutam:

1. **Scrum vs. Cascata:** Em qual cenário cada um é mais adequado?
2. Se você fosse criar um **PMO** em uma empresa de tecnologia, quais seriam as **3 primeiras ações**?
3. Quais **indicadores** você usaria para medir o sucesso de um projeto?

### 🤔 Reflexão final:
*"A metodologia certa depende do contexto, não da preferência."*

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

---

<!-- _class: lead -->

# Dúvidas? 🤔

**Gestão de Projetos — Aula 4**

📧 Contato do professor
