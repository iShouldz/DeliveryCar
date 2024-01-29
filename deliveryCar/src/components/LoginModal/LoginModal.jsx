/* eslint-disable react/prop-types */
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import ButtonCar from "../UI/ButtonCar/ButtonCar";
import styles from "../../components/ModalTemplate/styles.module.css";
import { useState } from "react";
import TextFuildCar from "../UI/TextFuildCar/TextFuildCar";
import loginImg from "../../assets/login.png";
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

const LoginModal = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    // dispatch(userActions.handleUpdateLogin());

    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.emailUser === data.emailUser && user.senha === data.senha
      );

      console.log(user);

      if (user) {
        dispatch(userActions.handleUpdateLogin());
        onClose();
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm({ resolver: yupResolver(schema) });

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

        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField id="email" label="Email" {...register("emailUser")} />

          <TextField id="senha" label="Password" {...register("senha")} />

          <Button type="submit" variant="contained">
            LOGIN
          </Button>

          <Button onClick={onClose} variant="contained">
            Close
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
