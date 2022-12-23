import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';
import Contact from './components/Contact';
import MovieItem from './components/MovieItem';
import HomePage from './containers/HomePage';

const App = () => {
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/movie_explorer" element={<HomePage />} />
        <Route path="/movie_explorer/contact" element={<Contact />} />
        <Route path="/movie_explorer/contact/:id" element={<MovieItem />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;

