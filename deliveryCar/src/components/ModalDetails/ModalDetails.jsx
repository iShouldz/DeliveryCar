/* eslint-disable react/prop-types */
import { Modal, Typography, Box } from "@mui/material";
import TextFieldDisplay from "../UI/TextFieldDisplay/TextFieldDisplay";
import styles from "./styles.module.css";
import ButtonCar from "../UI/ButtonCar/ButtonCar";

const ModalDetails = ({
  open,
  name,
  city,
  country,
  email,
  actionButton,
  myCar,
}) => {
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

        <ButtonCar color="white" onClick={actionButton}>
          Close
        </ButtonCar>
      </Box>
    </Modal>
  );
};

export default ModalDetails;
