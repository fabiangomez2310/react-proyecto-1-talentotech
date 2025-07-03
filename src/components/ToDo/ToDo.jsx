import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { Tarea } from "./Tarea";

export const ToDo = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    const nuevaTarea = {
      id: Date.now(),
      tarea,
      fecha: new Date(),
      terminada: false,
    };

    setTareas([nuevaTarea, ...tareas]);
  };

  const actualizarTarea = (id, nuevaDescripcion) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, tarea: nuevaDescripcion } : t
    );
    setTareas(actualizadas);
  };

  const eliminarTarea = (id) => {
    const filtradas = tareas.filter((t) => t.id !== id);
    setTareas(filtradas);
  };

  const completarTarea = (id) => {
    const tareaCompletada = tareas.map((t) =>
      t.id === id ? { ...t, terminada: !t.terminada } : t
    );
    setTareas(tareaCompletada);
  };

  return (
    <div>
      <Formulario agregarTarea={agregarTarea} />
      {tareas.length === 0 && <p>No hay tareas por ahora</p>}
      {tareas.map((tarea) => (
        <Tarea
          tarea={tarea}
          key={tarea.id}
          actualizarTarea={actualizarTarea}
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}
        />
      ))}
    </div>
  );
};
