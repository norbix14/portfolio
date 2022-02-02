import { useEffect, useState } from 'react';
import { imagesCarrouselCode } from '../../mocks/images-carrousel';

function Header() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  let timerTimeout, timerInterval;
  const interval = window.setInterval;
  const timeout = window.setTimeout;
  const clearInter = window.clearInterval;
  const clearTime = window.clearTimeout;

  const images = imagesCarrouselCode();
  const imagesLen = images.length - 1;

  const handlePrevImage = () => {
    setFade(true);
    timeout(() => setFade(false), 500);
    if (index === 0) {
      setIndex(imagesLen);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handleNextImage = () => {
    setFade(true);
    timeout(() => setFade(false), 500);
    if (index === imagesLen) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    timerInterval = interval(() => {
      setFade(true);
      if (index === imagesLen) {
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
  }, [imagesLen, index]);

  return (
    <section className="carrousel-slider">
      <div className="carrousel-container">
        <div className="code-project-info">
          <h3 className="code-project-description">
            {images[index].project.text}
          </h3>
          <span className="code-project-name">
            {images[index].project.name}
          </span>
        </div>
        <div className="slideshow-container">
          <div className={`my-slides ${fade ? 'slider-fade' : ''}`}>
            <picture>
              <source
                srcSet={`${images[index].src.root}/${images[index].src.avif}`}
                type="image/avif"
              />
              <source
                srcSet={`${images[index].src.root}/${images[index].src.webp}`}
                type="image/webp"
              />
              <img
                loading="lazy"
                className="img-carrousel"
                width="500"
                height="300"
                src={`${images[index].src.root}/${images[index].src.png}`}
                title={images[index].title}
                alt={images[index].alt}
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
