import React, { useCallback, useEffect, useState } from 'react';

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState('http://localhost:3001/trips');

  const fetchTrips = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error('Error fetching trips:', error));
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  return (
    <div>
      <h1>Ready to go??</h1>
      <button onClick={() => setUrl('http://localhost:3001/trips')}>All</button>
      <button onClick={() => setUrl('http://localhost:3001/trips?location=Paris')}>Location In Paris</button>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.name}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
