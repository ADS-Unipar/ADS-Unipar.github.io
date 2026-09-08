# Revisão — Unidade 3: Web Mobile e PWA

<!--
FALA DO PROFESSOR:

Esta é a revisão da Unidade 3. Utilize este material para consolidar os conceitos estudados nas seis aulas gravadas e na aula ao vivo.
-->

---

## Resumo dos Conceitos

### Aula 13 — Desenvolvimento para Dispositivos Móveis

- Mais de **60%** do tráfego web vem de dispositivos móveis;
- Quatro abordagens: **nativa**, **híbrida**, **cross-platform** e **web**;
- A **web mobile** é viável para a maioria dos aplicativos;
- Desafios: telas diferentes, conexão instável, toque vs. clique.

### Aula 14 — HTML5 para Aplicações Móveis

- A **viewport meta tag** é essencial para mobile;
- **Tipos de input** ativam teclados diferentes;
- APIs do HTML5: **Geolocation**, **Camera**, **Touch Events**, **LocalStorage**;
- **Touch Events** são fundamentais para interações mobile.

### Aula 15 — Responsividade

- **Responsividade** é a capacidade de se adaptar a diferentes telas;
- **Media queries** aplicam estilos por largura de tela;
- **Flexbox** e **Grid** são as ferramentas para layouts responsivos;
- **Imagens responsivas** economizam banda.

### Aula 16 — Mobile First

- **Mobile First** projeta para mobile e expande para telas maiores;
- Usa `min-width` em vez de `max-width`;
- Alinhado com **Progressive Enhancement**;
- Google prioriza sites mobile-friendly.

### Aula 17 — O que é uma PWA?

- **PWA** é uma aplicação web que se comporta como aplicativo;
- Componentes: **Manifest**, **Service Worker**, **HTTPS**, **Cache**;
- Pode ser **instalada** e funciona **offline**;
- Tem vantagens e **limitações** (hardware, iOS).

### Aula 18 — Componentes de uma PWA

- **Manifest** define identidade e aparência;
- **Service Worker** tem ciclo de vida: registro → instalação → ativação → fetch;
- Estratégias de cache: **Cache First**, **Network First**, **Stale While Revalidate**;
- **Versionamento de cache** garante atualização.

---

## Mapa Conceitual

```
                    WEB MOBILE
                        │
          ┌─────────────┼─────────────┐
          │             │             │
      CONTEXTO     RESPONSIVIDADE    PWA
          │             │             │
     ┌────┼────┐   ┌────┼────┐   ┌───┼───┐
     │    │    │   │    │    │   │   │   │
   Mobile HTML5  Media Flex  Manifest SW Cache
   First  APIs  Query Grid  (id)  (offline)(armaz)
```

---

## Conceitos Fundamentais

| Conceito | Definição | Exemplo |
|----------|-----------|---------|
| **Viewport** | Área visível da página no dispositivo | `<meta name="viewport">` |
| **Media Query** | Regra CSS por largura de tela | `@media (min-width: 768px)` |
| **Flexbox** | Layout flexível unidimensional | `display: flex` |
| **Grid** | Layout bidimensional | `display: grid` |
| **Mobile First** | Projetar para mobile primeiro | `min-width` em vez de `max-width` |
| **PWA** | Progressive Web App | Site que parece aplicativo |
| **Manifest** | Arquivo JSON de identidade | `manifest.json` |
| **Service Worker** | Script que roda em segundo plano | `sw.js` |
| **Cache** | Armazenamento local de recursos | `caches.open('v1')` |
| **Touch Events** | Eventos de toque na tela | `touchstart`, `touchend` |

---

## Erros Comuns

| Erro | Consequência | Correção |
|------|--------------|----------|
| Não usar viewport meta tag | Página minúscula no celular | Adicionar `<meta name="viewport">` |
| Usar `max-width` (Desktop First) | Mobile é adaptação, não prioridade | Usar `min-width` (Mobile First) |
| Imagens sem `max-width: 100%` | Imagem ultrapassa a tela | Adicionar CSS responsivo |
| Não versionar cache do SW | Recursos desatualizados servidos | Atualizar CACHE_NAME |
| Não testar offline | PWA não funciona offline | Testar no DevTools |
| Botões muito pequenos em mobile | Dificulta toque | Mínimo 44x44px |

---

## Perguntas para Reflexão

1. **Por que Mobile First é recomendado** em vez de Desktop First?

2. **Se uma PWA pode fazer quase tudo** que um aplicativo nativo faz, por que empresas ainda investem em nativo?

3. **Qual estratégia de cache** você usaria para uma aplicação de notícias? E para uma aplicação de calculadora?

4. **Por que HTTPS é obrigatório** para Service Workers?

5. **O que acontece** se você atualizar o CSS mas esquecer de atualizar o CACHE_NAME?

6. **Como garantir** que o usuário sempre tenha a versão mais recente da PWA?

---

## Checklist de Aprendizagem

Ao final da Unidade 3, o estudante deve ser capaz de:

- [ ] Explicar o contexto do desenvolvimento mobile;
- [ ] Configurar a viewport meta tag;
- [ ] Usar tipos de input otimizados para mobile;
- [ ] Implementar layouts responsivos com Flexbox e Grid;
- [ ] Usar media queries com abordagem Mobile First;
- [ ] Criar um manifest.json completo;
- [ ] Implementar um Service Worker com cache;
- [ ] Aplicar estratégias de cache (Cache First, Network First);
- [ ] Transformar uma aplicação web em PWA;
- [ ] Testar funcionamento offline.

---

## Conexão com a Unidade 4

Na Unidade 3, estudamos como adaptar aplicações web para dispositivos móveis e transformá-las em PWAs. Utilizamos frameworks e tecnologias existentes.

Na **Unidade 4 — Por que desenvolver seu próprio Framework?**, vamos inverter a perspectiva. Em vez de usar frameworks prontos, vamos entender como eles são construídos — e construir o nosso próprio mini framework.

> **Pergunta de transição:** Se frameworks são tão úteis, por que alguém criaria um novo em vez de usar um existente?

<!--
FALA DO PROFESSOR:

Esta revisão cobre tudo o que estudamos na Unidade 3. Utilize o checklist para verificar se você atingiu todos os objetivos.

A conexão com a Unidade 4 é provocativa. Na próxima unidade, vamos construir nosso próprio framework — não para substituir o Express ou o React, mas para entender como funcionam por dentro.

Bons estudos!
-->
