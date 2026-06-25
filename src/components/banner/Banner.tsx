import logo from "../../assets/logo.png";
import "./banner.scss";

interface DisplayProps {
  title?: string | number;
  subTitle?: string;
}

function Banner({ title, subTitle }: DisplayProps) {
  return (
    <div className="page-banner">
      <img src={logo} alt="test" style={{ width: "200px" }} />
      <div className="page-banner__text-wrapper">
        <span className="page-banner__title">{title}</span>
        <span className="page-banner__sub-title">{subTitle}</span>
      </div>
    </div>
  );
}

export default Banner;
