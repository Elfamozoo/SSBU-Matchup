import { useEffect, useState } from 'react';

/**
 * Persist a value in localStorage. On mount, it attempts to read an existing
 * entry for the given key and falls back to the provided initial value.
 * Whenever the value changes, it serializes the value back into localStorage.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore write errors (e.g. storage disabled).
    }
  }, [key, value]);

  return [value, setValue] as const;
}