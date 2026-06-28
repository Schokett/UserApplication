import "./smallcard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ContentProps {
  icon: IconDefinition;
  iconBg?: string;
  iconColor?: string;
  content: string | number;
  subtitle?: string;
}

function SmallCard({ icon, iconBg, iconColor, content, subtitle, value }: ContentProps) {
  return (
    <div className="smallcard">
      <div className="smallcard__top">
        <div
          className="smallcard__icon-container"
          style={{ background: iconBg, "--icon-color": iconColor } as React.CSSProperties}>
          <FontAwesomeIcon icon={icon} className="smallcard__icon" />
        </div>
      </div>
      <div className="smallcard__main-container">
        <div className="smallcard__content">{content}</div>
        <div className="smallcard__subContent">{subtitle}</div>
      </div>
    </div>
  );
}
export default SmallCard;
