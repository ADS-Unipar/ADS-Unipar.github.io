---
marp: true
theme: default
paginate: true
---

# 🧩 Atividade Prática  
## Descoberta de Entidades

🎯 **Objetivo:** Identificar entidades a partir de um problema real  
🎓 **Disciplina:** Modelagem de Banco de Dados  

---

# 📖 Enunciado do Problema

A empresa **TechFix Assistência Técnica** trabalha com manutenção de equipamentos eletrônicos como:

- Notebooks  
- Celulares  
- Tablets  

Quando um cliente leva um equipamento para conserto, é realizado um cadastro com seus dados pessoais.

Cada equipamento também é registrado com informações como marca, modelo e número de série.

---

# 📖 Continuação do Enunciado

Ao dar entrada no equipamento, é aberta uma **ordem de serviço** contendo:

- Data de entrada  
- Descrição do problema  
- Prazo estimado para conclusão  

A empresa possui técnicos especializados.

Cada ordem de serviço é atribuída a apenas **um técnico responsável**, mas um técnico pode ser responsável por **várias ordens de serviço**.

---

# 📖 Continuação do Enunciado

Durante o conserto, podem ser utilizadas **peças de reposição**.

Cada peça possui:

- Código  
- Descrição  
- Valor  
- Quantidade em estoque  

Uma mesma ordem de serviço pode utilizar **várias peças**,  
e uma mesma peça pode ser utilizada em **diferentes ordens de serviço**.

---

# 📖 Finalização do Enunciado

Quando o serviço é concluído, são registrados:

- Valor total  
- Forma de pagamento (dinheiro, cartão ou PIX)  
- Data de pagamento  

A empresa também mantém o **histórico de status** da ordem de serviço:

- Aberta  
- Em manutenção  
- Aguardando peça  
- Concluída  
- Entregue  

---

# 🎯 Atividade

Com base apenas no enunciado:

1️⃣ Identifique as possíveis **entidades** do sistema.  

2️⃣ Liste possíveis **atributos** de cada entidade.  

3️⃣ Identifique possíveis relacionamentos **N:N**.  

🚫 Não desenhe o modelo ainda.  
Apenas descubra e justifique as entidades.

---

# 🧠 Orientação

Pergunte-se:

- Isso representa algo que precisa ser armazenado?
- Possui atributos próprios?
- Existe independentemente no sistema?
- Representa um evento?
- Representa uma pessoa?
- Representa um objeto físico?

---

# 📌 Entrega Esperada

✔ Lista de entidades  
✔ Lista de atributos  
✔ Identificação de possíveis relacionamentos  
✔ Justificativa para cada entidade encontrada  

---

# 🚀 Desafio Extra (Opcional)

Existe alguma entidade “escondida” no texto?

Existe algo que pode virar uma **tabela associativa**?

Existe algo que pode gerar dúvida entre ser atributo ou entidade?
