---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---


# **HTTP e Códigos de Status**
---
## **Introdução ao HTTP**

### História do HTTP: A Evolução do Protocolo da Web  

O **Hypertext Transfer Protocol (HTTP)** é o protocolo base da web, responsável pela comunicação entre clientes (navegadores, aplicativos) e servidores. Sua história começa no final dos anos 1980 e se desenvolve até os dias atuais, com novas versões e melhorias em segurança e desempenho.

---

## **A Origem do HTTP**  

### **1989 - A Proposta da Web**  
O HTTP foi concebido por **Tim Berners-Lee**, cientista britânico do CERN (Organização Europeia para a Pesquisa Nuclear). Ele propôs um sistema de **hipertexto** para conectar documentos por meio de links e acessá-los via uma rede distribuída. Esse projeto se tornaria a **World Wide Web (WWW)**.  

---

### **1990 - Primeira Implementação do HTTP**  
Tim Berners-Lee e seu time criaram a primeira versão do HTTP, o **HTTP/0.9**, junto com o primeiro navegador (WorldWideWeb) e o primeiro servidor web.  

---

## **As Versões do HTTP**  

### **HTTP/0.9 (1991) - O Primeiro Passo**  
- Muito simples: só permitia a recuperação de documentos HTML.  
- Funcionava apenas com requisições `GET`.  
- Sem suporte para cabeçalhos ou status de resposta.  
---
### **HTTP/1.0 (1996) - Mais Recursos**  
- Introduziu os métodos `POST` e `HEAD`.  
- Adicionou cabeçalhos HTTP para metadados, como `Content-Type`.  
- Cada requisição precisava abrir uma nova conexão TCP, tornando-se ineficiente.  
---

### **HTTP/1.1 (1997) - Padrão Dominante por Anos**  
- Permitiu **conexões persistentes** (keep-alive), reduzindo a necessidade de abrir novas conexões TCP.  
- Introduziu novos métodos: `OPTIONS`, `PUT`, `DELETE`, `TRACE`.  
- Melhor suporte a cache e compressão de dados.  
---

### **HTTP/2 (2015) - Melhor Performance**  
- Baseado no protocolo SPDY do Google.  
- Introduziu **multiplexação**, permitindo várias requisições simultâneas em uma única conexão TCP.  
- Usava compressão de cabeçalhos para reduzir latência.  

---

### **HTTP/3 (2022) - Rápido e Seguro**  
- Usa o protocolo **QUIC** em vez de TCP, reduzindo o tempo de estabelecimento da conexão.  
- Melhor performance em conexões móveis e redes instáveis.  
- Comunicação totalmente criptografada por padrão.  

---

## **Importância do HTTP na Web**  
O HTTP evoluiu para atender às necessidades da web moderna, garantindo maior velocidade, segurança e eficiência. Ele é essencial para o funcionamento de sites, APIs e serviços em nuvem.  


---

## **Estrutura do HTTP**

### **Divisão dos Dados em uma Requisição HTTP**

Uma requisição HTTP é dividida em três partes principais:

---

1. **Linha de Requisição**: Contém o método HTTP, o caminho do recurso e a versão do protocolo.
   ```
   GET /index.html HTTP/1.1
   ```
2. **Cabeçalhos (Headers)**: Informações adicionais sobre a requisição, como tipo de conteúdo, autenticação, etc.
   ```
   Host: www.exemplo.com
   User-Agent: Mozilla/5.0
   ```

---

3. **Corpo (Body)**: Opcional, utilizado principalmente em requisições POST, PUT e PATCH para enviar dados ao servidor.
   ```json
   {
      "nome": "João",
      "idade": 30
   }
   ```
---

### **Resposta HTTP**

Uma resposta HTTP segue a mesma estrutura:

---

1. **Linha de Status**: Indica o código de status e a versão do protocolo.
   ```
   HTTP/1.1 200 OK
   ```
2. **Cabeçalhos (Headers)**: Informações sobre o servidor, tipo de conteúdo, cache, etc.
   ```
   Content-Type: text/html
   Content-Length: 1234
   ```

3. **Corpo (Body)**: O conteúdo da resposta, como HTML, JSON, XML, etc.

---

## **Métodos HTTP**

Os métodos HTTP definem a ação que deve ser realizada em um recurso.

---

### **Métodos Principais**

- **GET**: Recupera dados de um servidor sem alterar o estado do recurso.
  ```
  GET /produtos HTTP/1.1
  ```
- **POST**: Envia dados ao servidor para criar um novo recurso.
  ```
  POST /usuarios HTTP/1.1
  Content-Type: application/json

  {
      "nome": "Maria",
      "email": "maria@email.com"
  }
  ```
---
- **PUT**: Atualiza completamente um recurso existente no servidor.
  ```
  PUT /usuarios/1 HTTP/1.1
  Content-Type: application/json

  {
      "nome": "Maria Silva",
      "email": "maria@email.com"
  }
  ```
---

- **PATCH**: Atualiza parcialmente um recurso.
  ```
  PATCH /usuarios/1 HTTP/1.1
  Content-Type: application/json

  {
      "email": "maria.novo@email.com"
  }
  ```
---
- **DELETE**: Remove um recurso do servidor.
  ```
  DELETE /usuarios/1 HTTP/1.1
  ```
---

### **Outros Métodos Importantes**

- **HEAD**: Semelhante ao GET, mas sem retornar um corpo na resposta.
- **OPTIONS**: Retorna os métodos suportados pelo servidor.
- **CONNECT**: Cria um túnel para comunicação segura.
- **TRACE**: Depura conexões HTTP, retornando a requisição original do cliente.

---

## **Categorias de Status HTTP**

- **1xx – Informacional**
- **2xx – Sucesso**
- **3xx – Redirecionamento**
- **4xx – Erros do Cliente**
- **5xx – Erros do Servidor**

---

## **Códigos 1xx – Informacional**

- **100 Continue**: O cliente pode continuar enviando dados.
- **101 Switching Protocols**: O servidor aceita mudança de protocolo.
- **103 Early Hints**: O cliente pode pré-carregar recursos antes da resposta final.

---

## **Códigos 2xx – Sucesso**

- **200 OK**: Requisição bem-sucedida.
- **201 Created**: Recurso criado com sucesso.
- **202 Accepted**: A requisição foi aceita para processamento futuro.
- **204 No Content**: Requisição sem retorno de dados.

---

## **Códigos 3xx – Redirecionamento**

- **301 Moved Permanently**: Recurso foi movido permanentemente.
- **302 Found**: Redirecionamento temporário.
- **304 Not Modified**: Indica que o recurso não foi alterado.

---

## **Códigos 4xx – Erros do Cliente**

- **400 Bad Request**: Requisição inválida.
- **401 Unauthorized**: Requisição sem autenticação válida.
- **403 Forbidden**: Acesso negado.
- **404 Not Found**: O recurso não foi encontrado.
- **429 Too Many Requests**: Cliente excedeu o limite de requisições.

---

## **Códigos 5xx – Erros do Servidor**

- **500 Internal Server Error**: Erro interno do servidor.
- **502 Bad Gateway**: O servidor recebeu uma resposta inválida.
- **503 Service Unavailable**: Servidor temporariamente fora do ar.
- **504 Gateway Timeout**: O servidor demorou muito para responder.

---

## **Exemplos Práticos**

### **Testando Status Codes com cURL**

```sh
curl -i -X GET https://jsonplaceholder.typicode.com/posts/1
```

(Resposta esperada: `200 OK`)

```sh
curl -i -X POST https://jsonplaceholder.typicode.com/posts
```

(Resposta esperada: `201 Created`)

---

## **Implementação em Node.js com Express**

```javascript
const express = require('express');
const app = express();

app.get('/sucesso', (req, res) => {
  res.status(200).json({ message: 'Tudo certo!' });
});

app.get('/erro-cliente', (req, res) => {
  res.status(400).json({ error: 'Requisição inválida' });
});

app.get('/erro-servidor', (req, res) => {
  res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
```

---

## **Conclusão**

- A importância dos códigos HTTP para a web.
- Como usá-los corretamente para melhorar APIs e aplicações.
- Como evitar problemas comuns.
- Perguntas e respostas.

