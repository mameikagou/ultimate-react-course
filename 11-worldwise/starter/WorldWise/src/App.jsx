import { useState, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("@pages/Homepage.jsx"));

const BASE_URL = "https://worldwise.herokuapp.com/api/v1";

function App() {
  const [count, setCount] = useState(0);

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <>
      <HomePage />
      {/* <Router>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
