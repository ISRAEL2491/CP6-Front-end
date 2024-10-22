import Link from "next/link";

export default function Menu() {
    return(
        <div>
            <nav className="menu">
                <ul>
                    <li><Link href="/alunos">Alunos</Link></li>
                    <li><Link href="/alunos/558575">CARLOS SOUZA</Link></li>
                    <li><Link href="/alunos/israel">ISRAEL VIEIRA</Link></li>
                    <li><Link href="/alunos/maria">MARIA BRIGIDIO</Link></li>
                    <li><Link href="/alunos/marcus">MARCUS CALAZANS</Link></li>
                </ul>
            </nav>
        </div>
    )
}