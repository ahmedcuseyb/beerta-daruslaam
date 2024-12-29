'use client'
import { useEffect, useState } from "react";

const HeaderWithVideo = () => {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ]; // List of video sources

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // No delay between video transitions

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Video Section */}
      <video
        key={videos[currentVideoIndex]} // Ensures video reloads when src changes
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={videos[currentVideoIndex]}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Header Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Welcome to Our Site</h1>
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
