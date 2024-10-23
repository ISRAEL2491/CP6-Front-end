import { client } from "@/lib/appwrite_client";
import { TipoAluno } from "@/type";
import { Databases, ID, Query } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

//GET ALL
export async function getProdutos() {

    try {
        const response = await database.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, [Query.orderAsc("$createdAt")]);

        return response.documents;

    } catch (error) {
        console.error("Falha na leitura dos produtos!", error);
        throw new Error("Não foi possível listar os dados!");
    }

}

export async function GET() {
    try {

        const produtos = await getProdutos();
        console.log(produtos);
        return NextResponse.json(produtos);

    } catch (error) {
        return NextResponse.json({ error: "Erro ao recuperar os produtos!: " + error });
    }

}

export async function criarProduto(produto:TipoAluno) {
    try {
        const response = await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, 
            ID.unique(),
            produto
        );

        return response;

    } catch (error) {
        console.error("Falha na criação do produto!", error);
        throw new Error("Não foi possível criar o produto!");
    }
}

export async function POST(request: Request) {
    try {
        
        const {nome, preco, estoque} = await request.json();
        const produto = {nome, preco, estoque} as TipoAluno;
        const response = await criarProduto(produto);

        return NextResponse.json(response,{status:201});
    } catch (error) {
        return NextResponse.json({ error: "Erro ao cadastrar produto!: " + error });
    }
}
