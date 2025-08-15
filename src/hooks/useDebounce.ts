import { useState, useEffect } from "react";

/**
 * Hook that returns a debounced value after a given delay.
 * Useful for delaying a state change until the user stops typing.
 *
 * @param value The value to debounce
 * @param delay The debounce delay in milliseconds
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}