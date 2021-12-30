import { useEffect, useState } from 'react';
import { imagesCarrouselCode } from '../../mocks/images-carrousel';

function Header() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const images = imagesCarrouselCode();
  const imagesLen = images.length - 1;

  const handlePrevImage = () => {
    setFade(true);
    window.setTimeout(() => setFade(false), 500);
    if (index === 0) {
      setIndex(imagesLen);
    } else {
      setIndex((prevState) => prevState - 1);
    }
  };

  const handleNextImage = () => {
    setFade(true);
    window.setTimeout(() => setFade(false), 500);
    if (index === imagesLen) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const timerInterval = window.setInterval(() => {
      setFade(true);
      if (index === imagesLen) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 5000);
    const timerTimeout = window.setTimeout(() => setFade(false), 1000);
    return () => {
      clearInterval(timerInterval);
      clearTimeout(timerTimeout);
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
            <img
              className="img-carrousel"
              src={images[index].src}
              alt={images[index].alt}
            />
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
