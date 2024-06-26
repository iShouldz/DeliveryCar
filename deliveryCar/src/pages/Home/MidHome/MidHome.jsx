//Components
import CardComponent from "../../../components/CardComponent/CardComponent";

//Assets
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";
import car4 from "../../../assets/car4.png";

//CSS
import styles from "./styles.module.css";
import { Typography } from "@mui/material";

const MidHome = () => {
  return (
    <section>
      <div className={styles.textContainer}>
        <Typography
          
          sx={{ textTransform: "uppercase", color: "secondary.main", fontSize: '26px'}}
        >
          Why should you ride with us?
        </Typography>
        <Typography
          
          sx={{ color: "primary.light", fontWeight: "bold", fontSize: '45px' }}
        >
          Best in class rides
        </Typography>
      </div>

      <section className={styles.cardContainer}>
        <CardComponent
          img={car1}
          title={"Basic"}
          alt="A basic car"
          description={
            "The best balance of price and comfort. You will not go wrong with our basic rides."
          }
        />

        <CardComponent
          img={car2}
          title={"Comfort"}
          alt="A comfort car"
          description={
            "If comfort is your priority, this is the ride for you. It’s spacious and packed with features."
          }
        />

        <CardComponent
          img={car3}
          title={"Business"}
          alt="A business car"
          description={
            "Do you want to travel around the city in style? Make sure to select or business class rides."
          }
        />

        <CardComponent
          img={car4}
          title={"Deluxe"}
          alt="A Deluxe car"
          description={
            "The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for."
          }
        />
      </section>
    </section>
  );
};

export default MidHome;
