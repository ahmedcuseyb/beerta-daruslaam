'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const FilterableGallery = () => {
  const images = [
    { src: "images/activities/a1.jpg", alt: "Activity 1", category: "activity" },
    { src: "images/activities/a2.jpg", alt: "Activity 2", category: "activity" },
    { src: "images/activities/a3.jpg", alt: "Animal 1", category: "animals" },
    { src: "images/activities/a4.jpg", alt: "Animal 2", category: "animals" },
    { src: "images/activities/a5.jpg", alt: "Visitor 1", category: "visitors" },
    { src: "images/activities/a6.jpg", alt: "Cafeteria 1", category: "cafeteria" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // Filter photos based on the selected category
  const filteredPhotos =
    activeCategory === "all"
      ? images
      : images.filter((photo) => photo.category === activeCategory);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Explore Our Park Gallery
          </h2>
          <p className="text-gray-600 mt-4">
            Browse through our collection of photos showcasing activities,
            animals, visitors, and our cafeteria.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg font-semibold mb-2 md:mb-0 ${
              activeCategory === "all"
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All Photos
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold mb-2 md:mb-0 ${
              activeCategory === "activity"
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveCategory("activity")}
          >
            Activity Photos
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold mb-2 md:mb-0 ${
              activeCategory === "animals"
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveCategory("animals")}
          >
            Animal Scenes
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold mb-2 md:mb-0 ${
              activeCategory === "visitors"
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveCategory("visitors")}
          >
            Tourists & Visitors
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold mb-2 md:mb-0 ${
              activeCategory === "cafeteria"
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveCategory("cafeteria")}
          >
            Cafeteria & Drinks
          </button>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterableGallery;
