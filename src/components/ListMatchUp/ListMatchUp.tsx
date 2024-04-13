import React from "react";
import {useLoaderData} from "react-router-dom";
import {Vod} from "../../types";
import ListMatchUpColumnHeader from "../ListMatchUpColumnHeader/ListMatchUpColumnHeader";
import ListMatchUpTableRow from "../ListMatchUpTableRow/ListMatchUpTableRow";

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
                        <ListMatchUpColumnHeader/>
                        <tbody>
                        <ListMatchUpTableRow listMatchups={listMatchups}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default ListMatchup
