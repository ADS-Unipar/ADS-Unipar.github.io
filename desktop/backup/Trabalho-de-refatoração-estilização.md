---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
---

# Trabalho Desktop
#### Refatoração e Estilização tela de login

---

- faça um fork repositório https://github.com/ADS-Unipar/auth-electron
- ele vai criar na sua conta uma cópia do repo
- clone ele trabalhe 
- suba para o git
- envie para o form: https://forms.gle/hB3F2mHN6iBMHDKD7

---

### O que devo fazer:

- cria um estilo para tela de login
  - podem utilizar ui kits prontos como: MUI, AntDesign, Tailwind etc.
- ter uma rota autenticada que tenha um botão de logout
  - deve remover o token do `localStorage`
- o menu só pode aparecer nas telas privadas
- caso jé esteja logado redireciona para rota logada
- caso não esteja logado redireciona para tela de login
- altere a url da api pra https://auth-api-zyji.onrender.com/
