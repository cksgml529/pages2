import React, { useEffect } from "react";
import axios from "axios";

function Youtube1() {
  const key = `AIzaSyAB1eZcFahqPc3wOFKf7wNSke8Z06G2Dy8`;
  const playList = `PLwplHkJoQ-R57kYYxnWjaF1WwIoFMFjLW`;
  const num = 1;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

  // 외부 데이터를 받을 때 무조건 useEffect
  useEffect(() => {
    axios.get(URL).then((json) => console.log(json.data.items));
  }, []);
  return (
    <>
      <h1>Youtube1</h1>
    </>
  );
}

export default Youtube1;
