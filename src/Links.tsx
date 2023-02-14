import { FunctionComponent, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Links = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Links</h2>
      <div className="flex items-center gap-2">
        <LinkImage
          href="https://www.linkedin.com/in/armand-bernard-8605b8b1/"
          alt="LinkedIn profile"
          src="./linked-in.svg"
        />
        <LinkImage
          href="https://github.com/ArmandBernard"
          alt="GitHub Profile"
          src={theme === "dark" ? "./github-white.svg" : "./github.svg"}
        />
        <LinkImage
          href="https://stackoverflow.com/users/5706830/armand-bernard"
          alt="Stack Overflow Profile"
          src="./stack-overflow.svg"
        />
        <a
          href="mailto:armandbernard1995@gmail.com"
          className="flex items-center h-16 w-16"
          aria-label="Send Email"
        >
          <span className="material-symbols-outlined text-[4rem] leading-none text-text-color">
            alternate_email
          </span>
        </a>
      </div>
    </div>
  );
};

const LinkImage: FunctionComponent<{
  href: string;
  alt: string;
  src: string;
}> = ({ href, alt, src }) => (
  <a href={href} className="flex items-center justify-center h-16 w-16">
    <img alt={alt} src={src} />
  </a>
);
