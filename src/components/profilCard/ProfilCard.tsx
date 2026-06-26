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
        <h4 className="card__username">
          <span className="card__text">{user.username}</span>
        </h4>
        <div className="card__detail-grid">
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faCalendar} />
            <span className="card__text">{user.birthDate}</span>
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="card__text">{user.address}</span>
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faVenusMars} />
            <span className="card__text">{user.gender}</span>
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faPhone} />
            <span className="card__text">{user.telefon}</span>
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="card__text">{user.email}</span>
          </span>
          <span className="card__detail">
            {" "}
            <FontAwesomeIcon icon={faGlobe} />
            <span className="card__text">{user.website}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default ProfilCard;
