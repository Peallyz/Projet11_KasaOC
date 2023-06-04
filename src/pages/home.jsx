import PropTypes from "prop-types";
import Herobanner from "../Components/Herobanner/Herobanner";
import LodgingCard from "../Components/Lodging/LodgingCard";
import Loader from "../Components/Loader/Loader";

const Home = ({ data }) => {
  Home.propTypes = {
    data: PropTypes.array.isRequired,
  };

  return (
    <main>
      <Herobanner img="falaises" title="Chez vous, partout et ailleurs" />
      <section className="lodgings">
        {data ? (
          data.map((lodging) => <LodgingCard data={lodging} key={lodging.id} />)
        ) : (
          <Loader />
        )}
      </section>
    </main>
  );
};

export default Home;
