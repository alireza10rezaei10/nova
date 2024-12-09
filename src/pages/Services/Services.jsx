import React from "react";
import styles from "./Services.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import ScrollDown from "../../components/ScrollDown/ScrollDown";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import cameraImage from "../../assets/images/services/camera.webp";
import video from "../../assets/videos/video.mp4";

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      {/* First Section */}
      <div className={styles.firstSection}>
        <PageTitle title="خدمات ما" />
        <ScrollDown />
      </div>

      {/* Second Section */}
      <div className={styles.secondSection}>
        <VideoPlayer src={video} alt="Service video" />
        <h2 className={styles.title}>طراحی و توسعه وبسایت</h2>
        <p className={styles.text}>
          تیم نوا با بهره‌گیری از تکنولوژی‌های روز دنیا، وبسایت‌هایی با طراحی
          خلاقانه و کاربرپسند ارائه می‌دهد.
        </p>
      </div>

      {/* Third Section */}
      <div className={styles.thirdSection}>
        <img className={styles.image} src={cameraImage} alt="Camera services" />
        <h2 className={styles.title}>خدمات عکاسی و فیلمبرداری حرفه‌ای</h2>
        <p className={styles.text}>
          ارائه محتوای تصویری جذاب برای نمایش بهتر محصولات و خدمات شما.
        </p>
      </div>
    </div>
  );
};

export default Services;
