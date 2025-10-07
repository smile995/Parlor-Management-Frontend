// import { Divider } from "@mui/material";
import type { ITeammate } from "../../Types";

const TeammateCard = ({ teammate }: { teammate: ITeammate }) => {
  const { name, photo, age, experience, gender, expertIn, rating, status } =
    teammate;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300  hover:-translate-y-1 hover:border-b-4 border-[#f53d7a]">
      {/* Image Section */}
      <div className="relative">
        <img className="h-56 w-full object-cover" src={photo} alt={name} />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            status === "Available"
              ? "bg-green-100 text-green-600"
              : status === "Busy"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">
          {gender} • {age} yrs
        </p>
        <p className="text-sm text-pink-600 font-medium">
          {experience} Experience
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {expertIn.slice(0, 2).map((skill, index) => (
            <span
              key={index}
              className="bg-pink-50 text-pink-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        {/* <Divider className="my-4" /> */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-gray-600">
            ⭐ <span className="font-medium text-gray-800">{rating}</span>
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm px-4 py-1.5 rounded-full hover:opacity-90 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeammateCard;
