import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import forensic from "../../Assets/Projects/forensic.png";
import emotion from "../../Assets/Projects/emotion.png";
import event from "../../Assets/Projects/event.png";
import chms from "../../Assets/Projects/CHMS.png";
import mentalHealth from "../../Assets/Projects/mental-health.png";
import bookish from "../../Assets/Projects/bookish.png";

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
              imgPath={chms}
              isBlog={false}
              title="Centralized Hospital Management System"
              description="Developed an hospital management system with multiple dashboards for various departments for digitization of
hospital operations. Simulates effective communication between various departments, and ensure smooth and
efficient operation. Tools Used: MERN Stack"
              ghLink="https://github.com/sameeksha-mp19/Centralized-hospital-management-system.git"
              demoLink="https://youtu.be/aGXMrB_HEHM?si=b1ILxKvdpX0t--dS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookish}
              isBlog={false}
              title="Bookish"
              description="Bookish is an E-commerce website to buy books. Contains features like adding to cart, viewing total bill, admin
dashboard provides features like adding a new book and changing price.
Tools Used: PHP, CSS, JavaScript"
              ghLink="https://github.com/Sameeksha-mp/Bookish.git"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="College Venue and Event Management System"
              description="Developed a platform to manage events and venues in college premises. It helps in viewing and booking of
venues, obtaining permission from various authorities, and also in registering for events.
Tools Used: React, NodeJS, PostgreSQL"
              ghLink="https://github.com/Sameeksha-mp/sahyadri-college-venue-booking.git"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forensic}
              isBlog={false}
              title="Forensic Evidence Management"
              description="Provides a platform to store and manage all forensic evidences. It has various roles with different permissions and functionalities. Tools Used : JavaScript, PHP, CSS"
              ghLink="https://github.com/sameeksha-mp19/Forensic-evidence-management-system.git"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentalHealth}
              isBlog={false}
              title="Mental Health Support"
              description="A platform to provide mental health support which has features like AI chatbot assistant, browse mental health education resources, and partcipate in daily challenges to maintain streak."
              ghLink="https://github.com/sameeksha-mp19/mental-health-support.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/sameeksha-mp19/Facial-emotion-detector.git"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
