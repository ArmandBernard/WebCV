import { useCallback, useEffect, useState } from "react";

type ThemePreference = "dark" | "light" | null;

export const useSystemPreferredTheme = () => {
  const [preferredTheme, setPreferredTheme] = useState<ThemePreference>(null);

  const handleThemeChange = useCallback(() => {
    let preference: ThemePreference = null;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      preference = "dark";
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      preference = "light";
    }

    setPreferredTheme(preference);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    query.addEventListener("change", handleThemeChange);

    return () => {
      query.removeEventListener("change", handleThemeChange);
    };
  }, [handleThemeChange]);

  return preferredTheme;
};
