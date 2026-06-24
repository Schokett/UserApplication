import { Link, Outlet } from "react-router-dom";
import "./root.scss";

function Root() {
  return (
    <div className="root">
      <nav className="Navbar">
        <div className="Navbar__logo-container">
          <img className="Navbar__logo" src="public/logo.png" alt="logo" />
        </div>
        <Link className="Navbar__Link" to="overview">
          <button className="Navbar__Button">Übersicht</button>
        </Link>
        <Link className="Navbar__Link" to="create">
          <button className="Navbar__Button">Erstellen</button>
        </Link>
      </nav>
      <main className="root__main-content">
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
