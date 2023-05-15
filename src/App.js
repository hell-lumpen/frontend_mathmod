import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import logo from './logo.png';
import mts_logo from './mts_logo.png';

function App() {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleButtonClick = () => {
    fetch('https://via.placeholder.com/500x500.png/000000/FFFFFF')
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      });
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="mts_logo" className="logo" />
        <img src={mts_logo} alt="it_raby" className="mts_logo" />
      </div>

      <h1 className="title">Заказ беспилотника для фотосъемки</h1>

      {videoUrl && (
        <ReactPlayer
          url={videoUrl}
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
              },
            },
          }}
          width="100%"
          height="100%"
        />
      )}

      <button className="button" onClick={handleButtonClick}>
        Дрон в пути...
      </button>
    </div>
  );
}

export default App;