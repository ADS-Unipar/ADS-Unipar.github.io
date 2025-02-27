---
marp: true
theme: default
class: center, middle
---

# Consumo de APIs de IA com Node.js

## Introdução
Aprenda a consumir APIs de IA utilizando Node.js com exemplos práticos de DeepSeek e OpenAI API.

---

## Configuração do Ambiente

### Instalando Node.js e npm
Se ainda não possui o Node.js instalado, baixe a versão mais recente [aqui](https://nodejs.org/).

Verifique a instalação com:
```sh
node -v
npm -v
```

### Criando um projeto Node.js
```sh
mkdir consumo-ia-apis && cd consumo-ia-apis
npm init -y
```
---

### Instalando dependências
```sh
npm install openai axios dotenv
```

---

## Consumindo a DeepSeek API

### Configuração da API Key
Registre-se na [DeepSeek AI](https://deepseek.com/) e obtenha sua **API Key**.

Adicione ao `.env`:
```sh
DEEPSEEK_API_KEY=sua_api_key
```
---

### Criando um script para consumir a API
```javascript
require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.DEEPSEEK_API_KEY;
const API_URL = 'https://api.deepseek.com/v1/chat/completions';

async function getDeepSeekResponse(prompt) {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "deepseek-chat",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7
            },
            {
                headers: { Authorization: `Bearer ${API_KEY}` }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error('Erro ao chamar DeepSeek API:', error.response?.data || error.message);
    }
}

getDeepSeekResponse("Explique a Teoria da Relatividade");
```

---

## Consumindo a OpenAI API

### Configuração da API Key
Registre-se na [OpenAI](https://openai.com/) e obtenha sua **API Key**.

Adicione ao `.env`:
```sh
OPENAI_API_KEY=sua_api_key
```
---

### Criando um script para consumir a API usando OpenAI JS SDK
```javascript
require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getOpenAIResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error('Erro ao chamar OpenAI API:', error.response?.data || error.message);
    }
}

getOpenAIResponse("O que é Machine Learning?");
```

---

## Comparando Resultados

Rode os dois scripts e compare as respostas geradas pelos modelos de IA.

---

## Tratamento de Erros e Melhores Práticas

- **Erros de rede**: Usar `try/catch` para capturar falhas na requisição.
- **Limites de requisição**: Algumas APIs possuem limites diários ou por minuto.
- **Segurança**: Nunca expor a API Key publicamente.

---


## Conclusão
Agora você sabe como consumir APIs de IA usando Node.js! Esse conhecimento pode ser expandido para outras APIs e tarefas mais complexas.

### Recursos Adicionais
- [Documentação da DeepSeek API](https://deepseek.com/docs)
- [Documentação da OpenAI API](https://platform.openai.com/docs/)

---
## Trabalho

Crie um programa que receba perguntas via linha de comando e escolha automaticamente se quer consultar o DeepSeek ou o OpenAI baseado no tipo de pergunta.

- Suba o projeto no git hub 
- E envie no [Forms](https://docs.google.com/forms/d/e/1FAIpQLSfrpQtzq01n2ZomaiGQXK3WQgUPakCI9Pwq4Wx8ye_LTljqlQ/viewform?usp=dialog) 