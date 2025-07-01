import React from "react";
import styles from "./Diseno4.module.css";
import image from "./../../assets/img/TALENTO-TECH.png"; 

export const Diseno4 = () => {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.qrContainer}>
          <img src={image} alt="QR Code" className={styles.qrImage} />
        </div>
        <h3 className={styles.title}>
          Improve your front-end skills by building projects
        </h3>
        <p className={styles.text}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};
