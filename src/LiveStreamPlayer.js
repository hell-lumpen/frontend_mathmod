import React, { useEffect, useRef } from 'react';
import VideoPlayer from './VideoPlayer';

const Livestream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = 'https://filimonov.org/hls/stream.m3u8'; // Замените на ваш URL M3U8
      videoElement.addEventListener('loadedmetadata', () => {
        videoElement.play();
      });
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('https://filimonov.org/hls/stream.m3u8'); // Замените на ваш URL M3U8
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.play();
      });

      return () => {
        if (hls) {
          hls.destroy();
        }
      };
    }
  }, []);

  if (!videoRef.current || (!videoRef.current.canPlayType('application/vnd.apple.mpegurl') && !Hls.isSupported())) {
    return <VideoPlayer videoId="bxynzesjB6E" />;
  }

  return (
    <video
      ref={videoRef}
      style={{ width: '100%' }}
      controls
      playsInline
      autoPlay
      muted // добавлено для автовоспроизведения на мобильных устройствах
    />
  );
};

export default Livestream;