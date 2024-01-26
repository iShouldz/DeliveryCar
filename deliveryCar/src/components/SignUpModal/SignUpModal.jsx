import { Box, Modal, Typography } from "@mui/material";
import ButtonCar from "../UI/ButtonCar/ButtonCar";
import styles from "../../components/ModalTemplate/styles.module.css";
import { useState } from "react";
import TextFuildCar from "../UI/TextFuildCar/TextFuildCar";
import cadastroImg from "../../assets/cadastro.png";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/login/loginSlice";

const SignUpModal = ({ open, onClose }) => {
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
          data-testid="signup"
        >
          SIGN UP
        </Typography>

        <img src={cadastroImg} alt="Cadastro image" />

        <TextFuildCar
          id="email"
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

        <ButtonCar color="white" onClick={handleLogin }>
          SIGN UP
        </ButtonCar>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
