import { NextApiRequest, NextApiResponse } from 'next';
import { TipoAluno } from '@/type';



const alunos: TipoAluno[] = [
  {
    id: 558575,
    nome: "Maria Brigidio",
    idade: 20,
    foto: "/assets/maria.png",
    descricao: "Estudante com habilidades sólidas em lógica e design, pronta para novos desafios.",
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
    "id": 558576,
    "nome": "Israel",
    "idade": 20,
    "foto": "/assets/israel.png",
    "descricao": "Estudante entusiasmado, com habilidades sólidas em lógica e design, pronto para contribuir com inovação.",
    "hardSkills": ["JavaScript", "React", "Java", "Python", "HTML", "CSS", "MySQL", "Git/GitHub"],
    "softSkills": ["Trabalho em equipe", "Resiliência", "Comunicação"],
    "materias": [
      {
        "id": 1,
        "nome": "Artificial Intelligence & Chatbot",
        "checkpoints": [
          { "id": 1, "data": "2024-01-10", "nota": 9.0, "feedback": "Ótimo trabalho!" },
          { "id": 2, "data": "2024-02-15", "nota": 8.5, "feedback": "Melhoria significativa." },
          { "id": 3, "data": "2024-03-10", "nota": 9.2, "feedback": "Excelente resultado." },
          { "id": 4, "data": "2024-04-20", "nota": 8.8, "feedback": "Bom desempenho." }
        ],
        "challenges": [
          { "id": 1, "nota": 8.0, "descricao": "Desafio 1: Implementar chatbot simples" },
          { "id": 2, "nota": 8.5, "descricao": "Desafio 2: Adicionar funcionalidades avançadas" },
          { "id": 3, "nota": 9.0, "descricao": "Desafio 3: Otimizar o desempenho" },
          { "id": 4, "nota": 9.3, "descricao": "Desafio 4: Integração com IA" }
        ],
        "globalSolutions": [
          { "id": 1, "link": "/global-solutions/ia-chatbot-1", "nota": 9.5, "descricao": "Primeira solução global." },
          { "id": 2, "link": "/global-solutions/ia-chatbot-2", "nota": 9.0, "descricao": "Segunda solução global." },
          { "id": 3, "link": "/global-solutions/ia-chatbot-3", "nota": 8.8, "descricao": "Terceira solução global." }
        ]
      }
    ]
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(alunos);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
