---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# HTTP


Uma requisição HTTP (Hypertext Transfer Protocol) é um pedido feito por um cliente a um servidor para obter ou enviar dados.

---

### As partes essenciais de uma requisição HTTP

**URL (Uniform Resource Locator):** Identifica o recurso alvo da requisição.
**Método:** Indica a ação que o cliente deseja realizar. Os métodos comuns incluem:

- **GET:** Solicita dados do servidor.
- **POST:** Envia dados ao servidor.
- **PUT:** Atualiza dados no servidor.
- **DELETE:** Remove dados do servidor.

---
**URL (Uniform Resource Locator):** Identifica o recurso alvo da requisição.

**Cabeçalhos (Headers):** Fornece informações adicionais sobre a requisição, como o tipo de mídia aceito pelo cliente, tipo de codificação, autenticação, entre outros. Exemplos de cabeçalhos incluem:

- **User-Agent:** Identifica o software do cliente.
- **Content-Type:** Especifica o tipo de mídia no corpo da requisição (para POST, PUT, etc.).
- **Accept:** Indica os tipos de mídia aceitos pelo cliente.

---

**Corpo (Body):** Contém dados adicionais, geralmente usado em requisições POST, PUT, etc., para enviar informações ao servidor. O corpo é opcional em algumas requisições.

- Aqui está um exemplo simples de uma requisição HTTP usando o método GET:
```HTTP
GET /exemplo/recurso HTTP/1.1
Host: www.exemplo.com
User-Agent: MeuNavegador/1.0
```

---

```HTTP

POST /exemplo/recurso HTTP/1.1
Host: www.exemplo.com
User-Agent: MeuNavegador/1.0
Content-Type: application/json

{
  "nome": "Exemplo",
  "idade": 25
}
```

---

<!-- _class: lead -->

## Detalhando dos Status HTTP e suas Significações

---

## 1xx - Informacional:

- **100 Continue:** Indica que o servidor recebeu a parte inicial da solicitação e está aguardando o restante.

- **101 Switching Protocols:** O servidor concordou em mudar os protocolos solicitados pelo cliente.

---

## 2xx - Sucesso:

- **200 OK:** A requisição foi bem-sucedida. O significado exato depende do método de requisição utilizado.

- **201 Created:** A requisição foi bem-sucedida, e um novo recurso foi criado como resultado.

- **204 No Content:** A requisição foi bem-sucedida, mas não há conteúdo para ser enviado no corpo da resposta.

---

## 3xx - Redirecionamento:

- **301 Moved Permanently:** O recurso requisitado foi movido permanentemente para outra localização.

- **302 Found (ou 307 Temporary Redirect):** A requisição deve ser redirecionada temporariamente para outra URI.

- **304 Not Modified:** Indica que a versão do recurso requisitado não foi modificada desde a última requisição.

---

## 4xx - Erro do Cliente:

- **400 Bad Request:** A requisição não pode ser entendida ou foi malformada.

- **401 Unauthorized:** Requer autenticação do usuário para acessar o recurso.

- **403 Forbidden:** O servidor entendeu a requisição, mas recusa-se a autorizar o acesso.

- **404 Not Found:** O recurso requisitado não foi encontrado no servidor.

---

## 5xx - Erro do Servidor:

- **500 Internal Server Error:** Indica um erro genérico no servidor que não pode ser mais especificado.

- **502 Bad Gateway:** O servidor, enquanto agindo como gateway ou proxy, recebeu uma resposta inválida do servidor upstream.

- **503 Service Unavailable:** O servidor não está pronto para manipular a requisição. Geralmente, isso é devido a sobrecarga temporária ou manutenção do servidor.

Mais status detalhados: *https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status*

---

### Introdução ao RESTful

##### Definição do RESTful:
Representational State Transfer (REST) é um estilo arquitetural utilizado na comunicação entre sistemas distribuídos.
Foco na simplicidade, escalabilidade e independência de estado.

---

 ##### Princípios Fundamentais do RESTful

- **Estado Representacional:**
Dados são representados de forma clara e estruturada.
- **Identificação de Recursos:**
Cada recurso (entidade) possui uma URI única para identificação.
- **Manipulação de Recursos através de Representações:**
Recursos podem ser manipulados através da leitura e manipulação de representações.

---

##### Operações CRUD no RESTful

 **Operações Básicas:**
**POST (Create):**
- Utilizado para criar um novo recurso.
- Exemplo: POST `/api/users` para criar um novo usuário.
---

**GET (Read):**
- Recupera informações sobre um recurso ou uma coleção de recursos.
- Exemplo: GET `/api/users` para obter a lista de usuários.
 Operações CRUD no RESTful (cont.)

---


**PUT (Update):**

- Atualiza um recurso existente ou cria um novo se não existir.
- Exemplo: PUT `/api/users/123` para atualizar informações do usuário com ID 123.

---

**DELETE (Delete):**

- Remove um recurso existente.
- Exemplo: DELETE `/api/users/123` para excluir o usuário com ID 123.

---

# Vamos Praticar

- Clonem o projeto: https://github.com/ADS-Unipar/mock-api
- executem o comando para instalar as dependências 
```bash
 npm i 
```
- executem o comando para levantar a aplicação 
```bash
 npm start
```


- Abram o [Postman](https://www.postman.com/)
