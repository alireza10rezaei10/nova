import React, { useEffect } from "react";
import styles from "./SliderDots.module.css";

const SliderDots = ({
  slides,
  currentSlide,
  setCurrentSlide,
  duration = 5000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount or slide change
  }, [currentSlide, slides.length, setCurrentSlide, duration]);

  return (
    <div className={styles.dotsContainer}>
      {slides.map((_, index) => (
        <div
          key={index}
          className={styles.dotWrapper}
          onClick={() => setCurrentSlide(index)}
        >
          <svg
            className={styles.progressCircle}
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className={`${styles.circle} ${
                index === currentSlide ? styles.activeCircle : ""
              }`}
              cx="18"
              cy="18"
              r="16"
            />
          </svg>
          <div
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default SliderDots;
