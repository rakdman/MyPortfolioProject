import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="a">
      <div className="a-bg"></div>
      <div className="a-left">
        <div className="a-left-card-bg">
          <div className="a-left-card">
            <h1 className="a-title">About Me</h1>

            <div className="a-detail">
              <p className="a-desc">
                I have professional experience in Java and worked on the
                development of Java-based component for JBPM based Debit
                Management system used in telecom domain.
              </p>
              <p className="a-desc">
                Also, I have done requirement gathering, high-level solutioning,
                business workflow configuration, PL/SQL report generation with
                Linux/Unix scripts and manual testing.
              </p>
              <p className="a-desc">
                I am currently studying in the 4th semester of “MSc Global
                Software Development” at Hochschule Fulda, Germany. All my
                courses are complete with 1.7 average German grading and now
                left with internship and thesis. I have done two projects using
                Java Spring boot where developed REST APIs using tools such as
                IntelliJ Idea and Eclipse. Also, I know about Spring MVC, Spring
                Batch, Spring Security, Hibernate, AWS, Docker, relational
                databases such as Oracle and MYSQL.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="a-right">
        <div className="a-right-card-bg">
          <div className="a-right-card">
            <p className="a-card-item">
              <h1 className="a-title">Professional Experience</h1>
              <p>
                Ericsson India Global Services
                <p> Noida, India From: Feb 2020 - Mar 2021 </p>
              </p>
              <p>Key responsibilities:</p>
              <ul>
                <li>
                  Developed customized java-based components for in house
                  telecom software product
                </li>
                <li>
                  Developed Java-based (JBPM) debt collection components-
                  actions, decisions
                </li>
                <li>Worked on APIs development using Spring boot </li>
                <li>Programmed Spring batch for bulk processing of data</li>
                <li>
                  Telecom Debt collection (JBPM based product) requirement
                  gathering through workshops
                </li>
                <li>
                  Solution HLD, LLD preparation, Configurations of JBPM
                  workflows and Testing
                </li>
                <li>
                  Report development using PL/SQL and Linux scripts Technologies
                  Used: Java, Hibernate, Java Spring boot, Spring Batch, Oracle,
                  JIRA, Maven, Confluence, IntelliJ
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
