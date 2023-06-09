import PropTypes from "prop-types";
import Carousel from "../Herobanner/Carousel";

const LodgingDescription = ({ data }) => {
  return (
    <>
      <Carousel pictures={data.pictures} />
      <div className="lodging__info">
        <div className="lodging__info--left">
          <h1>{data.title}</h1>
          <p>{data.location}</p>
          <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="lodging__info--right">
          <div className="lodging__host">
            <p>
              <span>{data.host.name.split(" ")[0]}</span>
              {data.host.name.split(" ")[1]}
            </p>
            <img
              src={data.host.picture}
              alt={data.host.name}
              className="avatar"
            />
          </div>
          <div className="lodging__rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={
                  index < data.rating
                    ? "./assets/star_orange.svg"
                    : "./assets/star_grey.svg"
                }
                alt="star"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
LodgingDescription.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LodgingDescription;
