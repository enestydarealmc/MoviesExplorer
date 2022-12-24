import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MovieItem from "./components/MovieItem";
import Navbar from "./components/Navbar";
import NotFound404 from "./components/NotFound404";
import HomePage from "./containers/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound404 />} />
          <Route path="/movie_explorer" element={<HomePage />} />
          <Route path="/movie_explorer/contact" element={<Contact />} />
          <Route
            path="/movie_explorer/up_comming/:id"
            element={<MovieItem />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
