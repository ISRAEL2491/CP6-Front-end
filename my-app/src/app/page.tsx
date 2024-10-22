import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Menu from "@/components/Menu/Menu";
import Rodape from "@/components/Rodape/Rodape";

export default function Home(){
    return (
        <div>
            <Cabecalho/>
            <h1>PORTFOLIO</h1>
            <p>Este portfólio compila e exibe os resultados das avaliações acadêmicas dos alunos ao longo do curso, proporcionando uma visão clara do desempenho e do progresso em diversas atividades.</p>
            <Menu/>
            <Rodape/>
        </div>
    )
}