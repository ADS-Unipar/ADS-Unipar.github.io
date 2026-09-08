---
marp: true
theme: default
paginate: true
class: lead
style: |
  section {
    background-image: url('bg-padrao.png');
    background-size: cover;
    background-position: center;
    color: #272425;
    font-family: 'Century Gothic', 'Calibri', sans-serif;
  }
  section.bg-capa {
    background-image: url('bg-capa.png');
    background-size: cover;
    background-position: center;
    color: #ffffff;
  }
  section.bg-fim {
    background-image: url('bg-fim.png');
    background-size: cover;
    background-position: center;
  }
  h1, h2, h3 {
    color: #C22820;
    font-weight: bold;
  }
  h2.subtitulo {
    color: #5C2034;
  }
  code {
    background-color: #f4f4f4;
    color: #C22820;
    padding: 2px 6px;
    border-radius: 4px;
  }
  pre code {
    background-color: #1e1e1e;
    color: #ffffff;
    padding: 16px;
    border-radius: 8px;
    display: block;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 16px 0;
  }
  th {
    background-color: #C22820;
    color: #ffffff;
    padding: 8px;
    text-align: left;
  }
  td {
    border: 1px solid #5C2034;
    padding: 8px;
  }
  blockquote {
    border-left: 4px solid #C22820;
    padding-left: 16px;
    color: #5C2034;
    font-style: italic;
  }
---

<!-- _class: bg-capa -->

# Atividade Prática Orientada
## Unidade 1 — Back-End e Front-End
### Construção de uma aplicação CRUD Full Stack

<!--
FALA DO PROFESSOR:

Bem-vindo à Atividade Prática Orientada da Unidade 1. Nesta atividade, você vai colocar em prática todos os conceitos estudados nas aulas anteriores: HTML, CSS, JavaScript, Node.js, Express, AJAX e APIs RESTful.

O objetivo é construir uma aplicação web completa, com Front-End e Back-End integrados, capaz de realizar as quatro operações fundamentais de persistência: Criar, Ler, Atualizar e Excluir registros — o famoso CRUD.

A proposta é que você vivencie, na prática, o fluxo real de uma aplicação Full Stack: o usuário interage com a interface, o navegador envia requisições HTTP assíncronas, o servidor processa, consulta ou altera dados e devolve uma resposta em JSON que é renderizada na tela — tudo isso sem recarregar a página.

Prepare o ambiente, organize seu tempo e mãos à obra.
-->

---

## 1. Identificação da Atividade

| Item | Descrição |
|---|---|
| **Disciplina** | Desenvolvimento de Software (Back-End/Front-End) |
| **Unidade** | 1 — Back-End e Front-End |
| **Tipo** | Atividade Prática Orientada (APO) |
| **Carga horária** | 10 horas |
| **Modalidade** | Individual ou dupla |
| **Entrega** | Repositório público no GitHub + vídeo curto (até 5 min) |

<!--
FALA DO PROFESSOR:

Antes de começar a codificar, é essencial que você compreenda o que está sendo proposto. Esta atividade é individual ou em dupla — escolha um colega com quem você consiga colaborar de forma produtiva.

A entrega é composta por duas partes: o código-fonte, que deve estar em um repositório público no GitHub, e um vídeo curto de até cinco minutos demonstrando a aplicação funcionando. Não se preocupe em produzir um vídeo profissional; o objetivo é mostrar que a aplicação realmente funciona.

A carga horária estimada é de 10 horas, distribuídas entre leitura do roteiro, configuração do ambiente, implementação e documentação. Organize-se para não deixar tudo para o último dia.
-->

---

## 2. Contextualização

Você foi contratado(a) por uma **startup de gestão de tarefas** para desenvolver o **MVP (Produto Mínimo Viável)** de uma aplicação web de lista de tarefas colaborativas. O sistema precisa permitir que usuários cadastrem, listem, editem e removam tarefas. O Back-End deve expor uma API RESTful e o Front-End deve consumir essa API de forma assíncrona, sem recarregar a página.

> **Por que esta atividade existe?**
> Para que você experimente, de forma integrada, o ciclo completo de uma aplicação Full Stack: modelagem, rotas, requisições assíncronas, tratamento de respostas e boas práticas de organização.

<!--
FALA DO PROFESSOR:

A contextualização é fundamental. Você não vai apenas "fazer uma lista de tarefas"; você vai simular o trabalho de um desenvolvedor profissional em uma startup. Isso significa tomar decisões técnicas, justificar escolhas e entregar um produto funcional.

Observe a pergunta no slide: por que esta atividade existe? Ela existe porque, até agora, você estudou conceitos de forma isolada — HTML em uma aula, JavaScript em outra, Node.js em outra. A realidade profissional, porém, exige que você una todos esses conhecimentos em uma única solução. Esta atividade é o momento de fazer essa integração.

Pergunte-se: como um desenvolvedor real organiza um projeto? Quais pastas? Quais convenções? Como versiona o código? Como documenta? Tudo isso faz parte da entrega.
-->

---

## 3. Objetivos de Aprendizagem

Ao concluir esta atividade, o estudante deverá ser capaz de:

- **Compreender** o fluxo de comunicação entre cliente e servidor via HTTP;
- **Implementar** um servidor Back-End com Node.js e Express, expondo endpoints REST;
- **Desenvolver** uma interface Front-End responsiva com HTML, CSS e JavaScript;
- **Aplicar** requisições assíncronas com a API `fetch()` para consumir a API;
- **Executar** as quatro operações CRUD (Create, Read, Update, Delete);
- **Analisar** erros comuns de integração e propor soluções;
- **Avaliar** a qualidade do código segundo boas práticas de organização.

**Taxonomia de Bloom:** Aplicar, Analisar e Avaliar.

<!--
FALA DO PROFESSOR:

Os objetivos foram escritos utilizando verbos da Taxonomia de Bloom. Note que predominam os níveis "Aplicar", "Analisar" e "Avaliar". Isso significa que não basta copiar e colar código; é preciso compreender o que está fazendo, interpretar erros e julgar se a solução implementada é adequada.

Releia cada objetivo ao final da atividade e verifique, com honestidade, se você de fato conseguiu atingi-lo. Se algum deles não foi alcançado, identifique o motivo e corrija antes de submeter a entrega.
-->

---

## 4. Competências e Habilidades

| Competência | Habilidade |
|---|---|
| Desenvolver aplicações web Full Stack | Implementar Front-End e Back-End integrados |
| Projetar APIs RESTful | Definir rotas, métodos HTTP e contratos JSON |
| Programar em JavaScript | Utilizar funções assíncronas, Promises e tratamento de erros |
| Aplicar boas práticas | Organizar pastas, nomear arquivos, validar dados |
| Resolver problemas | Decompor a aplicação em etapas menores e gerenciáveis |

<!--
FALA DO PROFESSOR:

Esta tabela deixa explícito o que será avaliado. Não é suficiente que a aplicação "funcione"; ela precisa demonstrar domínio técnico nas competências listadas.

A organização do código, por exemplo, é uma habilidade observável: pastas bem nomeadas, separação de responsabilidades, README explicativo. A capacidade de resolver problemas aparece quando você depara com um erro de CORS, por exemplo — você sabe diagnosticar e corrigir?

Mantenha essa tabela como referência durante toda a atividade.
-->

---

## 5. Problema Proposto

A startup **TaskFlow** precisa de uma aplicação web onde os usuários possam:

1. **Cadastrar** uma nova tarefa informando título, descrição e prioridade;
2. **Listar** todas as tarefas em uma interface limpa e responsiva;
3. **Editar** uma tarefa existente, alterando seus dados;
4. **Excluir** tarefas que já foram concluídas;
5. **Filtrar** tarefas por status (todas, pendentes, concluídas).

A persistência dos dados deve acontecer **em memória** (um array no Back-End), pois o objetivo é didático, não produtivo.

<!--
FALA DO PROFESSOR:

O problema foi propositalmente desenhado para ser simples no escopo, mas rico em desafios técnicos. Cinco requisitos funcionais, mas cada um deles exige decisões:

- "Cadastrar" envolve criar um formulário, validar dados, enviar POST e atualizar a tela.
- "Listar" envolve renderizar dados dinamicamente no DOM.
- "Editar" envolve carregar dados em um formulário, enviar PUT e atualizar a tela.
- "Excluir" envolve confirmação, enviar DELETE e remover o item do DOM.
- "Filtrar" envolve manipulação de estado no Front-End.

Note que a persistência é em memória. Isso significa que, ao reiniciar o servidor, os dados somem. Isso é proposital: o foco da atividade é a integração Front-End/Back-End, não o banco de dados. Esse tema será aprofundado em unidades seguintes.
-->

---

## 6. Arquitetura da Solução

```
┌──────────────────┐         HTTP/JSON          ┌──────────────────┐
│                  │  ───────────────────────►   │                  │
│   FRONT-END      │                             │   BACK-END       │
│   (HTML+CSS+JS)  │  ◄───────────────────────   │   (Node + Exp)   │
│                  │     Resposta em JSON        │                  │
└──────────────────┘                             └──────────────────┘
        │                                                  │
        │ Renderiza                                        │ Persiste
        ▼                                                  ▼
   ┌────────┐                                      ┌──────────────┐
   │  DOM   │                                      │ Array em     │
   │        │                                      │ memória      │
   └────────┘                                      └──────────────┘
```

**Fluxo de uma requisição:**

1. Usuário interage com a interface (clique, submit, etc.);
2. JavaScript captura o evento e monta a requisição;
3. `fetch()` envia a requisição HTTP ao Back-End;
4. Express recebe, processa e responde em JSON;
5. Front-End recebe a resposta e atualiza o DOM.

<!--
FALA DO PROFESSOR:

A arquitetura é o "mapa" do que você vai construir. Memorize esse fluxo: evento no Front-End → requisição HTTP → processamento no Back-End → resposta JSON → atualização do DOM.

Esse padrão se repete em praticamente toda aplicação web moderna. Quando você entender esse fluxo, estará preparado para trabalhar com qualquer framework — React, Vue, Angular — porque todos eles, em essência, fazem exatamente isso.

Observe que o Back-End é independente do Front-End. Eles se comunicam exclusivamente via HTTP. Isso é o que chamamos de **desacoplamento**: cada lado pode ser substituído sem afetar o outro, desde que o contrato (a API) seja mantido.
-->

---

## 7. Tecnologias e Ferramentas

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Front-End | HTML5 + CSS3 | Estrutura e estilo da página |
| Front-End | JavaScript (ES6+) | Lógica de interação e requisições |
| Back-End | Node.js | Ambiente de execução JavaScript no servidor |
| Back-End | Express.js | Framework minimalista para APIs REST |
| Versionamento | Git + GitHub | Controle de versão e portfólio |
| Teste | Postman ou Insomnia | Testar endpoints antes de integrar |

<!--
FALA DO PROFESSOR:

A escolha das tecnologias foi proposital: são ferramentas amplamente utilizadas no mercado, com baixo custo de entrada e enorme quantidade de material de apoio. Todas são gratuitas.

Destaque para o Postman ou Insomnia: utilize essas ferramentas para testar cada endpoint do Back-End **antes** de integrá-lo ao Front-End. Isso economiza tempo e ajuda a isolar problemas. Se o endpoint não funciona isoladamente, ele não vai funcionar quando integrado.

Quanto ao Git e GitHub, lembre-se: commits pequenos e descritivos demonstram maturidade profissional. O repositório será avaliado.
-->

---

## 8. Requisitos Funcionais

| Código | Requisito | Prioridade |
|---|---|---|
| RF01 | Cadastrar tarefa (POST `/api/tarefas`) | Alta |
| RF02 | Listar todas as tarefas (GET `/api/tarefas`) | Alta |
| RF03 | Atualizar uma tarefa (PUT `/api/tarefas/:id`) | Alta |
| RF04 | Excluir uma tarefa (DELETE `/api/tarefas/:id`) | Alta |
| RF05 | Filtrar tarefas por status | Média |
| RF06 | Marcar tarefa como concluída | Média |
| RF07 | Validar campos obrigatórios | Alta |
| RF08 | Interface responsiva (mobile first) | Média |

<!--
FALA DO PROFESSOR:

Os requisitos funcionais são o "contrato" da aplicação. Cada linha da tabela representa uma funcionalidade que precisa estar implementada para que a atividade seja considerada completa.

Repare que "validar campos obrigatórios" tem prioridade alta. Isso porque em aplicações reais, dados inválidos são a principal causa de bugs. Não confie apenas na validação do Front-End; o Back-End também deve validar. Essa é uma boa prática de segurança: nunca confie no cliente.

A interface responsiva, apesar de ter prioridade média nesta unidade, é fundamental para a Unidade 3, quando estudaremos PWAs.
-->

---

## 9. Requisitos Não Funcionais

| Código | Requisito |
|---|---|
| RNF01 | O Back-End deve responder em menos de 200 ms para listas pequenas |
| RNF02 | O código deve estar organizado em pastas (`public/`, `src/`, `routes/`) |
| RNF03 | As rotas devem seguir o padrão RESTful |
| RNF04 | O README.md deve conter instruções de execução |
| RNF05 | O projeto deve funcionar localmente sem erros no console |

<!--
FALA DO PROFESSOR:

Requisitos não funcionais são frequentemente esquecidos por iniciantes, mas são tão importantes quanto os funcionais. Eles dizem respeito à **qualidade** da solução, não apenas à sua existência.

"Rotas devem seguir o padrão RESTful", por exemplo, significa usar os verbos HTTP corretos: GET para leitura, POST para criação, PUT para atualização, DELETE para remoção. Usar GET para excluir algo é um erro grave de design.

O README.md é a porta de entrada do seu projeto. Outro desenvolvedor (ou o próprio professor) deve conseguir clonar o repositório e executar a aplicação apenas seguindo as instruções do README.
-->

---

## 10. Estrutura do Projeto

```
taskflow/
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── routes/
│   │   │   └── tarefas.js
│   │   └── data/
│   │       └── tarefasStore.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── app.js
├── README.md
└── .gitignore
```

<!--
FALA DO PROFESSOR:

A estrutura do projeto é uma convenção. Você pode organizá-la de outra forma, mas a separação entre `backend/` e `frontend/` é importante porque cada parte pode ser implantada de maneira independente em servidores diferentes.

Repare nas subpastas: `routes/` para definição de endpoints, `data/` para a camada de persistência, `public/` para arquivos estáticos. Essa organização reflete o padrão MVC simplificado, que será aprofundado na Unidade 2, quando estudarmos Frameworks.

Crie a estrutura de pastas **antes** de começar a codificar. Isso evita retrabalho.
-->

---

## 11. Etapas da Atividade

### Etapa 1 — Configuração do Ambiente (1h)

- Instalar Node.js (versão LTS);
- Criar o repositório no GitHub;
- Inicializar o projeto com `npm init -y`;
- Instalar o Express: `npm install express`;
- Instalar o `nodemon` como dependência de desenvolvimento: `npm install --save-dev nodemon`;
- Configurar o `.gitignore` para ignorar `node_modules/`.

<!--
FALA DO PROFESSOR:

A configuração do ambiente é o alicerce. Se algo aqui estiver errado, todo o resto será comprometido. Verifique a versão do Node com `node --version`. Se você não tem o Node instalado, acesse o site oficial e baixe a versão LTS.

O `nodemon` é uma ferramenta que reinicia o servidor automaticamente sempre que você salva um arquivo. Parece um detalhe, mas economiza horas de trabalho ao longo do projeto.

Não versione a pasta `node_modules/`. Ela é enorme e pode ser recriada com `npm install` a partir do `package.json`.
-->

---

### Etapa 2 — Back-End: API REST (2h)

Criar o arquivo `backend/src/server.js`:

```javascript
const express = require('express');
const app = express();
const tarefasRouter = require('./routes/tarefas');

app.use(express.json());
app.use('/api/tarefas', tarefasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

Criar `backend/src/data/tarefasStore.js`:

```javascript
let tarefas = [];
let nextId = 1;

module.exports = {
  listar: () => tarefas,
  buscarPorId: (id) => tarefas.find(t => t.id === id),
  criar: (dados) => {
    const tarefa = { id: nextId++, ...dados, concluida: false };
    tarefas.push(tarefa);
    return tarefa;
  },
  atualizar: (id, dados) => {
    const idx = tarefas.findIndex(t => t.id === id);
    if (idx === -1) return null;
    tarefas[idx] = { ...tarefas[idx], ...dados };
    return tarefas[idx];
  },
  remover: (id) => {
    const idx = tarefas.findIndex(t => t.id === id);
    if (idx === -1) return null;
    return tarefas.splice(idx, 1)[0];
  }
};
```

<!--
FALA DO PROFESSOR:

Observe a estrutura: o `server.js` é minimalista — apenas configura o Express, habilita o middleware de JSON e delega as rotas para um arquivo específico. Esse é o princípio da **separação de responsabilidades**.

O `tarefasStore.js` simula uma camada de persistência. Repare que ele exporta funções, não o array diretamente. Isso é importante: evita que outros módulos alterem o array de forma desordenada. É o padrão de encapsulamento que será aprofundado em Frameworks.

Note o uso de `let` e `nextId++` para gerar IDs automáticos. Em um banco de dados real, o ID seria gerado pelo SGBD, mas para fins didáticos essa abordagem é suficiente.
-->

---

### Etapa 2 — Continuação: Rotas REST

Criar `backend/src/routes/tarefas.js`:

```javascript
const express = require('express');
const router = express.Router();
const store = require('../data/tarefasStore');

router.get('/', (req, res) => {
  res.json(store.listar());
});

router.get('/:id', (req, res) => {
  const tarefa = store.buscarPorId(parseInt(req.params.id));
  if (!tarefa) return res.status(404).json({ erro: 'Não encontrada' });
  res.json(tarefa);
});

router.post('/', (req, res) => {
  const { titulo, descricao, prioridade } = req.body;
  if (!titulo) return res.status(400).json({ erro: 'Título obrigatório' });
  const tarefa = store.criar({ titulo, descricao, prioridade });
  res.status(201).json(tarefa);
});

router.put('/:id', (req, res) => {
  const tarefa = store.atualizar(parseInt(req.params.id), req.body);
  if (!tarefa) return res.status(404).json({ erro: 'Não encontrada' });
  res.json(tarefa);
});

router.delete('/:id', (req, res) => {
  const tarefa = store.remover(parseInt(req.params.id));
  if (!tarefa) return res.status(404).json({ erro: 'Não encontrada' });
  res.status(204).send();
});

module.exports = router;
```

<!--
FALA DO PROFESSOR:

Aqui estão os cinco endpoints do CRUD, mais um endpoint de busca por ID. Cada rota segue o padrão REST:

- GET para leitura
- POST para criação
- PUT para atualização
- DELETE para remoção

Repare nos códigos de status HTTP: 200 para sucesso, 201 para recurso criado, 204 para sucesso sem conteúdo, 400 para erro do cliente, 404 para não encontrado. Usar os códigos corretos é uma boa prática que diferencia um código amador de um código profissional.

A validação de "título obrigatório" é feita no Back-End, mesmo que o Front-End também valide. Nunca confie apenas na validação do cliente.
-->

---

### Etapa 2 — Teste dos Endpoints

Antes de prosseguir, teste cada endpoint usando Postman ou `curl`:

```bash
# Listar tarefas (vazio)
curl http://localhost:3000/api/tarefas

# Criar tarefa
curl -X POST http://localhost:3000/api/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Estudar Node","descricao":"Ler docs","prioridade":"alta"}'

# Atualizar
curl -X PUT http://localhost:3000/api/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{"concluida":true}'

# Remover
curl -X DELETE http://localhost:3000/api/tarefas/1
```

<!--
FALA DO PROFESSOR:

Teste cada endpoint **antes** de partir para o Front-End. Se algum endpoint não funcionar, o Front-End não vai funcionar. E depurar dois sistemas ao mesmo tempo é muito mais difícil do que depurar um de cada vez.

Use o Postman se preferir uma interface gráfica, ou `curl` se preferir o terminal. O importante é validar:
1. O servidor sobe sem erros?
2. As requisições retornam o status esperado?
3. Os dados estão sendo persistidos em memória?

Se você receber erro de CORS ao testar pelo navegador, isso será resolvido na etapa do Front-End.
-->

---

### Etapa 3 — Front-End: Estrutura (2h)

Criar `frontend/public/index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TaskFlow — Lista de Tarefas</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>TaskFlow</h1>
    <p>Sua lista de tarefas colaborativa</p>
  </header>

  <main>
    <section class="form-section">
      <h2>Nova tarefa</h2>
      <form id="form-tarefa">
        <input type="hidden" id="tarefa-id">
        <label>Título*</label>
        <input type="text" id="titulo" required>
        <label>Descrição</label>
        <textarea id="descricao"></textarea>
        <label>Prioridade</label>
        <select id="prioridade">
          <option value="baixa">Baixa</option>
          <option value="media" selected>Média</option>
          <option value="alta">Alta</option>
        </select>
        <button type="submit">Salvar</button>
        <button type="button" id="cancelar">Cancelar</button>
      </form>
    </section>

    <section class="lista-section">
      <h2>Minhas tarefas</h2>
      <div class="filtros">
        <button data-filtro="todas" class="filtro ativo">Todas</button>
        <button data-filtro="pendentes" class="filtro">Pendentes</button>
        <button data-filtro="concluidas" class="filtro">Concluídas</button>
      </div>
      <ul id="lista-tarefas"></ul>
    </section>
  </main>

  <script src="js/app.js"></script>
</body>
</html>
```

<!--
FALA DO PROFESSOR:

Observe o uso de HTML semântico: `<header>`, `<main>`, `<section>`, `<form>`, `<label>`. Isso não é "enfeite"; é acessibilidade e SEO. A Unidade 3 aprofundará acessibilidade.

O atributo `viewport` na meta tag é essencial para responsividade. Sem ele, a página não se adapta bem a dispositivos móveis. Guarde essa informação: ela será fundamental na Unidade 3.

Repare no `<input type="hidden" id="tarefa-id">`. Ele será usado para distinguir entre criar uma nova tarefa e atualizar uma existente. É uma técnica simples, mas muito útil.
-->

---

### Etapa 3 — Continuação: CSS Responsivo

Criar `frontend/public/css/style.css`:

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Century Gothic', sans-serif;
  background: #f4f4f4;
  color: #272425;
  line-height: 1.6;
}
header {
  background: #C22820;
  color: #fff;
  padding: 24px;
  text-align: center;
}
main {
  max-width: 800px;
  margin: 24px auto;
  padding: 16px;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  main { grid-template-columns: 1fr 2fr; }
}
.form-section, .lista-section {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
form label { display: block; margin: 8px 0 4px; font-weight: bold; }
form input, form textarea, form select {
  width: 100%; padding: 8px; border: 1px solid #5C2034;
  border-radius: 4px; font-size: 16px;
}
form button {
  margin-top: 12px; padding: 10px 20px; background: #C22820;
  color: #fff; border: none; border-radius: 4px; cursor: pointer;
}
form button:hover { background: #5C2034; }
.filtros button {
  margin: 4px; padding: 6px 12px; background: #fff;
  border: 2px solid #C22820; color: #C22820;
  border-radius: 4px; cursor: pointer;
}
.filtros button.ativo { background: #C22820; color: #fff; }
#lista-tarefas { list-style: none; margin-top: 16px; }
#lista-tarefas li {
  background: #fff; padding: 12px; margin: 8px 0;
  border-left: 4px solid #C22820; border-radius: 4px;
  display: flex; justify-content: space-between; align-items: center;
}
#lista-tarefas li.concluida { opacity: 0.6; border-left-color: #5C2034; }
.tarefa-acoes button { margin-left: 8px; }
```

<!--
FALA DO PROFESSOR:

O CSS utiliza variáveis implícitas da paleta institucional (vermelho C22820 e vinho 5C2034) e segue o conceito de Mobile First — estilos base para telas pequenas, com `@media (min-width: 768px)` aplicando layout em duas colunas para tablets e desktops.

Repare no uso de `display: grid` com `grid-template-columns: 1fr` no mobile e `1fr 2fr` no desktop. Esse é um padrão moderno que substitui o antigo uso de `float`.

A classe `.concluida` reduz a opacidade e muda a cor da borda, dando feedback visual ao usuário. Feedback visual é fundamental em interfaces: o usuário precisa saber que sua ação teve efeito.
-->

---

### Etapa 3 — Continuação: JavaScript Assíncrono

Criar `frontend/public/js/app.js`:

```javascript
const API = 'http://localhost:3000/api/tarefas';
let filtroAtual = 'todas';

const form = document.getElementById('form-tarefa');
const lista = document.getElementById('lista-tarefas');
const inputId = document.getElementById('tarefa-id');
const inputTitulo = document.getElementById('titulo');
const inputDescricao = document.getElementById('descricao');
const inputPrioridade = document.getElementById('prioridade');

async function carregarTarefas() {
  const resp = await fetch(API);
  const tarefas = await resp.json();
  renderizar(tarefas);
}

function renderizar(tarefas) {
  lista.innerHTML = '';
  const filtradas = tarefas.filter(t => {
    if (filtroAtual === 'pendentes') return !t.concluida;
    if (filtroAtual === 'concluidas') return t.concluida;
    return true;
  });
  filtradas.forEach(t => {
    const li = document.createElement('li');
    if (t.concluida) li.classList.add('concluida');
    li.innerHTML = `
      <div>
        <strong>${t.titulo}</strong>
        <p>${t.descricao || ''}</p>
        <small>Prioridade: ${t.prioridade}</small>
      </div>
      <div class="tarefa-acoes">
        <button onclick="alternarConcluida(${t.id}, ${!t.concluida})">
          ${t.concluida ? 'Reabrir' : 'Concluir'}
        </button>
        <button onclick="editar(${t.id})">Editar</button>
        <button onclick="excluir(${t.id})">Excluir</button>
      </div>`;
    lista.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dados = {
    titulo: inputTitulo.value,
    descricao: inputDescricao.value,
    prioridade: inputPrioridade.value
  };
  if (inputId.value) {
    await fetch(`${API}/${inputId.value}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
  } else {
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
  }
  form.reset();
  inputId.value = '';
  await carregarTarefas();
});

async function alternarConcluida(id, concluida) {
  await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ concluida })
  });
  await carregarTarefas();
}

async function editar(id) {
  const resp = await fetch(`${API}/${id}`);
  const t = await resp.json();
  inputId.value = t.id;
  inputTitulo.value = t.titulo;
  inputDescricao.value = t.descricao;
  inputPrioridade.value = t.prioridade;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function excluir(id) {
  if (!confirm('Excluir esta tarefa?')) return;
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  await carregarTarefas();
}

document.querySelectorAll('.filtro').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtro').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    filtroAtual = btn.dataset.filtro;
    carregarTarefas();
  });
});

carregarTarefas();
```

<!--
FALA DO PROFESSOR:

Aqui está o coração da aplicação. Observe os pontos essenciais:

1. **`async/await`**: substitui o encadeamento de `.then()`, tornando o código mais legível.
2. **`fetch()`**: API nativa do navegador para requisições HTTP. Não precisa de biblioteca externa.
3. **`renderizar()`**: função que recebe os dados do Back-End e constrói o DOM dinamicamente.
4. **`filtroAtual`**: variável de estado no Front-End que controla a renderização condicional.
5. **Tratamento de erro mínimo**: o exemplo é propositalmente simples, mas em produção você trataria erros de rede, validações, etc.

Atenção à função `editar()`: ela carrega os dados no formulário para edição. Note o `window.scrollTo` para levar o usuário de volta ao topo da página — uma pequena gentileza de UX.

Atenção à função `excluir()`: ela usa `confirm()` para pedir confirmação. Em aplicações profissionais, você usaria um modal customizado, mas para fins didáticos o `confirm` é suficiente.
-->

---

### Etapa 4 — CORS e Integração (1h)

Durante o teste no navegador, você provavelmente receberá o erro:

```
Access to fetch at 'http://localhost:3000/api/tarefas'
from origin 'null' has been blocked by CORS policy
```

**Solução:** instalar o middleware `cors` no Back-End:

```bash
npm install cors
```

E adicionar no `server.js`:

```javascript
const cors = require('cors');
app.use(cors());
```

> **O que é CORS?** É um mecanismo de segurança do navegador que bloqueia requisições entre origens diferentes. Por padrão, o navegador não permite que um Front-End em `file://` ou `http://localhost:5500` acesse um Back-End em `http://localhost:3000`. O middleware `cors()` libera esse acesso (em produção, configure origens específicas).

<!--
FALA DO PROFESSOR:

CORS é, provavelmente, o erro mais comum enfrentado por quem está começando a integrar Front-End e Back-End. Ele aparece porque o navegador, por questões de segurança, bloqueia requisições entre origens diferentes.

Por que o navegador faz isso? Imagine que você está logado no seu banco e, em outra aba, abre um site malicioso. Sem CORS, esse site poderia fazer requisições ao banco em seu nome. O CORS é a proteção contra isso.

Em desenvolvimento, permitimos qualquer origem. Em produção, devemos configurar origens específicas. Isso será aprofundado em unidades futuras.
-->

---

### Etapa 5 — Servir o Front-End pelo Back-End (Opcional, +30 min)

Para simplificar, você pode fazer o Back-End servir também os arquivos estáticos do Front-End:

```javascript
const path = require('path');
app.use(express.static(path.join(__dirname, '../../frontend/public')));
```

Agora, ao acessar `http://localhost:3000`, o Back-End entrega o `index.html` e resolve o problema de CORS de uma vez.

<!--
FALA DO PROFESSOR:

Essa é uma técnica útil em desenvolvimento: o mesmo servidor serve o Back-End e os arquivos estáticos. Em produção, porém, o ideal é separar: um servidor web (Nginx, por exemplo) serve os arquivos estáticos, e o Back-End só lida com a API. Esse é o conceito de **arquitetura monolítica versus arquitetura distribuída**, que será aprofundado em Arquitetura de Software.
-->

---

### Etapa 6 — Documentação e Vídeo (2h)

Criar o `README.md` na raiz do repositório:

````markdown
# TaskFlow — Lista de Tarefas Full Stack

Aplicação CRUD completa integrando Front-End (HTML, CSS, JS) e Back-End (Node.js + Express).

## Tecnologias
- HTML5, CSS3, JavaScript (ES6+)
- Node.js, Express.js, CORS

## Como executar

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/taskflow.git
cd taskflow
```

### 2. Instalar dependências do Back-End
```bash
cd backend
npm install
```

### 3. Iniciar o servidor
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API
| Método | Rota | Descrição |
|---|---|---|
| GET | /api/tarefas | Lista todas as tarefas |
| GET | /api/tarefas/:id | Busca tarefa por ID |
| POST | /api/tarefas | Cria nova tarefa |
| PUT | /api/tarefas/:id | Atualiza tarefa |
| DELETE | /api/tarefas/:id | Remove tarefa |

## Autoria
@seu-usuario
````

Gravar um vídeo de até 5 minutos demonstrando:
1. A aplicação rodando;
2. As quatro operações CRUD;
3. O console do navegador sem erros;
4. O terminal mostrando as requisições recebidas pelo Back-End.

<!--
FALA DO PROFESSOR:

A documentação é parte da entrega. Um bom README é aquele que permite a qualquer pessoa, mesmo sem contato prévio com o projeto, executar a aplicação em poucos minutos.

O vídeo é importante porque mostra a aplicação em funcionamento. Não precisa ser polido; pode ser gravado com o celular, se necessário. O que importa é a evidência de que tudo funciona integrado.

Dica: grave o vídeo com o terminal visível, mostrando as requisições chegando ao Back-End enquanto você interage com o Front-End. Isso evidencia a integração.
-->

---

## 12. Critérios de Avaliação

| Critério | Peso | Descrição |
|---|---|---|
| **Funcionalidade** | 40% | Todos os requisitos funcionais implementados |
| **Integração** | 20% | Front-End e Back-End se comunicam corretamente |
| **Organização do código** | 15% | Estrutura de pastas, nomes claros, separação de responsabilidades |
| **Boas práticas** | 10% | Validação, tratamento de erros, uso correto de verbos HTTP |
| **Documentação** | 10% | README completo e vídeo demonstrativo |
| **Versionamento** | 5% | Commits descritivos no GitHub |
| **Total** | **100%** | |

### Escala de Notas

| Nota | Conceito | Desempenho |
|---|---|---|
| 9,0 — 10,0 | A | Implementou todos os requisitos com excelência |
| 7,0 — 8,9 | B | Implementou a maioria dos requisitos com qualidade |
| 5,0 — 6,9 | C | Implementou parcialmente, com falhas |
| 0,0 — 4,9 | D | Não atendeu aos requisitos mínimos |

<!--
FALA DO PROFESSOR:

A avaliação é objetiva e transparente. Os pesos foram definidos para refletir a importância de cada aspecto: a aplicação precisa funcionar (40%), mas a forma como o código está organizado e documentado também é avaliada.

Releia a tabela de critérios antes de submeter. Faça uma autoavaliação: a aplicação está completa? O código está organizado? O README é claro? O vídeo demonstra tudo?

Erros de principiante mais comuns que custam pontos:
- Esquecer de tratar o caso de tarefa não encontrada (retornar 404).
- Não validar campos obrigatórios no Back-End.
- Versionar `node_modules/`.
- Não configurar o `.gitignore`.
-->

---

## 13. Erros Comuns

### ❌ Erro 1: Não tratar CORS

**Sintoma:** O Front-End não consegue acessar a API.

**Causa:** O navegador bloqueia requisições entre origens diferentes.

**Solução:** Instalar e configurar o middleware `cors()`.

### ❌ Erro 2: Esquecer de converter o ID

**Sintoma:** `req.params.id` é uma string, mas o array espera um número.

**Causa:** O JavaScript não faz coerção automática em comparações estritas.

**Solução:** Usar `parseInt(req.params.id)`.

### ❌ Erro 3: Não enviar Content-Type

**Sintoma:** O Back-End recebe `req.body` como `undefined`.

**Causa:** Sem o header `Content-Type: application/json`, o Express não sabe interpretar o corpo.

**Solução:** Sempre enviar o header nas requisições POST e PUT.

### ❌ Erro 4: Versionar `node_modules/`

**Sintoma:** Repositório pesado, conflitos de merge constantes.

**Causa:** A pasta `node_modules/` é recriável a partir do `package.json`.

**Solução:** Adicionar `node_modules/` ao `.gitignore`.

### ❌ Erro 5: Misturar Back-End e Front-End no mesmo arquivo

**Sintoma:** Código confuso, difícil de manter.

**Causa:** Falta de separação de responsabilidades.

**Solução:** Manter `server.js`, rotas, HTML, CSS e JS em arquivos separados.

<!--
FALA DO PROFESSOR:

Erros comuns não são "vergonha"; são oportunidades de aprendizado. Todos nós já enfrentamos cada um desses. O importante é reconhecê-los rapidamente e saber corrigir.

Se você está travado em um erro, leia a mensagem completa. O JavaScript, o Node e o Express são muito explícitos: a mensagem de erro geralmente diz exatamente o que está errado. Leia em voz alta, se necessário.

Não hesite em pesquisar no Google ou na documentação oficial. Pesquisar é uma habilidade profissional. A pergunta certa é: "Express cors not working". As respostas no Stack Overflow geralmente mostram a solução exata.
-->

---

## 14. Boas Práticas

### ✅ Separação de Responsabilidades

Cada arquivo tem uma única responsabilidade. O `server.js` configura o servidor; o `routes/tarefas.js` define as rotas; o `data/tarefasStore.js` gerencia a persistência. Quando precisar corrigir um bug, você sabe exatamente onde procurar.

### ✅ Validação no Back-End

Nunca confie no cliente. O Back-End deve validar todos os dados recebidos, mesmo que o Front-End também valide. Isso é uma questão de segurança.

### ✅ Códigos de Status HTTP Apropriados

| Código | Significado | Quando usar |
|---|---|---|
| 200 | OK | Operação bem-sucedida com retorno |
| 201 | Created | Recurso criado com sucesso |
| 204 | No Content | Operação bem-sucedida sem retorno |
| 400 | Bad Request | Dados inválidos enviados pelo cliente |
| 404 | Not Found | Recurso não encontrado |
| 500 | Internal Server Error | Erro inesperado no servidor |

### ✅ Commits Semânticos

Use mensagens de commit claras:

```
feat: adiciona endpoint de criação de tarefas
fix: corrige erro de CORS no back-end
docs: atualiza README com instruções de execução
refactor: separa rotas em arquivo próprio
```

### ✅ Mobile First

Escreva o CSS pensando primeiro em telas pequenas, depois use `@media (min-width: ...)` para telas maiores. Isso será aprofundado na Unidade 3.

<!--
FALA DO PROFESSOR:

Boas práticas não são "opcionais"; são o que diferencia um código amador de um código profissional. Adotá-las desde o início economiza muito tempo no futuro.

Note a tabela de códigos HTTP: muitos desenvolvedores retornam 200 mesmo em caso de erro, o que é uma má prática. O cliente precisa saber se a requisição foi bem-sucedida para tomar decisões. Status 200 = sucesso; status 4xx = erro do cliente; status 5xx = erro do servidor.

Commits semânticos, por sua vez, demonstram maturidade. Projetos open source de grande porte, como o Angular, o React e o Node.js, utilizam convenções semelhantes. Adote desde já.
-->

---

## 15. Conexão com as Próximas Unidades

| Unidade | Conexão com a APO |
|---|---|
| **Unidade 2 — Frameworks** | O Back-End atual mistura configuração, rotas e persistência. Com Express, vamos refatorar usando o padrão **MVC** (Model-View-Controller) e introduzir **middlewares** para validação e autenticação. |
| **Unidade 3 — Web Mobile e PWA** | A interface atual funciona no celular, mas não é instalável. Vamos transformá-la em uma **PWA** com `manifest.json` e **Service Worker** para cache e funcionamento offline. |
| **Unidade 4 — Framework Próprio** | Vamos entender, na prática, como o Express funciona "por dentro", construindo um **mini framework** com Router, Middleware e Pipeline. |

<!--
FALA DO PROFESSOR:

Esta atividade não termina aqui. Ela é a base sobre a qual construiremos as próximas unidades. O código que você escrever nesta APO será refatorado, melhorado e expandido ao longo do curso.

Quando você chegar na Unidade 2 e ver o padrão MVC, vai olhar para o `tarefasStore.js` e dizer: "isso é o Model". Quando chegar na Unidade 3 e transformar a aplicação em PWA, vai ver que o Front-End precisava de um pequeno ajuste para se tornar instalável. Quando chegar na Unidade 4 e construir um mini framework, vai entender o que acontece por dentro do Express.

Por isso, mantenha o código organizado e versionado. Você vai precisar dele novamente.
-->

---

## 16. Checklist de Entrega

Antes de submeter, verifique:

- [ ] O repositório no GitHub está público
- [ ] O `README.md` está completo, com instruções de execução
- [ ] O `.gitignore` ignora `node_modules/`
- [ ] O Back-End inicia sem erros (`npm run dev`)
- [ ] Os 5 endpoints REST funcionam (testados no Postman/Insomnia)
- [ ] O Front-End lista, cria, edita, exclui e filtra tarefas
- [ ] O console do navegador não apresenta erros
- [ ] O CSS é responsivo (testado em viewport mobile)
- [ ] O vídeo de até 5 minutos foi gravado e está acessível (YouTube, Drive ou Loom)
- [ ] Os commits são descritivos e incrementais

<!--
FALA DO PROFESSOR:

Este checklist é o seu controle de qualidade. Percorra cada item antes de submeter. Se algum deles estiver marcado como "não", corrija antes de enviar.

A tentação de "mandar assim mesmo" é grande, especialmente quando o tempo está curto. Mas é exatamente nos detalhes que se demonstra profissionalismo. Um repositório bem organizado, com README claro e vídeo demonstrativo, causa uma primeira impressão muito melhor do que um código que "funciona, mas ninguém entende".
-->

---

## 17. Síntese

### Conceitos-chave desta atividade

1. **Front-End e Back-End se comunicam via HTTP**, usando verbos como GET, POST, PUT e DELETE.
2. **APIs RESTful** expõem endpoints que retornam dados em JSON.
3. **`fetch()`** é a API nativa do navegador para requisições assíncronas.
4. **`async/await`** torna o código assíncrono mais legível.
5. **CORS** é um mecanismo de segurança do navegador que precisa ser configurado em APIs públicas.
6. **Separação de responsabilidades** é fundamental: cada arquivo, uma função.

### Pergunta reflexiva

> Você conseguiria explicar, para um colega que não conhece o projeto, **por que** o Front-End e o Back-End estão separados, em vez de tudo em um único arquivo? Quais as vantagens dessa separação em termos de manutenção, escalabilidade e segurança?

### Conexão com a próxima aula

Na próxima aula, vamos estudar **Frameworks Back-End e Front-End** e entender como o padrão MVC pode organizar melhor o código que você escreveu nesta atividade. Você verá que muitos conceitos que parecem novos já estavam presentes — só faltava uma estrutura formal.

<!--
FALA DO PROFESSOR:

Chegamos ao fim do roteiro da Atividade Prática Orientada. Releia os conceitos-chave e a pergunta reflexiva. A pergunta é proposital: a resposta curta é "manutenção, escalabilidade e segurança", mas o exercício completo é justificar cada uma delas.

A conexão com a próxima aula é importante: o que você construiu aqui é a "matéria-prima" sobre a qual vamos trabalhar nas próximas unidades. Frameworks não substituem o que você aprendeu; eles organizam e automatizam.

Boa atividade. Lembre-se: errar faz parte. O importante é errar, identificar o erro, corrigir e documentar a solução. Esse é o ciclo real do desenvolvimento de software.
-->

<!-- _class: bg-fim -->

#
