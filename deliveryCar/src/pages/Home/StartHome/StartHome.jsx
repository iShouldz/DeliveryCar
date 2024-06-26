/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Button, FormGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import startCar from "../../../assets/startCar.png";
import styles from "./styles.module.css";
import TextFuildCar from "../../../components/UI/TextFuildCar/TextFuildCar";

const StartHome = () => {
  const [destinationData, setDestinationData] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [latitude, setLatitude] = useState({
    latitude: "",
    longitude: "",
  });

  const handleSubmit = () => {
    console.log();
  };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setLatitude({ latitude, longitude });
  //       const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  //       fetch(nominatimUrl)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           if (data.display_name) {
  //             const city = data.address.city_district;
  //             const state = data.address.state;
  //             const countryUser = data.address.country;

  //             setCurrentLocation(`${city}, ${state}, ${countryUser}`);
  //           } else {
  //             console.error(
  //               "Não foi possível obter informações de localização."
  //             );
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Erro ao obter informações de localização:", error);
  //         });
  //     },
  //     (error) => {
  //       console.error("Erro ao obter a localização:", error.message);
  //     }
  //   );
  // }, []);

  const handleMaps = () => {
    const url = `https://www.google.com.br/maps/dir/${currentLocation}/${destinationData}/`;
  
    window.open(url, '_blank');
  };
  

  return (
    <section className={styles.startContainer}>
      <figure>
        <img src={startCar} alt="A yellow car working with my ride company" />
      </figure>

      <section className={styles.simpleFormContainer}>
        <article> 
          <Typography
            aria-label="Need a ride?"
            variant="h5"
            sx={{ textTransform: "uppercase", color: "primary.light" }}
          >
            Need a ride?
          </Typography>
          <Typography
          aria-label="bookwith"
            variant="h3"
            sx={{ fontWeight: "bold", color: "primary.light" }}
          >
            Book with{" "}
            <span id={styles.span}>
              {" "}
              <span style={{ fontStyle: "italic" }}>my</span>RIDE
            </span>{" "}
            now!
          </Typography>
        </article>

        <FormGroup onSubmit={handleSubmit} className={styles.containerMain}>
          <Typography 
            sx={{ color: "primary.light", fontWeight: "700", fontSize: '24px'}}
          >
            Find a ride now
          </Typography>

          <TextFuildCar
            id="location"
            label="Your Pickup"
            value={currentLocation}
            onClear={setCurrentLocation}
            onChange={(event) => setCurrentLocation(event.target.value)}
          />

          <TextFuildCar
            id="destination"
            label="Your Destination"
            value={destinationData}
            onClear={setDestinationData}
            onChange={(event) => setDestinationData(event.target.value)}
          />

          <Button
          aria-label="find a driver"
            variant="contained"
            sx={{
              width: "544px",
              height: "56px",
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "#EA9801", 
              },
              
            }}
            startIcon={
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="&#226;&#134;&#179; &#240;&#159;&#147;&#141;icon ">
                  <path
                    id=" &#226;&#134;&#179;Color"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 14.3671H14.71L14.43 14.0971C15.41 12.9571 16 11.4771 16 9.86707C16 6.27707 13.09 3.36707 9.5 3.36707C5.91 3.36707 3 6.27707 3 9.86707C3 13.4571 5.91 16.3671 9.5 16.3671C11.11 16.3671 12.59 15.7771 13.73 14.7971L14 15.0771V15.8671L19 20.8571L20.49 19.3671L15.5 14.3671ZM9.5 14.3671C7.01 14.3671 5 12.3571 5 9.86707C5 7.37707 7.01 5.36707 9.5 5.36707C11.99 5.36707 14 7.37707 14 9.86707C14 12.3571 11.99 14.3671 9.5 14.3671Z"
                    fill="white"
                  />
                </g>
              </svg>
            }
            onClick={handleMaps}
          >
            Find a Driver
          </Button>
        </FormGroup>
      </section>
    </section>
  );
};

export default StartHome;
