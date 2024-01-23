/* eslint-disable no-unused-vars */
import * as yup from "yup";
//import ErrosForm from "../../components/ErrosForm/ErrosForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";

const schema = yup
  .object({
    fullName: yup.string().required(),
    emailUser: yup.string().required(),
    placaUser: yup.string().required(),
  })
  .required();

const EndHome = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    console.log(data);

    const { fullName, emailUser, placaUser } = data;

    const formData = {
      fullName,
      emailUser,
      placaUser,
    };

    console.log(fullName);

    fetch("http://localhost:3000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
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
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <TextField
          id="nameUser"
          label="Full Name"
          name="fullName"
          {...register("fullName")}
        />
        <TextField
          id="emailUser"
          label="Email Address"
          name="emailUser"
          {...register("emailUser")}
        />
        <TextField
          id="placaUser"
          label="Referral Code"
          name="placaUser"
          {...register("placaUser")}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default EndHome;
