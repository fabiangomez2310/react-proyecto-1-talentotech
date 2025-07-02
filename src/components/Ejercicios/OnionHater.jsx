import React from 'react';
import styles from './OnionHater.module.css';

export const OnionHater = () => {
  const handleChange = (e) => {
    const texto = e.target.value;
    if (texto.includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor="textArea" className={styles.label}>
        Ingrese texto
      </label>
      <textarea
        name="textArea"
        id="textArea"
        onChange={handleChange}
        placeholder="Escribe algo"
        rows={5}
        cols={40}
        className={styles.textarea}
      />
    </div>
  );
};
