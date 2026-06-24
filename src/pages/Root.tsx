import { Link, Outlet } from "react-router-dom";
import "./root.scss";

function Root() {
  return (
    <div className="root-body">
      <nav className="Navbar">
        <Link className="Navbar__Link" to="overview">
          <button className="Navbar__Button">Übersicht</button>
        </Link>
        <Link className="Navbar__Link" to="create">
          <button className="Navbar__Button">Erstellen</button>
        </Link>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
export default Root;
