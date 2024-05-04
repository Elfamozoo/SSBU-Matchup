import React from 'react';
import {Vod} from "../../types";
import {useLoaderData} from "react-router-dom";
import ReactPlayer from 'react-player/youtube'

const VideoPlayer = () => {
    const videoPlayerDescription = useLoaderData() as Vod

    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-5">{`${videoPlayerDescription.player1.name} VS ${videoPlayerDescription.player2.name}`} </h1>
                <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">{videoPlayerDescription.tournament}</p>
                <div className="aspect-w-16 aspect-h-9">
                    <ReactPlayer width='100%'
                                 height='100%'
                                 controls={true}
                                 playsinline={true}
                                 url={`https://www.youtube.com/embed/${videoPlayerDescription.id}`}></ReactPlayer>
                </div>
            </div>
        </>
    )
}


export default VideoPlayer
