import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.en}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="detail" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.date}</h4>
        <p>{video.date}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
