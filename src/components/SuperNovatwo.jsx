import React, { useEffect, useState } from "react";

export default function SuperNovatwo({ onReady }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://theway4business.27lashabab.com/api/packages")
      .then((res) => res.json())
      .then((data) => {
        const result = Array.isArray(data.data) ? data.data : [data.data];
        setPosts(result.slice(0, 2));
        if (onReady) onReady(); 
      })
      .catch((err) => {
        console.error(err);
        if (onReady) onReady();
      });
  }, [onReady]);

  if (!posts.length) return null;

  return (
    <section className="py-24 px-6">
      <h2
        className="text-center text-white text-5xl md:text-6xl font-black italic tracking-widest mb-16 uppercase"
        style={{
          color: "white",
          textShadow: "0 0 10px rgba(255,255,255,0.3)",
        }}
      >
        SUPER NOVA{" "}
        <span
          style={{
            color: "transparent",
            WebkitTextStroke: "2px #22d3ee",
            textShadow: "0 0 10px rgba(34,211,238, 0.5)",
          }}
        >
          PACKS
        </span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-cyan-400/30 bg-[#004d4d]/30 backdrop-blur-sm shadow-2xl transition-transform hover:scale-[1.01]"
          >
            <div className="h-72 overflow-hidden p-4">
              <img
                src={
                  post.main_image_url || "https://via.placeholder.com/600x400"
                }
                alt={post.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                Super title
              </h3>

              <p className="text-white/70 leading-relaxed mb-10 text-lg font-light line-clamp-4">
                "The Primordian threat has pushed civilization to the brink. The
                Primordian threat has pushed civilization to the brink. The
                Primordian threat has pushed civilization to the brink. The
                Primordian threat has pushed civilization to the brink."
              </p>
              <div className="flex justify-end">
                <button className="relative px-10 py-3 rounded-xl border border-cyan-400/50 text-white font-medium bg-[#003B46]/40 hover:bg-cyan-400/20 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:translate-y-1 active:shadow-none">
                  Button
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
