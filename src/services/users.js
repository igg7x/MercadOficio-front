export const fetchUsers = async ({ pageParam = 0 }) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/user-offerings?page=${pageParam}&size=20`
  );
  const data = await response.json();
  return data;
};
