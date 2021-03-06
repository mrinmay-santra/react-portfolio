import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const Contact = ({ data }) => {
  // const [url, setUrl] = useState(
  //   "mailto:test@example.com?subject=subject&body=body"
  // );
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact">
      {/* Style for contact me heading from Left */}
      <Fade right>
        <div
          style={{
            fontSize: "2.6em",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
            position: "relative",
            bottom: "20px",
          }}
        >
          CONTACT ME
        </div>
      </Fade>

      {/* <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div> */}

      <div className="row">
        <div className="eight columns">
          <Slide right>
            <form
              id="contactForm"
              name="contactForm"
              action="https://formcarry.com/s/jA_-4P1zbq"
              method="POST"
              // acceptCcharset="UTF-8"
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    value={name}
                    type="text"
                    // defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    value={email}
                    type="email"
                    // defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    value={subject}
                    type="text"
                    // defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    cols="30"
                    rows="10"
                    id="contactMessage"
                    required
                    name="contactMessage"
                  ></textarea>
                </div>
                {/* Use this to prevent spam */}
                <input type="hidden" name="_gotcha"></input>
                <Slide left>
                  <div>
                    {/* From bottom */}

                    <button
                      type="submit"
                      //   onClick={handleClick}
                      className="submit"
                    >
                      Submit
                    </button>
                    {/* <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span> */}
                  </div>
                </Slide>
              </fieldset>
            </form>
          </Slide>
          <div id="message-warning"> Error!!</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        {/* <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Email</h4>
            <p className="address">
              {data?.name}
              <br />
              {data?.address.street} <br />
              {data?.address.city}, {data?.address.state} {data?.address.zip}
              <br />
              <span>{data?.email}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside> */}
      </div>
    </section>
  );
};

export default Contact;
