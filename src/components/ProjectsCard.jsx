import LanguageButton from './LanguageButton';
import './ProjectsCard.css';

export default function ProjectsCard({ project }) {
  return (
    <article className="ProjectsCard">
      <div className="ProjectsCard__media">
        <iframe src={project.videoUrl}></iframe>
      </div>
      <div className="ProjectsCard__text">
        <h2>{project.title}</h2>
        <div>
          {project.languages.map((language, i) => {
            return <LanguageButton key={i}>{language}</LanguageButton>;
          })}
        </div>
        <p>{project.description}</p>
        <p>Live Demo | GitHub</p>
      </div>
    </article>
  );
}
