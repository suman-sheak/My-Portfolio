import styles from './ProjectsStyles.module.css';
import tomato from '../../assets/tomato.png';
import spotify from '../../assets/spotify.png';
import weather from '../../assets/weather.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={tomato}
          link=""
          h3="Tomato"
          p="Food Delivey App"
        />
        <ProjectCard
          src={spotify}
          link=""
          h3="spotify"
          p="Music App"
        />
        <ProjectCard
          src={weather}
          link=""
          h3="weather"
          p="Weather App"
        />

      </div>
    </section>
  );
}

export default Projects;
