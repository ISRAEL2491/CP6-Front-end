import Menu from "@/components/Menu/Menu";
import Image from "next/image";


export default function Home() {
    return (
        <div className="home-page">
            <Image 
                src={'/assets/risco-titulo.png'}  
                alt={'ilustração'} 
                width={500} 
                height={2} 
                className="img-home"
                />
            <main className="home-text">
                <h1>PORTFÓLIO</h1>
                <p>
                    Este portfólio compila e exibe os resultados das avaliações acadêmicas dos alunos ao longo do curso, 
                    proporcionando uma visão clara do desempenho e do progresso em diversas atividades.
                </p>
            </main>

            <Menu/>

        </div>
    );
}
