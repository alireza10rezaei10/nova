import React from "react";
import styles from "./SliderNavigation.module.css";

const SliderNavigation = ({ direction, onClick }) => {
  return (
    <button
      className={`${styles.navButton} ${
        direction === "left" ? styles.left : styles.right
      }`}
      onClick={onClick}
    >
      <svg
        className={styles.circle}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.circleBackground}
          cx="25"
          cy="25"
          r="22"
        ></circle>
      </svg>
      <span className={styles.arrow}>{direction === "left" ? "←" : "→"}</span>
    </button>
  );
};

export default SliderNavigation;
