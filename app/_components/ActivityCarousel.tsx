'use client'
import { useState } from "react";

const ActivityCarousel = () => {
  // const images = [
  //   "images/activities/a1.jpg",
  //   "images/activities/a2.jpg",
  //   "images/activities/a3.jpg",
  //   "images/activities/a4.jpg",
  //   "images/activities/a5.jpg",
  //   "images/activities/a6.jpg",
  // ];
  const images = [
    "images/activities/ciyaal.png",
    "images/activities/kursi.png",
    "images/activities/meeting.png",
    "images/activities/xamar.png",
    "images/activities/a5.jpg",
    "images/activities/a6.jpg",
  ];
  const [currentSet, setCurrentSet] = useState(0);

  const handleNext = () => {
    setCurrentSet((prevSet) => (prevSet === 1 ? 0 : prevSet + 1));
  };

  const handlePrev = () => {
    setCurrentSet((prevSet) => (prevSet === 0 ? 1 : prevSet - 1));
  };

  return (
    <section className="bg-gray-900 py-16" id="about">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-green-500 font-semibold uppercase">Activities</p>
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            Over 40 activities for all adventure
          </h2>
          <p className="text-gray-400 mt-4">
            We have over 40 activities available across our centres, some of
            which are pictured below. For the full list, please visit the
            activities section.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images
              .slice(currentSet * 3, currentSet * 3 + 3)
              .map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Activity ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg">
                      {`Activity ${index + 1}`}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
          >
            &#x25C0;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none"
          >
            &#x25B6;
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600"
          >
            View All Activities
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivityCarousel;
