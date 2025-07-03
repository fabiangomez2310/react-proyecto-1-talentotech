import { useState } from "react";

export const Tarea = ({
  tarea,
  eliminarTarea,
  completarTarea,
  actualizarTarea,
}) => {
  const [modoEditar, setModoEditar] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.tarea);

  const handleSave = () => {
    if (nuevoTexto.trim() === "") return;
    actualizarTarea(tarea.id, nuevoTexto);
    setModoEditar(false);
  };

  return (
    <div>
      {modoEditar ? (
        <>
          <input
            type="text"
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={() => setModoEditar(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <p>DESCRIPCION: {tarea.tarea} </p>
          <p>FECHA: {tarea.fecha.toLocaleString()} </p>
          <p>ESTADO: {tarea.terminada ? "COMPLETADA" : "SIN COMPLETAR"} </p>
          <p>Acciones</p>
          <button onClick={() => completarTarea(tarea.id)}>
            {" "}
            {tarea.terminada ? "Desmarca" : "Marcar"}{" "}
          </button>
          <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          <button onClick={() => actualizarTarea()}></button>
        </>
      )}
    </div>
  );
};
