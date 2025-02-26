---
marp: true
---

# Diagramas Comportamentais da UML

---

## Introdução
Os diagramas comportamentais da UML são utilizados para modelar o comportamento dinâmico de um sistema. Eles descrevem como os elementos do sistema interagem ao longo do tempo, permitindo visualizar fluxos de execução, eventos e mudanças de estado.

Nesta aula, abordaremos três tipos principais de diagramas comportamentais:
- **Diagrama de Sequência**
- **Diagrama de Atividades**
- **Diagrama de Estado**


---

## 1. Diagrama de Sequência

### Definição
O **Diagrama de Sequência** descreve a interação entre objetos em um determinado cenário, enfatizando a ordem das mensagens trocadas ao longo do tempo.

### Elementos Principais
- **Ator**: Representa uma entidade externa ao sistema, como um usuário ou outro sistema.
- **Objeto**: Representa uma instância de uma classe.
- **Linha de vida**: Representa o tempo de existência de um objeto durante a interação.
- **Mensagem**: Representa a comunicação entre os objetos.
- **Retorno**: Representa a resposta de uma mensagem.

---
### Exemplo de Uso
Suponha um sistema bancário onde um cliente realiza um saque em um caixa eletrônico (ATM). O diagrama de sequência pode ser representado da seguinte forma:

1. O cliente insere o cartão no ATM.
2. O ATM solicita a senha.
3. O cliente digita a senha.
4. O ATM valida a senha com o banco.
5. O banco confirma a validação.
6. O cliente solicita o saque.
7. O ATM solicita a autorização do banco.
8. O banco autoriza o saque e debita o valor.
9. O ATM entrega o dinheiro ao cliente.

---
### Exemplo Gráfico
![Diagrama de Sequência](https://upload.wikimedia.org/wikipedia/commons/b/b1/UML_Sequence_diagram.JPG)

---

## 2. Diagrama de Atividades

### Definição
O **Diagrama de Atividades** modela o fluxo de controle e execução de um processo dentro do sistema, podendo representar workflows, processos de negócio ou algoritmos.



### Elementos Principais
- **Nó Inicial**: Indica o início do fluxo.
- **Ação**: Representa uma atividade ou tarefa.
- **Decisão/Merge**: Representa pontos de decisão no fluxo.
- **Barra de Sincronização**: Representa atividades concorrentes (paralelismo).
- **Nó Final**: Indica o fim do fluxo.
---

### Exemplo de Uso
Um diagrama de atividades para o processo de compra online pode ser modelado assim:

1. Cliente adiciona produtos ao carrinho.
2. Cliente procede para o checkout.
3. Cliente escolhe o método de pagamento.
4. O sistema valida o pagamento.
   - Se o pagamento for aprovado, o pedido é confirmado.
   - Se for recusado, o cliente é notificado e pode tentar novamente.
5. Pedido é enviado para entrega.
6. Cliente recebe o pedido.
---
### Exemplo Gráfico
![bg contain](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/activity-diagram-for-login-UML/activity-diagram-for-login-UML-650x797.png)

---

## 3. Diagrama de Estado

### Definição
O **Diagrama de Estado** representa os diferentes estados que um objeto pode assumir e as transições entre esses estados, de acordo com eventos disparados.

### Elementos Principais
- **Estado**: Representa uma condição do objeto em determinado momento.
- **Transição**: Indica a mudança de estado devido a um evento.
- **Evento**: Dispara a mudança de estado.
- **Estado Inicial**: Indica o primeiro estado do objeto.
- **Estado Final**: Indica o estado final do objeto.

---

### Exemplo de Uso
Um sistema de pedidos pode ter os seguintes estados:

1. **Pedido Criado** → Cliente realizou a compra.
2. **Pagamento Pendente** → Aguardando confirmação do pagamento.
3. **Pagamento Aprovado** → Pedido será processado.
4. **Pedido Enviado** → Pedido enviado para o cliente.
5. **Pedido Entregue** → Cliente recebeu o pedido.
6. **Pedido Cancelado** → Pedido cancelado antes da entrega.

Esses estados são conectados por transições ativadas por eventos como "Pagamento Confirmado", "Pedido Despachado" e "Entrega Confirmada".

---

### Exemplo Gráfico
![Diagrama de Estado](https://www.rmfais.com/rmfais/artigos/files/207.png)

---

## Conclusão
Os diagramas comportamentais da UML ajudam a entender o comportamento dinâmico de um sistema. Eles são essenciais para modelar interações, fluxos de trabalho e mudanças de estado, facilitando o entendimento e a documentação do sistema.

Com a prática, a modelagem com esses diagramas se torna uma ferramenta poderosa para desenvolvimento e análise de sistemas!

