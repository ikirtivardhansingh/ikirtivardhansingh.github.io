
export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 1"
          />
          <h3>Cognitive Intelligent Agent Mapping Rover</h3>
          <p>
            A personal portfolio built with React showcasing my skills,
            projects, and experience.
          </p>
          <a href="https://github.com/ikirtivardhansingh/" target="_blank">
            View Code
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 2"
          />
          <h3>Sanskrit Devanagari Text Generator for Vedic Text</h3>
          <p>
            A simple yet powerful todo application with features like add,
            delete, and filter tasks.
          </p>
          <a href="https://github.com/ikirtivardhansingh/todo-app" target="_blank">
            View Code
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Project 3"
          />
          <h3>Weather App</h3>
          <p>
            A React app that fetches real-time weather data using an external
            API and displays it beautifully.
          </p>
          <a href="https://github.com/ikirtivardhansingh/weather-app" target="_blank">
            View Code
          </a>
        </div>
      </div>
    </section>
  );
}
