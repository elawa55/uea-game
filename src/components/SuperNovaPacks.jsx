import React, { useEffect, useState } from "react";

export default function SuperNovaPacks() {
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    fetch("https://theway4business.27lashabab.com/api/packages")
      .then((res) => res.json())
      .then((data) => {
        const target = data.data?.find((p) => p.id === 22);
        setPkg(target);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  if (!pkg) return null;

  const cards = [pkg, pkg, pkg];

  return (
    <section className="min-h-screen bg-transparent py-24 px-6">
      <h1
        className="text-center text-white text-5xl md:text-6xl font-black tracking-widest mb-20"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #22d3ee",
          textShadow: "0 0 10px rgba(34,211,238, 0.5)",
        }}>
        SUPER NOVA PACKS
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((item, index) => {
          const isMiddle = index === 1;

          return (
            <div
              key={index}
              className={`relative p-2px ${
                isMiddle
                  ? "bg-linear-to-br from-yellow-400 to-yellow-600"
                  : "bg-teal-300"
              }`}
              style={{
                clipPath:
                  "polygon(40px 0,100% 0,100% calc(100% - 40px),calc(100% - 40px) 100%,0 100%,0 40px)",
              }}
            >
              <div
                className="h-full bg-linear-to-br from-teal-800 to-teal-900 p-8"
                style={{
                  clipPath:
                    "polygon(40px 0,100% 0,100% calc(100% - 40px),calc(100% - 40px) 100%,0 100%,0 40px)",
                }}
              >
                
                <div className="relative aspect-square mb-6">
                  <img
                    src={item.main_image_url}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-white text-3xl font-bold text-center mb-4">
                  {item.title}
                </h2>

                <p className="text-white/70 text-sm text-center leading-relaxed mb-10">
                  {item.short_description}
                </p>

                <div className="flex justify-between items-end">
                  <button className="px-6 py-3 border border-white/40 text-white rounded-lg hover:bg-white/10 transition">
                    Button
                  </button>

                  <div className="text-right">
                    <span className="block text-xs text-white/60 uppercase mb-1">
                      Starting from
                    </span>
                    <span className="text-white text-2xl font-bold">
                      {item.price} AED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
