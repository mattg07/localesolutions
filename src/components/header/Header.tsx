import "./Header.css";
import "../../index.css"
import Navbar from "../navbar/Navbar";
import logo from "../../../public/assets/logo.png"

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <img className="logo" src={logo} alt="logo"></img>
        <h1 className="header-text">ICARUS</h1>
        <div className="cta">
          <h2 className="local-text">
            <span className="local-sp">LOCAL</span> <br></br>KNOWLEDGE<br></br>{" "}
            GLOBAL REACH
          </h2>
          <p className="cta-p" >
            {" "}
            "Embark on a seamless journey with our flight agency services.
            Elevate your travel experience with our expert team, dedicated to
            providing personalized solutions for your unique itinerary. From
            booking to boarding, we ensure a stress-free and enjoyable flight,
            offering a range of options to suit your preferences. Trust us to
            navigate the skies and turn your travel dreams into unforgettable
            adventures."{" "}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
