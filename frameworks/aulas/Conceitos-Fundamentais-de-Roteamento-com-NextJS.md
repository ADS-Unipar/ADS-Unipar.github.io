---
marp: true
theme: default
paginate: true
---

# Conceitos Fundamentais de Roteamento na Web e No Next.js

## O que é Roteamento?

- **Roteamento** é o processo de determinar qual conteúdo ou funcionalidade será exibido para o usuário quando ele acessa uma URL específica.
- Um sistema de roteamento interpreta a **URL** e direciona a requisição para o **componente** ou **controlador** correspondente.

---

## Tipos de Roteamento

- **Roteamento de Cliente (Client-side Routing):**
  - Controlado pelo navegador.
  - Aplicações single-page (SPA) usam esse método para alterar a interface sem recarregar a página.
  
- **Roteamento de Servidor (Server-side Routing):**
  - Requisições de URL são tratadas pelo servidor, que retorna uma página HTML completa.

---

## Exemplos de Roteamento na Web

- **Server-side Routing (SSR):**
  - O servidor responde com uma nova página para cada requisição.
  - Exemplo: Tradicionalmente usado em PHP, Ruby on Rails.

- **Client-side Routing (CSR):**
  - Requisições tratadas no cliente, apenas a parte dinâmica da página é atualizada.
  - Exemplo: Aplicações em React, Angular, Vue.

---

## Next.js: O Melhor dos Dois Mundos

- Next.js oferece uma **abordagem híbrida**, suportando tanto **Server-side Rendering (SSR)** quanto **Client-side Rendering (CSR)**.
- Com o **App Router** (a partir da versão 13), o Next.js aprimora o processo de roteamento ao incorporar recursos mais modernos.

---

# O App Router no Next.js

## O que é o App Router?

- Introduzido no **Next.js 13**, o **App Router** oferece uma nova maneira de estruturar a aplicação.
- Prioriza **renderização hierárquica**, **layouts compartilhados** e separação de rotas no sistema de pastas.

---

## Estrutura de Pastas no App Router

- O App Router usa uma estrutura de arquivos específica:
  - **app/**: Diretório principal onde rotas e layouts são definidos.
  - **page.tsx**: Cada arquivo `page.tsx` define uma página e é mapeado diretamente para uma rota.
  - **layout.tsx**: Define o layout que pode ser compartilhado entre várias páginas.

```bash
app/
  ├─ layout.tsx
  ├─ page.tsx
  ├─ about/
  │   ├─ page.tsx
  └─ dashboard/
      ├─ layout.tsx
      ├─ page.tsx
```

---

## Rotas Dinâmicas

- Para criar rotas dinâmicas (parâmetros de rota):
  - Utilize colchetes no nome do arquivo.
  - Exemplo: `app/products/[id]/page.tsx` para rotas como `/products/123`.

```bash
app/
  └─ products/
      └─ [id]/
          └─ page.tsx
```

---

## Rotas Aninhadas

- Rotas aninhadas permitem criar caminhos dentro de caminhos. Exemplo:

```bash
app/
  └─ blog/
      ├─ page.tsx
      └─ [slug]/
          └─ page.tsx
```

- Isso permite URLs como `/blog` para listar posts e `/blog/first-post` para exibir um post específico.

---

## Layouts Aninhados

- O **App Router** facilita o uso de layouts persistentes e aninhados, sem re-renderizar partes da página que são compartilhadas entre rotas.
- Exemplo: Um layout comum para várias páginas de um dashboard.

```bash
app/
  └─ dashboard/
      ├─ layout.tsx
      ├─ page.tsx
      └─ settings/
          └─ page.tsx
```

---

## Navegação e Links

- Use o componente **Link** para navegar entre rotas no Next.js sem recarregar a página.
- Exemplo de navegação:

```jsx
import Link from 'next/link'

function Home() {
  return (
    <nav>
      <Link href="/about">Sobre</Link>
      <Link href="/contact">Contato</Link>
    </nav>
  )
}
```

---

## Server Components e Client Components

- O **App Router** usa uma abordagem de **Server Components** por padrão, mas você pode definir componentes como **Client Components**.
- Para um componente de cliente, adicione `'use client'` no topo do arquivo.

```jsx
'use client'

export default function Button() {
  return <button>Clique Aqui</button>
}
```

---

## Conclusão

- O **App Router** no Next.js permite uma abordagem moderna para roteamento, combinando flexibilidade e performance.
- Suporta layouts aninhados, rotas dinâmicas e facilita a criação de aplicativos web escaláveis e fáceis de manter.

---
# Atividade

- Crie uma aplicação com nextJS que consuma uma api ex: https://rickandmortyapi.com/

- Aplicação deve ter no mínimo  3 paginas
  - uma home
  - uma listagem com paginação que consuma a api
  - e uma detalhamento do item de lista
  - usem sua criatividade
  - suba no github
  - quando estiver pronto vou ajudar a servir isso num servidor gratuito
