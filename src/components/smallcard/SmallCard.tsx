import "./smallcard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faUserGroup, type IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ContentProps {
  clasName?: string;
  icon?: IconDefinition;
  iconBg?: string;
  iconColor?: string;
  content: string;
  subtitle?: string;
}

// Ich wollte die smallcard function dynmaisch umschreiben.-
// upnote://x-callback-url/openNote?noteId=019f0ab5-d509-721d-a32f-5e912edd0696

// function SmallCard({ clasName, icon, iconBg, iconColor, content, subtitle }: ContentProps){
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(e.target.value);
//   };

function SmallCard() {
  return (
    <div className="smallcard">
      <div className="smallcard__top">
        <div className="smallcard__icon-container">
          <FontAwesomeIcon icon={faUserGroup} className="smallcard__icon" />
        </div>
        <div className="smallcard__procent">
          <span className="smallcard__icon-procent"></span> <FontAwesomeIcon icon={faCaretUp} />
          4,2%
        </div>
      </div>
      <div className="smallcard__main-container">
        <div className="smallcard__content">1.247</div>
        <div className="smallcard__content">Nutzer gesamt</div>
      </div>
    </div>
  );
}
export default SmallCard;
