import React from 'react';

const ListMatchUpColumnHeader = () => {
    return (
        <>
            <thead
                className="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        </>
    );
};

export default ListMatchUpColumnHeader;
