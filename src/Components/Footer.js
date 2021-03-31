import React, { Component } from "react";
class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul>
              <li className="disappear_in_Desktop">
                Modified with love by Mrinmay
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
        <svg
          className="disappear_SVG_WAVE_in_Mobile"
          style={{
            margin: "0px",
            minHeight: "100%",
            minWidth: "100%",
            position: "absolute",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <text x="200" y="280" style={{ fontSize: "30px" }}>
            Made with love by Mrinmay
          </text>
          <path
            style={{ position: "absolute", bottom: "0px" }}
            fill="#273036"
            fill-opacity="0.8"
            d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,69.3C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </footer>
    );
  }
}

export default Footer;
