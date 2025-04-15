---
marp: true
theme: default
paginate: true
class: invert
---

# Introdução ao React e seus Hooks

🚀 Aula completa com fundamentos, exemplos práticos e explicações detalhadas dos principais Hooks.

---

## O que é React?

- Biblioteca JavaScript criada pelo Facebook
- Focada em construir interfaces de usuário (UI)
- Utiliza a ideia de **componentes reutilizáveis**
- Utiliza **JSX**, uma mistura de HTML com JavaScript

---

## Por que usar React?

- Componentização
- Virtual DOM
- Reatividade
- JSX
- Grande comunidade e ecossistema

---

## JSX – JavaScript XML

```jsx
const Ola = () => <h1>Olá, React!</h1>;
```

Permite escrever interfaces declarativas misturando HTML com lógica JavaScript.

---

## Componentes

```jsx
function BemVindo(props) {
  return <h2>Bem-vindo, {props.nome}!</h2>;
}
```

Funções que retornam JSX. São reutilizáveis e isoladas.

---

## Props

- São valores passados para o componente
- Deixam o componente dinâmico e reutilizável

```jsx
<Titulo texto="React é incrível!" />
```

---

## Estado (`useState`)

```jsx
const [contador, setContador] = useState(0);
```

Permite armazenar e atualizar valores reativos.

---

## `useEffect`

```jsx
useEffect(() => {
  console.log('Montou!');
  return () => console.log('Desmontou!');
}, []);
```

Lida com efeitos colaterais: API, timers, DOM, etc.

---

## `useContext`

```jsx
const tema = useContext(TemaContexto);
```

Permite acessar dados globais sem repassar props manualmente.

---

## `useRef`

```jsx
const inputRef = useRef(null);
inputRef.current.focus();
```

Cria uma referência mutável que persiste entre renders.

---

## `useMemo`

```jsx
const resultado = useMemo(() => calcularCaro(valor), [valor]);
```

Memoriza o resultado de funções pesadas.

---

## `useCallback`

```jsx
const handleClick = useCallback(() => {
  console.log("Clicou!");
}, []);
```

Evita recriação de funções a cada render.

---

## `useReducer`

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Gerencia estado complexo com uma função redutora.

---

## `useLayoutEffect`

Executa **antes da pintura do DOM**, útil para medir elementos antes do usuário ver.

---

## Regras dos Hooks

- Só usar em componentes React
- Não usar dentro de loops ou condições
- Sempre usar a mesma ordem
- Começar com `use`

---

## Exercício Proposto

Crie um `Cronômetro` que:

- Usa `useState` para o tempo
- Usa `useEffect` para iniciar/limpar
- Usa `useRef` para armazenar o ID do `setInterval`

---

## Conclusão

- React permite UIs declarativas e reativas
- Hooks simplificam a lógica e mantêm o código limpo
- Dominar os Hooks é essencial para escalar aplicações

---

# Obrigado!  

