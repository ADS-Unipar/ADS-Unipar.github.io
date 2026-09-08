---
marp: true
theme: default
paginate: false

style: |
  section {
    font-family: 'Calibri', 'Century Gothic', sans-serif;
    font-size: 26px;
    text-align: justify;
    color: #272425;
    background-image: url('bg-padrao.png');
    background-size: cover;
    background-position: center;
  }
  h1 { font-family: 'Century Gothic', 'Calibri', sans-serif; font-size: 32px; font-weight: bold; color: #272425; text-align: left; }
  h2 { font-family: 'Century Gothic', 'Calibri', sans-serif; font-size: 29px; font-weight: bold; color: #C22820; text-align: left; }
  h3 { font-family: 'Calibri', 'Century Gothic', sans-serif; font-size: 26px; font-weight: bold; color: #5C2034; text-align: left; }
  strong { color: #C22820; }
  em { color: #5C2034; }
  code { font-size: 22px; background-color: #f5f5f5; color: #5C2034; }
  pre { font-size: 20px; background-color: #f5f5f5; border-left: 4px solid #C22820; }
  table { font-size: 24px; }
  th { background-color: #C22820; color: #ffffff; font-weight: bold; }
  td { border-bottom: 1px solid #e0e0e0; }
  ul, ol { text-align: justify; }
  li { margin-bottom: 6px; }
  blockquote { border-left: 4px solid #EB8087; background-color: #fdf2f2; padding: 10px 20px; }
  section.bg-capa { background-image: url('bg-capa.png'); background-size: cover; background-position: center; text-align: center; justify-content: center; align-items: center; }
  section.bg-capa h1 { text-align: center; font-size: 32px; color: #C22820; }
  section.bg-capa h2 { text-align: center; font-size: 29px; color: #5C2034; }
  section.bg-fim { background-image: url('bg-fim.png'); background-size: cover; background-position: center; }
---

<!-- _class: bg-capa -->

# Aula 15

## Responsividade

**Unidade 3 — Web Mobile e PWA**

<!--
FALA DO PROFESSOR:

Responsividade é a capacidade de uma aplicação web se adaptar a diferentes tamanhos de tela. Não é uma tecnologia — é uma abordagem de design e desenvolvimento.

Nesta aula, vamos estudar como funciona a responsividade, quais são as técnicas envolvidas e como implementar layouts que funcionam em qualquer dispositivo.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o conceito de design responsivo;
- **Explicar** como funcionam as media queries do CSS;
- **Aplicar** Flexbox e Grid para layouts responsivos;
- **Implementar** um layout que se adapta a diferentes tamanhos de tela.

**Taxonomia de Bloom:** Compreender, Explicar, Aplicar, Implementar.

---

## O que é Responsividade?

- A aplicação se **adapta** ao tamanho da tela do dispositivo;
- O mesmo código HTML funciona em **desktop, tablet e celular**;
- O layout **reorganiza** automaticamente;
- Imagens e textos **redimensionam** proporcionalmente.

> **Antes:** Sites separados para desktop (www.site.com) e mobile (m.site.com).
> **Agora:** Um único site responsivo para todos os dispositivos.

<!--
FALA DO PROFESSOR:

Antes do design responsivo, as empresas mantinham dois sites: um para desktop e outro para mobile. Isso significava duas bases de código, duas manutenções, duas equipes.

Com o design responsivo, um único site se adapta a todos os dispositivos. O HTML é o mesmo. O CSS é o mesmo. O JavaScript é o mesmo. O que muda é o layout — que se reorganiza automaticamente graças a técnicas como media queries, Flexbox e Grid.
-->

---

## Media Queries

```css
.container { /* Estilo padrão (mobile first) */
  display: flex;
  flex-direction: column;
  padding: 16px;
}
@media (min-width: 768px) { /* Tablet (768px ou mais) */
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    width: 50%;
  }
}
@media (min-width: 1024px) { /* Desktop (1024px ou mais) */
  .card {
    width: 33.33%;
  }
}
```

<!--
FALA DO PROFESSOR:

Media queries são a base do design responsivo. Elas permitem aplicar estilos diferentes com base nas características do dispositivo — largura da tela, orientação (retrato ou paisagem), resolução, etc.

Observe o exemplo. O estilo padrão é para mobile — layout em coluna (flex-direction: column). Quando a tela tem 768px ou mais (tablet), o layout muda para linha (flex-direction: row) e os cards ocupam 50% da largura. Quando a tela tem 1024px ou mais (desktop), os cards ocupam 33.33%.

A abordagem "Mobile First" significa começar pelo estilo mobile e depois adicionar media queries para telas maiores. Isso garante que a aplicação funcione bem em dispositivos móveis — que são a maioria dos acessos.
-->

---

## Flexbox

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.card {
  flex: 1 1 300px;
  max-width: 400px;
}
```

- `display: flex` ativa o Flexbox;
- `flex-wrap: wrap` permite que itens quebrem para a próxima linha;
- `flex: 1 1 300px` define crescimento, redução e tamanho base;
- `justify-content: center` centraliza os itens.

<!--
FALA DO PROFESSOR:

Flexbox é uma das ferramentas mais poderosas para layouts responsivos. Ele permite distribuir espaço entre itens de forma flexível.

display: flex ativa o Flexbox no container. flex-wrap: wrap permite que os itens quebrem para a próxima linha quando não cabem na mesma. flex: 1 1 300px define que cada item pode crescer, pode reduzir e tem tamanho base de 300px.

O resultado é um layout que se adapta automaticamente. Em uma tela larga, os cards ficam lado a lado. Em uma tela estreita, eles empilham verticalmente.
-->

---

## CSS Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
```

- `display: grid` ativa o Grid;
- `repeat(auto-fit, ...)` ajusta o número de colunas automaticamente;
- `minmax(280px, 1fr)` define largura mínima e máxima;
- O layout se adapta **sem media queries**.

<!--
FALA DO PROFESSOR:

CSS Grid é outra ferramenta poderosa para layouts responsivos. A linha grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) é quase mágica.

Ela diz: "crie o número máximo de colunas que couberem na tela, cada uma com largura mínima de 280px e máxima de 1fr (uma fração igual do espaço disponível)".

O resultado é um layout que se adapta automaticamente — sem media queries. Em uma tela de 1200px, cabem 4 colunas. Em uma tela de 600px, cabem 2. Em uma tela de 300px, cabe 1.

Grid e Flexbox são complementares. Grid é melhor para layouts bidimensionais (linhas e colunas). Flexbox é melhor para layouts unidimensionais (uma linha ou uma coluna).
-->

---

## Imagens Responsivas

```html
<!-- Imagem que se adapta ao container -->
<img src="foto.jpg" alt="Descrição" 
     style="max-width: 100%; height: auto;">

<!-- Diferentes imagens para diferentes telas -->
<picture>
  <source media="(min-width: 1024px)" srcset="foto-large.jpg">
  <source media="(min-width: 768px)" srcset="foto-medium.jpg">
  <img src="foto-small.jpg" alt="Descrição">
</picture>
```

- `max-width: 100%` impede que a imagem ultrapasse o container;
- `<picture>` permite servir imagens diferentes para cada tela;
- Evita **baixar imagens desnecessariamente grandes** em dispositivos móveis.

<!--
FALA DO PROFESSOR:

Imagens responsivas são essenciais. Uma imagem de 2000px de largura é desperdício em um celular de 375px — o usuário baixa dados desnecessários.

max-width: 100% é a solução mais simples — a imagem nunca ultrapassa o container. height: auto mantém a proporção.

A tag <picture> é mais sofisticada. Permite servir imagens diferentes para diferentes tamanhos de tela. Em desktop, serve a imagem grande. Em tablet, a média. Em celular, a pequena. Isso economiza banda e melhora a performance.
-->

---

## Breakpoints Comuns

| Dispositivo | Largura | Breakpoint |
|-------------|---------|------------|
| Celular pequeno | 320px | — |
| Celular médio | 375px | — |
| Celular grande | 425px | — |
| Tablet | 768px | `@media (min-width: 768px)` |
| Desktop | 1024px | `@media (min-width: 1024px)` |
| Desktop grande | 1440px | `@media (min-width: 1440px)` |

> **Dica:** Não se prenda a breakpoints fixos. Projete para o **conteúdo**, não para dispositivos específicos.

<!--
FALA DO PROFESSOR:

Esses são os breakpoints mais comuns, mas não são uma regra. O ideal é definir breakpoints com base no conteúdo — quando o layout começa a "quebrar", adicione um breakpoint.

Não tente cobrir todos os dispositivos existentes — são centenas. Foque em faixas de largura: pequeno (até 768px), médio (768-1024px) e grande (acima de 1024px).
-->

---

## Síntese da Aula

**Conceitos principais:**

1. **Responsividade** é a capacidade de se adaptar a diferentes tamanhos de tela;
2. **Media queries** permitem aplicar estilos por largura de tela;
3. **Flexbox** e **Grid** são as ferramentas CSS para layouts responsivos;
4. **Mobile First** é a abordagem recomendada;
5. **Imagens responsivas** economizam banda e melhoram performance.

**Pergunta reflexiva:**

> Se você pudesse usar apenas UMA técnica CSS para responsividade, qual escolheria? Por quê?

**Próxima aula:** Mobile First — Vamos aprofundar essa abordagem de design.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva é difícil. Flexbox é versátil, Grid é poderoso, media queries são essenciais. A resposta depende do contexto, mas provavelmente media queries são a mais fundamental — sem elas, as outras técnicas não sabem quando mudar.

Na próxima aula, vamos aprofundar a abordagem Mobile First.
-->

---

<!-- _class: bg-fim -->

#
