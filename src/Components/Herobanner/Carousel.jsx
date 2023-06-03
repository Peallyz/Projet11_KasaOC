import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Carousel = ({ pictures }) => {
  Carousel.propTypes = {
    pictures: PropTypes.array.isRequired,
  };

  const [imgPosition, setImgPosition] = useState(0);

  const handleImgPosition = (direction) => {
    if (direction === "plus") {
      if (imgPosition === pictures.length - 1) {
        setImgPosition(0);
      } else {
        setImgPosition(imgPosition + 1);
      }
    } else if (direction === "minus") {
      if (imgPosition === 0) {
        setImgPosition(pictures.length - 1);
      } else {
        setImgPosition(imgPosition - 1);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleImgPosition("plus");
    }, 600);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgPosition]);

  return (
    <div className="lodging__banner">
      <img
        src="./assets/chevron.svg"
        alt="chevron vers la gauche"
        className="chevron chevron__left"
        onClick={() => handleImgPosition("minus")}
      />
      <img
        src="./assets/chevron.svg"
        alt="chevron vers la droite"
        className="chevron chevron__right"
        onClick={() => handleImgPosition("plus")}
      />
      <ul
        className="carousel"
        style={{
          width: 100 * pictures.length + "%",
          transform: `translateX(-${(100 / pictures.length) * imgPosition}%`,
        }}
      >
        {pictures.map((picture) => (
          <li key={picture} style={{ width: 100 / pictures.length + "%" }}>
            <img src={picture} alt="carouselle d'image du logement" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
