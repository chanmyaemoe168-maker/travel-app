import { useEffect, useState } from 'react';
import './App.css';
import TripList from './components/TripList/index.js';

function App() {
  let [data, setData] = useState('my data');

  let myFunction = () => {
    setData('update data'); // this will update the state and trigger a re-render of the component  
  }
  useEffect(() => {
    setData('update data');
  })

  return <>
  <h1>{data}</h1>
  <TripList />;
  </>
  
}

export default App;
 