import React, { useState } from "react";
import styles from "./Home.module.css";
import slide1 from "../../assets/images/landing/slide-1.jpg";
import slide2 from "../../assets/images/landing/slide-2.jpg";
import slide3 from "../../assets/images/landing/slide-3.jpg";
import SliderDots from "../../components/SliderDots/SliderDots";
import SliderNavigation from "../../components/SliderNavigation/SliderNavigation";

const slides = [
  { id: 1, image: slide1, text: "اسلاید اول" },
  { id: 2, image: slide2, text: "اسلاید دوم" },
  { id: 3, image: slide3, text: "اسلاید سوم" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : ""
          }`}
        >
          <img src={slide.image} alt={`Slide ${slide.id}`} />
          <div className={styles.heroText}>{slide.text}</div>
        </div>
      ))}

      {/* Slider Navigation */}
      <SliderNavigation direction="left" onClick={prevSlide} />
      <SliderNavigation direction="right" onClick={nextSlide} />

      {/* Slider Dots */}
      <SliderDots
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        duration={5000} // 5 seconds for each slide
      />
    </div>
  );
};

export default Home;
