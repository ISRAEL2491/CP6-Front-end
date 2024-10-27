import { NextApiRequest, NextApiResponse } from 'next';

const alunos = [
  {
    id: 558575,
    nome: "Maria Brigidio",
    idade: 20,
    foto: "/assets/maria.png",
    descricao: "Uma estudante comprometida e entusiasmada, com um olhar crítico apurado para os detalhes do design e habilidades sólidas em lógica. Entusiasmada para contribuir em novos projetos, trazendo inovação e criatividade para cada desafio que enfrenta.",
    hardSkills: ["JavaScript", "React", "Java", "Python", "HTML", "CSS", "MySQL", "Git/GitHub"],
    softSkills: [
      "Trabalho em Equipe",
      "Adaptabilidade",
      "Criatividade",
      "Resolução de Problemas",
      "Comunicação",
      "Inteligência Emocional",
      "Resiliência",
      "Gestão de Tempo",
      "Organização",
      "Pensamento Crítico",
      "Aprendizado Contínuo"
      ],
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
          { id: 1, link: "/global-solutions/ia-chatbot-1", nota: 9.5, descricao: "Primeira solução global." }
        ]
      },
      {
        id: 2,
        nome: "Building Relational Database",
        checkpoints: [
          { id: 1, data: "2024-01-12", nota: 8.7, feedback: "Bom trabalho!" },
          { id: 2, data: "2024-02-20", nota: 9.0, feedback: "Sólido entendimento." },
          { id: 3, data: "2024-03-15", nota: 8.9, feedback: "Bem estruturado." },
          { id: 4, data: "2024-04-25", nota: 9.2, feedback: "Excelente performance." }
        ],
        challenges: [
          { id: 1, nota: 8.5, descricao: "Desafio 1: Criar um banco de dados relacional." },
          { id: 2, nota: 9.0, descricao: "Desafio 2: Otimizar consultas SQL." },
          { id: 3, nota: 9.1, descricao: "Desafio 3: Integrar banco com aplicação." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir integridade dos dados." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/building-relational-database-1", nota: 9.3, descricao: "Solução global para o banco de dados." }
        ]
      },
      {
        id: 3,
        nome: "Computational Thinking Using Python",
        checkpoints: [
          { id: 1, data: "2024-01-14", nota: 8.8, feedback: "Bom raciocínio lógico!" },
          { id: 2, data: "2024-02-22", nota: 9.1, feedback: "Ótimas soluções." },
          { id: 3, data: "2024-03-18", nota: 9.5, feedback: "Excelente compreensão." },
          { id: 4, data: "2024-04-30", nota: 9.4, feedback: "Impressionante." }
        ],
        challenges: [
          { id: 1, nota: 8.6, descricao: "Desafio 1: Resolver problemas com Python." },
          { id: 2, nota: 9.2, descricao: "Desafio 2: Criar scripts para automação." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar dados usando Python." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Projetar uma aplicação simples." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/computational-thinking-python-1", nota: 9.4, descricao: "Solução global em Python." }
        ]
      },
      {
        id: 4,
        nome: "Domain Driven Design Using Java",
        checkpoints: [
          { id: 1, data: "2024-01-16", nota: 9.2, feedback: "Conceitos bem aplicados!" },
          { id: 2, data: "2024-02-24", nota: 9.0, feedback: "Ótima estruturação." },
          { id: 3, data: "2024-03-20", nota: 9.3, feedback: "Bom entendimento do domínio." },
          { id: 4, data: "2024-05-02", nota: 9.1, feedback: "Excelente aplicação dos padrões." }
        ],
        challenges: [
          { id: 1, nota: 8.7, descricao: "Desafio 1: Modelar um domínio complexo." },
          { id: 2, nota: 9.4, descricao: "Desafio 2: Implementar regras de negócio." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Garantir a coesão do modelo." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Criar uma aplicação utilizando DDD." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/domain-driven-design-java-1", nota: 9.5, descricao: "Solução global utilizando DDD." }
        ]
      },
      {
        id: 5,
        nome: "Front-End Design Engineering",
        checkpoints: [
          { id: 1, data: "2024-01-18", nota: 9.0, feedback: "Muito bom!" },
          { id: 2, data: "2024-02-26", nota: 8.8, feedback: "Ótima experiência do usuário." },
          { id: 3, data: "2024-03-22", nota: 9.4, feedback: "Design muito bem executado." },
          { id: 4, data: "2024-05-04", nota: 9.1, feedback: "Ótimos princípios aplicados." }
        ],
        challenges: [
          { id: 1, nota: 8.9, descricao: "Desafio 1: Criar um protótipo funcional." },
          { id: 2, nota: 9.3, descricao: "Desafio 2: Implementar um design responsivo." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Melhorar a acessibilidade." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Integrar animações de forma eficaz." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/front-end-design-engineering-1", nota: 9.5, descricao: "Solução global para design front-end." }
        ]
      },
      {
        id: 6,
        nome: "Software Engineering and Business Model",
        checkpoints: [
          { id: 1, data: "2024-01-20", nota: 9.1, feedback: "Bom conhecimento!" },
          { id: 2, data: "2024-02-28", nota: 9.2, feedback: "Modelo de negócio bem estruturado." },
          { id: 3, data: "2024-03-25", nota: 9.4, feedback: "Excelente visão de software." },
          { id: 4, data: "2024-05-06", nota: 9.0, feedback: "Boa implementação." }
        ],
        challenges: [
          { id: 1, nota: 8.8, descricao: "Desafio 1: Definir um modelo de negócio." },
          { id: 2, nota: 9.1, descricao: "Desafio 2: Criar um plano de software." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar a viabilidade do projeto." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir a qualidade do software." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/software-engineering-business-model-1", nota: 9.4, descricao: "Solução global em engenharia de software." }
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
          { id: 1, link: "/global-solutions/ia-chatbot-1", nota: 9.5, descricao: "Primeira solução global." }
        ]
      },
      {
        id: 2,
        nome: "Building Relational Database",
        checkpoints: [
          { id: 1, data: "2024-01-12", nota: 8.7, feedback: "Bom trabalho!" },
          { id: 2, data: "2024-02-20", nota: 9.0, feedback: "Sólido entendimento." },
          { id: 3, data: "2024-03-15", nota: 8.9, feedback: "Bem estruturado." },
          { id: 4, data: "2024-04-25", nota: 9.2, feedback: "Excelente performance." }
        ],
        challenges: [
          { id: 1, nota: 8.5, descricao: "Desafio 1: Criar um banco de dados relacional." },
          { id: 2, nota: 9.0, descricao: "Desafio 2: Otimizar consultas SQL." },
          { id: 3, nota: 9.1, descricao: "Desafio 3: Integrar banco com aplicação." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir integridade dos dados." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/building-relational-database-1", nota: 9.3, descricao: "Solução global para o banco de dados." }
        ]
      },
      {
        id: 3,
        nome: "Computational Thinking Using Python",
        checkpoints: [
          { id: 1, data: "2024-01-14", nota: 8.8, feedback: "Bom raciocínio lógico!" },
          { id: 2, data: "2024-02-22", nota: 9.1, feedback: "Ótimas soluções." },
          { id: 3, data: "2024-03-18", nota: 9.5, feedback: "Excelente compreensão." },
          { id: 4, data: "2024-04-30", nota: 9.4, feedback: "Impressionante." }
        ],
        challenges: [
          { id: 1, nota: 8.6, descricao: "Desafio 1: Resolver problemas com Python." },
          { id: 2, nota: 9.2, descricao: "Desafio 2: Criar scripts para automação." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar dados usando Python." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Projetar uma aplicação simples." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/computational-thinking-python-1", nota: 9.4, descricao: "Solução global em Python." }
        ]
      },
      {
        id: 4,
        nome: "Domain Driven Design Using Java",
        checkpoints: [
          { id: 1, data: "2024-01-16", nota: 9.2, feedback: "Conceitos bem aplicados!" },
          { id: 2, data: "2024-02-24", nota: 9.0, feedback: "Ótima estruturação." },
          { id: 3, data: "2024-03-20", nota: 9.3, feedback: "Bom entendimento do domínio." },
          { id: 4, data: "2024-05-02", nota: 9.1, feedback: "Excelente aplicação dos padrões." }
        ],
        challenges: [
          { id: 1, nota: 8.7, descricao: "Desafio 1: Modelar um domínio complexo." },
          { id: 2, nota: 9.4, descricao: "Desafio 2: Implementar regras de negócio." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Garantir a coesão do modelo." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Criar uma aplicação utilizando DDD." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/domain-driven-design-java-1", nota: 9.5, descricao: "Solução global utilizando DDD." }
        ]
      },
      {
        id: 5,
        nome: "Front-End Design Engineering",
        checkpoints: [
          { id: 1, data: "2024-01-18", nota: 9.0, feedback: "Muito bom!" },
          { id: 2, data: "2024-02-26", nota: 8.8, feedback: "Ótima experiência do usuário." },
          { id: 3, data: "2024-03-22", nota: 9.4, feedback: "Design muito bem executado." },
          { id: 4, data: "2024-05-04", nota: 9.1, feedback: "Ótimos princípios aplicados." }
        ],
        challenges: [
          { id: 1, nota: 8.9, descricao: "Desafio 1: Criar um protótipo funcional." },
          { id: 2, nota: 9.3, descricao: "Desafio 2: Implementar um design responsivo." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Melhorar a acessibilidade." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Integrar animações de forma eficaz." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/front-end-design-engineering-1", nota: 9.5, descricao: "Solução global para design front-end." }
        ]
      },
      {
        id: 6,
        nome: "Software Engineering and Business Model",
        checkpoints: [
          { id: 1, data: "2024-01-20", nota: 9.1, feedback: "Bom conhecimento!" },
          { id: 2, data: "2024-02-28", nota: 9.2, feedback: "Modelo de negócio bem estruturado." },
          { id: 3, data: "2024-03-25", nota: 9.4, feedback: "Excelente visão de software." },
          { id: 4, data: "2024-05-06", nota: 9.0, feedback: "Boa implementação." }
        ],
        challenges: [
          { id: 1, nota: 8.8, descricao: "Desafio 1: Definir um modelo de negócio." },
          { id: 2, nota: 9.1, descricao: "Desafio 2: Criar um plano de software." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar a viabilidade do projeto." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir a qualidade do software." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/software-engineering-business-model-1", nota: 9.4, descricao: "Solução global em engenharia de software." }
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
          { id: 1, link: "/global-solutions/ia-chatbot-1", nota: 9.5, descricao: "Primeira solução global." }
        ]
      },
      {
        id: 2,
        nome: "Building Relational Database",
        checkpoints: [
          { id: 1, data: "2024-01-12", nota: 8.7, feedback: "Bom trabalho!" },
          { id: 2, data: "2024-02-20", nota: 9.0, feedback: "Sólido entendimento." },
          { id: 3, data: "2024-03-15", nota: 8.9, feedback: "Bem estruturado." },
          { id: 4, data: "2024-04-25", nota: 9.2, feedback: "Excelente performance." }
        ],
        challenges: [
          { id: 1, nota: 8.5, descricao: "Desafio 1: Criar um banco de dados relacional." },
          { id: 2, nota: 9.0, descricao: "Desafio 2: Otimizar consultas SQL." },
          { id: 3, nota: 9.1, descricao: "Desafio 3: Integrar banco com aplicação." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir integridade dos dados." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/building-relational-database-1", nota: 9.3, descricao: "Solução global para o banco de dados." }
        ]
      },
      {
        id: 3,
        nome: "Computational Thinking Using Python",
        checkpoints: [
          { id: 1, data: "2024-01-14", nota: 8.8, feedback: "Bom raciocínio lógico!" },
          { id: 2, data: "2024-02-22", nota: 9.1, feedback: "Ótimas soluções." },
          { id: 3, data: "2024-03-18", nota: 9.5, feedback: "Excelente compreensão." },
          { id: 4, data: "2024-04-30", nota: 9.4, feedback: "Impressionante." }
        ],
        challenges: [
          { id: 1, nota: 8.6, descricao: "Desafio 1: Resolver problemas com Python." },
          { id: 2, nota: 9.2, descricao: "Desafio 2: Criar scripts para automação." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar dados usando Python." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Projetar uma aplicação simples." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/computational-thinking-python-1", nota: 9.4, descricao: "Solução global em Python." }
        ]
      },
      {
        id: 4,
        nome: "Domain Driven Design Using Java",
        checkpoints: [
          { id: 1, data: "2024-01-16", nota: 9.2, feedback: "Conceitos bem aplicados!" },
          { id: 2, data: "2024-02-24", nota: 9.0, feedback: "Ótima estruturação." },
          { id: 3, data: "2024-03-20", nota: 9.3, feedback: "Bom entendimento do domínio." },
          { id: 4, data: "2024-05-02", nota: 9.1, feedback: "Excelente aplicação dos padrões." }
        ],
        challenges: [
          { id: 1, nota: 8.7, descricao: "Desafio 1: Modelar um domínio complexo." },
          { id: 2, nota: 9.4, descricao: "Desafio 2: Implementar regras de negócio." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Garantir a coesão do modelo." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Criar uma aplicação utilizando DDD." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/domain-driven-design-java-1", nota: 9.5, descricao: "Solução global utilizando DDD." }
        ]
      },
      {
        id: 5,
        nome: "Front-End Design Engineering",
        checkpoints: [
          { id: 1, data: "2024-01-18", nota: 9.0, feedback: "Muito bom!" },
          { id: 2, data: "2024-02-26", nota: 8.8, feedback: "Ótima experiência do usuário." },
          { id: 3, data: "2024-03-22", nota: 9.4, feedback: "Design muito bem executado." },
          { id: 4, data: "2024-05-04", nota: 9.1, feedback: "Ótimos princípios aplicados." }
        ],
        challenges: [
          { id: 1, nota: 8.9, descricao: "Desafio 1: Criar um protótipo funcional." },
          { id: 2, nota: 9.3, descricao: "Desafio 2: Implementar um design responsivo." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Melhorar a acessibilidade." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Integrar animações de forma eficaz." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/front-end-design-engineering-1", nota: 9.5, descricao: "Solução global para design front-end." }
        ]
      },
      {
        id: 6,
        nome: "Software Engineering and Business Model",
        checkpoints: [
          { id: 1, data: "2024-01-20", nota: 9.1, feedback: "Bom conhecimento!" },
          { id: 2, data: "2024-02-28", nota: 9.2, feedback: "Modelo de negócio bem estruturado." },
          { id: 3, data: "2024-03-25", nota: 9.4, feedback: "Excelente visão de software." },
          { id: 4, data: "2024-05-06", nota: 9.0, feedback: "Boa implementação." }
        ],
        challenges: [
          { id: 1, nota: 8.8, descricao: "Desafio 1: Definir um modelo de negócio." },
          { id: 2, nota: 9.1, descricao: "Desafio 2: Criar um plano de software." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar a viabilidade do projeto." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir a qualidade do software." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/software-engineering-business-model-1", nota: 9.4, descricao: "Solução global em engenharia de software." }
        ]
      }
    ]
  },
  {
    id: 558470,
    nome: "Carlos",
    idade: 18,
    foto: "/assets/cadu.png",
    descricao: "Estudante com habilidades sólidas em lógica e design.",
    hardSkills: ["Python", "Node.js", "SQL"],
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
          { id: 1, link: "/global-solutions/ia-chatbot-1", nota: 9.5, descricao: "Primeira solução global." }
        ]
      },
      {
        id: 2,
        nome: "Building Relational Database",
        checkpoints: [
          { id: 1, data: "2024-01-12", nota: 8.7, feedback: "Bom trabalho!" },
          { id: 2, data: "2024-02-20", nota: 9.0, feedback: "Sólido entendimento." },
          { id: 3, data: "2024-03-15", nota: 8.9, feedback: "Bem estruturado." },
          { id: 4, data: "2024-04-25", nota: 9.2, feedback: "Excelente performance." }
        ],
        challenges: [
          { id: 1, nota: 8.5, descricao: "Desafio 1: Criar um banco de dados relacional." },
          { id: 2, nota: 9.0, descricao: "Desafio 2: Otimizar consultas SQL." },
          { id: 3, nota: 9.1, descricao: "Desafio 3: Integrar banco com aplicação." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir integridade dos dados." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/building-relational-database-1", nota: 9.3, descricao: "Solução global para o banco de dados." }
        ]
      },
      {
        id: 3,
        nome: "Computational Thinking Using Python",
        checkpoints: [
          { id: 1, data: "2024-01-14", nota: 8.8, feedback: "Bom raciocínio lógico!" },
          { id: 2, data: "2024-02-22", nota: 9.1, feedback: "Ótimas soluções." },
          { id: 3, data: "2024-03-18", nota: 9.5, feedback: "Excelente compreensão." },
          { id: 4, data: "2024-04-30", nota: 9.4, feedback: "Impressionante." }
        ],
        challenges: [
          { id: 1, nota: 8.6, descricao: "Desafio 1: Resolver problemas com Python." },
          { id: 2, nota: 9.2, descricao: "Desafio 2: Criar scripts para automação." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar dados usando Python." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Projetar uma aplicação simples." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/computational-thinking-python-1", nota: 9.4, descricao: "Solução global em Python." }
        ]
      },
      {
        id: 4,
        nome: "Domain Driven Design Using Java",
        checkpoints: [
          { id: 1, data: "2024-01-16", nota: 9.2, feedback: "Conceitos bem aplicados!" },
          { id: 2, data: "2024-02-24", nota: 9.0, feedback: "Ótima estruturação." },
          { id: 3, data: "2024-03-20", nota: 9.3, feedback: "Bom entendimento do domínio." },
          { id: 4, data: "2024-05-02", nota: 9.1, feedback: "Excelente aplicação dos padrões." }
        ],
        challenges: [
          { id: 1, nota: 8.7, descricao: "Desafio 1: Modelar um domínio complexo." },
          { id: 2, nota: 9.4, descricao: "Desafio 2: Implementar regras de negócio." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Garantir a coesão do modelo." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Criar uma aplicação utilizando DDD." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/domain-driven-design-java-1", nota: 9.5, descricao: "Solução global utilizando DDD." }
        ]
      },
      {
        id: 5,
        nome: "Front-End Design Engineering",
        checkpoints: [
          { id: 1, data: "2024-01-18", nota: 9.0, feedback: "Muito bom!" },
          { id: 2, data: "2024-02-26", nota: 8.8, feedback: "Ótima experiência do usuário." },
          { id: 3, data: "2024-03-22", nota: 9.4, feedback: "Design muito bem executado." },
          { id: 4, data: "2024-05-04", nota: 9.1, feedback: "Ótimos princípios aplicados." }
        ],
        challenges: [
          { id: 1, nota: 8.9, descricao: "Desafio 1: Criar um protótipo funcional." },
          { id: 2, nota: 9.3, descricao: "Desafio 2: Implementar um design responsivo." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Melhorar a acessibilidade." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Integrar animações de forma eficaz." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/front-end-design-engineering-1", nota: 9.5, descricao: "Solução global para design front-end." }
        ]
      },
      {
        id: 6,
        nome: "Software Engineering and Business Model",
        checkpoints: [
          { id: 1, data: "2024-01-20", nota: 9.1, feedback: "Bom conhecimento!" },
          { id: 2, data: "2024-02-28", nota: 9.2, feedback: "Modelo de negócio bem estruturado." },
          { id: 3, data: "2024-03-25", nota: 9.4, feedback: "Excelente visão de software." },
          { id: 4, data: "2024-05-06", nota: 9.0, feedback: "Boa implementação." }
        ],
        challenges: [
          { id: 1, nota: 8.8, descricao: "Desafio 1: Definir um modelo de negócio." },
          { id: 2, nota: 9.1, descricao: "Desafio 2: Criar um plano de software." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar a viabilidade do projeto." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir a qualidade do software." }
        ],
        globalSolutions: [
          { id: 1, link: "/global-solutions/software-engineering-business-model-1", nota: 9.4, descricao: "Solução global em engenharia de software." }
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
