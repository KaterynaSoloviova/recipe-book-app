import logo from "../assets/logo.png";

function Navbar(props) {
  return (
    <header>
      <div className="hamburguer" onClick={props.toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src={logo} alt="app logo" />
      <h1>Recipe Book</h1>
    </header>
  );
}

export default Navbar;
