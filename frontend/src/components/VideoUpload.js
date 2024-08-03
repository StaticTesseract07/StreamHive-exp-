import React, { useState } from 'react';

const VideoUpload = () => {
  const [video, setVideo] = useState(null);

  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('video', video);

    const response = await fetch(`${process.env.REACT_APP_API_URL}/videos/upload`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUpload;
