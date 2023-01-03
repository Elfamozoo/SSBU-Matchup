import Home from "../components/Home/Home";
import { RouteObject } from "react-router-dom";
import MatchUp from "../components/MatchUp/MatchUp";

type CustomRouteObject = {
    name: string
} & RouteObject

const routes: CustomRouteObject[] = [
    {
        name: "Accueil",
        path: '/',
        element: <Home />,
    },
    {
        name: "Match Up",
        path: '/matchup',
        element: <MatchUp />,
    },
]

export default routes

