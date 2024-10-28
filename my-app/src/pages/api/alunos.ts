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
          { id: 1, data: "2024-04-14", nota: 8.5, feedback: "Bom trabalho! " },
          { id: 2, data: "2024-05-17", nota: 8.0, feedback: "Bom trabalho!" },
          { id: 3, data: "2024-09-29", nota: 9.0, feedback: "Excelente resultado." },
          { id: 4, data: " ", nota: "", feedback: "" }
        ],
        challenges: [
          { id: 1, nota: 6.0, descricao: "Desafio 1: Implementar chatbot simples" },
          { id: 2, nota: 8.8, descricao: "Desafio 2: Implementar chatbot no Telegram" },
          { id: 3, nota: 10, descricao: "Desafio 3: Análise de dados" },
          { id: 4, nota: " ", descricao: " " }
        ],
        globalSolutions: [
          { id: 1, link: " ", nota: 10, descricao: "Desenvolver um chatbot." }
        ]
      },
      {
        id: 2,
        nome: "Building Relational Database",
        checkpoints: [
          { id: 1, data: "2024-04-02", nota: 9.0, feedback: "Excelente!" },
          { id: 2, data: "2024-05-07", nota: 9.0, feedback: "Excelente!" },
          { id: 3, data: "2024-09-10", nota: 7.0, feedback: "Um dos arquivos estava em branco" },
          { id: 4, data: "2024-09-24", nota: 9.1, feedback: "Muito bom!" }
        ],
        challenges: [
          { id: 1, nota: 9.0, descricao: "Desafio 1: Criar um banco de dados relacional simples." },
          { id: 2, nota: 10, descricao: "Desafio 2: Criar banco de dados relacional." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Integrar em java." },
          { id: 4, nota: "", descricao: "" }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 7.5, descricao: "Criar um banco de dados de acordo com a solução." }
        ]
      },
      {
        id: 3,
        nome: "Computational Thinking Using Python",
        checkpoints: [
          { id: 1, data: "2024-04-01", nota: 9.8, feedback: "Bom raciocínio lógico!" },
          { id: 2, data: "2024-05-16", nota: 10, feedback: "Excelente" },
          { id: 3, data: "2024-03-18", nota: 9, feedback: "Excelente trabalho." },
          { id: 4, data: "2024-04-30", nota: 7.5, feedback: "Muito simples." }
        ],
        challenges: [
          { id: 1, nota: 7.5, descricao: "Desafio 1: Programa em Python simples." },
          { id: 2, nota: 6.5, descricao: "Desafio 2: Melhorar complexidade." },
          { id: 3, nota: 7.5, descricao: "Desafio 3: CRUD em Python." },
          { id: 4, nota: "", descricao: "" }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.5, descricao: "Programa em Python para a solução." }
        ]
      },
      {
        id: 4,
        nome: "Domain Driven Design Using Java",
        checkpoints: [
          { id: 1, data: "2024-03-22", nota: 10, feedback: "Conceitos bem aplicados!" },
          { id: 2, data: "2024-05-24", nota: 9.2, feedback: "Ótima estruturação." },
          { id: 3, data: "2024-08-30", nota: 9.5, feedback: "Bom entendimento do domínio." },
          { id: 4, data: "2024-09-27", nota: 9.5, feedback: "Excelente aplicação" }
        ],
        challenges: [
          { id: 1, nota: 9.5, descricao: "Desafio 1: Criar programa em Java." },
          { id: 2, nota: 10, descricao: "Desafio 2: Implementar regras de negócio." },
          { id: 3, nota: 7.8, descricao: "Desafio 3: CRUD integrado no banco de dados" },
          { id: 4, nota: "", descricao: "" }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 8.5, descricao: "Programa em Java para a solução." }
        ]
      },
      {
        id: 5,
        nome: "Front-End Design Engineering",
        checkpoints: [
          { id: 1, data: "2024-03-18", nota: 7.5, feedback: "Estrutura" },
          { id: 2, data: "2024-05-20", nota: 10, feedback: "Excelente" },
          { id: 3, data: "2024-09-30", nota: 8, feedback: "Imagem com problema" },
          { id: 4, data: "", nota: "", feedback: "" }
        ],
        challenges: [
          { id: 1, nota: 4, descricao: "Desafio 1: Figma e projeto em HTML" },
          { id: 2, nota: 7.5, descricao: "Desafio 2: Implementar protótipo da 1 Sprint." },
          { id: 3, nota: 7, descricao: "Desafio 3: Melhorar a acessibilidade." },
          { id: 4, nota: "", descricao: "" }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 7.5, descricao: "Design responsivo para a solução, em HTML, CSS e JavaScript" }
        ]
      },
      {
        id: 6,
        nome: "Software Engineering and Business Model",
        checkpoints: [
          { id: 1, data: "2024-03-22", nota: 9.5, feedback: "Boa apresentação!" },
          { id: 2, data: "2024-04-23", nota: 9.5, feedback: "Modelo de negócio bem estruturado." },
          { id: 3, data: "2024-08-21", nota: 8.0, feedback: "Excelente visão de software." },
          { id: 4, data: "2024-09-06", nota: 9.0, feedback: "Boa implementação." }
        ],
        challenges: [
          { id: 1, nota: 6.5, descricao: "Desafio 1: Trello sem link aberto." },
          { id: 2, nota: 10, descricao: "Desafio 2: Criar um plano de negócio." },
          { id: 3, nota: 10, descricao: "Desafio 3: Diagramas e fluxo de negócio" },
          { id: 4, nota: "", descricao: "" }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 10, descricao: "Solução global em engenharia de software." }
        ]
      }
    ]
  },
  {
    id: 557964,
    nome: "Israel Vieira",
    idade: 21,
    foto: "/assets/israel.png",
    descricao: "Estudante entusiasmado, com habilidades sólidas em lógica e resolução de problemas complexos. Tem grande interesse em desenvolvimento back-end e adora explorar novas tecnologias para melhorar a eficiência dos sistemas.",
    hardSkills: ["JavaScript", "React", "Java", "Python", "HTML", "CSS", "MySQL", "Git/GitHub"],
    softSkills: [
      "Proatividade",
      "Resolução de Problemas",
      "Trabalho em Equipe",
      "Comunicação",
      "Organização",
      "Adaptabilidade",
      "Autonomia",
      "Empatia"
    ],
    materias: [
        {
          id: 1,
          nome: "Artificial Intelligence & Chatbot",
          checkpoints: [
            { id: 1, data: "2024-01-10", nota: 8.5, feedback: "Bom trabalho, mas há espaço para melhorias." },
            { id: 2, data: "2024-02-15", nota: 9.0, feedback: "Progresso excelente, continue assim." },
            { id: 3, data: "2024-03-10", nota: 8.8, feedback: "Resultado muito bom, porém há pequenos ajustes a fazer." },
            { id: 4, data: "2024-04-20", nota: 9.2, feedback: "Desempenho excepcional!" }
          ],
          challenges: [
            { id: 1, nota: 8.7, descricao: "Desafio 1: Implementar chatbot simples" },
            { id: 2, nota: 9.1, descricao: "Desafio 2: Adicionar funcionalidades avançadas" },
            { id: 3, nota: 8.9, descricao: "Desafio 3: Otimizar o desempenho" },
            { id: 4, nota: 9.3, descricao: "Desafio 4: Integração com IA" }
          ],
          globalSolutions: [
            { id: 1, link: "", nota: 9.4, descricao: "Solução eficiente e bem executada." }
          ]
        },
        {
          id: 2,
          nome: "Building Relational Database",
          checkpoints: [
            { id: 1, data: "2024-01-12", nota: 9.0, feedback: "Ótimo começo, continue assim." },
            { id: 2, data: "2024-02-20", nota: 8.7, feedback: "Bom entendimento dos conceitos." },
            { id: 3, data: "2024-03-15", nota: 9.1, feedback: "Bem estruturado, faltam poucos detalhes." },
            { id: 4, data: "2024-04-25", nota: 9.5, feedback: "Excelente desempenho!" }
          ],
          challenges: [
            { id: 1, nota: 8.9, descricao: "Desafio 1: Criar um banco de dados relacional." },
            { id: 2, nota: 9.0, descricao: "Desafio 2: Otimizar consultas SQL." },
            { id: 3, nota: 9.2, descricao: "Desafio 3: Integrar banco com aplicação." },
            { id: 4, nota: 9.4, descricao: "Desafio 4: Garantir integridade dos dados." }
          ],
          globalSolutions: [
            { id: 1, link: "", nota: 9.3, descricao: "Excelente solução para um banco de dados relacional." }
          ]
        },
        {
          id: 3,
          nome: "Computational Thinking Using Python",
          checkpoints: [
            { id: 1, data: "2024-01-14", nota: 8.6, feedback: "Bom começo, mas há melhorias possíveis." },
            { id: 2, data: "2024-02-22", nota: 9.0, feedback: "Ótimo progresso." },
            { id: 3, data: "2024-03-18", nota: 9.3, feedback: "Excelente compreensão dos conceitos." },
            { id: 4, data: "2024-04-30", nota: 9.1, feedback: "Resultado muito bom." }
          ],
          challenges: [
            { id: 1, nota: 8.8, descricao: "Desafio 1: Resolver problemas com Python." },
            { id: 2, nota: 9.1, descricao: "Desafio 2: Criar scripts para automação." },
            { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar dados usando Python." },
            { id: 4, nota: 9.4, descricao: "Desafio 4: Projetar uma aplicação simples." }
          ],
          globalSolutions: [
            { id: 1, link: "", nota: 9.2, descricao: "Solução sólida e eficiente." }
          ]
        },
        {
          id: 4,
          nome: "Domain Driven Design Using Java",
          checkpoints: [
            { id: 1, data: "2024-01-16", nota: 8.9, feedback: "Bom trabalho, conceitos bem aplicados." },
            { id: 2, data: "2024-02-24", nota: 9.0, feedback: "Ótima estruturação, continue assim." },
            { id: 3, data: "2024-03-20", nota: 9.2, feedback: "Bom entendimento do domínio." },
            { id: 4, data: "2024-05-02", nota: 9.3, feedback: "Excelente aplicação dos padrões." }
          ],
          challenges: [
            { id: 1, nota: 9.0, descricao: "Desafio 1: Modelar um domínio complexo." },
            { id: 2, nota: 9.4, descricao: "Desafio 2: Implementar regras de negócio." },
            { id: 3, nota: 9.5, descricao: "Desafio 3: Garantir a coesão do modelo." },
            { id: 4, nota: 9.6, descricao: "Desafio 4: Criar uma aplicação utilizando DDD." }
          ],
          globalSolutions: [
            { id: 1, link: "", nota: 9.5, descricao: "Excelente aplicação dos conceitos de DDD." }
          ]
        },
        {
          id: 5,
          nome: "Front-End Design Engineering",
          checkpoints: [
            { id: 1, data: "2024-01-18", nota: 9.2, feedback: "Muito bom trabalho." },
            { id: 2, data: "2024-02-26", nota: 8.9, feedback: "Ótima experiência do usuário." },
            { id: 3, data: "2024-03-22", nota: 9.3, feedback: "Design bem executado." },
            { id: 4, data: "2024-05-04", nota: 9.4, feedback: "Princípios aplicados de forma excelente." }
          ],
          challenges: [
            { id: 1, nota: 9.0, descricao: "Desafio 1: Criar um protótipo funcional." },
            { id: 2, nota: 9.2, descricao: "Desafio 2: Implementar um design responsivo." },
            { id: 3, nota: 9.5, descricao: "Desafio 3: Melhorar a acessibilidade." },
            { id: 4, nota: 9.7, descricao: "Desafio 4: Integrar animações de forma eficaz." }
          ],
          globalSolutions: [
            { id: 1, link: "", nota: 9.6, descricao: "Excelente solução para design front-end." }
          ]
        },
        {
          id: 6,
          nome: "Software Engineering and Business Model",
          checkpoints: [
            { id: 1, data: "2024-01-20", nota: 8.9, feedback: "Bom começo, pode melhorar." },
            { id: 2, data: "2024-02-28", nota: 9.0, feedback: "Modelo de negócio sólido." },
            { id: 3, data: "2024-03-25", nota: 9.2, feedback: "Excelente visão de software." },
            { id: 4, data: "2024-05-06", nota: 9.3, feedback: "Boa implementação." }
          ],
          challenges: [
            { id: 1, nota: 8.7, descricao: "Desafio 1: Definir um modelo de negócio." },
            { id: 2, nota: 9.1, descricao: "Desafio 2: Criar um plano de software." },
            { id: 3, nota: 9.3, descricao: "Desafio 3: Analisar a viabilidade do projeto." },
            { id: 4, nota: 9.5, descricao: "Desafio 4: Garantir a qualidade do software." }
          ],
          globalSolutions: [
            { id: 1, link: "", nota: 9.4, descricao: "Solução bem estruturada em engenharia de software." }
          ]
        }
      ]      
  },
  {
    id: 556620,
    nome: "Marcus Calazans",
    idade: 25,
    foto: "/assets/marcus.png",
    descricao: "Estudante com grande interesse em lógica de programação e design. Possui habilidades sólidas na construção de soluções criativas e eficientes, focando em inovação e qualidade no desenvolvimento de projetos tecnológicos.",
    hardSkills: ["JavaScript", "React", "Java", "Python", "HTML", "CSS", "MySQL", "Git/GitHub"],
    softSkills: [
      "Criatividade",
      "Pensamento Crítico",
      "Gestão de Tempo",
      "Trabalho em Equipe",
      "Resiliência",
      "Comunicação",
      "Aprendizado Contínuo",
      "Flexibilidade"
    ],
    materias: [
      {
        id: 1,
        nome: "Artificial Intelligence & Chatbot",
        checkpoints: [
          { id: 1, data: "2024-01-10", nota: 8.7, feedback: "Bom trabalho, continue assim!" },
          { id: 2, data: "2024-02-15", nota: 8.2, feedback: "Pode melhorar em alguns pontos." },
          { id: 3, data: "2024-03-10", nota: 9.0, feedback: "Muito bom, ótimo progresso!" },
          { id: 4, data: "2024-04-20", nota: 8.5, feedback: "Bom desempenho, mantenha o foco." }
        ],
        challenges: [
          { id: 1, nota: 8.3, descricao: "Desafio 1: Implementar chatbot simples" },
          { id: 2, nota: 8.7, descricao: "Desafio 2: Adicionar funcionalidades avançadas" },
          { id: 3, nota: 9.1, descricao: "Desafio 3: Otimizar o desempenho" },
          { id: 4, nota: 9.0, descricao: "Desafio 4: Integração com IA" }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.3, descricao: "Solução global inovadora." }
        ]
      },
      {
        id: 2,
        nome: "Building Relational Database",
        checkpoints: [
          { id: 1, data: "2024-01-12", nota: 8.5, feedback: "Bom início, faltam alguns detalhes." },
          { id: 2, data: "2024-02-20", nota: 8.9, feedback: "Melhorou bastante." },
          { id: 3, data: "2024-03-15", nota: 8.8, feedback: "Bem estruturado." },
          { id: 4, data: "2024-04-25", nota: 9.0, feedback: "Excelente desenvolvimento!" }
        ],
        challenges: [
          { id: 1, nota: 8.6, descricao: "Desafio 1: Criar um banco de dados relacional." },
          { id: 2, nota: 9.0, descricao: "Desafio 2: Otimizar consultas SQL." },
          { id: 3, nota: 8.9, descricao: "Desafio 3: Integrar banco com aplicação." },
          { id: 4, nota: 9.2, descricao: "Desafio 4: Garantir integridade dos dados." }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.0, descricao: "Boa solução para o banco de dados." }
        ]
      },
      {
        id: 3,
        nome: "Computational Thinking Using Python",
        checkpoints: [
          { id: 1, data: "2024-01-14", nota: 8.8, feedback: "Bom raciocínio lógico." },
          { id: 2, data: "2024-02-22", nota: 8.9, feedback: "Ótimas soluções." },
          { id: 3, data: "2024-03-18", nota: 9.2, feedback: "Excelente compreensão." },
          { id: 4, data: "2024-04-30", nota: 9.0, feedback: "Impressionante, continue assim." }
        ],
        challenges: [
          { id: 1, nota: 8.7, descricao: "Desafio 1: Resolver problemas com Python." },
          { id: 2, nota: 9.0, descricao: "Desafio 2: Criar scripts para automação." },
          { id: 3, nota: 9.1, descricao: "Desafio 3: Analisar dados usando Python." },
          { id: 4, nota: 9.4, descricao: "Desafio 4: Projetar uma aplicação simples." }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.2, descricao: "Solução global eficiente." }
        ]
      },
      {
        id: 4,
        nome: "Domain Driven Design Using Java",
        checkpoints: [
          { id: 1, data: "2024-01-16", nota: 9.1, feedback: "Conceitos bem aplicados." },
          { id: 2, data: "2024-02-24", nota: 9.0, feedback: "Ótima estruturação." },
          { id: 3, data: "2024-03-20", nota: 9.3, feedback: "Bom entendimento do domínio." },
          { id: 4, data: "2024-05-02", nota: 9.4, feedback: "Excelente aplicação dos padrões." }
        ],
        challenges: [
          { id: 1, nota: 8.9, descricao: "Desafio 1: Modelar um domínio complexo." },
          { id: 2, nota: 9.5, descricao: "Desafio 2: Implementar regras de negócio." },
          { id: 3, nota: 9.6, descricao: "Desafio 3: Garantir a coesão do modelo." },
          { id: 4, nota: 9.7, descricao: "Desafio 4: Criar uma aplicação utilizando DDD." }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.6, descricao: "Excelente aplicação dos conceitos de DDD." }
        ]
      },
      {
        id: 5,
        nome: "Front-End Design Engineering",
        checkpoints: [
          { id: 1, data: "2024-01-18", nota: 9.0, feedback: "Ótimo trabalho com o design." },
          { id: 2, data: "2024-02-26", nota: 8.8, feedback: "Boa experiência do usuário." },
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
          { id: 1, link: "", nota: 9.5, descricao: "Solução global para design front-end." }
        ]
      },
      {
        id: 6,
        nome: "Software Engineering and Business Model",
        checkpoints: [
          { id: 1, data: "2024-01-20", nota: 9.1, feedback: "Bom conhecimento." },
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
          { id: 1, link: "", nota: 9.4, descricao: "Solução global em engenharia de software." }
        ]
      }
    ]
  },
  {
    id: 558470,
    nome: "Carlos Souza",
    idade: 18,
    foto: "/assets/cadu.png",
    descricao: "Estudante dedicado e sempre disposto a aprender, com foco em desenvolvimento front-end e design de interfaces. É apaixonado por criar experiências de usuário agradáveis e funcionais, sempre buscando novas formas de melhorar a usabilidade dos sistemas.",
    hardSkills: ["JavaScript", "React", "Java", "Python", "HTML", "CSS", "MySQL", "Git/GitHub"],
    softSkills: [
      "Criatividade",
      "Comunicação Visual",
      "Empatia",
      "Trabalho em Equipe",
      "Inovação",
      "Escuta Ativa",
      "Organização",
      "Flexibilidade"
    ],
    materias: [
      {
        id: 1,
        nome: "Artificial Intelligence & Chatbot",
        checkpoints: [
          { id: 1, data: "2024-01-10", nota: 8.8, feedback: "Trabalho muito bem executado." },
          { id: 2, data: "2024-02-15", nota: 9.1, feedback: "Ótimo progresso, continue assim." },
          { id: 3, data: "2024-03-10", nota: 9.3, feedback: "Excelente compreensão dos conceitos." },
          { id: 4, data: "2024-04-20", nota: 8.9, feedback: "Bom desempenho, faltam alguns ajustes." }
        ],
        challenges: [
          { id: 1, nota: 8.5, descricao: "Desafio 1: Implementar chatbot simples" },
          { id: 2, nota: 9.0, descricao: "Desafio 2: Adicionar funcionalidades avançadas" },
          { id: 3, nota: 9.2, descricao: "Desafio 3: Otimizar o desempenho" },
          { id: 4, nota: 9.5, descricao: "Desafio 4: Integração com IA" }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.3, descricao: "Solução bem estruturada e eficiente." }
        ]
      },
      {
        id: 2,
        nome: "Building Relational Database",
        checkpoints: [
          { id: 1, data: "2024-01-12", nota: 8.9, feedback: "Bom início, faltam alguns detalhes." },
          { id: 2, data: "2024-02-20", nota: 9.2, feedback: "Excelente compreensão dos conceitos." },
          { id: 3, data: "2024-03-15", nota: 9.0, feedback: "Estruturação sólida, continue assim." },
          { id: 4, data: "2024-04-25", nota: 9.4, feedback: "Desempenho excelente." }
        ],
        challenges: [
          { id: 1, nota: 8.8, descricao: "Desafio 1: Criar um banco de dados relacional." },
          { id: 2, nota: 9.1, descricao: "Desafio 2: Otimizar consultas SQL." },
          { id: 3, nota: 9.3, descricao: "Desafio 3: Integrar banco com aplicação." },
          { id: 4, nota: 9.5, descricao: "Desafio 4: Garantir integridade dos dados." }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.4, descricao: "Solução adequada para garantir integridade e eficiência." }
        ]
      },
      {
        id: 3,
        nome: "Computational Thinking Using Python",
        checkpoints: [
          { id: 1, data: "2024-01-14", nota: 8.7, feedback: "Bom raciocínio lógico." },
          { id: 2, data: "2024-02-22", nota: 9.0, feedback: "Progresso muito bom, continue assim." },
          { id: 3, data: "2024-03-18", nota: 9.4, feedback: "Compreensão clara dos conceitos." },
          { id: 4, data: "2024-04-30", nota: 9.1, feedback: "Ótima aplicação dos conhecimentos." }
        ],
        challenges: [
          { id: 1, nota: 8.9, descricao: "Desafio 1: Resolver problemas com Python." },
          { id: 2, nota: 9.2, descricao: "Desafio 2: Criar scripts para automação." },
          { id: 3, nota: 9.4, descricao: "Desafio 3: Analisar dados usando Python." },
          { id: 4, nota: 9.5, descricao: "Desafio 4: Projetar uma aplicação simples." }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.3, descricao: "Solução eficiente e bem aplicada." }
        ]
      },
      {
        id: 4,
        nome: "Domain Driven Design Using Java",
        checkpoints: [
          { id: 1, data: "2024-01-16", nota: 9.0, feedback: "Conceitos bem aplicados." },
          { id: 2, data: "2024-02-24", nota: 9.2, feedback: "Estruturação muito boa." },
          { id: 3, data: "2024-03-20", nota: 9.3, feedback: "Bom entendimento do domínio." },
          { id: 4, data: "2024-05-02", nota: 9.4, feedback: "Excelente aplicação dos padrões." }
        ],
        challenges: [
          { id: 1, nota: 9.1, descricao: "Desafio 1: Modelar um domínio complexo." },
          { id: 2, nota: 9.3, descricao: "Desafio 2: Implementar regras de negócio." },
          { id: 3, nota: 9.4, descricao: "Desafio 3: Garantir a coesão do modelo." },
          { id: 4, nota: 9.6, descricao: "Desafio 4: Criar uma aplicação utilizando DDD." }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.5, descricao: "Excelente trabalho com DDD." }
        ]
      },
      {
        id: 5,
        nome: "Front-End Design Engineering",
        checkpoints: [
          { id: 1, data: "2024-01-18", nota: 9.1, feedback: "Ótimo trabalho inicial." },
          { id: 2, data: "2024-02-26", nota: 8.9, feedback: "Melhorias na experiência do usuário são necessárias." },
          { id: 3, data: "2024-03-22", nota: 9.4, feedback: "Design muito bem executado." },
          { id: 4, data: "2024-05-04", nota: 9.5, feedback: "Princípios aplicados com excelência." }
        ],
        challenges: [
          { id: 1, nota: 9.0, descricao: "Desafio 1: Criar um protótipo funcional." },
          { id: 2, nota: 9.3, descricao: "Desafio 2: Implementar um design responsivo." },
          { id: 3, nota: 9.5, descricao: "Desafio 3: Melhorar a acessibilidade." },
          { id: 4, nota: 9.7, descricao: "Desafio 4: Integrar animações de forma eficaz." }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.6, descricao: "Excelente solução para design front-end." }
        ]
      },
      {
        id: 6,
        nome: "Software Engineering and Business Model",
        checkpoints: [
          { id: 1, data: "2024-01-20", nota: 8.8, feedback: "Bom começo, mas há espaço para melhorias." },
          { id: 2, data: "2024-02-28", nota: 9.0, feedback: "Modelo de negócio bem estruturado." },
          { id: 3, data: "2024-03-25", nota: 9.2, feedback: "Excelente visão de software." },
          { id: 4, data: "2024-05-06", nota: 9.3, feedback: "Boa implementação e organização." }
        ],
        challenges: [
          { id: 1, nota: 9.0, descricao: "Desafio 1: Definir um modelo de negócio." },
          { id: 2, nota: 9.2, descricao: "Desafio 2: Criar um plano de software." },
          { id: 3, nota: 9.4, descricao: "Desafio 3: Analisar a viabilidade do projeto." },
          { id: 4, nota: 9.5, descricao: "Desafio 4: Garantir a qualidade do software." }
        ],
        globalSolutions: [
          { id: 1, link: "", nota: 9.4, descricao: "Solução bem elaborada e eficiente." }
        ]
      }
    ]
  }
];

  let nextId = alunos.length > 0 ? Math.max(...alunos.map(aluno => aluno.id)) + 1 : 1;

  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // Se for uma requisição OPTIONS, retorna 200
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    const { method } = req;
  
    switch (method) {
      case 'GET':
        // Retorna a lista de alunos
        res.status(200).json(alunos);
        break;
  
      case 'POST':
        // Adiciona um novo aluno
        const novoAluno = req.body;
        if (!novoAluno.nome || !novoAluno.idade) {
          return res.status(400).json({ message: "Campos obrigatórios não preenchidos." });
        }
        novoAluno.id = nextId++;
        alunos.push(novoAluno);
        res.status(201).json(novoAluno);
        break;
  
      default:
        // Retorna erro para métodos não suportados
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Método ${method} não permitido`);
    }
  }