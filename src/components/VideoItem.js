import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.date}
        className="ui image"
        src={`http://img.youtube.com/vi/${video.en}/0.jpg`}
      />
      <div className="content">
        <strong>{video.date}</strong>
        {/* <div className="description">Updated 10 mins ago</div> */}
      </div>
    </div>
  );
};

export default VideoItem;
