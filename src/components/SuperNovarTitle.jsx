import React, { useEffect, useState } from "react";

export default function SuperPostSection() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://theway4business.27lashabab.com/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data.data?.[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!post) {
    return null;
  }

  return (
    <section className="min-h-screen bg-linear-to-br  px-6 py-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="grid grid-cols-2 gap-3 max-w-xl">
         
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-64">
              <img
                src={post.inner_main_image_url}
                alt="post"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-64">
              <img
                src={post.inner_main_image_url}
                alt="post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="flex flex-col gap mt-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-90">
              <img
                src={post.inner_main_image_url}
                alt="post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-white">
          <div className="inline-block bg-teal-600/40 px-8 py-3 rounded-full backdrop-blur-sm mb-6">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
              Super title
            </h2>
          </div>

          <div className="space-y-2 mb-6">
            <p className="text-white/85 leading-relaxed text-sm">
              Office ipsum you must be muted. Uat market submit market box.
            </p>
            <p className="text-white/85 leading-relaxed text-sm">
              Performance shoulder your squad shoot reinvent unpack crank die
              moving.
            </p>
            <p className="text-white/85 leading-relaxed text-sm">Principles</p>
          </div>

          <div className="space-y-2 mb-10">
            <p className="text-white/85 leading-relaxed text-sm">
              Office ipsum you must be muted. Uat market submit market box.
            </p>
            <p className="text-white/85 leading-relaxed text-sm">
              Performance shoulder your squad shoot reinvent unpack crank die
              moving.
            </p>
            <p className="text-white/85 leading-relaxed text-sm">Principles</p>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <span className="block text-xs text-white/60 uppercase tracking-widest mb-1">
                STARTING FROM
              </span>
              <span className="text-3xl font-bold">2000 AED</span>
            </div>

            <button className="px-8 py-2.5 rounded-lg bg-teal-700/80 hover:bg-teal-600 transition-all duration-300 shadow-lg font-medium border border-teal-500/40 text-sm">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
