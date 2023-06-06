import PropTypes from "prop-types";
import Herobanner from "../Components/Herobanner/Herobanner";
import LodgingCard from "../Components/Lodging/LodgingCard";
import Loader from "../Components/Loader/Loader";
import { useEffect, useState } from "react";

const Home = ({ data, loading }) => {
  Home.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool.isRequired,
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);
  // display loader while data is not fetched then display the lodgings cards
  return (
    <main>
      <Herobanner img="falaises" title="Chez vous, partout et ailleurs" />
      <section className="lodgings">
        {!isLoading ? (
          data.map((lodging) => <LodgingCard data={lodging} key={lodging.id} />)
        ) : (
          <Loader />
        )}
      </section>
    </main>
  );
};

export default Home;
