import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiNodejs, DiReact, DiMongodb, DiGit, DiPython } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { FaNetworkWired, FaLock, FaShieldAlt, FaServer } from "react-icons/fa";

function Techstack() {
  const renderTooltip = (msg) => (
    <Tooltip id="button-tooltip">
      {msg}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("C++")}>
          <span><CgCPlusPlus /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("JavaScript")}>
          <span><DiJavascript1 /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Node.js")}>
          <span><DiNodejs /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("React.js")}>
          <span><DiReact /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("MongoDB")}>
          <span><DiMongodb /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Git / GitHub")}>
          <span><DiGit /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Firebase")}>
          <span><SiFirebase /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Python")}>
          <span><DiPython /></span>
        </OverlayTrigger>
      </Col>

      {/* Networking & Security Skills */}
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Cisco Secure Client / VPN")}>
          <span><FaShieldAlt /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("IPsec / SSH")}>
          <span><FaLock /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("DNS / TCP-IP")}>
          <span><FaServer /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Routing & Switching")}>
          <span><FaNetworkWired /></span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;
