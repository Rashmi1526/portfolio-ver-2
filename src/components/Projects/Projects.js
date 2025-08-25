import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaFileAlt, FaVideo, FaShieldAlt } from "react-icons/fa";

// College project images
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
        {/* ================== Cisco Knowledge Base ================== */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1
            className="project-heading"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
          >
            <FaShieldAlt className="purple" size={40} />
            Cisco <strong className="purple">Knowledge Contributions</strong>
          </h1>
          <p style={{ color: "white" }}>
            Articles and videos I have authored and contributed at Cisco.
          </p>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Cisco Articles */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={<FaFileAlt size={60} color="#6c63ff" />}
              title="Configure Multiple Tunnel Groups with SAML on ASA"
              description="Step-by-step guide on configuring multiple tunnel groups with SAML for ASA."
              link="https://www.cisco.com/c/en/us/support/docs/security/secure-client-5/222916-configure-multiple-tunnel-groups-with-sa.html"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={<FaFileAlt size={60} color="#6c63ff" />}
              title="Configure Route Based VPN with Static Route on FTD (FDM)"
              description="Configuration guide for setting up a route-based VPN with a static route on FTD managed by FDM."
              link="https://www.cisco.com/c/en/us/support/docs/security-vpn/internet-security-association-key-management-protocol-isakmp/223198-configure-route-based-vpn-with-static.html"
            />
          </Col>

          {/* Cisco Videos */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={<FaVideo size={60} color="#6c63ff" />}
              title="How to Configure Local LAN Access in Cisco Secure Client (AnyConnect)"
              description="Step-by-step video guide for configuring local LAN access in Cisco Secure Client."
              link="https://www.youtube.com/watch?v=t00SFi_IwwA"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={<FaVideo size={60} color="#6c63ff" />}
              title="Install Certificate on FTD Managed by FDM"
              description="Video guide on how to install a certificate on FTD managed by FDM."
              link="https://video.cisco.com/detail/video/6370020067112"
            />
          </Col>
        </Row>

        {/* ================== College Projects ================== */}
        <h1 className="project-heading">
          My <strong className="purple">College Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few projects I built during my academic journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelmap}
              title="Travel-Map"
              description="A single page application built with MERN Stack from scratch (MongoDB + Mongoose, Express, React and NodeJs). Users can pin their favourite locations on the map, rate them, and share reviews with others."
              link="https://travel-map-review.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="Portfolio Website"
              description="My portfolio built with HTML, CSS, JavaScript and Bootstrap."
              link="https://rashmi1526.github.io/portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Weather-App"
              description="A weather app made with React and OpenWeatherMap API which shows a 5-day forecast along with an hourly forecast."
              link="https://react-weatherapp-openapi.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="To-do List"
              description="A CRUD todo application where you can create, read, update and delete items. Uses localStorage for persistence."
              link="https://rashmi1526.github.io/todo-list/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              title="Notes App"
              description="A simple CRUD notes web app. Users can create, read, update and delete notes. Supports Markdown."
              link="https://rashmi1526.github.io/notes-web/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reader}
              title="The Reader's Desk"
              description="A website to explore your inner reader."
              link="https://rashmi1526.github.io/readersdesk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomodoro}
              title="Pomodoro-Timer"
              description="A Pomodoro timer app using React with features like keyboard shortcuts, HTML5 notifications, and audio alerts."
              link="https://rashmi1526.github.io/pomodoro-timer/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
