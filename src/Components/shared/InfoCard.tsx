import type { ReactNode } from "react";

const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: number | string | ReactNode;
}) => (
  <div className="flex flex-col items-start bg-white p-4 rounded-xl shadow-xl">
    <div className="flex items-center gap-2 mb-1 text-gray-500 text-sm font-medium">
      {icon}
      <span>{label}</span>
    </div>
    <p className="text-gray-900 font-semibold">{value}</p>
  </div>
);
export default InfoCard;