import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Share/SignIn/SignIn";
import JobDetails from "../pages/Home/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRoute/PrivateRouter";
import JobApply from "../pages/JobApply/JobApply";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Router not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: <PrivateRouter><JobDetails /></PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRouter><JobApply /></PrivateRouter>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <SignIn/>,
      },
    ],
  },
]);

export default router;
