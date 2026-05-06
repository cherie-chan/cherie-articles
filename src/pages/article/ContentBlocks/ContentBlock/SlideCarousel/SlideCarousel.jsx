import React, { useState } from "react";
import c from "./slide-carousel.module.scss";

const SlideCarousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[activeIndex];

  return (
    <div className={c.container}>
      <div className={c.thumbnailPanel}>
        <div className={c.thumbnailList}>
          {slides.map((slide, idx) => (
            <button
              key={idx}
              className={`${c.thumbnail} ${idx === activeIndex ? c.active : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`View slide ${idx + 1}: ${slide.title || ""}`}>
              <img src={slide.image} alt={slide.title || `Slide ${idx + 1}`} />
            </button>
          ))}
        </div>
      </div>
      <div className={c.mainPanel}>
        <img src={activeSlide.image} alt={activeSlide.title || `Slide ${activeIndex + 1}`} className={c.mainImage} />
        {activeSlide.title && <p className={c.caption}>{activeSlide.title}</p>}
      </div>
    </div>
  );
};

export default SlideCarousel;
