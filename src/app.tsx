import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';
import Contact from './components/Contact';
import HomePage from './containers/HomePage';

const App = () => {
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/movie_explorer" element={<HomePage />} />
        <Route path="/movie_explorer/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;

