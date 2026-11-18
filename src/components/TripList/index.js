import './index.css';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

export default function TripList() {
  const [url, setUrl] = useState('http://localhost:3001/trips');
  const { data: trips, loading, error } = useFetch(url);

  return (
    <div className="container">
      {error && <p>{error}</p>}
      {!error && (
        <div className="flex-container">
          <h1>Ready to go??</h1>
          {loading && <p>Loading trips</p>}
          <div>
            <button onClick={() => setUrl('http://localhost:3001/trips')}>All</button>
            <button onClick={() => setUrl('http://localhost:3001/trips?location=Paris')}>Location In Paris</button>
          </div>
          <ul className="trip-list">
            {trips && trips.map((trip) => (
              <li key={trip.id} className="trip-item">
                <h3>{trip.name}</h3>
                <p>{trip.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
