import React, { useState, useEffect } from "react";
import NormalizeStyle from "./js/Global/normalizeStyle";
import Home from "./js/pages/Home/Home";
import Loader from "./js/pages/Loader/Loader";
import "./css/Global/ScrollBar.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const location = useLocation();
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 2500);
  }, []);
  return (
    <>
      <NormalizeStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={loading ? <Loader /> : <Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
