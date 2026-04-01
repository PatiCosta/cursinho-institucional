# cursinho-institucional — Site Institucional

## O que é este projeto

Site público do Cursinho FEA USP. É a porta de entrada para alunos e doadores: exibe informações sobre os cursos, permite que candidatos se inscrevam em turmas, e que apoiadores realizem doações (únicas ou recorrentes via Stripe). Também tem páginas de eventos, tutoria, sobre e depoimentos.

## Stack

- **Next.js 13.2** (Pages Router) + **TypeScript 4.9**
- **Chakra UI v2** — sistema de design; tema customizado em `src/styles/theme.ts`
- **Axios** — client HTTP; configurado em `src/services/api.ts`
- **React Hook Form v7 + Yup** — formulários com validação
- **Stripe** (server-side: `stripe@^14`, client-side: `@stripe/react-stripe-js`)
- **date-fns, crypto-js, qrcode.react, lottie-react**

## Estrutura de pastas

```
src/
├── components/          # Componentes por feature/seção
│   ├── home/            # Seções da homepage
│   ├── inscricoes/      # Fluxo de inscrição de alunos
│   ├── doacoes/         # Fluxo de doações
│   │   └── donationForm/  # Formulário multi-step de doação
│   ├── turmas/          # Listagem de turmas
│   ├── verTurma/        # Detalhe de turma
│   ├── campanha/        # Seção de campanha/meta
│   ├── Header/          # Navbar
│   └── Footer/          # Rodapé
├── context/
│   └── turmas.tsx       # SchoolClassProvider — lista de turmas globalmente
├── interfaces/          # Student.interface.ts, Course.interface.ts
├── lib/
│   └── stripe.ts        # Instância do Stripe (server-side)
├── pages/               # Roteamento Next.js
│   ├── index.tsx        # Redirect para /home
│   ├── home.tsx
│   ├── inscricoes.tsx   # SSG com revalidate 60s
│   ├── inscricoes/      # sucesso, acompanhar
│   ├── doacoes.tsx      # SSR — busca produtos do Stripe
│   ├── doacoes/         # sucesso, gerenciar, painel
│   ├── turmas/          # [id].tsx — detalhe de turma
│   ├── campanha.tsx
│   ├── sobre.tsx
│   ├── eventos.tsx
│   ├── tutorias.tsx
│   ├── inspiracoes.tsx
│   └── api/sitemap.js
├── services/
│   └── api.ts           # Axios com baseURL = NEXT_PUBLIC_API_URL
├── styles/theme.ts
├── types/index.ts
└── utils/               # cpfUtils, cepUtils, cnpjUtils, phoneUtils, formatCreditCard, etc.
```

## Páginas principais

| Página | Rota | Data fetching | Propósito |
|--------|------|--------------|-----------|
| Home | `/home` | Estático | Landing page |
| Inscrições | `/inscricoes` | SSG + revalidate 60s | Exibe turmas abertas + formulário de inscrição |
| Sucesso inscrição | `/inscricoes/sucesso` | — | Confirmação |
| Acompanhar | `/inscricoes/acompanhar` | Client | Consultar status da inscrição |
| Turmas | `/turmas` | Context | Listagem de todas as turmas |
| Detalhe turma | `/turmas/[id]` | Client | Etapas seletivas, documentos para download |
| Doações | `/doacoes` | SSR | Produtos Stripe + formulário de doação |
| Gerenciar doação | `/doacoes/gerenciar` | Client | Portal Stripe para gerenciar assinatura |
| Campanha | `/campanha` | — | Progresso da campanha de arrecadação |
| Sobre | `/sobre` | — | Sobre o cursinho, professores |

## Fluxo de inscrição de aluno

1. Página `/inscricoes` carrega turmas via `getStaticProps` (revalida a cada 60s)
2. Gate de senha simples (`'cursinho2025'`) via `sessionStorage` — controle de acesso temporário
3. Aluno escolhe turma e método de pagamento (PIX ou Cartão)
4. Preenchimento de formulário em `StudentForm.tsx` (dados pessoais, endereço, educação)
   - Busca de endereço automática via ViaCEP no `onBlur` do campo CEP
   - Validação inline: CPF com máscara, confirmação de e-mail, detecção de menor de idade
5. **PIX**: `POST /inscriptions` → recebe QR code + "copia e cola" → polling a cada 5s em `GET /inscriptions/status/{txid}` até confirmação
6. **Cartão**: `POST /inscriptions/checkout` → redireciona para URL do Stripe Checkout
7. Redirect para `/inscricoes/sucesso` ao confirmar pagamento

## Fluxo de doação

1. Página `/doacoes` carrega produtos do Stripe via `getServerSideProps` (filtra `metadata.productType === 'donation'`)
2. Doador escolhe valor e ciclo (único, 1, 3, 6, 12 meses, ou indefinido)
3. Modal `DonationForm` com stepper multi-step: Dados Pessoais → Contato → Endereço → Resumo
4. `POST /donates/checkout` → recebe URL do Stripe Checkout → redireciona
5. Gestão de assinatura recorrente via Stripe Customer Portal

## API

- Variável de ambiente: `NEXT_PUBLIC_API_URL` (ex: `http://localhost:8081`)
- Configurado em `src/services/api.ts`
- Sem autenticação JWT no frontend público — apenas backend valida

Principais endpoints consumidos:
- `GET /schoolClass?status=active` — lista turmas ativas
- `POST /inscriptions` — criar inscrição com PIX
- `POST /inscriptions/checkout` — criar sessão Stripe para inscrição
- `GET /inscriptions/status/{txid}` — polling de status PIX
- `POST /donates/checkout` — criar sessão Stripe para doação

## Stripe (client)

- Inicializado em `src/lib/stripe.ts` com `STRIPE_SECRET_KEY` (server-only, nunca exposto ao browser)
- API version: `2023-10-16`
- Produtos de doação têm `metadata['productType'] = 'donation'`
- Checkout sessions criadas no backend; frontend só recebe a URL e redireciona

## Estado global

- `SchoolClassProvider` (`src/context/turmas.tsx`) expõe `schoolClassList` e `list()` via `useSchoolClass()`
- Estado de formulários via React Hook Form + estado local (`useState`)
- Sem Redux ou Zustand — estado simples por página/componente

## Design system

Tema em `src/styles/theme.ts`:
- **Amarelo** `#E9C46A` / `#FFD15E` — cor primária de ação
- **Azul escuro** `#2a255a` — cor principal de marca
- **Azul claro** `#219EBC` — acento
- Fonte: **Montserrat** (Google Fonts)
- Responsividade via breakpoints do Chakra: `base` (mobile) / `lg` (desktop)

## Utilitários

`src/utils/` contém:
- `cpfUtils.ts` — formatar/validar CPF
- `cnpjUtils.ts` — formatar/validar CNPJ
- `cepUtils.ts` — formatar/parsear CEP (+ integração ViaCEP)
- `phoneUtils.ts` — formatação de telefone
- `formatCreditCard.ts` / `parseCreditCard.ts` — máscara de cartão
- `stateOptions.ts` — lista de estados brasileiros

## Variáveis de ambiente

```
NEXT_PUBLIC_API_URL=http://localhost:8081   # URL do backend (exposta ao browser)
STRIPE_SECRET_KEY=sk_live_...              # Chave Stripe (apenas server-side)
```

## Comandos

```bash
npm run dev      # Next.js dev server
npm run build    # Build de produção
npm run start    # Servir build de produção
npm run lint     # ESLint
```

## Convenções

- Componentes agrupados por feature em `src/components/{feature}/`
- Páginas de detalhe dinâmico em `pages/{resource}/[id]/`
- Formulários sempre com React Hook Form + Yup schema
- Nunca usar `STRIPE_SECRET_KEY` em código client-side — apenas em `getServerSideProps` ou rotas `/api`
- Polling de PIX com `setInterval` + `clearInterval` ao confirmar ou cancelar
- Textos sempre em português brasileiro; formatação monetária via `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`
