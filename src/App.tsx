import {
  useCallback,
  useDeferredValue,
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
import { SelectMobile } from "./SelectMobile";
import { ThemeContext } from "./ThemeContext";
import { useLocalStorage } from "./useLocalStorage";
import { useSystemPreferredTheme } from "./useSystemPreferredTheme";
import { useWindowWidth } from "./useWindowWidth";

function App() {
  const htmlRef = useRef(document.documentElement);
  const themePickerLabel = useId();
  const [activeTheme, setActiveTheme] = useState<"dark" | "light">("dark");

  // use local storage persisting state for app-level theme preference.
  // Defaults to system default.
  const [themePreference, setThemePreference] = useLocalStorage(
    "themePreference",
    "auto"
  );

  const windowWidth = useDeferredValue(useWindowWidth());
  const systemPreferredTheme = useSystemPreferredTheme();

  const isAndroid = useMemo(
    () => navigator.userAgent.toLowerCase().includes("android"),
    []
  );

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
      <div className="flex items-center gap-2 fixed sm:top-0 right-0 max-sm:bottom-0 print:invisible p-4">
        <div className="flex items-baseline gap-2 relative">
          <label
            className={`max-sm:text-sm max-sm:absolute py-1 px-2 max-sm:left-2 rounded
              max-sm:top-[-0.75rem] bg-background`}
            id={themePickerLabel}
          >
            Theme
          </label>
          {windowWidth < 640 ? (
            <SelectMobile
              aria-labelledby={themePickerLabel}
              options={["auto", "dark", "light"]}
              selectedOption={themePreference ?? "auto"}
              setSelectedOption={setThemePreference}
            />
          ) : (
            <Select
              position={"bottom"}
              aria-labelledby={themePickerLabel}
              options={["auto", "dark", "light"]}
              selectedOption={themePreference ?? "auto"}
              setSelectedOption={setThemePreference}
            />
          )}
        </div>
        {!isAndroid && (
          <button
            className={`material-symbols-outlined text-4xl bg-background rounded-full max-sm:p-2 
              border border-neutral-400 dark:border-white`}
            onClick={() => window.print()}
          >
            print
          </button>
        )}
      </div>
      <div className="space-y-4">
        <div className="flex justify-center">
          <main className="max-w-4xl px-4 flex-grow space-y-4 mb-8">
            <h1 className="text-center mt-6">Armand Bernard&apos;s Web CV</h1>
            <AboutMe />
            <Experience />
            <Education />
            <Links />
          </main>
        </div>
      </div>
      <footer className="invisible print:visible fixed bottom-0 py-2 px-4 bg-background">
        This CV was obtained from{" "}
        <a href="https://armandbernard.github.io/WebCV/">
          https://armandbernard.github.io/WebCV/
        </a>
      </footer>
    </ThemeContext.Provider>
  );
}

export default App;
