import React from "react";

const VideoCards = ({ videoInfo }) => {
  return (
    <div className="w-64">
      <img src={videoInfo?.snippet.thumbnails.medium.url} className="rounded" />
      <p className="text-ellipsis	">{videoInfo?.snippet.localized.title}</p>  
    </div>
  );
};

export default VideoCards;
