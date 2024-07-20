import request from "../request";
import HTTP from "../../utils/methods";

export const getCategories = async () => {
  const params = {
    method: HTTP.GET,
    path: "categories/all",
  };
  return request({ params });
};
