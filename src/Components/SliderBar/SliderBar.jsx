// import { useState } from 'react';
// import { GrLogout } from 'react-icons/gr';
// import { FcSettings } from 'react-icons/fc';
// import { BsFillHouseAddFill, BsGraphUp } from 'react-icons/bs';
// import { MdContactPhone, MdPayment } from 'react-icons/md';
// import { AiOutlineBars } from 'react-icons/ai';
// import { NavLink, useNavigate, Link } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';
// import { GiProgression } from 'react-icons/gi';
// import { FaHome } from 'react-icons/fa';
// import { FaPeopleGroup } from "react-icons/fa6";

// const SlideBar = () => {
//   const { logOut } = useAuth();
//   const [isActive, setActive] = useState(false);
//   const navigate = useNavigate();

//   const handleToggle = () => {
//     setActive(!isActive);
//   };

//   const handleLogOut = async () => {
//     try {
//       await logOut();
//       navigate('/');
//     } catch (error) {
//       console.error("Failed to log out", error);
//     }
//   };

//   return (
//     <>
//       {/* Small Screen Navbar */}
//       <div className="bg-gray-800 text-white z-50 flex justify-between items-center p-4 md:hidden">
//         <div className="cursor-pointer">
//           <Link to="/">
//             <img src="https://i.ibb.co.com/3M2pSJ2/logo.png" alt="logo" width="100" />
//           </Link>
//         </div>
//         <button onClick={handleToggle} className="focus:outline-none focus:bg-gray-700 p-2 rounded-full">
//           <AiOutlineBars className="h-5 w-5" />
//         </button>
//       </div>

//       {/* SlideBar */}
//       <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transform transition-transform duration-200 ease-in-out ${isActive ? '-translate-x-full' : 'translate-x-0'} md:translate-x-0`}>
//         <div className="px-4 py-2 shadow-lg bg-rose-700 text-center">
//           <Link to="/">
//             <img src="/logo.png" alt="logo" className="mx-auto w-3/4" />
//           </Link>
//         </div>

//         {/* Nav Items */}
//         <nav className="mt-6">
//           <NavLink to="/" end className={({ isActive }) => `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>
//             <FaHome className="w-5 h-5" />
//             <span className="mx-4 font-medium">Home</span>
//           </NavLink>

//           <NavLink to="/deshbroad" end className={({ isActive }) => `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>
//             <BsGraphUp className="w-5 h-5" />
//             <span className="mx-4 font-medium">Statistics</span>
//           </NavLink>

//           <NavLink to="/deshbroad/UserList" className={({ isActive }) => `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>
//             <FaPeopleGroup className="w-5 h-5" />
//             <span className="mx-4 font-medium">User List</span>
//           </NavLink>

//           <NavLink to="/deshbroad/publishedDetails" className={({ isActive }) => `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>
//             <GiProgression className="w-5 h-5" />
//             <span className="mx-4 font-medium">Published Social Work</span>
//           </NavLink>

//           <NavLink to="/deshbroad/contactMessage" className={({ isActive }) => `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>
//             <MdContactPhone className="w-5 h-5" />
//             <span className="mx-4 font-medium">Contact Message</span>
//           </NavLink>
//         </nav>

//         <div className="mt-4 border-t border-gray-800 pt-4">
//           <button onClick={handleLogOut} className="flex items-center w-full px-4 py-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300">
//             <GrLogout className="w-5 h-5" />
//             <span className="mx-4 font-medium">Logout</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SlideBar;





import { useState } from 'react';
import { GrLogout } from 'react-icons/gr';
import { AiOutlineBars } from 'react-icons/ai';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { FaHome } from "react-icons/fa";

const SlideBar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-800 text-white z-50 flex justify-between items-center p-4 md:hidden">
        <Link to="/">
          <img src="https://i.ibb.co.com/3M2pSJ2/logo.png" alt="logo" width="100" />
        </Link>

        <button
          onClick={handleToggle}
          className="focus:outline-none focus:bg-gray-700 p-2 rounded-full"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* SlideBar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white font-bold transform transition-transform duration-200 ease-in-out z-40 ${
          isActive ? '-translate-x-full' : 'translate-x-0'
        } md:translate-x-0`}
      >
        <div className="px-4 py-2 shadow-lg bg-rose-700 text-center rounded-lg">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="mx-auto w-3/4" />
          </Link>
        </div>

        {/* Nav Items */}
        <nav className="mt-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${
                isActive ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`
            }
          >
            <FaHome className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          {/* Other NavLinks */}

          <NavLink
            to="/deshbroad"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${
                isActive ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`
            }
          >
            <FaHome className="w-5 h-5" />
            <span className="mx-4 font-medium">Statistic</span>
          </NavLink>

          <NavLink
            to="/deshbroad/publishedDetails"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${
                isActive ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`
            }
          >
            <FaHome className="w-5 h-5" />
            <span className="mx-4 font-medium">Published Social Work</span>
          </NavLink>
          


          <NavLink
            to="/deshbroad/userList"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${
                isActive ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`
            }
          >
            <FaHome className="w-5 h-5" />
            <span className="mx-4 font-medium">User List</span>
          </NavLink>


          <NavLink
            to="/deshbroad/contactMessage"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-3 my-2 transition-colors duration-300 transform hover:bg-gray-700 hover:text-white ${
                isActive ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`
            }
          >
            <FaHome className="w-5 h-5" />
            <span className="mx-4 font-medium">FeedBack Message</span>
          </NavLink>

        </nav>

        <div className="mt-4 border-t border-gray-800 pt-4">
          <button
            onClick={handleLogOut}
            className="flex items-center w-full px-4 py-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideBar;
