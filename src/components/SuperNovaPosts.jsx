import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SuperNovaPosts() {
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    fetch("https://theway4business.27lashabab.com/api/posts?id=18")
      .then((res) => res.json())
      .then((data) => {
        const postList = data.data || data || [];
        setPosts(postList);
        if (postList.length > 0) setActive(0);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const next = () => {
    setActive((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  return (
    <section className="min-h-screen py-12 px-4 flex flex-col items-center">
      <h1 className="text-center font-black italic tracking-tighter mb-12 uppercase">
        <span className="text-white text-4xl md:text-5xl block md:inline">
          SUPER NOVA
        </span>{" "}
        <span
          className="text-4xl md:text-5xl"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px #22d3ee",
            textShadow: "0 0 10px rgba(34,211,238, 0.5)",
          }}
        >
          PACKS
        </span>
      </h1>

      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="relative w-full group">
          <div
            className="relative rounded-2xl overflow-hidden border-[3px] border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.3)] bg-black/20"
            style={{
              aspectRatio: "16/9",
              clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
            }}
          >
            {posts.length > 0 && (
              <img
                src={
                  posts[active]?.inner_main_image_url ||
                  "https://via.placeholder.com/800x450"
                }
                alt="Main Post"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8 w-full justify-center">
          <button
            onClick={prev}
            className="text-cyan-400 hover:scale-125 transition-transform"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          <div className="flex gap-3 overflow-hidden p-2">
            {posts.map((post, idx) => {
              const isVisible =
                Math.abs(active - idx) <= 1 ||
                (active === 0 && idx === posts.length - 1) ||
                (active === posts.length - 1 && idx === 0);

              if (!isVisible) return null;

              return (
                <div
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 shadow-lg 
                    ${
                      active === idx
                        ? "border-cyan-400 scale-110 z-10 w-32 h-20 shadow-cyan-500/50"
                        : "border-transparent opacity-60 hover:opacity-100 w-28 h-16"
                    }`}
                >
                  <img
                    src={
                      post?.inner_main_image_url ||
                      "https://via.placeholder.com/150"
                    }
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {active !== idx && (
                    <div className="absolute inset-0 bg-black/40" />
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="text-cyan-400 hover:scale-125 transition-transform"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}