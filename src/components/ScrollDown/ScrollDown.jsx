import React from "react";
import styles from "./ScrollDown.module.css";

const ScrollDown = () => {
  return (
    <div className={styles.scrollIconContainer}>
      {/* SVG for curved text */}
      <svg
        className={styles.curvedText}
        viewBox="0 -30 200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="curve" d="M50,50 A50,50 0 1,1 150,50" fill="transparent" />{" "}
        {/* Path to create the arc */}
        <text fill="white" fontSize="14" fontFamily="Arial">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            Scroll Down
          </textPath>
        </text>
      </svg>

      {/* Scroll Icon */}
      <div className={styles.scrollIcon}>
        <span></span>
      </div>
    </div>
  );
};

export default ScrollDown;
