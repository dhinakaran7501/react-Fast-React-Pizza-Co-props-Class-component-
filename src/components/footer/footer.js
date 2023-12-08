import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    let currentHour = new Date().getHours();
    let openHour = 12;
    let closingHour = 22;
    return currentHour >= openHour && currentHour <= closingHour ? (
      <div>
        <div className="footer-content">
          <p>
            We are happy to welcome you between {openHour}:00 PM and{" "}
            {closingHour}
            :00 PM
          </p>
        </div>
        <div className="footer-bar"></div>
      </div>
    ) : (
      <div>
        <div className="footer-content">
          <p>
            The Shop has closed at {closingHour}:00 PM. It will Open at{" "}
            {openHour}:00 PM.
          </p>
        </div>
        <div className="footer-bar"></div>
      </div>
    );
  }
}

export default Footer;
