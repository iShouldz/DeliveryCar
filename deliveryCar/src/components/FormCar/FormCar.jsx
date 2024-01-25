/* eslint-disable no-unused-vars */
import * as yup from "yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
  Typography,
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
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import errorImage from "../../assets/errorRequest.png";
import SedanRadio from "../UI/SedanRadio/SedanRadio";
import SuvRadio from "../UI/SuvRadio/SuvRadio";
import SemiRadio from "../UI/SemiRadio/SemiRadio";
import LuxuryRadio from "../UI/LuxuryRadio/LuxuryRadio";
import errorIcon from "../../assets/form/errorIcon.png";
import FormHelperStyled from "../FormHelperStyled/FormHelperStyled";

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(/^[a-zA-Z]+ [a-zA-Z]*/, "Invalid name")
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
    switchData: yup
      .boolean()
      .transform((originalValue) => originalValue || false),
    selectedCar: yup.string().when("switchData", {
      is: true,
      then: (schema) => schema.required("Select a vehicle type"),
      otherwise: (schema) => schema.notRequired(),
    }),
  })
  .required();

const FormCar = () => {
  const [statusSwitch, setStatusSwitch] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [citySelected, setCitySelected] = useState();
  const [stateModal, setStateModal] = useState(false);
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

    let {
      fullName,
      emailUser,
      placaUser,
      selectedCar,
      country,
      city,
      switchData,
    } = data;

    if (!switchData) {
      selectedCar = "";
    }
    console.log("switch" + switchData);

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
          dispatch(carActions.handleFetching("loading"));
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setStateModal(true);
      });
  };

  const handleChangeSwitch = () => {
    setStatusSwitch((prevState) => !prevState);
  };

  const handleTrackRadio = (event) => {
    setSelectedCar(event.target.value);
  };

  const handleReload = () => {
    window.location.reload();
  };

  console.log(statusSwitch);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    if (country in jsonCountry) {
      setCity(jsonCountry[country]);
    }
  }, [country]);

  console.log(stateModal);

  return (
    <section>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className={styles.formContainer}
      >
        <FormGroup className={styles.groupContainer}>
          <FormHelperStyled error={errors?.fullName?.message}>
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
                  borderColor: "#FBA403 !important",
                  color: "white !important",
                },
                "& input": {
                  color: "white",
                },
                "& label": {
                  color: "secondary.labelColor",
                  "&.Mui-focused": {
                    color: "white",
                  },
                  "&.MuiInputLabel-shrink": {
                    color: "white",
                    "&.Mui-error": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </FormHelperStyled>

          <FormHelperStyled error={errors?.emailUser?.message}>
            <TextField
              id="emailUser"
              label="Email Address"
              name="emailUser"
              {...register("emailUser")}
              color="secondary"
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white ",
                  color: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FBA403 !important",
                  color: "white !important",
                },
                "& input": {
                  color: "white",
                },
                "& label": {
                  color: "secondary.labelColor",
                  "&.Mui-focused": {
                    color: "white",
                  },
                  "&.MuiInputLabel-shrink": {
                    color: "white",
                    "&.Mui-error": {
                      color: "red",
                    },
                  },
                },
              }}
              error={errors?.emailUser?.message !== undefined}
            />
          </FormHelperStyled>

          <FormHelperStyled error={errors?.country?.message}>
            <Autocomplete
              options={Object.keys(jsonCountry)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="country"
                  {...register("country")}
                  label="Contry"
                  error={errors?.country?.message !== undefined}
                  sx={{
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors?.country?.message ? "red" : "white !important",
                      color: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FBA403 !important",
                      color: "white !important",
                    },
                    "& input": {
                      color: "white",
                    },
                    "& label": {
                      color: "secondary.labelColor",
                      "&.Mui-focused": {
                        color: "white",
                      },
                      "&.MuiInputLabel-shrink": {
                        color: "white",
                        "&.Mui-error": {
                          color: "red !important",
                        },
                      },
                    },
                  }}
                  
                />
              )}
              value={country}
              onChange={(event, newValue) => setCountry(newValue)}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white ",
                  color: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FBA403 !important",
                  color: "white !important",
                },
                "& input": {
                  color: "white",
                },
                "& label": {
                  color: "secondary.labelColor",
                  "&.Mui-focused": {
                    color: "white",
                  },
                  "&.MuiInputLabel-shrink": {
                    color: "white",
                    "&.Mui-error": {
                      color: "red",
                    },
                  },
                },
                "&.MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "blue !important",
                  },
                },
                "&:disabled": {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white !important",
                    color: "white !important",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "gray !important",
                    color: "white !important",
                  },
                  "& input": {
                    color: "white !important",
                  },
                  "& label": {
                    color: "white !important",
                    borderColor: "white !important",
                  },

                },
              }}
            />
          </FormHelperStyled>

          <FormHelperStyled error={errors?.city?.message}>
            <Autocomplete
              options={city}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="city"
                  {...register("city")}
                  label="City"
                  error={errors?.city?.message !== undefined}
                  sx={{
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors?.city?.message ? "red" : "white !important",
                      color: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FBA403 !important",
                      color: "white !important",
                    },
                    "& input": {
                      color: "white",
                    },
                    "& label": {
                      color: "secondary.labelColor",
                      "&.Mui-focused": {
                        color: "white",
                      },
                      "&.MuiInputLabel-shrink": {
                        color: "white",
                        "&.Mui-error": {
                          color: "red !important",
                        },
                      },
                    },
                  }}
                />
              )}
              value={citySelected}
              onChange={(event, newValue) => setCitySelected(newValue)}
              getOptionLabel={(option) => option}
              disabled={country === null}
              color="primary.light"
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white ",
                  color: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FBA403 !important",
                  color: "white !important",
                },
                "& input": {
                  color: "white",
                },
                "& label": {
                  color: "secondary.labelColor",
                  "&.Mui-focused": {
                    color: "white",
                  },
                  "&.MuiInputLabel-shrink": {
                    color: "white",
                    "&.Mui-error": {
                      color: "red",
                    },
                  },
                },
                "&.MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "blue !important",
                  },
                },
                "&:disabled": {
                  color: "white",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white !important",
                    color: "white !important",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "gray !important",
                    color: "white !important",
                  },
                  "& input": {
                    color: "white !important",
                  },
                  "& label": {
                    color: "white !important",
                    borderColor: "white !important",
                  },

                },
              }}
            />
          </FormHelperStyled>

          <FormHelperStyled error={errors?.placaUser?.message}>
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
                  borderColor: "white ",
                  color: "white",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FBA403 !important",
                  color: "white !important",
                },
                "& input": {
                  color: "white",
                },
                "& label": {
                  color: "secondary.labelColor",
                  "&.Mui-focused": {
                    color: "white",
                  },
                  "&.MuiInputLabel-shrink": {
                    color: "white",
                    "&.Mui-error": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </FormHelperStyled>

          {/* <ErrosForm errors={errors?.placaUser?.message} /> */}
          <Controller
            name="switchData"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                value="start"
                control={
                  <Switch
                    {...field}
                    checked={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                      handleChangeSwitch();
                    }}
                  />
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
            )}
          />

          {statusSwitch && (
            <FormControl>
              <Typography
                variant="h6"
                sx={{ color: "secondary.main", fontWeight: "bold" }}
              >
                Select your car type
              </Typography>
              <section className={styles.radioContainer}>
                <RadioForm
                  label="Sedan"
                  value="Sedan"
                  control={control}
                  register={register}
                  handleTrackRadio={handleTrackRadio}
                  selectedCar={selectedCar}
                >
                  <SedanRadio
                    type={selectedCar === "Sedan" ? "black" : "#FBA403"}
                  />
                </RadioForm>

                <RadioForm
                  label="SUV/Van"
                  value="SUV/Van"
                  control={control}
                  register={register}
                  handleTrackRadio={handleTrackRadio}
                  selectedCar={selectedCar}
                  svg={carRadio1}
                >
                  <SuvRadio
                    type={selectedCar === "SUV/Van" ? "black" : "#FBA403"}
                  />
                </RadioForm>

                <RadioForm
                  label="Semi Luxury"
                  value="Semi Luxury"
                  control={control}
                  register={register}
                  handleTrackRadio={handleTrackRadio}
                  selectedCar={selectedCar}
                  svg={carRadio1}
                >
                  <SemiRadio
                    type={selectedCar === "Semi Luxury" ? "black" : "#FBA403"}
                  />
                </RadioForm>

                <RadioForm
                  label="Luxury Car"
                  value="Luxury Car"
                  control={control}
                  register={register}
                  handleTrackRadio={handleTrackRadio}
                  selectedCar={selectedCar}
                  svg={carRadio1}
                >
                  <LuxuryRadio
                    type={selectedCar === "Luxury Car" ? "black" : "#FBA403"}
                  />
                </RadioForm>
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

          <ModalTemplate
            open={stateModal}
            title="Houston, we have a problem"
            description="It`s a problem, i guess better you reload that POST"
            img={errorImage}
            actionButton={handleReload}
          />
        </FormGroup>
      </form>
    </section>
  );
};

export default FormCar;
