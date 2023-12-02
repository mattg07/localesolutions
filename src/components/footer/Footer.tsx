import "./Footer.css";
import ft from "../../assets/ft.png";
export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="img-foot">
          <img src={ft}></img>
        </div>
        <div className="text-section">
          <div className="footer-info">
            <h4>Head Office</h4>

            <p> Suite 5, Level 2, 2 Grosvenor St, Bondi Junction NSW 2022</p>
          </div>
          <div className="footer-info">
            <h4>Email Contact</h4>
            <p>hello@localetravel.com.au</p>
          </div>
          <div className="footer-info">
            <h4>Contact</h4>
            <p>+1300 811 033 </p>
            <p>+61 7 3059 6130 (from outside Australia)</p>
          </div>
        </div>{" "}
        <div className="copyright">
          <p>Copyright © 2022 Locale Travel. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
