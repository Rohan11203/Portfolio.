import React from 'react';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 relative overflow-hidden rounded-full">
          <Image
            src="/Rohan_Img.jpg" 
            alt="Profile picture"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Rohan.</h2>
          <p className="text-gray-400">@Rohan11203</p>
        </div>
        <div className="ml-auto">
          <span className="text-gray-400 text-2xl">夜</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-semibold text-lg mb-1">
          I build <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-bold">Frontends</span> .
        </p>
        <p className="text-gray-300 text-sm">
          Hello, I'm Rohan! a 21 year old developer based in Mumbai - India.
        </p>
      </div>

      <div className="border-t border-gray-800 pt-3 flex justify-between items-start mt-auto">
        <div className="text-gray-400 italic text-sm leading-tight">
        Yes, I can center a div. <br /> 
        No, I won’t tell you how.
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1 mb-1">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            <span className="text-gray-400 text-xs">Available for work</span>
          </div>
          <div className="text-gray-500 text-xs">
            04/03/2025, 08:42:49 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;