import Home from "../components/Home/Home";
import {RouteObject} from "react-router-dom";

type CustomRouteObject = {
    name: string
} & RouteObject

const routes: CustomRouteObject[] = [
    {
        name: "Accueil",
        path: '/',
        element: <Home/>,
    },
    {
        name: "Match Up",
        path: '/matchup',
        element: <Home/>,
    },
]

export default routes

