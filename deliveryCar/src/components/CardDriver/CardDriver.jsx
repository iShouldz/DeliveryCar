/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import imagem from "../../assets/iconCard.png";
import ModalTemplate from "../../components/ModalTemplate/ModalTemplate";
import { useState } from "react";
import ModalDetails from "../ModalDetails/ModalDetails";

const CardDriver = ({ name, city, country, email, myCar = "" }) => {
  const handleSendEmail = (e) => {
    window.location.href = `mailto:${email}`;
    e.preventDefault();
  };

  const nameI = name + " details";
  const descriptionI = `Adress: ${city}, ${country} \n Email: ${email} Type car: ${
    myCar === "" ? "Sem carro" : ""
  }`;

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
        <Button
          sx={{ color: "secondary.main" }}
          aria-label={`email of ${name} `}
          onClick={handleSendEmail}
        >
          Send email
        </Button>

        <Button
          sx={{ color: "secondary.main" }}
          aria-label={`Learn more about ${name} car`}
          onClick={() => {
            setModalControler((prevState) => !prevState);
          }}
        >
          Learn more
        </Button>

        <ModalDetails
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
