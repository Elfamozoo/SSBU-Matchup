import Home from "../components/Home/Home";
import { RouteObject } from "react-router-dom";
import MatchUp from "../components/MatchUp/MatchUp";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import ListMatchup from "../components/ListMatchUp/ListMatchUp";

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
    {
        name:"Video Player",
        path: '/videolayer',
        element: <VideoPlayer/>,

    },
    {
        name:"List Match Up",
        path: '/listmatchup',
        element: <ListMatchup/>,

    },
]

export default routes

