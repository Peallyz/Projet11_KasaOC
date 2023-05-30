import PropTypes from "prop-types";

const Home = ({ data }) => {
  Home.propTypes = {
    data: PropTypes.array.isRequired,
  };

  console.log(data);

  return <div>Acceuil</div>;
};

export default Home;
