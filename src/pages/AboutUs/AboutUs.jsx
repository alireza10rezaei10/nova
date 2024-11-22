import React from "react";
import styles from "./AboutUs.module.css";
import firstSectionBackground from "../../assets/images/about-us/first-section-bg.jpg"; // Replace with actual background
import secondSectionBackground from "../../assets/images/about-us/second-image-bg.jpg"; // Replace with actual background
import logoImage from "../../assets/images/nova-logo.png"; // Replace with actual logo image
import alirezaImage from "../../assets/images/about-us/persons/alireza.jpg"; // Alireza's image
import mahyarImage from "../../assets/images/about-us/persons/mahyar.jpg"; // Mahyar's image
import afraImage from "../../assets/images/about-us/persons/afra.jpg"; // Afra's image
import amirImage from "../../assets/images/about-us/persons/amir.jpg"; // Amir's image
import Person from "../../components/Person/Person";
import PageTitle from "../../components/PageTitle/PageTitle";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsPage}>
      {/* First Section */}
      <div
        className={styles.firstSection}
        style={{ backgroundImage: `url(${firstSectionBackground})` }}
      >
        <PageTitle title="درباره‌ی ما" />
        <div className={styles.scrollDown}>
          <svg
            className={styles.curvedText}
            viewBox="0 -30 200 100"
            xmlns="http://www.w3.org/2000/svg"
          >
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
            نوا با تیمی متشکل از متخصصان مجرب طراحی و توسعه وبسایت از دانشگاه
            صنعتی شریف، فصل جدیدی در طراحی و ارائه خدمات وب در ایران آغاز کرده
            است. ما با ارائه طراحی‌های گرافیکی خلاقانه و اختصاصی، تجربه‌ای
            بی‌نظیر برای مشتریان شما ایجاد می‌کنیم.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className={styles.thirdSection}>
        <Person
          name="علیرضا رضایی"
          image={alirezaImage}
          title="متخصص طراحی وب | دانش‌آموخته دانشگاه صنعتی شریف"
          description="با سابقه‌ای درخشان در توسعه پروژه‌های وبسایت خلاقانه."
          buttonText="درباره من"
        />
        <Person
          name="مهیار آلبان"
          image={mahyarImage}
          title="محقق و پژوهشگر حوزه مارکتینگ و برندینگ | دانش‌آموخته دانشگاه صنعتی شریف"
          description="با تجربه در تدوین و اجرای کمپین‌های بازاریابی موفق."
          buttonText="درباره من"
        />
        <Person
          name="افرا"
          image={afraImage}
          title="فیلمبردار و عکاس حرفه‌ای | دانش‌آموخته دانشگاه صنعتی شریف"
          description="خلاقیت در ارائه محتوای بصری ممتاز."
          buttonText="درباره من"
        />
        <Person
          name="امیر فیض"
          image={amirImage}
          title="محقق مارکتینگ و برندینگ | دانش‌آموخته دانشگاه صنعتی شریف"
          description="متخصص در تحلیل بازار و ارائه راهکارهای خلاقانه برای برندسازی."
          buttonText="درباره من"
        />
      </div>
    </div>
  );
};

export default AboutUs;
