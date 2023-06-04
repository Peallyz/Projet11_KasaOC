import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const Herobanner = ({ img, title }) => {
  Herobanner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  const [background, setBackground] = useState("");

  useEffect(() => {
    // Set the background image depending on the img prop
    switch (img) {
      case "falaises":
        setBackground(".//img/falaises.png");
        break;
      case "montagne":
        setBackground("./img/montagnes.png");
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
