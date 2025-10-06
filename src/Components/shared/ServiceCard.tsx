import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { IService } from "../../Types";
import { IoMdTime } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";

const ServiceCard = ({ service }: { service: IService }) => {
  const {
    image,
    name,
    duration,
    category,
    description,
    price,
    availableStaff,
    benefits,
    discount,
    preparation,
    products,
    rating,
    slots,
    status,
    totalOrder,
  } = service;
  const discountNumber = Number(discount);

  const categoryColors: Record<string, string> = {
    // Beauty & Personal Care
    Hair: "bg-amber-100",
    Skin: "bg-pink-100",
    Nails: "bg-green-100",
    Makeup: "bg-purple-100",
    Spa: "bg-blue-100",
    Massage: "bg-red-100",
    Facial: "bg-teal-100",
    Beard: "bg-orange-100",
    Wax: "bg-yellow-100",
    Eyes: "bg-indigo-100",

    Premium: "bg-gradient-to-r from-yellow-100 to-amber-200",
    Bridal: "bg-gradient-to-r from-pink-100 to-rose-200",
    MakeOver: "bg-gradient-to-r from-fuchsia-100 to-pink-200",
    BodyCare: "bg-gradient-to-r from-green-100 to-lime-200",
    HairRemoval: "bg-gradient-to-r from-emerald-100 to-teal-200",
    HairCut: "bg-gradient-to-r from-cyan-100 to-sky-200",
    HairCare: "bg-gradient-to-r from-amber-100 to-orange-200",
  };

  return (
    <div>
      <Card>
        <CardMedia sx={{ height: 200 }} image={image} />
        <CardContent>
          <div className="flex items-center justify-between ">
            <p
              className={`${
                categoryColors[category] || "bg-gray-200"
              } max-w-fit px-3 rounded-full text-sm`}
            >
              {category}
            </p>
           { discountNumber > 0 && (
              <p className="bg-red-100 text-sm text-red-600 max-w-fit px-3 rounded-full">
                {discount}% OFF
              </p>
           ) }
          </div>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <div className="flex items-center gap-5 mt-2">
              <div>
                <p className="flex items-center gap-1">
                  <IoMdTime />
                  {duration}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1">
                  <FaUsers />
                  {totalOrder} orders
                </p>
              </div>
            </div>
          </Typography>
          <Typography
            variant="subtitle1"
            className="flex items-center gap-1"
            color="text.primary"
          >
            <TbCoinTaka />
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Book Now</Button>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default ServiceCard;
