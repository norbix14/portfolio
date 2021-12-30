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
        <img src={src} alt={alt} className="img-project" title={title} />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <div className="link-container">
            <a className="link" href={site} target={'_blank'} rel="noreferrer">
              Sitio
            </a>
          </div>
          <div className="link-container">
            <a
              className="link"
              href={github}
              target={'_blank'}
              rel="noreferrer"
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
