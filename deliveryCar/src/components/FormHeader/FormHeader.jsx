import styles from './styles.module.css'
import carForm from '../../assets/form/CarFormImage.svg'

const FormHeader = () => {
  return (
    <section className={styles.headerForm}>
      <img src={carForm} />
      <article id={styles.headerContent}>
        <h2>Drive with MyRide</h2>
        <p>
          Register as a driver using the form below. Our team will assess and
          get back to you within 48 hours.
        </p>
      </article>
    </section>
  );
};

export default FormHeader;
