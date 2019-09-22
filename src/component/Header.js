import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div
            className="nav-wrapper"
            style={{
              background: "linear-gradient(45deg, #f12711, #f5af19)"
            }}
          >
            <a href="#" class="brand-logo center">
              Gatorl&#8734;p
            </a>
            <ul id="nav-mobile" class="left hide-on-med-and-down"></ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
