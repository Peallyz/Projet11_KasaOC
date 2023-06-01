import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

const LodgingCard = ({ data }) => {
  LodgingCard.propTypes = {
    data: PropTypes.object.isRequired,
  };

  return (
    <NavLink to={`/${data.id}`} className="lodgingCard">
      <img src={data.cover} alt={data.title} />
      <div className="lodging__title">
        <h2>{data.title}</h2>
      </div>
    </NavLink>
  );
};

export default LodgingCard;
