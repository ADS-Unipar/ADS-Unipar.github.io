---
marp: true
theme: default
paginate: true
header: 'Apresentação Cypress'
footer: 'Allan da Silva'
backgroundColor: #fff
---

# Cypress - Testes de Frontend Automatizados

---

## O que é o Cypress?

- **Cypress** é uma ferramenta moderna de automação de testes end-to-end (E2E).
- Focado em testes de UI para aplicações web.
- Experiência de depuração completa para desenvolvedores e testers.

### Características principais:
- Rápido e confiável.
- Executa testes diretamente no navegador.
- Gera vídeos e screenshots automaticamente.

---

## Por que utilizar Cypress?

- **Configuração simples e rápida**: Fácil de instalar e configurar.
- **Feedback instantâneo**: Ferramentas de depuração integradas.
- **Execução paralela**: Suporte a testes simultâneos.
- **Suporte a múltiplos navegadores**: Chrome, Firefox, Edge, entre outros.

---

## Instalação e configuração

```bash
npm install cypress --save-dev
```

- **Executar o Cypress**:
```bash
npx cypress open
```

- Interface gráfica para visualizar os testes rodando no navegador.

---

## Estrutura de pastas do Cypress

- **cypress/integration**: Arquivos de testes.
- **cypress/fixtures**: Dados simulados para testes.
- **cypress/plugins**: Plugins personalizados.
- **cypress/support**: Arquivos globais de suporte.

### Arquivos importantes:
- **cypress.json**: Configurações (tempo limite, base URL).

---

## Criando o primeiro teste

```js
describe('Teste básico', () => {
  it('Visita uma página e verifica o título', () => {
    cy.visit('https://exemplo.com')
    cy.title().should('eq', 'Título da Página')
  })
})
```

- **cy.visit()**: Acessa a URL.
- **cy.title()**: Obtém o título da página.
- **should()**: Valida condições.

---

## Interação com elementos

### Exemplo de teste de formulário

```js
describe('Formulário de login', () => {
  it('Preenche e envia o formulário', () => {
    cy.visit('/login')
    cy.get('input[name="email"]').type('usuario@exemplo.com')
    cy.get('input[name="password"]').type('senha_secreta')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })
})
```

---

## Testando interações complexas

### Modal

```js
describe('Teste de modal', () => {
  it('Abre e fecha o modal', () => {
    cy.visit('/pagina-com-modal')
    cy.get('.open-modal-btn').click()
    cy.get('.modal').should('be.visible')
    cy.get('.close-modal-btn').click()
    cy.get('.modal').should('not.exist')
  })
})
```

---

## Esperas e sincronização

```js
cy.intercept('GET', '/api/usuarios', { fixture: 'usuarios.json' }).as('getUsers')
cy.visit('/usuarios')
cy.wait('@getUsers')
cy.get('table tbody tr').should('have.length', 10)
```

- **cy.intercept()**: Intercepta requisições HTTP e simula respostas.
- **cy.wait()**: Espera até que a requisição seja concluída.

---

## Mockando APIs

```js
cy.intercept('POST', '/api/login', {
  statusCode: 200,
  body: { success: true }
}).as('loginRequest')
cy.get('button[type="submit"]').click()
cy.wait('@loginRequest')
cy.contains('Bem-vindo').should('be.visible')
```

- Interceptação e simulação de respostas de API.

---

## Testes com múltiplos navegadores

Cypress suporta diferentes navegadores:

```bash
npx cypress run --browser firefox
```

- **Opções**: Chrome, Firefox, Edge, entre outros.

---


## Debugging e boas práticas

- **cy.pause()**: Pausa a execução do teste.
- **cy.debug()**: Inspeciona o estado dos comandos no console.

### Boas práticas:
- Modularize seus testes.
- Use comandos customizados em `support/commands.js`.

---


## Conclusão

- Cypress é uma solução poderosa e eficiente para testes de frontend.
- Fácil de configurar e usar.
- Suporte a diferentes tipos de testes: E2E, API e integração.

---

## Referências

- [Documentação oficial do Cypress](https://docs.cypress.io)
- [Exemplos no GitHub](https://github.com/cypress-io/cypress-example-recipes)
