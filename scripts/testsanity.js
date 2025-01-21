import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bbammbxf',     // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  token: 'skyx6pMLIf8mhKkOfOhn56ENE0vQHrqX2oWrA5pAiy1tvtWbziNT7IAV7lvkcWq30Vac5qz4unlKUEv38UYRWmqsA1h0akbZrfyBfasJjVhrrgtXUo543RQYUKYJbXullcrXHvM852vQp22Lw79SxBDsmqJxCEIKvLGRfWj1ENXrVcOCLh2h',
   // Replace with your Sanity API token
  useCdn: false, // Disable CDN to get fresh data
});

async function checkConnection() {
  try {
    const result = await client.fetch('*[_type == "product"]');
    console.log('Sanity Data:', result);
  } catch (error) {
    console.error('Error connecting to Sanity:', error.message);
  }
}

checkConnection();
