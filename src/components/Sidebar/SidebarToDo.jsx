

import "./Sidebar.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export const SidebarToDo = () => {
  return (
    <div className="sidebar-layout">
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink 
              to={"/tareas/add"} 
              className={({isActive}) => (isActive ? "active" : "")}
              >
                Agregar
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

