import { useCallback, useEffect, useRef } from "react";
import { AboutMe } from "./AboutMe";
import "./App.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Select } from "./Select";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const htmlRef = useRef(document.documentElement);

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
      <label className="absolute right-4 top-4 flex items-baseline gap-2">
        Theme
        <Select
          className="w-20"
          options={["dark", "light"]}
          selectedOption={themePreference ?? undefined}
          setSelectedOption={setThemePreference}
        />
      </label>

      <div className="flex justify-center">
        <div className="max-w-4xl flex flex-col px-4 flex-grow gap-4 mb-8">
          <h1 className="self-center m-4">Armand Bernard&apos;s Web CV</h1>
          <AboutMe />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
