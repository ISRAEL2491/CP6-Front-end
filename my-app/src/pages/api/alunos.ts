import { NextApiRequest, NextApiResponse } from 'next';

let alunos = [
  {
    id: 558575,
    nome: "Maria Brigidio",
    idade: 20,
    foto: "/assets/maria.png",
    descricao: "Estudante com habilidades sólidas em lógica e design.",
    hardSkills: ["JavaScript", "React", "Java", "Python", "HTML", "CSS", "MySQL", "Git/GitHub"],
    softSkills: ["Trabalho em equipe", "Resiliência", "Comunicação"],
    materias: [
      {
        id: 1,
        nome: "Artificial Intelligence & Chatbot",
        checkpoints: [
          { id: 1, data: "2024-01-10", nota: 9.0, feedback: "Ótimo trabalho!" },
          { id: 2, data: "2024-02-15", nota: 8.5, feedback: "Melhoria significativa." },
          { id: 3, data: "2024-03-10", nota: 9.2, feedback: "Excelente resultado." },
          { id: 4, data: "2024-04-20", nota: 8.8, feedback: "Bom desempenho." }
        ],
        challenges: [
          { id: 1, nota: 8.0, descricao: "Desafio 1: Implementar chatbot simples" },
          { id: 2, nota: 8.5, descricao: "Desafio 2: Adicionar funcionalidades avançadas" },
          { id: 3, nota: 9.0, descricao: "Desafio 3: Otimizar o desempenho" },
          { id: 4, nota: 9.3, descricao: "Desafio 4: Integração com IA" }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/ia-chatbot-1", nota: 9.5, descricao: "Primeira solução global." },
          { id: 2, link: "/global-solutions/ia-chatbot-2", nota: 9.0, descricao: "Segunda solução global." },
          { id: 3, link: "/global-solutions/ia-chatbot-3", nota: 8.8, descricao: "Terceira solução global." }
        ]
      }
    ]
  },
  {
    id: 558576,
    nome: "Israel Vieira",
    idade: 21,
    foto: "/assets/israel.png",
    descricao: "Estudante com habilidades sólidas em lógica e design.",
    hardSkills: ["Python", "Node.js", "MongoDB"],
    softSkills: ["Trabalho em equipe", "Resiliência", "Comunicação"],
    materias: [
      {
        id: 2,
        nome: "Artificial Intelligence & Chatbot",
        checkpoints: [
          { id: 1, data: "2024-01-10", nota: 9.0, feedback: "Ótimo trabalho!" },
          { id: 2, data: "2024-02-15", nota: 8.5, feedback: "Melhoria significativa." },
          { id: 3, data: "2024-03-10", nota: 9.2, feedback: "Excelente resultado." },
          { id: 4, data: "2024-04-20", nota: 8.8, feedback: "Bom desempenho." }
        ],
        challenges: [
          { id: 1, nota: 8.0, descricao: "Desafio 1: Implementar chatbot simples" },
          { id: 2, nota: 8.5, descricao: "Desafio 2: Adicionar funcionalidades avançadas" },
          { id: 3, nota: 9.0, descricao: "Desafio 3: Otimizar o desempenho" },
          { id: 4, nota: 9.3, descricao: "Desafio 4: Integração com IA" }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/ia-chatbot-1", nota: 9.5, descricao: "Primeira solução global." },
          { id: 2, link: "/global-solutions/ia-chatbot-2", nota: 9.0, descricao: "Segunda solução global." },
          { id: 3, link: "/global-solutions/ia-chatbot-3", nota: 8.8, descricao: "Terceira solução global." }
        ]
      }
    ]
  },
  {
    id: 558577,
    nome: "Marcus Calazans",
    idade: 21,
    foto: "/assets/marcus.png",
    descricao: "Estudante com habilidades sólidas em lógica e design.",
    hardSkills: ["Python", "Node.js", "MongoDB"],
    softSkills: ["Trabalho em equipe", "Resiliência", "Comunicação"],
    materias: [
      {
        id: 3,
        nome: "Artificial Intelligence & Chatbot",
        checkpoints: [
          { id: 1, data: "2024-01-10", nota: 9.0, feedback: "Ótimo trabalho!" },
          { id: 2, data: "2024-02-15", nota: 8.5, feedback: "Melhoria significativa." },
          { id: 3, data: "2024-03-10", nota: 9.2, feedback: "Excelente resultado." },
          { id: 4, data: "2024-04-20", nota: 8.8, feedback: "Bom desempenho." }
        ],
        challenges: [
          { id: 1, nota: 8.0, descricao: "Desafio 1: Implementar chatbot simples" },
          { id: 2, nota: 8.5, descricao: "Desafio 2: Adicionar funcionalidades avançadas" },
          { id: 3, nota: 9.0, descricao: "Desafio 3: Otimizar o desempenho" },
          { id: 4, nota: 9.3, descricao: "Desafio 4: Integração com IA" }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/ia-chatbot-1", nota: 9.5, descricao: "Primeira solução global." },
          { id: 2, link: "/global-solutions/ia-chatbot-2", nota: 9.0, descricao: "Segunda solução global." },
          { id: 3, link: "/global-solutions/ia-chatbot-3", nota: 8.8, descricao: "Terceira solução global." }
        ]
      }
    ]
  },
  {
    id: 558578,
    nome: "Carlos",
    idade: 21,
    foto: "/assets/carlos.png",
    descricao: "Estudante com habilidades sólidas em lógica e design.",
    hardSkills: ["Python", "Node.js", "MongoDB"],
    softSkills: ["Trabalho em equipe", "Resiliência", "Comunicação"],
    materias: [
      {
        id: 4,
        nome: "Artificial Intelligence & Chatbot",
        checkpoints: [
          { id: 1, data: "2024-01-10", nota: 9.0, feedback: "Ótimo trabalho!" },
          { id: 2, data: "2024-02-15", nota: 8.5, feedback: "Melhoria significativa." },
          { id: 3, data: "2024-03-10", nota: 9.2, feedback: "Excelente resultado." },
          { id: 4, data: "2024-04-20", nota: 8.8, feedback: "Bom desempenho." }
        ],
        challenges: [
          { id: 1, nota: 8.0, descricao: "Desafio 1: Implementar chatbot simples" },
          { id: 2, nota: 8.5, descricao: "Desafio 2: Adicionar funcionalidades avançadas" },
          { id: 3, nota: 9.0, descricao: "Desafio 3: Otimizar o desempenho" },
          { id: 4, nota: 9.3, descricao: "Desafio 4: Integração com IA" }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/ia-chatbot-1", nota: 9.5, descricao: "Primeira solução global." },
          { id: 2, link: "/global-solutions/ia-chatbot-2", nota: 9.0, descricao: "Segunda solução global." },
          { id: 3, link: "/global-solutions/ia-chatbot-3", nota: 8.8, descricao: "Terceira solução global." }
        ]
      }
    ]
  }
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    if (id) {
      const aluno = alunos.find((aluno) => aluno.id === Number(id));
      if (aluno) {
        res.status(200).json(aluno);
      } else {
        res.status(404).json({ message: "Aluno não encontrado" });
      }
    } else {
      res.status(200).json(alunos);
    }
  } else if (req.method === 'POST') {
    const novoAluno = req.body;
    if (!novoAluno.nome || !novoAluno.idade) {
      return res.status(400).json({ message: "Campos obrigatórios não preenchidos." });
    }
    novoAluno.id = Date.now();
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
  } else if (req.method === 'PUT') {
    const index = alunos.findIndex((aluno) => aluno.id === Number(id));
    if (index !== -1) {
      const alunoAtualizado = { ...alunos[index], ...req.body };
      alunos[index] = alunoAtualizado;
      res.status(200).json(alunoAtualizado);
    } else {
      res.status(404).json({ message: "Aluno não encontrado" });
    }
  } else if (req.method === 'DELETE') {
    const index = alunos.findIndex((aluno) => aluno.id === Number(id));
    if (index !== -1) {
      alunos.splice(index, 1); 
      res.status(200).json({ message: "Aluno removido com sucesso." });
    } else {
      res.status(404).json({ message: "Aluno não encontrado" });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
