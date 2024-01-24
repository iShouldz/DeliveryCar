import { CircularProgress, Typography } from "@mui/material";
import { carActions } from "../../store/cars/carSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import carLoading from "../../assets/loadingCar.png";
import lampada from "../../assets/lampada.png";

const Loading = () => {
  const dispatch = useDispatch();
  const [tipMensage, setTipMensage] = useState(0);
  const TIPS_ARRAY = [
    "We offer the best services on the world, my cat say that! :)",
    "Our next step is change drivers to dogs!",
    "Our cars are like pizza delivery – they always come hot!",
    "We guarantee the fastest rides, unless your grandma is behind the wheel.",
    "Our drivers are so good, they don't need GPS; they use their sixth sense!",
  ];

  useEffect(() => {
    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    };
    preloadImage(carLoading)
      .then(() => {
        fetchData();
      })
  }, []); 

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/cars/");
      const data = await res.json();
      console.log(data);
      dispatch(carActions.handleCarItem(data));
    //   dispatch(carActions.handleFetching("success"));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTipMensage((prevIndex) =>
        prevIndex === TIPS_ARRAY.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.loadingContent}>
      <Typography
        variant="h3"
        sx={{ color: "secondary.main", fontWeight: "bold" }}
      >
        Please wait, we are processing your request
      </Typography>
      <Typography sx={{ marginTop: "20px" }}>
        We are happy that you are joining us 😁{" "}
      </Typography>

      <img src={carLoading} />

      <CircularProgress color="secondary" size={50} />

      <article id={styles.tips}>
        <img src={lampada} />
        <Typography>{TIPS_ARRAY[tipMensage]}</Typography>
      </article>
    </section>
  );
};

export default Loading;
