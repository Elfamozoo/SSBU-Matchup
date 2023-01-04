import React, { useState, useEffect } from 'react';
import { fetchCharacters, fetchVodByCharactersId } from '../../features/smashApi';
import { Character } from '../../types';
import ScrollToTop from "react-scroll-to-top";

const MatchUp = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetchCharacters().then(setCharacters);
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-5">Personnages</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {characters.map(character => (
                        <li key={character.id} className="col-span-1 p-4 bg-gray-200 rounded-lg shadow-lg">
                            <img src={`../../src/assets/smashbrosicon/${character.id}.png`} alt={character.name} className="h-32 w-32 object-cover rounded-full mx-auto mb-4" />
                            <h2 className="text-xl font-bold mb-2 text-center">{character.name}</h2>
                            <button
                                onClick={() =>
                                    fetchVodByCharactersId(character.id).then(vods => {
                                        console.log(vods);

                                    })
                                }
                                className="px-4 py-2 rounded-full bg-red-600 text-white font-bold hover:bg-red-700"
                            >
                                Voir VOD
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <ScrollToTop smooth />
        </>

    );
};

export default MatchUp;