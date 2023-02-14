import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { AboutMe } from "./AboutMe";
import "./App.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Links } from "./Links";
import { Select } from "./Select";
import { ThemeContext } from "./ThemeContext";
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
      setActiveTheme("dark");
      htmlRef.current.classList.add("dark");
    } else {
      setActiveTheme("light");
      htmlRef.current.classList.remove("dark");
    }
  }, []);

  const [activeTheme, setActiveTheme] = useState<"dark" | "light">("dark");

  // use local storage persisting state for app-level theme preference.
  // Defaults to system default.
  const [themePreference, setThemePreference] = useLocalStorage(
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
    <ThemeContext.Provider value={activeTheme}>
      <div className="flex flex-col gap-4">
        <div
          className={`m-4 gap-2 items-center sm:grid sm:grid-cols-[1fr_auto_1fr] 
          max-sm:flex max-sm:justify-between`}
        >
          <h1 className="col-start-2">Armand Bernard&apos;s Web CV</h1>
          <div className="justify-self-end flex items-center gap-2">
            <div className="flex items-baseline gap-2 relative">
              <label
                className={`max-sm:text-xs max-sm:absolute max-sm:px-1 max-sm:left-1 
              max-sm:top-[-0.5rem] max-sm:bg-background`}
                id={themePickerLabel}
              >
                Theme
              </label>

              <Select
                aria-labelledby={themePickerLabel}
                className="sm:w-20"
                options={["auto", "dark", "light"]}
                selectedOption={themePreference ?? "auto"}
                setSelectedOption={setThemePreference}
              />
            </div>
            <button
              className="material-symbols-outlined text-4xl"
              onClick={() => window.print()}
            >
              print
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <main className="max-w-4xl flex flex-col px-4 flex-grow gap-4 mb-8">
            <AboutMe />
            <Experience />
            <Education />
            <Links />
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
