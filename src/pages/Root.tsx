import { Link, Outlet } from "react-router-dom";
import "./root.scss";
import logo from "../assets/logo-light.png";
import { Toaster } from "react-hot-toast";

function Root() {
  return (
    <div className="root">
      <nav className="Navbar">
        <div className="Navbar__logo-container">
          <img className="Navbar__logo" src={logo} alt="logo" />
        </div>
        <Link className="Navbar__Link" to="overview">
          <button className="Navbar__Button">Übersicht</button>
        </Link>
        <Link className="Navbar__Link" to="create">
          <button className="Navbar__Button">Erstellen</button>
        </Link>
        <div className="Navbar__spacer"></div>
        <Link className="Navbar__Link help" to="help">
          <button className="Navbar__Button help">Hilfe & documentation</button>
        </Link>
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
