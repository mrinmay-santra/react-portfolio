import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      // var occupation = this.props.data.occupation;
      // var description = this.props.data.description;
      // var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a target="_blank" rel="noopener noreferrer" href={network.url}>
              <i style={{ fontSize: "35px" }} className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a
                style={{ fontSize: "1.5rem" }}
                className="smoothscroll"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "1.5rem" }}
                className="smoothscroll"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "1.5rem" }}
                className="smoothscroll"
                href="#resume"
              >
                Resume
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li> */}
            {/* <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li> */}
            <li>
              <a
                style={{ fontSize: "1.5rem" }}
                className="smoothscroll"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3 style={{ fontSize: "25px" }}>
              I'm a full stack web developer currently working in MERN stack.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
