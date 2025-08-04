---
marp: true
theme: default
paginate: true
backgroundColor: #ffffff
---


## 1. **Introdução ao Next.js**

---
   - **O que é?**  
     Next.js é um framework **React** que simplifica a criação de aplicações full-stack, oferecendo soluções otimizadas para SEO, performance, e renderização de páginas no lado do servidor. Ele permite criar tanto aplicações estáticas quanto dinâmicas de forma eficiente.
 ---

   - **Criado por**  
     Desenvolvido pela **Vercel**, Next.js foi projetado para melhorar a experiência do desenvolvedor, focando na velocidade de desenvolvimento e otimizações automáticas.
  ---

   - **Por que usar?**  
     A principal vantagem de usar Next.js é a flexibilidade para escolher entre diferentes estratégias de renderização (SSR, SSG e ISR). Além disso, ele possui um sistema de roteamento fácil de usar e otimizações automáticas de performance.

---

## 2. **Renderização no Next.js**

   - **SSR (Server-Side Rendering)**  
     No **SSR**, as páginas são geradas no servidor a cada requisição. Isso é útil para páginas dinâmicas onde o conteúdo precisa estar sempre atualizado. Por exemplo, uma página de produto que muda com base nos estoques pode ser renderizada com SSR para garantir que o usuário veja dados atuais.
---
   - **SSG (Static Site Generation)**  
     O **SSG** gera páginas estáticas no momento da build. Essas páginas podem ser servidas rapidamente e são ideais para conteúdo que não muda frequentemente, como blogs ou páginas de produtos estáticos. Uma vez gerada, a página é servida como HTML estático.
---
   - **ISR (Incremental Static Regeneration)**  
     O **ISR** permite atualizar páginas estáticas sem precisar recompilar todo o site. Isso é útil para páginas que precisam ser atualizadas de tempos em tempos, sem a necessidade de recompilar o projeto inteiro.

---

## 3. **Arquitetura de Páginas**

   - **File-based routing**  
     O roteamento no Next.js é baseado nos arquivos que você cria dentro da pasta `pages/`. Cada arquivo representa uma rota, como `pages/index.js` para a rota `/` e `pages/about.js` para a rota `/about`.
---
   - **Dynamic routing**  
     Você pode criar rotas dinâmicas usando colchetes no nome do arquivo, como `[id].js`. Isso permite rotas como `/products/123`, onde `123` seria um parâmetro dinâmico.
---
   - **API Routes**  
     Dentro da pasta `pages/api/`, você pode criar rotas de API que funcionam como endpoints de back-end. Cada arquivo dentro dessa pasta corresponde a uma rota de API. Por exemplo, `pages/api/users.js` serviria a rota `/api/users`.

---

## 4. **Data Fetching**

   - **getStaticProps**  
     Essa função é usada para gerar dados estáticos em tempo de build. Se você tiver uma página de blog, pode usar `getStaticProps` para buscar dados de posts e gerar páginas estáticas para cada post.
---
   - **getServerSideProps**  
     É utilizado para SSR. A função é executada no servidor a cada requisição e é ideal para páginas que precisam estar sempre atualizadas com informações em tempo real.
---
   - **getStaticPaths**  
     Utilizado em conjunto com `getStaticProps`, ele define quais páginas dinâmicas devem ser geradas de forma estática durante o build. Isso é útil em sites de comércio eletrônico com várias páginas de produtos.

---

## 5. **Imagem Otimizada**

   - O componente `Next/Image` é uma das grandes inovações do Next.js. Ele otimiza automaticamente as imagens para melhorar o desempenho, oferecendo **lazy loading**, redimensionamento automático com base no dispositivo e compressão de imagens para reduzir o tempo de carregamento.

---

## 6. **Suporte a CSS e Estilos**

   - **CSS Modules**  
     Permite que você escreva CSS para componentes individuais com escopo local. Ao importar um arquivo CSS como `styles.module.css`, você evita o risco de colisões de classes.

   - **Styled JSX**  
     O Next.js vem com suporte nativo ao CSS-in-JS através do `styled-jsx`. Isso permite que você escreva CSS dentro dos componentes, com escopo local, diretamente no arquivo JSX.

---

   - **Compatibilidade**  
     Além das soluções internas, o Next.js suporta bibliotecas de estilo populares como **Sass**, **Less**, e **TailwindCSS**.

---

## 7. **Rotas App Directory (Next.js 13+)**

   - O **App Directory**, introduzido no Next.js 13, permite organizar componentes e layouts de uma forma mais moderna, diferenciando-se da estrutura tradicional `pages/`. O App Directory permite que você defina layouts reutilizáveis e crie **layouts aninhados** para renderizações mais eficientes.
   
   - **Segmentação**  
     Ao dividir sua aplicação em segmentos com `app/`, você ganha maior controle sobre como diferentes partes do seu site são carregadas e exibidas.

---

## 8. **Middleware**

   - O **Middleware** no Next.js é executado antes da requisição ser processada, o que permite executar código para redirecionamentos, autenticação, ou validação de tokens JWT, por exemplo. Ele é configurado no arquivo `middleware.ts`.

---

## 9. **Autenticação e Autorização**

   - **NextAuth.js** é uma biblioteca de autenticação completa e pronta para o Next.js. Ela permite integrar provedores de autenticação como Google, GitHub, e também suporte a login por e-mail e senha. O NextAuth facilita a implementação de autenticação segura tanto em SSR quanto SSG.

---

## 10. **Suporte ao Typescript**

   - O Next.js tem suporte nativo ao **Typescript**. Ao iniciar um projeto com `npx create-next-app`, você pode habilitar o Typescript automaticamente, e o framework configura tudo por você, proporcionando verificação de tipos durante o desenvolvimento.

---

## 11. **Construindo Aplicações Full-stack**

   - Com **API Routes**, você pode criar o back-end diretamente na aplicação Next.js. Isso elimina a necessidade de um servidor separado, facilitando o desenvolvimento de APIs REST.
   
   - Você pode combinar **SSR** com a busca de dados em banco de dados. Ao usar `getServerSideProps`, por exemplo, você pode buscar dados diretamente do banco em tempo de requisição e exibi-los na página de forma segura.

---

## 12. **Deploy Simples e Otimizado**

   - O Next.js tem uma integração perfeita com a **Vercel**, a plataforma que criou o framework. Isso permite que você faça deploy com um clique e usufrua de funcionalidades como atualizações automáticas e otimizações de performance.
   
   - Além da Vercel, Next.js também oferece suporte para deploy em outros serviços, como AWS, Azure e Google Cloud.

---

## 13. **Conclusão**

   - O Next.js é um framework poderoso e flexível que traz grandes vantagens em termos de SEO, performance e experiência do desenvolvedor. Com seu suporte para SSR, SSG, ISR, API Routes, e integração com várias tecnologias, ele é uma escolha robusta para a construção de aplicações web modernas.

---


# Vamos iniciar uma aplicação NextJS

---
### 1. **Instale o Node.js**
Certifique-se de ter o **Node.js** instalado. Você pode verificar isso com o comando:

```bash
node -v
```

Se não tiver o Node.js, faça o download da versão mais recente [aqui](https://nodejs.org/).

---

### 2. **Crie um Projeto Next.js**
Com o Node.js instalado, utilize o comando `npx` para criar um novo projeto Next.js:

```bash
npx create-next-app@latest
```

Siga as instruções no terminal, como o nome do projeto e o tipo de setup (TypeScript, ESLint, Tailwind, etc.).

---

### 3. **Escolha de Arquitetura (App Router ou Pages Router)**
O Next.js 14 introduz uma nova arquitetura chamada **App Router**. Ao iniciar um novo projeto, você pode escolher entre:

- **Pages Router (Clássico)**: A estrutura antiga, que usa a pasta `pages/` para rotas.
- **App Router (Novo)**: Nova arquitetura baseada na pasta `app/`, com suporte a layouts aninhados, segmentação de rotas e melhorias de performance.

Ao iniciar o projeto, você verá a opção de escolher qual arquitetura deseja usar.

---

### 4. **Navegue para o Diretório do Projeto**
Após a criação, navegue para o diretório do projeto:

```bash
cd nome-do-seu-projeto
```

---

### 5. **Inicie o Servidor de Desenvolvimento**
Execute o servidor de desenvolvimento local com:

```bash
npm run dev
```

Por padrão, a aplicação será iniciada em [http://localhost:3000](http://localhost:3000).

---

### 6. **Estrutura Inicial do Projeto**

Se você escolheu o **App Router**, sua estrutura inicial será algo assim:

```
my-next-app/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── styles/
├── next.config.js
├── package.json
└── tsconfig.json (se for TypeScript)
```

- A pasta `app/` é usada para definir rotas, layouts e segmentação de rotas.
- O arquivo `layout.tsx` é o layout principal do seu aplicativo.
- O arquivo `page.tsx` define a rota `/`.

---

### 7. **Configuração Opcional (TypeScript, ESLint, Tailwind, etc.)**

Durante a criação do projeto, você pode optar por usar **TypeScript** e **ESLint**. Se escolher essas opções, o Next.js criará automaticamente os arquivos de configuração (`tsconfig.json`, `.eslintrc.js`).

---

### 8. **Pronto para Desenvolver!**

Com tudo configurado, você está pronto para começar a desenvolver sua aplicação no Next.js 14. Edite os arquivos dentro da pasta `app/` (ou `pages/`, se tiver escolhido o Pages Router) e veja as mudanças refletidas automaticamente em tempo real.

Se precisar de mais alguma ajuda sobre o Next.js 14 ou sobre funcionalidades específicas, sinta-se à vontade para perguntar!