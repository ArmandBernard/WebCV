import { AboutMe } from "./AboutMe";
import "./App.css";
import { Education } from "./Education";
import { Experience } from "./Experience";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl flex flex-col px-4 flex-grow gap-4 mb-8">
        <h1 className="self-center m-4">Armand Bernard&apos;s Web CV</h1>
        <AboutMe />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;
