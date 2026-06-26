import "./input.scss";

interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "date" | "tel" | "url";
  className?: string;
  error?: boolean;
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className,
  error,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className={`Input ${className ?? ""}`}>
      {label && <label className="Input__label">{label}</label>}
      <input
        className={`Input__field ${error ? "Input__field--error" : ""}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
