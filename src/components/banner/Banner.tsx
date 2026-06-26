import "./banner.scss";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface DisplayProps {
  title?: string | number;
  subTitle?: string;
  onDelete?: () => void;
  image?: string;
  imageAlt?: string;
  username?: string;
  icon?: IconDefinition;
}

function Banner({ title, subTitle, onDelete, image, imageAlt, username, icon }: DisplayProps) {
  return (
    <div className="page-banner">
      {image ? (
        <img src={image} alt={imageAlt} className="page-banner__picture" />
      ) : icon ? (
        <div className="page-banner__icon-wrapper">
          <FontAwesomeIcon icon={icon} className="page-banner__icon" />
        </div>
      ) : (
        <div className="page-banner__image-placeholder">
          {username ? username.charAt(0).toUpperCase() : "?"}
        </div>
      )}

      <div className="page-banner__text-wrapper">
        <span className="page-banner__title">{title}</span>
        <div className="page-banner__action-container">
          <span className="page-banner__sub-title">{subTitle}</span>
          {onDelete && (
            <button className="page-banner__delete-btn" onClick={onDelete} type="button">
              <FontAwesomeIcon icon={faTrash} />
              User Löschen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
