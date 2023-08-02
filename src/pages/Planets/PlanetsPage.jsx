import React from 'react'
import { Link } from 'react-router-dom';
import useApi from '../../utils/ApiCall';
import formatDate from '../../utils/formatDate';

const PlanetsPage = () => {
  const { data: planets, loading } = useApi('https://swapi.dev/api/planets/');

  console.log(planets);

  return (
    <div>
      <h2>planets</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="planets-container">
          {planets.map(planets => (
            <div key={planets.url} className="planets-item">
              <Link to={`/planets/${planets.url.split('/')[5]}`}>
                <h3>{planets.name}</h3>
                <p>Created At: {formatDate(planets.created)}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlanetsPage