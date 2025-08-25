import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiLinux,
  SiVercel,
} from "react-icons/si";
import { FaShieldAlt, FaProjectDiagram, FaNetworkWired } from "react-icons/fa"; 

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
        <OverlayTrigger placement="top" overlay={renderTooltip("Vercel Deployment")}>
          <span><SiVercel /></span>
        </OverlayTrigger>
      </Col>

      {/* New Skills in Progress */}
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Cisco ISE (Identity Services Engine)")}>
          <span><FaShieldAlt /></span>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("BGP (Border Gateway Protocol)")}>
          <span><FaProjectDiagram /></span>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Firewall Security")}>
          <span><FaNetworkWired /></span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
