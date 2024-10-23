"use client"


import { TipoAluno } from "@/type";
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CadAlunos() {

  const navigate = useRouter();

 
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

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/alunos`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          },
          body: JSON.stringify(aluno),
      });

      if(response.ok){
        //Resetar os campos do form após o produto ter sido cadastrado com sucesso.
        setAluno({id:0,nome:"",idade:0,foto: "",descricao: "",hardSkills: [],softSkills: [],materias: [],});
        alert("Aluno cadastrado com sucesso!");
        //Redirecionando o usuário para a página de Alunos...
        navigate.push("/Alunos");
      }else{
        alert("Erro ao cadastrar produto!");
      }

    } catch (error) {
      console.error("Erro ao cadastrar produto: " , error);
    }


  }

  return (
    <div>
        <h1>Cadastro de Alunos</h1>

          <div>
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div>
                <label htmlFor="idNome" className="block mb-2 text-sm font-medium">Nome do Aluno:</label>
                <input
                type="text"
                name="nome"
                id="idNome"
                value={aluno.nome}
                onChange={(e) => setAluno({ ...aluno, nome: e.target.value })}
                placeholder="Nome do aluno"
                />
            </div>
            <div>
                <label htmlFor="idIdade" className="block mb-2 text-sm font-medium">Idade do Aluno:</label>
                <input
                type="number"
                name="idade"
                id="idIdade"
                value={aluno.idade}
                onChange={(e) => setAluno({ ...aluno, idade: parseInt(e.target.value) })}
                placeholder="Idade do aluno"
                />
            </div>
            <div>
                <label htmlFor="idFoto" className="block mb-2 text-sm font-medium">Foto do Aluno:</label>
                <input
                type="text"
                name="foto"
                id="idFoto"
                value={aluno.foto}
                onChange={(e) => setAluno({ ...aluno, foto: e.target.value })}
                placeholder="URL da foto do aluno"
                />
            </div>
            <div>
                <label htmlFor="idDescricao" className="block mb-2 text-sm font-medium">Descrição:</label>
                <textarea
                name="descricao"
                id="idDescricao"
                value={aluno.descricao}
                onChange={(e) => setAluno({ ...aluno, descricao: e.target.value })}
                placeholder="Descrição do aluno"
                />
            </div>
            <div>
                <label htmlFor="idHardSkills" className="block mb-2 text-sm font-medium">Hard Skills:</label>
                <input
                type="text"
                name="hardSkills"
                id="idHardSkills"
                value={aluno.hardSkills.join(", ")}
                onChange={(e) => setAluno({ ...aluno, hardSkills: e.target.value.split(", ") })}
                placeholder="Hard skills, separadas por vírgula"
                />
            </div>
            <div>
                <label htmlFor="idSoftSkills" className="block mb-2 text-sm font-medium">Soft Skills:</label>
                <input
                type="text"
                name="softSkills"
                id="idSoftSkills"
                value={aluno.softSkills.join(", ")}
                onChange={(e) => setAluno({ ...aluno, softSkills: e.target.value.split(", ") })}
                placeholder="Soft skills, separadas por vírgula"
                />
            </div>
            <div>
                <button type="submit">Cadastrar</button>
            </div>
            </form>

          </div>
 
    </div>
  )
}