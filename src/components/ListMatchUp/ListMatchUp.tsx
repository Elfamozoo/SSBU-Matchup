import React from "react";
import {useLoaderData} from "react-router-dom";
import {Vod} from "../../types";

const ListMatchup = () => {
    const listMatchups = useLoaderData() as Vod[];
    console.log(listMatchups)

    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-5">Listes des combats</h1>
                <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Parcours les matchs de ces 2
                    personnages</p>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nom du tournoi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Match
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date du match
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {listMatchups.map(matchup => (
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default ListMatchup
