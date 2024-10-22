
"use client";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import { TipoAluno } from "@/type";

export default function Alunos() {


    const [info, setInfo] = useState<TipoAluno[]>([])

    useEffect(() => {
        const chamadaApi = async () => {
            
            const response = await fetch("");
            const data = await response.json();
            console.log(data);
            setInfo(data);
        }
        chamadaApi();
    }, []);
    return (

        <div>
        <h1>Lista de alunos</h1>
          <div className="cards">
            {info.map((aluno) => (
              <div key={aluno.id}>
                <p>{aluno.id}</p>
                <Image 
                  src={aluno.foto} 
                  alt={`Foto de ${aluno.nome}`} 
                  width={200} 
                  height={200} 
                />
                <p>{aluno.nome}</p>
                <Link href={`/produtos/produto/${aluno.id}`}>
                  Ver detalhes
                </Link>
              </div>
            ))}
          </div>
        </div>
        
    )
}
