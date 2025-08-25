import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* If imgPath is a string, render as image. If it's a component, render it directly */}
      {typeof props.imgPath === "string" ? (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          {props.imgPath}
        </div>
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp; View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
