import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <nav>
        <ul className="menu">
          <li><Link href="/alunos/aluno/558576">Israel Vieira</Link></li>
          <li><Link href="/alunos/aluno/558578">Carlos Souza</Link></li>
          <li><Link href="/alunos/aluno/558575">Maria Brigidio</Link></li>
          <li><Link href="/alunos/aluno/558577">Marcus Calazans</Link></li>
          <li><Link href="/alunos/cad-aluno" className="new">Novo Aluno</Link></li>
        </ul>
      </nav>
    </div>
  );
}
