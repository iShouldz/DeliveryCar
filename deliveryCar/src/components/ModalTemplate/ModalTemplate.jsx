/* eslint-disable react/prop-types */
import { Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./styles.module.css";
import ButtonCar from "../UI/ButtonCar/ButtonCar";

const ModalTemplate = ({ open, title, description, img, actionButton }) => {
  return (
    <Modal open={open} className={styles.containerMain}>
      <Box className={styles.modalContainer}>
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h2"
          sx={{ color: "secondary.main", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography id="modal-modal-description">{description}</Typography>
        <img src={img} />

        <ButtonCar color="white" onClick={actionButton}>
          Reload page
        </ButtonCar>
      </Box>
    </Modal>
  );
};

export default ModalTemplate;
