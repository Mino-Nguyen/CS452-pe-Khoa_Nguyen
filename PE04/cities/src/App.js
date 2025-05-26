import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CitiesList from './CitiesList.js';
import AddCity from './AddCity';
import Details from './Details.js';

function App() {
  const [cities, setCities] = useState([
    { id: '1', name: 'New York', country: 'USA', population: 8419000 },
    { id: '2', name: 'Tokyo', country: 'Japan', population: 13960000 },
    { id: '3', name: 'Paris', country: 'France', population: 2148000 },
  ]);
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Cities List</Link>
            </li>
            <li>
              <Link to="/AddCity">Add City</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<CitiesList cities={cities} />} >
              <Route path="/details/:cityId" element={<Details />} />
            </Route>
            <Route exact path="/AddCity" element={<AddCity setCities={setCities} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;