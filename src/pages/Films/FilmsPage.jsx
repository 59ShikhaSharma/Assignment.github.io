import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../utils/ApiCall';

const FilmsPage = () => {
  const { data: films, loading } = useApi('https://swapi.dev/api/films/');

  if (loading) {
    return <div>Loading ...</div>
  }

  return (
    <div>
      <h2>Films</h2>
      <div className="films-container">
        {films.map(film => (
          <div key={film.url} className="film-item">
            <Link to={`/films/${film.episode_id}`}>
              <img src="film-poster-url.jpg" alt={film.title} />
              <h3>{film.title}</h3>
              <p>Release Date: {film.release_date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmsPage;
