import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">BUGINGO Elua</span>, a passionate software developer from 
            <span className="purple"> Kigali, Rwanda</span>.
            <br />
            I am currently working as a software developer at <strong>...</strong>, where I focus on building innovative solutions in the fintech space.
            <br />
            I completed my high school education at <strong>Rwanda Coding Academy</strong>, specializing in Software Programming and Embedded Systems.
            <br />
            <br />
            Beyond coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies and Innovation
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Blogs to Share Knowledge
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Experiencing Different Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always strive to create solutions that leave a meaningful impact on society."
          </p>
          <footer className="blockquote-footer">BUGINGO Elua</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
