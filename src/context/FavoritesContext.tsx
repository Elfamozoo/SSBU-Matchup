import React, { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Vod } from '../types';

export type FavoritesContextType = {
  favorites: Vod[];
  isFav: (id: string) => boolean;
  toggleFav: (vod: Vod) => void;
  clearFavs: () => void;
  exportFavs: () => string;
  importFavs: (json: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

/**
 * Provider that exposes a list of favourite VODs and helpers to mutate it.
 * The list is persisted in localStorage to survive page reloads.
 */
export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage<Vod[]>('ssbu:favorites', []);

  const isFav = (id: string) => favorites.some((v) => v.id === id);

  const toggleFav = (vod: Vod) => {
    setFavorites((prev) => {
      const exists = prev.find((v) => v.id === vod.id);
      if (exists) {
        return prev.filter((v) => v.id !== vod.id);
      }
      return [...prev, vod];
    });
  };

  const clearFavs = () => setFavorites([]);

  const exportFavs = () => JSON.stringify({ favorites });
  const importFavs = (json: string) => {
    try {
      const data = JSON.parse(json);
      if (Array.isArray(data?.favorites)) {
        setFavorites(data.favorites as Vod[]);
      }
    } catch {
      // ignore parse error
    }
  };

  const value = useMemo<FavoritesContextType>(
    () => ({
      favorites,
      isFav,
      toggleFav,
      clearFavs,
      exportFavs,
      importFavs,
    }),
    [favorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
};