import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import LodgingDescription from "../Components/Lodging/LodgingDescription";

const Lodging = ({ data }) => {
  Lodging.propTypes = {
    data: PropTypes.array.isRequired,
  };

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    setCurrentData(
      data.find(
        (lodging) => lodging.id === window.location.pathname.split("/")[1]
      )
    );
  }, [currentData, data]);

  return (
    <main className="lodging">
      {currentData ? (
        <LodgingDescription data={currentData} />
      ) : (
        <h2>Loading</h2>
      )}
    </main>
  );
};

export default Lodging;
