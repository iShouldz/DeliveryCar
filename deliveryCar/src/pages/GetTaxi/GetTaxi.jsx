import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormHelperStyled from "../../components/FormHelperStyled/FormHelperStyled";
import jsonCountry from "../../utils/countries-and-cities.json";
import jsonCountryDestiny from "../../utils/countries-and-cities.json";
import { getDistance } from "geolib";

const schema = yup
  .object({
    country: yup.string().required(),
    city: yup.string().required(),
    countryDestination: yup.string().required(),
    cityDestination: yup.string().required(),
  })
  .required();

const GetTaxi = () => {
  const [coordsOrigin, setCoordsOrigin] = useState(null);
  const [coordsDestination, setCoordsDestination] = useState(null);
  const [endereco1, setEndereco1] = useState("Feira Nova, Brazil");
  const [endereco2, setEndereco2] = useState("Abreu e lima, Brazil");
  const [KmDistance, setKmDistance] = useState("");

  const [country, setCountry] = useState(null);
  const [countryD, setCountryD] = useState(null);
  const [city, setCity] = useState(null);
  const [cityArray, setCityArray] = useState();
  const [cityDestiny, setCityDestiny] = useState();
  const [citySelected, setCitySelected] = useState();

  useEffect(() => {
    const obterCoordenadas = async () => {
      const origin = await obterCoordenadasOSM(endereco1);
      console.log(origin);
      setCoordsOrigin(origin);

      const destination = await obterCoordenadasOSM(endereco2);
      console.log(destination);
      setCoordsDestination(destination);
    };

    obterCoordenadas();

    if (coordsOrigin !== null && coordsDestination !== null) {
      console.log("aqui", coordsOrigin);

      //       const distance = geolib.getDistance(
      //   { latitude: -34.6037, longitude: -58.3816 },
      //   { latitude: 40.7128, longitude: -74.0060 }
      // )
      const distance = haversineDistance(
        coordsOrigin.latitude,
        coordsOrigin.longitude,
        coordsDestination.latitude,
        coordsDestination.longitude
      );

      const finalDistance = distance.toFixed(2);
      setKmDistance(`Distância entre os pontos: ${finalDistance} km`);
    }
  }, [endereco1, endereco2]);

  useEffect(() => {
    if (country in jsonCountry) {
      setCity(jsonCountry[country]);
    }
  }, [country]);

  useEffect(() => {
    if (countryD in jsonCountryDestiny) {
      setCityArray(jsonCountryDestiny[countryD]);
    }
  }, [countryD]);

  console.log(KmDistance);

  const obterCoordenadasOSM = useCallback(async (endereco) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search`,
        {
          params: {
            format: "json",
            q: endereco,
          },
        }
      );

      console.log("requesting to ", endereco);

      if (response.data.length > 0) {
        console.log("obtido");
        const latitude = parseFloat(response.data[0].lat);
        const longitude = parseFloat(response.data[0].lon);
        return { latitude, longitude };
      } else {
        console.error("Nenhum resultado encontrado para o endereço fornecido.");
        return null;
      }
    } catch (error) {
      console.error("Erro ao obter coordenadas:", error.message);
      return null;
    }
  }, []);

  function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const handleSubmitDistance = (data) => {
    console.log(data);

    const origin = data.city.concat(" ", data.country);
    const destination = data.cityDestination.concat(
      " ",
      data.countryDestination
    );

    // console.log(origin)
    setEndereco1(origin);
    setEndereco2(destination);
    console.log(endereco1);
    console.log(endereco2);
    setValue("city", "");
    setValue("country", "");
    setCityDestiny();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          color: "secondary.main",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Getting a taxi
      </Typography>

      <Box sx={{}}>
        <form
          onSubmit={handleSubmit(handleSubmitDistance)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "80px",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <Typography
                variant="h5"
                sx={{
                  color: "secondary.main",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Select your location
              </Typography>
              <FormHelperStyled error={errors?.country?.message}>
                <Autocomplete
                  options={Object.keys(jsonCountry)}
                  renderInput={(params) => (
                    <TextField
                      id="country-field"
                      {...params}
                      name="country"
                      {...register("country")}
                      label="Country"
                      error={errors?.country?.message !== undefined}
                      sx={{
                        "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
                          fill: errors?.country?.message ? "red" : "white",
                        },
                        "&:focus-within .MuiAutocomplete-endAdornment .MuiSvgIcon-root":
                          {
                            fill: errors?.country?.message ? "red" : "#FBA403",
                          },
                        color: "white",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors?.country?.message
                            ? "red"
                            : "white !important",
                          color: "white",
                        },
                        "&:focus .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors?.country?.message
                            ? "red"
                            : !errors?.country?.message && !country === null
                            ? "white"
                            : "#FBA403 !important",
                          color: "white",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FBA403 !important",
                          color: "white !important",
                        },
                        "& input": {
                          color: "white",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: errors?.country?.message
                              ? "red"
                              : "blue !important",
                            color: "white",
                          },
                        },
                        "& label": {
                          color: "secondary.labelColor",
                          "&.Mui-focused": {
                            color: "white",
                          },
                          "&.MuiInputLabel-shrink": {
                            color: "white",
                            "&.Mui-focused": {
                              color: "#FBA403",
                            },
                            "&.Mui-error": {
                              color: "red",
                            },
                          },
                        },
                      }}
                    />
                  )}
                  value={country}
                  onChange={(event, newValue) => setCountry(newValue)}
                  sx={{
                    width: "400px",
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
                      id="city-field"
                      {...params}
                      name="city"
                      {...register("city")}
                      label="City"
                      error={errors?.city?.message !== undefined}
                      sx={{
                        "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
                          fill: errors?.city?.message
                            ? "red"
                            : !errors?.city?.message && !country === null
                            ? "white"
                            : "gray",
                        },
                        "&:focus-within .MuiAutocomplete-endAdornment .MuiSvgIcon-root":
                          {
                            fill: errors?.city?.message ? "red" : "#FBA403",
                          },
                        "& .MuiFormLabel-root.MuiInputLabel-root.Mui-disabled":
                          {
                            color: !errors?.city?.message
                              ? "#666666DE !important"
                              : "#d32f2f",
                          },
                        "& .css-ko2p5j-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: errors?.city?.message
                              ? "red !important"
                              : "#666666DE !important",
                          },
                        color: "white",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors?.city?.message
                            ? "red"
                            : "#666666 !important",
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
                          color: "secondary.light",
                          "&.Mui-focused": {
                            color: "white",
                          },
                          "&.MuiInputLabel-shrink": {
                            color: "white",
                            "&.Mui-focused": {
                              color: "#FBA403",
                            },
                            "&.Mui-error": {
                              color: "red",
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
                        "&.Mui-focused": {
                          color: "#FBA403",
                        },
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
                      "&.MuiInputBase-root.Mui-disabled": {
                        "& label": {
                          color: "blue !important",
                        },
                      },
                    },
                  }}
                />
              </FormHelperStyled>
            </div>

            <div>
              <Typography
                variant="h5"
                sx={{
                  color: "secondary.main",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Select your destination
              </Typography>
              <FormHelperStyled error={errors?.country?.message}>
                <Autocomplete
                  options={Object.keys(jsonCountryDestiny)}
                  renderInput={(params) => (
                    <TextField
                      id="country-field"
                      {...params}
                      name="countryDestination"
                      {...register("countryDestination")}
                      label="Country"
                      error={errors?.country?.message !== undefined}
                      sx={{
                        "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
                          fill: errors?.country?.message ? "red" : "white",
                        },
                        "&:focus-within .MuiAutocomplete-endAdornment .MuiSvgIcon-root":
                          {
                            fill: errors?.country?.message ? "red" : "#FBA403",
                          },
                        color: "white",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors?.country?.message
                            ? "red"
                            : "white !important",
                          color: "white",
                        },
                        "&:focus .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors?.country?.message
                            ? "red"
                            : !errors?.country?.message && !country === null
                            ? "white"
                            : "#FBA403 !important",
                          color: "white",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FBA403 !important",
                          color: "white !important",
                        },
                        "& input": {
                          color: "white",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: errors?.country?.message
                              ? "red"
                              : "blue !important",
                            color: "white",
                          },
                        },
                        "& label": {
                          color: "secondary.labelColor",
                          "&.Mui-focused": {
                            color: "white",
                          },
                          "&.MuiInputLabel-shrink": {
                            color: "white",
                            "&.Mui-focused": {
                              color: "#FBA403",
                            },
                            "&.Mui-error": {
                              color: "red",
                            },
                          },
                        },
                      }}
                    />
                  )}
                  value={countryD}
                  onChange={(event, newValue) => setCountryD(newValue)}
                  sx={{
                    width: "400px",
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
                  options={cityArray}
                  renderInput={(params) => (
                    <TextField
                      id="city-field"
                      {...params}
                      name="cityDestination"
                      {...register("cityDestination")}
                      label="City"
                      error={errors?.city?.message !== undefined}
                      sx={{
                        "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
                          fill: errors?.city?.message
                            ? "red"
                            : !errors?.city?.message && !country === null
                            ? "white"
                            : "gray",
                        },
                        "&:focus-within .MuiAutocomplete-endAdornment .MuiSvgIcon-root":
                          {
                            fill: errors?.city?.message ? "red" : "#FBA403",
                          },
                        "& .MuiFormLabel-root.MuiInputLabel-root.Mui-disabled":
                          {
                            color: !errors?.city?.message
                              ? "#666666DE !important"
                              : "#d32f2f",
                          },
                        "& .css-ko2p5j-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: errors?.city?.message
                              ? "red !important"
                              : "#666666DE !important",
                          },
                        color: "white",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: errors?.city?.message
                            ? "red"
                            : "#666666 !important",
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
                          color: "secondary.light",
                          "&.Mui-focused": {
                            color: "white",
                          },
                          "&.MuiInputLabel-shrink": {
                            color: "white",
                            "&.Mui-focused": {
                              color: "#FBA403",
                            },
                            "&.Mui-error": {
                              color: "red",
                            },
                          },
                        },
                      }}
                    />
                  )}
                  value={cityDestiny}
                  onChange={(event, newValue) => setCityDestiny(newValue)}
                  getOptionLabel={(option) => option}
                  disabled={countryD === null}
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
                        "&.Mui-focused": {
                          color: "#FBA403",
                        },
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
                      "&.MuiInputBase-root.Mui-disabled": {
                        "& label": {
                          color: "blue !important",
                        },
                      },
                    },
                  }}
                />
              </FormHelperStyled>
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                width: "200px",
                height: "60px",
                color: "black",
                backgroundColor: "secondary.main",
              }}
              type="submit"
            >
              See price
            </Button>
          </div>
        </form>
      </Box>

      {KmDistance !== "" && (
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          {KmDistance}
        </Typography>
      )}
    </div>
  );
};

export default GetTaxi;
