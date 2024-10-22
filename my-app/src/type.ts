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
    nome: string;
    checkpoints: Checkpoint[];
    challenges: Challenge[];
    globalSolutions: GlobalSolution[];
}

export type Checkpoint = {
    data: string;
    descricao: string;
    nota: number;
    feedback: string;
}

export type Challenge = {
    descricao: string;
    nota: number;
}

export type GlobalSolution = {
    link: string;
    descricao: string;
    nota: number;
}