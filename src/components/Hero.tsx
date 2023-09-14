import React, {useEffect, useState} from "react";
import { TypeAnimation } from 'react-type-animation';
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
        <TypeAnimation
          sequence={[
            'A Software Engineer',
            1000,
            'A Digital Creator',
            1000,
            'A YouTuber',
            1000,
            'An Adventurer',
            1000
          ]}
          wrapper="h3"
          speed={10}
          style={{ fontSize: '32px', padding: '15px', color: 'blue', margin: '0' }}
          repeat={Infinity}
        />
        <p className="hero_bio">{heroContent?.bio}</p>
      </div>
      <div className="hero_image-wrapper">
        <img className="hero_profile-image" src={heroContent?.backgroundImage.image} />
      </div>

      <style jsx global>{`
        @keyframes hover {
          from {
            box-shadow: 0 5px 7px 7px #7a7a7a;
            transform: translateY(0);
          }
        
          to {
            box-shadow: 0 11px 14px 14px #7a7a7a;
            transform: translateY(-10px);
          }
        }

        .hero {
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          font-family: Inter;
        }

        .hero_image-wrapper {
          width: 200px;
          height: 200px;
          border-radius: 100%;
          overflow: hidden;
          animation: hover 2s linear infinite alternate;
        }

        .hero_profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero_text-content {
          display: flex;
          flex-direction: column;
          text-align: center;
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
          color: #000;
          text-rendering: geometricPrecision;
          text-transform: none;
          text-decoration: none;
          -webkit-font-smoothing: antialiased;
        }
        .hero_heading {
          font-size: 62px;
        }
        .hero_subheading {
          font-size: 28px;
        }

        @media (min-width: 744px) {
          .hero {
            flex-direction: row;
          }
          .hero_image-wrapper {
            width: 320px;
            height: 320px;
          }

          .hero_text-content {
            text-align: left;
            width: 40%;
          }
        }

        @media (min-width: 1080px) {
          .hero_heading {
            font-size: 80px;
          }
        }
      `}
      </style>
    </div>
  )
}