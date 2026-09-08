---
marp: true
theme: default
paginate: false

style: |
  section {
    font-family: 'Calibri', 'Century Gothic', sans-serif;
    font-size: 26px;
    text-align: justify;
    color: #272425;
    background-image: url('bg-padrao.png');
    background-size: cover;
    background-position: center;
  }
  h1 { font-family: 'Century Gothic', 'Calibri', sans-serif; font-size: 32px; font-weight: bold; color: #272425; text-align: left; }
  h2 { font-family: 'Century Gothic', 'Calibri', sans-serif; font-size: 29px; font-weight: bold; color: #C22820; text-align: left; }
  h3 { font-family: 'Calibri', 'Century Gothic', sans-serif; font-size: 26px; font-weight: bold; color: #5C2034; text-align: left; }
  strong { color: #C22820; }
  em { color: #5C2034; }
  code { font-size: 22px; background-color: #f5f5f5; color: #5C2034; }
  pre { font-size: 20px; background-color: #f5f5f5; border-left: 4px solid #C22820; }
  table { font-size: 24px; }
  th { background-color: #C22820; color: #ffffff; font-weight: bold; }
  td { border-bottom: 1px solid #e0e0e0; }
  ul, ol { text-align: justify; }
  li { margin-bottom: 6px; }
  blockquote { border-left: 4px solid #EB8087; background-color: #fdf2f2; padding: 10px 20px; }
  section.bg-capa { background-image: url('bg-capa.png'); background-size: cover; background-position: center; text-align: center; justify-content: center; align-items: center; }
  section.bg-capa h1 { text-align: center; font-size: 32px; color: #ffffff; }
  section.bg-capa h2 { text-align: center; font-size: 29px; color: #ffffff; }
  section.bg-fim { background-image: url('bg-fim.png'); background-size: cover; background-position: center; }
---

<!-- _class: bg-capa -->

# Aula 11

## Pull-based × Push-based

**Unidade 2 — Frameworks**

<!--
FALA DO PROFESSOR:

Nesta aula, vamos estudar dois paradigmas fundamentais de frameworks: Pull-based e Push-based. Essa distinção afeta a forma como o framework processa requisições e renderiza interfaces.

Não são conceitos difíceis, mas são frequentemente confundidos. Vamos esclarecer cada um com exemplos práticos.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Explicar** os paradigmas Pull-based e Push-based;
- **Diferenciar** os dois paradigmas com exemplos concretos;
- **Identificar** frameworks que seguem cada paradigma;
- **Analisar** as vantagens e desvantagens de cada abordagem.

**Taxonomia de Bloom:** Explicar, Diferenciar, Identificar, Analisar.

<!--
FALA DO PROFESSOR:

Pull-based e Push-based são duas formas diferentes de pensar sobre como dados fluem em uma aplicação. A diferença é sutil, mas tem implicações significativas na arquitetura e na experiência do desenvolvedor.
-->

---

## Pull-based (Puxar)

```
Cliente (Front-End)              Servidor (Back-End)
      │                                │
      │──── "Me dá os dados" ────────►│
      │                                │
      │◄──── Aqui estão os dados ─────│
      │                                │
      │  (Cliente RENDERIZA os dados)  │
```

- O **cliente puxa** os dados do servidor;
- O cliente decide **quando** buscar dados;
- O servidor é **reativo** — responde quando solicitado;
- Exemplos: **React**, **Vue.js**, **Angular** (com HTTP).

<!--
FALA DO PROFESSOR:

Pull-based é o modelo mais comum em aplicações web modernas. O cliente (Front-End) inicia a comunicação — ele "puxa" os dados do servidor quando precisa.

Por exemplo, quando o usuário acessa uma página de lista de usuários, o Front-End faz um GET /api/usuarios. O servidor responde com os dados. O Front-End recebe e renderiza na tela.

O cliente decide quando buscar dados. Pode ser ao carregar a página, ao clicar em um botão, ao submeter um formulário, ao rolar a página. O servidor não envia dados espontaneamente — ele apenas responde quando solicitado.

React, Vue.js e Angular seguem esse paradigma. O componente faz uma requisição HTTP (fetch, axios) e, quando os dados chegam, atualiza o estado e re-renderiza a interface.
-->

---

## Push-based (Empurrar)

```
Servidor (Back-End)              Cliente (Front-End)
      │                                │
      │──── "Tem dados novos!" ──────►│
      │                                │
      │  (Cliente RECEBE e atualiza)   │
```

- O **servidor empurra** dados para o cliente;
- O servidor decide **quando** enviar dados;
- O cliente é **reativo** — atualiza quando recebe;
- Exemplos: **WebSockets**, **Server-Sent Events (SSE)**, **Firebase**.

<!--
FALA DO PROFESSOR:

Push-based é o modelo oposto. O servidor envia dados para o cliente espontaneamente, sem que o cliente peça.

Imagine um chat. Quando alguém envia uma mensagem, o servidor precisa notificar todos os outros usuários imediatamente. No modelo Pull-based, cada cliente precisaria ficar perguntando ao servidor "tem mensagem nova?" a cada segundo — isso é ineficiente.

No modelo Push-based, o servidor mantém uma conexão aberta com cada cliente e, quando uma nova mensagem chega, ele "empurra" para todos os clientes conectados. O cliente recebe e atualiza a interface automaticamente.

WebSockets são a tecnologia mais comum para Push-based. Eles permitem comunicação bidirecional em tempo real. Server-Sent Events (SSE) são uma alternativa mais simples — o servidor envia dados para o cliente, mas o cliente não envia de volta (unidirecional).

Firebase é um serviço do Google que implementa Push-based nativamente. Quando os dados mudam no banco de dados, todos os clientes conectados são notificados automaticamente.
-->

---

## Comparativo

| Aspecto | Pull-based | Push-based |
|---------|-----------|------------|
| **Quem inicia** | Cliente | Servidor |
| **Quando buscar** | Quando o cliente precisa | Quando o servidor tem dados novos |
| **Tecnologias** | HTTP, fetch, axios | WebSockets, SSE, Firebase |
| **Casos de uso** | Listas, formulários, CRUD | Chat, notificações, tempo real |
| **Complexidade** | Simples | Mais complexa |
| **Escalabilidade** | Fácil | Mais difícil (conexões persistentes) |

<!--
FALA DO PROFESSOR:

Vamos comparar os dois paradigmas.

Pull-based é mais simples. O cliente faz uma requisição e recebe uma resposta. Não há conexão persistente. É fácil de implementar, fácil de testar e fácil de escalar.

Push-based é mais complexo. Exige conexões persistentes entre servidor e cliente. Isso consome mais recursos do servidor e torna a escalabilidade mais difícil — cada cliente conectado mantém uma conexão aberta.

Mas Push-based é essencial para aplicações que precisam de dados em tempo real — chats, notificações, jogos online, dashboards que atualizam automaticamente.

Na prática, muitas aplicações combinam os dois paradigmas. Usam Pull-based para operações CRUD normais e Push-based para notificações e atualizações em tempo real.
-->

---

## Exemplo Pull-based (React + fetch)

```jsx
function Tarefas() {
  const [tarefas, setTarefas] = useState([]);

  // Pull: cliente puxa dados quando precisa
  useEffect(() => {
    fetch('/api/tarefas')
      .then(res => res.json())
      .then(data => setTarefas(data));
  }, []);

  return (
    <ul>
      {tarefas.map(t => <li key={t.id}>{t.titulo}</li>)}
    </ul>
  );
}
```

<!--
FALA DO PROFESSOR:

Este é um exemplo Pull-based com React. O componente faz um fetch para /api/tarefas quando é montado. Quando os dados chegam, o estado é atualizado e a interface re-renderiza.

O cliente decide quando buscar — neste caso, ao montar o componente. Se o usuário quiser ver dados atualizados, precisa recarregar a página ou clicar em um botão de "atualizar".
-->

---

## Exemplo Push-based (WebSocket)

```javascript
// Servidor (Node.js + ws)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  // Push: servidor envia dados quando tem novidade
  setInterval(() => {
    ws.send(JSON.stringify({ temperatura: Math.random() * 40 }));
  }, 5000);
});

// Cliente (JavaScript)
const ws = new WebSocket('ws://localhost:8080');
ws.onmessage = (event) => {
  const dados = JSON.parse(event.data);
  console.log('Temperatura:', dados.temperatura);
  // Atualizar interface automaticamente
};
```

<!--
FALA DO PROFESSOR:

Este é um exemplo Push-based com WebSockets. O servidor envia dados a cada 5 segundos — sem que o cliente peça. O cliente recebe e atualiza a interface automaticamente.

Observe a diferença fundamental: no Pull-based, o cliente pede. No Push-based, o servidor envia. No Pull-based, o cliente controla o timing. No Push-based, o servidor controla.

Esse modelo é ideal para dados que mudam frequentemente — temperatura de sensores, preços de ações, mensagens de chat, notificações.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. **Pull-based:** o cliente puxa dados quando precisa (HTTP, fetch);
2. **Push-based:** o servidor envia dados quando tem novidade (WebSockets, SSE);
3. Pull-based é **mais simples** e **mais escalável**;
4. Push-based é **essencial** para aplicações em tempo real;
5. Muitas aplicações **combinam** os dois paradigmas.

**Pergunta reflexiva:**

> Um aplicativo de delivery precisa mostrar a localização do entreguer em tempo real. Qual paradigma é mais adequado? Por quê?

**Próxima aula:** Como escolher um Framework? — Vamos estudar critérios de avaliação.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva tem uma resposta clara: Push-based (WebSockets). A localização do entreguer muda constantemente e precisa ser refletida na interface em tempo real. Usar Pull-based (requisições periódicas) seria ineficiente e teria atraso.

Na próxima aula, vamos estudar critérios para escolher o framework certo para cada projeto.
-->

---

<!-- _class: bg-fim -->

#
