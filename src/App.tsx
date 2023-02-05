import "./App.css";
import { Experience } from "./Experience";

function App() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl flex flex-col px-8 flex-grow">
        <h1 className="self-center">Armand's Web CV</h1>
        <h2>Summary</h2>
        <Experience />
        <h2>Education</h2>
      </div>
    </div>
  );
}

export default App;
