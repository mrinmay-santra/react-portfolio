import React, { Component } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import "./about.styles.css";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio_line1 = this.props.data.bio_line1;
      var bio_line2 = this.props.data.bio_line2;
      var bio_line3 = this.props.data.bio_line3;
      var bio_line4 = this.props.data.bio_line4;
      // var bio_array = bio.split("/");
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone = this.props.data.phone;
      // var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Mrinmay profilepic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <ol style={{ listStyle: "square", color: "#e7e6e1" }}>
              <li style={{ paddingRight: "60px", marginBottom: "30px" }}>
                {bio_line1}
              </li>
              <li style={{ paddingRight: "20px", marginBottom: "30px" }}>
                {bio_line2}
              </li>
              <li style={{ paddingRight: "20px", marginBottom: "30px" }}>
                {bio_line3}
              </li>
              <li style={{ paddingRight: "20px", marginBottom: "30px" }}>
                {bio_line4}
              </li>
            </ol>
            <div className="">
              <div className="columns download ">
                <p>
                  <a
                    href="https://drive.google.com/file/d/1leRTZQkeLDNnqJ2SGNyPTyYw0RZur9S-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    View Resume
                    <FaExternalLinkAlt style={{ marginLeft: "6px" }} />
                  </a>
                </p>
              </div>
              {/* Contact me button */}
              <div className="columns contact-btn ">
                <p>
                  <a
                    href="https://drive.google.com/file/d/1leRTZQkeLDNnqJ2SGNyPTyYw0RZur9S-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button smoothscroll"
                    href="#contact"
                  >
                    Contact Me
                    <FaPaperPlane style={{ marginLeft: "10px" }} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
