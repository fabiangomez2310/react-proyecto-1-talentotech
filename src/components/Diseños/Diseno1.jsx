import React from "react";
import styles from "./Diseno1.module.css";
import scarecrow from "./../../assets/img/scarecrow.png";

export const Diseno1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>404 NOT FOUND</div>

      <div className={styles.main}>
        <img src={scarecrow} alt="Scarecrow" className={styles.image} />

        <div className={styles.content}>
          <h1 className={styles.title}>I have bad news for you</h1>
          <p className={styles.message}>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className={styles.button}>Back to homepage</button>
        </div>
      </div>
    </div>
  );
};
