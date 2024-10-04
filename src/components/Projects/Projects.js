import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import grab from "../../Assets/Projects/grab.jpg"
import ament from "../../Assets/Projects/ament.png"
import eza from "../../Assets/Projects/eza.png"
import genzura from "../../Assets/Projects/genzura.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few professional experiences I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Backend Developer - Grab and Go"
              description="Currently working on the backend for a French press ordering app based in Kigali. Responsible for designing and managing server-side components to ensure smooth and scalable performance."
              date="08/2023 - Present"
              imgPath={grab}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Backend Developer - Genzura"
              description="Worked with Genzura, a governmental company based in Kigali. Developed and maintained backend systems for various internal applications to streamline government operations."
              date="02/2022 - 12/2020"
              imgPath={genzura}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Backend Developer - A-ment"
              description="Contributed to a school group project in Nyabihu as the backend developer. Focused on building a solid backend architecture for seamless integration with frontend and mobile interfaces."
              date="12/2022 - 06/2023"
              imgPath={ament}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Frontend Developer - Eza"
              description="Developed the frontend for Eza, an agriculture-focused application in Kigali. Implemented user-friendly interfaces for farmers to easily manage and monitor agricultural data."
              date="10/2022 - 03/2023"
              imgPath={eza}

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
