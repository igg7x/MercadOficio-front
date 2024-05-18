import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@services/categories";

export const useCategories = () => {
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    refetchOnWindowFocus: false,
  });
  return {
    categories,
    isLoading,
    isError,
  };
};
