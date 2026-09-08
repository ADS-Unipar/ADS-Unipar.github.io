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

# Aula 13

## Desenvolvimento para Dispositivos Móveis

**Unidade 3 — Web Mobile e PWA**

<!--
FALA DO PROFESSOR:

Bem-vindos à Unidade 3! Nas unidades anteriores, estudamos os fundamentos do desenvolvimento web e frameworks. Agora vamos abordar um tema cada vez mais importante: o desenvolvimento para dispositivos móveis.

Mais da metade do tráfego da web hoje vem de dispositivos móveis. Ignorar isso é ignorar a maioria dos seus usuários. Nesta aula, vamos entender o que é desenvolvimento mobile, quais são as abordagens disponíveis e por que a web mobile é tão importante.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Compreender** o contexto do desenvolvimento mobile;
- **Diferenciar** as abordagens: nativo, híbrido e web;
- **Identificar** os desafios do desenvolvimento para dispositivos móveis;
- **Explicar** por que a web mobile é uma abordagem viável.

**Taxonomia de Bloom:** Compreender, Diferenciar, Identificar, Explicar.

<!--
FALA DO PROFESSOR:

Esta aula é contextual. Antes de estudar técnicas e tecnologias, precisamos entender o cenário. Por que o desenvolvimento mobile é importante? Quais são as abordagens disponíveis? Por que escolher a web mobile?
-->

---

## O Crescimento do Mobile

- **Mais de 60%** do tráfego da web vem de dispositivos móveis;
- Em países em desenvolvimento, o celular é o **principal** dispositivo de acesso;
- Usuários mobile têm **comportamento diferente**: telas menores, conexão instável, uso em movimento;
- Google utiliza **Mobile First Indexing**: prioriza sites mobile-friendly.

> **Dado:** Se o seu site não funciona bem no celular, você está perdendo a maioria dos seus potenciais usuários.

<!--
FALA DO PROFESSOR:

Os números são claros. A maioria dos acessos à web vem de dispositivos móveis. Em países em desenvolvimento como o Brasil, esse percentual é ainda maior — muitas pessoas acessam a internet apenas pelo celular.

O comportamento do usuário mobile é diferente. Ele está em movimento, com atenção fragmentada, tela pequena e conexão instável. Isso exige uma abordagem diferente de design e desenvolvimento.

Além disso, o Google prioriza sites mobile-friendly em seus resultados de busca. Se o seu site não funciona bem no celular, ele será penalizado no ranking de busca.
-->

---

## Abordagens de Desenvolvimento Mobile

| Abordagem | Tecnologia | Exemplo |
|-----------|-----------|---------|
| **Nativo** | Swift (iOS), Kotlin (Android) | Instagram, WhatsApp |
| **Híbrido** | HTML + CSS + JS em WebView | Ionic, Cordova |
| **Cross-platform** | Framework que gera nativo | React Native, Flutter |
| **Web Mobile** | HTML + CSS + JS no navegador | PWA, sites responsivos |

<!--
FALA DO PROFESSOR:

Existem quatro abordagens principais para desenvolvimento mobile.

Nativo: desenvolve-se separadamente para cada plataforma — Swift para iOS, Kotlin (ou Java) para Android. É a abordagem que oferece melhor performance e acesso total ao hardware, mas exige duas equipes e duas bases de código.

Híbrido: desenvolve-se com HTML, CSS e JavaScript, e a aplicação é "empacotada" em um componente WebView (um navegador embutido no aplicativo). Ionic e Cordova são exemplos. É mais barato que nativo, mas a performance e a experiência são inferiores.

Cross-platform: frameworks como React Native e Flutter geram aplicativos nativos a partir de uma única base de código. React Native usa JavaScript, Flutter usa Dart. Oferecem boa performance e experiência nativa com uma única base de código.

Web Mobile: a aplicação é um site acessado pelo navegador do celular. Pode ser responsiva (adapta-se ao tamanho da tela) ou uma PWA (Progressive Web App, que pode ser "instalada" e funciona offline).

Nesta disciplina, vamos focar na abordagem Web Mobile — especificamente em responsividade e PWA.
-->

---

## Por que Web Mobile?

| Vantagem | Descrição |
|----------|-----------|
| **Sem instalação** | O usuário acessa pelo navegador |
| **Atualização instantânea** | Não precisa baixar nova versão |
| **Multiplataforma** | Funciona em qualquer dispositivo com navegador |
| **Custo menor** | Uma única base de código |
| **Descoberta** | Encontrado por mecanismos de busca |

| Desvantagem | Descrição |
|-------------|-----------|
| **Acesso limitado ao hardware** | Câmera, GPS, notificações (limitado) |
| **Performance** | Inferior a nativo em casos extremos |
| **Offline** | Limitado sem PWA |

<!--
FALA DO PROFESSOR:

A web mobile tem vantagens significativas. A principal é que não precisa de instalação. O usuário digita a URL e acessa. Não precisa ir à loja de aplicativos, esperar download, dar permissões.

Atualização é instantânea. Quando você atualiza o servidor, todos os usuários já têm a versão mais nova. Não precisa esperar aprovação da Apple ou Google.

É multiplataforma. Funciona em iOS, Android, Windows, Mac, Linux — qualquer dispositivo com navegador. Uma única base de código para todas as plataformas.

O custo é menor. Em vez de duas equipes (iOS e Android), uma equipe web.

A desvantagem principal é o acesso limitado ao hardware. Câmera, GPS e notificações são possíveis, mas com limitações. Para aplicativos que dependem fortemente de hardware (jogos 3D, realidade aumentada), nativo é mais adequado.

Para a maioria dos aplicativos — redes sociais, e-commerce, sistemas de gestão — a web mobile é perfeitamente viável, especialmente com PWA.
-->

---

## Desafios do Mobile

| Desafio | Descrição |
|---------|-----------|
| **Telas diferentes** | De 320px (smartwatch) a 2560px (tablet) |
| **Conexão instável** | 3G, 4G, Wi-Fi instável, metrô |
| **Toque vs. clique** | Dedos são menos precisos que mouse |
| **Performance** | Processadores mais lentos, menos RAM |
| **Bateria** | JavaScript pesado consome bateria |
| **Contexto de uso** | Em movimento, atenção fragmentada |

<!--
FALA DO PROFESSOR:

Desenvolver para mobile apresenta desafios únicos.

Telas diferentes: de smartwatches a tablets, passando por smartphones de todos os tamanhos. Seu layout precisa se adaptar a todos.

Conexão instável: o usuário pode estar no Wi-Fi de casa ou no 3G do metrô. Sua aplicação precisa funcionar em ambos os cenários.

Toque vs. clique: dedos são menos precisos que um mouse. Botões pequenos demais são impossíveis de tocar. Áreas de toque precisam ter pelo menos 44x44 pixels.

Performance: celulares têm processadores mais lentos e menos RAM que desktops. JavaScript pesado pode travar a interface.

Bateria: código ineficiente consome mais bateria. Animações contínuas, requisições frequentes e processamento desnecessário drenam a bateria.

Contexto de uso: o usuário pode estar andando, no ônibus, em uma fila. A atenção é fragmentada. A aplicação precisa ser rápida e direta.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. Mais de **60%** do tráfego web vem de dispositivos móveis;
2. Existem quatro abordagens: **nativa**, **híbrida**, **cross-platform** e **web**;
3. A **web mobile** é viável para a maioria dos aplicativos;
4. Desenvolvimento mobile apresenta **desafios únicos** (telas, conexão, toque);
5. **PWA** é a tecnologia que aproxima a web mobile de aplicativos nativos.

**Pergunta reflexiva:**

> Se a web mobile é tão vantajosa, por que ainda existem aplicativos nativos?

**Próxima aula:** HTML5 para aplicações móveis — Vamos estudar as APIs do HTML5 relevantes para mobile.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva é importante. Aplicativos nativos ainda existem porque oferecem acesso total ao hardware, performance superior e experiência otimizada. Para jogos, realidade aumentada e aplicativos que dependem fortemente de hardware, nativo é mais adequado.

Na próxima aula, vamos estudar as APIs do HTML5 que são relevantes para aplicações móveis.
-->

---

<!-- _class: bg-fim -->

#
