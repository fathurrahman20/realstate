import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home"
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import Offers from "../pages/Offers";

const routerList = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />
    },
    {
        path: "/offers",
        element: <Offers />
    }
])

export default routerList;