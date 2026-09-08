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
  section.bg-capa h1 { text-align: center; font-size: 32px; color: #ffffff; }
  section.bg-capa h2 { text-align: center; font-size: 29px; color: #ffffff; }
  section.bg-fim { background-image: url('bg-fim.png'); background-size: cover; background-position: center; }
---

<!-- _class: bg-capa -->

# Aula 16

## Mobile First

**Unidade 3 — Web Mobile e PWA**

<!--
FALA DO PROFESSOR:

Mobile First é uma abordagem de design e desenvolvimento que prioriza a experiência em dispositivos móveis. Em vez de projetar para desktop e depois adaptar para mobile, fazemos o contrário: projetamos para mobile e depois expandimos para telas maiores.

Nesta aula, vamos entender por que essa abordagem é recomendada e como implementá-la na prática.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o conceito de Mobile First;
- **Explicar** as vantagens dessa abordagem;
- **Diferenciar** Mobile First de Desktop First;
- **Aplicar** Mobile First em exemplos práticos de CSS.

**Taxonomia de Bloom:** Compreender, Explicar, Diferenciar, Aplicar.

---

## O que é Mobile First?

**Desktop First (tradicional):**
```
Projeta para desktop → Adapta para tablet → Adapta para celular
```
- Começa com layout complexo;
- Remove elementos para telas menores;
- Pode gerar problemas de performance em mobile.

**Mobile First (recomendado):**
```
Projeta para celular → Expande para tablet → Expande para desktop
```
- Começa com layout simples;
- Adiciona elementos para telas maiores;
- Garante boa experiência em mobile.

<!--
FALA DO PROFESSOR:

A diferença é sutil, mas significativa. No Desktop First, você projeta o layout completo para desktop e depois "esconde" ou "remove" elementos para telas menores. Isso pode gerar problemas — o celular baixa recursos que não serão usados.

No Mobile First, você projeta o layout mais simples — para celular — e depois adiciona complexidade para telas maiores. Isso garante que a experiência mobile seja prioridade, não uma adaptação.
-->

---

## Por que Mobile First?

| Motivo | Descrição |
|--------|-----------|
| **Maioria dos acessos** | Mais de 60% vêm de dispositivos móveis |
| **Performance** | Carrega apenas o necessário para cada tela |
| **Foco** | Força priorizar o conteúdo essencial |
| **Progressive Enhancement** | Começa simples e adiciona complexidade |
| **Google** | Mobile First Indexing prioriza sites mobile |

<!--
FALA DO PROFESSOR:

As razões para Mobile First são convincentes. A maioria dos acessos vem de mobile. A performance é melhor porque você carrega apenas o necessário. O foco é maior porque você precisa priorizar o conteúdo essencial — não há espaço para tudo em uma tela de 375px.

Progressive Enhancement é o princípio de começar com uma experiência básica e funcional, e depois adicionar camadas de complexidade para dispositivos mais capazes. É o oposto de Graceful Degradation, que começa complexo e depois degrada.
-->

---

## Implementando Mobile First

```css
/* ===== MOBILE FIRST ===== */

/* Estilo base (mobile) — sem media query */
.container {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.card {
  width: 100%;
  margin-bottom: 16px;
}
```
---

```css
/* ===== TABLET ===== */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    width: 50%;
    padding: 24px;
  }
}

/* ===== DESKTOP ===== */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .card {
    width: 33.33%;
    padding: 32px;
  }
}
```

<!--
FALA DO PROFESSOR:

Observe a estrutura do CSS. O estilo base — sem media query — é para mobile. É o mais simples: layout em coluna, cards com 100% de largura.

A primeira media query (min-width: 768px) é para tablet. Muda o layout para linha e os cards para 50%.

A segunda media query (min-width: 1024px) é para desktop. Centraliza o container e os cards ficam com 33.33%.

Note que usamos min-width — "largura mínima". Isso significa que os estilos se aplicam a partir daquele ponto. O estilo base se aplica a todos os dispositivos. O estilo de tablet se aplica a tablets e desktops. O estilo de desktop se aplica apenas a desktops.

Essa é a essência do Mobile First: começar simples e adicionar complexidade.
-->

---

## Erros Comuns

| Erro | Consequência | Correção |
|------|--------------|----------|
| Usar `max-width` em vez de `min-width` | Lógica invertida | Usar `min-width` para Mobile First |
| Esconder conteúdo com `display: none` | Conteúdo continua sendo baixado | Remover do HTML ou usar lazy loading |
| Não testar em dispositivos reais | Bugs não detectados | Testar em celulares e tablets |
| Textos muito pequenos em mobile | Legibilidade comprometida | Mínimo de 16px para corpo de texto |
| Áreas de toque pequenas | Dificulta interação | Mínimo de 44x44px |

<!--
FALA DO PROFESSOR:

O erro mais comum é usar max-width em vez de min-width. max-width é Desktop First — você começa pelo desktop e adapta para baixo. min-width é Mobile First — você começa pelo mobile e adapta para cima.

Outro erro é esconder conteúdo com display: none. O conteúdo continua no HTML e é baixado pelo navegador — mesmo que não seja exibido. Isso desperdiça banda. Se um elemento não deve aparecer em mobile, remova-o do HTML ou use lazy loading.

Sempre teste em dispositivos reais. O Chrome DevTools simula dispositivos, mas não é perfeito. Toque, performance e comportamento real só podem ser avaliados em dispositivos físicos.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. **Mobile First** projeta para mobile e expande para telas maiores;
2. Usa `min-width` em vez de `max-width`;
3. Garante **performance** e **foco** no conteúdo essencial;
4. É alinhado com **Progressive Enhancement**;
5. Google prioriza sites mobile-friendly (**Mobile First Indexing**).

**Pergunta reflexiva:**

> Se você estivesse projetando um site de notícias, o que mostraria na versão mobile que não mostraria na versão desktop?

**Próxima aula:** O que é uma PWA? — Vamos estudar Progressive Web Apps.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva é interessante. Em mobile, o espaço é limitado — você precisa priorizar. Talvez mostre apenas as manchetes, enquanto no desktop mostra manchetes + subtítulos + imagens. A restrição do mobile força decisões de design mais conscientes.

Na próxima aula, vamos estudar PWA — a tecnologia que transforma sites em aplicativos.
-->

---

<!-- _class: bg-fim -->

#
