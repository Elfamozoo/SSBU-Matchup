import React from 'react';
import { routes } from "../../services/Routes";
import { Link, To } from "react-router-dom";
import { useFavorites } from '../../context/FavoritesContext';

export const NavLink = (props: { className?: string }) => {
  const { favorites } = useFavorites();
  return (
    <>
      {routes
        .filter((route) => !route.isNotWatchable)
        .map((route) => {
          if (route.name === 'Favoris') {
            return (
              <Link key={route.name} to={route.path as To} className={props.className}>
                {route.name}
                {favorites.length > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center text-xs px-2 py-0.5 rounded-full border">
                    {favorites.length}
                  </span>
                )}
              </Link>
            );
          }
          return (
            <Link key={route.name} to={route.path as To} className={props.className}>
              {route.name}
            </Link>
          );
        })}
    </>
  );
};