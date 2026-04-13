import type { KpiItem } from '../types';

interface KpiCardProps {
  item: KpiItem;
}

export function KpiCard({ item }: KpiCardProps) {
  return (
    <article className="card kpi-card">
      <p className="eyebrow">Indicador</p>
      <h3>{item.label}</h3>
      <strong>{item.value}</strong>
      <span>{item.helper}</span>
    </article>
  );
}
