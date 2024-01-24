import { CircularProgress } from "@mui/material";
import { carActions } from "../../store/cars/carSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Loading = () => {
  const dispatch = useDispatch();
  const [dataGet, setDataGet] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/cars/1");
      const data = await res.json();
      console.log(data);
      setDataGet(data)
      dispatch(carActions.handleCarItem(data))
      dispatch(carActions.handleFetching("sucess"))
    }

    fetchData()
  }, []);

  return (
    <section>
      <h1>Aguarde</h1>
      <CircularProgress color="success" />
    </section>
  );
};

export default Loading;
