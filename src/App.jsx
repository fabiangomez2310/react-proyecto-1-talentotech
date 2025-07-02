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
import { SidebarEjercicios } from "./components/Sidebar/SidebarEjercicios";
import { OnionHater } from "./components/Ejercicios/OnionHater";
import { Contador } from "./components/Ejercicios/Contador";
import { ManejoFormulario } from "./components/Ejercicios/ManejoFormulario";
import { Reloj } from "./components/Ejercicios/Reloj";
import { Album } from "./components/Ejercicios/Album";


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
          <Route path="/ejercicios" element={<SidebarEjercicios />}>
            <Route path="ejercicio1" element={<OnionHater />} />
            <Route path="ejercicio2" element={<Contador />} />
            <Route path="ejercicio3" element={<ManejoFormulario />} />
            <Route path="ejercicio4" element={<Reloj />} />
            <Route path="ejercicio5" element={<Album img="https://tse2.mm.bing.net/th/id/OIP.aZL9aCxUyFsyr0AaC6VPkgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" titulo="Rozes" tipo="Solista" album="Under the Grave" año={2016} lik={true} />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
