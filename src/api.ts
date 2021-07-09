export const testFetch = async (): Promise<number> => {
  return fetch("http://localhost:8080/runs/all")
    .then((response) => response.json())
    .then(() => 0);
};
