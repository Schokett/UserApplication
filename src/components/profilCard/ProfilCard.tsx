import "./profilCard.scss";

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
}

function ProfilCard({ user }: ProfilCardProps) {
  return (
    <div className="card">
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
          <span className="card__detail">{user.birthDate}</span>
          <span className="card__detail">{user.address}</span>
          <span className="card__detail">{user.gender}</span>
          <span className="card__detail">{user.telefon}</span>
          <span className="card__detail">{user.email}</span>
          <span className="card__detail">{user.website}</span>
        </div>
      </div>
    </div>
  );
}
export default ProfilCard;
