import "./App.css";
import { Experience } from "./Experience";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col">
        <h1 className="self-center">Armand's Web CV</h1>
        <h2>Summary</h2>
        <Experience />
        <h2>Education</h2>
      </div>
    </div>
  );
}

export default App;
