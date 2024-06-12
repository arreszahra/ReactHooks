import React, { useState } from 'react';
import Movies from './data';

const AddMovie = ({ onAddMovie }) => {
        const [newMovie, setNewMovie] = useState({
            title: '',
            description: '',
            posterURL: '',
            rating: ''
        });
        const handleChange = (e) => {
            const { name, value } = e.target;
            setNewMovie({
                ...newMovie,
                [name]: value
            });
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            onAddMovie(newMovie);
            setNewMovie({
                title: '',
                description: '',
                posterURL: '',
                rating: ''
            });
        };
  return (
    <div className="create">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie title:</label>
        <input
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />

        <label>Movie Rating:</label>
        <input
                type="number"
                name="rating"
                value={newMovie.rating}
                onChange={handleChange}
                placeholder="rating"
                required
            />
        <label>Movie Description:</label>
        <input
                type="text"
                name="description"
                value={newMovie.description}
                onChange={handleChange}
                placeholder="description"
                required
            />
        <label>Movie Image URL:</label>
        <input
                type="text"
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleChange}
                placeholder="posterURL"
                required
            />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;