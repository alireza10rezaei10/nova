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
          <p>لوکیشن دانشگاه صنعتی شریف</p>
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
