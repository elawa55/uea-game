import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";


const dummyData = [
  
];

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://theway4business.27lashabab.com/api/testimonials",
        );
        const data = await response.json();

        const items = Array.isArray(data) ? data : data.data || [];
        if (items.length === 0) {
          setTestimonials(dummyData);
        } else {
          setTestimonials(items);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTestimonials(dummyData); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  const getCardStyle = (index) => {
    const total = testimonials.length;
    let position = index - currentIndex;
    if (position < -2) position += total;
    if (position > 2) position -= total;

    const baseStyle =
      "transition-all duration-500 absolute rounded-2xl flex flex-col items-center justify-start pt-16 px-6 text-center shadow-lg";

    if (position === 0) {
      return `${baseStyle} w-[320px] h-[400px] bg-[#00695c] z-20 scale-100 opacity-100 translate-x-0`;
    }
    else if (position === 1) {
      return `${baseStyle} w-[320px] h-[400px] bg-[#004d40] z-10 scale-90 opacity-60 translate-x-[280px] blur-[1px]`;
    }
    else if (position === -1) {
      return `${baseStyle} w-[320px] h-[400px] bg-[#004d40] z-10 scale-90 opacity-60 -translate-x-[280px] blur-[1px]`;
    }
    else if (position === 2) {
      return `${baseStyle} w-[320px] h-[400px] bg-[#003830] z-0 scale-75 opacity-30 translate-x-[500px] blur-[2px]`;
    }
    else if (position === -2) {
      return `${baseStyle} w-[320px] h-[400px] bg-[#003830] z-0 scale-75 opacity-30 -translate-x-[500px] blur-[2px]`;
    }
    else {
      return `${baseStyle} hidden`;
    }
  };

  if (loading)
    return <div className="text-white text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 overflow-hidden relative font-sans">
      <div className="mb-16 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-black italic tracking-wider text-white uppercase drop-shadow-lg">
          <span
            className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #22d3ee",
              textShadow: "0 0 10px rgba(34,211,238, 0.5)",
            }}
          >
            Super Nova
          </span>{" "}
          <span className="text-[#00e5ff] drop-shadow-[2px_2px_0px_#000000]">
            Packs
          </span>
        </h1>
      </div>

      <div className="relative w-full max-w-5xl h-[450px] flex items-center justify-center">
        {testimonials.map((item, index) => {
          const isActive = index === currentIndex;

          return (
            <div key={item.id || index} className={getCardStyle(index)}>
              <div
                className={`absolute -top-10 rounded-full border-4 border-[#004d40] overflow-hidden transition-all duration-300 ${isActive ? "w-24 h-24 shadow-[0_0_20px_#00e5ff]" : "w-20 h-20 grayscale opacity-70"}`}
              >
                <img
                  src={
                    item.image_url ||
                    item.avatar ||
                    "https://via.placeholder.com/150"
                  }
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 flex flex-col items-center h-full">
                <h3
                  className={`text-white font-bold text-xl mb-4 ${isActive ? "opacity-100" : "opacity-80"}`}
                >
                  {item.name}
                </h3>
                {isActive && (
                  <div className="text-gray-200 text-sm md:text-base italic leading-relaxed px-2">
                    "{item.description || "No description available."}"
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-6 mt-8 z-30">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full border-2 border-teal-500/50 text-teal-300 hover:bg-teal-500/20 hover:text-white transition-all active:scale-95"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full border-2 border-teal-500/50 text-teal-300 hover:bg-teal-500/20 hover:text-white transition-all active:scale-95"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
