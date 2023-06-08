import useFetch from "./hooks/useFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Lodging from "./pages/Lodging";
import { Navigate } from "react-router-dom";

function App() {
  // Fetch the data from the json file
  const [data, loading] = useFetch("./src/data/data.json");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} loading={loading} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/:id"
          element={<Lodging data={data} loading={loading} />}
        />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
