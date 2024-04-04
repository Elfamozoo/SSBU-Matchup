import React from "react";
import {useLoaderData} from "react-router-dom";

const ListMatchup = () => {
    const listMatchups = useLoaderData()
    console.log(listMatchups)


    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-5">Listes des combats</h1>
                <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Parcours les matchs de ces 2 personnages</p>
            </div>
        </>
    )
}


export default ListMatchup
