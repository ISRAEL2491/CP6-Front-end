import { Client } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite API endpoint
  .setProject('6717e4660038656dc9a3'); // Project ID
