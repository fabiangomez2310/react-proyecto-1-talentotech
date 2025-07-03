import { useState } from "react";
import styles from "./Formulario.module.css";

export const Formulario = ({agregarTarea}) => {

  const [texto, setTexto] = useState("");

  const handleTarea = (e) => {
    e.preventDefault();
    if(texto.trim() === '') return;
    agregarTarea(texto)
    setTexto('');
  }

  return (
    <form className={styles.form} onSubmit={handleTarea}>
      <h1 className={styles.title}>To-Do</h1>
      <input
        type="text"
        autoFocus
        placeholder="Escribe tu tarea"
        name="tarea"
        onChange={(e) => setTexto(e.target.value)}
        value={texto}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};
