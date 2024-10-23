import Image from "next/image";

export default function Rodape() {
    return (
      <footer className="rodape">
        <h2>1TDSPH</h2>
        <Image 
          src={'/assets/risco.png'}  
          alt={'ilustração'} 
          width={500} 
          height={100} 
          className=""
          />
      </footer>
    );
  }
  