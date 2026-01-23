# 🚀 Stardust Ledger - Documentação Arquitetural

## Parte A: Engenharia da Nave (Técnico)

### 1. Decisões de Design

#### Backend
Escolhi Node.js + Express pela experiência que já tenho com a tecnologia. Estava em dúvida em aprender Go para fazer o desafio, mas decidi manter Node pela facilidade que tenho e também para entregar o desafio com maestria. Porém, gostaria muito de aprender Go para futuros projetos.

Utilizei também Jest e Supertest para os testes no backend, também por causa da experiência prévia que tinha com essas tecnologias.

Mantive o design de pastas do backend simples por se tratar de uma API com apenas 3 endpoints. Porém, normalmente não costumo fazer assim, seguiria algum padrão de arquitetura para o backend com separação de pastas em middlewares, services, routes, DTOs, etc.

#### Frontend
No front-end escolhi React + Vite também por experiência prévia. Sou desenvolvedor React há quase 2 anos e sempre tive preferência por essa biblioteca. Também quis aprender Vue para o desafio, mas quis manter React para fazer com maestria.

Também escolhi TypeScript para fazer uma boa sinergia com o React. Por ser mais maduro que o JavaScript, prefiro construir os componentes em TS do que em JS.

Na parte dos estilos, preferi fazer em Styled Components também pela experiência prévia e pela organização que ele traz.

Na parte dos testes, escolhi o Vitest pela facilidade de integração, visto que estava fazendo em Vite, e coloquei o Testing Library junto.

---

### 2. Escalabilidade (1 Milhão de Usuários)

**Onde o backend falharia primeiro com 1M de usuários?**

Com toda certeza falharia pela falta de um banco de dados. Juntamente com isso, a falta de cache também seria um problema. O que eu faria para mudar seria:

**Implementar um banco de dados** (pode ser não relacional como MongoDB ou relacional como PostgreSQL), escalando assim a aplicação para ficar mais consistente.

**Mudar a arquitetura do back-end** para uma mais robusta e consistente, com separação de camadas (controllers, services, repositories).


---

### 3. Atomic Design - Como Ajudou

Ela ajudou muito na hora de perceber a diferença de componentes que a aplicação tem. Com esse design fica claro como alguns componentes podem ser muito reutilizáveis e qual a importância deles para a aplicação como um todo. 

Há 1 ano atrás tive o primeiro contato com esse padrão e até hoje não faço nenhum projeto sem ele. A separação em Atoms → Molecules → Organisms força você a pensar em componentes verdadeiramente genéricos e reutilizáveis.

**Benefícios observados:**
- Componentes menores são mais fáceis de testar
- Reutilização real (ex: Button usado em vários lugares)
- Storybook documenta cada peça isoladamente
- Onboarding de novos desenvolvedores fica mais fácil

---

### 4. Uso de IA

Utilizei principalmente o Claude e o ChatGPT. Usei eles desde planejamento de projeto até code review. 

A IA, de certa forma, ajudou muito na produtividade por se tratar de um projeto com regra de negócio simples, então implementar código com elas foi um trabalho facilitado - claro, com responsabilidade e decência. 

Muitas vezes debati com a IA sobre o porquê ela gerou tal coisa ou por que foi para este caminho, dando sugestões de onde seguir e questionando decisões. Nunca aceitei código que não entendia, sempre pedia explicações linha a linha.

**Como mantive controle:**
- Questionei todas as sugestões
- Pedi explicações detalhadas
- Escrevi todos os commits manualmente
- Adaptei o código gerado ao meu estilo

---

## Parte B: Diário de Bordo (Pessoal & Processo)

### 1. Turbulências (Dificuldades)

Minha maior dificuldade foi aplicar o TDD com maestria no back-end e no front-end. Não estava acostumado a utilizar essa metodologia e foi algo novo para mim. 

Gostei muito de utilizá-la, pois é visível que é uma metodologia que é um divisor de águas para quem faz software. Você começar por testes e depois construir algo a partir disso muda todo o jeito de pensar. Tanto é que fiz isso até no front-end para testar e tive um feedback muito positivo.

**Desafios específicos:**
- Escrever teste antes da implementação era contra-intuitivo no início
- Commits Red-Green-Refactor exigem disciplina
- Resistir à tentação de implementar direto

---

### 2. Velocidade de Cruzeiro (O que fluiu)

Acredito que teve dois momentos em que o código fluiu muito: quando eu entendi a implementação do TDD e depois que começou o front-end.

**No TDD do back-end:** Quando tive o entendimento prático e, por ser uma API simples, tudo ficou mais claro e fácil de se fazer.

**No front-end:** Fluiu bem porque tenho mais proficiência nessa área. E como esse desafio preza mais por como foi pensado o código ao invés de mostrar o que foi feito, acho que o front foi o que mais fluiu.

---

### 3. Feedback do Protocolo (TDD + Container/Presenter)

**Sobre o TDD:** 

De primeiro momento fiquei perdido em o que fazer. Depois de pesquisar bem e começar a aplicar, vi que não era tão difícil como pensei. Ser obrigado a usá-lo foi uma experiência muito top e que acredito que foi bem produtiva para mim, além de aprender algo novo que nunca tinha aplicado.

**Maior insight:** O teste vira uma especificação executável. Você sabe exatamente o que precisa implementar.

**Sobre os componentes Dumb e Smart (Container e Presenter):**

É uma metodologia que também é um pouco de novidade. Eu, na verdade, sempre construí meus componentes assim, mas não sabia que isso tinha nome kkkkk. 

Sobre essa diferença de componentes que lidam somente com props e outros para chamadas de API e afins, eu já tinha experiência. Mas aplicar de forma consciente e rigorosa me fez perceber benefícios que eu não via antes: componentes visuais ficam realmente reutilizáveis e os testes ficam muito mais simples.

---

## 🎯 Conclusão

Em resumo, fiquei muito feliz em fazer este desafio. Acredito que edificou muito no meu aprendizado e fez girar uma chave importante na minha maneira de pensar como o software é produzido.

## Vídeo

Segue abaixo o link do vídeo no Youtube da demonstração do desafio.

https://youtu.be/FryvclvhflM

Este desafio me tirou da zona de conforto e me mostrou que há sempre formas melhores de fazer as coisas, basta estar disposto a aprender.

---
