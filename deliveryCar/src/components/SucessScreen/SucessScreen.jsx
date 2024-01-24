import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SucessScreen = () => {
  const [dataGet, setDataGet] = useState([]);
  const fetchStatus = useSelector((state) => state.cars.fetching);
  const fetchItem = useSelector((state) => state.cars.item);

  console.log(fetchItem)
  return (
    <section>
      <h1>Sucess!</h1>

      {/* {dataGet.map((item) => (
        <p key={item.id}>{item.fullName}</p>
      ))} */}
    </section>
  );
};

export default SucessScreen;
