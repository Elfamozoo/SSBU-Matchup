import Home from "../components/Home/Home";
import {createBrowserRouter, RouteObject} from "react-router-dom";
import MatchUp from "../components/MatchUp/MatchUp";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import ListMatchup from "../components/ListMatchUp/ListMatchUp";
import {fetchVodByCharactersId, fetchVodByVideoPlayerId} from "../features/smashApi";
import Root from "../components/Root/Root";


type CustomRouteObject = {
    name: string
    isNotWatchable?: boolean,
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
        name: "List Match Up",
        path: '/listmatchup/:characterId/:characterId2?',
        element: <ListMatchup/>,
        isNotWatchable: true,
        loader: async ({params, request}) => {
            const url = new URL(request.url);
            const pageQuery = url.searchParams.get("page");
            return await fetchVodByCharactersId(params.characterId ? params.characterId : "", params.characterId2, pageQuery ?? "1")
        },

    },
    {
        name: "Video Player",
        path: '/videoplayer/:id',
        element: <VideoPlayer/>,
        isNotWatchable: true,
        loader: async ({params}) => {
            return await fetchVodByVideoPlayerId(params.id ? params.id : "")
        },

    },

]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: routes.map((route) => {
            const {name, ...rest} = route;
            return rest;
        })
    },
]);


