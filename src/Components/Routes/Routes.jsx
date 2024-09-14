import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import PrivateRoute from './PrivateRoute';
import DeshBroad from '../DeshBroad/DeshBroad';
import Statistic from '../Statistic/Statistic';
import WorkPublished from '../WorkPublished/WorkPublished';
import UserList from '../UserList/UserList';
import ContactMessage from '../ContactMessage/ContactMessage';
import PublishedDetails from '../PublishedDetails/PublishedDetails';
import SocialWork from '../PublishedDetails/SocialWork';
import Profile from '../Profile/Profile';
import AboutUs from '../AboutUs/AboutUs';
import AllActivites from '../PublishedDetails/AllActivites';

// Create router
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />, // Error page for unmatched routes
    children: [
      {
        path: '/',
        element: <Home />, // Home page
      },
      {
        path: '/room/:id', // Dynamic route for room details
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/socialWork', // Social work route
        element: (
          <PrivateRoute>
            <AllActivites></AllActivites>
          </PrivateRoute>
        ),
      },

      {
        path: '/profile', // Social work route
        element: (
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        ),
      },

      {
        path: '/aboutus', // Social work route
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
      
    ],
  },
  { path: '/login', element: <Login /> }, // Login page
  { path: '/signup', element: <SignUp /> }, // Signup page
  // Dashboard routes
  {
    path: '/deshbroad',
    element: <PrivateRoute><DeshBroad /></PrivateRoute>,
    children: [
      {
        path: '/deshbroad',
        element: <PrivateRoute><Statistic /></PrivateRoute>,
      },
      {
        path: '/deshbroad/workPublished',
        element: <PrivateRoute><WorkPublished /></PrivateRoute>,
      },
      {
        path: '/deshbroad/userList',
        element: <PrivateRoute><UserList /></PrivateRoute>,
      },
      {
        path: '/deshbroad/contactMessage',
        element: <PrivateRoute><ContactMessage /></PrivateRoute>,
      },
      {
        path: '/deshbroad/publishedDetails',
        element: <PrivateRoute><PublishedDetails /></PrivateRoute>,
      },

     
    ],
  },
]);
