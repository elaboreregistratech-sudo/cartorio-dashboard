import type { ProtocolItem } from '../types';
import { StatusBadge } from './StatusBadge';

interface ProtocolTableProps {
  items: ProtocolItem[];
}

export function ProtocolTable({ items }: ProtocolTableProps) {
  return (
    <section className="card table-card">
      <div className="section-header">
        <div>
          <p className="eyebrow">Fila operacional</p>
          <h2>Protocolos recentes</h2>
        </div>
        <span>{items.length} itens visíveis</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Requerente</th>
              <th>Serviço</th>
              <th>Status</th>
              <th>Analista</th>
              <th>Pendências</th>
              <th>SLA</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="protocol-cell">
                    <strong>{item.code}</strong>
                    <span>Abertura: {item.openedAt}</span>
                  </div>
                </td>
                <td>{item.applicantName}</td>
                <td>{item.serviceType}</td>
                <td>
                  <StatusBadge status={item.status} />
                </td>
                <td>{item.analyst}</td>
                <td>{item.pendingDocuments}</td>
                <td>{item.slaHours}h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
