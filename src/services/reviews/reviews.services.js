import request from "../request";

export const getReviewsByUserEmail = async (email, pageParam) => {
  const params = {
    method: "GET",
    path: `reviews/get/${email}?page=${pageParam}&size=7`,
  };
  return request({ params });
};
