import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./activitylog.scss";

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

function getInitials(username: string): string {
  const parts = username.trim().split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return username.substring(0, 2).toUpperCase();
}

function getMockTime(index: number): string {
  const times = [
    "vor 12 Min.",
    "vor 1 Std.",
    "vor 3 Std.",
    "vor 5 Std.",
    "Gestern",
    "vor 2 Tagen",
    "vor 3 Tagen",
    "vor 4 Tagen",
    "vor 5 Tagen",
    "vor 1 Woche",
  ];
  return times[index] ?? `vor ${index + 1} Wochen`;
}

function ActivityLog() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(stored);
  }, []);

  const allActivities = [...users].reverse();

  return (
    <div className="page">
      <div className="activitylog">
        <div className="activitylog__header">
          <NavLink to="/" className="activitylog__back">
            <FontAwesomeIcon icon={faArrowLeft} />
            Zurück
          </NavLink>
          <h2 className="activitylog__title">Gesamter Aktivitätsverlauf</h2>
          <span className="activitylog__count">{allActivities.length} Einträge</span>
        </div>

        <div className="activitylog__list">
          {allActivities.length === 0 ? (
            <p className="activitylog__empty">Noch keine Aktivitäten vorhanden.</p>
          ) : (
            allActivities.map((user, index) => (
              <div className="activitylog__item" key={user.id}>
                <div
                  className="activitylog__avatar"
                  style={{
                    backgroundColor: avatarColors[index % avatarColors.length].bg,
                    color: avatarColors[index % avatarColors.length].text,
                  }}
                >
                  {getInitials(user.username)}
                </div>
                <span className="activitylog__info">
                  <span className="activitylog__name">{user.username}</span> wurde als Nutzer angelegt
                </span>
                <span className="activitylog__time">{getMockTime(index)}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ActivityLog;
