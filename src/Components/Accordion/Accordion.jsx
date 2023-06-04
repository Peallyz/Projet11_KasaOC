import PropTypes from "prop-types";
import { useState } from "react";

const Accordion = ({ type, title = "", data, isDynamic }) => {
  Accordion.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
    data: PropTypes.object,
    isDynamic: PropTypes.bool.isRequired,
  };
  // Handle the accordion opening and closing state to display the content and turn the chevron
  const [isClosed, setIsClosed] = useState(true);

  return isDynamic ? (
    data ? (
      <div className={isClosed ? "accordion close" : "accordion"}>
        <div
          className="accordion__title"
          onClick={() => setIsClosed(!isClosed)}
        >
          <h3>{type === "description" ? "Description" : "Equipements"}</h3>
          <img
            src="./assets/chevron.svg"
            alt="chevron pour dérouler les informations textuelles"
          />
        </div>
        <div className="accordion__content">
          {type === "description" ? (
            <p>{data.description}</p>
          ) : (
            <ul>
              {data.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ) : (
      ""
    )
  ) : (
    <div className={isClosed ? "accordion close" : "accordion"}>
      <div className="accordion__title" onClick={() => setIsClosed(!isClosed)}>
        <h3>{title}</h3>
        <img
          src="./assets/chevron.svg"
          alt="chevron pour dérouler les informations textuelles"
        />
      </div>
      <div className="accordion__content">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Accordion;
