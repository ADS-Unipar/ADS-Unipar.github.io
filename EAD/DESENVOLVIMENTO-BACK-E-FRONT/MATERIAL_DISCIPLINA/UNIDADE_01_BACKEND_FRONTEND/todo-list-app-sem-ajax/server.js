// ============================================================
// BACK-END — To-Do List CLÁSSICA (SEM AJAX / SEM FETCH)
// Unidade 1 - Desenvolvimento de Software (Back-End e Front-End)
// ============================================================
// ESTA VERSÃO FUNCIONA COMO ERA "ANTIGAMENTE", ANTES DO AJAX:
//
//   1. O usuário clica em um botão/link de um FORMULÁRIO HTML;
//   2. O navegador ENVIA O FORMULÁRIO por completo ao servidor;
//   3. O SERVIDOR processa e devolve um HTML JÁ PRONTO;
//   4. A PÁGINA RECARREGA POR INTEIRO a cada ação.
//
// Não existe JavaScript no navegador, não existe fetch() e
// não existe XMLHttpRequest. Todo o trabalho é do SERVIDOR,
// que MONTA (renderiza) o HTML — o chamado "server-side
// rendering" (renderização no lado do servidor).
// ============================================================

// Importa o módulo Express (framework web do Node.js).
const express = require('express');

// Cria a aplicação Express.
const app = express();

// Porta onde o servidor vai escutar as requisições.
const PORTA = 3000;

// ------------------------------------------------------------
// MIDDLEWARES
// ------------------------------------------------------------

// express.urlencoded(): este é o middleware CLÁSSICO!
// Ele lê os dados enviados por formulários HTML
// (method="POST") no formato "chave=valor&chave=valor"
// e transforma em req.body para usarmos no código.
// (Na versão moderna usávamos express.json() para o fetch.)
app.use(express.urlencoded({ extended: true }));

// express.static('public'): serve o CSS da pasta public.
// (Aqui só temos um arquivo CSS — NENHUM JavaScript é enviado!)
app.use(express.static('public'));

// ------------------------------------------------------------
// "BANCO DE DADOS" EM MEMÓRIA
// ------------------------------------------------------------
// Array que guarda as tarefas enquanto o servidor está ligado.
let tarefas = [];

// Contador para gerar IDs únicos e sequenciais.
let idContador = 1;

// ------------------------------------------------------------
// FUNÇÕES AUXILIARES
// ------------------------------------------------------------

// Protege contra ataques de XSS (Cross-Site Scripting).
// Como o SERVIDOR monta o HTML, precisamos "escapar" os textos
// digitados pelo usuário para que um código malicioso digitado
// no formulário (ex.: <script>) não seja executado no navegador.
function escaparHTML(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')   // & primeiro (senão duplica os outros)
    .replace(/</g, '&lt;')    // < vira &lt;
    .replace(/>/g, '&gt;')    // > vira &gt;
    .replace(/"/g, '&quot;')  // " vira &quot;
    .replace(/'/g, '&#39;');  // ' vira &#39;
}

// Monta o HTML de UM item da lista (uma tarefa).
// Cada tarefa tem formulários próprios para concluir e excluir.
function montarItemTarefa(tarefa) {
  return `
    <li class="${tarefa.concluida ? 'concluida' : ''}">
      <!-- FORMULÁRIO para marcar/desmarcar como concluída -->
      <!-- Como não há JavaScript, cada ação é um formulário separado -->
      <form method="POST" action="/tarefas/${tarefa.id}/concluir" class="form-inline">
        <button type="submit" class="btn-check" title="Marcar/Desmarcar">
          ${tarefa.concluida ? '✅' : '⬜'}
        </button>
      </form>

      <!-- Título da tarefa (já escapado contra XSS) -->
      <span class="titulo">${escaparHTML(tarefa.titulo)}</span>

      <!-- LINK para a página de edição (navega para outra página) -->
      <a class="btn-editar" href="/tarefas/${tarefa.id}/editar">✏️ Editar</a>

      <!-- FORMULÁRIO para excluir (envia POST e a página recarrega) -->
      <form method="POST" action="/tarefas/${tarefa.id}/excluir" class="form-inline">
        <button type="submit" class="btn-excluir">🗑️ Excluir</button>
      </form>
    </li>
  `;
}

// Monta a PÁGINA HTML COMPLETA (o "molde" da aplicação).
// Em cada resposta, o servidor envia a página inteira já pronta.
//   tituloPagina -> título do <h1> (cadastrar ou editar)
//   tarefaEdit   -> tarefa sendo editada (ou null no cadastro)
//   listaHTML    -> HTML de todos os itens da lista
//   mensagem     -> aviso de sucesso (vindo pela URL ?msg=)
//   erro         -> mensagem de erro de validação
function montarPagina({ tituloPagina, tarefaEdit, listaHTML, mensagem, erro }) {
  // Se estamos editando, o formulário já vem PREENCHIDO com o
  // título atual e o botão aparece como "Atualizar".
  const editando = tarefaEdit !== null;
  const valorCampo = editando ? escaparHTML(tarefaEdit.titulo) : '';
  const textoBotao = editando ? 'Atualizar' : 'Adicionar';
  const acaoForm = editando ? `/tarefas/${tarefaEdit.id}/editar` : '/tarefas';
  const botaoCancelar = editando
    ? `<a class="btn-cancelar" href="/">Cancelar</a>`   // link de volta (sem POST)
    : '';

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List Clássica | Unidade 1</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <main class="container">
    <header>
      <h1>📝 Minha To-Do List (Versão Clássica)</h1>
      <p>SEM JavaScript, SEM AJAX e SEM fetch — formulários tradicionais com recarga de página</p>
    </header>

    <!-- Aviso de SUCESSO (exibido quando existe ?msg= na URL) -->
    ${mensagem ? `<div class="mensagem sucesso">${escaparHTML(mensagem)}</div>` : ''}

    <!-- Aviso de ERRO de validação (exibido quando o servidor recusa o formulário) -->
    ${erro ? `<div class="mensagem erro">${escaparHTML(erro)}</div>` : ''}

    <!--
      FORMULÁRIO DE CADASTRO / EDIÇÃO
      Note que NÃO existe onSubmit em JavaScript.
      O navegador envia os dados ao servidor e a página RECARREGA.
    -->
    <form method="POST" action="${acaoForm}">
      <input
        type="text"
        name="titulo"
        placeholder="Digite uma tarefa... (ex.: Estudar Express)"
        value="${valorCampo}"
        autocomplete="off"
        required>

      <button type="submit">${textoBotao}</button>
      ${botaoCancelar}
    </form>

    <!-- LISTA DE TAREFAS — o HTML dos itens foi montado NO SERVIDOR -->
    <section class="lista-tarefas">
      <h2>Tarefas cadastradas (${tarefas.length})</h2>
      ${tarefas.length === 0
        ? '<p class="lista-vazia">Nenhuma tarefa cadastrada ainda. Adicione a primeira! 🚀</p>'
        : `<ul>${listaHTML}</ul>`}
    </section>

    <footer>
      <p>💡 Dica: abra o código-fonte da página (Ctrl+U) — todo o HTML veio pronto do servidor!</p>
    </footer>
  </main>
</body>
</html>
  `;
}

// ------------------------------------------------------------
// ROTAS (cada rota devolve uma PÁGINA HTML completa)
// ------------------------------------------------------------

// [READ] GET /
// Página principal: mostra o formulário + a lista de tarefas.
app.get('/', (req, res) => {
  // Monta o HTML de cada tarefa e junta tudo em uma string.
  const listaHTML = tarefas.map(montarItemTarefa).join('');

  // ?msg=... na URL traz a mensagem de sucesso (padrão clássico
  // de comunicação entre requisições, já que não há JavaScript).
  const mensagem = req.query.msg || '';

  // Envia o HTML completo para o navegador (Content-Type: text/html).
  res.send(montarPagina({
    tituloPagina: 'Minha To-Do List',
    tarefaEdit: null,
    listaHTML,
    mensagem,
    erro: ''
  }));
});

// [CREATE] POST /tarefas
// Recebe o formulário de cadastro, cria a tarefa e REDIRECIONA.
app.post('/tarefas', (req, res) => {
  // req.body é preenchido pelo middleware express.urlencoded().
  const { titulo } = req.body;

  // VALIDAÇÃO no servidor: se o título estiver vazio,
  // devolvemos a página NOVAMENTE com a mensagem de erro
  // (o usuário vê a página recarregada com o aviso).
  if (!titulo || titulo.trim() === '') {
    return res.send(montarPagina({
      tituloPagina: 'Minha To-Do List',
      tarefaEdit: null,
      listaHTML: tarefas.map(montarItemTarefa).join(''),
      mensagem: '',
      erro: '⚠️ O título da tarefa é obrigatório!'
    }));
  }

  // Cria a nova tarefa e adiciona no array.
  tarefas.push({
    id: idContador++,
    titulo: titulo.trim(),
    concluida: false
  });

  // PADRÃO PRG (Post -> Redirect -> Get):
  // após processar o POST, redirecionamos para a página principal.
  // Isso evita que, ao apertar F5, o formulário seja reenviado
  // duplicando a tarefa.
  res.redirect('/?msg=Tarefa adicionada com sucesso!');
});

// [EDIT - página] GET /tarefas/:id/editar
// Abre a MESMA página principal, mas com o formulário PREENCHIDO.
app.get('/tarefas/:id/editar', (req, res) => {
  const id = parseInt(req.params.id);

  // Procura a tarefa pelo ID.
  const tarefa = tarefas.find(t => t.id === id);

  // Se não existe, volta para a página inicial com aviso.
  if (!tarefa) {
    return res.redirect('/?msg=Tarefa não encontrada');
  }

  // Reenvia a página inteira, agora em modo EDIÇÃO.
  res.send(montarPagina({
    tituloPagina: 'Editar tarefa',
    tarefaEdit: tarefa,                       // <- preenche o formulário
    listaHTML: tarefas.map(montarItemTarefa).join(''),
    mensagem: '',
    erro: ''
  }));
});

// [UPDATE] POST /tarefas/:id/editar
// Recebe o formulário de edição, atualiza e REDIRECIONA.
app.post('/tarefas/:id/editar', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, concluida } = req.body;

  // Descobre a posição da tarefa no array.
  const indice = tarefas.findIndex(t => t.id === id);

  // Se não existe, volta para a página inicial com aviso.
  if (indice === -1) {
    return res.redirect('/?msg=Tarefa não encontrada');
  }

  // Validação do título (igual à do cadastro).
  if (!titulo || titulo.trim() === '') {
    return res.send(montarPagina({
      tituloPagina: 'Editar tarefa',
      tarefaEdit: tarefas[indice],
      listaHTML: tarefas.map(montarItemTarefa).join(''),
      mensagem: '',
      erro: '⚠️ O título da tarefa é obrigatório!'
    }));
  }

  // Atualiza a tarefa preservando o ID.
  // O checkbox "concluida" só vem no formulário quando marcado;
  // quando não vem, quer dizer que foi desmarcado (false).
  tarefas[indice] = {
    ...tarefas[indice],
    titulo: titulo.trim(),
    concluida: concluida === 'on'
  };

  // Redireciona (padrão PRG) com mensagem de sucesso.
  res.redirect('/?msg=Tarefa atualizada com sucesso!');
});

// [UPDATE - status] POST /tarefas/:id/concluir
// Alterna o status concluída/não concluída da tarefa.
app.post('/tarefas/:id/concluir', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.redirect('/?msg=Tarefa não encontrada');
  }

  // Inverte o valor atual (true vira false, false vira true).
  tarefa.concluida = !tarefa.concluida;

  res.redirect('/?msg=Status da tarefa atualizado!');
});

// [DELETE] POST /tarefas/:id/excluir
// Exclui a tarefa e redireciona para a página principal.
app.post('/tarefas/:id/excluir', (req, res) => {
  const id = parseInt(req.params.id);

  // filter() mantém todas as tarefas EXCETO a com o ID informado.
  tarefas = tarefas.filter(t => t.id !== id);

  res.redirect('/?msg=Tarefa excluída com sucesso!');
});

// ------------------------------------------------------------
// INICIALIZAÇÃO DO SERVIDOR
// ------------------------------------------------------------
app.listen(PORTA, () => {
  console.log(`✅ Servidor CLÁSSICO rodando em http://localhost:${PORTA}`);
  console.log('   (Sem JavaScript no navegador — a página recarrega a cada ação!)');
});
