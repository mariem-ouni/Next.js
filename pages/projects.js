// pages/projects.js

import Footer from "./Footer";
import Navbar from "./Navbar";

//import styles from '../styles/Projects.module.css';
{/*import ProjectCard from './projectCard';

export default function Projects() {
  return (
   // <div className={styles.container}>
   <div>
      <h1>Mes Projets</h1>
      <ProjectCard
        title="Projet 1"
        image="/images/project1.jpg"
        description="Description du projet 1."
      />
      <ProjectCard
        title="Projet 2"
        image="/images/project2.jpg"
        description="Description du projet 2."
      />
    </div>
  );*/}
  const Projects = () => {
    const projects = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description for project 1',
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Description for project 2',
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'Description for project 3',
      },
    ];
  
    return (
      <div>
        <Navbar/>
        <h1>My Projects</h1>
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default Projects;
  