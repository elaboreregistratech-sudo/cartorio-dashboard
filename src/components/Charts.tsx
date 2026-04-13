import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { monthlyData, statusData } from '../data/mockData';

export function Charts() {
  return (
    <section className="charts-grid">
      <article className="card chart-card">
        <div className="section-header">
          <div>
            <p className="eyebrow">Produção</p>
            <h2>Volume mensal de protocolos</h2>
          </div>
        </div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="protocols" name="Recebidos" fill="#1f3a5f" radius={[8, 8, 0, 0]} />
              <Bar dataKey="completed" name="Concluídos" fill="#2e8b57" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="card chart-card">
        <div className="section-header">
          <div>
            <p className="eyebrow">Distribuição</p>
            <h2>Status da operação</h2>
          </div>
        </div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={statusData} dataKey="total" nameKey="name" outerRadius={110} fill="#1f3a5f" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </article>
    </section>
  );
}
