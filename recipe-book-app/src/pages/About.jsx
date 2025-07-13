import { Link } from "react-router-dom";
function About() {
  return (
    <div className="recipe-overview">
      <h1>About Us</h1>
      <div className="section">
        <h2 className="section-title">The "Recipe Book" Project</h2>
        <p className="recipe-description">
          For our Mini-project, we decided to pick the "Recipe book". We chose
          this project because we arrived to the conclusion that it opened us
          for the possibility of adding many features to the page and learn on
          the way.
        </p>
        <p className="recipe-description">
          Our main goals were showing a page with all the recipes, and be able
          to click on one to see its full description. Besides that, the user
          would have the possibility to delete or add a new recipe.
        </p>
        <p className="recipe-description">
          This project has helped us develop our communication skills,
          problem-solving and planning strategies.
        </p>
      </div>
      <hr />
      <div className="section">
        <h2>The Developers</h2>
        <h3>Kateryna</h3>
        <div className="overview-grid">
          <div className="key">
            <a href="https://github.com/KaterynaSoloviova" target="_blank">
              Github
            </a>
          </div>
          <div className="value">
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <h3>Andres</h3>
        <div className="overview-grid">
          <div className="key">
            <a href="https://github.com/Navitat" target="_blank">
              Github
            </a>
          </div>
          <div className="value">
            <a
              href="https://www.linkedin.com/in/andres-felipe-londo%C3%B1o-martinez-a14515203/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
