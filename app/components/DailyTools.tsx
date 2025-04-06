import React from "react";
import Image from "next/image";

const ToolIcon = ({ icon, alt }) => (
  <div className="bg-white py-6   rounded-lg flex justify-center items-center transition-transform cursor-pointer hover:scale-105">
    <Image
      src={icon}
      alt={alt}
      width={24}
      height={24}
      className="object-contain"
    />
  </div>
);

const DailyTools = () => {
  const tools = [
    { name: "VS Code", icon: "/vscode.webp" },
    { name: "Neovim", icon: "/gpt.svg" },
    { name: "Sketch", icon: "/claude.png" },
    { name: "Chrome", icon: "/chrome.svg" },
    { name: "Chrome", icon: "/v0.svg" },
  ];

  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <div className="flex flex-col">
        <div className="text-4xl uppercase font-bold">DAILY</div>
        <div className="text-3xl font-medium mb-1">Tool</div>
        <div className="text-4xl font-bold mb-4">STACK.</div>

        <div className="flex gap-4">
          <div className="w-26 flex flex-col gap-2">
            {tools.map((tool, index) => (
              <ToolIcon key={index} icon={tool.icon} alt={tool.name} />
            ))}
          </div>

          <div className="w-3/4 space-y-3">

            <div className="w-full rounded-lg overflow-hidden">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/3qhlB30KknSejmIvZZLjOD?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-gray-400 italic text-sm">
                  "I'm gonna become the King Of Pirates"
                </p>
              </div>

              <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src="/luffy.jpg"
                  alt="Anime character"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTools;
