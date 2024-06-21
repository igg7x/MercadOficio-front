import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@services/categories";

export const useCategories = () => {
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
  });
  return {
    categories,
    isLoading,
    isError,
  };
};
