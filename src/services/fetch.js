export default async function (...args) {
  const response = await fetch(...args);
  const data = await response.json();
  return data;
}
