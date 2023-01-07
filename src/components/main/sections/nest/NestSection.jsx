import { projectsInfo } from '../../../../mocks/projects-info';
import ProjectInfo from '../ProjectInfo';

function NestSection() {
  const { nest: projects } = projectsInfo();
  return (
    <div className="projects-container">
      <h2>Proyectos en Nest</h2>
      <div className="projects-grid projects-nest">
        {projects.map((project) => (
          <ProjectInfo key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default NestSection;
