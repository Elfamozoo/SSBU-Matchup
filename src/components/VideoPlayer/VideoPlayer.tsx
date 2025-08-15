import React from 'react';
import { Vod } from "../../types";
import { useLoaderData } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';
import { useFavorites } from '../../context/FavoritesContext';

const VideoPlayer = () => {
  const videoPlayerDescription = useLoaderData() as Vod;
  const { isFav, toggleFav } = useFavorites();
  const fav = isFav(videoPlayerDescription.id);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-5">{`${videoPlayerDescription.player1.name} VS ${videoPlayerDescription.player2.name}`}</h1>
          <button
            onClick={() => toggleFav(videoPlayerDescription)}
            className={`rounded-full px-3 py-1 text-sm font-medium mt-1 ${
              fav ? 'bg-yellow-400 text-black' : 'bg-black/60 text-white'
            } backdrop-blur`}
            aria-pressed={fav}
            aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            title={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            {fav ? '★' : '☆'}
          </button>
        </div>
        <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
          {videoPlayerDescription.tournament}
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            playsinline={true}
            url={`https://www.youtube.com/embed/${videoPlayerDescription.id}`}
          ></ReactPlayer>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;