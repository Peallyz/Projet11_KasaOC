import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const Carousel = ({ pictures }) => {
  const [imgPosition, setImgPosition] = useState(1);

  const handleImgPosition = useCallback(
    (direction) => {
      if (direction === "plus") {
        if (imgPosition === pictures.length) {
          setImgPosition(1);
        } else {
          setImgPosition(imgPosition + 1);
        }
      } else if (direction === "minus") {
        if (imgPosition === 1) {
          setImgPosition(pictures.length);
        } else {
          setImgPosition(imgPosition - 1);
        }
      }
    },
    [imgPosition, pictures.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleImgPosition("plus");
    }, 6000);
    return () => clearInterval(interval);
  }, [handleImgPosition, imgPosition]);

  return (
    <div className="lodging__banner">
      {/*If there is more than one picture, display the chevrons and the counter */}
      {pictures.length > 1 && (
        <>
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
          <div className="lodging__banner--count">{`${imgPosition}/${pictures.length}`}</div>
        </>
      )}
      <ul
        className="carousel"
        style={{
          width: 100 * pictures.length + "%",
          transform: `translateX(-${
            (100 / pictures.length) * (imgPosition - 1)
          }%`,
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

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
};
export default Carousel;
