import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Cart for Ecommerce Website"
              description="ReactJS project- Ecommerce website cart for an important website build with reactjs, matarial-UI and others, Have features which allows user for realtime actions on cart."
              ghLink="https://github.com/rrahulppanchal/react-app-ecommerce-cart.git"
              demoLink="https://tubular-donut-74e2cf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Notification and Pop-up bar for asset management Website"
              description="Made Notification and Pop-Up slider for asset management website which deal with crypto using JavaScript and other. Completed this task for satisfied Nigerian Client remotely."
              ghLink="#"
              demoLink="fp-asset.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Front End of Blog Website"
              description="ReactJS project- Blog website which let anyone write blog posts comment and react to them using ReactJS and SCSS and others. also working on Back-End where using NodeJS and mySQl."
              ghLink="https://github.com/rrahulppanchal/blog-frontend.git"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
