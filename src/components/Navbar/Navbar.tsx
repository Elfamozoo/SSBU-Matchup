import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { useFavorites } from "../../context/FavoritesContext";

export default function Navbar() {
  const { favorites } = useFavorites();
  const favCount =
    favorites instanceof Map ? favorites.size : (favorites?.length ?? 0);

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2">
        {/* Zone gauche: logo + liens */}
        <div className="flex items-center gap-3">
          <Link to="/" className="font-semibold">
            SSBU Matchup
          </Link>
          <Link
            to="/matchup"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Matchups
          </Link>
          <Link
            to="/favorites"
            className="relative text-sm text-gray-600 hover:text-gray-900"
          >
            Favoris
            <span
              aria-label="Nombre de favoris"
              className="ml-1 inline-flex min-w-[18px] items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[11px] leading-5 text-white"
            >
              {favCount}
            </span>
          </Link>
        </div>

        {/* Zone droite: SearchBar */}
        <div className="ml-auto w-full max-w-md">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
