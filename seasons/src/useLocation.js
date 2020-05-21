import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //setTimeout(() => { // Test loading
        setLat(position.coords.latitude);
        //}, 2000);
      },
      err => setErrorMessage(err.message)
    );
  }, []);

  return [lat, errorMessage]; // { lat: lat, errorMessage: errorMessage }
};