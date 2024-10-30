import request from "../request";

export const getNotificationsByUserEmail = ({ pageParam = 0 }) => {
  const params = {
    method: "GET",
    path: `notifications/get?page=${pageParam}&size=10`,
  };
  return request({ params });
};

export const markNotificationAsRead = (notificationId) => {};
