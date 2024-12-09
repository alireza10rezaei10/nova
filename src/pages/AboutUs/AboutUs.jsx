import React, { useState, useEffect, useRef } from "react";
import styles from "./AboutUs.module.css";
import firstSectionBackground from "../../assets/images/about-us/first-section-bg.webp";
import secondSectionBackground from "../../assets/images/about-us/second-image-bg.webp";
import logoImage from "../../assets/images/nova-logo.webp";
import alirezaImage from "../../assets/images/about-us/persons/alireza.webp";
import mahyarImage from "../../assets/images/about-us/persons/mahyar.webp";
import afraImage from "../../assets/images/about-us/persons/afra.webp";
import amirImage from "../../assets/images/about-us/persons/amir.webp";
import Person from "../../components/Person/Person";
import PageTitle from "../../components/PageTitle/PageTitle";

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const personRefs = useRef([]);
  const scrollButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight * 0.1) {
        setIsScrolled(true); // Hide button when scrolled down 10% of the page height
      } else {
        setIsScrolled(false); // Show button if scrolled back up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    personRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const persons = [
    {
      name: "علیرضا رضایی",
      image: alirezaImage,
      jobTitle: "مدیر فنی",
      title: "متخصص طراحی وب | دانش‌آموخته دانشگاه صنعتی شریف",
      description: "با سابقه‌ای درخشان در توسعه پروژه‌های وبسایت خلاقانه.",
      buttonText: "درباره من",
    },
    {
      name: "مهیار آلبان",
      image: mahyarImage,
      jobTitle: "مدیر بازاریابی",
      title:
        "محقق و پژوهشگر حوزه مارکتینگ و برندینگ | دانش‌آموخته دانشگاه صنعتی شریف",
      description: "با تجربه در تدوین و اجرای کمپین‌های بازاریابی موفق.",
      buttonText: "درباره من",
    },
    {
      name: "افرا",
      image: afraImage,
      jobTitle: "مدیر تیم تولید محتوا",
      title: "فیلمبردار و عکاس حرفه‌ای | دانش‌آموخته دانشگاه صنعتی شریف",
      description: "خلاقیت در ارائه محتوای بصری ممتاز.",
      buttonText: "درباره من",
    },
    {
      name: "امیر فیض",
      image: amirImage,
      jobTitle: "مدیر عامل",
      title: "محقق مارکتینگ و برندینگ | دانش‌آموخته دانشگاه صنعتی شریف",
      description:
        "متخصص در تحلیل بازار و ارائه راهکارهای خلاقانه برای برندسازی.",
      buttonText: "درباره من",
    },
  ];

  return (
    <div className={styles.aboutUsPage}>
      {/* First Section */}
      <div
        className={styles.firstSection}
        style={{
          backgroundImage: `radial-gradient(at center center, #00000000 0%, #000000 100%), url(${firstSectionBackground})`,
        }}
      >
        <PageTitle title="درباره‌ی ما" />
        <div
          ref={scrollButtonRef}
          className={`${styles.scrollDown} ${isScrolled ? styles.hidden : ""}`}
        >
          <svg className={styles.curvedText} viewBox="0 -30 200 100">
            <path
              id="curve"
              d="M50,50 A50,50 0 1,1 150,50"
              fill="transparent"
            />
            <text fill="white" fontSize="14" fontFamily="Arial">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Scroll Down
              </textPath>
            </text>
          </svg>
          <div className={styles.scrollIcon}>
            <span></span>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div
        className={styles.secondSection}
        style={{ backgroundImage: `url(${secondSectionBackground})` }}
      >
        <div className={styles.overlay}>
          <img src={logoImage} alt="Nova Logo" className={styles.logo} />
          <p className={styles.description}>
            نوا با تیمی متخصص از طراحان مجرب طراحی و توسعه وبسایت از دانشگاه
            صنعتی شریف، فصل جدیدی در طراحی و ارائه خدمات وب در ایران آغاز کرده
            است. ما با ارائه طراحی‌های گرافیکی خلاقانه و اختصاصی، تجربیاتی
            بی‌نظیر برای مشتریان شما ایجاد می‌کنیم.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className={styles.thirdSection}>
        {persons.map((person, index) => (
          <div
            ref={(el) => (personRefs.current[index] = el)}
            key={index}
            className={`${styles.personCard} ${styles.hidden} ${
              index % 2 === 0 ? "" : styles.right
            }`}
          >
            <Person {...person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
