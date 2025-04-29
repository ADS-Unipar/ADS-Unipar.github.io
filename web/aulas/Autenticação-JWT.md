---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# 🌐 Introdução à Autenticação e JWT

---

# 🎯 Objetivo

Compreender os fundamentos da autenticação de usuários em sistemas web e explorar o uso de **JSON Web Tokens (JWT)** como uma solução moderna, segura e escalável.

---

# 🔗 Conexão com Middleware

Na aula anterior, aprendemos que **middlewares** são funções que interceptam requisições HTTP antes que elas cheguem ao controlador.

👉 Agora, veremos como usar **middlewares para proteger rotas** com base na presença e validade de um **JWT**.

---

# 🔐 O que é Autenticação?

**Autenticação** é o processo de verificar a identidade de um usuário ou sistema.

✅ Garante que **apenas usuários autorizados** tenham acesso a recursos protegidos.  
🚨 Essencial para a **segurança e integridade** dos sistemas web.

---

# 🛠️ Métodos Tradicionais de Autenticação

- **Usuário e senha:** Comum, mas vulnerável a ataques de força bruta e phishing.

- **Token de sessão:** Requer gerenciamento de sessão no servidor.

- **Autenticação de dois fatores (2FA):** Adiciona uma camada extra de segurança ao processo.

---

# 💡 O que é JWT?

**JWT (JSON Web Token)** é um padrão aberto (RFC 7519) para transmitir informações de forma **segura e compacta** como um objeto JSON.

🧩 Um JWT possui 3 partes:

1. **Header (cabeçalho)**
2. **Payload (dados)**
3. **Signature (assinatura)**

---

# 📦 Como Funciona um JWT

1. **Login com sucesso:** O servidor gera e envia um JWT.
2. **Armazenamento:** O cliente armazena o token (ex: localStorage ou cookies).
3. **Uso:** O cliente envia o token a cada nova requisição.
4. **Validação:** O servidor verifica a assinatura para garantir autenticidade.

---

# 🚀 Vantagens do JWT

✅ **Escalabilidade:** Stateless – não exige sessão no servidor.  
✅ **Segurança:** Assinado digitalmente – difícil de falsificar.  
✅ **Portabilidade:** Pode ser usado em diferentes plataformas e linguagens.

---

# ⚠️ Considerações de Segurança

🔁 **Expiração:** Sempre defina um tempo de vida para o token.  
🔄 **Renovação segura:** Use refresh tokens ou reautenticação programada.  
🔒 **Armazenamento seguro:** Evite expor o token no frontend – prefira **HttpOnly cookies** quando possível.

💬 *"Seguro do lado do cliente" é sempre um desafio — pense bem onde e como armazenar seus tokens.*

---

# 🧪 Exercício de fixação  

Crie uma **API simples** com autenticação JWT usando Node.js (ou a linguagem de sua escolha):

1. **Endpoint de login** que retorna um JWT após autenticação.
2. **Endpoint protegido** que exige o JWT para acesso.
3. Armazene os dados dos usuários de forma simples (mock ou JSON).
4. Use uma lib como `jsonwebtoken`.
---


# 📚 Referências

- [RFC 7519 - JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- Documentações: `jsonwebtoken`, `express-jwt`, `passport-jwt`
