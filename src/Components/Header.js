import React, { Component } from "react";
import { motion } from "framer-motion";
class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      // var occupation = this.props.data.occupation;
      // var description = this.props.data.description;
      // var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <motion.li
            key={network.name}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            <a target="_blank" rel="noopener noreferrer" href={network.url}>
              <i style={{ fontSize: "35px" }} className={network.className}></i>
            </a>
          </motion.li>
        );
      });
    }

    return (
      <header style={{ minHeight: "100vh" }} id="home">
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
            <li>
              <a
                style={{ fontSize: "1.5rem" }}
                className="smoothscroll"
                href="#project"
              >
                Projects
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
            <h3 style={{ fontSize: "25px", color: "white" }}>
              I'm a full stack web developer currently working in MERN stack.
            </h3>
            <hr />
            <ul whileHover={{ scale: 1.25 }} className="social">
              {networks}
            </ul>
          </div>
        </div>

        {/* Scroll down icon */}

        <p className="scrolldown">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="smoothscroll"
            href="#about"
          >
            <i className="icon-down-circle"></i>
          </motion.a>
        </p>
      </header>
    );
  }
}

export default Header;
