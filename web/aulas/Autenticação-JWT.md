---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# Introdução à Autenticação e JWT

---

# Objetivo

Compreender os fundamentos da autenticação de usuários em sistemas web e explorar a utilização de JSON Web Tokens (JWT) como uma solução eficiente e segura.

---

# O que é Autenticação?

* **Definição:** Autenticação é o processo de verificar a identidade de um usuário ou sistema, garantindo que apenas usuários autorizados tenham acesso aos recursos protegidos.

* **Importância:** Fundamental para a segurança e integridade dos sistemas, especialmente em ambientes online onde a identificação correta dos usuários é essencial.

---

## Métodos Tradicionais de Autenticação

* **Nome de usuário e senha:** O método mais comum, porém suscetível a ataques de força bruta e phishing.

* **Token de sessão:** Utilizado em muitas aplicações web, mas requer armazenamento de estado no servidor.

* **Autenticação de dois fatores (2FA):** Aumenta a segurança exigindo mais do que apenas uma senha para o login.

---

## Introdução aos JSON Web Tokens (JWT)

* **O que são JWTs?** JWT é um padrão aberto (RFC 7519) que define uma maneira compacta e autocontida de transmitir informações entre partes como um objeto JSON.

* **Componentes:** Consiste em três partes separadas por pontos: cabeçalho (header), payload e assinatura.
* **Características:** São compactos, autocontidos e podem ser validados sem a necessidade de consultar o servidor.

---

## Funcionamento de um JWT

* **Emissão:** Um JWT é emitido pelo servidor após a autenticação bem-sucedida do usuário.

* **Transmissão:** O JWT é transmitido do servidor para o cliente e é armazenado, geralmente no localStorage ou em cookies.

* **Validação:** O cliente envia o JWT em cada solicitação subsequente e o servidor o valida para garantir a autenticidade e a autorização do usuário.

---

## Vantagens do JWT

* **Escalabilidade:** Não requer armazenamento de estado no servidor, o que o torna altamente escalável.

* **Segurança:** As informações contidas no JWT são assinadas digitalmente, garantindo sua integridade.
* **Portabilidade:** Pode ser utilizado em diversos ambientes e linguagens de programação.

---

## Considerações de Segurança

* **Expiração:** JWTs devem ter um tempo de vida limitado para minimizar o risco de uso malicioso.

* **Renovação:** Um mecanismo para renovar JWTs sem a necessidade de autenticação adicional é essencial para garantir a continuidade da sessão.

* **Armazenamento Seguro:** JWTs devem ser armazenados de forma segura no cliente para evitar acesso não autorizado.

* _Seguro do lado do cliente é um pouco difícil_

---

# Vamos acrescentar autenticação na nossa API de Tarefas?
