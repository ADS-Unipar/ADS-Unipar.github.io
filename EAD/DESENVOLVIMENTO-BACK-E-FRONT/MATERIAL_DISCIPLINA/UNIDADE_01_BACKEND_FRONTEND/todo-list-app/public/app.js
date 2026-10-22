// ============================================================
// FRONT-END — Lógica da To-Do List (integração com a API)
// Unidade 1 - Desenvolvimento de Software (Back-End e Front-End)
// ============================================================
// Este arquivo roda NO NAVEGADOR. Ele:
//   1. Captura o que o usuário faz (digitar, clicar, marcar);
//   2. Envia requisições HTTP para o Back-End com fetch();
//   3. Atualiza a tela (DOM) com a resposta recebida em JSON.
// ============================================================

// ------------------------------------------------------------
// 1. SELEÇÃO DOS ELEMENTOS DO HTML (DOM)
// ------------------------------------------------------------
// document.getElementById() "pega" os elementos do index.html
// para podermos ler e manipular o conteúdo deles em JavaScript.
const form = document.getElementById('form-tarefa');         // formulário
const inputTitulo = document.getElementById('input-titulo'); // campo de texto
const btnEnviar = document.getElementById('btn-enviar');     // botão Adicionar/Atualizar
const btnCancelar = document.getElementById('btn-cancelar'); // botão Cancelar
const lista = document.getElementById('lista-tarefas');      // <ul> da lista
const listaVazia = document.getElementById('lista-vazia');   // aviso "lista vazia"
const mensagem = document.getElementById('mensagem');        // área de feedback

// ------------------------------------------------------------
// 2. VARIÁVEL DE CONTROLE DE MODO (criar x editar)
// ------------------------------------------------------------
// Esta é a "dica" do desafio da aula:
//   - editandoId === null -> estamos CRIANDO (POST)
//   - editandoId === 3    -> estamos EDITANDO a tarefa 3 (PUT)
let editandoId = null;

// ------------------------------------------------------------
// 3. FUNÇÕES AUXILIARES
// ------------------------------------------------------------

// Exibe uma mensagem de feedback (sucesso ou erro) na tela.
// Depois de 3 segundos, a mensagem some automaticamente.
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;        // escreve o texto da mensagem
  mensagem.className = `mensagem ${tipo}`; // aplica o estilo "sucesso" ou "erro"
  mensagem.hidden = false;             // torna a mensagem visível

  // setTimeout() agenda o "sumiço" da mensagem para 3 segundos depois.
  setTimeout(() => {
    mensagem.hidden = true;            // esconde a mensagem
  }, 3000);
}

// ------------------------------------------------------------
// 4. READ — Carregar (listar) as tarefas do Back-End
// ------------------------------------------------------------
// async/await: forma moderna e legível de trabalhar com
// requisições assíncronas (que demoram uma resposta).
async function carregarTarefas() {
  // fetch() envia uma requisição GET para a rota do Back-End.
  // O await "espera" a resposta chegar antes de continuar.
  const response = await fetch('/api/tarefas');

  // Converte a resposta JSON em um array de objetos JavaScript.
  const tarefas = await response.json();

  // Mostra/esconde o aviso "lista vazia" conforme a quantidade.
  listaVazia.hidden = tarefas.length > 0;

  // Percorre o array com map() e gera o HTML de cada tarefa.
  // join('') junta todos os pedaços em uma única string de HTML.
  lista.innerHTML = tarefas.map(t => `
    <li class="${t.concluida ? 'concluida' : ''}">
      <!-- Checkbox: marca/desmarca a tarefa como concluída -->
      <input type="checkbox"
             ${t.concluida ? 'checked' : ''}
             onchange="alternarConcluida(${t.id}, this.checked)"
             title="Marcar como concluída">

      <!-- Título da tarefa -->
      <span class="titulo">${t.titulo}</span>

      <!-- Botão Editar: carrega a tarefa no formulário -->
      <button class="btn-editar" onclick="editarTarefa(${t.id})">✏️ Editar</button>

      <!-- Botão Excluir: remove a tarefa -->
      <button class="btn-excluir" onclick="excluirTarefa(${t.id})">🗑️ Excluir</button>
    </li>
  `).join('');
}

// ------------------------------------------------------------
// 5. CREATE — Cadastrar uma nova tarefa (POST)
// ------------------------------------------------------------
async function criarTarefa(titulo) {
  // fetch() com objeto de configuração: método POST,
  // cabeçalho informando que enviamos JSON,
  // e o corpo (body) convertido de objeto para texto JSON.
  const response = await fetch('/api/tarefas', {
    method: 'POST',                                  // verbo HTTP de criação
    headers: { 'Content-Type': 'application/json' }, // tipo do conteúdo enviado
    body: JSON.stringify({ titulo })                 // dados convertidos para JSON
  });

  // Se o Back-End respondeu com erro (ex.: 400), mostramos o aviso.
  if (!response.ok) {
    const erro = await response.json();
    mostrarMensagem(erro.erro, 'erro');
    return;
  }

  mostrarMensagem('✅ Tarefa adicionada com sucesso!', 'sucesso');
}

// ------------------------------------------------------------
// 6. UPDATE — Editar uma tarefa existente (PUT)
// ------------------------------------------------------------
async function atualizarTarefa(id, titulo) {
  // Busca a tarefa atual para preservar o status "concluída".
  const tarefaAtual = await (await fetch(`/api/tarefas/${id}`)).json();

  const response = await fetch(`/api/tarefas/${id}`, {
    method: 'PUT',                                   // verbo HTTP de atualização
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      titulo,                                        // novo título
      concluida: tarefaAtual.concluida               // mantém o status atual
    })
  });

  if (!response.ok) {
    const erro = await response.json();
    mostrarMensagem(erro.erro, 'erro');
    return;
  }

  mostrarMensagem('✅ Tarefa atualizada com sucesso!', 'sucesso');
}

// ------------------------------------------------------------
// 7. UPDATE (status) — Marcar/desmarcar como concluída (PUT)
// ------------------------------------------------------------
// Recebe o novo valor do checkbox (true = marcada, false = desmarcada).
async function alternarConcluida(id, concluida) {
  // Primeiro buscamos a tarefa atual para não perder o título.
  const response = await fetch(`/api/tarefas/${id}`);
  const tarefa = await response.json();

  // Agora enviamos a atualização mantendo o título e mudando o status.
  await fetch(`/api/tarefas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo: tarefa.titulo, concluida: concluida })
  });

  // Recarrega a lista para refletir o novo estado na tela.
  carregarTarefas();
}

// ------------------------------------------------------------
// 8. Preparar a EDIÇÃO (preencher o formulário)
// ------------------------------------------------------------
// Ao clicar em "Editar", buscamos os dados da tarefa e
// colocamos no formulário, mudando o modo para "edição".
async function editarTarefa(id) {
  const response = await fetch(`/api/tarefas/${id}`);
  const tarefa = await response.json();

  // Preenche o campo de texto com o título atual da tarefa.
  inputTitulo.value = tarefa.titulo;

  // Guarda o ID da tarefa que está sendo editada.
  editandoId = id;

  // Muda a interface para o modo "edição".
  btnEnviar.textContent = 'Atualizar';   // muda o texto do botão
  btnCancelar.hidden = false;            // mostra o botão "Cancelar"
  inputTitulo.focus();                   // coloca o cursor no campo de texto
}

// ------------------------------------------------------------
// 9. DELETE — Excluir uma tarefa
// ------------------------------------------------------------
async function excluirTarefa(id) {
  // confirm() abre uma janela de confirmação no navegador.
  // Se o usuário clicar em "Cancelar", paramos a função com return.
  if (!confirm('Deseja realmente excluir esta tarefa?')) {
    return;
  }

  // Envia a requisição DELETE para o Back-End.
  await fetch(`/api/tarefas/${id}`, {
    method: 'DELETE'                       // verbo HTTP de exclusão
  });

  mostrarMensagem('🗑️ Tarefa excluída com sucesso!', 'sucesso');

  // Recarrega a lista para refletir a exclusão na tela.
  carregarTarefas();
}

// ------------------------------------------------------------
// 10. EVENTO DE ENVIO DO FORMULÁRIO (criar ou editar)
// ------------------------------------------------------------
// addEventListener("submit") escuta o momento em que o usuário
// clica no botão de envio (ou aperta Enter no campo de texto).
form.addEventListener('submit', async (e) => {
  // e.preventDefault() impede o comportamento padrão do navegador
  // (que seria recarregar a página inteira e perder os dados).
  e.preventDefault();

  // Pega o texto digitado e remove espaços extras nas pontas.
  const titulo = inputTitulo.value.trim();

  // Validação simples no Front-End: não envia título vazio.
  // (O Back-End também valida — nunca confie apenas no Front-End!)
  if (titulo === '') {
    mostrarMensagem('⚠️ Digite um título para a tarefa.', 'erro');
    return;
  }

  // Se editandoId é null -> CRIAR; senão -> EDITAR.
  if (editandoId === null) {
    await criarTarefa(titulo);            // CREATE (POST)
  } else {
    await atualizarTarefa(editandoId, titulo); // UPDATE (PUT)
  }

  // Limpa o formulário e volta ao modo "criar".
  cancelarEdicao();

  // Recarrega a lista com os dados atualizados do servidor.
  carregarTarefas();
});

// ------------------------------------------------------------
// 11. EVENTO DO BOTÃO "CANCELAR" (sair do modo edição)
// ------------------------------------------------------------
btnCancelar.addEventListener('click', () => {
  cancelarEdicao();
});

// Função que "reinicia" o formulário para o modo de cadastro.
function cancelarEdicao() {
  form.reset();                   // limpa os campos do formulário
  editandoId = null;              // volta ao modo "criar"
  btnEnviar.textContent = 'Adicionar'; // restaura o texto do botão
  btnCancelar.hidden = true;      // esconde o botão "Cancelar"
}

// ------------------------------------------------------------
// 12. INICIALIZAÇÃO DA PÁGINA
// ------------------------------------------------------------
// Assim que o script carrega, buscamos as tarefas existentes
// para preencher a lista na primeira exibição da página.
carregarTarefas();
