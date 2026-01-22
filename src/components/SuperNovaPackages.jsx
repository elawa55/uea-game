  import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

const SuperNovaPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('https://theway4business.27lashabab.com/api/packages');
        const data = await response.json();
        const items = Array.isArray(data) ? data : (data.data || []);
        setPackages(items);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setPackages([1, 2, 3, 4, 5].map(i => ({
            id: i,
            title: "Super title",
            description: "The Primordian threat has pushed civilization to the brink.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-sans overflow-hidden relative">

      <div className="relative mb-12 text-center">
        
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter relative z-10 italic">
          SUPER NOVA{" "}
          <span
            className="text-transparent"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #22d3ee",
              textShadow: "0 0 10px rgba(34,211,238, 0.5)",
            }}
          >
            PACKS
          </span>
        </h1>
      </div>
      <div className="relative w-full max-w-7xl">
        {loading && (
          <div className="text-white text-center">Loading Data...</div>
        )}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {!loading &&
            packages.map((pkg, index) => (
              <div
                key={pkg.id || index}
                className="flex-shrink-0 w-[320px] md:w-[380px] snap-center rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-300 group"
              >
                <div className="h-56 w-full relative">
                  <img
                    src={
                      pkg.main_image_url ||
                      "https://via.placeholder.com/400x300"
                    }
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d4d] to-transparent opacity-80"></div>
                </div>
                <div className="bg-[#004d4d] p-6 text-center h-full border-t border-teal-600/30">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {pkg.title || "Super title"}
                  </h3>
                  <p className="text-teal-100 text-sm leading-relaxed opacity-80">
                    {pkg.full_description ||
                      "The Primordian threat has pushed civilization to the brink."}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center gap-8 mt-8">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 focus:outline-none"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            className="p-3 rounded-full border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 focus:outline-none"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SuperNovaPackages;