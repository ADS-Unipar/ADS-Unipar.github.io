
### Instruções de formatação dos slides

* **Fontes Indicadas:** Calibri, Century Gothic e Comic Sans
* **Fonte para o Título:** Mínimo 29 e Máximo 32;
* **Fonte para o Conteúdo:** 24 até 29, **com alinhamento justificado;**
* As letras e as imagens **não podem sobrepor a slogan UNIPAR/EAD;**

### Cores

Utilizar preferencialmente a cor preta para as fontes.
Quando necessário, é permitido o uso das cores previstas na paleta oficial do Manual da Marca da Unipar.

**Paleta indicada na imagem:**

* **R194, G40, B32** — C1, M95, Y94, K0 — **PANTONE 485**
* **R235, G128, B135** — C0, M63, Y32, K0 — **PANTONE 177**
* **R92, G32, B52** — C35, M95, Y51, K52 — **PANTONE 7421**
* **R39, G36, B37** — C72, M67, Y59, K79 — **PANTONE Neutral Black**

### Destaques e títulos

* **Título sempre em Negrito;**
* Destacar as partes importantes com **negrito**, <u>sublinhado</u> ou **vermelho escuro;**

### Backgrounds (Imagens de Fundo)

As imagens de fundo devem ser aplicadas utilizando as classes CSS definidas no frontmatter do arquivo MARP. Existem **3 imagens de fundo**, cada uma com uma função específica:

#### `bg-capa.png` — Slide de abertura

* Usado no **slide de título de cada aula**, na **capa da disciplina** e no slide de **próxima unidade**;
* Aplicar via `<!-- _class: bg-capa -->` antes do slide;
* Os textos nesse slide devem ser **brancos** (`color: #ffffff`), pois o fundo é escuro;
* O conteúdo deve ficar **centralizado** (título e subtítulo);
* **Não adicionar** elementos que sobreponham a slogan UNIPAR/EAD.

#### `bg-padrao.png` — Slides de conteúdo

* Usado como **background padrão** de todos os slides de conteúdo (explicações, listas, tabelas, códigos, diagramas);
* Aplicado automaticamente via CSS na classe `section` padrão;
* Os textos nesse slide devem seguir a cor preta (`#272425`) como padrão;
* Títulos em vermelho escuro (`#C22820`), subtítulos em vinho (`#5C2034`).

#### `bg-fim.png` — Slide de encerramento

* Usado como **slide em branco de transição** ao final de cada aula;
* Aplicar via `<!-- _class: bg-fim -->` antes do slide;
* O slide deve conter apenas `# ` (título vazio) para não sobrepor elementos ao fundo;
* Funciona como **separador visual** entre uma aula e outra.

#### Estrutura de aplicação no MARP

```yaml
# No frontmatter (YAML), definir o CSS:
style: |
  section {
    background-image: url('bg-padrao.png');
    background-size: cover;
    background-position: center;
  }
  section.bg-capa {
    background-image: url('bg-capa.png');
    background-size: cover;
    background-position: center;
  }
  section.bg-fim {
    background-image: url('bg-fim.png');
    background-size: cover;
    background-position: center;
  }
```

#### Sequência padrão de slides por aula

```
<!-- _class: bg-capa -->    ← Título da aula (bg-capa)
# Aula XX
## Título da Aula

---                          ← Conteúdo da aula (bg-padrao automático)
## Tópico 1
...

---                          ← Conteúdo da aula (bg-padrao automático)
## Tópico 2
...

<!-- _class: bg-fim -->      ← Slide de encerramento (bg-fim)
#
```

#### Regras importantes

* As imagens **não podem sobrepor** a slogan UNIPAR/EAD;
* Os arquivos `.png` devem estar na **mesma pasta** do arquivo `.md`;
* O `bg-capa` é usado **uma vez** no início de cada aula;
* O `bg-fim` é usado **uma vez** no final de cada aula;
* O `bg-padrao` é aplicado **automaticamente** a todos os outros slides;
* Textos sobre `bg-capa` devem ser **brancos**; textos sobre `bg-padrao` devem ser **pretos**.

### Atualização dos slides

**Anualmente, os slides das aulas ao vivo devem ser atualizados e entregues em conformidade com os padrões estabelecidos pela Coordenação Geral da EaD.**
