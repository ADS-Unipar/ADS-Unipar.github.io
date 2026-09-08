# Revisão — Unidade 4: Por que desenvolver seu próprio Framework?

<!--
FALA DO PROFESSOR:

Esta é a revisão da Unidade 4 — e a última revisão da disciplina. Utilize este material para consolidar os conceitos estudados nas seis aulas gravadas e na aula ao vivo.
-->

---

## Resumo dos Conceitos

### Aula 19 — Por que criar um Framework?

- Motivações: **aprendizado**, necessidade específica, performance, controle, simplificação;
- **Nem sempre** é necessário criar — frameworks existentes são maduros;
- O objetivo é **entender como funcionam**, não substituir.

### Aula 20 — Vantagens e Desvantagens

- **Vantagens:** leveza, controle, aprendizado, personalização, sem dependências;
- **Desvantagens:** tempo, manutenção, sem comunidade, segurança, reinvenção;
- A decisão é um **trade-off** que depende do contexto.

### Aula 21 — Arquitetura de um Framework

- Componentes: **Router**, **Middleware Pipeline**, **Request/Response Enhancement**, **HTTP Wrapper**;
- A API pública é semelhante ao **Express.js**;
- O fluxo é: HTTP → Enhance → Middlewares → Router → Handler → Response.

### Aula 22 — Construindo um Router

- O Router mapeia **método + URL** para **handler**;
- Parâmetros são extraídos com **regex**;
- O método **match()** encontra a rota correspondente;
- A implementação tem **menos de 30 linhas**.

### Aula 23 — Middleware e Pipeline

- Middlewares formam uma **pipeline** de processamento;
- Cada middleware recebe `req`, `res` e `next`;
- `next()` passa para o próximo middleware;
- A integração Router + Middleware é **simples** e **elegante**.

### Aula 24 — Do Mini Framework ao Framework Real

- Nosso mini framework tem os **mesmos fundamentos** que o Express;
- A diferença está na **robustez** e **funcionalidades adicionais**;
- Frameworks não são mágica — são **código organizado**.

---

## Mapa Conceitual

```
              MINI FRAMEWORK
                   │
     ┌─────────────┼─────────────┐
     │             │             │
   ROUTER     MIDDLEWARE     ENHANCE
     │             │             │
  ┌──┼──┐      ┌──┼──┐      ┌──┼──┐
  │  │  │      │  │  │      │  │  │
 add match  use execute  json status
  │  │      │  │         │
 method  next  pipeline  params
  │
 path → regex → handler
```

---

## Conceitos Fundamentais

| Conceito | Definição | Exemplo |
|----------|-----------|---------|
| **Router** | Mapeia URL + método para handler | `app.get('/api/users', handler)` |
| **Middleware** | Função que processa antes do handler | `app.use(logger)` |
| **Pipeline** | Cadeia de middlewares executados em sequência | `m1 → m2 → m3 → handler` |
| **next()** | Passa para o próximo middleware | `next()` |
| **req.params** | Parâmetros extraídos da URL | `/users/:id` → `{ id: "42" }` |
| **res.json()** | Envia resposta em JSON | `res.json({ nome: "Maria" })` |
| **res.status()** | Define o status code HTTP | `res.status(201).json(data)` |
| **Regex** | Expressão regular para matching | `/^\/users\/([^/]+)$/` |
| **Inversão de Controle** | Framework chama seu código | `app.get('/', seuHandler)` |
| **Trade-off** | Compromisso entre vantagens e desvantagens | Criar vs. usar existente |

---

## Erros Comuns

| Erro | Consequência | Correção |
|------|--------------|----------|
| Não chamar next() | Pipeline para, handler não executa | Sempre chamar next() ou enviar resposta |
| Esquecer de parsear o body | req.body é undefined | Middleware de JSON parse |
| Regex incorreta | Rota não é encontrada | Testar regex separadamente |
| Não tratar rota inexistente | Erro genérico | Retornar 404 |
| Criar framework sem necessidade | Tempo desperdiçado | Avaliar trade-offs |

---

## Perguntas para Reflexão

1. **Se frameworks são apenas código organizado**, por que tantos desenvolvedores os tratam como "mágica"?

2. **O que você aprendeu** construindo o mini framework que não aprenderia apenas usando o Express?

3. **Se você pudesse adicionar UMA funcionalidade** ao mini framework, qual seria? Por quê?

4. **Como o conhecimento de como um framework funciona** muda a forma como você o utiliza?

5. **Se uma empresa lhe pedisse para criar um framework interno**, quais seriam seus critérios de decisão?

6. **Qual é a relação** entre o mini framework que construímos e frameworks como Express, Koa e Fastify?

---

## Checklist de Aprendizagem

Ao final da Unidade 4, o estudante deve ser capaz de:

- [ ] Explicar as motivações para criar um framework próprio;
- [ ] Analisar vantagens e desvantagens de criar vs. usar;
- [ ] Projetar a arquitetura de um mini framework;
- [ ] Implementar um Router com parâmetros de URL;
- [ ] Implementar um sistema de middlewares com pipeline;
- [ ] Integrar Router e Middleware em um framework funcional;
- [ ] Comparar nosso mini framework com o Express;
- [ ] Avaliar o aprendizado obtido construindo o framework;
- [ ] Justificar tecnicamente decisões de arquitetura;
- [ ] Compreender que frameworks não são mágica.

---

## Conexão com a Disciplina

Esta é a última unidade da disciplina. Vamos recapitular o que estudamos:

```
UNIDADE 1: Fundamentos Web (Front-End, Back-End, HTTP, AJAX)
      ↓
UNIDADE 2: Frameworks (Conceitos, Estrutura, Escolha)
      ↓
UNIDADE 3: Web Mobile / PWA (Responsividade, Mobile First, PWA)
      ↓
UNIDADE 4: Construção de Framework (Router, Middleware, Pipeline)
```

> **Conclusão:** Você agora compreende não apenas como usar tecnologias web, mas como elas funcionam por dentro. Esse conhecimento é o que diferencia um desenvolvedor que reproduz código de um desenvolvedor que compreende, analisa e toma decisões técnicas.

<!--
FALA DO PROFESSOR:

Parabéns por chegar até aqui! Esta disciplina foi uma jornada — desde os fundamentos da web até a construção do seu próprio framework.

O mais importante não é o código que você escreveu — é o conhecimento que adquiriu. Você agora entende como Front-End e Back-End se comunicam, como frameworks funcionam por dentro, como transformar sites em PWAs e como construir ferramentas do zero.

Esse conhecimento é duradouro. Tecnologias mudam, frameworks surgem e desaparecem, mas os fundamentos permanecem. HTTP continuará sendo HTTP. Roteamento continuará sendo roteamento. Middlewares continuarão sendo middlewares.

Bons estudos e boa carreira!
-->
