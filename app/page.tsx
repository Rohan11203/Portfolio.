"use client"
import TechStack from "@/app/components//TechStack"
import ProfileCard from "@/app/components/ProfileCard"
import SocialLinks  from "@/app/components/SocialLinks"
import DailyTools from "@/app/components/DailyTools"
import Head from "next/head";
import Projectss from "./components/Projectss";
export default function Home() {
  return (
    <div className="bg-zinc-950  min-h-screen container">
      <Head>
        <title>Rohan - Frontend Developer</title>
        <meta name="description" content="Portfolio of Rohan, a Frontend developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto w-6xl p-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 h-full">
            <TechStack />
          </div>
          
          <div className="col-span-12 md:col-span-5 space-y-4">
            <ProfileCard />
            <DailyTools />
          </div>
          
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
