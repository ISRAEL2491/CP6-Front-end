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
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Lista de Alunos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {info.length > 0 ? (
                    info.map((aluno) => (
                        <div key={aluno.id} className="bg-white rounded-lg shadow-md p-4">
                            <p className="font-bold text-lg mb-2">{aluno.nome}</p>
                            <Image 
                                src={aluno.foto ? aluno.foto : '/assets/default-photo.png'} 
                                alt={`Foto de ${aluno.nome}`} 
                                width={200} 
                                height={200} 
                                className="rounded-full mx-auto mb-4"
                            />
                            <p className="text-gray-600 mb-4">ID: {aluno.id}</p>
                            <Link href={`/alunos/${aluno.id}`} className="text-blue-500 hover:underline">
                                Ver detalhes
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Nenhum aluno encontrado.</p>
                )}
            </div>
        </div>
    );
}
