import {Client, Database , Account } from "appwrite";

const client = new Client();
client
    .setEndpoint('')
    .setProject('6717e2640025c200d8d3')

export const account = new Account(client);
export const database = new Database(client);