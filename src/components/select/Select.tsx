import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./select.scss";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  icon?: IconDefinition;
  iconColor?: string;
  iconBg?: string;
}

function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
  icon,
  iconColor,
  iconBg,
}: SelectProps) {
  return (
    <div className="Select">
      {label && <label className="Select__label">{label}</label>}
      <div className="Select__row">
        {icon && (
          <div
            className="Select__icon-wrapper"
            style={{ background: iconBg, "--icon-color": iconColor } as React.CSSProperties}>
            <FontAwesomeIcon icon={icon} className="Select__icon" />
          </div>
        )}
        <select className="Select__field" value={value} onChange={(e) => onChange(e.target.value)}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
