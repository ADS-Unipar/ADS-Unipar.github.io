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

# Aula 17

## O que é uma PWA?

**Unidade 3 — Web Mobile e PWA**

<!--
FALA DO PROFESSOR:

PWA — Progressive Web App — é uma das tecnologias mais empolgantes do desenvolvimento web moderno. Uma PWA é uma aplicação web que pode ser "instalada" no dispositivo do usuário e funciona offline, oferecendo uma experiência semelhante a um aplicativo nativo.

Nesta aula, vamos entender o que é uma PWA, por que ela existe e quais são seus componentes fundamentais.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o conceito de PWA;
- **Identificar** os componentes de uma PWA (Manifest, Service Worker, Cache);
- **Explicar** como uma PWA funciona offline;
- **Analisar** as vantagens e limitações de PWAs.

**Taxonomia de Bloom:** Compreender, Identificar, Explicar, Analisar.

---

## O que é uma PWA?

- **Progressive Web App** — aplicação web progressiva;
- É um **site** que se comporta como um **aplicativo**;
- Pode ser **instalada** no dispositivo;
- Funciona **offline**;
- Envia **notificações**;
- Acessa **hardware** (câmera, GPS).

> **Conceito-chave:** PWA é uma aplicação web que utiliza tecnologias modernas para oferecer uma experiência equivalente à de um aplicativo nativo.

<!--
FALA DO PROFESSOR:

PWA não é uma tecnologia única — é um conjunto de tecnologias e práticas que, juntas, transformam um site em algo que se parece e funciona como um aplicativo nativo.

O termo "progressive" significa que a experiência melhora progressivamente. Em navegadores modernos, a PWA funciona como aplicativo. Em navegadores antigos, funciona como site normal. A experiência se degrada graciosamente.

Uma PWA pode ser instalada no dispositivo — aparece na tela inicial com um ícone, como qualquer aplicativo. Pode funcionar offline — quando a conexão cai, a aplicação continua funcionando com dados em cache. Pode enviar notificações — mesmo quando não está aberta.

Tudo isso usando apenas HTML, CSS e JavaScript — sem precisar de Swift, Kotlin ou lojas de aplicativos.
-->

---

## Componentes de uma PWA

```
┌─────────────────────────────────────────┐
│                  PWA                    │
│                                         │
│  ┌─────────────┐  ┌──────────────────┐  │
│  │  MANIFEST   │  │ SERVICE WORKER   │  │
│  │  (identidade│  │  (offline, cache,│  │
│  │   ícone,    │  │   notificações)  │  │
│  │   nome)     │  │                  │  │
│  └─────────────┘  └──────────────────┘  │
│                                         │
│  ┌─────────────┐  ┌──────────────────┐  │
│  │   HTTPS     │  │  CACHE API       │  │
│  │  (segurança)│  │  (armazenamento) │  │
│  └─────────────┘  └──────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

<!--
FALA DO PROFESSOR:

Uma PWA é composta por quatro componentes principais.

O Manifest é um arquivo JSON que descreve a aplicação — nome, ícone, cor de fundo, orientação. É ele que permite a "instalação" da aplicação no dispositivo.

O Service Worker é um script que roda em segundo plano, separado da página. Ele intercepta requisições de rede, gerencia cache e permite funcionamento offline. É o componente mais poderoso e complexo de uma PWA.

HTTPS é obrigatório. Service Workers só funcionam em conexões seguras. Isso é uma restrição de segurança — um Service Worker malicioso poderia interceptar todas as requisições do usuário.

A Cache API é o mecanismo de armazenamento que o Service Worker usa para guardar recursos (HTML, CSS, JS, imagens) no dispositivo. Quando a conexão cai, o Service Worker serve os recursos do cache.
-->

---

## Manifest (manifest.json)

```json
{
  "name": "Minha PWA",
  "short_name": "PWA",
  "description": "Uma aplicação web progressiva",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#C22820",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

<!--
FALA DO PROFESSOR:

O Manifest é um arquivo JSON que descreve a aplicação para o navegador. name é o nome completo exibido na tela de instalação. short_name é o nome curto exibido abaixo do ícone. start_url é a página que abre quando o usuário clica no ícone. display: standalone faz a aplicação parecer um aplicativo nativo — sem barra de endereço do navegador. background_color e theme_color definem as cores da aplicação. icons define os ícones em diferentes tamanhos.

Para ativar o Manifest, basta adicionar uma tag no HTML:
<link rel="manifest" href="/manifest.json">

Quando o navegador detecta o Manifest e o Service Worker, oferece ao usuário a opção de "instalar" a aplicação.
-->

---

## Service Worker

```javascript
// Registrar o Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registrado:', reg))
    .catch(err => console.error('Erro:', err));
}
```
---

```javascript
// sw.js — Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

<!--
FALA DO PROFESSOR:

O Service Worker é o coração da PWA. Ele é registrado no navegador e roda em segundo plano, independentemente da página.

O evento install é disparado quando o Service Worker é instalado pela primeira vez. Nesse momento, abrimos o cache e adicionamos os recursos essenciais — HTML, CSS, JS.

O evento fetch é disparado para cada requisição de rede. O Service Worker intercepta a requisição e verifica se o recurso está no cache. Se estiver, serve do cache (offline). Se não estiver, faz a requisição normal à rede.

É isso que permite o funcionamento offline. Quando o usuário acessa a PWA sem conexão, o Service Worker serve os recursos do cache. A aplicação continua funcionando — com dados limitados, mas funcional.
-->

---

## Vantagens e Limitações

| Vantagens | Limitações |
|-----------|------------|
| Sem instalação via loja | Acesso limitado ao hardware |
| Funciona offline | Notificações limitadas (iOS) |
| Atualização instantânea | Sem acesso a contatos, SMS |
| Multiplataforma | Performance inferior a nativo |
| Custo menor | Não aparece na loja de apps |
| Notificações push | iOS tem suporte limitado |

<!--
FALA DO PROFESSOR:

As vantagens de PWA são significativas. Não precisa de loja de aplicativos — o usuário acessa o site e instala. Funciona offline. Atualiza instantaneamente. É multiplataforma. Custo menor.

Mas existem limitações. O acesso ao hardware é limitado — não tem o mesmo nível de acesso que um aplicativo nativo. Notificações push no iOS têm suporte limitado. Não pode acessar contatos, SMS ou outras funcionalidades do sistema operacional.

A principal limitação é que PWA não aparece na loja de aplicativos (App Store, Google Play). Para alguns negócios, isso é uma desvantagem — a loja é um canal de distribuição importante.

No entanto, o Google Play começou a aceitar PWAs. E para muitos casos de uso — e-commerce, blogs, sistemas de gestão — PWA é perfeitamente adequada.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. **PWA** é uma aplicação web que se comporta como aplicativo nativo;
2. Os componentes são: **Manifest**, **Service Worker**, **HTTPS** e **Cache**;
3. O **Manifest** define a identidade da aplicação;
4. O **Service Worker** permite funcionamento offline e cache;
5. PWA tem **vantagens** (sem instalação, offline) e **limitações** (hardware, iOS).

**Pergunta reflexiva:**

> Se uma PWA pode fazer quase tudo que um aplicativo nativo faz, por que empresas ainda investem em aplicativos nativos?

**Próxima aula:** Componentes de uma PWA — Vamos aprofundar Manifest, Service Worker e Cache.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva é central. A resposta envolve distribuição (lojas de aplicativos), acesso a hardware (NFC, Bluetooth, sensores avançados) e percepção do usuário (aplicativos nativos parecem mais "profissionais").

Na próxima aula, vamos aprofundar cada componente da PWA.
-->

---

<!-- _class: bg-fim -->

#
