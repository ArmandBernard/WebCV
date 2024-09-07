import { useEffect, useState } from "react";

export const useLocalStorage = (
  key: string,
  defaultValue?: string
): [state: string | null, setState: (newValue: string) => void] => {
  const [state, setState] = useState<string | null>(defaultValue ?? null);

  // setter function that sets both local storage and state
  const set = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setState(newValue);
  };

  useEffect(() => {
    // load value from local storage
    const storedValue = localStorage.getItem(key);

    // write default into local storage if not yet set
    if (defaultValue !== undefined && state === null && storedValue === null) {
      localStorage.setItem(key, defaultValue);
    }

    // use loaded in state
    if (storedValue !== null) {
      setState(storedValue);
    }
  }, [key, defaultValue, state]);

  return [state, set];
};
