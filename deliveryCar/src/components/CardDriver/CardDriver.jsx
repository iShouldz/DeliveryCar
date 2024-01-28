/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import imagem from "../../assets/iconCard.png";
import { useState } from "react";
import ModalDetails from "../ModalDetails/ModalDetails";
import ButtonCar from "../UI/ButtonCar/ButtonCar";

const CardDriver = ({ id, name, city, country, email, myCar = "" }) => {
  const handleSendEmail = (e) => {
    window.location.href = `mailto:${email}`;
    e.preventDefault();
  };

  const [modalControler, setModalControler] = useState();
  return (
    <Card
      sx={{ maxWidth: "331px", backgroundColor: "primary.grayRef", gap: "6px" }}
    >
      <CardMedia component="img" alt="user" image={imagem} />

      <CardContent>
        <Typography>{name}</Typography>

        <Typography sx={{ color: "secondary.light" }}>
          {city}, {country}
        </Typography>

        {myCar !== "" && (
          <Typography sx={{ color: "secondary.main" }}>{myCar}</Typography>
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <ButtonCar
          color="white"
          sx={{ color: "secondary.main" }}
          aria-label={`Learn more about ${name} car`}
          onClick={() => {
            setModalControler((prevState) => !prevState);
          }}
        >
          Info
        </ButtonCar>

        <ButtonCar
          color="white"
          sx={{ color: "secondary.main" }}
          aria-label={`email of ${name} `}
          onClick={handleSendEmail}
        >
          Send email
        </ButtonCar>

        <ModalDetails
          id={id}
          open={modalControler}
          name={name}
          city={city}
          country={country}
          email={email}
          myCar={myCar}
          actionButton={() => setModalControler((prevState) => !prevState)}
        />
      </CardActions>
    </Card>
  );
};

export default CardDriver;
