---
marp: true
theme: default
---

# Bem vindos

--- 
![bg left top  ](./melhorar-seu-dia-2.gif)

# Voltamos!
---
# Introdução aos Testes de Software

---

## O que é Teste de Software?

Teste de software é o processo de avaliar e verificar se um software ou aplicativo funciona conforme esperado. O objetivo principal é identificar falhas e garantir que o produto final atenda aos requisitos especificados.

---

## Importância dos Testes de Software

1. **Qualidade**: Garante que o software funcione corretamente.
2. **Segurança**: Protege contra vulnerabilidades.
3. **Confiabilidade**: Aumenta a confiança dos usuários.
4. **Economia**: Reduz custos de manutenção ao detectar falhas cedo.

---

## Tipos de Testes de Software

---

### 1. Teste Unitário

**Definição**: Verifica o funcionamento de componentes individuais do software (unidades).

**Objetivo**: Garantir que cada unidade funcione corretamente isoladamente.

**Exemplo**: Testar uma função específica em um módulo de cálculo.

**Ferramentas**:
- **React**:
  - Jest: [jestjs.io](https://jestjs.io)
  - React Testing Library: [testing-library.com/react](https://testing-library.com/react)
- **Node.js**:
  - Mocha: [mochajs.org](https://mochajs.org)
  - Chai: [chaijs.com](https://www.chaijs.com)
  - Jasmine: [jasmine.github.io](https://jasmine.github.io)

---

### 2. Teste de Integração

**Definição**: Avalia a interação entre diferentes unidades ou módulos do software.

**Objetivo**: Detectar falhas na comunicação e na interação entre módulos.

**Exemplo**: Verificar se o módulo de login funciona bem com o módulo de banco de dados.

**Ferramentas**:
- **React**:
  - Jest: [jestjs.io](https://jestjs.io)
  - React Testing Library: [testing-library.com/react](https://testing-library.com/react)
- **Node.js**:
  - Supertest: [github.com/visionmedia/supertest](https://github.com/visionmedia/supertest)
  - Mocha: [mochajs.org](https://mochajs.org)
  - Chai: [chaijs.com](https://www.chaijs.com)

---

### 3. Teste de Sistema

**Definição**: Testa o sistema completo como um todo.

**Objetivo**: Garantir que o sistema atenda aos requisitos funcionais e não funcionais.

**Exemplo**: Executar um conjunto de testes no software completo antes do lançamento.

**Ferramentas**:
- **React**:
  - Cypress: [cypress.io](https://www.cypress.io)
  - Selenium: [selenium.dev](https://www.selenium.dev)
- **Node.js**:
  - Selenium: [selenium.dev](https://www.selenium.dev)
  - Puppeteer: [pptr.dev](https://pptr.dev)

---

### 4. Teste de Aceitação

**Definição**: Valida se o software atende aos requisitos especificados e está pronto para o uso pelo cliente.

**Objetivo**: Obter a aprovação do cliente ou usuário final.

**Exemplo**: Testar se todas as funcionalidades desejadas pelo cliente estão presentes e funcionando.

**Ferramentas**:
- **React**:
  - Cypress: [cypress.io](https://www.cypress.io)
  - Cucumber.js: [cucumber.io](https://cucumber.io/docs/installation/javascript/)
- **Node.js**:
  - Cucumber.js: [cucumber.io](https://cucumber.io/docs/installation/javascript/)

---

### 5. Teste de Regressão

**Definição**: Verifica se mudanças ou atualizações no software não introduziram novos erros.

**Objetivo**: Garantir que funcionalidades existentes continuem funcionando após mudanças.

**Exemplo**: Reexecutar testes antigos após uma atualização de software.

**Ferramentas**:
- **React**:
  - Cypress: [cypress.io](https://www.cypress.io)
  - Selenium: [selenium.dev](https://www.selenium.dev)
- **Node.js**:
  - Mocha: [mochajs.org](https://mochajs.org)
  - Jest: [jestjs.io](https://jestjs.io)

---

### 6. Teste de Desempenho

**Definição**: Avalia o desempenho do software sob várias condições.

**Objetivo**: Garantir que o software responda de maneira eficiente sob diferentes cargas.

**Exemplo**: Testar o tempo de resposta do sistema com 1000 usuários simultâneos.

**Ferramentas**:
- **React**:
  - Lighthouse: [developers.google.com/web/tools/lighthouse](https://developers.google.com/web/tools/lighthouse)
- **Node.js**:
  - Artillery: [artillery.io](https://artillery.io)
  - k6: [k6.io](https://k6.io)

---

### 7. Teste de Segurança

**Definição**: Identifica vulnerabilidades e garante a segurança do software contra ataques.

**Objetivo**: Proteger dados e informações dos usuários.

**Exemplo**: Realizar testes de penetração para descobrir falhas de segurança.

**Ferramentas**:
- **React**:
  - OWASP ZAP: [owasp.org/www-project-zap](https://owasp.org/www-project-zap)
- **Node.js**:
  - Snyk: [snyk.io](https://snyk.io)
  - npm audit: [docs.npmjs.com/cli/v7/commands/npm-audit](https://docs.npmjs.com/cli/v7/commands/npm-audit)
  - OWASP ZAP: [owasp.org/www-project-zap](https://owasp.org/www-project-zap)

---

### 8. Teste de Usabilidade

**Definição**: Avalia a facilidade de uso do software.

**Objetivo**: Garantir que o software seja intuitivo e fácil de usar para os usuários finais.

**Exemplo**: Observar usuários reais interagindo com o software e coletar feedback.

**Ferramentas**:
- **React**:
  - UserTesting: [usertesting.com](https://www.usertesting.com)
  - Lookback: [lookback.io](https://www.lookback.io)
  - Hotjar: [hotjar.com](https://www.hotjar.com)
- **Node.js**: Não aplicável diretamente, mas ferramentas de analytics como Google Analytics podem ajudar a entender a interação do usuário.

---

## Conclusão

Os testes de software são essenciais para o desenvolvimento de um produto de alta qualidade. Cada tipo de teste desempenha um papel crucial na identificação de diferentes tipos de problemas e na garantia de que o software atenda às expectativas dos usuários e clientes. Ferramentas específicas para uma stack web com React e Node.js ajudam a garantir a eficácia e a eficiência dos testes.



---
# OBRIGADO!
![bg](./melhorar-seu-dia-1.gif)