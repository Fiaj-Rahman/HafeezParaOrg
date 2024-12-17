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
import AllActivities from '../PublishedDetails/AllActivites';
import ActivityDetails from '../Pages/Home/ActivityDetails';
import BlogManagement from '../BlogDetails/BlogManagement';
import BloodGrp from '../BloodGrp/BloodGrp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/socialWork',
        element: (
          <PrivateRoute>
            <AllActivities />
          </PrivateRoute>
        ),
      },
      {
        path: '/activity/:id',
        element: (
          <PrivateRoute>
            <ActivityDetails />
          </PrivateRoute>
        ),
      },
      {
        path:'/bloodGrp',
        element:<PrivateRoute><BloodGrp></BloodGrp></PrivateRoute>
      }
      ,
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/aboutus',
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/deshbroad',
    element: <PrivateRoute><DeshBroad /></PrivateRoute>,
    children: [
      { index: true, element: <Statistic /> },
      { path: 'workPublished', element: <WorkPublished /> },
      { path: 'userList', element: <UserList /> },
      { path: 'contactMessage', element: <ContactMessage /> },
      { path: 'publishedDetails', element: <PublishedDetails /> },
      { path: 'blogManagement', element: <BlogManagement></BlogManagement> },
    ],
  },
  
]);
