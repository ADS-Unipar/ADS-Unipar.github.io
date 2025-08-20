---
marp: true
theme: inverse
---

# Desafio de TDD
## Calculadora de Vendas com Jest

---

### **Objetivo**

Criar uma função `calcularVenda` que recebe um objeto representando uma venda, contendo uma lista de itens e possíveis descontos.

A função deve calcular o preço final com precisão, aplicando os descontos em nível de **item** e de **venda total**.

---

### **Ferramentas**

* **Linguagem:** JavaScript (ES6+)
* **Framework de Teste:** Jest

---

### **Estrutura dos Dados de Entrada**

A função receberá um objeto `venda` com a seguinte estrutura:

```javascript
{
  itens: [
    {
      titulo: 'Produto A',
      valorItem: 100.00,
      descontoPercentual: 10, // 10%
      descontoReal: 0
    },
    // ... mais itens
  ],
  descontoTotalPercentual: 5, // 5% sobre o subtotal
  descontoTotalReal: 0
}
````

-----

### **Requisitos da Função (1/3)**

#### **1. Cálculo por Item**

  * Para cada item, o desconto a ser aplicado é o **maior** entre o `descontoPercentual` e o `descontoReal`.
  * **Exemplo:** Em um item de R$100, se `descontoPercentual` é `10` (R$10) e `descontoReal` é `5`, o desconto aplicado será de **R$10**.

#### **2. Cálculo do Subtotal**

  * O subtotal da venda é a soma dos valores de todos os itens **após** a aplicação dos descontos individuais.

-----

### **Requisitos da Função (2/3)**

#### **3. Desconto no Total da Venda**

  * Após calcular o subtotal, um desconto geral pode ser aplicado.
  * Se `descontoTotalPercentual` e `descontoTotalReal` forem fornecidos, o **maior** dos dois deve ser aplicado ao subtotal.
  * **Regra de preenchimento:** Se apenas um dos descontos totais for fornecido, o outro deve ser calculado e preenchido no objeto de retorno.

-----

### **Requisitos da Função (3/3)**

#### **4. Objeto de Retorno**

  * A função deve retornar um objeto com a seguinte estrutura:

<!-- end list -->

```javascript
{
  subtotal: 350.00, // Soma dos itens com descontos individuais
  descontoTotalPercentual: 10,
  descontoTotalReal: 35.00,
  totalFinal: 315.00
}
```

-----

### **Arquivo de Teste (`venda.test.js`)**

Os alunos usarão estes testes para guiar o desenvolvimento. O objetivo é fazer todos eles passarem\!

```javascript
// venda.test.js
const calcularVenda = require('./venda');

describe('calcularVenda', () => {
  // Teste 1: Descontos percentuais nos itens.
  test('deve calcular o total com descontos percentuais nos itens', () => {
    const venda = {
      itens: [
        { titulo: 'Produto A', valorItem: 100, descontoPercentual: 10, descontoReal: 0 }, // 90
        { titulo: 'Produto B', valorItem: 200, descontoPercentual: 5, descontoReal: 0 },  // 190
      ],
      descontoTotalPercentual: 0, descontoTotalReal: 0,
    };
    expect(calcularVenda(venda).totalFinal).toBeCloseTo(280.00);
  });
});
```

-----

### **Testes (Continuação)**

```javascript
// Teste 2: Descontos em valor real nos itens.
test('deve calcular o total com descontos em valor real nos itens', () => {
  const venda = {
    itens: [
      { titulo: 'Produto A', valorItem: 50, descontoPercentual: 0, descontoReal: 10 }, // 40
      { titulo: 'Produto B', valorItem: 150, descontoPercentual: 0, descontoReal: 25 }, // 125
    ],
    descontoTotalPercentual: 0, descontoTotalReal: 0,
  };
  expect(calcularVenda(venda).totalFinal).toBeCloseTo(165.00);
});

// Teste 3: Escolher o maior desconto do item (percentual vs. real).
test('deve aplicar o maior desconto no item quando ambos são fornecidos', () => {
  const venda = {
    itens: [
      // 10% de 100 = 10. Desconto real = 5. Aplica 10. Valor final: 90.
      { titulo: 'Produto A', valorItem: 100, descontoPercentual: 10, descontoReal: 5 },
      // 5% de 200 = 10. Desconto real = 15. Aplica 15. Valor final: 185.
      { titulo: 'Produto B', valorItem: 200, descontoPercentual: 5, descontoReal: 15 },
    ],
    descontoTotalPercentual: 0, descontoTotalReal: 0,
  };
  expect(calcularVenda(venda).totalFinal).toBeCloseTo(275.00);
});
```

-----

### **Testes (Continuação)**

```javascript
// Teste 4: Aplicar desconto percentual sobre o total.
test('deve aplicar o desconto percentual no total da venda', () => {
  const venda = {
    itens: [
      { titulo: 'Produto A', valorItem: 100, descontoPercentual: 10, descontoReal: 0 }, // 90
      { titulo: 'Produto B', valorItem: 200, descontoPercentual: 0, descontoReal: 10 }, // 190
    ],
    descontoTotalPercentual: 10, // 10% sobre o subtotal de 280
    descontoTotalReal: 0,
  };
  // 280 - 10% = 252
  expect(calcularVenda(venda).totalFinal).toBeCloseTo(252.00);
});

// Teste 5: Aplicar desconto em valor real sobre o total.
test('deve aplicar o desconto em valor real no total da venda', () => {
  const venda = {
    itens: [ { valorItem: 100 }, { valorItem: 200 } ], // Subtotal 300
    descontoTotalPercentual: 0,
    descontoTotalReal: 50,
  };
  // 300 - 50 = 250
  expect(calcularVenda(venda).totalFinal).toBeCloseTo(250.00);
});
```

-----

### **Testes (Regras de Preenchimento)**

```javascript
// Teste 7: Deve retornar o objeto completo, preenchendo o desconto real.
test('deve retornar o objeto de resultado com a estrutura correta', () => {
  const venda = {
    itens: [
      { titulo: 'Produto A', valorItem: 100, descontoPercentual: 10, descontoReal: 0 }, // 90
      { titulo: 'Produto B', valorItem: 150, descontoPercentual: 0, descontoReal: 25 }, // 125
    ],
    descontoTotalPercentual: 10, // 10% de 215 = 21.50
    descontoTotalReal: 0,
  };
  const resultadoEsperado = {
    subtotal: 215.00,
    descontoTotalPercentual: 10,
    descontoTotalReal: 21.50, // Campo preenchido
    totalFinal: 193.50,
  };
  expect(calcularVenda(venda)).toEqual(resultadoEsperado);
});
```

-----

### **Testes (Regras de Preenchimento)**

```javascript
// Teste 8: Deve preencher o desconto percentual se apenas o real for fornecido.
test('deve preencher o descontoTotalPercentual se apenas o descontoTotalReal for fornecido', () => {
  const venda = {
    itens: [ { valorItem: 200 }, { valorItem: 300 } ], // Subtotal 500
    descontoTotalPercentual: 0,
    descontoTotalReal: 50, // 50 é 10% de 500
  };
  const resultado = calcularVenda(venda);
  expect(resultado.descontoTotalPercentual).toBeCloseTo(10.00);
  expect(resultado.totalFinal).toBeCloseTo(450.00);
});
```

-----

### **Testes (Casos Especiais)**

```javascript
// Teste 9: Deve lidar com uma lista de itens vazia.
test('deve retornar zero para todos os campos se a lista de itens estiver vazia', () => {
  const venda = {
    itens: [],
    descontoTotalPercentual: 10,
    descontoTotalReal: 50,
  };
  const resultadoEsperado = {
    subtotal: 0,
    descontoTotalPercentual: 10,
    descontoTotalReal: 0,
    totalFinal: 0,
  };
  expect(calcularVenda(venda)).toEqual(resultadoEsperado);
});
```

-----

### **Bora codar**
façam un fork do repositório a baixo 
https://github.com/ADS-Unipar/desafio-tdd

-----

## **Boa Sorte\!**

