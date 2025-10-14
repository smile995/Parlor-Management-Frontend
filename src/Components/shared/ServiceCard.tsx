import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { IService } from "../../Types";
import { IoTimer } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { Divider } from "@mui/material";
import { Link } from "react-router";
const ServiceCard = ({ service }: { service: IService }) => {
  const {
    _id,
    image,
    name,
    duration,
    category,
    description,
    price,
    discount,
    totalOrder,
  } = service;
  const discountNumber = Number(discount);
  const finalPrice = price - (price * discountNumber) / 100;

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
          <div className="flex items-center font-semibold text-sm justify-between mb-2 ">
            <p
              className={`${
                categoryColors[category] || "bg-gray-200"
              } max-w-fit px-3 rounded-full`}
            >
              {category}
            </p>
            {discountNumber > 0 && (
              <p className="bg-red-100 text-red-600 max-w-fit px-3 rounded-full">
                {discount}% OFF
              </p>
            )}
          </div>
          <Typography gutterBottom variant="subtitle1" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            {/* {description} */}
            {description.length > 55 ? (
              <p>{description.slice(0, 55)}...</p>
            ) : (
              description
            )}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <div className="flex items-center gap-10 ">
              <div>
                <p className="flex items-center gap-1">
                  <IoTimer className="text-rose-500 " />
                  {duration}
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1">
                  <FaUsers className="text-rose-500" />
                  {totalOrder} orders
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-2">
              <p className="flex items-center text-base font-semibold text-black">
                <TbCurrencyTaka className="text-rose-500 text-xl" />
                {finalPrice}
              </p>
              <div className="text-base font-semibold ">
                {discountNumber > 0 && (
                  <del>
                    <p className="text-base font-semibold flex items-center text-gray-500">
                      <TbCurrencyTaka />
                      {price}
                    </p>
                  </del>
                )}
              </div>
            </div>
          </Typography>
        </CardContent>
        <Divider />
        <CardActions className="flex justify-between px-3 ">
          <Button size="small">Book Now</Button>
          <Link to={`/services/${_id}`}>
            <Button size="small">Details</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default ServiceCard;
