import { PropTypes } from "prop-types";

const Herobanner = ({ img, title }) => {
  return (
    <div className="herobanner">
      <img className="herobanner__background" src={`./img/${img}.png`} />
      {title ? <h1>{title}</h1> : ""}
    </div>
  );
};
Herobanner.propTypes = {
  img: PropTypes.oneOf(["falaises", "montagnes"]).isRequired,
  title: PropTypes.string,
};

export default Herobanner;
