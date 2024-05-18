export const fetchCategories = async () => {
  const response = await fetch("http://localhost:8080/api/v1/categories/all");
  const data = await response.json();
  return data;
};
