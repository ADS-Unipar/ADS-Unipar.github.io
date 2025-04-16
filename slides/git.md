---
marp: true
theme: default
class: invert
paginate: true
---

# 🚀 Git: Controle de Versão Moderno  
### + GitHub, GitLab e Bitbucket

---

## 🧠 O que é o Git?

- Git é um **sistema de controle de versão distribuído**
- Permite que vários desenvolvedores trabalhem **simultaneamente** em um mesmo projeto
- Registra o histórico de todas as alterações feitas em arquivos
- Favorece a **colaboração**, o **rastreamento de bugs** e a **organização de código**

---

## 🕰️ História do Git

- No início dos anos 2000, o kernel do Linux usava o sistema **BitKeeper**
- Em 2005, o acesso gratuito ao BitKeeper foi revogado
- **Linus Torvalds**, criador do Linux, decide criar seu próprio sistema:
  - Rápido
  - Seguro
  - Com versionamento distribuído
- Nasce o **Git**, com foco em desempenho e integridade dos dados

---

## 🧱 Como o Git funciona?

- Git trabalha com **snapshots** (fotografias dos arquivos), não apenas com diferenças
- Todo repositório Git é **completo e independente**
- Armazena três áreas principais:
  - **Working Directory** (diretório de trabalho)
  - **Staging Area** (área de preparação)
  - **Repository** (repositório local)

---

## 📌 Principais comandos do Git

| Comando             | O que faz                                  |
|---------------------|---------------------------------------------|
| `git init`          | Inicia um repositório Git local            |
| `git clone`         | Copia um repositório remoto para sua máquina |
| `git add`           | Adiciona arquivos à staging area           |
| `git commit`        | Registra as alterações no repositório      |
| `git push`          | Envia commits para o repositório remoto    |
| `git pull`          | Puxa alterações do repositório remoto      |
| `git branch`        | Cria ou lista branches                     |
| `git merge`         | Junta branches diferentes                  |

---

## 🌳 O que são *branches*?

- Branches são **linhas de desenvolvimento paralelas**
- Permitem trabalhar em funcionalidades isoladas
- A branch `main` (ou `master`) é a principal do projeto
- Exemplo comum:
  - `main` → versão estável
  - `develop` → versão em desenvolvimento
  - `feature/nova-funcionalidade` → nova funcionalidade

---

## 🧩 Repositórios locais e remotos

- **Local**: cópia na sua máquina
- **Remoto**: cópia na nuvem, em serviços como GitHub, GitLab ou Bitbucket

> Um repositório remoto permite colaboração com outras pessoas

---

## ☁️ Plataformas Git na nuvem

- O Git é uma ferramenta local
- Para colaboração, usamos **plataformas de hospedagem de código**:
  - **GitHub**
  - **GitLab**
  - **Bitbucket**

---

## 🐙 GitHub

- Criado em 2008, comprado pela Microsoft em 2018
- Plataforma mais popular entre os desenvolvedores
- Foco em projetos open source e colaboração em larga escala

### Principais recursos:
- Pull Requests (solicitações de mudança)
- Issues (controle de bugs e tarefas)
- GitHub Actions (integração contínua)
- GitHub Pages (hospedagem de sites estáticos)
- Copilot (IA de sugestão de código)

---

## 🦊 GitLab

- Criado em 2011, de código aberto
- Pode ser usado na nuvem ou instalado localmente (self-hosted)
- Excelente para empresas que desejam controle interno dos repositórios

### Recursos diferenciais:
- CI/CD completo integrado
- Kanban boards e planejamento de sprints
- Auto DevOps (automatização de todo o ciclo de vida do projeto)
- Gestão completa de DevSecOps

---

## 🧢 Bitbucket

- Criado em 2008, mantido pela **Atlassian**
- Integra-se perfeitamente com outras ferramentas da Atlassian (Jira, Trello, Confluence)
- Suporta times menores e empresas

### Funcionalidades:
- Bitbucket Pipelines (CI/CD)
- Controle de permissões por branch
- Visualização de código com integração ao Jira
- Antes suportava **Mercurial**, hoje apenas Git

---

## 🥊 Comparação entre plataformas

| Recurso             | GitHub     | GitLab      | Bitbucket   |
|---------------------|------------|-------------|-------------|
| CI/CD Integrado     | GitHub Actions | Nativo e completo | Bitbucket Pipelines |
| Código aberto       | Não        | Sim          | Não         |
| Hospedagem local    | Parcial (Enterprise) | Sim | Sim (com Data Center) |
| Integração com Jira | Parcial    | Sim          | Total       |
| Comunidade open source | Muito forte | Média     | Pequena     |

---

## 🤔 Quando usar cada um?

- **GitHub**: melhor para projetos públicos e comunidade
- **GitLab**: ideal para DevOps e pipelines complexos
- **Bitbucket**: ideal para equipes que já usam Jira/Trello

---

## 💡 Curiosidades sobre o Git

- Git armazena cada mudança como um hash SHA-1, garantindo integridade
- É possível usar Git sem nenhuma conexão com a internet
- Mais de 90% dos projetos open source usam Git como controle de versão
- GitHub é o maior repositório de código aberto do mundo

---

## ✅ Conclusão

- Git revolucionou o versionamento de código
- Permite trabalho em equipe de forma segura e eficiente
- GitHub, GitLab e Bitbucket expandem as capacidades do Git
- Conhecer essas ferramentas é essencial para quem desenvolve software

---

## 📚 Fontes e Referências

- [git-scm.com](https://git-scm.com)
- [github.com](https://github.com)
- [gitlab.com](https://gitlab.com)
- [bitbucket.org](https://bitbucket.org)
- [Atlassian Docs](https://support.atlassian.com/)
- [GitHub Docs](https://docs.github.com)

---

### Exercícios

1. **Chamada**: Fazer um fork do repositório e abrir um PR(Pull Request) para o repositório principal com o seu nome  

2. **Criar um repositório**: Criar um repositório e  alterar ele na maquina e subir a alteração

3. **Criar um branch**: Criar uma branch e a abrir um PR no repositório da atividade 2

