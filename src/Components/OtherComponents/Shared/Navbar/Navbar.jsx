import { useEffect, useState } from "react";
import Container from "../Container/Container";
import {
  AiOutlineMenu,
  AiFillSun,
  AiFillMoon,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import avatarImg from "../../../../../public/logo.png";
import useRole from "../../../Hooks/useRole";
import { useTheme } from "../../../ThemeProvider/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [role] = useRole();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCall = () => {
    const phoneNumber = "01815149024";
    window.location.href = `tel:${phoneNumber}`;
  };
// "bg-gradient-to-r from-purple-600 to-blue-800 text-white" navbar background color
  return (
    <nav
      className={`fixed w-full z-40 shadow-lg transition-all duration-300 ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-gray-800 text white"
      }`}
    >
      <div className="py-4 border-b border-gray-300">
        <Container>
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                src="https://i.ibb.co/3M2pSJ2/logo.png"
                alt="Logo"
                className="h-10"
              />
            </Link>
            <div className="flex items-center">
              <label className="cursor-pointer flex items-center mr-4">
                <input
                  onChange={toggleTheme}
                  type="checkbox"
                  className="toggle hidden"
                  checked={theme === "dark"}
                  readOnly
                />
                {theme === "dark" ? (
                  <AiFillSun className="text-yellow-400 text-2xl" />
                ) : (
                  <AiFillMoon className="text-gray-800 text-2xl" />
                )}
              </label>
              <button
                onClick={handleCall}
                className="flex items-center mr-4 p-2 border border-gray-300 rounded-full bg-white text-gray-800 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                aria-label="Call Us"
              >
                <AiOutlinePhone className="text-xl" />
              </button>
              <div className="relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 border border-gray-300 flex items-center gap-2 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  aria-label="User Menu"
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
                >
                  <AiOutlineMenu className="text-xl" />
                  <img
                    className="w-8 h-8 rounded-full"
                    src={user?.photoURL || avatarImg}
                    alt="User Avatar"
                  />
                </div>
                {showTooltip && user && (
                  <div className="absolute bg-gray-700 text-white text-sm rounded-lg p-2 -left-32 top-1/2 transform -translate-y-1/2">
                    {user.displayName || "User"}
                  </div>
                )}
                {isOpen && (
                  <div className="absolute rounded-xl shadow-lg w-48 bg-white overflow-hidden right-0 top-12 text-sm transition duration-300 ease-in-out">
                    <div className="flex flex-col cursor-pointer">
                      <Link
                        to="/"
                        className="block font-bold px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                      >
                        Home
                      </Link>
                      {user && (
                        <>
                          <Link
                            to="/socialWork"
                            className="block font-bold px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                          >
                            Our Activities
                          </Link>
                          <Link
                            to="/"
                            className="block font-bold px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                          >
                            HafeezPara Area Photo
                          </Link>
                          <Link
                            to="/aboutus"
                            className="block font-bold px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                          >
                            About Us
                          </Link>
                          {role === "admin" && (
                            <Link
                              to="/deshbroad"
                              className="block font-bold px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                            >
                              Dashboard
                            </Link>
                          )}
                          <Link
                            to="/profile"
                            className="block font-bold px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                          >
                            Profile
                          </Link>
                          <div
                            onClick={logOut}
                            className="block font-bold px-4 py-3 text-red-700 hover:bg-gray-100 transition duration-300 cursor-pointer"
                          >
                            Logout
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
