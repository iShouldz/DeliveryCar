/* eslint-disable no-unused-vars */
import * as yup from "yup";
//import ErrosForm from "../../components/ErrosForm/ErrosForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import FormCar from "../../../components/FormCar/FormCar";

const schema = yup
  .object({
    fullName: yup.string().required(),
    emailUser: yup.string().required(),
    placaUser: yup.string().required(),
  })
  .required();

const EndHome = () => {
  return (
    <>
        <h1>Form</h1>
        <FormCar />
    </>
  )
};

export default EndHome;
