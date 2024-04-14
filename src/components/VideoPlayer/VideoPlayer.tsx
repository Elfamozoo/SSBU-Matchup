import React from 'react';
import {Vod} from "../../types";
import {useLoaderData} from "react-router-dom";
import {nanoid} from "nanoid";

const VideoPlayer = () => {
    const videoPlayerDescription = useLoaderData() as Vod
    console.log(videoPlayerDescription)
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-5">{`${videoPlayerDescription.player1.name} VS ${videoPlayerDescription.player2.name}`} </h1>
                <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">{videoPlayerDescription.tournament}</p>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe key={`https://www.youtube.com/embed/${videoPlayerDescription.id}`} src={`https://www.youtube.com/embed/${videoPlayerDescription.id}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}


export default VideoPlayer
