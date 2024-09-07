"use client";

import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useSystemPreferredTheme } from "@/app/hooks/useSystemPreferredTheme";
import { useCallback, useEffect, useRef } from "react";
import { PageControls } from "@/app/components/client/PageControls";

export function ThemeController() {
  const htmlRef = useRef(document.documentElement);

  // use local storage persisting state for app-level theme preference.
  // Defaults to system default.
  const [themePreference, setThemePreference] = useLocalStorage(
    "themePreference",
    "auto"
  );

  const systemPreferredTheme = useSystemPreferredTheme();

  // set the site theme using a class on the main html element
  const setTheme = useCallback((dark: boolean) => {
    if (dark) {
      htmlRef.current.classList.add("dark");
    } else {
      htmlRef.current.classList.remove("dark");
    }
  }, []);

  // when the themePreference changes, also update the app theme
  useEffect(() => {
    switch (themePreference) {
      case "light":
        setTheme(false);
        break;
      case "dark":
      default:
        setTheme(
          systemPreferredTheme === "dark" || systemPreferredTheme === null
        );
        break;
    }
  }, [setTheme, systemPreferredTheme, themePreference]);

  return (
    <PageControls
      themePreference={themePreference}
      setThemePreference={setThemePreference}
    />
  );
}
