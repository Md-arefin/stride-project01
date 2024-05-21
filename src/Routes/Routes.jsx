import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/Registration/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <div>This is about</div>,
            },
            {
                path: "/contact",
                element: <div>This is contact</div>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/sign-up",
                element: <SignUp/>,
            }
        ],
    },
]);