"use client";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {

  return (
    <main className="main">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ocs1szt.css" />
      </Head>

      <Hero />
      <div>
        
      </div>
      <Projects />

      <style jsx global>{`
        @font-face {
          font-family: Inter;
          src: url(Inter.ttf);
        }
      `}</style>
    </main>
  )
}
