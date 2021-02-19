import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
// import Testimonials from "./Components/Testimonials";
// import Portfolio from "./Components/Portfolio";
// ReactGA.event({
//   category: "User",
//   action: "Sent message",
// });

const TRACKING_ID = "G-XJTFJVZQV6"; // YOUR_OWN_TRACKING_ID

export default function App() {
  useEffect(function () {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview("/");
    getResumeData();
  }, []);
  const [resumeData, setresumeData] = useState({});

  function getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setresumeData(data);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
      {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
      {/* <h2 style={{ color: "white", marginLeft: "40vw" }}>Contact Me</h2> */}

      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}
