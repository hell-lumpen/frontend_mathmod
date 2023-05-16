import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png';
import mts_logo from './mts_logo.png';
import VideoPlayer from './VideoPlayer';
import axios from 'axios';

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      setShowButton(true);
      clearInterval(countdown);
    }, 10000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  const handleButtonClick = () => {
    axios
      .get(
        'https://images.unsplash.com/photo-1677869457675-47ff2192ebdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        { responseType: 'blob' }
      )
      .then(response => {
        const url = URL.createObjectURL(response.data);
        setImageUrl(url);
      });
  };

  const handleSuccessButtonClick = () => {
    // Действия при успешном нажатии кнопки
  };

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} alt="mts_logo" className="logo" />
        <img src={mts_logo} alt="it_raby" className="mts_logo" />
      </div>
  
      <div className="title">Заказ беспилотника для фотосъемки</div>
  
      {imageUrl ? (
        <div>
          <div className="image-container">
            <img src={imageUrl} alt="resulting_image" className="resulting-image" />
          </div>
          <div className="text">Ваше фото готово!</div>
          <button className="button" onClick={handleSuccessButtonClick}>
            Перейти к оплате
          </button>
        </div>
      ) : (
        <div>
          {showButton ? (
            <div>
              <VideoPlayer videoId="bxynzesjB6E" />
              <div className="text">
                Приготовьтесь, вас снимают!
              </div>
              <button className="button" onClick={handleButtonClick}>
                Получить фото
              </button>
            </div>
          ) : (
            <div>
              <VideoPlayer videoId="bxynzesjB6E" />
              <div className="text">
                Дрон в пути...
                <br />
                Встаньте на отмеченную точку и приготовьтесь к съемке
                <br />
                Осталось: {timer} сек.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
  
}

export default App;