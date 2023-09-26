"use client";
import dynamic from "next/dynamic";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
const Model = dynamic(() => import("../components/Model"), { ssr: false });
import Head from "next/head";

export default function Home() {

  return (
    <main className="main">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ocs1szt.css" />
      </Head>

      <Hero />
      <div className="skills-section">
        <Model />
      </div>
      <Projects />

      <style jsx global>{`
        body {
          margin: 0;
          padding 0;
        }

        @font-face {
          font-family: Inter;
          src: url(Inter.ttf);
        }

        .skills-section {
          background-color: #d3d3d3;
        }
      `}</style>
    </main>
  )
}
