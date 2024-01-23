/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import { useController } from 'react-hook-form';

const RadioForm = ({ label, value, control, register, handleTrackRadio, selectedCar, svg}) => {
  const { field } = useController({
    name: 'selectedCar',
    control,
    defaultValue: '',
  });

  return (
    <label
      className={
        selectedCar === value ? styles.boxRadio : styles.boxRadioYello
      }
    >
      <img src={svg} alt="Car Icon" />
      <input
        type="radio"
        value={value}
        {...register('selectedCar')}
        onChange={(e) => {
          field.onChange(e);
          handleTrackRadio(e);
        }}
        style={{ appearance: 'none', display: 'none' }}
        checked={selectedCar === value}
      />
      {label}
    </label>
  );
};

export default RadioForm;
