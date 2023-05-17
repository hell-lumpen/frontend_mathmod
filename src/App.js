import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png';
import mts_logo from './mts_logo.png';
import VideoPlayer from './VideoPlayer';
import axios from 'axios';
import Livestream from './LiveStreamPlayer';

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [timer, setTimer] = useState(10);

  const imageLink = 'https://app.airdata.com/share/VTyOiy';

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
    setImageUrl(1);
    // const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const imageUrl = 'https://app.airdata.com/share_photo?share=QCJCoP&picname=0000057196-photo.jpg';

    // axios
    //   .get(corsProxyUrl + imageUrl, { responseType: 'blob' })
    //   .then(response => {
    //     const url = URL.createObjectURL(response.data);
    //     setImageUrl(url);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  const handleSuccessButtonClick = () => {
    const redirectUrl = 'https://drgnf.tech/?image=' + encodeURIComponent(imageLink);
    window.location.href = redirectUrl;
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
          <div className="text">Ваше фото готово!</div>
          <a href=''>Посмотреть фото</a>
          <div className="button-container">
            <button className="button" onClick={handleSuccessButtonClick}>
              Перейти к оплате
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Livestream />
          <div className='stream-container'>
            {showButton ? (
              <div>
                <div className="text">
                  Приготовьтесь, вас снимают!
                </div>
                <div className="button-container">
                  <button className="button" onClick={handleButtonClick}>
                    Получить фото
                  </button>
                </div>
              </div>
            ) : (
              <div>
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
        </div>
      )}
    </div>
  );
}

export default App;