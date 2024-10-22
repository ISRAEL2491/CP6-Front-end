"use client";
import Image from 'next/image';
import { TipoAluno } from "@/type";
import { useEffect, useState } from "react";



export default function Produto({ params  }: { params: { id: number } }) {

  // const navigate = useRouter();

  

  const [aluno, setAluno] = useState<TipoAluno>({
    id: 0,
    nome: "",
    idade: 0,
    foto: "",
    descricao: "",
    hardSkills: [],
    softSkills: [],
    materias: [],
  })

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch(`/alunos.json`);
      const data = await response.json();
      const alunoEncontrado = data.find((aluno: TipoAluno) => aluno.id === Number(params.id)); // Filtra pelo ID
 
      setAluno(alunoEncontrado);
    }
    chamadaApi();
  }, []);


    return (
        <div>
            
            <div className='head'>
                <Image 
                    src={aluno.foto} 
                    alt={`Foto de ${aluno.nome}`} 
                    width={200} 
                    height={200} 
                    />
                <h1>{aluno.nome}</h1>
                <p>Descrição: {aluno.descricao}</p>
                <h2>Hard Skills</h2>
                <ul>
                    {aluno.hardSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <h2>Soft Skills</h2>
                <ul>
                    {aluno.softSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>

        
            <div className="checkpoints-container">
                <h2>Checkpoints</h2>

                {aluno.materias.map((materia) => (
                <div key={materia.nome} className="materia">
                    <h2>{materia.nome}</h2>
                    {materia.checkpoints.map((cp, index) => (
                    <div key={index}>
                        <p>CP {index + 1}</p>
                        <ul>
                        <li>Data: {cp.data}</li>
                        <li>Nota: {cp.nota}</li>
                        <li>Feedback: {cp.feedback}</li>
                        </ul>
                    </div>
                     ))}
                </div>
                ))}
            </div>

            <div className="challenges-container">
                <h2>Challenge</h2>

                {aluno.materias.map((materia) => (
                <div key={materia.nome} className="materia">
                    <h2>{materia.nome}</h2>
                    {materia.challenges.map((sprint, index) => (
                    <div key={index}>
                        <p>Sprint {index + 1}</p>
                        <ul>
                        <li>Descrição: {sprint.descricao}</li>
                        <li>Nota: {sprint.nota}</li>
                        </ul>
                    </div>
                     ))}
                </div>
                ))}
            </div>

            <div className="gs-container">
                <h2>Global Solution</h2>

                {aluno.materias.map((materia) => (
                <div key={materia.nome} className="materia">
                    <h2>{materia.nome}</h2>
                    {materia.globalSolutions.map((gs, index) => (
                    <div key={index}>
                        <p>GS {index + 1}</p>
                        <ul>
                            <li>Link: {gs.link}</li>
                            <li>Descrição: {gs.descricao}</li>
                            <li>Nota: {gs.nota}</li>
                        </ul>
                    </div>
                     ))}
                </div>
                ))}
            </div>
            
    </div>
    );





















































//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

//     e.preventDefault();

//     try {
//       const response = await fetch(``, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(produto)
//       });

//       if (response.ok) {
//         alert("Produto atualizado com sucesso!");
//         //Resetando os campos após o envio:
//         setProduto({
//           $id: 0,
//           nome: "",
//           preco: 0,
//           estoque: 0
//         });

//         navigate.push("/produtos");
//       }
//     } catch (error) {
//       console.error("Erro ao atualizar produto: ", error);
//     }

//   }

//   return (
//     <div>

//       <div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="idNome">Nome produto</label>
//             <input type="text"
//               name="nome"
//               id="idNome"
//               value={produto?.nome}
//               placeholder="Digite o nome do produto"
//               required onChange={(e) => setProduto({ ...produto, nome: e.target.value })} />
//           </div>
//           <div>
//             <label htmlFor="idPreco">Preço produto</label>
//             <input type="number"
//               name="preco"
//               id="idPreco"
//               value={produto?.preco}
//               placeholder="Digite o preço do produto"
//               required onChange={(e) => setProduto({ ...produto, preco: parseFloat(e.target.value) })} />
//           </div>
//           <div>
//             <label htmlFor="idEstoque">Estoque produto</label>
//             <input type="number"
//               name="estoque"
//               id="idEstoque"
//               value={produto?.estoque}
//               placeholder="Digite o estoque do produto"
//               required onChange={(e) => setProduto({ ...produto, estoque: parseInt(e.target.value) })} />
//           </div>
//           <div>
//             <button type="submit">Atualizar</button>
//           </div>
//         </form>
//       </div>
//     </div>
// )

}
