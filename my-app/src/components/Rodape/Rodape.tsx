export default function Rodape() {
    return (
      <footer className="rodape p-4 bg-gray-800 text-white text-center">
        <h2 className="text-lg font-semibold">1TDSPH</h2>
        <p>&copy; 2024 - Todos os direitos reservados</p>
        <ul className="mt-2">
          <li><a href="/sobre" className="text-blue-400 hover:underline">Sobre nós</a></li>
          <li><a href="/contato" className="text-blue-400 hover:underline">Contato</a></li>
        </ul>
      </footer>
    );
  }
  