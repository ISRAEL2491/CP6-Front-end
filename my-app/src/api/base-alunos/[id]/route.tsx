import { NextResponse } from "next/server";


export async function getProdutos() {
  try {
    const response = await fetch("http://localhost:3000/api/alunos", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falha na leitura dos produtos!", error);
    throw new Error("Não foi possível listar os dados!");
  }
}


export async function GET() {
  try {
    const produtos = await getProdutos();
    return NextResponse.json(produtos);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao recuperar os produtos!: " + error });
  }
}

export async function criarProduto(produto: any) {
  try {
    const response = await fetch("http://localhost:3000/api/alunos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falha na criação do produto!", error);
    throw new Error("Não foi possível criar o produto!");
  }
}


export async function POST(request: Request) {
  try {
    const produto = await request.json();
    const response = await criarProduto(produto);
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao cadastrar produto!: " + error });
  }
}
