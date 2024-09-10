import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Errors/Error";
import { useAuth0 } from "@auth0/auth0-react";
import { ErrorBoundary } from "../components/Errors/ErrorBoundaries";
import { useVerifyUserRoles } from "../hooks/useUsers";

const PostLoginPage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { data: roles, isError: isErrorRoles } = useVerifyUserRoles(user.email);
  useEffect(() => {
    const setTokenAuth = async () => {
      try {
        const auth0Token = await getAccessTokenSilently({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
          },
        });
        localStorage.setItem("authToken", auth0Token);
      } catch (error) {
        throw new Error("Ups! Ocurrio un error");
      }
    };

    setTokenAuth();
  }, [getAccessTokenSilently]);
  return (
    <ErrorBoundary
      result={roles}
      error={isErrorRoles}
      fallBackComponent={
        <Error
          messaje={"Ups ! Ocurrio un error"}
          img={"/src/assets/images/undraw_server_down_s4lk.png"}
        />
      }>
      <Loading />
    </ErrorBoundary>
  );
};

export default PostLoginPage;
