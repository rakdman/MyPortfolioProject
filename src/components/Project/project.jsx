import React from "react";
import "./project.css";

export default function project() {
  return (
    <div className="a">
      <div className="a-right">
        <div className="a-right-card-bg">
          <div className="a-right-card">
            <p className="a-card-item">
              <h1 className="a-title">Project</h1>
              <p>
                Fitter - Mobile application to promote health and fitness
                <p>From: Oct 2021 - Feb 2022 </p>
              </p>
              <p>Key responsibilities:</p>
              <ul>
                <li>RESTful API development</li>
                <li>Utilized MYSQL databases for persistence of data</li>
                <li>
                  Used basic spring security to secure the end points and spring
                  batch job for data loading
                </li>
              </ul>
              <text>
                <br />
                <br />
                <br />
                <br />
              </text>
              <p>
                Technologies Used: Java Spring boot, MYSQL, GitLab, JIRA,
                Confluence
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="a-right">
        <div className="a-right-card-bg">
          <div className="a-right-card">
            <p className="a-card-item">
              <h1 className="a-title">Project</h1>
              <p>
                Debt Notification System
                <p>From: Apr 2021 - Aug 2021</p>
              </p>
              <p>Key responsibilities:</p>
              <ul>
                <li>
                  RESTful API development with token-based security
                  implementation and NoSQL database for persistence
                </li>
                <li>
                  React components for better user interface and delivering a
                  richer user experience
                </li>
                <li>Material-UI utilized to beautify the user interface</li>
                <li>Deployment on cloud AWS EC2</li>
              </ul>
              <br />
              <p>
                Technologies Used: NodeJS, Express, Material-UI, ReactJS, React
                hooks, Git, MongoDB, Restful web- services, AWS
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="a-bg"></div>
    </div>
  );
}
