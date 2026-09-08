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

# Atividade Prática Orientada

## Unidade 3 — Web Mobile e PWA

### Transformando uma aplicação web em Progressive Web App

<!--
FALA DO PROFESSOR:

Bem-vindo à Atividade Prática Orientada da Unidade 3. Nesta atividade, você vai transformar uma aplicação web existente em uma PWA completa, aplicando todos os conceitos estudados: responsividade, Mobile First, Manifest, Service Worker e Cache.
-->

---

## 1. Identificação da Atividade

| Item | Descrição |
|---|---|
| **Disciplina** | Desenvolvimento de Software (Back-End/Front-End) |
| **Unidade** | 3 — Web Mobile e PWA |
| **Tipo** | Atividade Prática Orientada (APO) |
| **Carga horária** | 10 horas |
| **Modalidade** | Individual ou dupla |
| **Entrega** | Repositório público no GitHub + vídeo demonstrando instalação |

---

## 2. Contextualização

Uma empresa de delivery precisa que seu site funcione como um aplicativo em dispositivos móveis. O site já existe (HTML + CSS + JavaScript), mas não é responsivo, não funciona offline e não pode ser instalado.

> **Por que esta atividade existe?**
> Para que você aplique, na prática, os conceitos de PWA estudados na Unidade 3 — transformando um site comum em uma experiência de aplicativo.

---

## 3. Objetivos de Aprendizagem

Ao concluir esta atividade, o estudante deverá ser capaz de:

- **Tornar** uma aplicação web responsiva com Mobile First;
- **Configurar** um Manifest para instalação da PWA;
- **Implementar** um Service Worker com estratégias de cache;
- **Testar** o funcionamento offline;
- **Documentar** o processo de transformação.

**Taxonomia de Bloom:** Aplicar, Analisar, Avaliar.

---

## 4. Requisitos

### Responsividade
- [ ] Viewport meta tag configurada;
- [ ] Layout responsivo com Flexbox ou Grid;
- [ ] Media queries com abordagem Mobile First;
- [ ] Imagens responsivas;
- [ ] Áreas de toque mínimas de 44x44px.

### PWA
- [ ] `manifest.json` completo (nome, ícones, cores, display);
- [ ] Service Worker registrado;
- [ ] Estratégia Cache First para recursos estáticos;
- [ ] Estratégia Network First para dados de API;
- [ ] Página offline funcionando;
- [ ] PWA instalável no dispositivo.

---

## 5. Estrutura Esperada

```
delivery-pwa/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── sw.js
│   ├── manifest.json
│   ├── offline.html
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
├── server.js
└── README.md
```

---

## 6. Critérios de Avaliação

| Critério | Peso | Descrição |
|----------|------|-----------|
| Responsividade | 25% | Layout adaptado a diferentes telas |
| Manifest | 15% | Configuração completa e correta |
| Service Worker | 25% | Estratégias de cache implementadas |
| Funcionamento offline | 20% | PWA funciona sem conexão |
| Documentação | 15% | README completo e vídeo demonstrativo |

---

## 7. Resultado Esperado

Ao finalizar a atividade, o estudante deverá ter:

- Uma aplicação web responsiva (Mobile First);
- Uma PWA instalável com ícone na tela inicial;
- Funcionamento offline com cache de recursos;
- Vídeo demonstrando a instalação e o uso offline.

<!--
FALA DO PROFESSOR:

Esta atividade é a mais prática até agora. Você vai transformar um site real em uma PWA. O resultado será algo que pode ser instalado em um celular e usado como aplicativo.

Dediquem tempo para testar em dispositivos reais. O Chrome DevTools é útil, mas não substitui o teste em um celular real.
-->

---

<!-- _class: bg-fim -->

#
