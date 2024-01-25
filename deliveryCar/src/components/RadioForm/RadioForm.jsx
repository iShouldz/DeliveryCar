/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import { useController } from "react-hook-form";

const RadioForm = ({
  label,
  value,
  control,
  register,
  handleTrackRadio,
  selectedCar,
  children,
}) => {
  const { field } = useController({
    name: "selectedCar",
    control,
    defaultValue: "",
  });

  const handleClick = () => {
    field.onChange({ target: { value } });
    handleTrackRadio({ target: { value } });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <label
      className={selectedCar === value ? styles.boxRadio : styles.boxRadioYello}
      tabIndex="0"  
      onClick={handleClick}  
      onKeyPress={handleKeyPress}  
    >
      {children}
      <input
        type="radio"
        value={value}
        {...register("selectedCar")}
        aria-labelledby={`${value}-label`}
        onChange={(e) => {
          field.onChange(e);
          handleTrackRadio(e);
        }}
        style={{ appearance: "none", display: "none" }}
        checked={selectedCar === value}
      />
      {label}
    </label>
  );
};

export default RadioForm;
