import React, { useEffect, useMemo, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

type SearchItem = {
  type: "character" | "player" | "event" | "vod" | string;
  id: string;
  label?: string;
  name?: string;
  [k: string]: any;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 300);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const endpoint = useMemo(() => {
    const base = (import.meta as any)?.env?.VITE_SMASH_API || "/api";
    return `${base}/search?q=`;
  }, []);

  useEffect(() => {
    let aborted = false;
    const ac = new AbortController();

    async function run() {
      if (!debounced.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${endpoint}${encodeURIComponent(debounced)}`, {
          signal: ac.signal
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!aborted) {
          const arr: SearchItem[] = Array.isArray(json?.results) ? json.results : Array.isArray(json) ? json : [];
          setResults(arr.slice(0, 8));
        }
      } catch (e: any) {
        if (!aborted && e?.name !== "AbortError") {
          setError(e?.message || "search failed");
        }
      } finally {
        if (!aborted) setLoading(false);
      }
    }
    run();
    return () => {
      aborted = true;
      ac.abort();
    };
  }, [debounced, endpoint]);

  function goTo(item: SearchItem) {
    const label = item.label || item.name || item.id;
    navigate(`/search?q=${encodeURIComponent(label)}`);
  }

  return (
    <div className="relative w-full">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un perso, joueur, event, VOD…"
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Barre de recherche globale"
      />
      {Boolean(query) && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          {loading && (
            <div className="px-3 py-2 text-sm text-gray-500">Recherche…</div>
          )}
          {error && (
            <div className="px-3 py-2 text-sm text-red-600">{error}</div>
          )}
          {!loading && !error && results.length === 0 && (
            <div className="px-3 py-2 text-sm text-gray-500">Aucun résultat</div>
          )}
          {!loading && !error && results.map((r) => (
            <button
              key={`${r.type}:${r.id}`}
              onClick={() => goTo(r)}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-gray-50"
            >
              <span className="inline-block rounded bg-gray-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-gray-600">
                {r.type}
              </span>
              <span className="truncate">{r.label || r.name || r.id}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
