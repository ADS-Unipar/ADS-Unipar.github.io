---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

<style >
pre {
   font-size: 40px;
}
</style>

# Continuando...

Hoje, vamos explorar algumas operações fundamentais em JavaScript que são essenciais para manipulação de dados e estruturas. Estas operações são ferramentas poderosas que podem ser utilizadas para lidar com arrays, strings e objetos de forma eficiente e concisa.

---

### map

**Definição:** O método `map` é utilizado para percorrer todos os elementos de um array e aplicar uma função a cada um, retornando um novo array com os resultados.

```js
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((num) => num * num);
// Resultado: [1, 4, 9, 16]
```

---

### Reduce

**Definição:** O método `reduce` permite reduzir um array a um único valor, acumulando os resultados da aplicação de uma função a cada elemento.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, atual) => total + atual, 0);
// Resultado: 10
```

---

### Find

**Definição:** O método find é utilizado para buscar o primeiro elemento que satisfaça uma condição especificada em um array.

```js
const numbers = [1, 2, 3, 4];
const evenNumber = numbers.find((num) => num % 2 === 0);
// Resultado: 2
```

---

### Filter

**Definição:** O método `filter` cria um novo array contendo todos os elementos que atendem a uma condição especificada.

```js
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// Resultado: [2, 4]
```

---

### Includes

**Definição:** O método `includes` verifica se um array ou uma string contém um determinado elemento e retorna `true` ou `false` conforme o resultado.

```js
const numbers = [1, 2, 3, 4];
const hasThree = numbers.includes(3);
// Resultado: true
```

---

### Split e Join

- `split` divide uma string em um array de substrings com base em um delimitador
- `join` faz o contrário, unindo os elementos de um array em uma única string.

```js
const sentence = 'Olá, mundo!';
const words = sentence.split(' ');
// Resultado: ['Olá,', 'mundo!']

const newSentence = words.join(' ');
// Resultado: 'Olá, mundo!'
```

---

### Spread Operator

**Definição:** O operador spread permite espalhar os elementos de um array ou os pares chave-valor de um objeto em outro.

```js
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
// Resultado: [1, 2, 3, 4, 5]
```

---

### JSON.parse e JSON.stringify

**Definição:** `JSON.parse` converte uma string JSON em um objeto JavaScript, enquanto `JSON.stringify` converte um objeto JavaScript em uma string JSON.

```js
const jsonString = '{"name": "John", "age": 30}';
const parsedObject = JSON.parse(jsonString);
const person = { name: 'Jane', age: 25 };
const jsonStringified = JSON.stringify(person);
```

_obs: Esse dois também são usado para fazer uma [copia profunda de uma objeto](https://www.freecodecamp.org/portuguese/news/como-diferenciar-entre-copias-profundas-e-superficiais-em-javascript/#:~:text=Uma%20c%C3%B3pia%20profunda%20significa%20que,como%20o%20JavaScript%20armazena%20valores.)_

---

### Replace

**Definição:** replace substitui uma substring por outra em uma string.

```js
const frase = 'Olá, mundo!';
const novaFrase = frase.replace('mundo', 'amigo');
// Resultado: 'Olá, amigo!'
```

---

Querem aprender mais sobre métodos do javascript acessem

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects

---

### Bora brincar um pouco

https://gist.github.com/oAllanWeb/2758ee182c52201366b451900c6bd485
