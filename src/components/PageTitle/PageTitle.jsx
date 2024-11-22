import React from "react";
import styles from "./PageTitle.module.css";

const PageTitle = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{title}</h1>
      <hr className={styles.separator} />
    </div>
  );
};

export default PageTitle;
