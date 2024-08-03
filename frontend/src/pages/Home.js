import React, { useEffect, useState } from 'react';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/videos`);
      const data = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      {videos.map(video => (
        <div key={video._id}>
          <h2>{video.filename}</h2>
          <video width="400" controls>
            <source src={`http://localhost:5000/uploads/${video.filename}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Home;
