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

const avatarColors = [
  { bg: "#dde7ff", text: "#4f7df3" },
  { bg: "#fde8d8", text: "#e8722a" },
  { bg: "#d8f5e1", text: "#2ab060" },
  { bg: "#f0d8fd", text: "#a42ae8" },
];

const mockTimes = ["vor 12 Min.", "vor 1 Std.", "vor 3 Std.", "Gestern"];

function getInitials(username: string): string {
  const parts = username.trim().split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return username.substring(0, 2).toUpperCase();
}

function Welcome() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);

  const recentUsers = [...users].slice(-3).reverse();
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
        <div className="activity">
          <div className="activity__header">
            <span className="activity__title">Letzte Aktivität</span>
            <NavLink to="activity" className="activity__link">
              Alles anzeigen
            </NavLink>
          </div>
          {recentUsers.map((user, index) => (
            <div className="activity__item" key={user.id}>
              <div
                className="activity__avatar"
                style={{
                  backgroundColor: avatarColors[index % avatarColors.length].bg,
                  color: avatarColors[index % avatarColors.length].text,
                }}>
                {getInitials(user.username)}
              </div>
              <span className="activity__info">
                <span className="activity__name">{user.username}</span> wurde als Nutzer angelegt
              </span>
              <span className="activity__time">{mockTimes[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
