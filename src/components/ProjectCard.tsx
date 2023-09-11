"use client";
import type { ProjectType } from "../../types";
import Cta from "./Cta";

export default function ProjectCard(props: { project: ProjectType }) {
  const { project } = props
  return (
    <>
      <div className="project-card">
        <div className="project-card_thumbnail-container">
          <img className="project-card_thumbnail" src={project.thumbnail.image} alt={project.thumbnail.alt} />
        </div>
        <div className="project-card_body">
          <h4 className="project-card_title">{project.title}</h4>
          <p className="project-card_description">
            {project.description}
          </p>
        </div>
        <div className="project-card_tech-section">
          {project.techList.map((item) => (
            <span key={item} className="project-card_bubble">{item}</span>
          ))}
        </div>
        <span className="divider"></span>
        <div className="project-card_cta-wrapper">
          <Cta text='Github Repo' href={project.repoLink} isLink />
          <Cta text='Live demo' href={project.projectLink} isLink />
        </div>
      </div>
      <style jsx global>
        {`
          .divider {
            display: block;
            height: 1px;
            width: 100%;
            margin-top: 8px;
            margin-bottom: 8px;
            background: #000;
          }

          .project-card {
            font-family: 'Open Sans', sans-serif;
            display: inline-block;
            position: relative;
            width: 310px;
            max-width: 68%;
            border-radius: 10px;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            background: #e0e0e0;
            margin: 30px;
            padding: 20px;
            transition: .2s ease-in-out;
          }

          .project-card:hover {
            box-shadow:  7px 7px 14px #868686, -7px -7px 14px #ffffff;
          }

          .project-card_title {
            color: #444;
            font-weight: 600;
            font-size: 22px;
            line-height: 2;
            margin: 12px 0 4px 0;
          }

          .project-card_description {
            margin: 4px 0 12px 0;
            font-size: 14px;
            line-height: 1.7;
          }
          
          .project-card_thumbnail-container {
            width: 100%;
            height: 220px;
            position: relative;
            overflow: hidden;
          }
          .project-card_thumbnail {
            width: 100%;
            height: 100%;
            border-radius: 15px;
            object-fit: cover;
            transition: .2s ease-in-out;
          }

          .project-card_thumbnail:hover {
            -webkit-transform: translateX(-50%) translateY(-50%) scale(1.6); 
            -moz-transform: translateX(-50%) translateY(-50%) scale(1.6);
            -o-transform: translateX(-50%) translateY(-50%) scale(1.6);
            transform: translateX(-50%) translateY(-50%) scale(1.6);
        }
        
        .project-card_thumbnail {
          -webkit-transition: all .4s ease-in-out;
          -moz-transition: all .4s ease-in-out;
          -o-transition: all .4s ease-in-out;
          -ms-transition: all .4s ease-in-out;
        }
        
        .project-card_thumbnail {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translateX(-50%) translateY(-50%); 
            -moz-transform: translateX(-50%) translateY(-50%);
            -o-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
        }

          .project-card_cta-wrapper {
            display: flex;
            justify-content: space-between;
          }

          .project-card_tech-section {
            display: flex;
            flex-wrap: wrap;
          }

          .project-card_bubble {
            padding: 10px;
            margin: 4px;
            border-radius: 30px;
            border: 1px solid black;
            font-size: .7em;
          }
        `}
      </style>
    </>
  )
}
