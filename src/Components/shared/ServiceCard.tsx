import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { IService } from "../../Types";

const ServiceCard = ({ service }: { service: IService }) => {
  const { image } = service;
  return (
    <div>
      <Card
        // sx={{
        //   width: { xs: "100%", sm: 280, md: 300 }, // full width on mobile, fixed on larger screens
        //   margin: "auto",
        // }}
      >
        <CardMedia sx={{ height: 200,  }} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {service.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {service.description}
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
