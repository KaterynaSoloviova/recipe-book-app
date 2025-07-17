import { NavLink } from "react-router-dom";

function Sidebar(props) {
  return (
    <aside className={props.menuOpen ? "open" : ""}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
