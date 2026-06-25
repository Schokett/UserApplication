import "./profilCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faVenusMars,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

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
interface ProfilCardProps {
  user: User;
  onClick?: () => void;
}

function ProfilCard({ user, onClick }: ProfilCardProps) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__image-wrapper">
        {user.profileImage ? (
          <img
            className="card__image"
            src={user.profileImage}
            alt={`Profilbild von ${user.username}`}
          />
        ) : (
          <div className="card__image-placeholder">{user.username.charAt(0).toUpperCase()}</div>
        )}
      </div>

      <div className="card__info">
        <h4 className="card__username">{user.username}</h4>
        <div className="card__detail-grid">
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faCalendar} />
            {user.birthDate}
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faLocationDot} />
            {user.address}
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faVenusMars} />
            {user.gender}
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faPhone} />
            {user.telefon}
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            {user.email}
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faGlobe} />
            {user.website}
          </span>
        </div>
      </div>
    </div>
  );
}
export default ProfilCard;
