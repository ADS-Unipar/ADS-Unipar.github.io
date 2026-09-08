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

# Aula 12

## Como escolher um Framework?

**Unidade 2 — Frameworks**

<!--
FALA DO PROFESSOR:

Nas aulas anteriores, estudamos o que são frameworks, por que existem, como são estruturados e quais são os principais do mercado. Agora vamos à pergunta mais prática: como escolher o framework certo para um projeto?

Essa é uma decisão que todo desenvolvedor profissional precisa tomar. E ela não é trivial — a escolha do framework afeta a produtividade, a manutenção, a escalabilidade e até a contratação de novos membros da equipe.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Identificar** critérios para escolha de um framework;
- **Avaliar** frameworks segundo critérios objetivos;
- **Analisar** trade-offs entre diferentes opções;
- **Projetar** uma justificativa técnica para a escolha de um framework.

**Taxonomia de Bloom:** Identificar, Avaliar, Analisar, Projetar.

<!--
FALA DO PROFESSOR:

Note o verbo "projetar" — é o nível mais alto da Taxonomia de Bloom que atingimos até agora. Você não vai apenas avaliar frameworks — vai ser capaz de justificar tecnicamente uma escolha.
-->

---

## Critérios de Escolha

| Critério | Pergunta-chave |
|----------|----------------|
| **Comunidade** | O framework tem comunidade ativa? |
| **Documentação** | A documentação é completa e clara? |
| **Curva de aprendizagem** | A equipe consegue aprender rapidamente? |
| **Ecossistema** | Existem plugins e integrações disponíveis? |
| **Performance** | Atende aos requisitos de performance? |
| **Escalabilidade** | Suporta o crescimento do projeto? |
| **Manutenção** | É ativamente mantido? |
| **Licença** | A licença é compatível com o projeto? |

<!--
FALA DO PROFESSOR:

Vamos detalhar cada critério.

Comunidade: um framework com comunidade ativa significa documentação abundante, respostas no Stack Overflow, plugins prontos e correções rápidas de bugs. Frameworks sem comunidade ativa são um risco.

Documentação: uma boa documentação economiza horas de pesquisa. Verifique se a documentação é completa, clara, com exemplos e atualizada.

Curva de aprendizagem: se a equipe nunca usou o framework, há um custo de aprendizagem. Frameworks como Express têm curva baixa. Angular tem curva alta. Considere o prazo do projeto.

Ecossistema: verifique se existem plugins para as funcionalidades que você precisa — autenticação, validação, upload, cache, etc. Um framework sem ecossistema força você a implementar tudo do zero.

Performance: para aplicações com muitos usuários simultâneos, performance é crítica. Compare benchmarks e estudos de caso.

Escalabilidade: o framework suporta o crescimento do projeto? Microsserviços, cache, balanceamento de carga?

Manutenção: verifique o histórico de commits, releases e issues no GitHub. Um framework sem atualizações há meses é um risco.

Licença: verifique se a licença é compatível com o seu projeto. Frameworks open source geralmente usam MIT, Apache ou BSD — que são permissivas.
-->

---

## Matriz de Decisão

| Projeto | Recomendação | Justificativa |
|---------|--------------|---------------|
| API simples (Node.js) | **Express** | Minimalista, flexível, fácil de aprender |
| API enterprise (Node.js) | **NestJS** | Arquitetura modular, TypeScript, testável |
| Aplicação completa (Python) | **Django** | Baterias incluídas, produtivo, seguro |
| SPA complexa | **React** ou **Angular** | Ecossistema maduro, comunidade ativa |
| SPA leve | **Vue.js** | Fácil de aprender, progressivo |
| SEO + Performance | **Next.js** | SSR, SSG, otimizado para busca |
| Chat / Tempo real | **WebSockets** + framework | Push-based, conexão persistente |

<!--
FALA DO PROFESSOR:

Esta matriz é um ponto de partida — não uma regra absoluta. Cada projeto tem suas particularidades.

Para uma API simples em Node.js, Express é a escolha padrão. É minimalista, flexível e fácil de aprender.

Para uma API enterprise em Node.js, NestJS é mais adequado. Sua arquitetura modular e suporte a TypeScript facilitam projetos grandes com equipes maiores.

Para uma aplicação completa em Python, Django é imbatível. ORM, admin, autenticação — tudo integrado.

Para SPAs complexas, React ou Angular são as escolhas mais maduras. React é mais flexível, Angular é mais estruturado.

Para SPAs leves, Vue.js é excelente. Fácil de aprender, progressivo e com boa performance.

Para aplicações que precisam de SEO e performance, Next.js é a escolha. SSR e SSG garantem que o conteúdo seja indexado por mecanismos de busca.

Para aplicações em tempo real, WebSockets combinados com qualquer framework back-end são a solução.

Lembre-se: a melhor escolha depende do contexto. Não existe framework universal.
-->

---

## Erros Comuns na Escolha

| Erro | Consequência | Correção |
|------|--------------|----------|
| Escolher por hype | Tecnologia inadequada para o projeto | Avaliar critérios objetivos |
| Ignorar a equipe | Equipe não consegue usar | Considerar curva de aprendizagem |
| Não avaliar ecossistema | Falta de plugins e integrações | Verificar disponibilidade |
| Escolher framework muito novo | Comunidade pequena, bugs não resolvidos | Preferir frameworks maduros |
| Não considerar manutenção | Framework descontinuado | Verificar histórico de commits |

<!--
FALA DO PROFESSOR:

Vamos revisar os erros mais comuns.

O primeiro erro é escolher por hype. "React está em alta, vamos usar React!" — mas o projeto é um site estático que não precisa de React. A escolha deve ser baseada em critérios objetivos, não em modismo.

O segundo erro é ignorar a equipe. Se a equipe conhece Python e você escolhe Java com Spring, haverá um custo de aprendizagem significativo. Considere o conhecimento existente.

O terceiro erro é não avaliar o ecossistema. Se você precisa de autenticação, validação e upload, verifique se o framework tem plugins para isso. Caso contrário, terá que implementar tudo do zero.

O quarto erro é escolher um framework muito novo. Frameworks novos podem ter bugs, documentação incompleta e comunidade pequena. Prefira frameworks maduros e ativamente mantidos.

O quinto erro é não considerar a manutenção. Se o framework não é atualizado há meses, pode ser abandonado. Verifique o histórico de commits e releases no GitHub.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. A escolha do framework deve ser baseada em **critérios objetivos**;
2. Os principais critérios são: comunidade, documentação, curva de aprendizagem, ecossistema, performance e escalabilidade;
3. **Não existe framework universal** — a escolha depende do contexto;
4. Erros comuns incluem escolher por hype, ignorar a equipe e não avaliar o ecossistema;
5. A escolha deve ser **justificada tecnicamente**.

---

**Pergunta reflexiva:**

> Se você tivesse que escolher um framework para um projeto que vai durar 5 anos, qual critério seria mais importante? Por quê?

**Próxima aula:** Aula ao vivo — Frameworks na prática — Vamos construir uma aplicação com framework.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva é sobre longevidade. Para um projeto de 5 anos, o critério mais importante provavelmente é manutenção e comunidade. Você precisa de um framework que será mantido e atualizado por anos, com uma comunidade ativa que responda dúvidas e corrija bugs.

Na próxima aula — aula ao vivo — vamos colocar frameworks em prática. Vamos construir uma aplicação completa usando Express e comparar com o que fizemos manualmente na Unidade 1.
-->

---

<!-- _class: bg-fim -->

#
