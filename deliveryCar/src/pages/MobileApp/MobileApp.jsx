import { Button, Rating, Typography } from "@mui/material";
import imageMobile from "../../assets/mobileapp.png";
import badge from "../../assets/badgemobile.png";
import styles from "./styles.module.css";
import { useState } from "react";

const MobileApp = () => {
  const handleSearch = () => {
    window.open("https://play.google.com/store/apps", "_blank");
  };

  const [rating, setRating] = useState(0);

  return (
    <section className={styles.mobileContainer}>
      <figure className={styles.mobileImage}>
        <Typography
          variant="h2"
          sx={{
            color: "secondary.main",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Download a mobile app!
        </Typography>

        <img src={imageMobile} />
        <Button onClick={handleSearch}>
          <img src={badge} style={{ width: "80%" }} />
        </Button>

        <div
          style={{
            backgroundColor: "#282828",
            borderRadius: "20px",
            padding: "20px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            component="legend"
            variant="h4"
            sx={{ color: "secondary.main" }}
          >
            Rating us!
          </Typography>
          <Typography
            component="legend"
            variant="h5"
            sx={{ color: "secondary.main" }}
          >
            {rating === 5
              ? "THIS IS GREAT, THANK YOU"
              : rating === 4
              ? "Excelent, thank you"
              : rating === 3
              ? "Fine, we will be better"
              : rating === 2
              ? "I`m sorry :("
              : rating === 1
              ? "I`m sorry we`ll fix that"
              : ""}
          </Typography>
          <Rating
            name="simple-controlled"
            sx={{ borderColor: "white", }}
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>
      </figure>
    </section>
  );
};

export default MobileApp;
