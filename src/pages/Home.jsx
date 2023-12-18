import { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utils/constant";

export default function Home() {
  const [videos, setVideos] = useState();

  useEffect(() => {
    const getVideoList = async () => {
      const response = await fetch(YOUTUBE_API);
      const videos = await response.json();
      setVideos(videos);
    };

    getVideoList();
  }, []);

  console.log("checking videos data", videos);

  return <div></div>;
}
