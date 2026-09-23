export const readJsonResponse = async <T>(response: Response): Promise<T> => {
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return response.json() as Promise<T>;
  }

  const text = await response.text();
  throw new Error(text || `Request failed with status ${response.status}`);
};
