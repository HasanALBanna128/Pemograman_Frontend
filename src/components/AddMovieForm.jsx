// src/components/AddMovieForm.jsx

import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import MoviesContext from "../context/MoviesContext";

function AddMovieForm() {
  const { movies, setMovies } = useContext(MoviesContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    date: false,
    poster: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  }

  function validate() {
    const newErrors = {
      title: formData.title === "",
      date: formData.date === "",
      poster: formData.poster === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  }

  function addMovie() {
    const newMovie = {
      id: nanoid(),
      title: formData.title,
      year: formData.date,
      type: formData.type,
      poster: formData.poster,
    };

    setMovies([...movies, newMovie]);
    resetForm();
    navigate("/");
  }

  function resetForm() {
    setFormData({
      title: "",
      date: "",
      poster: "",
      type: "",
    });
    setErrors({
      title: false,
      date: false,
      poster: false,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      addMovie();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <p style={{ color: "red" }}>Title is required</p>}
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <p style={{ color: "red" }}>Date is required</p>}
      </div>

      <div>
        <label htmlFor="poster">Poster URL:</label>
        <input
          id="poster"
          type="text"
          name="poster"
          value={formData.poster}
          onChange={handleChange}
        />
        {errors.poster && <p style={{ color: "red" }}>Poster URL is required</p>}
      </div>

      <div>
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Select type</option>
          <option value="Movie">Movie</option>
          <option value="Series">Series</option>
        </select>
      </div>

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
