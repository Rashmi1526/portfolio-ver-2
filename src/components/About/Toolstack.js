import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  const renderTooltip = (msg) => (
    <Tooltip id="button-tooltip">
      {msg}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Linux")}>
          <span><SiLinux /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Visual Studio Code")}>
          <span><SiVisualstudiocode /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Postman API Tool")}>
          <span><SiPostman /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Vercel Deployment")}>
          <span><SiVercel /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Heroku Deployment")}>
          <span><SiHeroku /></span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
