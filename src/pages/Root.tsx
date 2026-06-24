import { Link } from "react-router-dom";
import "./root.scss";

function Root() {
  return (
    <div className="Navbar">
      <nav className="Navbar__container">
        <Link className="Navbar__Link" to="overview">
          <button className="Navbar__Button">Übersicht</button>
        </Link>
        <Link className="Navbar__Link" to="create">
          <button className="Navbar__Button">Erstellen</button>
        </Link>
      </nav>
    </div>
  );
}
export default Root;
