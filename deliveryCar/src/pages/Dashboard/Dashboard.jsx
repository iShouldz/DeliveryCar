import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCars } from "../../store/login/loginActions";
import { carActions } from "../../store/cars/carSlice";
import CardDriver from "../../components/CardDriver/CardDriver";
import { Typography } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const carData = useSelector((state) => state.cars.item);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataCars();
      dispatch(carActions.handleCarItem(data));
    };
    fetchData();
    setIsFetching(true);
  }, [dispatch]);

  return (
    <>
      <Typography
        variant="h2"
        color="secondary.main"
        sx={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        DashBoard
      </Typography>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {isFetching &&
          carData.map((item) => (
            <CardDriver
              key={Math.random()}
              name={item.fullName}
              city={item.city}
              country={item.country}
              email={item.emailUser}
              myCar={item.myCar !== '' ? item.selectedCar : ''}
            />
          ))}
      </section>
    </>
  );
};

export default Dashboard;
