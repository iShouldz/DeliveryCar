/* eslint-disable no-unused-vars */
import FormCar from "../../../components/FormCar/FormCar";
import styles from "./styles.module.css";
import carForm from "../../../assets/form/CarFormImage.svg";
import { useState } from "react";
import Loading from "../../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { carActions } from "../../../store/cars/carSlice";
import SucessScreen from "../../../components/SucessScreen/SucessScreen";

const EndHome = () => {
  const [fetching, setFetching] = useState(false);
  const fetchStatus = useSelector((state) => state.cars.fetching);
  const dispatch = useDispatch();

  console.log(fetchStatus);

  return (
    <section className={styles.containerMain}>
      <div className={styles.formContainer}>
        <section className={styles.headerForm}>
          <img src={carForm} />
          <article id={styles.headerContent}>
            <h2>Drive with MyRide</h2>
            <p>
              Register as a driver using the form below. Our team will assess
              and get back to you within 48 hours.
            </p>
          </article>
        </section>
        {fetchStatus === "sucess" ? (
          <SucessScreen />
        ) : fetchStatus === "form" ? (
          <FormCar />
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
