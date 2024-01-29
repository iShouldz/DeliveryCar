import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import ButtonCar from "../UI/ButtonCar/ButtonCar";
import styles from "../../components/ModalTemplate/styles.module.css";
import { useState } from "react";
import TextFuildCar from "../UI/TextFuildCar/TextFuildCar";
import cadastroImg from "../../assets/cadastro.png";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    emailUser: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Email not valid"
      )
      .required("Email required"),
    senha: yup.string().min(5).required(),
  })
  .required();

const SignUpModal = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    // dispatch(userActions.handleUpdateLogin());\
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.id) {
          console.log("Form submitted successfully");
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });

    onClose();
  };

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
        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            id="email"
            label="Email"

            // onClear={setEmail}
            // onChange={(event) => setEmail(event.target.value)}
            {...register("emailUser")}
          />

          <TextField
            id="senha"

            // onClear={setSenha}
            // onChange={(event) => setSenha(event.target.value)}
            {...register("senha")}
          />

          <Button type="submit" variant="contained">
            SIGN UP
          </Button>

          <Button onClick={onClose} variant="contained">
            Close
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
