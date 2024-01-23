/* eslint-disable no-unused-vars */
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import jsonCountry from "../../utils/countries-and-cities.json";
import styles from "./styles.module.css";
import carRadio1 from "../../assets/form/Card Image.svg";
import RadioForm from "../../components/RadioForm/RadioForm";
import ErrosForm from "../ErrosForm/ErrosForm";

const schema = yup
  .object({
    fullName: yup.string().min(5).required(),
    emailUser: yup.string().required(),
    placaUser: yup.string().required(),
    selectedCar: yup.string().required(),
    country: yup.string().required()
  })
  .required();

const FormCar = () => {
  const [statusSwitch, setStatusSwitch] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [citySelected, setCitySelected] = useState();

  console.log(country);

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

    const { fullName, emailUser, placaUser, selectedCar, country, city } = data;

    const formData = {
      fullName,
      emailUser,
      placaUser,
      selectedCar,
      country,
      city,
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

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    if (country in jsonCountry) {
      setCity(jsonCountry[country]);
    }
  }, [country]);

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

          <ErrosForm errors={errors?.fullName?.message} />

          <TextField
            id="emailUser"
            label="Email Address"
            name="emailUser"
            {...register("emailUser")}
          />

          <ErrosForm errors={errors?.emailUser?.message} />

          <TextField
            id="placaUser"
            label="Referral Code"
            name="placaUser"
            {...register("placaUser")}
          />

          <ErrosForm errors={errors?.placaUser?.message} />

          <Autocomplete
            options={Object.keys(jsonCountry)}
            renderInput={(params) => (
              <TextField
                {...params}
                name="country"
                {...register("country")}
                label="Contry"
              />
            )}
            value={country}
            onChange={(event, newValue) => setCountry(newValue)}
          />

          <ErrosForm errors={errors?.placaUser?.message} />

          <Autocomplete
            options={city}
            renderInput={(params) => (
              <TextField
                {...params}
                name="city"
                {...register("city")}
                label="City"
              />
            )}
            value={citySelected}
            onChange={(event, newValue) => setCitySelected(newValue)}
            getOptionLabel={(option) => option}
            disabled={country === null}
          />

          <ErrosForm errors={errors?.placaUser?.message} />
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
