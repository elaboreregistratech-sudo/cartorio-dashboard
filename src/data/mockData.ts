import type { KpiItem, MonthlyChartItem, ProtocolItem, StatusChartItem } from '../types';

export const kpis: KpiItem[] = [
  {
    label: 'Protocolos ativos',
    value: '148',
    helper: '+12% vs. mês anterior',
  },
  {
    label: 'Pendências documentais',
    value: '27',
    helper: '9 com SLA crítico',
  },
  {
    label: 'Tempo médio de análise',
    value: '18h',
    helper: '-3h nas últimas 2 semanas',
  },
  {
    label: 'Taxa de conclusão',
    value: '91%',
    helper: 'Meta operacional: 90%',
  },
];

export const statusData: StatusChartItem[] = [
  { name: 'Em análise', total: 52 },
  { name: 'Pendente doc.', total: 27 },
  { name: 'Em exigência', total: 18 },
  { name: 'Aprovado', total: 21 },
  { name: 'Concluído', total: 30 },
];

export const monthlyData: MonthlyChartItem[] = [
  { month: 'Jan', protocols: 92, completed: 78 },
  { month: 'Fev', protocols: 101, completed: 85 },
  { month: 'Mar', protocols: 110, completed: 96 },
  { month: 'Abr', protocols: 118, completed: 104 },
  { month: 'Mai', protocols: 125, completed: 110 },
  { month: 'Jun', protocols: 133, completed: 118 },
];

export const protocolItems: ProtocolItem[] = [
  {
    id: '1',
    code: 'PROT-2026-0041',
    applicantName: 'Vitória Novais',
    serviceType: 'Escritura Pública',
    status: 'EM_ANALISE',
    openedAt: '2026-04-02',
    dueDate: '2026-04-15',
    analyst: 'Ana Paula',
    pendingDocuments: 1,
    slaHours: 10,
  },
  {
    id: '2',
    code: 'PROT-2026-0042',
    applicantName: 'Carlos Henrique',
    serviceType: 'Registro de Imóveis',
    status: 'PENDENTE_DOCUMENTO',
    openedAt: '2026-04-03',
    dueDate: '2026-04-16',
    analyst: 'Mariana Costa',
    pendingDocuments: 3,
    slaHours: 21,
  },
  {
    id: '3',
    code: 'PROT-2026-0043',
    applicantName: 'Juliana Ribeiro',
    serviceType: 'Procuração',
    status: 'APROVADO',
    openedAt: '2026-04-04',
    dueDate: '2026-04-10',
    analyst: 'Ana Paula',
    pendingDocuments: 0,
    slaHours: 4,
  },
  {
    id: '4',
    code: 'PROT-2026-0044',
    applicantName: 'Rafael Medeiros',
    serviceType: 'Usucapião Extrajudicial',
    status: 'EM_EXIGENCIA',
    openedAt: '2026-04-05',
    dueDate: '2026-04-20',
    analyst: 'Daniel Souza',
    pendingDocuments: 2,
    slaHours: 32,
  },
  {
    id: '5',
    code: 'PROT-2026-0045',
    applicantName: 'Fernanda Lima',
    serviceType: 'Reconhecimento de Firma',
    status: 'CONCLUIDO',
    openedAt: '2026-04-06',
    dueDate: '2026-04-07',
    analyst: 'Mariana Costa',
    pendingDocuments: 0,
    slaHours: 1,
  },
  {
    id: '6',
    code: 'PROT-2026-0046',
    applicantName: 'Eduardo Martins',
    serviceType: 'Registro de Imóveis',
    status: 'EM_ANALISE',
    openedAt: '2026-04-07',
    dueDate: '2026-04-18',
    analyst: 'Daniel Souza',
    pendingDocuments: 1,
    slaHours: 15,
  },
];
