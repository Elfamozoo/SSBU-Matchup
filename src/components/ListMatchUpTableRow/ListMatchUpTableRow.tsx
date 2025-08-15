import React from 'react';
import { Vod } from "../../types";
import { useNavigate } from "react-router-dom";
import { useFavorites } from '../../context/FavoritesContext';

const ListMatchUpTableRow = (props: { listMatchups: Vod[] }) => {
  const navigate = useNavigate();
  const { isFav, toggleFav } = useFavorites();
  return (
    <>
      {props.listMatchups.map((matchup) => {
        const fav = isFav(matchup.id);
        return (
          <tr key={matchup.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                onClick={() => toggleFav(matchup)}
                className={`rounded-full px-2 py-1 text-sm ${fav ? 'bg-yellow-400 text-black' : 'bg-black/60 text-white'} backdrop-blur`}
                aria-pressed={fav}
                aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                title={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
              >
                {fav ? '★' : '☆'}
              </button>
            </td>
            <th
              scope="row"
              className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"
            >
              {matchup.tournament}
            </th>
            <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
              <a
                className={'text-indigo-600 hover:text-indigo-900 cursor-pointer'}
                onClick={() => {
                  navigate(`/videoplayer/${matchup.id}`);
                }}
              >
                {matchup.player1characters.map((character) => (
                  <img
                    key={character.id}
                    className="inline w-8 object-cover rounded-full mx-auto mb-4"
                    src={`/assets/smashbrosicon/${character.id}.png`}
                    alt={character.name}
                  />
                ))}
                {matchup.player1.name}
                {' VS '}
                {matchup.player2.name}
                {matchup.player2characters.map((character) => (
                  <img
                    key={character.id}
                    className="inline w-8 object-cover rounded-full mx-auto mb-4"
                    src={`/assets/smashbrosicon/${character.id}.png`}
                    alt={character.name}
                  />
                ))}
              </a>
            </td>
            <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
              {new Date(matchup.uploadDate).toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ListMatchUpTableRow;