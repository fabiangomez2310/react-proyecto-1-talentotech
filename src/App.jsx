import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { SidebarDisenos } from "./components/Sidebar/SidebarDisenos";
import { Diseno1 } from "./components/Disenos/Diseno1";
import { Diseno2 } from "./components/Disenos/Diseno2";
import { Diseno3 } from "./components/Disenos/Diseno3";
import { Diseno4 } from "./components/Disenos/Diseno4";
import { SidebarAdministracion } from "./components/Sidebar/SidebarAdministracion";
import { Docentes } from "./components/Docentes/Docentes";
import { Estudiantes } from "./components/Estudiantes/Estudiantes";


function App() {
  return (
    <>
      <Navbar />
      <div className="app-layout">
        <Routes>
          <Route path="/disenos" element={<SidebarDisenos />}>

            <Route path="diseno1" element={<Diseno1 />} />
            <Route path="diseno2" element={<Diseno2 />} />
            <Route path="diseno3" element={<Diseno3 />} />
            <Route path="diseno4" element={<Diseno4 />}/>

          </Route>
          <Route path="/administracion" element={<SidebarAdministracion />}>
            <Route path="docentes" element={<Docentes />} />
            <Route path="estudiantes" element={<Estudiantes />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
