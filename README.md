
<h1 align="center">
  <br>
  <a href="#"><img src="https://nestjs.com/img/logo-small.svg" alt="NestJS Logo" width="100"></a>
  <br>
  Projeto de Aprendizado com NestJS
  <br>
</h1>

<h4 align="center">Uma API backend desenvolvida como parte do curso completo de NestJS disponível na Udemy.</h4>

<p align="center">
  <a href="https://nestjs.com" target="_blank"><img src="https://img.shields.io/badge/NestJS-%E2%9D%A4-red" alt="NestJS Badge"></a>
  <a href="https://www.udemy.com/course/nestjs-do-zero" target="_blank"><img src="https://img.shields.io/badge/Udemy-Curso-blue" alt="Curso Udemy"></a>
  <a href="https://github.com/stanycruz" target="_blank"><img src="https://img.shields.io/badge/GitHub-StanislawCruz-black" alt="GitHub Badge"></a>
</p>

<p align="center">
  <a href="#principais-funcionalidades">Funcionalidades</a> •
  <a href="#estrutura-do-projeto">Estrutura</a> •
  <a href="#como-utilizar">Como Utilizar</a> •
  <a href="#tecnologias-utilizadas">Tecnologias</a> •
  <a href="#licença">Licença</a>
</p>

---

## 📌 Principais Funcionalidades

- API RESTful construída com NestJS do zero
- Estrutura modular e escalável
- DTOs e validações com Pipes
- Filtros de exceção e interceptadores personalizados
- Operações CRUD utilizando Controllers e Services
- Integração com banco de dados PostgreSQL via TypeORM
- Ambiente Dockerizado para desenvolvimento
- Configuração por ambiente com `@nestjs/config`
- Testes unitários e de integração com Jest e Supertest

## 🗂️ Estrutura do Projeto

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── modules/
│   └── exemplo/              # Módulo de exemplo
│       ├── exemplo.controller.ts
│       ├── exemplo.service.ts
│       ├── dto/
│       └── entities/
├── common/
│   ├── filters/
│   ├── interceptors/
│   └── guards/
├── config/
│   └── configuration.ts
test/
```

## 🚀 Como Utilizar

Para clonar e rodar este projeto, você precisará ter [Git](https://git-scm.com), [Node.js](https://nodejs.org/) e [Docker](https://www.docker.com/) instalados.

Este projeto utiliza o [PNPM](https://pnpm.io/) como gerenciador de pacotes.

```bash
# Clone o repositório
$ git clone https://github.com/stanycruz/nestjs-learning-project

# Acesse a pasta do projeto
$ cd nestjs-learning-project

# Instale as dependências
$ pnpm install

# Inicie a aplicação em modo de desenvolvimento
$ pnpm start:dev

# OU com Docker (recomendado)
$ docker-compose up --build
```

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) — Framework para aplicações server-side em Node.js
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript
- [TypeORM](https://typeorm.io/) — ORM para TypeScript/JavaScript
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional
- [Docker](https://www.docker.com/) — Containerização de aplicações
- [Jest](https://jestjs.io/) — Testes automatizados
- [PNPM](https://pnpm.io/) — Gerenciador de pacotes rápido e eficiente

## 📚 Baseado em

Este projeto foi desenvolvido como parte do curso [NestJS do Zero](https://www.udemy.com/course/nestjs-do-zero) da Udemy, com adaptações e customizações feitas por Stanislaw Cruz.

## 🧾 Licença

MIT

---

> GitHub [@stanycruz](https://github.com/stanycruz)
