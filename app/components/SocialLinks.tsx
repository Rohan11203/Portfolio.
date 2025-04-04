// components/SocialLinks.jsx
import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Mail, Disc, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Rohan11203",
      icon: <Github className="w-5 h-5" />,
      bgColor: "bg-black"
    },
    {
      name: "Twitter",
      url: "https://x.com/RoHanShikh43138",
      icon: <Twitter className="w-5 h-5" />,
      bgColor: "bg-black" 
    },
    {
      name: "Email",
      url: "mailto:rohanshikhare410@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      bgColor: "bg-black"
    },
    {
      name: "Discord",
      url: "https://discord.com/",
      icon: <Disc className="w-5 h-5" />,
      bgColor: "bg-black"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohan-shikhare-23195225a/",
      icon: <Linkedin className="w-5 h-5" />,
      bgColor: "bg-black"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {links.map((link, index) => (
        <Link 
          href={link.url} 
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.bgColor} text-white rounded-xl py-4 flex items-center justify-center transition-transform hover:scale-105 border`}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;