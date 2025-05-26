import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function CitiesList({ cities }) {
  return (
    <div className="cities-container" style={{ display: 'flex' }}>
      <div className="cities-list" style={{ width: '30%', borderRight: '1px solid #ccc', paddingRight: '1rem' }}>
        <h2>Cities</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cities.map(city => (
            <li key={city.id} style={{ marginBottom: '0.5rem' }}>
              <Link 
                to={`details/${city.id}`} 
                style={{ textDecoration: 'none', color: '#007bff' }}
              >
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="city-details" style={{ flexGrow: 1, paddingLeft: '1rem' }}>
        <Outlet context={{ cities }} />
      </div>
    </div>
  );
}

export default CitiesList;
