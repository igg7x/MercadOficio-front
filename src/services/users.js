export const fetchUsers = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/user-offerings?page=${pageParam}&size=10`
  );
  const data = await response.json();
  return data;
};

export const getUsersByFilters = async ({ pageParam = 1 }, filters) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/user-offerings/search?page=${pageParam}&size=10`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: filters,
    }
  );
  const data = await response.json();
  return data;
};
