import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

/**
 * A global search bar component that queries the Smash API.
 */
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = useState<{ id: string; label: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchResults() {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }
      try {
        // Replace this URL with the appropriate endpoint for your API.
        const res = await fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`);
        if (!res.ok) {
          setResults([]);
          return;
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          setResults(data);
        } else {
          setResults([]);
        }
      } catch {
        // ignore network errors
        setResults([]);
      }
    }
    fetchResults();
  }, [debouncedQuery]);

  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Recherche..."
        className="rounded-lg border p-2 w-64"
      />
      {results.length > 0 && (
        <ul className="absolute z-50 bg-white dark:bg-gray-800 mt-1 w-full shadow-lg max-h-60 overflow-y-auto rounded-lg">
          {results.map((r) => (
            <li
              key={r.id}
              className="px-3 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => {
                navigate(`/videoplayer/${r.id}`);
                setResults([]);
                setQuery("");
              }}
            >
              {r.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}