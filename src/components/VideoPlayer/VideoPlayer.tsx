import React from 'react';
import {Vod} from "../../types";
import {useLoaderData} from "react-router-dom";
const VideoPlayer = () => {
    const VideoPlayerDescription = useLoaderData() as Vod
    console.log(VideoPlayerDescription)
    return (
        <>
        </>
    )
}


export default VideoPlayer
