import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";

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
        ],
    },
]);