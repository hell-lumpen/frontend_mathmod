import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import VideoPlayer from './VideoPlayer';

const Livestream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const hls = new Hls();

    if (Hls.isSupported()) {
      hls.loadSource('https://filimonov.org/hls/stream.m3u8'); // Замените на ваш URL M3U8
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

  if (!Hls.isSupported()) {
    return <VideoPlayer videoId="bxynzesjB6E" />;
  }

  return <video ref={videoRef} style={{ width: '100%' }} controls />;
};

export default Livestream;