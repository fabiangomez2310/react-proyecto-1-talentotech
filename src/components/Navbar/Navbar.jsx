import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <h1>Mi aplicacion</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/disenos"}>Diseños</Link>
            <Link to={"/administracion"}>Administracion Instituto</Link>
            <Link to={"/ejercicios"}>Ejercicios</Link>
            <Link to={"/tareas"}>Tareas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
