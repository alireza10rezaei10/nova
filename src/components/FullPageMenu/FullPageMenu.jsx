import React from "react";
import styles from "./FullPageMenu.module.css";
import backgroundImage from "../../assets/images/menu/loading-background.webp";
import { Link } from "react-router-dom";

const FullPageMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.menu} ${
        isOpen ? styles.menuOpen : styles.menuClose
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>
      <div className={styles.menuContent}>
        <ul className={styles.menuItems}>
          <Link to="/" onClick={onClose}>
            <li>خانه</li>
          </Link>
          <Link to="/about-us" onClick={onClose}>
            <li>درباره نوا</li>
          </Link>
          <Link to="/services" onClick={onClose}>
            <li>خدمات نوا</li>
          </Link>
          <li>وبلاگ نوا</li>
          <Link to="/contact-us" onClick={onClose}>
            <li>تماس با نوا</li>
          </Link>
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
