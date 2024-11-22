import React from "react";
import styles from "./Services.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import ScrollDown from "../../components/ScrollDown/ScrollDown";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import cameraImage from "../../assets/images/services/camera.png";
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
        <p className={styles.videoText}>
          طراحی و توسعه وبسایت
          <br />
          تیم نوا با بهره‌گیری از تکنولوژی‌های روز دنیا، وبسایت‌هایی با طراحی
          خلاقانه و کاربرپسند ارائه می‌دهد.
        </p>
      </div>

      {/* Third Section */}
      <div className={styles.thirdSection}>
        <img className={styles.image} src={cameraImage} alt="Camera services" />
        <div className={styles.imageText}>
          <p className={styles.title}>خدمات عکاسی و فیلمبرداری حرفه‌ای</p>
          <p>ارائه محتوای تصویری جذاب برای نمایش بهتر محصولات و خدمات شما.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
