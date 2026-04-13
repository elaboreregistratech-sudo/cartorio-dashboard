interface HeaderProps {
  userName: string;
  onLogout: () => void;
}

export function Header({ userName, onLogout }: HeaderProps) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Painel executivo</p>
        <h2>Olá, {userName}</h2>
      </div>
      <button type="button" onClick={onLogout}>
        Sair
      </button>
    </header>
  );
}
