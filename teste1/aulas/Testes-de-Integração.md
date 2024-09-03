---
marp: true
theme: default
paginate: true
footer: "Allan da Silva"
backgroundColor: #fff
---

# **Testes de Integração**

---

## **1. Introdução aos Testes de Integração**

### **O que são Testes de Integração?**
- **Definição:** Testes de integração verificam a interação entre diferentes módulos ou componentes de um sistema.
- **Objetivo:** Assegurar que os componentes integrados funcionam como esperado quando combinados.
----

### **Por que são importantes?**
- **Identificação de problemas:** Detecta problemas de interface entre módulos.
- **Garantia de qualidade:** Garante que o sistema funcione corretamente em conjunto.

---

## **2. Diferença entre Testes Unitários e de Integração**

### **Testes Unitários**
- Testam partes individuais do código (como funções ou classes) de forma isolada.

### **Testes de Integração**
- Focam na combinação de diferentes módulos e como eles interagem.

---

### **Exemplo de Comparação**
- **Testes Unitários:** Verificam se uma função retorna o valor correto.
- **Testes de Integração:** Verificam se o módulo funciona corretamente quando integrado com outro módulo.



---

## **3. Abordagens para Testes de Integração**

### **Testes de Integração em Grande Escala**
- **Bottom-up:** Integra e testa módulos de baixo nível primeiro.
- **Top-down:** Começa com módulos de alto nível.
- **Big Bang:** Todos os módulos são integrados e testados de uma vez.

---

### **Exemplo Prático**
- Demonstração de como uma API e um frontend podem ser testados juntos.


---

## **4. Estratégias e Melhores Práticas**

### **Escolhendo o que testar**
- **Foco em interfaces:** Concentre-se nas áreas onde módulos interagem.
- **Cobertura de casos críticos:** Priorize fluxos de trabalho críticos.

### **Ferramentas e Frameworks**
- **Jest:** Um exemplo de framework que suporta testes de integração.
- **Outras opções:** Mocha, Jasmine, Cypress.

### **Exemplo de Ferramenta**
- Demonstração de uso básico do Jest para um teste de integração.


---

## **5. Exemplos de Testes de Integração**

### **Testando APIs**
- **Setup:** Criação de um servidor de testes com JSON Server.
- **Exemplo de Teste:** Verificação de um endpoint que retorna uma lista de usuários.

![API Testing Example](https://example.com/api-testing-example.png)

### **Testando Fluxos de Trabalho**
- **Exemplo:** Testando um fluxo de login que envolve autenticação, recuperação de dados do usuário e redirecionamento.

![Workflow Testing Example](https://example.com/workflow-testing-example.png)

---

## **6. Desafios e Considerações**

### **Complexidade e Manutenção**
- **Desafios:** Testes de integração podem ser mais complexos e difíceis de manter do que testes unitários.

### **Isolamento de Testes**
- **Dificuldade:** Garantir que testes de integração sejam isolados para evitar efeitos colaterais.



---

## **7. Conclusão**

### **Recapitulando**
- **Importância dos testes de integração:** Essenciais para garantir a funcionalidade correta entre módulos.
- **Estratégias:** Importância de escolher a abordagem correta e ferramentas adequadas.

### **Próximos Passos**
- Clonem o repo https://github.com/ADS-Unipar/teste-integracao
- Vamos corrigir os testes juntos e elabora mais cenários de testes

