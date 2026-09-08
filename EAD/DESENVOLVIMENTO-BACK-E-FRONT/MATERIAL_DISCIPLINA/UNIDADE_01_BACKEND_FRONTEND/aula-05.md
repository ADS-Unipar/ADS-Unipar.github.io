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
  h1 {
    font-family: 'Century Gothic', 'Calibri', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #272425;
    text-align: left;
  }
  h2 {
    font-family: 'Century Gothic', 'Calibri', sans-serif;
    font-size: 29px;
    font-weight: bold;
    color: #C22820;
    text-align: left;
  }
  h3 {
    font-family: 'Calibri', 'Century Gothic', sans-serif;
    font-size: 26px;
    font-weight: bold;
    color: #5C2034;
    text-align: left;
  }
  strong {
    color: #C22820;
  }
  em {
    color: #5C2034;
  }
  code {
    font-size: 22px;
    background-color: #f5f5f5;
    color: #5C2034;
  }
  pre {
    font-size: 20px;
    background-color: #f5f5f5;
    border-left: 4px solid #C22820;
  }
  table {
    font-size: 24px;
  }
  th {
    background-color: #C22820;
    color: #ffffff;
    font-weight: bold;
  }
  td {
    border-bottom: 1px solid #e0e0e0;
  }
  ul, ol {
    text-align: justify;
  }
  li {
    margin-bottom: 6px;
  }
  blockquote {
    border-left: 4px solid #EB8087;
    background-color: #fdf2f2;
    padding: 10px 20px;
  }
  footer {
    font-size: 16px;
    color: #999999;
  }
  header {
    font-size: 16px;
    color: #999999;
  }
  section.bg-capa {
    background-image: url('bg-capa.png');
    background-size: cover;
    background-position: center;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  section.bg-capa h1 {
    text-align: center;
    font-size: 32px;
    color: #ffffff;
  }
  section.bg-capa h2 {
    text-align: center;
    font-size: 29px;
    color: #ffffff;
  }
  section.aula-titulo {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  section.aula-titulo h1 {
    text-align: center;
    font-size: 32px;
    color: #C22820;
  }
  section.bg-fim {
    background-image: url('bg-fim.png');
    background-size: cover;
    background-position: center;
  }
---

<!-- _class: bg-capa -->

# Aula 05

## AJAX e Comunicação Assíncrona

**Unidade 1 — Back-End e Front-End**

<!--
FALA DO PROFESSOR:

Na aula anterior, estudamos HTTP e APIs REST. Agora vamos aprofundar um conceito que transformou a web: a comunicação assíncrona.

Antes de AJAX, toda atualização de dados em uma página web exigia um recarregamento completo. Quando você enviava um formulário, a piscava branca e recarregava toda a página. Quando você paginava resultados, a página inteira era recarregada. Isso era lento, frustrante e consumia muita banda.

AJAX mudou tudo isso. Com AJAX, o navegador pode enviar requisições ao servidor em segundo plano, sem recarregar a página. Quando a resposta chega, apenas a parte relevante da interface é atualizada. É isso que permite experiências fluidas como o Gmail, o Facebook e o Google Maps.

Nesta aula, vamos entender o que é AJAX, como ele funciona, qual é a diferença entre XMLHttpRequest e fetch(), e como implementar comunicação assíncrona na prática.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o conceito de comunicação assíncrona;
- **Explicar** o que é AJAX e por que ele revolucionou a web;
- **Diferenciar** XMLHttpRequest e Fetch API;
- **Implementar** requisições assíncronas com `fetch()`;
- **Analisar** o fluxo de dados em uma aplicação assíncrona.

**Taxonomia de Bloom:** Compreender, Explicar, Diferenciar, Implementar, Analisar.

<!--
FALA DO PROFESSOR:

Note o verbo "implementar" nos objetivos. Esta aula tem um caráito mais prático do que as anteriores. Você vai escrever código. Mas antes de implementar, vamos entender o "porquê" e o "como" da comunicação assíncrona.

AJAX não é uma tecnologia — é uma técnica. É a combinação de várias tecnologias (JavaScript, XMLHttpRequest/fetch, DOM, JSON) para criar comunicação assíncrona entre o navegador e o servidor.

Vamos começar pelo problema que AJAX resolve.
-->

---

## O Problema: Síncrono vs. Assíncrono

**Comunicação síncrona (antes de AJAX):**
```
Usuário clica → Página recarrega → Servidor processa → Nova página carrega
```
- A página **trava** durante o processamento;
- Experiência **lenta** e **frustrante**;
- **Desperdício** de banda (recarrega tudo).

**Comunicação assíncrona (com AJAX):**
```
Usuário clica → Requisição em segundo plano → Servidor processa → Apenas parte da página atualiza
```
- A página **não trava**;
- Experiência **fluida** e **responsiva**;
- **Eficiente** (atualiza apenas o necessário).

<!--
FALA DO PROFESSOR:

Vamos entender a diferença fundamental entre síncrono e assíncrono.

Na comunicação síncrona, o navegador envia a requisição e "para" até receber a resposta. Durante esse tempo, a página fica travada — o usuário não pode interagir. Quando a resposta chega, a página inteira é recarregada. Isso é como ligar para uma empresa e ficar esperando na linha sem poder fazer nada.

Na comunicação assíncrona, o navegador envia a requisição e continua executando o JavaScript. O usuário pode continuar interagindo com a página. Quando a resposta chega, um callback é chamado e apenas a parte relevante da interface é atualizada. Isso é como enviar um e-mail — você envia e continua fazendo outras coisas. Quando a resposta chega, você é notificado.

A diferença é brutal em termos de experiência do usuário. Pense no Gmail: sem AJAX, cada vez que um novo e-mail chegasse, a página inteira recarregaria. Com AJAX, novos e-mails aparecem automaticamente, sem interrupção.

AJAX é a técnica que tornou isso possível. Vamos entender como.
-->

---

## O que é AJAX?

- **AJAX** = Asynchronous JavaScript And XML;
- **Não é uma tecnologia** — é uma **técnica** que combina:
  - JavaScript (programação);
  - XMLHttpRequest ou Fetch API (comunicação);
  - DOM (manipulação da interface);
  - JSON (formato de dados — antes era XML).

> **Por que existe?** Para permitir que o navegador se comunique com o servidor **sem recarregar a página**.

<!--
FALA DO PROFESSOR:

AJAX é uma sigla que remete a XML, mas hoje quase ninguém usa mais XML. O formato predominante é JSON — que é mais leve, mais fácil de manipular em JavaScript e mais legível.

O nome permanece por razões históricas, mas quando alguém diz "AJAX" hoje, está se referindo à técnica de comunicação assíncrona entre navegador e servidor, independentemente do formato de dados.

AJAX não é uma API ou uma biblioteca. É uma abordagem, uma técnica. Você pode implementar AJAX usando o objeto XMLHttpRequest (a forma mais antiga) ou usando a Fetch API (a forma moderna).

O fluxo é sempre o mesmo:
1. O JavaScript cria uma requisição HTTP;
2. Envia para o servidor em segundo plano;
3. O servidor processa e devolve uma resposta;
4. O JavaScript recebe a resposta e atualiza o DOM.

Esse fluxo acontece sem que a página recarregue. É isso que torna a experiência fluida.
-->

---

## XMLHttpRequest (Legado)

```javascript
// Criar o objeto XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurar a requisição (método, URL, assíncrono)
xhr.open('GET', '/api/usuarios', true);

// Definir o callback para quando a resposta chegar
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const usuarios = JSON.parse(xhr.responseText);
    console.log(usuarios);
  }
};

// Enviar a requisição
xhr.send();
```

- Foi a **primeira** forma de fazer AJAX;
- Ainda funciona, mas é **verbosa** e **complexa**;
- A API moderna é o **fetch()**.

<!--
FALA DO PROFESSOR:

XMLHttpRequest foi a primeira API do navegador para fazer requisições HTTP assíncronas. Foi criada pela Microsoft em 1999, para o Internet Explorer, e depois adotada por todos os navegadores.

Observe o código. Primeiro, criamos um objeto XMLHttpRequest. Depois, configuramos a requisição com open(), passando o método (GET), a URL (/api/usuarios) e true (indicando que é assíncrona). Depois, definimos um callback que será chamado quando o estado da requisição mudar. O readyState === 4 significa que a requisição foi completada. O status === 200 significa que a resposta foi bem-sucedida. Por fim, enviamos a requisição com send().

Funciona, mas é verboso. O código é difícil de ler, difícil de manter e propenso a erros. O tratamento de erros é complicado. A sintaxe é baseada em callbacks, o que pode levar ao "callback hell".

Por isso, a Fetch API foi criada como uma alternativa moderna. Vamos ver no próximo slide.
-->

---

## Fetch API (Moderno)

```javascript
// Requisição GET simples
fetch('/api/usuarios')
  .then(response => response.json())
  .then(usuarios => {
    console.log(usuarios);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
```

- API **moderna** e **nativa** do navegador;
- Baseada em **Promises**;
- Sintaxe **mais limpa** e **legível**;
- Suporta **async/await**.

<!--
FALA DO PROFESSOR:

A Fetch API é a forma moderna de fazer requisições HTTP no navegador. Ela é nativa — não precisa de bibliotecas externas. É baseada em Promises, o que permite encadear operações de forma elegante.

Observe o código. fetch('/api/usuarios') retorna uma Promise. O primeiro .then converte a resposta para JSON (response.json() também retorna uma Promise). O segundo .then recebe os dados convertidos. O .catch trata erros — se a requisição falhar (servidor offline, erro de rede, etc.), o erro é capturado aqui.

Comparado com XMLHttpRequest, o código é muito mais limpo e legível. Não precisamos verificar readyState, não precisamos fazer JSON.parse manualmente (response.json() faz isso), e o tratamento de erros é centralizado em um único .catch.

Mas podemos ficar ainda mais elegantes com async/await. Veremos no próximo slide.
-->

---

## Fetch com Async/Await

```javascript
// Função assíncrona com async/await
async function carregarUsuarios() {
  try {
    const response = await fetch('/api/usuarios');
    const usuarios = await response.json();
    console.log(usuarios);
  } catch (error) {
    console.error('Erro:', error);
  }
}

carregarUsuarios();
```

- `async` declara que a função é assíncrona;
- `await` pausa a execução até a Promise ser resolvida;
- `try/catch` trata erros de forma mais intuitiva.

<!--
FALA DO PROFESSOR:

async/await é açúcar sintático sobre Promises. Em vez de encadear .then(), você escreve código que "parece" síncrono, mas é assíncrono por baixo dos panos.

Observe o código. A função é declarada com async. Dentro dela, usamos await antes de cada operação assíncrona. await fetch('/api/usuarios') pausa a execução da função até que a Promise seja resolvida. Quando a resposta chega, a execução continua na próxima linha.

O try/catch funciona exatamente como em código síncrono. Se qualquer linha dentro do try lançar um erro (rede indisponível, JSON inválido, etc.), o catch é executado.

A vantagem do async/await é a legibilidade. O código lê de cima para baixo, como código síncrono, mas mantém o comportamento assíncrono. Isso facilita muito a manutenção e a depuração.

Recomendação: prefira async/await para código novo. É mais legível, mais fácil de manter e menos propenso a erros de encadeamento.
-->

---

## Requisição POST com Fetch

```javascript
async function criarUsuario(nome, email) {
  try {
    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email })
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const usuario = await response.json();
    console.log('Usuário criado:', usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  }
}
```

<!--
FALA DO PROFESSOR:

Agora vamos ver uma requisição POST — para criar um novo recurso. A estrutura é semelhante ao GET, mas com configurações adicionais.

O segundo parâmetro do fetch() é um objeto de configuração. method: 'POST' indica o método HTTP. headers define os cabeçalhos — Content-Type: 'application/json' diz ao servidor que estamos enviando JSON. body contém os dados — JSON.stringify() converte o objeto JavaScript em uma string JSON.

Observe o tratamento de erro mais robusto. response.ok é true apenas se o status code estiver na faixa 200-299. Se o servidor retornar 400 ou 500, response.ok será false e lançamos um erro com o status code.

Esse padrão — verificar response.ok antes de processar a resposta — é uma boa prática essencial. Sem isso, você pode tentar converter um corpo de erro (como uma mensagem de texto) como se fosse JSON válido, gerando um erro confuso.
-->

---


```
 Fluxo Completo de uma Aplicação Assíncrona
┌──────────────────────────────────────────────────┐
│                    FRONT-END                     │
│                                                  │
│  1. Usuário interage (clique, formulário)        │
│  2. JavaScript captura o evento                  │
│  3. fetch() envia requisição HTTP                │
│  4. Página continua responsiva                   │
│  5. Resposta chega (callback/await)              │
│  6. DOM é atualizado com os novos dados          │
│                                                  │
└──────────────────┬───────────────────────────────┘
                   │ HTTP (JSON)
                   ▼
┌──────────────────────────────────────────────────┐
│                    BACK-END                      │
│                                                  │
│  7. Servidor recebe a requisição                 │
│  8. Processa a lógica de negócio                 │
│  9. Consulta o banco de dados                    │
│  10. Retorna resposta JSON                       │
│                                                  │
└──────────────────────────────────────────────────┘
```

<!--
FALA DO PROFESSOR:

Este diagrama mostra o fluxo completo de uma aplicação assíncrona, do início ao fim.

1. O usuário interage com a interface — clica em um botão, preenche um formulário, rola a página.

2. O JavaScript captura o evento — um event listener detecta a ação do usuário.

3. O fetch() envia uma requisição HTTP para o servidor — em segundo plano, sem travar a página.

4. A página continua responsiva — o usuário pode continuar interagindo enquanto a requisição é processada.

5. A resposta chega — o callback (Promise) ou o await é resolvido com os dados do servidor.

6. O DOM é atualizado — o JavaScript manipula a interface para refletir os novos dados.

7-10. No servidor, o Back-End recebe, processa, consulta o banco e devolve a resposta.

Esse ciclo se repete para cada interação do usuário. A chave é que a página nunca recarrega — apenas partes da interface são atualizadas dinamicamente.

É isso que diferencia uma aplicação web moderna de uma aplicação web tradicional. E é isso que você vai implementar na atividade prática da Unidade 1.
-->

---

## Erros Comuns

| Erro | Consequência | Solução |
|------|--------------|---------|
| Não tratar erros do fetch | Aplicação "quebra" silenciosamente | Usar try/catch ou .catch() |
| Não verificar response.ok | Trata erro como sucesso | Verificar antes de processar |
| Esquecer o Content-Type no POST | Servidor não interpreta o body | Definir headers corretamente |
| Usar fetch síncrono | Página trava | Sempre usar async/await |
| Não atualizar o DOM após sucesso | Interface desatualizada | Atualizar no .then() ou após await |

<!--
FALA DO PROFESSOR:

Vamos revisar os erros mais comuns ao trabalhar com fetch e comunicação assíncrona.

O primeiro erro é não tratar erros. Se o servidor estiver offline ou a rede falhar, o fetch rejeita a Promise. Se você não tiver um .catch() ou try/catch, o erro será silencioso — a aplicação simplesmente não funcionará e você não saberá por quê.

O segundo erro é não verificar response.ok. O fetch só rejeita a Promise em caso de erro de rede. Se o servidor retornar um status 400 ou 500, o fetch resolve a Promise normalmente. Se você não verificar response.ok, pode tentar processar um corpo de erro como se fosse dados válidos.

O terceiro erro é esquecer o Content-Type no POST. Se você enviar JSON sem definir Content-Type: 'application/json', o servidor pode não interpretar o corpo corretamente.

O quarto erro é tentar usar fetch de forma síncrona. fetch é sempre assíncrono. Se você tentar "esperar" sem async/await, o código não funcionará como esperado.

O quinto erro é não atualizar o DOM após o sucesso. O fetch retorna dados, mas se você não atualizar a interface, o usuário não verá nenhuma mudança.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. **AJAX** é a técnica de comunicação assíncrona entre navegador e servidor;
2. A **Fetch API** é a forma moderna de fazer requisições HTTP no navegador;
3. **async/await** simplifica o código assíncrono, tornando-o mais legível;
4. O **DOM** é atualizado dinamicamente com os dados recebidos do servidor;
5. O **tratamento de erros** é essencial em qualquer requisição assíncrona.

**Pergunta reflexiva:**

> Se AJAX não existisse, como seria a experiência do usuário no Gmail ou no Facebook?

**Próxima aula:** Boas práticas em Front-End e Back-End — Vamos consolidar as práticas que todo desenvolvedor deve adotar.

<!--
FALA DO PROFESSOR:

Encerramos a aula sobre AJAX. Revise os cinco conceitos principais e certifique-se de que consegue implementar uma requisição GET e uma requisição POST com fetch().

A pergunta reflexiva é poderosa: sem AJAX, o Gmail recarregaria a página inteira a cada verificação de novos e-mails. O Facebook recarregaria a cada novo post. A experiência seria tão frustrante que provavelmente essas aplicações não teriam o sucesso que tiveram.

AJAX não é apenas uma técnica técnica — é uma técnica que mudou a forma como as pessoas usam a web.

Na próxima aula, vamos estudar boas práticas em Front-End e Back-End. Você vai aprender a escrever código mais organizado, seguro e manutenível.
-->

---

<!-- _class: bg-fim -->

#
