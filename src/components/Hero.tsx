import React, {useEffect, useState} from "react";
import { getHeroSection } from "../../sanity/sanity.query";
import type { HeroType } from "../../types";

export default function Hero() {
  const [heroContent, setHeroContent] = useState<HeroType>();

  const renderHeroSection = async () => {
    const hero: HeroType[] = await getHeroSection();
    setHeroContent(hero[0])
  }

  useEffect(() => {
    renderHeroSection()
  }, [])
  
  return (
    <div className="hero">
      <div className="hero_text-content">
        <h1 className="hero_heading">{heroContent?.heading}</h1>
        <h3 className="hero_subheading">{heroContent?.subheading}</h3>
        <p className="hero_bio">{heroContent?.bio}</p>
      </div>
      <img className="hero_profile-image" src={heroContent?.backgroundImage.image} />

      <style jsx global>{`
        .hero {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .hero_profile-image {
          width: 100%;
          object-fit: cover;
        }
        .hero_text-content {
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        .hero_heading, .hero_subheading, .hero_bio {
          padding: 15px;
          margin: 0;
          font-size: 15px;
          font-family: Inter;
          font-style: normal;
          font-weight: 700;
          line-height: 1.2em;
          letter-spacing: 0;
          color: #444;
          text-rendering: geometricPrecision;
          text-transform: none;
          text-decoration: none;
          -webkit-font-smoothing: antialiased;
        }
        .hero_heading {
          font-size: 62px;
        }
        .hero_subheading {
          font-size: 20px;
        }

        @media (min-width: 744px) {
          .hero {
            flex-direction: row;
            padding: 80px;
          }

          .hero_text-content {
            width: 40%;
          }

          .hero_profile-image {
            width: 60%;
          }
        }

        @media (min-width: 1080px) {
          .hero_heading {
            font-size: 72px;
          }
        }
      `}
      </style>
    </div>
  )
}