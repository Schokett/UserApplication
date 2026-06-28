import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./welcome.scss";
import { NavLink } from "react-router-dom";
import SmallCard from "../../components/smallcard/SmallCard";

function Welcome() {
  return (
    <div className="page">
      <div className="hero">
        <span className="hero__eyebrow">
          <div className="hero__eyebrow-circle"></div>Willkommen
        </span>
        <h1 className="hero__title">
          Verwalte deine Nutzer.
          <br />
          <span>Übersichtlich. Schnell. Sicher.</span>
        </h1>
        <p className="hero__subtitle">
          Behalte den Überblick über alle Accounts oder lege in wenigen <br /> Sekunden einen neuen
          Nutzer an.
        </p>
        <div className="hero__actions">
          <NavLink to="create">
            <button className="hero__button">
              <FontAwesomeIcon
                icon={faPlus}
                className="hero__button-icon"
                style={{ color: "rgb(255, 255, 255)" }}
              />
              <span className="hero__text">Nutzer erstellen</span>
            </button>
          </NavLink>
          <NavLink to="overview">
            <button className="hero__button transparent">
              <FontAwesomeIcon
                icon={faBorderAll}
                className="hero__button-icon transparent"
                style={{ color: "rgb(255, 255, 255)" }}
              />
              <span className="hero__text transparent">Zur Übersicht</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="welcome">
        <div className="welcome__container">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
      <div className="welcome__container-medium">Test</div>
    </div>
  );
}

export default Welcome;
