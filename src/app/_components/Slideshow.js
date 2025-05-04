'use client'; // Add this at the very top
import { useState } from "react";

const slides = [
  "/AvengersInfinityWarposteredited.jpg",  // Make sure these paths are correct
  "/e9311d62f7ca1dd898b7d7105a36698bf46f2d67296e226a3dc9a2df6e0c53bfedited.jpg",
  "/pussinbootsthelastwish1024x576edited.jpg",
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative mx-auto max-w-full lg:max-w-6xl" style={{ height: "auto", width: "100%" }}>  
      <div className="overflow-hidden rounded-lg">
        <img
          src={slides[current]}
          alt="Slideshow Image"
          className="w-full h-auto object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
      >
        &#129032;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
      >
        &#129034;
      </button>
    </div>
  );
}
