import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import notes from "../../Assets/Projectimg/notes-app.png";
import travelmap from "../../Assets/Projectimg/login.png";
import portfolio from "../../Assets/Projectimg/portfolio.png";
import todo from "../../Assets/Projectimg/todo-list.png";
import weather from "../../Assets/Projectimg/weather-app.png";
import reader from "../../Assets/Projectimg/readers-desk.png";
import pomodoro from "../../Assets/Projectimg/pomodoro-timer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelmap}
              isBlog={false}
              title="Travel-Map"
              description="A single page application built with MERN Stack from scratch (MongoDB + Mongoose, Express, React and NodeJs). In this application, you can pin your location and share your reviews with other users.
              The users can pin their favourite locations on the map to which the users can rate them, write some descripion about that place which other users can see."
              link="https://travel-map-review.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="My portfolio built with HTML,CSS,JavaScript and Bootstrap."
              link="https://rashmi1526.github.io/portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-App"
              description="This is a weather app made with react and openweathermap API which shows a 5-day forecast along with an
              hourly forecast."
              link="https://react-weatherapp-openapi.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-do List"
              description="A CRUD todo application.You are able to create, read, update and delete (CRUD) an item .
              localStorage is used."
              link="https://rashmi1526.github.io/todo-list/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes App"
              description="A simple CRUD notes web app.You are able to create, read, update and delete (CRUD) a note.
              Markdown has been used in this website."
              link="https://rashmi1526.github.io/notes-web/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reader}
              isBlog={false}
              title="The Reader's Desk"
              description="A website to explore your inner reader."
              link="https://rashmi1526.github.io/readersdesk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomodoro}
              isBlog={false}
              title="Pomodoro-Timer"
              description="A pomodoro timer app using react having features like Keyboard Shortcuts, HTML5 Notification and Audio Notification"
              link="https://rashmi1526.github.io/pomodoro-timer/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
