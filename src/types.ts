export type ProtocolStatus =
  | 'EM_ANALISE'
  | 'PENDENTE_DOCUMENTO'
  | 'EM_EXIGENCIA'
  | 'APROVADO'
  | 'CONCLUIDO';

export type ServiceType =
  | 'Escritura Pública'
  | 'Registro de Imóveis'
  | 'Reconhecimento de Firma'
  | 'Procuração'
  | 'Usucapião Extrajudicial';

export interface ProtocolItem {
  id: string;
  code: string;
  applicantName: string;
  serviceType: ServiceType;
  status: ProtocolStatus;
  openedAt: string;
  dueDate: string;
  analyst: string;
  pendingDocuments: number;
  slaHours: number;
}

export interface KpiItem {
  label: string;
  value: string;
  helper: string;
}

export interface StatusChartItem {
  name: string;
  total: number;
}

export interface MonthlyChartItem {
  month: string;
  protocols: number;
  completed: number;
}
