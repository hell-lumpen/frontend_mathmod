import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const Livestream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const hls = new Hls();

    if (Hls.isSupported()) {
      hls.loadSource('http://filimonov.org:8088/hls/stream.m3u8'); // Replace with your M3U8 URL
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.play();
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return <video ref={videoRef} style={{ width: '100%' }} controls />;
};

export default Livestream;