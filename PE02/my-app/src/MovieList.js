import React, { useState } from 'react';
import './MovieList.css';

export function Movie(title, genre, releaseYear) {
  return (
    <div className='movieContainer'>
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Release Year: {releaseYear}</p>
    </div>
  );
}

export default function MovieList() {
  const data = [
    { id: 1, title: 'Luo Xiao Hei', genre: 'Animation', releaseYear: 2020 },
    { id: 2, title: 'Crouching Tiger, Hidden Dragon', genre: 'Action', releaseYear: 2000 },
    { id: 3, title: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999 },
    { id: 4, title: 'John Wick', genre: 'Action', releaseYear: 2014 }
  ];

  const genreList = ['All Genres', ...new Set(data.map(movieItem => movieItem.genre))];
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [filteredMovies, setFilteredMovies] = useState(data);

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);

    if (genre === 'All Genres') {
      setFilteredMovies(data);
    } else {
      setFilteredMovies(data.filter(movieItem => movieItem.genre === genre));
    }
  };

  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div>
      <select value={selectedGenre} onChange={handleGenreChange}>
        {genreList.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movieContainer" onClick={() => handleMovieClick(movie.title)}>
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </div>
        ))}
      </ul>
    </div>
  )
};

