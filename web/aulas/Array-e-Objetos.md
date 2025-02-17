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


## O que são Arrays?

- Arrays são listas ordenadas de elementos.
- Podem conter diferentes tipos de dados (números, strings, objetos, etc.).
- A indexação começa do `0`.

```javascript
const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1
```
---


## Métodos de Arrays


- `push()`: Adiciona um elemento ao final.
  ```javascript
  const frutas = ["maçã", "banana"];
  frutas.push("laranja");
  console.log(frutas); // ["maçã", "banana", "laranja"]
  ```

---
- `pop()`: Remove o último elemento.
  ```javascript
  frutas.pop();
  console.log(frutas); // ["maçã", "banana"]
  ```
---
- `shift()`: Remove o primeiro elemento.
  ```javascript
  frutas.shift();
  console.log(frutas); // ["banana"]
  ```

---

- `unshift()`: Adiciona um elemento no início.
  ```javascript
  frutas.unshift("uva");
  console.log(frutas); // ["uva", "banana"]
  ```


---
- `sort()`: Ordena os elementos do array.
  ```javascript
  const numerosOrdenados = [3, 1, 4, 1, 5, 9].sort((a, b) => a - b);
  console.log(numerosOrdenados); // [1, 1, 3, 4, 5, 9]
  ```
---

- `slice()`: Retorna uma parte do array sem modificar o original.
  ```javascript
  const subArray = numeros.slice(1, 4);
  console.log(subArray); // [2, 3, 4]
  ```
---

- `splice()`: Modifica um array adicionando ou removendo elementos.
  ```javascript
  numeros.splice(2, 1, 99);
  console.log(numeros); // [1, 2, 99, 4, 5]
  ```
---

- `map()`:O método `map` é utilizado para percorrer todos os elementos de um array e aplicar uma função a cada um, retornando um novo array com os resultados.

```js
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((num) => num * num);
// Resultado: [1, 4, 9, 16]
```

---

 - `Reduce():` O método `reduce` permite reduzir um array a um único valor, acumulando os resultados da aplicação de uma função a cada elemento.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, atual) => total + atual, 0);
// Resultado: 10
```

---

- `find():` O método find é utilizado para buscar o primeiro elemento que satisfaça uma condição especificada em um array.

```js
const numbers = [1, 2, 3, 4];
const evenNumber = numbers.find((num) => num % 2 === 0);
// Resultado: 2
```

---

- `filter()`: O método `filter` cria um novo array contendo todos os elementos que atendem a uma condição especificada.

```js
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// Resultado: [2, 4]
```

---

- `includes()`: O método `includes` verifica se um array ou uma string contém um determinado elemento e retorna `true` ou `false` conforme o resultado.

```js
const numbers = [1, 2, 3, 4];
const hasThree = numbers.includes(3);
// Resultado: true
```

---

### Split e Join

- `split()` divide uma string em um array de substrings com base em um delimitador
- `join()` faz o contrário, unindo os elementos de um array em uma única string.

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

## O que são Objetos?

- Objetos são coleções de pares `chave: valor`.
- Podem armazenar qualquer tipo de dado.

```javascript
const pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Engenheira"
};
console.log(pessoa.nome); // "Ana"
```
---

## Manipulação de Objetos

- Adicionar propriedades:
  ```javascript
  pessoa.sobrenome = "Silva";
  console.log(pessoa);
  // { nome: "Ana", idade: 25, profissao: "Engenheira", sobrenome: "Silva" }
  ```
---

- Remover propriedades:
  ```javascript
  delete pessoa.profissao;
  console.log(pessoa);
  // { nome: "Ana", idade: 25, sobrenome: "Silva" }
  ```
---

- Iterar sobre propriedades:
  ```javascript
  for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
  ```

---

## Arrays de Objetos

- Combinação de arrays e objetos.

```javascript
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 30 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes); // ["Ana", "Carlos"]
```
---

## Conclusão

- Arrays e objetos são fundamentais em JavaScript.
- Entender seus métodos facilita a manipulação de dados.
- Combine arrays e objetos para estruturar melhor as informações.



---

Querem aprender mais sobre métodos do javascript acessem

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects

---

### Bora brincar um pouco

Usem os dados abaixo:

https://gist.github.com/oAllanWeb/2758ee182c52201366b451900c6bd485

Aqui estão quatro atividades baseadas na lista de pessoas em JavaScript:  


---

### **Atividade 1: Filtrando pessoas por gênero**
Crie uma função chamada `filtrarPorGenero(lista, genero)` que recebe um array de pessoas e um gênero (`"Male"` ou `"Female"`) e retorna uma nova lista contendo apenas as pessoas do gênero especificado.  

**Exemplo de uso:**  
```js
const mulheres = filtrarPorGenero(pessoas, "Female");
console.log(mulheres);
```

---

### **Atividade 2: Calculando o IMC das pessoas**
Crie uma função chamada `calcularIMC(pessoa)` que recebe um objeto representando uma pessoa e retorna seu Índice de Massa Corporal (IMC), calculado pela fórmula:  
`IMC = peso / (altura²)`  
Em seguida, utilize essa função para criar um novo array contendo o nome completo de cada pessoa junto com seu IMC.  

---

**Exemplo de uso:**  
```js
const listaIMC = pessoas.map(pessoa => ({
  nome: `${pessoa.first_name} ${pessoa.last_name}`,
  imc: calcularIMC(pessoa)
}));
console.log(listaIMC);
```

---

### **Atividade 3: Encontrando a pessoa mais velha**
Crie uma função chamada `pessoaMaisVelha(lista)` que recebe um array de pessoas e retorna o nome completo e a idade da pessoa mais velha.  

---

**Exemplo de uso:**  
```js
const maisVelha = pessoaMaisVelha(pessoas);
console.log(maisVelha);
```

---

### **Atividade 4: Agrupando pessoas por faixa etária**
Crie uma função chamada `agruparPorFaixaEtaria(lista)` que divide as pessoas em três grupos:  
- Crianças (0 a 12 anos)  
- Adolescentes (13 a 17 anos)  
- Adultos (18 anos ou mais)  

O retorno deve ser um objeto contendo essas três categorias com listas de nomes.  

---

**Exemplo de uso:**  
```js
const grupos = agruparPorFaixaEtaria(pessoas);
console.log(grupos);
```

---

Essas atividades envolvem manipulação de arrays e objetos, além do uso de métodos como `.filter()`, `.map()`, e `.reduce()`, reforçando conceitos essenciais de JavaScript.