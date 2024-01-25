/* eslint-disable react/prop-types */
import { Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../../components/ModalTemplate/styles.module.css";
import FormHelperStyled from "../FormHelperStyled/FormHelperStyled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { carActions } from "../../store/cars/carSlice";
import { useDispatch } from "react-redux";
import updateCar from "../../assets/updateCar.png";
import ButtonCar from "../UI/ButtonCar/ButtonCar";
const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "Invalid name")
      .required(),
    placaUser: yup
      .string()
      .matches(/^[a-zA-Z]{3}-\d{3}$/, "Invalid refferal")
      .required(),
  })
  .required();

const ModalUpdate = ({ open, title, description, id, oldData, onClose }) => {
  const dispatch = useDispatch();

  const handleUpdate = (data) => {
    const { fullName, placaUser } = data;
    console.log(fullName, placaUser);
    editCar(id, { fullName, placaUser, ...oldData });
  };

  const editCar = async (id, novosDados) => {
    const url = `http://localhost:3000/cars/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novosDados),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Erro ao editar dados: ${response.statusText}`);
      }

      const dadosAtualizados = await response.json();
      console.log("Dados atualizados:", dadosAtualizados);
      dispatch(carActions.handleFetching("loading"));
    } catch (error) {
      console.error("Erro na requisição:", error.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  console.log(errors);
  return (
    <Modal open={open} onClose={onClose} className={styles.containerMain}>
      <Box className={styles.modalContainer}>
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h2"
          sx={{ color: "secondary.main", fontWeight: "bold" }}
        >
          {title}
        </Typography>

        <Typography id="modal-modal-description">{description}</Typography>

        <img src={updateCar} />

        <form onSubmit={handleSubmit(handleUpdate)}>
          <section
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
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
          </section>

          <ButtonCar type="submit" style={{ marginTop: "20px", marginRight: '20px'}}>
            Update my data
          </ButtonCar>
          <ButtonCar onClick={onClose} style={{ marginTop: "20px"}}>Close</ButtonCar>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalUpdate;
