"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Materia } from "@/type";

export default function NovaMateria({ params }: { params: { id: string } }) {
  const router = useRouter();
  const alunoId = Number(params.id);

  const [materia, setMateria] = useState<Materia>({
    id: 0,
    nome: "",
    checkpoints: [],
    challenges: [],
    globalSolutions: [],
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!materia.nome) {
      alert("Por favor, preencha o nome da matéria.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/alunos/${alunoId}/materias`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(materia),
        }
      );

      if (response.ok) {
        alert("Matéria cadastrada com sucesso!");
        router.push(`/alunos/aluno/${alunoId}`);
      } else {
        alert("Erro ao cadastrar matéria.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar matéria:", error);
      alert("Erro ao cadastrar matéria. Tente novamente mais tarde.");
    }
  };

  return (
    <div>
      <Link href='/' className='home-button'>Home</Link>
      <h1>Cadastrar Nova Matéria</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div>
          <label htmlFor="nomeMateria" className="block mb-2 text-sm font-medium">
            Nome da Matéria:
          </label>
          <input
            type="text"
            id="nomeMateria"
            value={materia.nome}
            onChange={(e) => setMateria({ ...materia, nome: e.target.value })}
            placeholder="Nome da matéria"
            required
            className="text-gray-600"
          />
        </div>
        <div>
          <label htmlFor="idMateria" className="block mb-2 text-sm font-medium">
            Id da Matéria:
          </label>
          <input
            type="string"
            id="idMateria"
            value={materia.id}
            onChange={(e) => setMateria({ ...materia, id: e.target.value })}
            placeholder="Id da matéria"
            required
            className="text-gray-600"
          />
        </div>
        
        <div>
          <button type="submit">Cadastrar Matéria</button>
        </div>
      </form>
    </div>
  );
}
