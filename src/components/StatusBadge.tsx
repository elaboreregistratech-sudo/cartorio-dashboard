import type { ProtocolStatus } from '../types';

const labels: Record<ProtocolStatus, string> = {
  EM_ANALISE: 'Em análise',
  PENDENTE_DOCUMENTO: 'Pendente de documento',
  EM_EXIGENCIA: 'Em exigência',
  APROVADO: 'Aprovado',
  CONCLUIDO: 'Concluído',
};

export function StatusBadge({ status }: { status: ProtocolStatus }) {
  return <span className={`status-badge ${status.toLowerCase()}`}>{labels[status]}</span>;
}
