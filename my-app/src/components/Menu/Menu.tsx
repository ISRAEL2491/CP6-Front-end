import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <nav className="menu">
        <ul>
          <li><Link href="/alunos/cad-aluno">Novo Aluno</Link></li>
          <li><Link href="/alunos/aluno/558575">Maria Brigidio</Link></li>
          <li><Link href="/alunos/aluno/558576">Israel Vieira</Link></li>
          <li><Link href="/alunos/aluno/558577">Marcus Calazans</Link></li>
          <li><Link href="/alunos/aluno/558578">Carlos</Link></li>
        </ul>
      </nav>
    </div>
  );
}
