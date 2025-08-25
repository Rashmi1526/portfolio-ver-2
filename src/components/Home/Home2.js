import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
//import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I first got into front-end development a few years ago because it gave me a way to visualize progress and results quickly and literally, which made programming feel exciting and tangible. What started as a trial to see if I’d enjoy coding turned into something I loved, and I’ve kept at it ever since. I’m fluent in classics like C++, JavaScript, and Python, and I enjoy building new web technologies and products. 🤷‍♂️
              <br />
              <br />During my internship at Cisco, I developed a strong interest in computer networking, and today I specialize in <i>
                <b className="purple"> VPNs, DNS, TCP/IP, and SSH </b>
              </i> . I’m currently preparing for the CCIE certification, further deepening my expertise in network security and infrastructure.
              

              <br />
              <br />
             
              In my free time, I am catching up on my <b className="purple">Front-end Skills</b> and exploring
<i>
  <b className="purple"> Modern Frameworks</b>
</i>
&nbsp; like&nbsp;
<i>
  <b className="purple">Next.js</b>
</i>
&nbsp; along with <i><b className="purple">Node.js</b></i> to stay connected to the creative side of development.
              
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rashmi1526"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mobile.twitter.com/RashmiSingh_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rashmi-singh-5610b31b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
