import { useEffect, useState } from "react";
import LodgingDescription from "../Components/Lodging/LodgingDescription";
import Accordion from "../Components/Accordion/Accordion";
import Loader from "../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Lodging = () => {
  const [data, setData] = useState({
    data: undefined,
    loading: true,
    error: undefined,
  });
  // const [currentData, setCurrentData] = useState(null);

  const navigate = useNavigate();

  const path = useParams();

  const currentData =
    !data.loading && data.data.find((lodging) => lodging.id === path.id);

  if (!data.loading && !currentData) {
    navigate("/error");
  }

  useEffect(() => {
    fetch("./src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData({ data: data, loading: false });
      })
      .catch((err) => {
        setData({ data: undefined, loading: false });
        console.log(err);
      });
  }, [currentData]);

  return (
    <main className="lodging">
      {!data.loading ? (
        <>
          <LodgingDescription data={currentData} />
          <section className="accordions">
            <Accordion title="Description">
              <p>{currentData.description}</p>
            </Accordion>
            <Accordion title="Équipements">
              <ul>
                {currentData.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            </Accordion>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Lodging;
