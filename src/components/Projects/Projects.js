 
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BK from "../../Assets/BK.jpg";
import EQ from "../../Assets/EQ.jpg";
 
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
        

          <Col md={4} className="project-card-view">
          <img src={BK} className="img-fluid" alt="card-img"/>
            <ProjectCard
              isBlog={false}
              title="Bakery Management System "
              description="Developed a comprehensive multi-branch bakery management system designed to streamline
day-to-day operations with centralized inventory, sales, and production management."
            
            />
          </Col>
          <Col md={4} className="project-card-view">
 <img src={EQ} className="img-fluid" alt="card-img"/>
            <ProjectCard
  
              isBlog={false}
              title="E-QMS "
              description="Ensured usability, scalability, and modular structure across all major quality management modules with
clean component architecture  and also easly accessable ."
                   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
