import React from 'react'
import { Link } from 'react-router-dom';
import useApi from '../../utils/ApiCall';

const SpeciesPage = () => {
  const { data: species, loading } = useApi('https://swapi.dev/api/species/');

  console.log(species);

  return (
    <div>
      <h2>species</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="species-container">
          {species.map(species => (
            <div key={species.url} className="species-item">
              <Link to={`/species/${species.url.split('/')[5]}`}>
                <h3>{species.name}</h3>
                <p>classification: {species.classification}</p>
                <p>Average Lifespan: {species.average_lifespan}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SpeciesPage
