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

export { getDataCars }