import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
      posterURL: 'https://example.com/inception.jpg',
      rating: 8.8,
    },
    // Add more initial movies here
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
    );
  });

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newMovie = {
              title: e.target.title.value,
              description: e.target.description.value,
              posterURL: e.target.posterURL.value,
              rating: e.target.rating.value,
            };
            addMovie(newMovie);
            e.target.reset();
          }}
        >
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="posterURL" placeholder="Poster URL" required />
          <input type="number" name="rating" placeholder="Rating" required />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default App;
