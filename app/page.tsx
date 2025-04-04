"use client"
import Image from "next/image";
import TechStack from "@/app/components//TechStack"
import ProfileCard from "@/app/components/ProfileCard"
import SocialLinks  from "@/app/components/SocialLinks"
import ProjectCard from "@/app/components/ProjectCard"
import DailyTools from "@/app/components/DailyTools"
import Head from "next/head";
import Projectss from "./components/Projectss";
export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Head>
        <title>Shawn - Backend Developer</title>
        <meta name="description" content="Portfolio of Shawn, a backend developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Left column - Tech Stack */}
          <div className="col-span-12 md:col-span-4 h-full">
            <TechStack />
          </div>
          
          {/* Middle column - Profile and Daily Tools */}
          <div className="col-span-12 md:col-span-5 space-y-4">
            <ProfileCard />
            <DailyTools />
          </div>
          
          {/* Right column - Social Links and Project */}
          <div className="col-span-12 md:col-span-3 space-y-4">
            <div className="bg-black p-4 rounded-lg">
              <div className="text-4xl font-bold text-white mb-2">
                LINKS.
              </div>
              <SocialLinks />
            </div>
            <Projectss />
          </div>
        </div>
      </main>
      
      <style jsx global>{`
        html, body {
          background-color: rgb(9, 9, 11);
          color: white;
        }
      `}</style>
    </div>
  );
}
