import { FunctionComponent } from "react";
import baseUrl from "../../../baseUrl";

export const Links = () => {
  return (
    <div>
      <h2 className="my-2">Links</h2>
      <div className="flex items-center gap-2">
        <LinkImage
          href="https://www.linkedin.com/in/armand-bernard-8605b8b1/"
          alt="LinkedIn profile"
          src="/linked-in.svg"
        />
        <LinkImage
          className="dark:hidden print:dark:flex"
          href="https://github.com/ArmandBernard"
          alt="GitHub Profile"
          src="/github.svg"
        />
        <LinkImage
          className="hidden dark:flex print:dark:hidden"
          href="https://github.com/ArmandBernard"
          alt="GitHub Profile"
          src="/github-white.svg"
        />
        <LinkImage
          href="https://stackoverflow.com/users/5706830/armand-bernard"
          alt="Stack Overflow Profile"
          src="/stack-overflow.svg"
        />
        <a
          href="mailto:armandbernard1995@gmail.com"
          className="flex items-center h-16 w-16 decoration-none no-underline"
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
  className?: string;
}> = ({ className, href, alt, src }) => (
  <a
    href={href}
    className={`flex items-center justify-center h-16 w-16 ${className}`}
  >
    <img alt={alt} src={`${baseUrl}${src}`} />
  </a>
);
