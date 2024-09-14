import Container from "../Container/Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import avatarImg from "../../../../../public/logo.png"; // Default avatar image
import useRole from "../../../Hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [role] = useRole();
  const [showTooltip, setShowTooltip] = useState(false); // State for tooltip visibility

  return (
    <div className="fixed w-full bg-white z-40 shadow-md">
      <div className="py-4 border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <img src="https://i.ibb.co.com/3M2pSJ2/logo.png" alt="Logo" className="h-10" />
            </Link>
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex items-center">
                {/* Dropdown Button */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 border border-gray-300 flex items-center gap-2 rounded-full cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
                  onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
                  onMouseLeave={() => setShowTooltip(false)} // Hide tooltip on mouse leave
                >
                  <AiOutlineMenu className="text-xl" />
                  <img
                    className="w-8 h-8 rounded-full"
                    referrerPolicy="no-referrer"
                    src={user?.photoURL || avatarImg}
                    alt="User Avatar"
                  />
                </div>
                {/* Tooltip */}
                {showTooltip && user && (
                  <div className="absolute bg-gray-700 text-white text-sm rounded-lg p-2 -left-32 top-1/2 transform -translate-y-1/2">
                    {user.displayName || "User"}
                  </div>
                )}
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-lg w-48 bg-white overflow-hidden right-0 top-12 text-sm transition duration-300 ease-in-out">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block font-bold px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/socialWork"
                          className="font-bold block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                        >
                          Our Activities
                        </Link>

                        <Link
                          to="/"
                          className=" font-bold block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                        >
                          HafeezPara Area Photo
                        </Link>

                        <Link
                          to="/aboutus"
                          className="font-bold block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                        >
                          About Us
                        </Link>

                        {/* Conditionally render the Dashboard link for admin users */}
                        {role === "admin" && (
                          <Link
                            to="deshbroad"
                            className="font-bold block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                          >
                            Dashboard
                          </Link>
                        )}

                        <Link
                          to="/profile"
                          className="font-bold block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                        >
                          Profile
                        </Link>

                        <div
                          onClick={logOut}
                          className="font-bold px-4 py-3 text-red-700 hover:bg-gray-100 transition duration-300 cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
