import { useState, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const BASE_URL = "http://localhost:9000"
import HomePage from "@pages/Homepage";

// import Product from "@pages/Product";
// import Pricing from "@pages/Pricing";
// import NotFound from "@pages/PageNotFound";
// import AppLayout from "@pages/AppLayout";
// import Login from "@pages/Login";

// import CityList from "@/components/CityList";
// import CountryList from "@/components/CountryList";
// import Form from "@components/Form";



// const HomePage = lazy(() => import("@pages/Homepage.jsx"));
// const Product = lazy(() => import("@pages/Product.jsx"));
// const Pricing = lazy(() => import("@pages/Pricing.jsx"));
// const NotFound = lazy(() => import("@pages/PageNotFound.jsx"));
// const AppLayout = lazy(() => import("@pages/AppLayout.jsx"));
// const Login = lazy(() => import("@pages/Login.jsx"));
// const CityList = lazy(() => import("@components/CityList.jsx"));
// const CountryList = lazy(() => import("@components/CountryList.jsx"));
// const Form = lazy(() => import("@components/Form.jsx"));


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
          <Route index element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<div>喵喵喵</div>} />
            <Route path="cities" element={<div>路由的错!!!!</div>} />
            <Route path="countries" element={<div>到底哪错了?</div>} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
