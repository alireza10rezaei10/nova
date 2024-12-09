import React from "react";
import styles from "./Logo.module.css";
import logoImage from "../../assets/images/nova-logo.webp"; // Import the logo image

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logoImage} alt="Logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
