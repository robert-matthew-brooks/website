import ProjectsCard from './ProjectsCard';
import Title from './Title';
import Button from './Button';
import projects from '../../public/projects.json';
import './Projects.css';

export default function Projects({ limit }) {
  return (
    <section id="Projects">
      <div id="Projects__inner" className="inner-section">
        <Title>{limit ? 'Recent Work' : 'All Projects'}</Title>

        {[...projects]
          .reverse()
          .slice(0, limit || projects.length)
          .map((project, i) => {
            return <ProjectsCard key={i} project={project} />;
          })}

        {limit && <Button link="/projects">More Projects</Button>}
      </div>
    </section>
  );
}
