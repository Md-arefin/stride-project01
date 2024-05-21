import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

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
                path: "/home",
                element: <div>This is home</div>,
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
                element: <div>This is login</div>,
            },
        ],
    },
]);