export const getApplicationsByJobId = async (jobId) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/applications/job/${jobId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
