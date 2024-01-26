import { Box, Modal, Typography } from "@mui/material";
import ButtonCar from "../UI/ButtonCar/ButtonCar";
import styles from "../../components/ModalTemplate/styles.module.css";
import { useState } from "react";
import TextFuildCar from "../UI/TextFuildCar/TextFuildCar";
import loginImg from "../../assets/login.png";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/login/loginSlice";

const LoginModal = ({ open, onClose }) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const dispatch = useDispatch()

  console.log(email, senha)

  const handleLogin = () => {
    dispatch(userActions.handleUpdateLogin());
    onClose()

  }

  return (
    <Modal open={open} className={styles.containerMain}>
      <Box className={styles.modalContainer}>
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h2"
          sx={{ color: "secondary.main", fontWeight: "bold" }}
        >
          LOGIN
        </Typography>

        <img src={loginImg} alt="Login image" />

        <TextFuildCar
          id="login"
          label="Email"
          value={email}
          onClear={setEmail}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextFuildCar
          id="senha"
          label="Password"
          value={senha}
          onClear={setSenha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <ButtonCar color="white" onClick={handleLogin}>
          Login
        </ButtonCar>
      </Box>
    </Modal>
  );
};

export default LoginModal;
