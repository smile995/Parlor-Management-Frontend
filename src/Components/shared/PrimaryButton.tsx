
import type { IPrimaryButtonProps } from "../../Types";

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  label,
  func,
  type = "button",
  disabled = false,
  className = "",
}:IPrimaryButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={func}
      className={`bg-[#f53d7a] text-white rounded px-4 py-2 hover:opacity-90 transition ${className}`}
    >
      {label}
    </button>
  );
};
export default PrimaryButton