import React from 'react'
import { Link } from 'react-router-dom';
import useApi from '../../utils/ApiCall';

const StarshipsPage = () => {
  const { data: starships, loading } = useApi('https://swapi.dev/api/starships/');

  console.log(starships);

  return (
    <div>
      <h2>starships</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="starships-container">
          {starships.map(starships => (
            <div key={starships.url} className="starships-item">
              <Link to={`/starships/${starships.url.split('/')[5]}`}>
                <h3>{starships.name}</h3>
                <p>classification: {starships.classification}</p>
                <p>Average Lifespan: {starships.average_lifespan}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StarshipsPage
