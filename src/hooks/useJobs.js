import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getJobById,
  getJobsByCategories,
  getHistorialForUserOffering,
  deleteJob,
} from "@services/jobs/jobs.services";

export const useJobs = (func, key, params) => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();
  const { data, isError, isLoading, isPreviousData } = useQuery({
    queryKey: [key, params, page],
    queryFn: ({ queryKey }) => func(page, queryKey[1]),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  });

  if (!isPreviousData && !data?.last) {
    queryClient.prefetchQuery({
      queryKey: [key, params, page + 1],
      queryFn: (queryKey) => func(page + 1, queryKey[1]),
    });
  }

  const nextPage = () => {
    if (!data?.last) {
      setPage((old) => old + 1);
    }
  };
  const prevPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };

  return { data, isError, isLoading, isPreviousData, nextPage, prevPage, page };
};

export const useJobsByID = (jobId) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["jobsByID", jobId],
    queryFn: () => getJobById(jobId),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};

//check , habria que pasarle el email del usuario a la queryKey
export const useJobsByUserOffering = () => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();
  const { data, isError, isLoading, isPreviousData } = useQuery({
    queryKey: ["getJobsByUserOffering", page],
    queryFn: () => getJobsByCategories(page),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  });

  if (!isPreviousData && !data?.last) {
    queryClient.prefetchQuery({
      queryKey: ["getJobsByUserOffering", page + 1],
      queryFn: () => getJobsByCategories(page + 1),
    });
  }

  const nextPage = () => {
    if (!data?.last) {
      setPage((old) => old + 1);
    }
  };
  const prevPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };
  return { data, isError, isLoading, isPreviousData, nextPage, prevPage, page };
};

export const useHistorialJobsByUserOffering = () => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();
  const { data, isError, isLoading, isPreviousData } = useQuery({
    queryKey: ["getHistorialJobsByUserOffering", page],
    queryFn: () => getHistorialForUserOffering(page),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  });

  if (!isPreviousData && !data?.last) {
    queryClient.prefetchQuery({
      queryKey: ["getHistorialJobsByUserOffering", page + 1],
      queryFn: () => getHistorialForUserOffering(page + 1),
    });
  }

  const nextPage = () => {
    if (!data?.last) {
      setPage((old) => old + 1);
    }
  };
  const prevPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };
  return { data, isError, isLoading, isPreviousData, nextPage, prevPage, page };
};

export const useDeleteJob = (jobId) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const deleteJobMutation = useMutation({
    mutationFn: (jobId) => deleteJob(jobId),
    mutationKey: ["deleteJob", jobId],
    onError: (error) => {
      throw new Error("Error al eliminar el trabajo", error);
    },
  });

  const handleDeleteJob = (jobId) => {
    deleteJobMutation.mutate(jobId, {
      onSettled: () => {
        navigate("/home/post-job");
      },
    });
  };
  return {
    handleDeleteJob,
    isLoadingDeleteMutation: deleteJobMutation.isLoading,
  };
};
