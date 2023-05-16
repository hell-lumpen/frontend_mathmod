import React, { useEffect, useRef } from 'react';
import flv from 'flv.js';

const Livestream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (flv.isSupported()) {
      const flvPlayer = flv.createPlayer({
        type: 'flv',
        url: 'rtmp://filimonov.org/live/stream', // Replace with your RTMP server URL and stream key
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
  }, []);

  return <video ref={videoRef} style={{ width: '100%' }} controls />;
};

export default Livestream;
