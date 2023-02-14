import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Links = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h2>Links</h2>
      <div className="flex">
        <a href="https://www.linkedin.com/in/armand-bernard-8605b8b1/">
          <img
            className="h-16"
            alt="LinkedIn profile"
            src="./LinkedInLogo.svg"
          />
        </a>
        <a href="https://github.com/ArmandBernard">
          <img
            className="h-16"
            alt="GitHub Profile"
            src={theme === "dark" ? "./github-white.svg" : "./github.svg"}
          />
        </a>
      </div>
    </>
  );
};
