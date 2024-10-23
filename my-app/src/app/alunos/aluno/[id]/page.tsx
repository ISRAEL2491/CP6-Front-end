"use client";  
import { TipoAluno } from '@/type';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


export default function Aluno({ params }: { params: { id: string } }) {
  const [aluno, setAluno] = useState<TipoAluno>({
    id:0,
    nome: "",
    idade: 0,
    foto: "",
    descricao: "",
    hardSkills: [],
    softSkills: [],
    materias: [],
  });
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [editMode, setEditMode] = useState(false);  
  const router = useRouter();

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/alunos`);
        const data = await response.json();
        const alunoEncontrado = data.find((aluno: TipoAluno) => aluno.id === Number(params.id));

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

  const handleEditToggle = () => {
    setEditMode(!editMode); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoAluno = {
      nome: aluno.nome,
      descricao: aluno.descricao,
      hardSkills: aluno.hardSkills,
      softSkills: aluno.softSkills
    };

    const response = await fetch(`/api/alunos/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoAluno),
    });

    if (response.ok) {
      setEditMode(false); 
      router.push(`/alunos/${params.id}`);
    } else {
      console.error("Erro ao atualizar aluno");
    }
  };

  return (
    <div>
      <section className='exibir-aluno'>
        <div className="head">
          <Link href="/" className='home-button'>Home</Link>
          <Image 
            src={aluno.foto.startsWith('/assets') ? aluno.foto : `/assets/${aluno.foto}`}  
            alt={`Foto de ${aluno.nome}`} 
            width={200} 
            height={200} 
          />
          
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
          <h2>Checkpoints</h2>
          {aluno.materias.map((materia: any) => (
            <div key={materia.id}>
              <h3>{materia.nome}</h3>
              {materia.checkpoints.map((checkpoint: any) => (
                <div key={checkpoint.id}>
                  <p>Data: {checkpoint.data}</p>
                  <p>Nota: {checkpoint.nota}</p>
                  <p>Feedback: {checkpoint.feedback}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      
      <button onClick={handleEditToggle} className="btn-editar">
        {editMode ? "Cancelar" : "Editar"}
      </button>

      
      {editMode && (
        <section className='editar-aluno'>
          <h1>Editar Aluno</h1>
          {aluno && (
            <form onSubmit={handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td><label>Nome:</label></td>
                    <td>
                      <input
                        type="text"
                        value={aluno.nome}
                        onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label>Descrição:</label></td>
                    <td>
                      <textarea
                        value={aluno.descricao}
                        onChange={(e) => setAluno({ ...aluno, descricao: e.target.value })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label>Hard Skills:</label></td>
                    <td>
                      <input
                        type="text"
                        value={aluno.hardSkills.join(", ")}
                        onChange={(e) => setAluno({ ...aluno, hardSkills: e.target.value.split(", ") })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label>Soft Skills:</label></td>
                    <td>
                      <input
                        type="text"
                        value={aluno.softSkills.join(", ")}
                        onChange={(e) => setAluno({ ...aluno, softSkills: e.target.value.split(", ") })}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="submit">Salvar Alterações</button>
            </form>
          )}
        </section>
      )}
    </div>
  );
}
