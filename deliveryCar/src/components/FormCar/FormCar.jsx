/* eslint-disable no-unused-vars */
import * as yup from "yup";
//import ErrosForm from "../../components/ErrosForm/ErrosForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
// import { ReactComponent as CustomRadioIcon } from '../../assets/form/Card Image.svg'
import styles from "./styles.module.css";
import carRadio1 from "../../assets/form/Card Image.svg";
import RadioForm from "../../components/RadioForm/RadioForm";

const schema = yup
  .object({
    fullName: yup.string().required(),
    emailUser: yup.string().required(),
    placaUser: yup.string().required(),
  })
  .required();

const FormCar = () => {
  const [statusSwitch, setStatusSwitch] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    console.log(data);

    const { fullName, emailUser, placaUser, selectedCar } = data;

    const formData = {
      fullName,
      emailUser,
      placaUser,
      selectedCar,
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

  const handleChangeSwitch = () => {
    setStatusSwitch((prevState) => !prevState);
  };

  const handleTrackRadio = (event) => {
    setSelectedCar(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup>
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

          <FormControlLabel
            control={
              <Switch checked={statusSwitch} onChange={handleChangeSwitch} />
            }
            label="I drive my own car"
          />

          {statusSwitch && (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Select your car type
              </FormLabel>
              <section className={styles.radioContainer}>
                <RadioForm
                  label="Sedan"
                  value="Sedan"
                  control={control}
                  register={register}
                  handleTrackRadio={handleTrackRadio}
                  selectedCar={selectedCar}
                  svg={carRadio1}
                />

                <RadioForm
                  label="SUV/Van"
                  value="SUV/Van"
                  control={control}
                  register={register}
                  handleTrackRadio={handleTrackRadio}
                  selectedCar={selectedCar}
                  svg={carRadio1}
                />

                <RadioForm
                  label="Semi Luxury"
                  value="Semi Luxury"
                  control={control}
                  register={register}
                  handleTrackRadio={handleTrackRadio}
                  selectedCar={selectedCar}
                  svg={carRadio1}
                />

                <RadioForm
                  label="Luxury Car"
                  value="Luxury Car"
                  control={control}
                  register={register}
                  handleTrackRadio={handleTrackRadio}
                  selectedCar={selectedCar}
                  svg={carRadio1}
                />
              </section>
            </FormControl>
          )}
        </FormGroup>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default FormCar;
