// AddCity.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ setCities }) {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    population: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newCity = {
      id: Date.now().toString(), // Unique ID
      name: formData.name,
      country: formData.country,
      population: parseInt(formData.population, 10)
    };

    setCities(prev => [...prev, newCity]);

    navigate('/'); // Redirect back to Cities List
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Add a New City</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <input type="text" name="name" placeholder="City Name" onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
        <input type="number" name="population" placeholder="Population" onChange={handleChange} required />
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Add City</button>
      </form>
    </div>
  );
}

export default AddCity;
