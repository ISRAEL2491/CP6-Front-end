import {Client, Databases , Account } from "appwrite";

export const client = new Client();
client
    .setEndpoint('')
    .setProject('6717e2640025c200d8d3')

export const account = new Account(client);
export const database = new Databases(client);