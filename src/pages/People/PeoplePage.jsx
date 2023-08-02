import React from 'react'
import { Link } from 'react-router-dom';
import useApi from '../../utils/ApiCall';

const PeoplePage = () => {
  const { data: people, loading } = useApi('https://swapi.dev/api/people/');

  return (
    <div>
      <h2>People</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="people-container">
          {people.map(person => (
            <div key={person.url} className="person-item">
              <Link to={`/people/${person.url.split('/')[5]}`}>
                <h3>{person.name}</h3>
                <p>Birth Year: {person.birth_year}</p>
                {/* more person details */}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PeoplePage