import type { ProtocolStatus } from '../types';

interface FiltersBarProps {
  search: string;
  setSearch: (value: string) => void;
  status: ProtocolStatus | 'TODOS';
  setStatus: (value: ProtocolStatus | 'TODOS') => void;
}

export function FiltersBar({ search, setSearch, status, setStatus }: FiltersBarProps) {
  return (
    <section className="card filters-card">
      <div>
        <label htmlFor="search">Buscar protocolo ou requerente</label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Ex.: PROT-2026-0041 ou Vitória"
        />
      </div>

      <div>
        <label htmlFor="status">Filtrar por status</label>
        <select
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value as ProtocolStatus | 'TODOS')}
        >
          <option value="TODOS">Todos</option>
          <option value="EM_ANALISE">Em análise</option>
          <option value="PENDENTE_DOCUMENTO">Pendente de documento</option>
          <option value="EM_EXIGENCIA">Em exigência</option>
          <option value="APROVADO">Aprovado</option>
          <option value="CONCLUIDO">Concluído</option>
        </select>
      </div>
    </section>
  );
}
