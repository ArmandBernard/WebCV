import { useCallback, useEffect, useId, useMemo, useRef } from "react";
import { AboutMe } from "./AboutMe";
import "./App.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Select } from "./Select";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const htmlRef = useRef(document.documentElement);

  const themePickerLabel = useId();

  // determine system theme once on app load
  const systemPreferredTheme = useMemo(() => {
    let preference: "dark" | "light" | null = null;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      preference = "dark";
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      preference = "light";
    }

    return preference;
  }, []);

  // set the site theme using a class on the main html element
  const setTheme = useCallback((dark: boolean) => {
    if (dark) {
      htmlRef.current.classList.add("dark");
    } else {
      htmlRef.current.classList.remove("dark");
    }
  }, []);

  // use local storage persisting state for app-level theme preference.
  // Defaults to system default.
  const { get: themePreference, set: setThemePreference } = useLocalStorage(
    "themePreference",
    "auto"
  );

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
    <div>
      <div className="absolute right-4 top-4 flex items-baseline gap-2">
        <label id={themePickerLabel}>Theme</label>
        <Select
          aria-labelledby={themePickerLabel}
          className="w-20"
          options={["auto", "dark", "light"]}
          selectedOption={themePreference ?? "auto"}
          setSelectedOption={setThemePreference}
        />
      </div>

      <div className="flex justify-center">
        <main className="max-w-4xl flex flex-col px-4 flex-grow gap-4 mb-8">
          <h1 className="self-center m-4">Armand Bernard&apos;s Web CV</h1>
          <AboutMe />
          <Experience />
          <Education />
        </main>
      </div>
    </div>
  );
}

export default App;
