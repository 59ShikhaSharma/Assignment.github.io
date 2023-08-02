import React from 'react'
import { Link } from 'react-router-dom';
import useApi from '../../utils/ApiCall';
import formatDate from '../../utils/formatDate';

const VehiclesPage = () => {
  const { data: vehicles, loading } = useApi('https://swapi.dev/api/vehicles/');

  return (
    <div>
      <h2>vehicles</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="vehicles-container">
          {vehicles.map(vehicles => (
            <div key={vehicles.url} className="vehicles-item">
              <Link to={`/vehicles/${vehicles.url.split('/')[5]}`}>
                <h3>{vehicles.name}</h3>
                <p>Created At: {formatDate(vehicles.created)}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VehiclesPage