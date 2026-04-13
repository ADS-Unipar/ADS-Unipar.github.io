---
marp: true
theme: default
paginate: true
size: 16:9
title: Trabalho DER a partir de Dados Não Normalizados
description: Atividade de Banco de Dados para modelagem DER
---

# Trabalho: DER a partir de Dados Não Normalizados

Banco de Dados

---

## Tema

Modelagem de dados a partir de uma base não normalizada

---

## Objetivo do trabalho

Neste trabalho, vocês deverão analisar um conjunto de dados não normalizados e, a partir dele:

1. Identificar entidades.
2. Identificar atributos.
3. Identificar possíveis chaves primárias.
4. Identificar relacionamentos entre as entidades.
5. Definir cardinalidades.
6. Propor um DER coerente com o cenário apresentado.

---

## Contexto do problema

Uma escola técnica deseja informatizar o controle de matrículas dos alunos em disciplinas.

Atualmente, os dados são mantidos em uma única planilha, sem qualquer normalização.

Essa planilha mistura informações de:

1. Alunos
2. Professores
3. Disciplinas
4. Turmas
5. Matrículas

---

## Base de dados não normalizada

Considere a seguinte estrutura:

| MatriculaID | RAAluno | NomeAluno   | EmailAluno      | CodDisciplina | NomeDisciplina      | CargaHoraria | Turma | ProfessorCPF | NomeProfessor | EmailProfessor    | Semestre | NotaFinal | Frequencia |
| ----------- | ------- | ----------- | --------------- | ------------- | ------------------- | ------------ | ----- | ------------ | ------------- | ----------------- | -------- | --------- | ---------- |
| 1           | 2024001 | Ana Lima    | ana@aluno.com   | BD01          | Banco de Dados      | 80           | A     | 11122233344  | Carlos Mendes | carlos@escola.com | 2026-1   | 8.5       | 92         |
| 2           | 2024001 | Ana Lima    | ana@aluno.com   | ENG02         | Engenharia de Soft. | 80           | B     | 55566677788  | Marta Souza   | marta@escola.com  | 2026-1   | 7.8       | 88         |
| 3           | 2024002 | Bruno Alves | bruno@aluno.com | BD01          | Banco de Dados      | 80           | A     | 11122233344  | Carlos Mendes | carlos@escola.com | 2026-1   | 6.9       | 75         |
| 4           | 2024003 | Carla Dias  | carla@aluno.com | UX03          | UX e Prototipação   | 40           | A     | 99988877766  | Renata Lima   | renata@escola.com | 2026-1   | 9.1       | 97         |
| 5           | 2024002 | Bruno Alves | bruno@aluno.com | ENG02         | Engenharia de Soft. | 80           | B     | 55566677788  | Marta Souza   | marta@escola.com  | 2026-1   | 8.0       | 83         |

---

## O que deve ser observado

Ao analisar a tabela, observem que há repetição de dados como:

1. Nome e e-mail do aluno.
2. Nome e e-mail do professor.
3. Nome e carga horária da disciplina.

Isso indica que os dados estão redundantes e misturando entidades diferentes em uma única estrutura.

---

## Sua tarefa

Com base na tabela apresentada, elabore um DER contendo:

1. As entidades identificadas.
2. Os atributos de cada entidade.
3. A chave primária de cada entidade.
4. As chaves estrangeiras, quando existirem.
5. Os relacionamentos entre as entidades.
6. As cardinalidades de cada relacionamento.

---

## Regras para a entrega

O trabalho deve conter:

1. O DER desenhado de forma legível.
2. Uma breve explicação justificando as entidades escolhidas.
3. Uma breve explicação justificando os relacionamentos e cardinalidades.
4. A indicação das chaves primárias e estrangeiras.

---

## Perguntas que devem orientar a análise

Para montar o DER, tentem responder:

1. Um aluno pode estar matriculado em quantas disciplinas?
2. Uma disciplina pode ter quantos alunos?
3. Um professor pode ministrar quantas disciplinas ou turmas?
4. A turma pertence a qual contexto: disciplina, semestre ou professor?
5. A nota final e a frequência pertencem ao aluno, à disciplina ou à matrícula?

---

## Dica metodológica

Antes de desenhar o DER final, façam este processo:

1. Marquem na tabela quais colunas parecem pertencer ao mesmo grupo de informação.
2. Separem os grupos em possíveis entidades.
3. Descubram qual atributo identifica unicamente cada entidade.
4. Verifiquem onde existe relação de muitos para muitos.
5. Avaliem se será necessária uma entidade associativa.

---

## Possível caminho de raciocínio

Vocês devem perceber que existem, no mínimo, indícios de entidades como:

1. Aluno
2. Professor
3. Disciplina
4. Matrícula
5. Possivelmente Turma

Mas a decisão final deve ser justificada por vocês com base na interpretação do cenário.

---

## Forma de entrega

Entregar:

1. Um arquivo PDF com o DER.
2. Um arquivo com a justificativa textual.

Ferramentas sugeridas:

1. draw.io
2. dbdiagram.io
3. BrModelo
4. Lucidchart

---

## Critérios de avaliação

| Critério                                     | Peso |
| -------------------------------------------- | ---- |
| Identificação correta das entidades          | 2,0  |
| Identificação correta dos atributos          | 2,0  |
| Definição de chaves primárias e estrangeiras | 2,0  |
| Relacionamentos e cardinalidades             | 2,0  |
| Clareza e organização da entrega             | 2,0  |

---

## Desafio extra

Após montar o DER, descrevam quais tabelas relacionais seriam geradas a partir dele.

---

## Observação final

O objetivo do trabalho não é apenas “desenhar um diagrama”, mas demonstrar que vocês conseguem interpretar dados desorganizados e transformá-los em uma estrutura lógica de banco de dados.
