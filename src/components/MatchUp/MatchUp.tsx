import React, {useEffect, useState} from 'react';
import {fetchCharacters} from '../../features/smashApi';
import {Character} from '../../types';
import ScrollToTop from "react-scroll-to-top";
import {useNavigate} from "react-router-dom";

const MatchUp = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [charactersIds, setCharactersIds] = useState<string[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetchCharacters().then(setCharacters);
    }, []);
    console.log(charactersIds)
    const isIdSelected = (id: string) => {
        return charactersIds.includes(id)
    }
    const isDisable = !!charactersIds.at(1);
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-5">Personnages</h1>
                <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Selectionne un personnage pour
                    filtrer toutes les VODs incluant
                    ce personnage.</p>

                <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Sinon, selectionne deux
                    personnages pour chercher les VODs qui corresponds a ce matchup
                    specifique.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    {characters.map(character => (
                        <li key={character.id}
                            className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                            <img src={`../../src/assets/smashbrosicon/${character.id}.png`} alt={character.name}
                                 className="h-32 w-32 object-cover rounded-full mx-auto mb-4"/>
                            <h2 className="text-xl font-bold mb-2 text-center">{character.name}</h2>
                            <input disabled={isDisable && !isIdSelected(character.id)}
                                   className="px-4 py-2 rounded-full bg-red-600 text-white font-bold hover:bg-red-700"
                                   type={"checkbox"} onChange={(event) => {
                                if (event.target.checked) {
                                    setCharactersIds([...charactersIds, character.id])
                                } else {
                                    const localArray: string[] = [...charactersIds]
                                    const index = localArray.indexOf(character.id)
                                    localArray.splice(index, 1)
                                    setCharactersIds(localArray)
                                }
                            }}
                            >
                            </input>
                        </li>
                    ))}
                </ul>
                <button onClick={() => {
                    navigate(`/listmatchup/${charactersIds[0]}/${charactersIds[1] ?? ""}`)
                }} className="bg-red-700 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    MATCH UP !
                </button>
            </div>
            <ScrollToTop smooth/>
        </>

    );
};

export default MatchUp;
