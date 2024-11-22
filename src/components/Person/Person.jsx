import React from "react";
import styles from "./Person.module.css";

const Person = ({ name, image, title, description, buttonText }) => {
  return (
    <div className={styles.personCard}>
      <img src={image} alt={name} className={styles.personImage} />
      <h3 className={styles.personName}>{name}</h3>
      <p className={styles.personTitle}>{title}</p>
      <p className={styles.personDescription}>{description}</p>
      <button className={styles.personButton}>{buttonText}</button>
    </div>
  );
};

export default Person;
