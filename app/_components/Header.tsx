'use client'
import { useState } from "react";

const HeaderWithVideo = () => {
  const videos = [
    "/videos/xamar/video1.mp4",
    "/videos/xamar/video2.mp4",
    "/videos/xamar/video3.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <header className="relative h-screen w-full overflow-hidden">
      <video
        key={videos[currentVideoIndex]}
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        src={videos[currentVideoIndex]}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Welcome to Beerta Xamar</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Experience seamless transitions and dynamic visuals.
        </p>
        <button className="mt-6 rounded bg-blue-500 px-6 py-3 text-lg font-semibold hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </header>
  );
};

export default HeaderWithVideo;
