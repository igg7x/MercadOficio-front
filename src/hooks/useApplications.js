import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getApplicationsByJobId,
  createJobApplication,
} from "../services/applications/applications.services";
import { Bounce, toast } from "react-toastify";

export const useApplications = (jobId) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getApplications", jobId],
    queryFn: ({ queryKey }) => getApplicationsByJobId(queryKey[1]),
    refetchOnWindowFocus: false,
  });
  return { data, isLoading, isError };
};

export const useCreateJobApplication = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: createJobApplication,
    onSuccess: () => {
      toast.success("Aplicación enviada exitosamente!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    },
    onError: (error) => {
      toast.error("Error al enviar la aplicación", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      throw new Error(error);
    },
  });
  return { createApplication: mutate, isLoading };
};
