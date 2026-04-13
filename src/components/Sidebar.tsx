export function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <p className="brand-tag">Legal Tech</p>
        <h1>Cartório Dashboard</h1>
        <span>Monitoramento operacional, produtividade e SLA.</span>
      </div>

      <nav>
        <a href="#overview">Visão geral</a>
        <a href="#protocolos">Protocolos</a>
        <a href="#indicadores">Indicadores</a>
        <a href="#integracao">Integração API</a>
      </nav>

      <div className="sidebar-card">
        <p className="eyebrow">Resumo</p>
        <strong>9 protocolos críticos</strong>
        <span>Demandas com SLA abaixo de 12h e pendências documentais.</span>
      </div>
    </aside>
  );
}
