// src/components/Select/Select.tsx
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
}

function Select({ label, value, onChange, options, placeholder }: SelectProps) {
  return (
    <div className="Select">
      {label && <label className="Select__label">{label}</label>}
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
  );
}

export default Select;
