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

# Aula 18

## Componentes de uma PWA

**Unidade 3 — Web Mobile e PWA**

<!--
FALA DO PROFESSOR:

Na aula anterior, entendemos o conceito de PWA e seus componentes principais. Agora vamos aprofundar cada componente — Manifest, Service Worker e Cache — com exemplos práticos e detalhes de implementação.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Configurar** um Manifest completo para uma PWA;
- **Implementar** um Service Worker com estratégias de cache;
- **Aplicar** diferentes estratégias de cache;
- **Analisar** o ciclo de vida de um Service Worker.

**Taxonomia de Bloom:** Configurar, Implementar, Aplicar, Analisar.

---

## Manifest — Detalhes

```json
{
  "name": "TaskFlow - Gerenciador de Tarefas",
  "short_name": "TaskFlow",
  "description": "Gerencie suas tarefas de qualquer lugar",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#ffffff",
  "theme_color": "#C22820",
  "categories": ["productivity", "utilities"],
  "icons": [
    { "src": "/icons/icon-72.png", "sizes": "72x72", "type": "image/png" },
    { "src": "/icons/icon-96.png", "sizes": "96x96", "type": "image/png" },
    { "src": "/icons/icon-128.png", "sizes": "128x128", "type": "image/png" },
    { "src": "/icons/icon-144.png", "sizes": "144x144", "type": "image/png" },
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

<!--
FALA DO PROFESSOR:

O Manifest é mais detalhado do que parece. Cada propriedade tem uma função específica.

name é o nome completo exibido na tela de instalação. short_name é o nome curto exibido abaixo do ícone — deve ter no máximo 12 caracteres. start_url é a página que abre quando o usuário clica no ícone. scope define o escopo da PWA — URLs dentro do escopo são tratadas pela PWA.

display controla como a PWA é exibida: standalone (sem barra de endereço), fullscreen (tela cheia), minimal-ui (barra mínima) ou browser (como site normal). orientation força a orientação: portrait (retrato) ou landscape (paisagem).

background_color é a cor de fundo exibida enquanto a PWA carrega. theme_color é a cor da barra de status no Android.

Icons é um array com ícones em diferentes tamanhos. É recomendado fornecer pelo menos 192x192 e 512x512. Navegadores diferentes usam tamanhos diferentes.
-->

---

## Service Worker — Ciclo de Vida

```
1. REGISTRO
   navigator.serviceWorker.register('/sw.js')
              ↓
2. INSTALAÇÃO (install)
   Cacheia recursos essenciais
              ↓
3. ATIVAÇÃO (activate)
   Limpa caches antigos
              ↓
4. FETCH (fetch)
   Intercepta requisições
   Serve do cache ou da rede
```

<!--
FALA DO PROFESSOR:

O Service Worker tem um ciclo de vida bem definido.

1. Registro: o navegador registra o Service Worker a partir do JavaScript da página.

2. Instalação: o evento install é disparado. É o momento de cachear os recursos essenciais — HTML, CSS, JS, imagens. Se algum recurso falhar, a instalação é abortada.

3. Ativação: o evento activate é disparado. É o momento de limpar caches antigos e preparar o Service Worker para interceptar requisições.

4. Fetch: o evento fetch é disparado para cada requisição de rede. O Service Worker decide se serve do cache ou da rede.

Um ponto importante: o Service Worker não é atualizado imediatamente quando você modifica o arquivo sw.js. O navegador verifica se houve mudança (byte a byte) e, se houver, instala a nova versão em segundo plano. A nova versão só é ativada quando todas as abas que usam a PWA são fechadas.
-->

---

## Estratégias de Cache

| Estratégia | Descrição | Quando usar |
|------------|-----------|-------------|
| **Cache First** | Tenta cache, depois rede | Recursos estáticos (CSS, JS, imagens) |
| **Network First** | Tenta rede, depois cache | Dados dinâmicos (API, notícias) |
| **Cache Only** | Apenas cache | Recursos que nunca mudam |
| **Network Only** | Apenas rede | Dados que não podem ser cacheados |
| **Stale While Revalidate** | Cache + atualiza em background | Recursos que mudam pouco |

<!--
FALA DO PROFESSOR:

Existem cinco estratégias principais de cache. A escolha depende do tipo de recurso.

Cache First: o Service Worker verifica o cache primeiro. Se o recurso estiver lá, serve do cache. Se não, busca na rede. É ideal para recursos estáticos que raramente mudam — CSS, JavaScript, imagens.

Network First: o Service Worker tenta a rede primeiro. Se a rede estiver disponível, serve da rede e atualiza o cache. Se não, serve do cache. É ideal para dados dinâmicos — notícias, preços, dados de API.

Cache Only: serve exclusivamente do cache. Nunca busca na rede. É ideal para recursos que nunca mudam — como a página offline.

Network Only: serve exclusivamente da rede. Nunca usa cache. É ideal para dados que não podem ser cacheados — como requisições POST.

Stale While Revalidate: serve do cache imediatamente (rápido) e, em segundo plano, busca na rede para atualizar o cache. É ideal para recursos que mudam pouco — como a página principal.
-->

---

## Exemplo: Cache First

```javascript
// sw.js — Estratégia Cache First
const CACHE_NAME = 'v1';
const RECURSOS = ['/', '/index.html', '/style.css', '/app.js'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(RECURSOS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached; // Cache hit
        return fetch(event.request); // Cache miss → rede
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});
```

<!--
FALA DO PROFESSOR:

Este é um exemplo completo de Service Worker com estratégia Cache First.

No install, abrimos o cache 'v1' e adicionamos os recursos essenciais. Se qualquer recurso falhar, a instalação é abortada.

No fetch, verificamos se o recurso está no cache. Se estiver (cache hit), retornamos do cache — rápido e sem rede. Se não estiver (cache miss), buscamos na rede.

No activate, limpamos caches antigos. Quando atualizamos o CACHE_NAME para 'v2', o activate deleta o cache 'v1'. Isso garante que recursos desatualizados não sejam servidos.
-->

---

## Exemplo: Network First

```javascript
// sw.js — Estratégia Network First
self.addEventListener('fetch', (event) => {
  // Apenas para requisições de API
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Atualizar cache com resposta da rede
          const clone = response.clone();
          caches.open('api-cache')
            .then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => {
          // Rede falhou → servir do cache
          return caches.match(event.request);
        })
    );
  }
});
```

<!--
FALA DO PROFESSOR:

Esta é a estratégia Network First para dados de API. O Service Worker tenta a rede primeiro. Se a rede responder, atualiza o cache com a resposta e a retorna. Se a rede falhar (offline), serve do cache.

Observe que clonamos a resposta (response.clone()) antes de cachear. Isso é necessário porque uma resposta HTTP só pode ser consumida uma vez. O clone vai para o cache, o original vai para o navegador.

Essa estratégia é ideal para dados que precisam estar atualizados quando possível, mas que podem ser servidos do cache quando a rede não está disponível.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. O **Manifest** define a identidade e aparência da PWA;
2. O **Service Worker** tem um ciclo de vida: registro → instalação → ativação → fetch;
3. Existem **cinco estratégias** de cache — a escolha depende do tipo de recurso;
4. **Cache First** é ideal para recursos estáticos;
5. **Network First** é ideal para dados dinâmicos.

**Pergunta reflexiva:**

> Se o Service Worker cacheia recursos, como garantir que o usuário sempre tenha a versão mais recente?

**Próxima aula:** Aula ao vivo — Transformando uma aplicação web em PWA.

<!--
FALA DO PROFESSOR:

A resposta para a pergunta reflexiva é: versionamento de cache. Quando você atualiza o CACHE_NAME, o Service Worker detecta a mudança, instala a nova versão e limpa o cache antigo no activate.

Na próxima aula ao vivo, vamos transformar uma aplicação web existente em uma PWA, passo a passo.
-->

---

<!-- _class: bg-fim -->

#
