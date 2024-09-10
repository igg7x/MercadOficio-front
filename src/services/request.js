import ENV from "../utils/env";

/**
 * Makes an HTTP request.
 *
 * @param {Object} params - The request parameters.
 * @param {string} params.path - The path for the request.
 * @param {string} params.method - The HTTP method for the request.
 * @param {Object} [body] - The request body (optional).
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 * @throws {Error} - If an error occurs during the request.
 */
const request = async ({ params }) => {
  try {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    const response = await fetch(`${ENV.BACKEND_BASE_URL}${params.path}`, {
      method: params.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: params.body ? JSON.stringify(params.body) : null,
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export default request;
