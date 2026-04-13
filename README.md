# Cartório Dashboard

Dashboard operacional para monitoramento de protocolos, pendências documentais, produtividade, SLA e indicadores gerenciais em contextos de cartórios, legal ops e fluxos jurídico-documentais.

Este projeto integra um portfólio em legal tech e demonstra a construção de uma interface orientada à gestão, rastreabilidade e apoio à tomada de decisão em operações com alto volume documental, múltiplas etapas e necessidade de visibilidade gerencial.

## Sobre o projeto

Em operações cartorárias e documentais, a liderança frequentemente precisa responder com rapidez a perguntas como:
- quantos protocolos estão ativos;
- quais casos estão com SLA crítico;
- onde estão as principais pendências;
- qual status concentra maior volume;
- como a produtividade operacional evolui ao longo do tempo.

Sem um painel centralizado, essa leitura tende a depender de planilhas, controles paralelos e consultas manuais, reduzindo a visibilidade da operação e dificultando a priorização.

## Solução proposta

O **Cartório Dashboard** entrega uma interface web voltada ao acompanhamento operacional, com:
- autenticação demonstrativa para apresentação do fluxo;
- visão gerencial por KPIs;
- tabela operacional com busca e filtro por status;
- gráficos de volume e distribuição da operação;
- estrutura preparada para integração com uma API real.

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
