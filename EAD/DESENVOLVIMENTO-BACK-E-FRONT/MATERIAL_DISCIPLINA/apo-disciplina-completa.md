# Atividade Prática Orientada (APO) — Disciplina Completa

**Disciplina:** Desenvolvimento de Software (Back-End/Front-End)
**Curso:** Sistemas de Informação — 8º Período
**Tipo:** Atividade Prática Orientada (APO)
**Carga horária:** 20 horas
**Modalidade:** Individual ou dupla
**Entrega:** Repositório público no GitHub + vídeo demonstrativo (até 10 min)

---

## 1. Contextualização

Você foi contratado(a) como desenvolvedor(a) Full Stack por uma startup de tecnologia. Sua primeira tarefa é construir o **MVP (Produto Mínimo Viável)** de um **sistema de gerenciamento de tarefas colaborativas** — o **TaskFlow**.

O sistema deve permitir que usuários cadastrem, listem, editem e removam tarefas. A aplicação deve ter uma interface web responsiva (Front-End), um Back-End com API RESTful, funcionar como PWA (offline e instalável) e seguir uma arquitetura organizada em camadas.

> **Por que esta atividade existe?**
> Para integrar TODOS os conceitos estudados na disciplina — Back-End, Front-End, Frameworks, PWA e arquitetura — em uma única aplicação completa e funcional.

---

## 2. Objetivos de Aprendizagem

Ao concluir esta atividade, o estudante deverá ser capaz de:

- **Implementar** uma aplicação Full Stack completa (Front-End + Back-End);
- **Projetar** uma API RESTful com rotas, middlewares e tratamento de erros;
- **Desenvolver** uma interface responsiva com HTML, CSS e JavaScript;
- **Consumir** a API com requisições assíncronas (fetch + async/await);
- **Transformar** a aplicação em uma PWA (Manifest + Service Worker + Cache);
- **Organizar** o código em camadas (Router, Controller, Service, Repository);
- **Documentar** o projeto com README completo.

**Taxonomia de Bloom:** Aplicar, Analisar, Projetar, Avaliar.

---

## 3. Requisitos Funcionais

### 3.1 Back-End (API)

| Método | Rota | Ação |
|--------|------|------|
| GET | `/api/tarefas` | Listar todas as tarefas |
| GET | `/api/tarefas/:id` | Buscar tarefa por ID |
| POST | `/api/tarefas` | Cadastrar nova tarefa |
| PUT | `/api/tarefas/:id` | Atualizar tarefa |
| DELETE | `/api/tarefas/:id` | Excluir tarefa |

**Dados da tarefa:**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | Número | Gerado automaticamente |
| `titulo` | Texto | Título da tarefa |
| `descricao` | Texto | Descrição detalhada |
| `status` | Texto | "pendente" ou "concluida" |
| `prioridade` | Texto | "baixa", "media" ou "alta" |
| `dataCriacao` | Data | Gerada automaticamente |

### 3.2 Front-End (Interface)

- Formulário para cadastrar tarefa (título, descrição, prioridade);
- Lista de tarefas com cards responsivos;
- Botões para editar, excluir e marcar como concluída;
- Filtro por status (todas, pendentes, concluídas);
- Filtro por prioridade (todas, baixa, media, alta);
- Interface responsiva (Mobile First).

### 3.3 PWA

- `manifest.json` completo (nome, ícones, cores, display);
- Service Worker com Cache First para recursos estáticos;
- Service Worker com Network First para dados da API;
- Funcionamento offline;
- Instalável no dispositivo.

---

## 4. Requisitos Não-Funcionais

- **Arquitetura em camadas:** Router → Controller → Service → Repository;
- **Middlewares:** logger, validação de dados, tratamento de erros;
- **Responsividade:** Mobile First com Flexbox/Grid;
- **Organização:** pastas separadas para cada camada;
- **Documentação:** README com descrição, tecnologias, como rodar e exemplos de uso;
- **Persistência:** em memória (arrays) — banco de dados será abordado em outra disciplina.

---

## 5. Estrutura do Projeto

```
taskflow/
├── src/
│   ├── routes/
│   │   └── tarefas.js
│   ├── controllers/
│   │   └── tarefaController.js
│   ├── services/
│   │   └── tarefaService.js
│   ├── repositories/
│   │   └── tarefaRepository.js
│   └── middlewares/
│       ├── logger.js
│       ├── validarTarefa.js
│       └── errorHandler.js
├── public/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── sw.js
│   ├── manifest.json
│   ├── offline.html
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
├── server.js
├── package.json
└── README.md
```

---

## 6. Etapas de Desenvolvimento

### Etapa 1 — Configuração do Ambiente (1h)

1. Criar pasta do projeto;
2. Inicializar com `npm init -y`;
3. Instalar Express: `npm install express`;
4. Criar a estrutura de pastas;
5. Criar o `server.js` básico.

### Etapa 2 — Back-End (5h)

1. Implementar o Repository (CRUD em memória);
2. Implementar o Service (validações de negócio);
3. Implementar o Controller (orquestração);
4. Implementar as Routes;
5. Implementar middlewares (logger, validação, erro);
6. Testar todas as rotas com curl ou Thunder Client.

### Etapa 3 — Front-End (5h)

1. Criar o HTML semântico com formulário e lista;
2. Estilizar com CSS responsivo (Mobile First);
3. Implementar JavaScript com fetch() e async/await;
4. Implementar CRUD completo (criar, listar, editar, excluir);
5. Implementar filtros por status e prioridade;
6. Testar responsividade em diferentes tamanhos de tela.

### Etapa 4 — PWA (4h)

1. Criar `manifest.json` completo;
2. Adicionar `<link rel="manifest">` no HTML;
3. Criar Service Worker com Cache First (recursos estáticos);
4. Criar Service Worker com Network First (API);
5. Registrar o Service Worker no `app.js`;
6. Criar página offline;
7. Testar funcionamento offline;
8. Testar instalação da PWA.

### Etapa 5 — Documentação e Entrega (2h)

1. Criar README.md com:
   - Descrição do projeto;
   - Tecnologias utilizadas;
   - Como instalar e rodar;
   - Estrutura do projeto;
   - Exemplos de uso da API;
   - Prints da aplicação;
2. Criar vídeo demonstrativo (até 10 minutos);
3. Publicar no GitHub.

---

## 7. Critérios de Avaliação

| Critério | Peso | Descrição |
|----------|------|-----------|
| **Back-End funcional** | 20% | API com CRUD completo, validações e middlewares |
| **Front-End funcional** | 20% | Interface responsiva com CRUD e filtros |
| **Arquitetura em camadas** | 15% | Separação Router/Controller/Service/Repository |
| **PWA** | 15% | Manifest, Service Worker, cache, offline, instalação |
| **Responsividade** | 10% | Mobile First, Flexbox/Grid, media queries |
| **Boas práticas** | 10% | Código limpo, nomes descritivos, organização |
| **Documentação** | 10% | README completo e vídeo demonstrativo |

---

## 8. Resultado Esperado

Ao finalizar a atividade, o estudante deverá ter:

- Uma aplicação Full Stack completa e funcional;
- API RESTful com 5 endpoints e middlewares;
- Interface responsiva com CRUD e filtros;
- PWA instalável e funcionando offline;
- Código organizado em camadas;
- README documentado;
- vídeo demonstrativo.

---

## 9. Dicas

- **Comece pelo Back-End.** Teste cada rota antes de construir o Front-End;
- **Implemente uma funcionalidade por vez.** Não tente fazer tudo de uma vez;
- **Teste frequentemente.** Execute o servidor e verifique no navegador a cada mudança;
- **Use o console do navegador (F12)** para debugar erros de JavaScript;
- **Consulte a documentação** do Express e do MDN quando tiver dúvidas;
- **Organize o código** desde o início — não deixe para refatorar no final.

---

## 10. Checklist Final

### Back-End
- [ ] Servidor Express rodando;
- [ ] 5 rotas REST funcionando (GET, GET/:id, POST, PUT, DELETE);
- [ ] Middleware de log implementado;
- [ ] Middleware de validação implementado;
- [ ] Middleware de tratamento de erros implementado;
- [ ] Arquitetura em camadas (Router, Controller, Service, Repository).

### Front-End
- [ ] HTML semântico com formulário e lista;
- [ ] CSS responsivo com Mobile First;
- [ ] JavaScript com fetch() e async/await;
- [ ] CRUD completo funcionando;
- [ ] Filtros por status e prioridade;
- [ ] Tratamento de erros visível na interface.

### PWA
- [ ] manifest.json configurado;
- [ ] Service Worker registrado;
- [ ] Cache First para recursos estáticos;
- [ ] Network First para API;
- [ ] Página offline funcionando;
- [ ] PWA instalável no dispositivo.

### Documentação
- [ ] README.md completo;
- [ ] Vídeo demonstrativo (até 10 min);
- [ ] Repositório público no GitHub.
