import { useEffect, useMemo, useState } from 'react';
import { imagesCarrouselCode } from '../../mocks/images-carrousel';

function Header() {
  const initialStateProjects = useMemo(() => imagesCarrouselCode(), []);
  const projectsLength = useMemo(
    () => initialStateProjects.length - 1,
    [initialStateProjects]
  );

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [imgdata, setImgData] = useState(initialStateProjects[0]);

  let timerTimeout, timerInterval;
  const interval = window.setInterval;
  const timeout = window.setTimeout;
  const clearInter = window.clearInterval;
  const clearTime = window.clearTimeout;

  const { project } = imgdata;

  const { description, name, image } = project;

  const { src, alt, title } = image;
  const { root, avif, jpg, png, webp } = src;
  const defaultSrc = jpg ?? png;

  const handlePrevImage = () => {
    setFade(true);
    timeout(() => setFade(false), 500);
    if (index === 0) {
      setIndex(projectsLength);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handleNextImage = () => {
    setFade(true);
    timeout(() => setFade(false), 500);
    if (index === projectsLength) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    setImgData(initialStateProjects[index]);
    timerInterval = interval(() => {
      setFade(true);
      if (index === projectsLength) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 5000);
    timerTimeout = timeout(() => setFade(false), 1000);
    return () => {
      clearInter(timerInterval);
      clearTime(timerTimeout);
    };
  }, [projectsLength, index]);

  return (
    <section className="carrousel-slider">
      <div className="carrousel-container">
        <div className="code-project-info">
          <h3 className="code-project-description">{description}</h3>
          <span className="code-project-name">{name}</span>
        </div>
        <div className="slideshow-container">
          <div className={`my-slides ${fade ? 'slider-fade' : ''}`}>
            <picture>
              <source srcSet={`${root}/${avif}`} type="image/avif" />
              <source srcSet={`${root}/${webp}`} type="image/webp" />
              <img
                loading="lazy"
                className="img-carrousel"
                src={`${root}/${defaultSrc}`}
                title={title}
                alt={alt}
              />
            </picture>
          </div>
          <button className="btn-slider-prev" onClick={handlePrevImage}>
            &#10094;
          </button>
          <button className="btn-slider-next" onClick={handleNextImage}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
