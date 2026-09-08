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

# Aula ao Vivo

## Transformando uma Aplicação Web em PWA

**Unidade 3 — Web Mobile e PWA**

<!--
FALA DO PROFESSOR:

Bem-vindos à aula ao vivo da Unidade 3! Hoje vamos transformar uma aplicação web comum em uma Progressive Web App. Vamos seguir o fluxo progressivo: HTML + CSS + JavaScript → Responsividade → Manifest → Service Worker → Cache → PWA.

O objetivo é que você veja, passo a passo, como cada componente se encaixa e por que cada um existe.
-->

---

## Roteiro da Aula (50 min)

| Tempo | Atividade |
|-------|-----------|
| 0–5 min | Abertura e contextualização |
| 5–15 min | Revisão dos conceitos da Unidade 3 |
| 15–25 min | Discussão: por que PWA resolve problemas reais |
| 25–40 min | Demonstração prática: site → PWA |
| 40–47 min | Desafio: testar offline |
| 47–50 min | Síntese e orientação da atividade |

---

## 0–5 min: Contextualização

**O que estudamos na Unidade 3:**

- Aula 13: Desenvolvimento para Dispositivos Móveis
- Aula 14: HTML5 para Aplicações Móveis
- Aula 15: Responsividade
- Aula 16: Mobile First
- Aula 17: O que é uma PWA?
- Aula 18: Componentes de uma PWA

**O que vamos fazer hoje:**

> Transformar um site comum em uma PWA funcional, adicionando Manifest, Service Worker e Cache.

---

## 15–25 min: Problema Real

**Cenário:** Uma loja virtual precisa funcionar em celulares.

**Problemas sem PWA:**
- Usuário precisa lembrar da URL;
- Não funciona offline;
- Experiência inferior a um aplicativo;
- Sem notificações.

**Solução com PWA:**
- Ícone na tela inicial;
- Funciona offline;
- Experiência de aplicativo;
- Notificações de promoções.

---

## 25–40 min: Demonstração Prática

**Passo 1:** Verificar responsividade (viewport + media queries);

**Passo 2:** Criar `manifest.json`;

**Passo 3:** Adicionar `<link rel="manifest">` no HTML;

**Passo 4:** Criar `sw.js` (Service Worker);

**Passo 5:** Registrar o Service Worker;

**Passo 6:** Testar offline.

---

## Demonstração: manifest.json

```json
{
  "name": "Minha Loja Virtual",
  "short_name": "Loja",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#C22820",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## Demonstração: Service Worker

```javascript
// sw.js
const CACHE_NAME = 'loja-v1';
const RECURSOS = ['/', '/index.html', '/style.css', '/app.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(RECURSOS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});
```

---

## Demonstração: Registro

```javascript
// app.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('PWA registrada!'))
    .catch(err => console.error('Erro:', err));
}
```

**Resultado:** O navegador oferece "Instalar aplicação" ao usuário.

---

## 40–47 min: Desafio

**Desafio:** Teste a PWA em modo offline.

1. Abra a PWA no navegador;
2. Abra o DevTools → Application → Service Workers;
3. Marque "Offline";
4. Recarregue a página;
5. A PWA deve continuar funcionando!

**Pergunta:** O que acontece se você atualizar um arquivo CSS e não atualizar o CACHE_NAME?

---

## 47–50 min: Síntese

**Fluxo completo:**

```
Aplicação Web
      ↓
HTML + CSS + JavaScript
      ↓
Responsividade (viewport + media queries)
      ↓
Manifest (identidade + instalação)
      ↓
Service Worker (interceptação + cache)
      ↓
Cache (armazenamento offline)
      ↓
PWA (experiência de aplicativo)
```

**Atividade Prática Orientada:** disponível na pasta da Unidade 3.

<!--
FALA DO PROFESSOR:

Hoje transformamos um site comum em uma PWA. Cada componente tem uma função: Manifest define a identidade, Service Worker intercepta requisições, Cache armazena recursos.

A atividade prática da Unidade 3 está disponível. Ela aprofunda o que fizemos hoje.

Na próxima unidade, vamos estudar algo fascinante: construir nosso próprio framework!
-->

---

<!-- _class: bg-fim -->

#
