import { AboutMe } from "./components/AboutMe";
import { ThemeControllerWrapper } from "./components/client/ThemeControllerWrapper";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Links } from "./components/Links";

export default function Home() {
  return (
    <div>
      <ThemeControllerWrapper />
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
    </div>
  );
}
