import React from "react";
import "./intro.css";
import me from "../../images/me.png";

export default function intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Rakesh Kumar</h1>
          <div className="i-title-wrapper">
            <div className="i-title-item">Java</div>
            <div className="i-title-item">Spring Boot</div>
            <div className="i-title-item">Hibernate</div>
            <div className="i-title-item">SQL</div>
            <div className="i-title-item">Git</div>
            <div className="i-title-item">Docker</div>
          </div>
          {/* <p className="i-desc">
            Coding enthusiast willing to learn new technologies, with
            professional knowledge of Java, Spring Boot, Database and Linux.
          </p> */}
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-image" />
      </div>
    </div>
  );
}
