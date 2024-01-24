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
import TextFuildCar from "../UI/TextFuildCar/TextFuildCar";
import ButtonCar from "../UI/ButtonCar/ButtonCar";
import carForm from "../../assets/form/CarFormImage.svg";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { carActions } from "../../store/cars/carSlice";

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "Required a full name")
      .required(),
    emailUser: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Email not valid"
      )
      .required("Email required"),
    placaUser: yup
      .string()
      .matches(/^[a-zA-Z]{3}-\d{3}$/, "Invalid refferal")
      .required(),
    country: yup.string().required(),
    city: yup.string().required(),
    // selectedCar: yup.string().when("statusSwitch", {
    //   is: false,
    //   then: (schema) => schema.required("Select your car type"),
    //   otherwise: (schema) => schema.notRequired()
    // }),
  })
  .required();

const FormCar = () => {
  const [statusSwitch, setStatusSwitch] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [citySelected, setCitySelected] = useState();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm({ resolver: yupResolver(schema) });
  console.log(errors);
  const handleSubmitForm = (data) => {
    console.log(data);
    console.log(errors);

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

      dispatch(carActions.handleFetching('loading'))
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
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className={styles.formContainer}
      >
        <FormGroup className={styles.groupContainer}>
          <TextField
            id="nameUser"
            label="Full Name"
            name="fullName"
            {...register("fullName")}
            error={errors?.fullName?.message !== undefined}
            color="secondary"
            sx={{
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
              "& input": {
                color: "white",
              },
              "& label": {
                color: "white",
              },
            }}
          />

          <ErrosForm errors={errors?.fullName?.message} />

          <TextField
            id="emailUser"
            label="Email Address"
            name="emailUser"
            {...register("emailUser")}
            color="secondary"
            sx={{
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
              "& input": {
                color: "white",
              },
              "& label": {
                color: "white",
              },
            }}
            error={errors?.emailUser?.message !== undefined}
          />

          <ErrosForm errors={errors?.emailUser?.message} />

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
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
            }}
            error={errors?.country?.message !== undefined}
          />

          <ErrosForm errors={errors?.country?.message} />

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
            color="primary.light"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
              "&hover": {
                color: "primary.light",
              },
            }}
            error={errors?.city?.message !== undefined}
          />

          <ErrosForm errors={errors?.city?.message} />

          <TextField
            id="placaUser"
            label="Referral Code"
            name="placaUser"
            {...register("placaUser")}
            error={errors?.placaUser?.message !== undefined}
            color="secondary"
            sx={{
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
                color: "white",
              },
              "& input": {
                color: "white",
              },
              "& label": {
                color: "white",
              },
            }}
          />

          <ErrosForm errors={errors?.placaUser?.message} />

          <FormControlLabel
            value="start"
            control={
              <Switch checked={statusSwitch} onChange={handleChangeSwitch} />
            }
            label="I drive my own car"
            labelPlacement="start"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: 0,
              "& .MuiSwitch-switchBase": {
                "&.Mui-checked": {
                  color: "#fff",
                  "& + .MuiSwitch-track": {
                    opacity: 0.3,
                    backgroundColor: "secondary.main",
                  },
                },
              },
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "secondary.main",
              },
              "& .MuiFormControlLabel-label": {
                color: "white",
              },
            }}
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

              <ErrosForm errors={errors?.selectedCar?.message} />
            </FormControl>
          )}
          <ButtonCar
            type="submit"
            variant="contained"
            id={styles.buttonForm}
            color="primary.light"
          >
            Submit
          </ButtonCar>
        </FormGroup>
      </form>
    </section>
  );
};

export default FormCar;
