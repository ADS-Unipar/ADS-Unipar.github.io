---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# MVC

---

## Origens do MVC

O Modelo-Visão-Controlador, ou MVC, é um padrão de arquitetura de software amplamente utilizado na indústria de desenvolvimento de software. 
Surgiu pela primeira vez na década de 1970, no contexto da Xerox PARC (Palo Alto Research Center), um centro de pesquisa de renome mundial. Embora não tenha sido originalmente concebido para o desenvolvimento de software, sua aplicação inicial estava relacionada à interação humano-computador em sistemas de software.

---

## Conceitos Fundamentais do MVC

O MVC divide um aplicativo em três componentes principais, cada um com sua responsabilidade específica:

**Model:** Representa a camada de dados da aplicação. Ele lida com a lógica de negócios e a interação com o banco de dados.

**View:** Responsável pela apresentação dos dados para o usuário. No contexto de APIs RESTful, a "View" geralmente é o JSON retornado pela API.

---

**Controller:** Atua como intermediário entre o Model e a View. Ele manipula as requisições HTTP, executa a lógica de negócios adequada e devolve a resposta apropriada para o cliente.

---

## Benefícios do Padrão MVC

O MVC oferece uma série de vantagens significativas para o desenvolvimento de software:

**Separação de preocupações (Separation of Concerns):** Ao dividir o aplicativo em modelos, visões e controladores distintos, o MVC promove a modularidade e a manutenibilidade do código. Cada componente é responsável por uma área específica do aplicativo, facilitando sua compreensão e modificação.

---

**Reutilização de Código:** Os componentes do MVC são independentes uns dos outros, o que permite reutilizar modelos e visões em diferentes partes do aplicativo ou mesmo em aplicativos separados.

---

**Facilidade de Teste:** Como cada componente é isolado, é mais fácil escrever testes automatizados para validar o comportamento do modelo, da visão e do controlador individualmente.

---

### Vamos aplicar isso na nossa aplicação backend 

- clonem o repositório

```bash
git clone https://github.com/ADS-Unipar/task-api.git
```

- criem a pasta `controllers`
- criem a pasta `routes`
- criem a pastar `infrastructure`
- mova o arquivo db.js para `infrastructure`
- renomeie o arquivo tasks.js para `taskModel.js`

---

... continua 😄

