/* eslint-disable react/prop-types */
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";

const CardComponent = ({ img, alt, title, description }) => {
  return (
    <Card sx={{ maxWidth: "331px" }}>
      <CardMedia component="img" alt={alt} image={img} />

      <CardContent>
        <Typography>{title}</Typography>

        <Typography>{description}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button>Learn more</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
