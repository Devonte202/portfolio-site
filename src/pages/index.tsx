"use client";
import { getHeroSection, getProjects } from "../../sanity/sanity.query";
import type { HeroType, ProjectType } from "../../types";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Head from "next/head";

export default function Home() {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const [heroContent, setHeroContent] = useState<HeroType>();

  const renderProjects = async () => {
    const projects: ProjectType[] = await getProjects();
    setProjectList(projects)
  }

  const renderHeroSection = async () => {
    const hero: HeroType[] = await getHeroSection();
    setHeroContent(hero[0])
  }

  useEffect(() => {
    renderHeroSection()
    renderProjects()
  }, [])

  return (
    <main className="main">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ocs1szt.css" />
      </Head>
      <div className="hero">
        <div className="hero_text-content">
          <h1 className="hero_heading">{heroContent?.heading}</h1>
          <h3 className="hero_subheading">{heroContent?.subheading}</h3>
          <p className="hero_bio">{heroContent?.bio}</p>
        </div>
        <img className="hero_profile-image" src={heroContent?.backgroundImage.image} />
      </div>
      {projectList.map((project: ProjectType) => (<ProjectCard key={project._id} project={project}/>))}
      <style jsx global>{`
        body {
          margin: 0;
        }
        .hero {
          width: 100vw;
          display: flex;
          justify-content: space-evenly;
          background: black;
        }
        .hero_profile-image {
          height: 100vh;
        }
        .hero_text-content {
          margin-top: 40px;
        }
        .hero_heading, .hero_subheading, .hero_bio {
          color: white;
          font-size: 22px;
          font-family: "myriad-pro", sans-serif;
          font-style: normal;
          font-weight: 700;
          line-height: 1.2em;
          letter-spacing: 0;
          text-rendering: geometricPrecision;
          text-transform: none;
          text-decoration: none;
          -webkit-font-smoothing: antialiased;
        }
        .hero_heading {
          font-size: 56px;
          line-height: 1em;
        }
        .hero_subheading {
          font-size: 40px;
        }

      `}</style>
    </main>
  )
}
