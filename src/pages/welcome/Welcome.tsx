import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./welcome.scss";
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <div className="page">
      <div className="welcome-formPage">
        <span className="welcome__eyebrow">Willkommen auf UserApplication</span>
        <h1 className="welcome__title">
          Verwalte deine Nutzer.
          <br />
          Übersichtlich. Schnell. Sicher.
        </h1>
        <p className="welcome__subtitle">
          Behalte den Überblick über alle Accounts oder lege in wenigen Sekunden einen neuen Nutzer
          an.
        </p>

        <div className="welcome__actions">
          <NavLink to="overview">
            <button className="welcome__Button">
              <FontAwesomeIcon icon={faTableCells} className="welcome__Button__icon" />
              <span className="welcome__text">Übersicht</span>
            </button>
          </NavLink>
          <NavLink to="create">
            <button className="welcome__Button">
              <FontAwesomeIcon icon={faPlus} className="welcome__Button__icon" />
              <span className="welcome__text">Erstellen</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
