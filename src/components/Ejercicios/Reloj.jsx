import React, { useState } from 'react'
import styles  from "./Reloj.module.css";

export const Reloj = () => {

    const h = new Date().toLocaleTimeString();
    const [hora, setHora] = useState(h)
    

    setInterval(() => {
        setHora(new Date().toLocaleTimeString())
    }, 1000);

  return (
    <div className={styles.container}>
        <h1 className={styles.time}>{hora}</h1>
    </div>
  )
}
