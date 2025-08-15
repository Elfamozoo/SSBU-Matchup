import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

/**
 * Displays the user's favourite VODs and tools to export/import/clear them.
 */
export default function FavoritesPage() {
  const { favorites, clearFavs, exportFavs, importFavs } = useFavorites();
  const [importText, setImportText] = useState('');

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h1 className="text-2xl font-semibold">Mes favoris</h1>
        <div className="flex gap-2">
          <button
            className="rounded-xl border px-3 py-1"
            onClick={() => {
              const data = exportFavs();
              navigator.clipboard.writeText(data).catch(() => {});
              alert('Export copié dans le presse-papiers !');
            }}
          >
            Exporter JSON
          </button>
          <button className="rounded-xl border px-3 py-1" onClick={() => clearFavs()}>
            Vider
          </button>
        </div>
      </div>

      <div className="mb-4 grid gap-2">
        <textarea
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder="Colle ici un export JSON pour l'import..."
          className="w-full h-28 rounded-xl border bg-transparent p-2"
        />
        <button
          className="self-start rounded-xl border px-3 py-1"
          onClick={() => importFavs(importText)}
        >
          Importer
        </button>
      </div>

      {favorites.length === 0 ? (
        <p className="opacity-70">Aucune vidéo en favori pour l’instant.</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl shadow p-3 bg-white/5 border border-white/10"
            >
              <h3 className="text-sm font-semibold mb-1">{`${v.player1.name} VS ${v.player2.name}`}</h3>
              <p className="text-xs text-gray-500 mb-1">{v.tournament}</p>
              <p className="text-xs text-gray-400 mb-2">
                {new Date(v.uploadDate).toLocaleDateString('fr-FR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <Link
                to={`/videoplayer/${v.id}`}
                className="text-indigo-600 hover:text-indigo-900 text-xs font-medium"
              >
                Voir la vidéo
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}