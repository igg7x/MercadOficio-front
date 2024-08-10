import request from "../request";
import HTTP from "../../utils/methods";

export const getUsersOfferingsByFilters = async (pageParam, filters) => {
  const params = {
    method: HTTP.POST,
    path: `user-offerings/search?page=${pageParam}&size=7`,
    body: filters,
  };
  return request({ params });
};

export const getUserByEmail = async (email) => {
  const params = {
    method: HTTP.GET,
    path: `users/${email}`,
  };
  return request({ params });
};

export const getUserOfferingByEmail = async (email) => {
  const params = {
    method: HTTP.GET,
    path: `user-offerings/${email}`,
  };
  return request({ params });
};
