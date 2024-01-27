async function getDataCars() {
    const fetchData = async () => {
        try {
            const res = await fetch("http://localhost:3000/cars/");
            const data = await res.json();
            return data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const carData = await fetchData()
    return carData
}

const deleteCar = async (carId) => {
    try {
      const response = await fetch(`http://localhost:3000/cars/${carId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(`Car with id ${carId} deleted successfully`);
      } else {
        console.error(`Failed to delete car with id ${carId}`);
      }
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

export { getDataCars, deleteCar }