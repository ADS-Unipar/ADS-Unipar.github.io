---
marp: true
theme: default
class: lead
paginate: true
header: "BDD - Behavior-Driven Development"
footer: "Allan da Silva"
---

# **Behavior-Driven Development (BDD)**  


---

# **Introdução**
- **Behavior-Driven Development (BDD)** é uma metodologia que une equipes de negócios, desenvolvimento e testes.
- Foco em criar software que atenda às expectativas do usuário final.
- Extensão do **Test-Driven Development (TDD)**, com ênfase na colaboração e comunicação.

---

# **O que é BDD?**
- **Desenvolvimento Guiado por Comportamento**.
- Descreve comportamentos do sistema antes do desenvolvimento.
- Usa uma linguagem acessível para todos os stakeholders.
- Focado em **cenários de uso** para definir expectativas do sistema.

---

# **BDD vs. TDD**

| **TDD** | **BDD** |
|---------|---------|
| Foco técnico em testes de unidade | Foco no comportamento de negócios |
| Linguagem técnica | Linguagem acessível (natural) |
| Menos envolvimento de stakeholders | Colaboração ativa de stakeholders |
| Guia o design técnico | Guia o comportamento esperado |

---

# **Pilares do BDD**

1. **Colaboração**: Alinha equipes de negócio, desenvolvimento e testes.
2. **Linguagem comum**: Usa termos compreensíveis para todos.
3. **Foco no comportamento**: Define o que o sistema deve fazer.
4. **Feedback contínuo**: Testes automatizados verificam o comportamento.

---

# **Formato Gherkin**

- Usado para descrever comportamentos de forma clara.
- **Given**: Define o contexto inicial.
- **When**: Ação ou evento.
- **Then**: Resultado esperado.

**Exemplo de Gherkin:**

```gherkin
Feature: Login de usuário

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere "johndoe" e "password123"
    Then o usuário deve ser redirecionado para o dashboard
```

---

# **Ferramentas Populares para BDD**

- **Cucumber**: Integra linguagem natural (Gherkin) com execução de testes automatizados.
- **SpecFlow**: Para projetos .NET.
- **Behave**: Para Python.
- **JBehave**: Para Java.
- **RSpec**: Para Ruby.

---

# **Vantagens do BDD**

1. **Melhora a comunicação**: Reduz mal-entendidos entre equipes.
2. **Alinhamento com negócios**: Foco em requisitos reais do cliente.
3. **Testes claros**: Todos entendem os cenários de teste.
4. **Facilidade de manutenção**: Cenários são baseados em comportamentos claros.

---

# **Desafios do BDD**

- **Investimento inicial**: Tempo e esforço para treinar equipes e configurar.
- **Definir cenários**: Encontrar o equilíbrio entre ser abrangente e claro.
- **Colaboração contínua**: Manter o envolvimento de todos os stakeholders.

---

# **Como Implementar o BDD**

1. **Workshop de descoberta**: Define o comportamento esperado com todas as partes envolvidas.
2. **Escrever cenários Gherkin**: Claros e concisos.
3. **Implementar testes**: Usando ferramentas como o **Cucumber**.
4. **Desenvolver a funcionalidade**: Com base nos cenários definidos.
5. **Executar testes e feedback**: Testes automatizados para garantir conformidade.

---

# **Conclusão**

- O **BDD** melhora o alinhamento entre desenvolvimento e negócio.
- Foco no comportamento esperado, promovendo clareza e comunicação.
- Testes automatizados garantem qualidade e evolução contínua do sistema.

---

# **Obrigado!**

Dúvidas ou perguntas?

---
# Referências

- Gherkin e Cucumber: https://medium.com/opanehtech/gherkin-e-cucumber-mapeando-os-testes-automatizados-53232bf26e79

- https://cucumber.io/
- https://medium.com/@ezavictoria/cypress-e-cucumber-setup-inicial-completo-para-iniciar-o-seu-primeiro-cen%C3%A1rio-4a8b7465698a