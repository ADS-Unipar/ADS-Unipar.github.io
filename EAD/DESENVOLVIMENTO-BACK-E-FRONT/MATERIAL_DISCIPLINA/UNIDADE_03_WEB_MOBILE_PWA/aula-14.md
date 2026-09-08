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

# Aula 14

## HTML5 para Aplicações Móveis

**Unidade 3 — Web Mobile e PWA**

<!--
FALA DO PROFESSOR:

Na aula anterior, entendemos o contexto do desenvolvimento mobile e as diferentes abordagens. Agora vamos estudar as tecnologias que tornam a web mobile possível, começando pelo HTML5.

O HTML5 trouxe diversas APIs e recursos que são fundamentais para aplicações móveis. Não vamos estudar HTML básico — isso você já sabe. Vamos focar nas funcionalidades específicas do HTML5 que são relevantes para mobile.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Identificar** as APIs do HTML5 relevantes para mobile;
- **Explicar** o viewport meta tag e sua importância;
- **Aplicar** recursos de formulário otimizados para mobile;
- **Analisar** as limitações do HTML5 em dispositivos móveis.

**Taxonomia de Bloom:** Identificar, Explicar, Aplicar, Analisar.

<!--
FALA DO PROFESSOR:

O foco desta aula é prático. Vamos estudar recursos do HTML5 que você precisa conhecer para desenvolver aplicações mobile.
-->

---

## Viewport Meta Tag

```html
<meta name="viewport" 
      content="width=device-width, initial-scale=1.0">
```

| Propriedade | Descrição |
|-------------|-----------|
| `width=device-width` | Largura da viewport = largura do dispositivo |
| `initial-scale=1.0` | Zoom inicial de 100% |
| `minimum-scale=1.0` | Zoom mínimo |
| `maximum-scale=1.0` | Zoom máximo |
| `user-scalable=no` | Impede que o usuário dê zoom |

> **Essencial:** Sem essa tag, o navegador mobile renderiza a página como se fosse desktop e aplica zoom para caber na tela.

<!--
FALA DO PROFESSOR:

A viewport meta tag é absolutamente essencial para aplicações mobile. Sem ela, o navegador mobile assume que a página foi feita para desktop e a renderiza com uma largura de cerca de 980 pixels. Depois, aplica zoom para que caiba na tela do celular. O resultado é uma página minúscula que o usuário precisa ampliar para ler.

Com a tag viewport configurada, o navegador sabe que a página foi projetada para o dispositivo. A largura da viewport passa a ser a largura real do dispositivo — 320px, 375px, 414px, etc. O CSS pode então usar media queries para adaptar o layout.

width=device-width define a largura da viewport como a largura do dispositivo. initial-scale=1.0 define o zoom inicial em 100% — sem ampliação nem redução.

As propriedades minimum-scale, maximum-scale e user-scalable controlam se o usuário pode dar zoom. Em geral, não é recomendado desabilitar o zoom — isso prejudica a acessibilidade. Pessoas com deficiência visual precisam de zoom para ler o conteúdo.
-->

---

## Formulários Otimizados para Mobile

```html
<!-- Teclado numérico -->
<input type="tel" placeholder="Telefone">
<input type="number" placeholder="Idade">

<!-- Teclado de e-mail -->
<input type="email" placeholder="E-mail">

<!-- Seletor de data nativo -->
<input type="date">

<!-- Teclado com .com -->
<input type="url" placeholder="Site">

<!-- Área de texto -->
<textarea placeholder="Mensagem"></textarea>
```
---
## Formulários Otimizados para Mobile
- Cada `type` ativa um **teclado diferente** no celular;
- Facilita a **entrada de dados** do usuário;
- Melhora a **experiência do usuário** (UX).

<!--
FALA DO PROFESSOR:

Os tipos de input do HTML5 são especialmente importantes em mobile. Cada tipo ativa um teclado diferente no celular.

type="tel" ativa o teclado numérico com símbolos de telefone. type="number" ativa o teclado numérico puro. type="email" ativa o teclado com @ e .com. type="date" abre o seletor de data nativo do sistema operacional. type="url" ativa o teclado com .com e /.

Isso facilita enormemente a entrada de dados. Em vez de forçar o usuário a alternar entre teclados (letras, números, símbolos), você oferece o teclado adequado para cada campo.

Uma boa prática é sempre usar o type correto para cada campo. Não use type="text" para tudo — isso força o usuário a trocar de teclado manualmente.
-->

---

## APIs do HTML5 para Mobile

| API | Descrição | Exemplo de uso |
|-----|-----------|----------------|
| **Geolocation** | Localização do dispositivo | Mapas, delivery |
| **Camera** | Acesso à câmera | Upload de fotos |
| **Touch Events** | Eventos de toque | Swipe, pinch, drag |
| **LocalStorage** | Armazenamento local | Cache de dados |
| **IndexedDB** | Banco de dados local | Dados offline |
| **Notifications** | Notificações push | Alertas |
| **Vibration** | Vibração do dispositivo | Feedback tátil |

<!--
FALA DO PROFESSOR:

O HTML5 trouxe diversas APIs que são fundamentais para aplicações móveis.

Geolocation permite acessar a localização do dispositivo — com permissão do usuário. É usada em mapas, aplicativos de delivery, redes sociais com check-in.

Camera permite acessar a câmera do dispositivo para capturar fotos ou vídeos. É usada em aplicativos de upload de foto, QR code, realidade aumentada.

Touch Events permitem detectar toques, deslizamentos (swipe), pinça (pinch) e arrastar (drag). São essenciais para interações mobile.

LocalStorage e IndexedDB permitem armazenar dados no dispositivo. LocalStorage é simples (pares chave-valor). IndexedDB é mais poderoso (banco de dados completo). Ambos são usados para cache de dados e funcionamento offline.

Notifications permitem enviar notificações ao usuário, mesmo quando a aplicação não está aberta. Requerem permissão do usuário.

Vibration permite vibrar o dispositivo — útil para feedback tátil (confirmação de ação, erro, etc.).
-->

---

## Exemplo: Geolocation

```javascript
// Obter localização do usuário
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(`Lat: ${lat}, Lng: ${lng}`);
    },
    (error) => {
      console.error('Erro:', error.message);
    }
  );
} else {
  console.log('Geolocation não suportada');
}
```
---

## Exemplo: Geolocation

- Requer **permissão** do usuário;
- Funciona melhor em **dispositivos móveis** (GPS);
- Em desktops, usa **IP-based location** (menos preciso).

<!--
FALA DO PROFESSOR:

A API de Geolocation é simples de usar. navigator.geolocation.getCurrentPosition() solicita a localização atual. O primeiro callback recebe as coordenadas. O segundo callback trata erros — o usuário pode negar a permissão, o GPS pode estar desligado, etc.

Em dispositivos móveis, a localização é precisa — usa GPS, Wi-Fi e torres de celular. Em desktops, a localização é baseada no IP — menos precisa.

Sempre verifique se a API está disponível antes de usar (geolocation in navigator). E sempre trate erros — o usuário pode negar a permissão.
-->

---

## Exemplo: Touch Events

```javascript
const elemento = document.getElementById('card');

// Toque simples
elemento.addEventListener('touchstart', (e) => {
  console.log('Toque iniciado');
});

// Toque finalizado
elemento.addEventListener('touchend', (e) => {
  console.log('Toque finalizado');
});

// Dedo se movendo
elemento.addEventListener('touchmove', (e) => {
  console.log('Movendo');
});
```
---

## Exemplo: Touch Events

- `touchstart` — dedo toca a tela;
- `touchend` — dedo sai da tela;
- `touchmove` — dedo se move na tela.

<!--
FALA DO PROFESSOR:

Touch Events são os equivalentes mobile dos eventos de mouse. touchstart é o equivalente a mousedown, touchend a mouseup, touchmove a mousemove.

Esses eventos são fundamentais para implementar interações mobile como swipe (deslizar), pinch (pinça para zoom) e drag (arrastar).

Um ponto importante: em dispositivos que suportam tanto mouse quanto toque (como tablets com teclado), ambos os tipos de eventos podem ser disparados. Por isso, é uma boa prática usar Pointer Events — que unificam mouse e touch em uma única API.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. A **viewport meta tag** é essencial para aplicações mobile;
2. **Tipos de input** do HTML5 ativam teclados diferentes no celular;
3. O HTML5 possui **APIs nativas** para mobile (Geolocation, Camera, Touch);
4. **LocalStorage** e **IndexedDB** permitem armazenamento local;
5. **Touch Events** são fundamentais para interações mobile.

**Pergunta reflexiva:**

> Se o HTML5 já oferece tantas APIs para mobile, por que ainda precisamos de aplicativos nativos?

**Próxima aula:** Responsividade — Vamos aprender a adaptar layouts para diferentes tamanhos de tela.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva é provocativa. O HTML5 oferece muitas APIs, mas não todas. Acesso a notificações push avançadas, câmera com controle total, sensores biométricos, NFC — muitas funcionalidades ainda são exclusivas de aplicativos nativos.

Na próxima aula, vamos estudar responsividade — como adaptar o layout da aplicação para diferentes tamanhos de tela.
-->

---

<!-- _class: bg-fim -->

#
