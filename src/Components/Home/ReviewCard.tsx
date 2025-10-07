import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import type { IClientReview } from "../../Types";

const ReviewCard = ({ review }: { review: IClientReview }) => {
  const { customerName, profession, customerImage, date, rating, comment } =
    review;
  return (
    <div className="m-2 border-l-4 border-[#f53d7a] rounded-xl">
      <Card  sx={{ maxWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={
                customerImage
                  ? customerImage
                  : "https://mui.com/static/images/cards/paella.jpg"
              }
            />
          }
          title={customerName}
          subheader={profession || date}
        />

        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {comment}
          </Typography>
          <Rating
            className="mt-3"
            name="half-rating"
            readOnly
            defaultValue={rating}
            precision={0.5}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewCard;
