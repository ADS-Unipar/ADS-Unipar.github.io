// ============================================================
// BACK-END — To-Do List (CRUD completo)
// Unidade 1 - Desenvolvimento de Software (Back-End e Front-End)
// Tecnologias: Node.js + Express
// ============================================================
// Este arquivo é o "coração" do Back-End: ele recebe as
// requisições HTTP enviadas pelo Front-End, processa a lógica
// (criar, listar, editar e excluir tarefas) e devolve
// respostas em formato JSON.
// ============================================================

// Importa o módulo Express, que é o framework usado para
// criar o servidor web e as rotas da API de forma simples.
const express = require('express');

// Cria a instância da aplicação Express (o "app").
const app = express();

// Porta em que o servidor vai ficar escutando as requisições.
const PORTA = 3000;

// ------------------------------------------------------------
// MIDDLEWARES (funções que rodam antes das rotas)
// ------------------------------------------------------------

// express.json(): faz o Back-End entender o corpo (body) das
// requisições enviado em formato JSON pelo Front-End (fetch).
app.use(express.json());

// express.static('public'): serve os arquivos do Front-End
// (HTML, CSS e JS) que estão dentro da pasta "public".
// Assim, ao acessar http://localhost:3000 o navegador recebe
// o index.html automaticamente.
app.use(express.static('public'));

// ------------------------------------------------------------
// BANCO DE DADOS EM MEMÓRIA (array + contador de IDs)
// ------------------------------------------------------------
// Como ainda não usamos um banco de dados real, as tarefas
// ficam guardadas em um array na memória do servidor.
// Isso significa que os dados são perdidos ao reiniciar o servidor.
let tarefas = [];

// Contador que gera um ID único e sequencial para cada tarefa.
let idContador = 1;

// ------------------------------------------------------------
// ROTAS DA API (REST)
// ------------------------------------------------------------
// Padrão REST: cada recurso (tarefa) tem um endereço (/api/tarefas)
// e cada ação é representada por um verbo HTTP:
//   GET    -> listar / buscar (READ)
//   POST   -> cadastrar (CREATE)
//   PUT    -> editar (UPDATE)
//   DELETE -> excluir (DELETE)
// ------------------------------------------------------------

// [READ] GET /api/tarefas
// Lista todas as tarefas cadastradas.
app.get('/api/tarefas', (req, res) => {
  // res.json() devolve a lista em formato JSON para o Front-End.
  res.json(tarefas);
});

// [READ] GET /api/tarefas/:id
// Busca uma única tarefa pelo ID enviado na URL.
app.get('/api/tarefas/:id', (req, res) => {
  // req.params.id vem da URL (ex.: /api/tarefas/3).
  // parseInt() transforma o texto "3" no número 3.
  const id = parseInt(req.params.id);

  // Procura no array a tarefa que tenha esse ID.
  const tarefa = tarefas.find(t => t.id === id);

  // Se não encontrar, responde 404 (Not Found).
  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  // Se encontrar, devolve a tarefa em JSON.
  res.json(tarefa);
});

// [CREATE] POST /api/tarefas
// Cadastra uma nova tarefa.
app.post('/api/tarefas', (req, res) => {
  // Desestrutura o corpo da requisição pegando apenas o campo titulo.
  const { titulo } = req.body;

  // VALIDAÇÃO no servidor: o título é obrigatório.
  // Se não veio (ou veio vazio), respondemos 400 (Bad Request).
  if (!titulo || titulo.trim() === '') {
    return res.status(400).json({ erro: 'O título da tarefa é obrigatório' });
  }

  // Monta o objeto da nova tarefa.
  const novaTarefa = {
    id: idContador++,          // usa o contador atual e já incrementa
    titulo: titulo.trim(),     // trim() remove espaços extras
    concluida: false           // toda tarefa começa como NÃO concluída
  };

  // Adiciona a nova tarefa no array (nosso "banco de dados").
  tarefas.push(novaTarefa);

  // 201 = Created: recurso criado com sucesso.
  // Devolvemos o objeto criado para o Front-End exibir na tela.
  res.status(201).json(novaTarefa);
});

// [UPDATE] PUT /api/tarefas/:id
// Edita uma tarefa existente (o "desafio" da aula ao vivo).
app.put('/api/tarefas/:id', (req, res) => {
  // Pega o ID enviado na URL.
  const id = parseInt(req.params.id);

  // Descobre em que posição do array está a tarefa com esse ID.
  // findIndex() devolve o índice (posição) ou -1 se não achar.
  const indice = tarefas.findIndex(t => t.id === id);

  // Se não existe a tarefa, respondemos 404 (Not Found).
  if (indice === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  // Pega os dados enviados pelo Front-End para atualização.
  const { titulo, concluida } = req.body;

  // Valida o título (obrigatório também na edição).
  if (!titulo || titulo.trim() === '') {
    return res.status(400).json({ erro: 'O título da tarefa é obrigatório' });
  }

  // Atualiza a tarefa preservando o ID original.
  // O operador "..." (spread) copia os valores antigos e
  // substitui apenas os campos que foram alterados.
  tarefas[indice] = {
    ...tarefas[indice],              // mantém os dados atuais
    titulo: titulo.trim(),           // novo título
    concluida: concluida === true    // novo status de conclusão
  };

  // 200 = OK: devolve a tarefa já atualizada.
  res.json(tarefas[indice]);
});

// [DELETE] DELETE /api/tarefas/:id
// Exclui uma tarefa pelo ID.
app.delete('/api/tarefas/:id', (req, res) => {
  // Pega o ID enviado na URL.
  const id = parseInt(req.params.id);

  // Guarda o tamanho do array antes de filtrar.
  const tamanhoAntes = tarefas.length;

  // filter() cria um novo array SEM a tarefa com o ID informado.
  tarefas = tarefas.filter(t => t.id !== id);

  // Se o tamanho não mudou, a tarefa não existia: respondemos 404.
  if (tarefas.length === tamanhoAntes) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

  // 204 = No Content: sucesso, mas sem corpo de resposta.
  res.status(204).send();
});

// ------------------------------------------------------------
// INICIALIZAÇÃO DO SERVIDOR
// ------------------------------------------------------------
// app.listen() "liga" o servidor na porta escolhida.
// A função de callback roda quando o servidor está pronto.
app.listen(PORTA, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORTA}`);
  console.log('   (Back-End no ar! Front-End servido pela pasta /public)');
});
