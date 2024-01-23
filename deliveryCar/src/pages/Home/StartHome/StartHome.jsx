import { Box, Button, FormGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import startCar from "../../../assets/startCar.png";
import styles from "./styles.module.css";
import TextFuildCar from "../../../components/UI/TextFuildCar/TextFuildCar";

const StartHome = () => {
  const [pickupData, setPickupData] = useState("");
  const [destinationData, setDestinationData] = useState("");

  console.log(pickupData);
  console.log(destinationData);

  const handleSubmit = () => {
    console.log();
  };

  return (
    <section className={styles.startContainer}>
      <figure>
        <img src={startCar} />
      </figure>

      <section className={styles.simpleFormContainer}>
        <div>
          <p>Need a ride?</p>
          <p>Book with myRIDE now!</p>
        </div>

        <FormGroup onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography>Find a ride now</Typography>
            {/* <TextField
              id="location"
              label="Your Pickup"
              value={pickupData}
              onChange={(event) => setPickupData(event.target.value)}
            /> */}

            <TextFuildCar
              id="location"
              label="Your Pickup"
              value={pickupData}
              onChange={(event) => setPickupData(event.target.value)}
             />

            <TextFuildCar
              id="destination"
              label="Your Destination"
              value={destinationData}
              onChange={(event) => setDestinationData(event.target.value)}
            />
          </Box>

          <Button>Find a Driver</Button>
        </FormGroup>
      </section>
    </section>
  );
};

export default StartHome;
