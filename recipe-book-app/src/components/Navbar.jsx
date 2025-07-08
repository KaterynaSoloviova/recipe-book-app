import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header>
      <img src={logo} alt="app logo" />
      <h1>Recipe Book</h1>
    </header>
  );
}

export default Navbar;
