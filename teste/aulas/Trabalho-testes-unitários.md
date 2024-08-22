---
marp: true
theme: default
paginate: true
header: "Testes Unitários com Jest"
footer: "Allan da Silva"
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

# Testes Unitários com Jest

### Trabalho Prático


---

# Objetivo

Desenvolver habilidades práticas na criação e execução de testes unitários usando Jest.  
Os alunos irão aplicar conceitos fundamentais de testes, incluindo:

- Testes de funções síncronas
- Análise de cobertura de código

---

# Instruções

1. **Crie um repositório no GitHub** para armazenar seu código e documentação.
2. **Configure um projeto Node.js** com Jest instalado.
3. **Implemente as funcionalidades** descritas.
4. **Gere e analise um relatório de cobertura de código**.
5. **Envie o link do repositório** com o código e relatório.

---

# Requisitos do Projeto

## 1. Configuração do Ambiente

- Inicie um novo projeto Node.js com Jest instalado.
- Configure o Jest no `package.json` ou crie `jest.config.js`.
- Se usar TypeScript, configure o `ts-jest`.

---

# Requisitos do Projeto

## 2. Implementação de Funcionalidades

### Função Calculadora

- Crie uma função `calculadora` que realiza operações:
  - `soma`, `subtracao`, `multiplicacao`, `divisao`
- **Exemplo**:
  ```javascript
  const resultado = calculadora(10, 5, 'soma'); // 15
  
  ```
---

## 2. Implementação de Funcionalidades
### Função de Verificação de Palíndromo
- Crie a função ePalindromo:
  - Recebe uma string
  - Retorna true se for um palíndromo, false caso contrário.

## Exemplo:

```javascript
const resultado = ePalindromo('arara'); // true
const resultado = ePalindromo('casa'); // false
```

---
# Requisitos do Projeto
### 3. Criação de Testes
- Testes para a Função Calculadora
- Escreva testes para todas as operações (soma, subtracao, etc.).
- Cubra casos de borda, como divisão por zero.

---

# Requisitos do Projeto
### 3. Criação de Testes
- Testes para a Função de Palíndromo
- Teste diferentes entradas:
- Strings que são e não são palíndromos
- Strings vazias

---

# Entrega

GitHub Repository: O repositório deve conter:

- Código fonte
- Testes unitários
- Configuração do Jest
- Relatório de cobertura
- Documentação: Inclua um README.md com:
  - Instruções de instalação
  - Execução dos testes

Link de Entrega: [Envie o link do repositório GitHub.](https://forms.gle/tfR7SXRhizPeE4fM7)

