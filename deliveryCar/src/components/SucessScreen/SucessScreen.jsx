import styles from "./styles.module.css";
import { Typography } from "@mui/material";
import ButtonCar from "../UI/ButtonCar/ButtonCar";

import check from "../../assets/check.png";
import car from "../../assets/form/CarFormImage.svg";
import TextFieldDisplay from "../UI/TextFieldDisplay/TextFieldDisplay";
import { useState } from "react";
import { useSelector } from "react-redux";

const SucessScreen = () => {
  const [dataGet, setDataGet] = useState([]);
  const fetchStatus = useSelector((state) => state.cars.fetching);
  const fetchItem = useSelector((state) => state.cars.item);
  const lastElement = fetchItem[fetchItem.length - 1];

  console.log(fetchItem);
  console.log(lastElement);

  const deleteCar = async (carId) => {
    try {
      const response = await fetch(`http://localhost:3000/cars/${carId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(`Car with id ${carId} deleted successfully`);
      } else {
        console.error(`Failed to delete car with id ${carId}`);
      }
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <section className={styles.sucessContainer}>
      <article id={styles.title}>
        <img src={check} />
        <Typography variant="h3" sx={{ color: "primary.light" }}>
          Welcome, {lastElement.fullName}
        </Typography>
      </article>

      <Typography>That's data your send to us! </Typography>

      <section className={styles.userInfoContainer}>
        <TextFieldDisplay value={lastElement.fullName} label="Full Name" />
        <TextFieldDisplay value={lastElement.country} label="Country" />
        <TextFieldDisplay value={lastElement.city} label="City" />
        <TextFieldDisplay value={lastElement.placaUser} label="Placa" />
        <TextFieldDisplay value={lastElement.fullName} />

        <Typography>
          You'll so many info about process in your email:{" "}
          <span style={{ color: "orange" }}>{lastElement.emailUser}</span>
        </Typography>
      </section>

      <img src={car} />
      <button onClick={() => deleteCar(lastElement.id)}>deletar</button>
      <ButtonCar color="primary.light">Submit a new car </ButtonCar>
    </section>
  );
};

export default SucessScreen;
