---
marp: true
theme: default
paginate: true
class: lead
---

# Frameworks de Desenvolvimento de Software

## Uma visão geral dos frameworks mais populares, suas linguagens, arquiteturas, prós e contras

---

# O que é um Framework?

- Um conjunto de ferramentas e bibliotecas que facilitam o desenvolvimento de software.
- Fornece uma estrutura padrão para a construção e a implementação de aplicações.
- Reduz a repetição de código e melhora a produtividade.

---

# Frameworks Populares
--- 
### Frontend:
- [Angular](https://angular.io/)
- [Vue.js](https://vuejs.org/)

### Backend:
- [Django](https://www.djangoproject.com/)
- [Ruby on Rails](https://rubyonrails.org/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Laravel](https://laravel.com/)
- [Adonis](https://adonisjs.com/)
- [Express.js](https://expressjs.com/)
- [NestJS](https://nestjs.com/)
- [Koa.js](https://koajs.com/)

---

### Mobile:
- [Flutter](https://flutter.dev/)
- [React Native](https://reactnative.dev/)
- [Xamarin](https://dotnet.microsoft.com/apps/xamarin)

### Full-Stack:
- [Next.js](https://nextjs.org/)
- [Laravel](https://laravel.com/)
- [Symfony](https://symfony.com/)
- [CodeIgniter](https://codeigniter.com/)

---

# Frameworks Opinativos vs Não Opinativos
---

- **Opinativo:**
  - Fornece uma maneira específica e geralmente restrita de construir aplicações.
  - Promove convenções que devem ser seguidas.
  - Pode aumentar a produtividade ao reduzir a necessidade de decisões arquiteturais.

---

- **Não Opinativo:**
  - Oferece mais liberdade ao desenvolvedor para decidir como estruturar e organizar o código.
  - Mais flexível, mas pode exigir mais esforço para configurar e manter.
  - Ideal para projetos onde requisitos personalizados são necessários.

---

# Frameworks Opinativos
---
## Ruby on Rails

- **Linguagem:** Ruby
- **Arquitetura:** MVC (Model-View-Controller)
- **Prós:**
  - Alta produtividade devido às convenções.
  - Ferramentas integradas como Active Record e Action View.
  - Grande comunidade e suporte.
- **Contras:**
  - Pode ser restritivo para projetos que não se encaixam nas convenções.
  - Desempenho pode ser um problema em aplicações muito grandes.
- **Melhor uso:**
  - Ideal para startups e projetos que necessitam de um rápido desenvolvimento e lançamento no mercado.

---

## Django

- **Linguagem:** Python
- **Arquitetura:** MTV (Model-Template-View)
- **Prós:**
  - Inclui uma série de funcionalidades prontas.
  - Segurança integrada.
  - Excelente documentação.
- **Contras:**
  - Estrutura rígida que pode ser limitante para projetos não convencionais.
  - Curva de aprendizado para iniciantes.
- **Melhor uso:**
  - Adequado para aplicações web complexas e projetos que requerem segurança robusta.

---

## Laravel

- **Linguagem:** PHP
- **Arquitetura:** MVC (Model-View-Controller)
- **Prós:**
  - Sintaxe elegante e intuitiva.
  - Grande quantidade de pacotes e bibliotecas.
  - Bom para desenvolvimento rápido.
- **Contras:**
  - Pode ser pesado para pequenas aplicações.
  - Desempenho pode ser um problema com crescimento.
- **Melhor uso:**
  - Perfeito para sistemas de gestão de conteúdo e aplicações com funcionalidades diversas.

---

## AdonisJS

- **Linguagem:** JavaScript (Node.js)
- **Arquitetura:** MVC (Model-View-Controller)
- **Prós:**
  - Inspirado em Laravel, aproveita a popularidade de Node.js.
  - Boa documentação e comunidade crescente.
  - ORM integrado e ferramentas para desenvolvimento rápido.
- **Contras:**
  - Menor comunidade comparada a outros frameworks estabelecidos.
  - Pode não ser adequado para todas as necessidades de performance.
- **Melhor uso:**
  - Projetos que precisam da simplicidade do Laravel mas no ecossistema Node.js.

---

# Frameworks Não Opinativos
---

## Express.js

- **Linguagem:** JavaScript
- **Arquitetura:** Nenhuma especificada, flexível
- **Prós:**
  - Leve e minimalista.
  - Flexibilidade para construir a aplicação da maneira desejada.
  - Grande quantidade de middleware disponível.
- **Contras:**
  - Necessidade de configurar muitas partes do zero.
  - Pode ser difícil de gerenciar em grandes projetos.
- **Melhor uso:**
  - Ideal para aplicações pequenas e médias, APIs e serviços de microserviços.

---

## NestJS

- **Linguagem:** TypeScript
- **Arquitetura:** Modular
- **Prós:**
  - Suporte a TypeScript.
  - Modular e escalável.
  - Suporte a microserviços.
- **Contras:**
  - Complexidade inicial pode ser intimidadora.
  - Menos flexível que Express.js devido à sua estrutura mais formal.
- **Melhor uso:**
  - Projetos empresariais que requerem uma arquitetura escalável e modular.

---

## Koa.js

- **Linguagem:** JavaScript
- **Arquitetura:** Nenhuma especificada, flexível
- **Prós:**
  - Utiliza ES6 generators para middlewares elegantes.
  - Menos opinativo e mais modular que Express.js.
  - Leve e de alto desempenho.
- **Contras:**
  - Menor quantidade de middleware disponível comparado ao Express.js.
  - Curva de aprendizado devido aos generators.
- **Melhor uso:**
  - Aplicações que precisam de alta performance e flexibilidade com uma abordagem mais moderna.

---

## Symfony

- **Linguagem:** PHP
- **Arquitetura:** MVC (Model-View-Controller)
- **Prós:**
  - Altamente configurável e flexível.
  - Componentes reutilizáveis.
  - Bom para grandes aplicações empresariais.
- **Contras:**
  - Curva de aprendizado íngreme.
  - Pode ser excessivo para pequenas aplicações.
- **Melhor uso:**
  - Projetos de grande escala e aplicações empresariais que requerem um alto grau de customização.

---

## CodeIgniter

- **Linguagem:** PHP
- **Arquitetura:** MVC (Model-View-Controller)
- **Prós:**
  - Leve e de alto desempenho.
  - Fácil de configurar e usar.
  - Boa documentação.
- **Contras:**
  - Menos recursos integrados comparado a outros frameworks.
  - Comunidade menor.
- **Melhor uso:**
  - Ideal para pequenas a médias aplicações web que necessitam de rapidez e eficiência.

---

## Next.js

- **Linguagem:** JavaScript/TypeScript (Node.js)
- **Arquitetura:** SSR (Server-Side Rendering), SSG (Static Site Generation)
- **Prós:**
  - Suporte a renderização híbrida (SSR e SSG).
  - Fácil de integrar com APIs e outros serviços.
  - Otimizações de desempenho integradas.
- **Contras:**
  - Pode ser complexo para iniciantes.
  - Curva de aprendizado para entender todas as funcionalidades avançadas.
- **Melhor uso:**
  - Ideal para aplicações React que requerem SEO e performance otimizados, como blogs, sites de e-commerce e portais de conteúdo.

---

# Frameworks Opinativos
---

## Spring Boot

- **Linguagem:** Java
- **Arquitetura:** Microservices, MVC (Model-View-Controller)
- **Prós:**
  - Configuração automática para aplicações Spring.
  - Suporte robusto para desenvolvimento de microservices.
  - Grande ecossistema e integração fácil com outras tecnologias Spring.
- **Contras:**
  - Pode ser complexo para iniciantes.
  - Configuração e customização avançadas podem ser difíceis.
- **Melhor uso:**
  - Aplicações empresariais de grande porte e projetos que necessitam de microservices.

---

# Conclusão

- A escolha entre frameworks opinativos e não opinativos depende das necessidades do projeto e da equipe.
- **Frameworks opinativos** são ótimos para projetos que beneficiam de convenções fortes e uma estrutura padrão.
- **Frameworks não opinativos** são ideais para projetos que precisam de mais flexibilidade e personalização.
- Avaliar as características, prós e contras, e as necessidades específicas do projeto ajuda a tomar a melhor decisão.

---

# Perguntas?

