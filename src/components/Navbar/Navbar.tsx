import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../services/routes';

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className="flex container w-full mx-auto justify-between items-center font-bold text-2xl px-5 py-6">
            <Link to="/">
                <h1 className="h-3.5rem flex items-center text-center">Logo</h1>
            </Link>
            <nav className="hidden md:flex space-x-10 items-center">
                {routes.map((route) => {
                    return (
                        <Link key={route.name} to={route.path}>
                            {route.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="md:hidden">
                {isModalOpen ? (
                    <div
                        className="bg-#161B21 border-1px border-red-100 fixed w-24rem right-0 top-0 h-100vh transition translate-x-1px rounded-lg text-white"
                    >
                        <div className="pt-5 pb-6 px-5">
                            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(!isModalOpen)}>
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div className="mt-5rem z-10 relative">
                                <div className="absolute right-0 mt-2 py-2 bg-white rounded-md shadow-xl">
                                    {routes.map((route) => (
                                        <Link
                                            key={route.name}
                                            to={route.path}
                                            className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200"
                                        >
                                            <h1 className="">
                                                {route.name}
                                            </h1>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(!isModalOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
