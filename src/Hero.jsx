import Typewriter from "./Typewriter";
import { Element } from "react-scroll";

export default function Hero() {
  return (
    <section id="hero" className="hero ">
      {/* Left Side - Text */}
      <div className="hero-text">
      <h1>Hi, I'm Kirtivardhan 👋</h1>
      
      <p>
        A passionate developer building modern <br></br>experiences with{" "}
      <Typewriter words={["Machine Learning", "NLP", "Salesforce", "C++", "React.js", "Node.js"]} />
      </p>
        <a href="#about" class="button"><b>Learn More</b></a>
      </div>

      {/* Right Side - Image */}
      <div className="hero-image">
      <a href="https://www.linkedin.com/in/kirtivardhansingh/" target="blank"> <img
          src="/src/assets/20241124_2018223234.jpg"
          alt="Kirtivardhan Singh"
        /></a>
      </div>
    </section>
  );
}
