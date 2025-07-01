import React from "react";
import styles from "./Diseno3.module.css";
import image from "./../../assets/img/papelhigienico.png";

export const Diseno3 = () => {
  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={image} alt="Toilet Roll" />
      <h2 className={styles.productTitle}>SINGLE TOILET ROLL</h2>
      <p className={styles.productSubtitle}>POPULAR SELLER</p>
      <p className={styles.productPrice}>£9.99</p>
      <p className={styles.productDescription}>
        This is a luxury, quilted, 3-ply toilet roll with aloe vera for the
        smoothest wipe possible. No animals were harmed in the making or testing
        of this product. Due to high demand, limited to 2 per order.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>LIKE</button>
        <button className={styles.otherButton}>OTRO BOTON</button>
      </div>
    </div>
  );
};
