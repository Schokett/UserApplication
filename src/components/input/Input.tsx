import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./input.scss";

interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "date" | "tel" | "url";
  className?: string;
  error?: boolean;
  icon?: IconDefinition;
  iconColor?: string;
  iconBg?: string;
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className,
  error,
  icon,
  iconColor,
  iconBg,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className={`Input ${className ?? ""}`}>
      {label && <label className="Input__label">{label}</label>}
      <div className="Input__row">
        {icon && (
          <div
            className="Input__icon-wrapper"
            style={{ background: iconBg, "--icon-color": iconColor } as React.CSSProperties}>
            <FontAwesomeIcon icon={icon} className="Input__icon" />
          </div>
        )}
        <input
          className={`Input__field ${error ? "Input__field--error" : ""}`}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Input;
