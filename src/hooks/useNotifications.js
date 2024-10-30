import { useInfiniteQuery } from "@tanstack/react-query";
import { getNotificationsByUserEmail } from "../services/notifications/notifications.services";

// export const useNotifications = (email) => {
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["getNotifications", email],
//     queryFn: getNotificationsByUserEmail,
//     refetchOnWindowFocus: false,
//   });

//   return { data, isLoading, isError };
// };

export const useNotifications = (userEmail, page) => {
  const { data, isLoading, isError, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["getNotifications", userEmail],
      queryFn: getNotificationsByUserEmail,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.pageable.pageNumber;
        const totalPages = lastPage.totalPages;
        return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
      },
      refetchOnWindowFocus: false,
      staleTime: 1000 * 3,
      // enabled: !!userEmail,
    });
  return { data, isLoading, isError, refetch, fetchNextPage, hasNextPage };
};
