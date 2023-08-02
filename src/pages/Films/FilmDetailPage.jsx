import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FilmDetailPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  console.log(id);
  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${id}/`)
      .then(response => setFilm(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (film === null) {
    return <div>Loading...</div>;
  }

  console.log(film);

  return (
    <div>
      <h2>{film.title}</h2>
      <p>Episode: {film.episode_id}</p>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Release Date: {film.release_date}</p>
      <p>Opening Crawl:</p>
      <p>{film.opening_crawl}</p>
      {/* Other Info */}
    </div>
  );
};

export default FilmDetailPage;
