import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import example from './example.jpg';
import mts_logo from './mts_logo.png';

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  
  const handleButtonClick = () => {
    fetch('https://via.placeholder.com/500x500.png/000000/FFFFFF')
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
      <h1 className="title">Заказ беспилотника для фотосъемки</h1>
      <div className="image-container">
         <img src={imageUrl || example} alt="Результат съемки" className="image" />
      </div>
      <button className="button" onClick={handleButtonClick}>
        Начать съемку
      </button>
    </div>
  );
}

export default App;
