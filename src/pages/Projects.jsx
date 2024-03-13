import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import schoobees from "../assets/projects/schoobees.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoobees}
              isBlog={true}
              title="SchooBees"
              description="This project is a comprehensive web application for managing various aspects of an educational institution. It includes features for student management, parent management, attendance management, exam management, fee management, report generation, and communication. Overall, this project aims to streamline and automate various administrative tasks in an educational institution. It offers a user-friendly interface for managing student information, tracking attendance, recording exam results, managing fees, generating reports, and facilitating communication with parents and students."
              demoLink="https://schoobees.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Treyas Info Tech Portfolio Project"
              description="As part of my web development journey, I undertook a significant project for Treyas Info Tech, an educational institution offering a diverse range of courses. In this project, I developed a dynamic website using HTML, CSS, and JavaScript for the frontend, while the backend was powered by Python and Django, with PostgreSQL as the database.Courses and Interests Form: Implemented an intuitive form allowing users to express their interests and preferences for the various courses offered by Treyas Info Tech."
              ghLink="https://www.treyas.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Military Edge Devices Integration"
              description="As a collaborative effort within a dynamic freelancing team, I contributed to a project focused on integrating data from edge devices within the military into cloud computing environments. The primary goal was to leverage machine learning to enhance the processing, analysis, and utilization of critical data from these edge devices.This freelance project not only honed my machine learning skills but also showcased my ability to contribute effectively to a team-based, real-world application. Explore the GitHub repository to delve into the technical details and see firsthand how this integration of military edge devices is advancing the capabilities of cloud computing in a secure and efficient manner."
              ghLink="https://github.com/SDC-INDIA/ML-project"/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Internshala 2.0"
              description="Internshala 2.0 is a personal project I conceptualized and developed to facilitate seamless connections between students seeking internships and recruiters looking for talented individuals. Built using HTML, CSS, Python, Django, and a NoSQL database, this project aims to streamline the internship search and recruitment process.."
              ghLink="https://github.com/nannapravalika/Internshala20"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Vendor-Customer Dashboard Project"
              description="In the pursuit of enhancing operational efficiency for Meta Source, I conceptualized and developed a sophisticated dashboard that acts as a central hub for connecting vendors and customers within the raw materials supply chain. This personalized project was crafted using HTML, CSS, Python, Django, and leveraged a robust database system for seamless data management."
              ghLink="https://github.com/Metasource-Dev/Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Protfolio"
              description="In crafting my personal portfolio, I seamlessly blended cutting-edge technologies and design aesthetics to create a dynamic showcase of my skills. This multifaceted project incorporates React.js and Node.js for a robust frontend and backend, respectively, while also featuring an engaging and visually appealing design. Additionally, I integrated the powerful functionality of EmailJS to enhance the communication aspect of the portfolio."
              ghLink="https://nannapravalika-portfolio.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
