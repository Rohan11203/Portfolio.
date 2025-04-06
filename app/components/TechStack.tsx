"use client";
import React from "react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend:",
      technologies: [
        "React",
        "Nextjs",
        "Shadcn",
        "Tailwindcss",
        "Framer-Motion",
        "Recoil",
      ],
    },
    {
      title: "Backend:",
      technologies: ["Nodejs", "Expressjs", "NPM", "WebSockets"],
    },
    {
      title: "Db & Services:",
      technologies: ["Prisma ORM", "Postman", "PostgreSQL", "MongoDB"],
    },
  ];

  return (
    <div className="bg-black text-white  p-6 rounded-lg w-[350px] h-[500px]">
      <div className="flex items-center mb-6">
        <div className="text-4xl font-bold">
          <div className="flex gap-2">
            <span className="text-gray-400">{"{"}</span>
            <span className="text-gray-400">{"}"}</span>
          </div>
          <h1 className="mt-2">
            TECH
            <br />
            STACK
          </h1>
        </div>
      </div>

      <div className="space-y-6 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
        {techCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold mb-2">{category.title}</h2>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-black border border-gray-800 py-1 rounded-md text-sm"
                >
                  <span className="border p-1 rounded-md px-2 border-gray-900">{tech}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default TechStack;
