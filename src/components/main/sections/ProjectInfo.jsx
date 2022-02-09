import PropTypes from 'prop-types';
import { SwalModal } from '../../../helpers/SweetAlert';

function ProjectInfo({ data }) {
  const { project } = data;

  const { description, name, stack, team, image, links } = project;

  const { src, alt, title } = image;
  const { root, avif, jpg, png, webp } = src;
  const defaultSrc = jpg ?? png;

  const { heroku, netlify, github } = links;
  const website = heroku || netlify || '#';
  const isValidSite = website !== '#';

  const { group, members } = team;

  const handleImgClick = () => {
    SwalModal({ title: 'Stack utilizado', stack });
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
        <h3>{name}</h3>
        <p>{description}</p>
        {group ? (
          <p>Trabajo en equipo de {members} miembros</p>
        ) : (
          <p>Trabajo individual</p>
        )}
        <div className="project-links">
          <div className="link-container">
            {isValidSite ? (
              <a
                className="link"
                rel="noreferrer"
                title="Ver el sitio web"
                target={'_blank'}
                href={website}
              >
                Sitio
              </a>
            ) : (
              <button
                className="btn-invalid link"
                title="Sitio web no disponible"
                disabled
              >
                sitio
              </button>
            )}
          </div>
          <div className="link-container">
            <a
              className="link"
              rel="noreferrer"
              title="Ver código fuente en Github"
              target={'_blank'}
              href={github}
            >
              código
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
