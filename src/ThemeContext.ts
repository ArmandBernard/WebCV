import { createContext } from "react";

type Theme = "dark" | "light";

export const ThemeContext = createContext<Theme>("dark");
