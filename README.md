# DeliveryCar (MyRide)

Aplicação web de mobilidade feita em React para simular o fluxo de uma plataforma de corridas, com foco em cadastro de motoristas, consulta de trajetos e gestão simples de usuários.

## Visão geral

O projeto está dividido em duas partes:

- **`deliveryCar/`**: frontend em React + Vite
- **`backend/`**: base mock (`db.json`) usada com JSON Server

## Recursos principais

- **Landing page para solicitar carona** com busca rápida de rota e atalho para abrir o trajeto no Google Maps.
- **Calculadora de corrida** com origem e destino por país/cidade, cálculo de distância (Haversine) e estimativa de preço.
- **Cadastro de motorista** com validação de campos (nome, e-mail, código e localidade) e opção de informar tipo de veículo.
- **Fluxo de confirmação de cadastro** exibindo os dados enviados e opção de corrigir informações.
- **Dashboard de motoristas** com listagem dos registros, visualização de detalhes e ação de exclusão.
- **Autenticação básica** com modal de cadastro/login e rotas protegidas para dashboard e perfil.
- **Perfil do usuário** com logout, exclusão de conta e histórico simples de notificações.
- **Página de app mobile** com CTA para loja e avaliação por estrelas.
- **Página de contato** com links do autor para GitHub e LinkedIn.

## Stack

- React 18 + Vite
- Redux Toolkit + Redux Persist
- React Router DOM
- Material UI (MUI)
- React Hook Form + Yup
- Vitest + Testing Library
- JSON Server (mock de API)

## Como rodar localmente

### 1) Backend mock

Na raiz do repositório:

```bash
npx json-server --watch backend/db.json --port 3000
```

### 2) Frontend

Em outro terminal:

```bash
cd deliveryCar
npm install
npm run dev
```

Aplicação disponível em: `http://localhost:5173`

## Scripts do frontend

No diretório `deliveryCar/`:

- `npm run dev` — sobe ambiente de desenvolvimento
- `npm run build` — gera build de produção
- `npm run preview` — pré-visualiza build local
- `npm run lint` — executa ESLint
- `npm run test` — executa testes com Vitest
- `npm run coverage` — executa testes com cobertura
