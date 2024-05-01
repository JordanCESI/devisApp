import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import NewClient from "../pages/newClient";
import Mesure from "../pages/mesure";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/newclient", element: <NewClient/>},
            {path: "/mesure", element: <Mesure/>},

        ]
    }
])