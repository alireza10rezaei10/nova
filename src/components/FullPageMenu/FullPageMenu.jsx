import React from "react";
import styles from "./FullPageMenu.module.css";
import backgroundImage from "../../assets/images/menu/loading-background.png"; // Import the image

const FullPageMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the menu if it's not open

  return (
    <div
      className={styles.menu}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamically set the background image
    >
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>
      <div className={styles.menuContent}>
        <ul className={styles.menuItems}>
          <a href="/">
            <li>خانه</li>
          </a>
          <a href="/about-us">
            <li>درباره نوا</li>
          </a>
          <a href="/services">
            <li>خدمات نوا</li>
          </a>
          <li>وبلاگ نوا</li>
          <a href="/contact-us">
            <li>تماس با نوا</li>
          </a>
        </ul>
        <div className={styles.contactInfo}>
          <p>contact@novagroup.ir</p>
          <p>۰۹۳۳۷۰۲۴۶۶۴ :تماس تلفنی</p>
        </div>
      </div>
    </div>
  );
};

export default FullPageMenu;
