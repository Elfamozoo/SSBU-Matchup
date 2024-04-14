import React from 'react';
import {Character} from '../../types';

const MatchUpCharactersRow = (props: {
    characters: Character[],
    charactersIds: string[],
    selectCharacters: (character: Character, checked: boolean) => void
}) => {
    const isIdSelected = (id: string) => props.charactersIds.includes(id)

    const isDisable = !!props.charactersIds.at(1);

    return (
        <>
            {props.characters.map(character => (
                <li key={character.id}
                    className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                    <img src={`/assets/smashbrosicon/${character.id}.png`} alt={character.name}
                         className="h-32 w-32 object-cover rounded-full mx-auto mb-4"/>
                    <h2 className="text-xl font-bold mb-2 text-center">{character.name}</h2>
                    <input disabled={isDisable && !isIdSelected(character.id)}
                           className="px-4 py-2 rounded-full bg-red-600 text-white font-bold hover:bg-red-700"
                           type={"checkbox"} onChange={(event) =>
                        props.selectCharacters(character, event.target.checked)
                    }
                    >
                    </input>
                </li>
            ))}
        </>
    );
};

export default MatchUpCharactersRow;
