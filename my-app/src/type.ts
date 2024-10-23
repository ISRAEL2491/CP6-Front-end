export interface TipoAluno {
    id: number;
    nome: string;
    idade: number;
    foto: string;
    descricao: string;
    hardSkills: string[];
    softSkills: string[];
    materias: Materia[];
  }
  
  interface Materia {
    id: number;
    nome: string;
    checkpoints: Checkpoint[];
    challenges: Challenge[];
    globalSolutions: GlobalSolution[];
  }
  
  interface Checkpoint {
    id: number;
    data: string;
    nota: number;
    feedback: string;
  }
  
  interface Challenge {
    id: number;
    nota: number;
    descricao: string;
  }
  
  interface GlobalSolution {
    id: number;
    link: string;
    nota: number;
    descricao: string;
  }
  