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
  from <span className="purple">Varanasi, India.</span>
  <br />
  I work at <span className="purple">Cisco</span> as a{" "}
  <span className="purple">Technical Consulting Engineer</span> in the{" "}
  <span className="purple">VPN TAC</span>, specializing in network security and connectivity.
  <br />
  <br />
  Apart from coding and network security, some other activities that I love to do!
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
