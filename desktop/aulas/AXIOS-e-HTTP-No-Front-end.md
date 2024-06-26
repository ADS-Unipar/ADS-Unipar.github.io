---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

## AXIOS e HTTP No Front-end

---

###  O que é Axios e como usá-lo em aplicações web

* O Axios é uma biblioteca JavaScript para fazer requisições HTTP.
* É leve, flexível e fácil de usar.
* O Axios pode ser usado em aplicações web para:
    * Buscar dados de APIs
    * Enviar dados para servidores
    * Autenticar usuários
    * E muito mais!

---

### Vantagens de usar o Axios

* **Fácil de usar:** O Axios possui uma API simples e intuitiva.
* **Flexível:** O Axios pode ser usado para fazer qualquer tipo de requisição HTTP.
* **Extensível:** O Axios pode ser facilmente extendido com plugins.
* **Leve:** O Axios é uma biblioteca pequena e leve.
* **Popular:** O Axios é uma biblioteca popular e bem documentada.

---

###  Como fazer requisições HTTP com o Axios

###### criando uam intancia do axios

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

---

##### POST
```js

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```
---

### GET

```js

axios.get('/user/1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
//ou
const {data, response } = await axios.get('/user/1') 
```


---

### Vamos particar um pouco

- Crie uma aplicação react
```bash
    npx create-react-app react-axios
    cd react-axios
    npm i axios
    npm start
```
