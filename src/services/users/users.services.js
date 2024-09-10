import request from "../request";
import HTTP from "../../utils/methods";

export const getUsersOfferingsByFilters = async (pageParam, filters) => {
  const params = {
    method: HTTP.POST,
    path: `users-offerings/private/search?page=${pageParam}&size=7`,
    body: filters,
  };
  return request({ params });
};

export const getUserByEmail = async (email) => {
  const params = {
    method: HTTP.GET,
    path: `users/private/${email}`,
  };
  return request({ params });
};

export const getUserOfferingByEmail = async (email) => {
  const params = {
    method: HTTP.GET,
    path: `users-offerings/private/${email}`,
  };
  return request({ params });
};

export const getUserCustomerByEmail = async (email) => {
  const params = {
    method: HTTP.GET,
    path: `users-customers/private/${email}`,
  };
  return request({ params });
};

export const createUser = async (user) => {
  const params = {
    method: HTTP.POST,
    path: "users/public/create",
    body: user,
  };
  return request({ params });
};

export const createUserCustomer = async () => {
  const params = {
    method: HTTP.POST,
    path: `users-customers/public/create`,
  };
  return request({ params });
};

export const createUserOffering = async (data) => {
  const { ...userData } = data;
  const params = {
    method: HTTP.POST,
    path: `users-offerings/public/create`,
    body: userData,
  };
  return request({ params });
};
export const isUserHasRoles = async () => {
  const params = {
    method: HTTP.GET,
    path: `users/private/roles`,
  };
  return request({ params });
};

export const updateUser = async (user) => {
  const params = {
    method: HTTP.PUT,
    path: "users/private/update",
    body: user,
  };
  return request({ params });
};

export const updateUserOffering = async (categories) => {
  const params = {
    method: HTTP.PUT,
    path: "users-offerings/private/update",
    body: categories,
  };
  return request({ params });
};
