/* eslint-disable react/prop-types */
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import styles from "./styles.module.css";

const CardComponent = ({ img, alt, title, description }) => {
  return (
    <Card
      sx={{ maxWidth: "331px", backgroundColor: "primary.grayRef", gap: "6px" }}
      className={styles.cardContainer}
    >
      <CardMedia component="img" alt={alt} image={img} />

      <CardContent>
        <Typography>{title}</Typography>

        <Typography sx={{ color: "secondary.light" }}>{description}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button sx={{ color: "secondary.main" }}>Learn more</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
