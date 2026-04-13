# Cartório Dashboard

Dashboard operacional para **monitoramento de protocolos, pendências documentais, produtividade, SLA e indicadores gerenciais**, pensado para cenários de **cartórios, legal ops e fluxos jurídico-documentais**.

Este projeto complementa um portfólio em **legal tech**, demonstrando capacidade de construir uma interface de acompanhamento para operações com alto volume documental, múltiplas etapas e necessidade de visibilidade executiva.

## Problema

Em operações cartorárias e documentais, é comum a liderança ter dificuldade para responder rapidamente perguntas como:
- quantos protocolos estão ativos;
- quais casos estão com SLA crítico;
- onde estão as principais pendências;
- qual status concentra mais volume;
- como está a produtividade operacional ao longo do tempo.

Sem um painel centralizado, a análise tende a depender de planilhas, controles paralelos e consultas manuais.

## Solução

O **Cartório Dashboard** entrega uma interface web com:
- autenticação demonstrativa para apresentação do fluxo;
- visão executiva por KPIs;
- tabela operacional com busca e filtro por status;
- gráficos de volume e distribuição da operação;
- estrutura preparada para integração com API real.

Nesta versão de portfólio, os dados são mockados, mas a aplicação já está organizada para consumir endpoints de uma API como a **cartorio-workflow-api**.

## Stack

- **React**
- **TypeScript**
- **Vite**
- **Recharts**
- **CSS modularizado por responsabilidade visual**

## Funcionalidades

- Tela de login demonstrativa
- KPIs operacionais
- Busca por protocolo ou requerente
- Filtro por status
- Gráfico de volume mensal
- Gráfico de distribuição por status
- Tabela com protocolos recentes
- Layout responsivo
- Preparação para integração com API via `VITE_API_BASE_URL`

## Estrutura do projeto

```text
src/
  components/
  data/
  App.tsx
  main.tsx
  index.css
  types.ts
.env.example
README.md
package.json
vite.config.ts
```

## Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/cartorio-dashboard.git
cd cartorio-dashboard
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Copie `.env.example` para `.env`.

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### 4. Rodar o projeto

```bash
npm run dev
```

O painel ficará disponível em:

```bash
http://localhost:5173
```

## Acesso demonstrativo

Use as credenciais já preenchidas na tela inicial:
- **email:** `admin@cartorio.local`
- **senha:** `Admin@123`

## Integração com backend

Para conectar este dashboard a uma API real, a evolução natural é integrar com:
- `GET /protocols`
- `GET /documents/protocol/:id`
- `GET /workflows/protocol/:id`
- `GET /health`

Esses endpoints podem ser servidos pela **cartorio-workflow-api**, formando um ecossistema coerente de portfólio com backend + frontend + regras operacionais.

## Roadmap

- Integração real com autenticação JWT
- Consumo de dados reais de protocolos
- Tela detalhada por protocolo
- Alertas visuais para SLA crítico
- Exportação de relatórios
- Filtros avançados por período, serviço e analista
- Modo dark

## Valor para o portfólio

Este projeto reforça competências em:
- front-end aplicado a contexto de negócio;
- tradução de indicadores operacionais em interface visual;
- organização de componentes reutilizáveis;
- design de dashboards para ambientes regulados;
- integração planejada entre backend e camada visual.

## Sugestão de narrativa em entrevista

"Desenvolvi esse dashboard para simular um painel operacional de cartório, com foco em produtividade, visibilidade de pendências e acompanhamento de protocolos. A ideia foi conectar conhecimento de processo com interface de gestão, preparando a aplicação para consumir uma API real de workflow cartorário."

## Licença

Projeto para fins de portfólio profissional.
