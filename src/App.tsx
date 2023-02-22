import { useCallback, useEffect, useRef, useState } from "react";
import { AboutMe } from "./AboutMe";
import "./App.css";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Links } from "./Links";
import { PageControls } from "./PageControls";
import { ThemeContext } from "./ThemeContext";
import { useLocalStorage } from "./useLocalStorage";
import { useSystemPreferredTheme } from "./useSystemPreferredTheme";

function App() {
  const htmlRef = useRef(document.documentElement);

  const [activeTheme, setActiveTheme] = useState<"dark" | "light">("dark");

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
      <PageControls
        themePreference={themePreference}
        setThemePreference={setThemePreference}
      />
      <div className="space-y-4 max-sm:mb-16">
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
