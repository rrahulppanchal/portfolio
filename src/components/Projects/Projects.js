import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import videoPlayer from "../../Assets/Projects/videoPlayer.png";
import leaveApp from "../../Assets/Projects/leaveApp.png";
import eventWeb from "../../Assets/Projects/eventWeb.png";
import wordle from "../../Assets/Projects/wordle.png";

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

          {/* Wordle */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordle}
              isBlog={false}
              title="Wordle Clone - NY Times"
              description="JavaScript project- Clone of New York Times's Wordle game. Used Vanilla JavaScript and CSS for styling."
              ghLink="https://github.com/rrahulppanchal"
              demoLink="https://javascript-wordle.vercel.app/"
            />
          </Col>

          {/* eventweb */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventWeb}
              isBlog={false}
              title="Front End of Event Web"
              description="ReactJS project- Event booking and creating website using ReactJS and SCSS, react and others. also worked on Back-End using NodeJS and mySQl."
              ghLink="https://github.com/rrahulppanchal"
              demoLink="https://effulgent-otter-7e2ec7.netlify.app/"
            />
          </Col>

          {/* leave app*/}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaveApp}
              isBlog={false}
              title="Front End of Leave App"
              description="ReactJS project- Blog website which let employee of a particular company request to leaves and the management have to approve or decline it."
              ghLink="https://github.com/rrahulppanchal"
              demoLink="https://gleaming-crepe-0dd8ab.netlify.app/"
            />
          </Col>

          {/* video player */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoPlayer}
              isBlog={false}
              title="Video Player Project"
              description="JavaScript project- Clone of Youtube video player with same functionality. Used Vanilla JavaScript and CSS for styling."
              ghLink="https://github.com/rrahulppanchal"
              demoLink="https://video-player-javascript-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
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
