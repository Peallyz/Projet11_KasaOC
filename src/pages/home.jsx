import PropTypes from "prop-types";
import Herobanner from "../Components/Herobanner/Herobanner";
import LodgingCard from "../Components/LodgingCard/LodgingCard";

const Home = ({ data }) => {
  Home.propTypes = {
    data: PropTypes.array.isRequired,
  };
  console.log(data);

  return (
    <main>
      <Herobanner img="falaises" title="Chez vous, partout et ailleurs" />
      <section className="lodgings">
        {data ? (
          data.map((lodging) => <LodgingCard data={lodging} key={lodging.id} />)
        ) : (
          <h2>
            Il n&apos;y a pas d&apos;hebergements disponibles, revenez plus tard
            pour les découvrir
          </h2>
        )}
      </section>
    </main>
  );
};

export default Home;
