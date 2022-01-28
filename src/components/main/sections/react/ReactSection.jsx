import ProjectInfo from '../ProjectInfo';
import { projectsInfo } from '../../../../mocks/projects-info';

function ReactSection() {
  const { react: projects } = projectsInfo();
  return (
    <div className="projects-container">
      <h2>Proyectos en React</h2>
      <div className="projects-grid projects-react">
        {projects.map((project) => (
          <ProjectInfo key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default ReactSection;
