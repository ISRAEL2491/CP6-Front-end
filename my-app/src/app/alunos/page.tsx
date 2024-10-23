"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Produto({ params }: { params: { id: number } }) {
  const [aluno, setAluno] = useState<any | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);

  
  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const response = await fetch(`/api/alunos`);
        const data = await response.json();
        const alunoEncontrado = data.find((aluno: any) => aluno.id === Number(params.id));

        if (alunoEncontrado) {
          setAluno(alunoEncontrado);
        } else {
          setErro("Aluno não encontrado");
        }
      } catch (error) {
        setErro("Erro ao buscar os dados do aluno.");
      } finally {
        setCarregando(false); 
      }
    };

    fetchAluno(); 
  }, [params.id]); 

  if (carregando) {
    return <p>Carregando...</p>; 
  }

  if (erro) {
    return <p>{erro}</p>; 
  }

  return aluno ? (
    <div>
      <div className="head">
        {aluno.foto ? (
          <Image 
            src={`/assets/${aluno.foto}`} 
            alt={`Foto de ${aluno.nome}`} 
            width={200} 
            height={200} 
          />
        ) : (
          <p>Foto não disponível</p>  
        )}
        <h1>{aluno.nome}</h1>
        <p>Descrição: {aluno.descricao}</p>

        <h2>Hard Skills</h2>
        <ul>
          {aluno.hardSkills.map((skill: string) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h2>Soft Skills</h2>
        <ul>
          {aluno.softSkills.map((skill: string) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        {/* Renderizando matérias */}
        <h2>Matérias</h2>
        <div>
          {aluno.materias.map((materia: any) => (
            <div key={materia.id}>
              <h3>{materia.nome}</h3>
              <p>Checkpoints:</p>
              <ul>
                {materia.checkpoints.map((cp: any) => (
                  <li key={cp.id}>
                    Data: {cp.data}, Nota: {cp.nota}, Feedback: {cp.feedback}
                  </li>
                ))}
              </ul>

              <p>Challenges:</p>
              <ul>
                {materia.challenges.map((challenge: any) => (
                  <li key={challenge.id}>
                    Descrição: {challenge.descricao}, Nota: {challenge.nota}
                  </li>
                ))}
              </ul>

              <p>Global Solutions:</p>
              <ul>
                {materia.globalSolutions.map((gs: any) => (
                  <li key={gs.id}>
                    Link: {gs.link}, Descrição: {gs.descricao}, Nota: {gs.nota}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}
