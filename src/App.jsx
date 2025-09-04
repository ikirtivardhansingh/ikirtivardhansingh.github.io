import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <Hero />
      <About/>
      <Projects />
    </div>
  );
}

export default App;
