import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AdminNavbar from "../../../components/AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import { useDispatch } from "react-redux";
import { logout } from "redux/actions/authActions";

export default function VendorSidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <p className="mt-2 text-center w-full inline-block">
            <H6 color="gray">User Dashboard</H6>
          </p>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/user"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="dashboard" size="2xl" />
                  Dashboard
                </NavLink>
              </li>

              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/user/tradebook"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="upcoming" size="2xl" />
                  Order Book
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/user/funds"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="currency_rupee" size="2xl" />
                  Funds
                </NavLink>
              </li>
            </ul>
            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                <NavLink
                  to="/user/profile"
                  exact
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="settings" size="2xl" />
                  Profile
                </NavLink>
              </li>
              <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white mb-2">
                <div
                  onClick={handleLogout}
                  className="flex cursor-pointer items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="logout" size="2xl" />
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
