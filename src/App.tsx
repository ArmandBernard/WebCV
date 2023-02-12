import { useCallback, useEffect, useId, useRef } from "react";
import { AboutMe } from "./AboutMe";
import "./App.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Select } from "./Select";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const htmlRef = useRef(document.documentElement);

  const themePickerLabel = useId();

  const setTheme = useCallback((dark: boolean) => {
    if (dark) {
      htmlRef.current.classList.add("dark");
    } else {
      htmlRef.current.classList.remove("dark");
    }
  }, []);

  const { get: themePreference, set: setThemePreference } =
    useLocalStorage("themePreference");

  useEffect(() => {
    switch (themePreference) {
      case null:
        setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
        break;
      case "light":
        setTheme(false);
        break;
      case "dark":
      default:
        setTheme(true);
    }
  }, [setTheme, themePreference]);

  return (
    <div>
      <div className="absolute right-4 top-4 flex items-baseline gap-2">
        <label id={themePickerLabel}>Theme</label>
        <Select
          aria-labelledby={themePickerLabel}
          className="w-20"
          options={["dark", "light"]}
          selectedOption={themePreference ?? undefined}
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
