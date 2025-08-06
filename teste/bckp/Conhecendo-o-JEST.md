---
marp: true
theme: default
class: lead
paginate: true
footer: 'Allan da Silva'
---

# Introdução ao Jest
---

# **Objetivo:**  
Aprender a configurar o Jest e escrever testes unitários em um projeto Usando javascript, explorando diferentes cenários de teste.

---

## O que é Jest?

- Jest é um framework de testes JavaScript desenvolvido pelo Facebook.
- Focado em simplicidade e suporte para projetos React, mas não limitado a eles.
- Inclui funcionalidades como mocks, testes assíncronos e cobertura de código.

---

## Vantagens do Jest

- **Fácil de configurar**: Funciona out-of-the-box para projetos React.
- **Rápido**: Executa testes em paralelo e apenas para os arquivos alterados.
- **Cobertura de código integrada**: Relatórios de cobertura de código embutidos.
- **Snapshots**: Testes de instantâneos para verificar a saída de componentes.

---

# Setup Inicial

## Passo 1: Instalando dependências

Abra o terminal e execute o seguinte comando na raiz do seu projeto:

```bash
npm install --save-dev jest 
```

---
### Passo 2: Configurando o Jest

Crie um arquivo de configuração `jest.config.js` na raiz do projeto:

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/**/*.test.(ts|tsx|js)'],
};
```

---

### Passo 3: Adicionando script ao `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}

```

---

### Passo 4: Criando nossas funções
- crie o arquivo `calc.js`
```ts
function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b !== 0 ? a / b : null;
}
function isEven(num) {
  return num % 2 === 0;
}
function isOdd(num) {
  return num % 2 !== 0;
}
module.exports = { sum, subtract, multiply, divide, isEven, isOdd }
```
---
 
 ### Passo 5: Criando nosso arquivo de testes
- crie o arquivo `calc.test.js`
 ```ts
 const { sum, subtract, multiply, divide, isEven, isOdd } = require('../calc');

describe('testando nossa calculadora', () => {
  test('testando a soma', () => {
    // seu teste aqui
  })
})
 ```

 ---

 ## Bora praticar sem chat GPT!