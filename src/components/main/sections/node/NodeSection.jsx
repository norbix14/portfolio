import { projectsInfo } from '../../../../mocks/projects-info';
import ProjectInfo from '../ProjectInfo';

function NodeSection() {
  const { node: projects } = projectsInfo();
  return (
    <div className="projects-container">
      <h2>Proyectos en Node</h2>
      <div className="projects-grid projects-node">
        {projects.map((project) => (
          <ProjectInfo key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default NodeSection;
