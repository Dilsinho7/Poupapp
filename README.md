# 💰 Poupapp

> Painel de finanças pessoais para acompanhar orçamento diário, meta de economia, movimentações e contas bancárias em um só lugar.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?logo=css3&logoColor=white)

## 📌 Sobre o projeto

O **Poupapp** é uma interface de dashboard financeiro construída com **React** e **Vite**, com tema escuro e textos em português do Brasil. A tela reúne, em cards, o que a pessoa precisa saber para entender suas finanças no dia: quanto ainda pode gastar hoje, quanto já avançou na meta de economia, quais foram as últimas movimentações e qual é o saldo de cada conta.

A página é dividida em uma **barra lateral** (com o logo) e uma **área principal** com busca, saudação e uma grade 2×2 de cards:

| | |
|---|---|
| Orçamento diário disponível | Progresso da meta financeira |
| Movimentação financeira | Minhas contas |

> ⚠️ **Status: protótipo de front-end.** Os dados (nome, valores, transações e contas) estão fixos no código (_mock_), sem persistência nem integração com API. Os botões e a barra de busca já aparecem na interface, mas ainda não executam ações.

## ✨ Funcionalidades

- **Saudação e resumo do dia** — cabeçalho "Olá, Adilson!" com um convite para ver como estão as finanças.
- **Orçamento diário disponível** — destaca quanto pode ser gasto por dia (hoje fixo em R$ 200,00).
- **Progresso da meta financeira** — barra de progresso com transição suave e o percentual alcançado (hoje 40%).
- **Movimentação financeira** — lista de transações com descrição, valor e data. Entradas aparecem em verde-limão e saídas em laranja, de acordo com o sinal do valor.
- **Minhas contas** — lista de bancos com o saldo de cada um.
- **Busca** — campo "Procure seu dinheiro..." (apenas visual por enquanto).
- **Formatação em pt-BR** — valores em reais (`Intl.NumberFormat`) e datas no padrão brasileiro (`toLocaleDateString`).

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [React 19](https://react.dev/) | Construção da interface em componentes |
| [Vite 8](https://vite.dev/) | Servidor de desenvolvimento e build |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | Suporte a JSX e Fast Refresh no Vite |
| [CSS Modules](https://github.com/css-modules/css-modules) | Estilos isolados por componente, com variáveis CSS globais |
| [ESLint 10](https://eslint.org/) | Análise estática (com `eslint-plugin-react-hooks` e `eslint-plugin-react-refresh`) |
| [Google Fonts](https://fonts.google.com/specimen/Work+Sans) | Tipografia (Work Sans) |

## 📁 Estrutura do projeto

```
Poupapp/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── src/
    ├── main.jsx               # Ponto de entrada (monta o React em #root)
    ├── App.jsx                # Composição da página: layout e cards
    ├── app.module.css         # Layout da página (grid dos cards)
    ├── index.css              # Variáveis de cor (design tokens) e estilos globais
    ├── assets/
    │   └── logo.svg
    └── components/
        ├── Aside/             # Barra lateral com logo e aviso de projeto fictício
        ├── Banks/             # Lista de contas + botão "Adicionar conta"
        ├── BankItem/          # Linha de uma conta (nome do banco e saldo)
        ├── Button/            # Botão com borda arredondada
        ├── Card/              # Card composto: Card.Header e Card.Body
        ├── Container/         # Wrapper central da página (largura máxima de 1200px)
        ├── DailyBudget/       # Valor do orçamento diário
        ├── Input/             # Campo de texto base
        ├── Main/              # Área principal de conteúdo
        ├── ProgressBar/       # Barra de progresso em porcentagem
        ├── SavingStatus/      # Card de meta de economia (ícone + barra)
        ├── SearchInput/       # Campo de busca com ícone
        ├── TransactionItem/   # Linha de uma transação (entrada ou saída)
        ├── Transactions/      # Lista de transações + botão "Adicionar transação"
        ├── Typography/        # Títulos e textos padronizados (h1, h2, body)
        └── icons/             # Ícones SVG (busca, economia, moeda, carteira, banco)
```

Cada componente fica em sua própria pasta, com um `index.jsx` e um arquivo `*.module.css` com os estilos.

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) **20.19+** ou **22.13+**
- npm (já vem com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Dilsinho7/Poupapp.git

# 2. Entre na pasta do projeto
cd Poupapp

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, acesse o endereço exibido no terminal (por padrão, `http://localhost:5173`).

### Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com recarregamento automático |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve localmente o build de produção para conferência |
| `npm run lint` | Executa o ESLint em todo o projeto |

## 🎨 Identidade visual

As cores ficam centralizadas como variáveis CSS em `src/index.css`:

| Variável | Cor | Onde é usada |
|---|---|---|
| `--neutral-darker` | `#1C1D21` | Fundo da barra de progresso |
| `--neutral-background` | `#212229` | Fundo da página |
| `--neutral-surface` | `#2A2C34` | Cards e campo de busca |
| `--neutral-header` | `#33353F` | Barra lateral, cabeçalho dos cards e divisores |
| `--neutral-text` | `#F5F5F5` | Textos e ícones |
| `--primary-highlight` | `#7693FF` | Destaques (orçamento diário e barra de progresso) |
| `--secondary-income` | `#D6FF62` | Entradas e título da meta de economia |
| `--secondary-expense` | `#F87828` | Saídas |

## 🧩 Como o código funciona

### Dados de exemplo

Por enquanto, os dados ficam diretamente nos componentes:

| O que | Onde alterar |
|---|---|
| Nome na saudação, orçamento diário (`value={200}`) e meta (`percent={40}`) | `src/App.jsx` |
| Transações | `src/components/Transactions/index.jsx` |
| Contas e saldos | `src/components/Banks/index.jsx` |

```js
// Transação: valor negativo = saída, valor positivo = entrada
{ description: "iFood", value: -20, date: "2024-10-01T00:00:00-03:00" }

// Conta bancária
{ bank: "Anybank", balance: 1200 }
```

### Card como componente composto

O `Card` expõe `Card.Header` e `Card.Body`, o que deixa a composição da página bem legível:

```jsx
<Card>
  <Card.Header>Orçamento diário disponível:</Card.Header>
  <Card.Body>
    <DailyBudget value={200} />
  </Card.Body>
</Card>
```

### Typography

O componente `Typography` recebe uma `variant` (`h1`, `h2` ou `body`) e renderiza a tag HTML e o estilo correspondentes. Se a variante for inválida, ele usa um parágrafo (`p`) por padrão.