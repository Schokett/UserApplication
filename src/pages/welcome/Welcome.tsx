import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./welcome.scss";
import { NavLink } from "react-router-dom";
import SmallCard from "../../components/smallcard/SmallCard";
import { faCaretUp, faImage, faCircleCheck, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface User {
  id: string;
  username: string;
  birthDate: string;
  gender: string;
  email: string;
  address: string;
  telefon: string;
  website: string;
  profileImage: string | null;
}

function Welcome() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);
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
          <SmallCard
            icon={faCaretUp}
            iconBg="#dde7ff"
            iconColor="#4f7df3"
            content={users.length}
            subtitle="Nutzer gesamt"
          />
          <SmallCard
            icon={faImage}
            iconBg="#fde8d8"
            iconColor="#e8722a"
            content={users.filter((u) => u.profileImage).length}
            subtitle="Mit Profilbild"
          />
          <SmallCard
            icon={faCircleCheck}
            iconBg="#d8f5e1"
            iconColor="#2ab060"
            content={users.filter((u) => u.username && u.email && u.birthDate).length}
            subtitle="Vollständige Profile"
          />
          <SmallCard
            icon={faGlobe}
            iconBg="#f0d8fd"
            iconColor="#a42ae8"
            content={users.filter((u) => u.website).length}
            subtitle="Mit Website"
          />
        </div>
      </div>
      <div className="welcome__container-medium">
        <p>Letzte Aktivität</p>
        <p>Alles anzeigen</p>
      </div>
    </div>
  );
}

export default Welcome;
