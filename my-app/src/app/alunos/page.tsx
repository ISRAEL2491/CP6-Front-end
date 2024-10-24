"use client";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import { TipoAluno } from "@/type";

export default function Alunos() {
    const [info, setInfo] = useState<TipoAluno[]>([]);

    useEffect(() => {
        const chamadaApi = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/alunos`);
                const data = await response.json();
                console.log(data);
                setInfo(data);
            } catch (error) {
                console.error("Erro ao buscar alunos:", error);
            }
        };

        chamadaApi();
    }, []);

    return (
        <div>
            <h1>Lista de alunos</h1>
            <div className="cards">
                {info.length > 0 ? (
                    info.map((aluno) => (
                        <div key={aluno.id}>
                            <p>{aluno.id}</p>
                            <Image 
                                src={aluno.foto} 
                                alt={`Foto de ${aluno.nome}`} 
                                width={200} 
                                height={200} 
                            />
                            <p>{aluno.nome}</p>
                            <Link href={`/alunos/${aluno.id}`}>
                                Ver detalhes
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Nenhum aluno encontrado.</p>
                )}
            </div>
        </div>
    );
}
