import logo from "../assets/github-mark-white.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="github logo" />
      <a
        href="https://github.com/KaterynaSoloviova/recipe-book-app"
        target="_blank"
      >
        Visit the Github repository
      </a>
    </footer>
  );
}

export default Footer;
