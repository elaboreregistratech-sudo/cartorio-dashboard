import { useMemo, useState } from 'react';
import { Charts } from './components/Charts';
import { FiltersBar } from './components/FiltersBar';
import { Header } from './components/Header';
import { KpiCard } from './components/KpiCard';
import { ProtocolTable } from './components/ProtocolTable';
import { Sidebar } from './components/Sidebar';
import { kpis, protocolItems } from './data/mockData';
import type { ProtocolStatus } from './types';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('admin@cartorio.local');
  const [password, setPassword] = useState('Admin@123');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<ProtocolStatus | 'TODOS'>('TODOS');

  const filteredProtocols = useMemo(() => {
    return protocolItems.filter((item) => {
      const matchesStatus = status === 'TODOS' || item.status === status;
      const normalizedSearch = search.trim().toLowerCase();
      const matchesSearch =
        normalizedSearch.length === 0 ||
        item.code.toLowerCase().includes(normalizedSearch) ||
        item.applicantName.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }, [search, status]);

  if (!isLogged) {
    return (
      <main className="login-page">
        <section className="login-card">
          <p className="brand-tag">Portfolio Project</p>
          <h1>Cartório Dashboard</h1>
          <p>
            Painel operacional para acompanhamento de protocolos, pendências documentais,
            produtividade e status da operação.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (email && password) setIsLogged(true);
            }}
          >
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit">Entrar</button>
          </form>

          <div className="login-note">
            <strong>Acesso demonstrativo</strong>
            <span>Use as credenciais já preenchidas para explorar o dashboard.</span>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <Sidebar />
      <section className="content-area">
        <Header userName="Vitória" onLogout={() => setIsLogged(false)} />

        <section id="overview" className="kpi-grid">
          {kpis.map((item) => (
            <KpiCard key={item.label} item={item} />
          ))}
        </section>

        <FiltersBar search={search} setSearch={setSearch} status={status} setStatus={setStatus} />

        <section id="indicadores">
          <Charts />
        </section>

        <section id="protocolos">
          <ProtocolTable items={filteredProtocols} />
        </section>

        <section id="integracao" className="card integration-card">
          <div className="section-header">
            <div>
              <p className="eyebrow">Integração</p>
              <h2>Pronto para consumir API</h2>
            </div>
          </div>
          <p>
            O projeto está preparado para consumir uma API real, como a
            <strong> cartorio-workflow-api</strong>, por meio da variável
            <code> VITE_API_BASE_URL</code>. Nesta versão de portfólio, os dados são mockados para
            facilitar demonstração rápida do fluxo e da experiência visual.
          </p>
        </section>
      </section>
    </main>
  );
}

export default App;
