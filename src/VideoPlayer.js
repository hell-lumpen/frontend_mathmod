import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      // Accessing the YouTube player instance
      const player = playerRef.current.internalPlayer;

      // Disable player controls
      player.setOption('controls', 0);

      // Disable video interaction
      player.setOption('disablekb', 1);
      player.setOption('iv_load_policy', 3);
      player.setOption('modestbranding', 1);
    }
  }, [videoId]);

  const onReady = (event) => {
    // Accessing the YouTube player instance
    const player = event.target;

    // Mute the player
    player.mute();

    // Start playing the video
    player.playVideo();
  };

  const onPlayerStateChange = (event) => {
    // Accessing the YouTube player instance
    const player = event.target;

    // Check if the video has ended
    if (event.data === YouTube.PlayerState.ENDED) {
      // Restart the video playback
      player.playVideo();
    }
  };

  return (
    <div className="video-container">
      <YouTube
        videoId={videoId}
        onReady={onReady}
        onStateChange={onPlayerStateChange}
        ref={playerRef}
        opts={{
          playerVars: {
            controls: 0,
            autoplay: 0,
            loop: 0,
            enablejsapi: 1,
            disablekb: 1,
            iv_load_policy: 3,
            modestbranding: 1,
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;