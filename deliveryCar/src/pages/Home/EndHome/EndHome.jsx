/* eslint-disable no-unused-vars */
import FormCar from "../../../components/FormCar/FormCar";
import styles from "./styles.module.css";
import carForm from "../../../assets/form/CarFormImage.svg";
const EndHome = () => {
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
        
        <FormCar />
      </div>
    </section>
  );
};

export default EndHome;
