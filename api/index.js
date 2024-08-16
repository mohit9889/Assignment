const BASE_API_URL = process.env.BASE_API_URL;

export async function fetchBooks(query) {
  const endpoint = `${BASE_API_URL}/books/?${query}&mime_type=image%2Fjpeg`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Return the parsed data
  } catch (error) {
    console.error("Fetch error:", error);
    return null; // Return null in case of error
  }
}
