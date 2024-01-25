import styles from "./styles.module.css";
import { Typography } from "@mui/material";
import ButtonCar from "../UI/ButtonCar/ButtonCar";

import check from "../../assets/check.png";
import car from "../../assets/sucess.png";
import TextFieldDisplay from "../UI/TextFieldDisplay/TextFieldDisplay";
import { useDispatch, useSelector } from "react-redux";
import { carActions } from "../../store/cars/carSlice";
import { Container } from "@mui/system";

const SucessScreen = () => {
  const fetchItem = useSelector((state) => state.cars.item);
  const lastElement = fetchItem[fetchItem.length - 1];
  const dispatch = useDispatch();
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

  const handleSubmitNewCar = () => {
    deleteCar(lastElement.id);
    dispatch(carActions.handleFetching("form"));
  };

  return (
    <section className={styles.sucessContainer}>
      <div className={styles.infoDisplay}>
        <article id={styles.title}>
          <img src={check} />
          <Typography variant="h3" sx={{ color: "primary.light" }}>
            Welcome, {lastElement.fullName.split(" ")[0]}
          </Typography>
        </article>

        <Typography sx={{ margin: "20px" }}>
          That's data your send to us!{" "}
        </Typography>

        <img src={car} id={styles.img} />
      </div>

      <section className={styles.userInfoContainer}>
        <TextFieldDisplay value={lastElement.fullName} label="Full Name" />
        <TextFieldDisplay value={lastElement.country} label="Country" />
        <TextFieldDisplay value={lastElement.city} label="City" />
        <TextFieldDisplay
          value={lastElement.placaUser.toUpperCase()}
          style={{ textTransform: "uppercase" }}
          label="Placa"
        />
        {lastElement.selectedCar !== "" && (
          <TextFieldDisplay value={lastElement.selectedCar} label="My Car" />
        )}
      </section>

      <div id={styles.email}>
        <Typography>
          You'll so many info about process in your email:{" "}
        </Typography>

        <Typography sx={{ color: "orange" }}>
          {lastElement.emailUser}
        </Typography>
      </div>

      <ButtonCar
        color="primary.light"
        onClick={handleSubmitNewCar}
        sx={{ marginBottom: "20px" }}
      >
        Submit a new car{" "}
      </ButtonCar>
    </section>
  );
};

export default SucessScreen;
