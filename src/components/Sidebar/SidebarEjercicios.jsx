
import "./Sidebar.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export const SidebarEjercicios = () => {
  return (
    <div className="sidebar-layout">
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink 
              to={"/ejercicios/ejercicio1"} 
              className={({isActive}) => (isActive ? "active" : "")}
              >
                Ejercicio 1
              </NavLink>

              <NavLink 
              to={"/ejercicios/ejercicio2"} 
              className={({isActive}) => (isActive ? "active" : "")}
              >
                Ejercicio 2
              </NavLink>
              <NavLink 
              to={"/ejercicios/ejercicio3"} 
              className={({isActive}) => (isActive ? "active" : "")}
              >
                Ejercicio 3
              </NavLink>
              <NavLink 
              to={"/ejercicios/ejercicio4"} 
              className={({isActive}) => (isActive ? "active" : "")}
              >
                Ejercicio 4
              </NavLink>
              <NavLink 
              to={"/ejercicios/ejercicio5"} 
              className={({isActive}) => (isActive ? "active" : "")}
              >
                Ejercicio 5
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
