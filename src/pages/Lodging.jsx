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
  const [currentData, setCurrentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const path = useParams();

  useEffect(() => {
    // If the data is not loading, check if the lodging id in the url is valid and redirect to error page if not
    if (!data.loading) {
      !data.data.find((lodging) => lodging.id === path.id)
        ? navigate("/error")
        : setCurrentData(
            // Find the lodging in the data array that has the same id as the one in the url
            data.data.find((lodging) => lodging.id === path.id)
          );
    }

    // Fetch the data from the json file

    fetch("./src/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData({ data: data, loading: false });
      })
      .catch((err) => {
        setData({ data: undefined, loading: false });
        console.log(err);
      });

    setIsLoading(data.loading);
  }, [currentData, data, navigate, path]);

  return (
    <main className="lodging">
      {!isLoading ? (
        <>
          <LodgingDescription data={currentData} />
          <section className="accordions">
            <Accordion type="description" data={currentData} isDynamic={true} />
            <Accordion type="equipments" data={currentData} isDynamic={true} />
          </section>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Lodging;
