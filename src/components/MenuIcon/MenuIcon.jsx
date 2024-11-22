import React from "react";
import styles from "./MenuIcon.module.css";

const MenuIcon = ({ onClick }) => {
  return (
    <div className={styles.menuIcon} onClick={onClick}>
      &#9776; {/* Unicode for menu icon */}
    </div>
  );
};

export default MenuIcon;
