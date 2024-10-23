import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <nav className="menu bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li><Link href="/alunos" className="text-white hover:underline">Alunos</Link></li>
          <li><Link href="/alunos/558575" className="text-white hover:underline">Maria Brigidio</Link></li>
          <li><Link href="/alunos/558576" className="text-white hover:underline">Israel Vieira</Link></li>
        </ul>
      </nav>
    </div>
  );
}
