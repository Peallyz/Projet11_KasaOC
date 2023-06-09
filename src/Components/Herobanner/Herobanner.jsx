import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const Herobanner = ({ img, title }) => {
  const [background, setBackground] = useState("");

  useEffect(() => setBackground(`./img/${img}.png`), [img]);

  return (
    <div className="herobanner">
      <img className="herobanner__background" src={background} />
      {title ? <h1>{title}</h1> : ""}
    </div>
  );
};
Herobanner.propTypes = {
  img: PropTypes.oneOf(["falaises", "montagnes"]).isRequired,
  title: PropTypes.string,
};

export default Herobanner;
