import "./banner.scss";

interface DisplayProps {
  title?: string | number;
  subTitle?: string;
  onDelete?: () => void;
  image?: string;
  imageAlt?: string;
}

function Banner({ title, subTitle, onDelete, image, imageAlt }: DisplayProps) {
  return (
    <div className="page-banner">
      <img className="page-banner__picture" src={image} alt={imageAlt} style={{ width: "200px" }} />
      <div className="page-banner__text-wrapper">
        <span className="page-banner__title">{title}</span>
        <div className="page-banner__action-container">
          <span className="page-banner__sub-title">{subTitle}</span>
          {onDelete && (
            <button className="page-banner__delete-btn" onClick={onDelete} type="button">
              User Löschen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
