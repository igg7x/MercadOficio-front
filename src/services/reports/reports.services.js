import request from "../request";

export const reportUser = (userEmailToReport) => {
  const params = {
    method: "PUT",
    path: `users/private/report`,
    body: userEmailToReport,
  };
  return request({ params });
};

export const isUserReported = (userEmailToReport) => {
  const params = {
    method: "GET",
    path: `users/private/report/${userEmailToReport}`,
  };
  return request({ params });
};
