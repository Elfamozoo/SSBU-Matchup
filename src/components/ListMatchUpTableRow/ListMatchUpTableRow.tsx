import React from 'react';
import {Vod} from "../../types";

const ListMatchUpTableRow = (props: { listMatchups: Vod[] }) => {
    console.log(props.listMatchups)
    return (
        <>
            {props.listMatchups.map(matchup => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row"
                        className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                        {matchup.tournament}
                    </th>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                        <a className={""}>
                            {matchup.player1characters.map(character => (
                                <img className=" inline w-8 object-cover rounded-full mx-auto mb-4"
                                     src={`../../src/assets/smashbrosicon/${character.id}.png`} alt={character.name}/>
                            ))}{matchup.player1.name}
                        </a>
                        {" VS "}
                        <a className={""}>
                            {matchup.player2.name}
                            {matchup.player2characters.map(character => (
                                <img className="inline w-8 object-cover rounded-full mx-auto mb-4"
                                     src={`../../src/assets/smashbrosicon/${character.id}.png`} alt={character.name}/>
                            ))}
                        </a>

                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                        {matchup.uploadDate}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default ListMatchUpTableRow;
