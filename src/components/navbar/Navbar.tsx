import "./Navbar.css";
const Navbar = () => {

    return (
      <nav>
        <ul className="nav">
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#discover">Discover</a>
          </li>
          <li>
            <a href="#options">Options</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };

export default Navbar;
