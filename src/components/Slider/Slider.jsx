import React, { useState } from "react";
import styles from "./Slider.module.css";
import slide1 from "../../assets/images/landing/slide-1.webp";
import slide2 from "../../assets/images/landing/slide-2.webp";
import slide3 from "../../assets/images/landing/slide-3.webp";
import SliderDots from "./Components/SliderDots/SliderDots";
import SliderNavigation from "./Components/SliderNavigation/SliderNavigation";

const slides = [
  {
    id: 1,
    image: slide1,
    text: "نووا تیمی متشکل از متخصصین طراحی و توسعه وبسایت دانشگاه صنعتی شریف",
  },
  {
    id: 2,
    image: slide2,
    text: "نووا با طراحی اختصاصی و گرافیکی جذاب، فصل نوینی در طراحی وبسای در ایران آغاز کرده است.",
  },
  {
    id: 3,
    image: slide3,
    text: "به کمک نووا با به روز ترین ابزار ها، تجربه ای عالی از تعامل با مشتریان ایجاد کنید.",
  },
];

const Slider = ({ containerStyle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className={containerStyle}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : ""
          }`}
          // className={`${styles.slide} ${
          //   index === currentSlide
          //     ? styles.active
          //     : index === (currentSlide - 1 + slides.length) % slides.length
          //     ? styles.nextSlide
          //     : index === (currentSlide + 1) % slides.length
          //     ? styles.prevSlide
          //     : ""
          // } `}
        >
          <div className={styles.imageContainer}>
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <div className={styles.imageGradient} />
          </div>
          <div className={styles.heroText}>{slide.text}</div>
        </div>
      ))}

      {/* Slider Navigation */}
      <SliderNavigation direction="left" onClick={nextSlide} />
      <SliderNavigation direction="right" onClick={prevSlide} />

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

export default Slider;
