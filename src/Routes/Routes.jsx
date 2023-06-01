import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRout from "./PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "checkout/:id",
        element: (
          <PrivetRout>
            <Checkout></Checkout>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`https://new-car-doctor-bice.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRout>
            <Bookings></Bookings>
          </PrivetRout>
        ),
      },
    ],
  },
]);

export default router;
