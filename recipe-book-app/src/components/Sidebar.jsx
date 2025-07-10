import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
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
