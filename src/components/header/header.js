import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render(props) {
    let { name, menu, content } = this.props;
    return (
      <div className="header">
        <div className="title">
          <p>{name}</p>
        </div>
        <div className="menu-title">
          <h4>{menu}</h4>
        </div>
        <div className="menu-content">
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default Header;
