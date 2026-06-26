import { NavLink, Outlet } from "react-router-dom";
import "./root.scss";
import logo from "../assets/logo-light.png";
import { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faPlus, faInfo } from "@fortawesome/free-solid-svg-icons";

function Root() {
  return (
    <div className="root">
      <nav className="Navbar">
        <div className="Navbar__logo-container">
          <img className="Navbar__logo" src={logo} alt="logo" />
        </div>
        <NavLink
          className={({ isActive }) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}
          to="overview">
          <button className="Navbar__Button">
            <FontAwesomeIcon icon={faTableCells} className="Navbar__icon" />
            Übersicht
          </button>
        </NavLink>
        <NavLink
          className={({ isActive }) => `Navbar__Link ${isActive ? "Navbar__Link--active" : ""}`}
          to="create">
          <button className="Navbar__Button">
            <FontAwesomeIcon icon={faPlus} className="Navbar__icon" />
            Erstellen
          </button>
        </NavLink>
        <div className="Navbar__spacer"></div>
        <NavLink
          className={({ isActive }) =>
            `Navbar__Link help ${isActive ? "Navbar__Link--active" : ""}`
          }
          to="help">
          <button className="Navbar__Button help">
            <FontAwesomeIcon icon={faInfo} className="Navbar__icon" />
            Hilfe & documentation
          </button>
        </NavLink>
        <span className="Navbar__app-version">version 1.0.0</span>
      </nav>
      <main className="root__main-content">
        <Outlet />
      </main>
      <Toaster
        position="top-center"
        containerStyle={{
          top: 60,
        }}
      />
    </div>
  );
}
export default Root;
