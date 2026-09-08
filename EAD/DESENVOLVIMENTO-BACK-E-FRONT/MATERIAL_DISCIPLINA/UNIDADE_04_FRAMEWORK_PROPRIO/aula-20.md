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

# Aula 20

## Vantagens e Desvantagens

**Unidade 4 — Por que desenvolver seu próprio Framework?**

<!--
FALA DO PROFESSOR:

Na aula anterior, entendemos as motivações para criar um framework. Agora vamos aprofundar a análise de vantagens e desvantagens — os trade-offs que todo desenvolvedor precisa considerar antes de tomar essa decisão.
-->

---

## Objetivos de Aprendizagem

Ao final desta aula, o estudante deverá ser capaz de:

- **Analisar** as vantagens de criar um framework próprio;
- **Analisar** as desvantagens e riscos;
- **Avaliar** trade-offs em cenários concretos;
- **Justificar** tecnicamente a decisão de criar ou não criar.

**Taxonomia de Bloom:** Analisar, Avaliar, Justificar.

---

## Vantagens

| Vantagem | Descrição |
|----------|-----------|
| **Leveza** | Apenas o que é necessário — sem overhead |
| **Controle total** | Cada decisão é sua |
| **Aprendizado profundo** | Entende como tudo funciona por dentro |
| **Personalização** | Adaptado exatamente ao problema |
| **Sem dependências** | Não depende de terceiros |
| **Documentação interna** | Você conhece cada linha de código |

<!--
FALA DO PROFESSOR:

As vantagens são significativas. Leveza: seu framework terá apenas o que você precisa. Nada de funcionalidades que você nunca usará. Controle total: cada decisão de design é sua. Se quiser mudar a API, muda. Se quiser adicionar uma funcionalidade, adiciona. Não precisa esperar que o mantenedor do framework aceite seu pull request.

Aprendizado profundo: ao construir um framework, você entende conceitos que usuários de frameworks raramente compreendem — como roteamento funciona internamente, como middlewares são encadeados, como parâmetros são extraídos.

Personalização: o framework é adaptado exatamente ao seu problema. Não há compromissos genéricos.

Sem dependências: você não depende de terceiros. Se o Express tiver um bug, você é afetado. Se o Express mudar a API, você precisa adaptar. Com seu próprio framework, você tem controle total.
-->

---

## Desvantagens

| Desvantagem | Descrição |
|-------------|-----------|
| **Tempo de desenvolvimento** | Construir leva tempo — muito tempo |
| **Manutenção** | Você é responsável por tudo |
| **Sem comunidade** | Sem Stack Overflow, sem plugins |
| **Segurança** | Vulnerabilidades não auditadas por terceiros |
| **Reinvenção da roda** | Resolver problemas já resolvidos |
| **Qualidade** | Frameworks populares são testados por milhões |

<!--
FALA DO PROFESSOR:

As desvantagens são igualmente significativas. Tempo de desenvolvimento: construir um framework leva semanas ou meses. Esse tempo poderia ser gasto na lógica de negócio.

Manutenção: você é responsável por tudo — bugs, atualizações, documentação, testes. Se você sair do projeto, ninguém saberá manter.

Sem comunidade: quando você tem um problema, não pode perguntar no Stack Overflow — ninguém conhece seu framework. Não existem plugins prontos. Não existem tutoriais.

Segurança: frameworks populares são auditados por milhares de desenvolvedores. Vulnerabilidades são encontradas e corrigidas rapidamente. Seu framework não tem essa proteção.

Reinvenção da roda: você pode acabar resolvendo problemas que já foram resolvidos milhares de vezes. Isso é ineficiente.

Qualidade: frameworks populares passaram por anos de refinamento. Sua API foi refinada, seus bugs foram corrigidos, sua performance foi otimizada. É difícil alcançar esse nível de qualidade sozinho.
-->

---

## Análise de Trade-offs

```
                    CRIAR FRAMEWORK
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    VANTAGENS       DESVANTAGENS     CONTEXTO
         │               │               │
    - Leveza        - Tempo         - Projeto
    - Controle      - Manutenção      pequeno?
    - Aprendizado   - Sem comunidade  - Equipe
    - Personalização- Segurança        experiente?
    - Sem deps      - Reinvenção     - Prazo
                                      - Requisitos
                                         específicos?
```

<!--
FALA DO PROFESSOR:

A decisão de criar ou não criar um framework é um trade-off. Não existe resposta certa ou errada — depende do contexto.

Se o projeto é pequeno, a equipe é experiente, o prazo é flexível e os requisitos são específicos, criar pode ser justificável.

Se o projeto é grande, a equipe é iniciante, o prazo é apertado e os requisitos são genéricos, usar um framework existente é mais seguro.

A chave é ser honesto sobre as motivações. Se a motivação é aprendizado, ótimo — crie como exercício. Se a motivação é produção, avalie cuidadosamente os trade-offs.
-->

---

## Síntese da Aula

**Conceitos principais:**

1. **Vantagens:** leveza, controle, aprendizado, personalização;
2. **Desvantagens:** tempo, manutenção, sem comunidade, segurança;
3. A decisão é um **trade-off** que depende do contexto;
4. Para **aprendizado**, criar é sempre válido;
5. Para **produção**, avalie cuidadosamente.

**Pergunta reflexiva:**

> Se você pudesse criar um mini framework em 2 horas que resolvesse exatamente o seu problema, valeria a pena?

**Próxima aula:** Arquitetura de um Framework — Vamos projetar a estrutura do nosso mini framework.

<!--
FALA DO PROFESSOR:

A pergunta reflexiva muda a equação. Se o tempo de desenvolvimento for pequeno e o problema for específico, criar pode ser mais vantajoso do que usar um framework genérico pesado.

Na próxima aula, vamos projetar a arquitetura do nosso mini framework.
-->

---

<!-- _class: bg-fim -->

#
