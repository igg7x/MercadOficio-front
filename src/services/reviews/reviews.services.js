import request from "../request";

export const getReviewsByUserEmail = async (email, pageParam) => {
  const params = {
    method: "GET",
    path: `reviews/get/${email}?page=${pageParam}&size=10`,
  };
  return request({ params });
};

export const createReview = async (data) => {
  console.log(data);
  const params = {
    method: "POST",
    path: "reviews/create",
    body: data,
  };
  return request({ params });
};
