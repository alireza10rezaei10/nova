import React from "react";
import styles from "./ContactUs.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import ScrollDown from "../../components/ScrollDown/ScrollDown";

const ContactUs = () => {
  return (
    <div className={styles.contactUsPage}>
      {/* First Section */}
      <div className={styles.firstSection}>
        <PageTitle title="تماس با ما" />
        <ScrollDown />
      </div>

      {/* Second Section */}
      <div className={styles.secondSection}>
        <PageTitle title="تماس با ما" />
        {/* Map Section */}
        <div className={styles.mapSection}>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="24"
              height="24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
              <circle cx="12" cy="9" r="2.5"></circle>
            </svg>
            دانشگاه صنعتی شریف
          </p>
        </div>

        {/* Contact Information Section */}
        <div className={styles.contactInfo}>
          <p>
            <strong>نشانی:</strong> دانشگاه صنعتی شریف
          </p>
          <p>
            <strong>شماره تماس:</strong> ۰۹۳۳۷۰۲۴۶۶۶۴
          </p>
          <p>
            <strong>ایمیل:</strong> contact@novagroup.ir
          </p>
          <p>
            <strong>شبکه‌های اجتماعی:</strong> تلگرام
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
