// components/ProjectCard.jsx
import React from 'react';
import Link from 'next/link';

const Projectss = () => {
  return (
    <Link href="/projects" className="block transition-transform hover:scale-105">
      <div className="bg-purple-200 p-6 rounded-lg h-full flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="bg-purple-800 rounded-full p-3">
            <svg 
              className="w-8 h-8 text-purple-200" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 15a3 3 0 100-6 3 3 0 000 6z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M18.7273 15C18.2236 16.151 17.8231 17 17 17H7C6.17691 17 5.77637 16.151 5.27273 15C4.76909 13.849 4 11.5 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5 19.2309 13.849 18.7273 15Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-right text-purple-800 text-2xl font-bold">
            工芸
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-black text-purple-900">
            PROJECT<br />
            SSS
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Projectss;