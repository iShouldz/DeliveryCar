/* eslint-disable react/prop-types */
import { Modal, Typography, Box } from "@mui/material";
import TextFieldDisplay from "../UI/TextFieldDisplay/TextFieldDisplay";
import styles from "./styles.module.css";
import ButtonCar from "../UI/ButtonCar/ButtonCar";
import { deleteCar } from "../../store/login/loginActions";

const ModalDetails = ({
  id,
  open,
  name,
  city,
  country,
  email,
  actionButton,
  myCar,
}) => {
  const handleDelete = () => {
    deleteCar(id);
    window.location.reload()
  };

  return (
    <Modal open={open} className={styles.containerMain}>
      <Box className={styles.modalContainer}>
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h2"
          sx={{ color: "secondary.main", fontWeight: "bold" }}
        >
          {name} details
        </Typography>

        <section className={styles.userInfoContainer}>
          <TextFieldDisplay value={name} label="Full Name" />
          <TextFieldDisplay value={country} label="Country" />
          <TextFieldDisplay value={city} label="City" />
          {myCar !== "" && (
            <TextFieldDisplay
              value={myCar}
              style={{ textTransform: "uppercase" }}
              label="Your car"
            />
          )}
          <TextFieldDisplay value={email} label="Email" />
        </section>
        {/* <img src={img} alt="Problem image error" /> */}

        <Box sx={{ gap: "20px", display: "flex", justifyContent: "center" }}>
          <ButtonCar color="white" onClick={handleDelete}>
            Delete
          </ButtonCar>

          <ButtonCar color="white" onClick={actionButton}>
            Close
          </ButtonCar>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalDetails;
