import PropTypes from 'prop-types';
import { SwalModal } from '../../../helpers/SweetAlert';

function ProjectInfo({ data }) {
  const { src, alt, title, project, site, github } = data;
  const { root, avif, jpg, png, webp } = src;
  const defaultSrc = jpg ?? png;
  const handleImgClick = () => {
    SwalModal({ title: 'Stack utilizado', stack: project.stack });
  };
  return (
    <div className="project-box">
      <div className="img-project-container" onClick={handleImgClick}>
        <picture>
          <source srcSet={`${root}/${avif}`} type="image/avif" />
          <source srcSet={`${root}/${webp}`} type="image/webp" />
          <img
            loading="lazy"
            className="img-project"
            width="500"
            height="300"
            src={`${root}/${defaultSrc}`}
            alt={alt}
            title={title}
          />
        </picture>
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
