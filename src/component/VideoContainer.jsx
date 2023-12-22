import { useState, useEffect } from "react";
import VideoCards from "../component/VideoCards";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      const resJson = await fetch(YOUTUBE_VIDEOS_API);
      const response = await resJson.json();
      setVideoList(response.items);
    };

    getVideoList();
  }, []);

  return (
    <div className="w-full h-90 overflow-y-auto mt-2">
      <div className="flex flex-wrap justify-evenly ">
        {videoList.length !== 0 &&
          videoList.map((video) => <VideoCards videoInfo={video} />)}
      </div>
    </div>
  );
};

export default VideoContainer;
