import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

function Details() {
  const { cityId } = useParams();
  const { cities } = useOutletContext();

  const city = cities.find(c => c.id === cityId);

  if (!city) {
    return <p>Please select a city from the list to see details.</p>;
  }

  return (
    <div>
      <h2>{city.name}</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
    </div>
  );
}

export default Details;
