import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Sidebar.css";

export const SidebarDiseños = () => {
  return (
    <div className="sidebar-layout">
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/disenos/diseno1"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Diseno 1
              </NavLink>
              <NavLink
                to={"/disenos/diseno2"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Diseno 2
              </NavLink>
              <NavLink
                to={"/disenos/diseno3"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Diseno 3
              </NavLink>
              <NavLink
                to={"/disenos/diseno4"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Diseno 4
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};
