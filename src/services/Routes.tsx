import Home from "../components/Home/Home";
import {createBrowserRouter, RouteObject} from "react-router-dom";
import MatchUp from "../components/MatchUp/MatchUp";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import ListMatchup from "../components/ListMatchUp/ListMatchUp";
import {fetchVodByCharactersId} from "../features/smashApi";
import Root from "../components/Root/Root";

type CustomRouteObject = {
    name: string
} & RouteObject

export const routes: CustomRouteObject[] = [
    {
        name: "Accueil",
        path: '/',
        element: <Home/>,
    },
    {
        name: "Match Up",
        path: '/matchup',
        element: <MatchUp/>,
    },
    {
        name: "Video Player",
        path: '/videolayer',
        element: <VideoPlayer/>,

    },
    {
        name: "List Match Up",
        path: '/listmatchup',
        element: <ListMatchup/>,
        loader: async () => {
            return await fetchVodByCharactersId("10")
        },

    },
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: routes.map((route) => {
            const {name, ...rest} = route;
            return rest;
        })
    },
]);


export default router


