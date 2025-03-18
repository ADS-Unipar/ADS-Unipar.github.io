---
marp: true
paginate: true
header: "Documentação e Contrato de API"
---

# Documentação e Contrato de API

## Introdução
A documentação e o contrato de uma API são essenciais para garantir que consumidores e desenvolvedores compreendam e utilizem corretamente os serviços oferecidos. 

Uma API bem documentada:
- Reduz erros de implementação
- Facilita a manutenção e evolução do sistema
- Melhora a experiência dos desenvolvedores
- Permite testes mais eficientes

---

## História e Criadores das Ferramentas

### REST e Roy Fielding
- Conceito de REST (Representational State Transfer)
- Introduzido por Roy Fielding em 2000 em sua tese de doutorado
- Define princípios arquiteturais para sistemas distribuídos
- Base para a comunicação de APIs modernas

### OpenAPI (Swagger)
- Criado por Tony Tam em 2011
- Iniciativa para padronizar a documentação de APIs RESTful
- Mantido atualmente pela OpenAPI Initiative, ligada à Linux Foundation
- Ferramentas associadas: Swagger UI, Swagger Editor e Swagger Codegen

### REST Client
- Extensão para VS Code que permite testes de APIs diretamente no editor
- Suporte a múltiplos métodos HTTP (GET, POST, PUT, DELETE, etc.)
- Alternativa prática ao Postman para requisições rápidas

---

## Importância da Documentação e Contrato de API

### Benefícios da documentação bem feita:
✅ **Facilidade de Uso** - Desenvolvedores consomem a API mais rapidamente  
✅ **Padronização** - Definição clara de endpoints, métodos HTTP e formatos de resposta  
✅ **Manutenção Simplificada** - Evita ambiguidades no desenvolvimento  
✅ **Testes Automatizados** - Ferramentas como Swagger, Postman e REST Client ajudam na validação  
✅ **Melhora a Comunicação** - Alinha as expectativas entre times de frontend e backend  
✅ **Facilita a Adoção** - Empresas e desenvolvedores terceiros conseguem integrar a API com mais facilidade

---

## Exemplo Prático: Usando o REST Client

### Instalação
1. Abra o **VS Code**
2. Acesse a aba **Extensões**
3. Procure por "REST Client"
4. Instale a extensão
5. Crie um arquivo `.http` na raiz do projeto

---

## Criando uma Requisição no REST Client

Criamos um arquivo `api.http` e adicionamos o seguinte código:

---

```http
### Requisição GET - Buscar um post específico
GET https://jsonplaceholder.typicode.com/posts/1
Accept: application/json

### Requisição POST - Criar um novo post
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json

{
  "title": "Novo Post",
  "body": "Conteúdo do post",
  "userId": 1
}

### Requisição PUT - Atualizar um post existente
PUT https://jsonplaceholder.typicode.com/posts/1
Content-Type: application/json

{
  "id": 1,
  "title": "Post Atualizado",
  "body": "Conteúdo atualizado",
  "userId": 1
}

### Requisição DELETE - Remover um post
DELETE https://jsonplaceholder.typicode.com/posts/1
```

---

## Executando a Requisição
1. **Abra** o arquivo `api.http` no VS Code
2. **Clique** no botão **Send Request** acima da requisição desejada
3. **Observe** a resposta retornada no painel do REST Client

### Exemplo de Resposta para a Requisição GET
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit suscipit..."
}
```

---

## Ferramentas Complementares

### 1. Postman
- Interface gráfica para testar APIs
- Permite salvar coleções de requisições
- Suporta testes automatizados e geração de documentação

---

### 2. Swagger UI
- Permite visualizar e testar endpoints documentados com OpenAPI
- Facilita a navegação e entendimento das APIs

---

### 3. Insomnia
- Alternativa ao Postman, focada em simplicidade e eficiência
- Suporta GraphQL e múltiplos ambientes

---

## Considerações Finais
- A documentação e contrato de API garantem comunicação eficiente entre sistemas
- Ferramentas como OpenAPI, Postman e REST Client facilitam o consumo e validação das APIs
- O uso de ferramentas adequadas melhora a experiência dos desenvolvedores e acelera a adoção da API

📌 **Dica:** Sempre mantenha a documentação atualizada e bem estruturada para facilitar a manutenção e adoção da API!

---

## Obrigado! 🙌
Dúvidas?

