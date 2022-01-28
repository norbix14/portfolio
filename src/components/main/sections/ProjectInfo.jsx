import PropTypes from 'prop-types';
import { SwalModal } from '../../../helpers/SweetAlert';

function ProjectInfo({ data }) {
  const { src, alt, title, project, site, github } = data;
  const handleImgClick = () => {
    SwalModal({ title: 'Stack utilizado', stack: project.stack });
  };
  return (
    <div className="project-box">
      <div className="img-project-container" onClick={handleImgClick}>
        <img
          loading="lazy"
          className="img-project"
          src={src}
          alt={alt}
          title={title}
        />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <div className="link-container">
            <a
              className="link"
              rel="noreferrer"
              title="Ver el sitio en Netlify"
              target={'_blank'}
              href={site}
            >
              Sitio
            </a>
          </div>
          <div className="link-container">
            <a
              className="link"
              rel="noreferrer"
              title="Ver código fuente en Github"
              target={'_blank'}
              href={github}
            >
              Proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectInfo;
