import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer
          className="footer-copyright deep-orange"
          style={{
            background: "linear-gradient(45deg, #f12711, #f5af19)"
          }}
        >
          <div className="container" style={{ padding: ".1%" }}>
            <h6 className="white-text">© 2019 Copyright Gatorloop</h6>
          </div>
        </footer>
      </div>
    );
  }
}
