import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadNotice from "../dashboard/UploadNotice";
import ManageNotice from "../dashboard/ManageNotice";
import EditNotice from "../dashboard/EditNotice";
import Singup from "../components/Singup";
import Login from "../components/login";
import PrivateRoute from "../Privateroute/PrivateRoute";
import Logout from "../components/Logout";
import Ourfaculty from "../components/Ourfaculty";
import UploadFaculty from "../dashboard/UploadFaculty";
import EditFaculty from "../dashboard/EditFaculty";
import ManageFaculty from "../dashboard/ManageFaculty";
import UploadBlog from "../dashboard/UploadBlog";
import ManageBlog from "../dashboard/ManageBlog";
import EditBlog from "../dashboard/EditBlog";
import UploadEvent from "../dashboard/UploadEvent";
import UploadNews from "../dashboard/UploadNews";
import ManageEvent from "../dashboard/ManageEvent";
import ManageNews from "../dashboard/ManageNews";
import EditNews from "../dashboard/EditNews";
import EditEvent from "../dashboard/EditEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/faculty',
        element: <Ourfaculty />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: "/blog/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:3000/blog/${params.id}`)
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadNotice />
      },
      {
        path: "/admin/dashboard/faculty",
        element: <UploadFaculty />
      },
      {
        path: "/admin/dashboard/blog",
        element: <UploadBlog />
      },
      {
        path: "/admin/dashboard/news",
        element: <UploadNews />
      },
      {
        path: "/admin/dashboard/event",
        element: <UploadEvent />
      },
      {
        path: "/admin/dashboard/manage-notice",
        element: <ManageNotice />
      },
      {
        path: "/admin/dashboard/manage-event",
        element: <ManageEvent />
      },
      {
        path: "/admin/dashboard/manage-news",
        element: <ManageNews />
      },
      {
        path: "/admin/dashboard/manage-faculty",
        element: <ManageFaculty />
      },
      {
        path: "/admin/dashboard/manage-blog",
        element: <ManageBlog />
      },
      {
        path: "/admin/dashboard/edit-notices/:id",
        element: <EditNotice />,
        loader: ({ params }) => fetch(`http://localhost:3000/notice/${params.id}`)
      },
      {
        path: "/admin/dashboard/edit-blog/:id",
        element: <EditBlog />,
        loader: ({ params }) => fetch(`http://localhost:3000/blog/${params.id}`)
      },
      {
        path: "/admin/dashboard/edit-news/:id",
        element: <EditNews />,
        loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
      },
      {
        path: "/admin/dashboard/edit-event/:id",
        element: <EditEvent />,
        loader: ({ params }) => fetch(`http://localhost:3000/event/${params.id}`)
      },
      {
        path: "/admin/dashboard/edit-faculty/:id",
        element: <EditFaculty />,
        loader: ({ params }) => fetch(`http://localhost:3000/faculty/${params.id}`)
      }
    ]
  },
  {
    path: "/sign-up",
    element: <Singup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  }
]);

export default router;
