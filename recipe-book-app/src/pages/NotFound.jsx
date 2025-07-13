import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="recipe-overview">
      <h1>Page not found</h1>
      <div className="section">
        <p className="recipe-description">
          Uo oh, we can't seem to find the page you're looking for. <br />
          Try going back to the home page.
        </p>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
