export type TipoAluno = {
    id: number;
    nome: string;
    idade: number;
    foto: string;
    descricao: string;
    hardSkills: string[];
    softSkills: string[];
    materias: Materias[];
}

export type Materias = {
    id: number;
    nome: string;
    checkpoints: Checkpoint[];
    challenges: Challenge[];
    globalSolutions: GlobalSolution[];
}

export type Checkpoint = {
    id: number;
    data: string;
    nota: number;
    feedback: string; 
}

export type Challenge = {
    id: number;
    descricao: string;
    nota: number;
}

export type GlobalSolution = {
    id: number;
    link: string;
    descricao: string;
    nota: number;
}
