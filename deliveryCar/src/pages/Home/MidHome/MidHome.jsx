import CardComponent from "../../../components/CardComponent/CardComponent";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";
import car4 from "../../../assets/car4.png";

const MidHome = () => {
  return (
    <div>
      <CardComponent
        img={car1}
        title={"Basic"}
        description={
          "The best balance of price and comfort. You will not go wrong with our basic rides."
        }
      />

      <CardComponent
        img={car2}
        title={"Comfort"}
        description={
          "If comfort is your priority, this is the ride for you. It’s spacious and packed with features."
        }
      />

      <CardComponent
        img={car3}
        title={"Business"}
        description={
          "Do you want to travel around the city in style? Make sure to select or business class rides."
        }
      />

      <CardComponent
        img={car4}
        title={"Deluxe"}
        description={
          "The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for."
        }
      />
    </div>
  );
};

export default MidHome;
