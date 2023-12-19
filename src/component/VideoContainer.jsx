import { useState, useEffect } from "react";
import VideoCards from "../component/VideoCards";
import { YOUTUBE_API } from "../utils/constant";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      const resJson = await fetch(YOUTUBE_API);
      const response = await resJson.json();
      setVideoList(response.items);
    };

    getVideoList();
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly mt-4">
      {videoList.length !== 0 &&
        videoList.map((video) => <VideoCards videoInfo={video} />)}
    </div>
  );
};

export default VideoContainer;
