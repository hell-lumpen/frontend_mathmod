import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png';
import mts_logo from './mts_logo.png';
import VideoPlayer from './VideoPlayer';

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 10000);
  }, []);

  const handleButtonClick = () => {
    fetch('https://via.placeholder.com/500x500.png/000000/FFFFFF', { mode: 'no-cors' })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      });
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="mts_logo" className="logo" />
        <img src={mts_logo} alt="it_raby" className="mts_logo" />
      </div>

      <div className="drone-text-h">Заказ беспилотника для фотосъемки</div>

      {imageUrl ? (
        <img src={imageUrl} alt="resulting_image" className="resulting-image" />
      ) : (
        <VideoPlayer videoId="bxynzesjB6E" />
      )}

      {showButton ? (
        <button className="button" onClick={handleButtonClick}>
          Take a photo
        </button>
      ) : (
        <p className="drone-text">
          Drone on the way. Wait a few minutes
        </p>
      )}
    </div>
  );
}

export default App;