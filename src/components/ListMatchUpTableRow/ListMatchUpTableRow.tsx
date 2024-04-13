import React from 'react';
import {Vod} from "../../types";

const ListMatchUpTableRow = (props: { listMatchups: Vod[] }) => {
    return (
        <>
            {props.listMatchups.map(matchup => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {matchup.tournament}
                    </th>
                    <td className="px-6 py-4">
                        {matchup.player1.name} VS {matchup.player2.name}
                    </td>
                    <td className="px-6 py-4">
                        {matchup.uploadDate}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default ListMatchUpTableRow;
