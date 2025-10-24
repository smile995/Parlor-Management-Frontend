import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { IPackage } from "../../Types";
import { FaUsers } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { Divider } from "@mui/material";
import { Link } from "react-router";
const PackageCard = ({ comboPackage }: { comboPackage: IPackage }) => {
  const {
    _id,
    image,
    name,
    description,
    rating,
    discount,
    totalPrice: price,
    totalBookings: totalOrder,
  } = comboPackage;
  const discountNumber = Number(discount);
  const finalPrice = price - (price * discountNumber) / 100;

  return (
    <div>
      <Card>
        <div className="relative">
          <CardMedia sx={{ height: 200 }} image={image} />

          {rating && (
            <p className="absolute top-2 left-2 bg-gray-100 px-2  py-1 rounded text-black font-semibold text-sm ">
              ⭐{rating}
            </p>
          )}
        </div>
        <CardContent>
          <div className="flex items-center font-semibold text-sm justify-between mb-2 ">
            {totalOrder && (
              <p className="bg-green-100 text-green-600 gap-1 max-w-fit px-3 flex items-center rounded-full">
                <FaUsers />
                {totalOrder}
              </p>
            )}
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
export default PackageCard;
