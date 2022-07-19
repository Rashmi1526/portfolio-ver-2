import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rashmi Singh </span>
            from <span className="purple"> Ghaziabad, India.</span>
            <br />I am a pre-final year student pursuing B.Tech from ABES Engineering College in Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading self-help books
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Speak in such a way that others love to listen to you.Listen in such a way that others love to speak to you!"{" "}
          </p>
          <footer className="blockquote-footer">Rashmi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
