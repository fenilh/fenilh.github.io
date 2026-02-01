import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Limbachiya Fenil</span>{" "}
            from <span className="purple">Ahmedabad, India</span>.
            <br />
            I’m  worked as a{" "}
            <span className="purple">Frontend Developer</span> but wants to became{" "}
            <span className="purple">Full stack Developer</span>.
            <br />I hold a Degree in B.Tech in{" "}
            <span className="purple">Computer Engineering</span> from{" "}
            <span className="purple">SSIT, Gandhinagar</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing And Reading ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fenil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
