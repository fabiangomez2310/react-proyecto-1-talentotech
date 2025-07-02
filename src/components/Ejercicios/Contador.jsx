import React, { useState } from 'react'
import styles from "./Contador.module.css";

export const Contador = () => {

    const [contador, setContador] = useState(0);

    const handlePlus = () => {
      setContador(contador+1);
    }

    const handleMinus = () => {
      if(contador === 0) return;    
      setContador(contador-1);
    }

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Contador en React</h1>
        <h2 className={styles.count}>{contador}</h2>
        
        <div className={styles.buttons}>
          <button onClick={handlePlus} >Aumentar</button>
          <button onClick={handleMinus} disabled={contador===0}>Disminuir</button>
        </div>
    </div>
  )
}
