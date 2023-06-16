import PropTypes from "prop-types";
import { useState } from "react";

const Accordion = ({ title = "", children }) => {
  // Handle the accordion opening and closing state to display the content and turn the chevron
  const [isClosed, setIsClosed] = useState(true);

  return children ? (
    <div className={isClosed ? "accordion close" : "accordion"}>
      <div className="accordion__title" onClick={() => setIsClosed(!isClosed)}>
        <h3>{title}</h3>
        <img
          src="./assets/chevron.svg"
          alt="chevron pour dérouler les informations textuelles"
        />
      </div>
      <div className="accordion__content">{children}</div>
    </div>
  ) : (
    ""
  );
};
Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Accordion;
