export const getJobsByUserCustomer = async ({ pageParam = 1 }, email) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/jobs/customer/${email}`,
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

export const getJobsbyCategories = async ({ pageParam = 1 }, categories) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/jobs/all?page=${pageParam}&size=10`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: categories,
    }
  );
  const data = await response.json();
  return data;
};

export const postJobApplication = async (jobId, email) => {
  const result = await fetch(
    `http://localhost:8080/api/v1/applications/${jobId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }
  );
  return result.status;
};

export const createJob = async (job) => {
  const result = await fetch(`http://localhost:8080/api/v1/jobs/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  const newJob = result.json();
  return newJob;
};
