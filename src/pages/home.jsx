import Herobanner from "../Components/Herobanner/Herobanner";
import LodgingCard from "../Components/Lodging/LodgingCard";
import Loader from "../Components/Loader/Loader";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({
    data: undefined,
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    // Fetch the data from the json file

    fetch("./src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData({ data: data, loading: false });
      })
      .catch((err) => {
        setData({ data: undefined, loading: false });
        console.log(err);
      });
  }, []);

  // display loader while data is not fetched then display the lodgings cards
  return (
    <main>
      <Herobanner img="falaises" title="Chez vous, partout et ailleurs" />
      <section className="lodgings">
        {!data.loading ? (
          data.data.map((lodging) => (
            <LodgingCard data={lodging} key={lodging.id} />
          ))
        ) : (
          <Loader />
        )}
      </section>
    </main>
  );
};

export default Home;
