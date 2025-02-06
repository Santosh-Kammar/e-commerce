import { useState, useEffect } from "react";

export default function Banner() {
  const bannerImages = [
    {
      imgURL: "/bannerImages/Ekart-1st banner.webp",
      imgAlt: "banner2",
    },
    {
      imgURL: "/bannerImages/banner2.avif",
      imgAlt: "Banner3",
    },
    {
      imgURL: "/bannerImages/banner4.jpg",
      imgAlt: "banner4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const totalImages = bannerImages.length;

  const nextSlide = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 2000);
    return () => clearInterval(autoplay);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setTransitioning(false), 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-64 sm:h-96 mt-10">
      {/* Parent Container for Images */}
      <div className="w-full h-full relative overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              alt={image.imgAlt}
              src={image.imgURL}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transfor m -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </section>
  );
}
