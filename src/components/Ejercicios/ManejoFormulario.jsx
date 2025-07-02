import React, { useState } from 'react'
import styles from './ManejoFormulario.module.css';

export const ManejoFormulario = () => {


    const [nombre, setNombre] = useState("");

    const handleChange = (e) => {
        const nombre = e.target.value;
        const mayus = nombre.toUpperCase();
        setNombre(mayus); 
    }

  return (
    <div className={styles.container}>

        <input className={styles.input} type="text" placeholder='Escribe tu nombre' name='nombre' id='nombre' onChange={handleChange} />
        <p className={styles.nameDisplay}>{nombre}</p>
   
   </div>
  )
}
