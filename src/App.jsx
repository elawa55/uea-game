import React, { useState, useEffect } from "react";
import Navpar from "./components/Navpar";
import SuperNovaPacks from "./components/SuperNovaPacks";
import SuperNovarTitle from "./components/SuperNovarTitle";
import TikTokVideos from "./components/TikTokVideos";
import SuperNovaPosts from "./components/SuperNovaPosts";
import SuperNovaVideos from "./components/SuperNovaVideos";
import SuperNovatwo from "./components/SuperNovatwo";
import SuperNovaPackages from "./components/SuperNovaPackages";
import TestimonialSlider from "./components/TestimonialSlider";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-r from-[#003B46] to-[#075e54]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span className="text-white text-xl tracking-widest">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-serif bg-linear-to-r from-[#003B46] to-[#075e54]">
      <Navpar />
      <SuperNovaPacks />
      <SuperNovarTitle />
      <TikTokVideos />
      <SuperNovaPosts />
      <SuperNovaVideos />
      <SuperNovatwo />
      <SuperNovaPackages />
      <TestimonialSlider />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;