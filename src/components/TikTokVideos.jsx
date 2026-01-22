import React, { useEffect, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function SuperNovaVideos() {
  const [videos, setVideos] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    fetch("https://theway4business.27lashabab.com/api/tiktok-videos?id=15")
      .then((res) => res.json())
      .then((data) => {
        const videoList = data.data || data || [];
        setVideos(videoList);
        setActive(Math.floor(videoList.length / 2));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const prev = () => {
    setActive((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index) => {
    if (index === active)
      return "scale-110 z-20 opacity-100 shadow-[0_0_30px_rgba(34,211,238,0.6)] border-2 border-cyan-400";
    if (index === active - 1 || index === active + 1)
      return "scale-90 z-10 opacity-60 grayscale-[30%]";
    if (index === active - 2 || index === active + 2)
      return "scale-75 z-0 opacity-40 grayscale-[80%]";
    return "scale-50 opacity-0 hidden";
  };

  return (
    <section className="min-h-screen  py-12 px-4 flex flex-col items-center justify-center overflow-hidden">
      <h1
        className="text-center text-5xl md:text-6xl font-black italic tracking-widest mb-16 uppercase relative"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #22d3ee", 
          textShadow: "0 0 10px rgba(34,211,238, 0.5)",
        }}
      >
        <span className="text-white" style={{ WebkitTextStroke: "0px" }}>
          SUPER NOVA
        </span>{" "}
        <span style={{ color: "transparent", WebkitTextStroke: "1px #22d3ee" }}>
          PACKS
        </span>
      </h1>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 md:gap-6 h-500px w-full perspective-1000">
          {videos.map((video, index) => {
            const distance = Math.abs(active - index);
            if (distance > 2) return null;

            return (
              <div
                key={video.id || index}
                className={`relative transition-all duration-500 ease-out rounded-2xl overflow-hidden cursor-pointer ${getCardStyle(index)}`}
                style={{
                  width: index === active ? "280px" : "220px",
                  height: index === active ? "420px" : "350px",
                  flexShrink: 0,
                }}
                onClick={() => setActive(index)}
              >
                <img
                  src={
                    video.thumbnail_url ||
                    video.video_link ||
                    "https://via.placeholder.com/300x500"
                  }
                  alt="video thumbnail"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${index === active ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group hover:scale-110 transition-transform">
                    <Play className="text-white fill-white w-6 h-6 ml-1" />
                  </div>
                </div>

                {index === active && (
                  <div className="absolute bottom-6 left-4 right-4">
                    <p className="text-white font-bold text-lg drop-shadow-md truncate">
                      {video.title || "API_Not_Come"}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-8 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-[#22d3ee] text-[#22d3ee] flex items-center justify-center hover:bg-[#22d3ee] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-[#22d3ee] text-[#22d3ee] flex items-center justify-center hover:bg-[#22d3ee] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}