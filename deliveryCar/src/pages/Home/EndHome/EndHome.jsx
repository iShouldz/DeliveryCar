/* eslint-disable no-unused-vars */
import FormCar from "../../../components/FormCar/FormCar";
import styles from "./styles.module.css";
import carForm from "../../../assets/form/CarFormImage.svg";
import { useState } from "react";
import Loading from "../../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { carActions } from "../../../store/cars/carSlice";
import SucessScreen from "../../../components/SucessScreen/SucessScreen";
import FormHeader from "../../../components/FormHeader/FormHeader";

const EndHome = () => {
  const [fetching, setFetching] = useState(false);
  const fetchStatus = useSelector((state) => state.cars.fetching);
  const dispatch = useDispatch();

  console.log(fetchStatus);

  return (
    <section className={styles.containerMain}>
      <div className={styles.formContainer}>
        {fetchStatus === "success" ? (
          <SucessScreen />
        ) : fetchStatus === "form" ? (
          <>
            <FormHeader />
            <FormCar />
          </>
        ) : fetchStatus === "loading" ? (
          <Loading />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default EndHome;
