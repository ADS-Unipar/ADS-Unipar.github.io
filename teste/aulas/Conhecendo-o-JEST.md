---
marp: true
theme: default
class: lead
paginate: true
footer: 'Allan da Silva'
---

# Introdução ao Jest

**Objetivo:**  
Aprender a configurar o Jest e escrever testes unitários em um projeto React usando TypeScript, explorando diferentes cenários de teste.

---

# O que é o Jest?

- **Jest** é um framework de testes em JavaScript.
- Amplamente utilizado para testar aplicações React.
- Suporte para mocks, snapshots e cobertura de código.
- Fácil de configurar e usar com TypeScript.

---

# Setup Inicial

## Passo 1: Instalando dependências

Abra o terminal e execute o seguinte comando na raiz do seu projeto:

```bash
npm install --save-dev jest @types/jest ts-jest
```

---
# Passo 2: Configurando o Jest

Crie um arquivo de configuração `jest.config.js` na raiz do projeto:

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/tests/**/*.test.(ts|tsx|js)'],
};
```

---

# Passo 3: Criando nossas funções
- crie o arquivo `calc.js`
```ts
export function sum(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number | null {
  return b !== 0 ? a / b : null;
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}

export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

```
---
 
 # Passo 4: Criando nosso arquivo de testes
- crie o arquivo `calc.test.js`
 ```ts
 import { sum, subtract, multiply, divide, isEven, isOdd } from '../src/utils';

describe('testando nossa calculadora'()=> {
  test('testetando a soma',() => {
    // seu teste aqui
  })
})
 ```

 ---

 ## Bora praticar sem chat GPT!