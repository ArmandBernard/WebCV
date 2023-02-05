import { AboutMe } from "./AboutMe";
import "./App.css";
import { Experience } from "./Experience";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl flex flex-col px-4 flex-grow gap-4">
        <h1 className="self-center m-4">Armand Bernard's Web CV</h1>
        <AboutMe />
        <Experience />
        <h2>Education</h2>
      </div>
    </div>
  );
}

export default App;
