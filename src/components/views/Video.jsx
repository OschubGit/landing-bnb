import React from "react";

const Video = ({ poster, src }) => {
  const [videoEnter, setVideoEnter] = React.useState(false);

  const mouseEnter = () => {
    setVideoEnter(true);
  };
  const mouseLeave = () => {
    setVideoEnter(false);
  };

  return (
    <video
      muted
      autoplay={videoEnter}
      poster={mouseLeave && poster}
      controls={videoEnter}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <source src={src} />
    </video>
  );
};

export default Video;
