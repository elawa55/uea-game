import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Box } from "lucide-react";

const FooterSection = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(
          "https://theway4business.27lashabab.com/api/settings",
        );
        const data = await response.json();

        setSettings(data.data || data);
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        /**tmaaaaaaaaaaaaaaaaaam */
      }
    };
    fetchSettings();
  }, []);


  const logos = [
    {
      name: "Intel",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    },
    {
      name: "HP",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    },
    {
      name: "AMD",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg",
    },
    {
      name: "Amazon",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "NVIDIA",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    },
    {
      name: "United",
      url: "https://upload.wikimedia.org/wikipedia/en/e/e0/United_Airlines_Logo.svg",
    },
  ];

  return (
    <footer className="w-full bg-[#003830] font-sans">

      <div className="py-12 px-4 border-b border-teal-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.url}
              alt={logo.name}
              className="h-8 md:h-12 object-contain brightness-0 invert"
            />
          ))}
        </div>
      </div>
      <div className="bg-[#00e5ff] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6 md:gap-0">
          <div className="flex items-center">
            {settings?.logo ? (
              <img
                src={settings.logo}
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            ) : (
              <div className="bg-black p-2 rounded-lg">
                <Box className="text-[#00e5ff]" size={24} />
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:flex md:gap-12 text-[13px] font-bold text-black uppercase tracking-tighter">
            <div className="flex flex-col md:items-start">
              <span>Serves</span>
              <span className="mt-1 opacity-70">About us</span>
            </div>
            <div className="flex flex-col md:items-start">
              <span>Gallery</span>
              <span className="mt-1 opacity-70">Previcy</span>
            </div>
            <div className="flex flex-col md:items-start">
              <span>Serves</span>
              <span className="mt-1 opacity-70">About us</span>
            </div>
            <div className="flex flex-col md:items-start">
              <span>Serves</span>
              <span className="mt-1 opacity-70">About us</span>
            </div>
          </div>


          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-black text-black italic uppercase">
              Join Us
            </h2>
            <div className="flex gap-3">
              <SocialIcon
                link={settings?.facebook}
                icon={<Facebook size={18} fill="black" />}
              />
              <SocialIcon
                link={settings?.instagram}
                icon={<Instagram size={18} />}
              />
              <SocialIcon
                link={settings?.twitter}
                icon={<Twitter size={18} fill="black" />}
              />
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                <span className="text-[10px] font-bold">Tik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, link }) => (
  <a
    href={link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer"
  >
    {icon}
  </a>
);

export default FooterSection;
