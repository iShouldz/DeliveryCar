/* eslint-disable react/prop-types */
import { FormHelperText } from "@mui/material";
import errorIcon from "../../assets/form/errorIcon.png";
import styles from './styles.module.css'

const FormHelperStyled = ({ children, error }) => {
  return (
    <div className={styles.errorDiv}>
      {children}
      <FormHelperText
        error
        sx={{
          fontSize: "16px",
        }}
      >
        {error !== undefined && <img src={errorIcon} />}
        {error}
      </FormHelperText>
    </div>
  );
};

export default FormHelperStyled;
