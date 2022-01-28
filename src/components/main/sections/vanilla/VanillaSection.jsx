import { projectsInfo } from '../../../../mocks/projects-info';
import ProjectInfo from '../ProjectInfo';

function VanillaSection() {
  const { vanilla: projects } = projectsInfo();
  return (
    <div className="projects-container">
      <h2>Proyectos en HTML, CSS Y JavaScript Vanilla</h2>
      <div className=" projects-grid projects-vanilla">
        {projects.map((project) => (
          <ProjectInfo key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default VanillaSection;
