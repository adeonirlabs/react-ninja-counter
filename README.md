# React Ninja - Counter

> Este é um projeto do Curso React Ninja.

É sobre um contador onde é possível adicionar, remover, incrementar e decrementar contadores individualmente pois o estado global de cada contador é controlado pelo Redux.

## Projeto original

O projeto original foi desenvolvido há 4 anos atrás e usava o Redux puro, Webpack com Babel e Chai para os testes. Neste projeto, foi feita a migração para o Redux Toolkit, Vite e Vitest.

## Funcionalidades

- Adicionar um novo contador
- Remover um contador existente
- Incrementar o valor de um contador
- Decrementar o valor de um contador

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/): Ferramenta de build rápida para projetos modernos.
- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
- [Tailwind CSS](https://tailwindcss.com/): Framework CSS utilitário para estilização.
- [Vitest](https://vitest.dev/): Framework de testes unitários.
- [Redux Toolkit](https://redux-toolkit.js.org/): Conjunto de ferramentas para gerenciamento de estado.
- [Biome](https://biomejs.dev/): Ferramenta de linting para identificar e corrigir problemas no código e formatação de código

## Instalação

> É necessário ter o [Bun](https://bun.sh/) instalado para rodar os scripts do projeto.

1. Clone o repositório:
```sh
git clone https://github.com/adeonirlabs/react-ninja-counter.git
cd react-ninja-counter
```

2. Instale as dependências
```sh
bun install
```

## Scripts disponíveis

- `bun dev`: Inicia o servidor de desenvolvimento.
- `bun build`: Cria a build de produção.
- `bun preview`: Inicia o servidor de produção.
- `bun lint`: Executa o ESLint e Prettier para identificar problemas e formatar o código.
- `bun run test`: Executa os testes unitários.
