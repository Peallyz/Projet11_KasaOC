import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import LodgingDescription from "../Components/Lodging/LodgingDescription";
import Accordion from "../Components/Accordion/Accordion";
import Loader from "../Components/Loader/Loader";

const Lodging = ({ data }) => {
  Lodging.propTypes = {
    data: PropTypes.array.isRequired,
  };

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    setCurrentData(
      data?.find(
        (lodging) => lodging.id === window.location.pathname.split("/")[1]
      )
    );
  }, [currentData, data]);

  return (
    <main className="lodging">
      {currentData ? (
        <>
          <LodgingDescription data={currentData} />
          <section className="accordions">
            <Accordion type="description" data={currentData} isDynamic={true} />
            <Accordion type="equipments" data={currentData} isDynamic={true} />
          </section>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Lodging;
