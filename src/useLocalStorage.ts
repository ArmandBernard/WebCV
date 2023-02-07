import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, defaultValue?: string) => {
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
    defaultValue !== undefined &&
      state === null &&
      storedValue === null &&
      localStorage.setItem(key, defaultValue);

    // use loaded in state
    storedValue !== null && setState(storedValue);
  }, [key, defaultValue, state]);

  return { get: state, set };
};
