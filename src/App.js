import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Loader from "react-loader-spinner";

// import Testimonials from "./Components/Testimonials";
// import Portfolio from "./Components/Portfolio";

export default function App() {
  const [resumeData, setresumeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    getResumeData();
  }, []);

  function getResumeData() {
    setIsLoading(true);
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setresumeData(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  if (isLoading) {
    return (
      <Loader
        style={{ marginTop: "45vh", marginLeft: "48vw" }}
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
      />
    );
  }
  return (
    <div>
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
