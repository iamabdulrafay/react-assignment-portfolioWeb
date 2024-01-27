import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import duo from "/portfolio web/src/assets/duo.jpg";
import portfolio from "/portfolio web/src/assets/portfolio.png";
import Movie from "/portfolio web/src/assets/movie.png";
import "./project.css";
const Projects = () => {
  const projects = [
    {
      link: "https://iamabdulrafay.github.io/duo2/",
      title: "duo web",
      img: duo,
    },
    {
      link: "https://iamabdulrafay.github.io/Web-Dev-Portfolio/",
      title: "portfolio",
      img: portfolio,
    },
    {
      link: "https://iamabdulrafay.github.io/my-movie-search-app/",
      title: "Movie Search",
      img: Movie,
    },

    // Add more project data as needed
  ];
  return (
    <div className="project ">
      <h1>My Works.</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={4}>
            {/* Set xs to 12 for full width on small screens, and md to 4 for 3 cards in a row on medium screens */}
            <ProjectCard
              link={project.link}
              title={project.title}
              img={project.img}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
