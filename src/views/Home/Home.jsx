import React, { useState, useEffect } from "react";
import HomeSideBar from "./components/HomeSideBar";
import JobMain from "../Jobs/JobMain";
import HomeMain from "./components/HomeMain";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import PostJobs from "../Jobs/components/PostJobs";
import JobDetails from "../Jobs/components/JobDetails";
import AuthenticationGuard from "../../auth/AuthenticationGuard";
import { useUserByEmail } from "@hooks/useUsers";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfileProvider } from "../Profile/components/ProfileContext";
import Loading from "../../components/Loading";
import Error from "../../components/Errors/Error";
import { ROLES } from "../../utils/roles";
import RoleGuard from "../../auth/RoleGuard";
import { HomeWelcome } from "./components/Welcome";
const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { user, isLoading: isLoadingAuth } = useAuth0();
  const { data: userData, isError, isLoading } = useUserByEmail(user.email);
  return isLoading || isLoadingAuth ? (
    <Loading />
  ) : isError ? (
    <Error
      messaje={"Ups ! Ocurrio un error"}
      img={"/src/assets/images/undraw_server_down_s4lk.png"}
    />
  ) : (
    <ProfileProvider userData={userData}>
      <div
        style={{
          padding: "5",
          display: "grid",
          gridTemplateColumns: "1fr 5fr",
          gridTemplateRows: "100vh",
          gridTemplateAreas: isMobile ? '"main main"' : '"sidebar main"',
        }}>
        <HomeSideBar />
        <Routes>
          <Route
            path="/"
            element={<AuthenticationGuard component={HomeWelcome} />}
          />
          <Route
            path="search"
            element={<AuthenticationGuard component={HomeMain} />}
          />
          <Route
            path="jobs"
            element={
              <RoleGuard
                allowedRoles={[ROLES.USER_OFFERING]}
                component={JobMain}
              />
            }
          />
          <Route
            path="profile/:userEmail"
            element={<AuthenticationGuard component={Profile} />}
          />
          <Route
            path="post-job/*"
            element={
              <RoleGuard
                allowedRoles={[ROLES.USER_CUSTOMER]}
                component={PostJobs}
              />
            }>
            <Route
              path="details/:jobId"
              element={<AuthenticationGuard component={JobDetails} />}
            />
          </Route>
        </Routes>
      </div>
    </ProfileProvider>
  );
};

export default Home;
