import React from "react";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = ({ src, alt }) => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.videoPlayer} controls src={src}>
        {alt && <track kind="captions" label={alt} />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
