import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const Herobanner = ({ img, title }) => {
  Herobanner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  const [background, setBackground] = useState("");

  useEffect(() => {
    switch (img) {
      case "falaises":
        setBackground("../../../public/img/falaises.png");
        break;
      case "montagne":
        setBackground("../../../public/img/montagnes.png");
        break;

      default:
        break;
    }
  }, [img]);

  return (
    <div className="herobanner">
      <img className="herobanner__background" src={background} />
      {title ? <h1>{title}</h1> : ""}
    </div>
  );
};

export default Herobanner;
