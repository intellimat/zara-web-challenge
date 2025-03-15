import buildUrlWithAuth from "./buildUrlWithAuth";

export async function getJSONwithAuth<TResponse>(
  url: URL,
  config?: RequestInit
): Promise<TResponse> {
  try {
    const response = await fetch(buildUrlWithAuth(url), config);
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
