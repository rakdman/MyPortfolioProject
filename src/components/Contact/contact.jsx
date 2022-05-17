import React from "react";
import "./contact.css";
import mobile from "../../images/mobile.svg";
import address from "../../images/address.svg";
import email from "../../images/email.svg";

export default function contact() {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-info-title">Let's disucss about the project</h1>
          <div className="c-info-item">
            <img src={mobile} alt="" className="c-icon" />
            +49 17668405166
          </div>
          <div className="c-info-item">
            <img src={email} alt="" className="c-icon" />
            rakdman@gmail.com
          </div>
          <div className="c-info-item">
            <img src={address} alt="" className="c-icon" />
            Leipziger Straße, Fulda, Germany
          </div>
        </div>
        <div className="c-right">
          <div className="c-right-info">
            Do you have any innovative and challenging task as hand? I am
            looking for internship or working student or full time junior
            developer role.
          </div>
          <div className="c-form-wrapper">
            <form className="c-form">
              <input
                className="c-form-item"
                type="text"
                name="username"
                placeholder="Full Name"
              />
              <input
                className="c-form-item"
                type="email"
                name="email"
                placeholder="Email"
              />
              <textarea
                className="c-form-item"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Write your message here"
              ></textarea>
              <div className="c-form-btn-wrapper">
                <button className="c-form-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
