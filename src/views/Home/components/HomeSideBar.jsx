import React from "react";
import Logo from "@assets/images/logo-no-background.svg";
import { Home, SearchIcon2 } from "../../../assets/icons/Icons";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserDataContext } from "../../Profile/components/ProfileContext";
import { ROLES } from "../../../utils/roles";
const HomeSideBar = () => {
  const { logout, user } = useAuth0();
  if (!user) return null;
  const { userData } = useUserDataContext();
  const userRoles = userData?.roles || [];
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    localStorage.removeItem("authToken");
  };

  const navigation = [
    {
      href: "/home",
      name: "Inicio",
      icon: <Home />,
      rolesAllowed: [ROLES.USER_CUSTOMER, ROLES.USER_OFFERING],
    },
    {
      href: "/home/search",
      name: "Buscar",
      icon: <SearchIcon2 />,
      rolesAllowed: [ROLES.USER_CUSTOMER, ROLES.USER_OFFERING],
    },
    {
      href: "/home/jobs",
      name: "Trabajos",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
          />
        </svg>
      ),
      rolesAllowed: [ROLES.USER_OFFERING],
    },
    {
      href: "/home/post-job",
      name: "Publicar Trabajo",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8.25v7.5m3.75-3.75h-7.5m12.22-2.72A9.72 9.72 0 1012 21.72 9.72 9.72 0 0021.72 12z"
          />
        </svg>
      ),
      rolesAllowed: [ROLES.USER_CUSTOMER],
    },
    {
      href: `/home/profile/${user.email}`,
      name: "Perfil",
      icon: (
        <img
          src={user?.picture}
          alt="user-profile-img"
          className="w-7 rounded-full"
        />
      ),
      rolesAllowed: [ROLES.USER_CUSTOMER, ROLES.USER_OFFERING],
    },
  ];
  const filteredNavigation = navigation.filter((item) =>
    item.rolesAllowed.some((role) => userRoles.includes(role))
  );
  return (
    <>
      <nav className="[grid-area:sidebar]  max-[640px]:hidden   top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-64">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center px-8">
            <img src={Logo} width={200} className="mx-auto" />
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <ul className="px-4 text-sm font-medium flex-1">
              {filteredNavigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <div className="px-4 pb-4 text-sm font-medium">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                  <div className="text-gray-500">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </div>
                  Salir
                </button>
              </div>
              <div className="py-4 px-4 border-t border-b">
                <div className="flex items-center gap-x-4">
                  <img src={user?.picture} className="w-12 h-12 rounded-full" />
                  <div>
                    <span className="block text-gray-700 text-sm font-semibold">
                      {user.name}
                    </span>
                    <Link
                      to={`/home/profile/${user.email}`}
                      className="block mt-px text-gray-400   hover:text-indigo-600 text-sm">
                      Perfil
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeSideBar;
