import React from "react";
import "./Sidebar.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export const SidebarAdministracion = () => {
  return (
    <div className="sidebar-layout">
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink 
              to={"/administracion/docentes"} 
              className={({isActive}) => (isActive ? "active" : "")}
              >
                Docentes
              </NavLink>

              <NavLink
                to={"/administracion/estudiantes"}
                className={({isActive}) => (isActive ? "active" : "")}
              >
                Estudiantes
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <Outlet/>
      </div>
    </div>
  );
};
