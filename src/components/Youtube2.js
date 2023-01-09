import React, { useEffect, useState } from "react";
import axios from "axios";

function Youtube2() {
  const [video, setVideos] = useState([]);

  const key = `AIzaSyAB1eZcFahqPc3wOFKf7wNSke8Z06G2Dy8`;
  const playList = `PLwplHkJoQ-R57kYYxnWjaF1WwIoFMFjLW`;
  const num = 1;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

  useEffect(() => {
    axios.get(URL).then((json) => setVideos(json.data.items));
  }, []);
  return (
    <>
      {video.map((vid, idx) => {
        return (
          <figure
            key={vid.snippet.position}
            style={{ borderBottom: "1px solid #000" }}
          >
            <strong style={{ display: "block " }}>{vid.snippet.title}</strong>
            <img
              src={vid.snippet.thumbnails.medium.url}
              alt={vid.snippet.title}
            />
            <iframe
              src={`https://www.youtube.com/embed/${video[idx].snippet.resourceId.videoId}?controls=0`}
              frameborder="0"
              title={vid.snippet.title}
            ></iframe>
            <figcaption>
              {vid.snippet.description.substr(0, 50) + "..."}
            </figcaption>
          </figure>
        );
      })}
    </>
  );
}

export default Youtube2;
