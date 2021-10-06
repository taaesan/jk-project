import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.date}
        video={video}
      ></VideoItem>
    );
  });

  return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;
