import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section id="hero" className="hero ">
      {/* Left Side - Text */}
      <div className="hero-text">
      <h1>Hi, I'm Kirtivardhan 👋</h1>
      
      <p>
        A passionate developer building modern experiences with{" "}
      <Typewriter words={["ML", "Salesforce", "JavaScript", "React", "Node.js"]} />
      </p>
        <a href="#about" class="button">Learn More</a>
      </div>

      {/* Right Side - Image */}
      <div className="hero-image">
        <img
          src="/src/assets/20241124_2018223234.jpg"
          alt="Kirtivardhan Singh"
        />
      </div>
    </section>
  );
}
