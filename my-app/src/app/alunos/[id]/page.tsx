"use client";  
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Produto({ params }: { params: { id: string } }) {
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
          console.log("Aluno encontrado:", alunoEncontrado);
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
        {aluno.foto && aluno.foto.trim() ? (
          <Image 
            src={aluno.foto.startsWith('/assets') ? aluno.foto : `/assets/${aluno.foto}`}  
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

        
        <div className="materias-container">
          <h2>Matérias</h2>
          {aluno.materias.map((materia: any) => (
            <div key={materia.id} className="materia">
              <h3>{materia.nome}</h3>

              
              <h4>Checkpoints</h4>
              <ul>
                {materia.checkpoints.map((cp: any) => (
                  <li key={cp.id}>
                    Data: {cp.data}, Nota: {cp.nota}, Feedback: {cp.feedback}
                  </li>
                ))}
              </ul>

              
              <h4>Challenges</h4>
              <ul>
                {materia.challenges.map((challenge: any) => (
                  <li key={challenge.id}>
                    Descrição: {challenge.descricao}, Nota: {challenge.nota}
                  </li>
                ))}
              </ul>

              
              <h4>Global Solutions</h4>
              <ul>
                {materia.globalSolutions.map((gs: any) => (
                  <li key={gs.id}>
                    Link: <a href={gs.link}>{gs.link}</a>, Descrição: {gs.descricao}, Nota: {gs.nota}
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
