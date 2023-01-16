import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Panchal </span>
            from <span className="purple"> India.</span>
            <br />I am a web developer who foud their foot in technology.
            Basically I love programming.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess and Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Technical Writting
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rahul Panchal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
